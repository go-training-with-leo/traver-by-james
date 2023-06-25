import React from 'react';
import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import {
  KeyboardView,
  WrapperContent,
  Text,
  Icons,
  FlexView,
  useAppSelector,
  useMergeState,
  SearchBar,
} from '@/components';
import { price, renderDate } from '@/utils/helpers';

import style from './style';

const MyTrip = () => {
  const { t } = useTranslation('tab');
  const trips = useAppSelector(state => state.user.booked);
  const [state, setState] = useMergeState({ searchTrips: trips });

  const renderDateTime = (startDate: Date, endDate: Date) => {
    return `${renderDate(startDate)} - ${renderDate(endDate)}`;
  };

  const handleSearch = (value: string) => {
    setState({ searchTrips: trips.filter(trip => trip.name.includes(value)) });
  };

  return (
    <KeyboardView>
      <WrapperContent>
        <Text title={t('trip')} style={style.title} />
        <SearchBar onSearch={handleSearch} />
        <ScrollView>
          {state.searchTrips.map((trip, index) => (
            <View key={index} style={style.tripContainer}>
              <Text title={trip.name} style={style.tripName} />
              <Text title={price(trip.price)} style={style.price} />
              <View style={style.dateContainer}>
                <FlexView>
                  <Icons name="calendar" />
                  <Text
                    title={renderDateTime(trip.startDate, trip.endDate)}
                    style={style.date}
                  />
                </FlexView>
              </View>
            </View>
          ))}
        </ScrollView>
      </WrapperContent>
    </KeyboardView>
  );
};

export default MyTrip;

import React, { useEffect } from 'react';
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
import { renderPrice, renderDate } from '@/utils/helpers';

import style from './style';

export const MyTrip = () => {
  const { t } = useTranslation('translation');
  const trips = useAppSelector(state => state.user.booked);
  const [state, setState] = useMergeState({
    searchTrips: trips,
    searchText: '',
  });

  const renderDateTime = (startDate: Date, endDate: Date) => {
    return `${renderDate(startDate)} - ${renderDate(endDate)}`;
  };

  const handleSearch = (value: string) => {
    setState({
      searchTrips: trips.filter(trip => trip.name.includes(value)),
      searchText: value,
    });
  };

  useEffect(() => {
    handleSearch(state.searchText);
  }, [trips]);

  return (
    <KeyboardView>
      <WrapperContent>
        <Text title={t('trip')} style={style.title} />
        <SearchBar onSearch={handleSearch} />
        <ScrollView>
          {state.searchTrips.map((trip, index) => (
            <View key={index} style={style.tripContainer}>
              <Text title={trip.name} style={style.tripName} />
              <Text title={renderPrice(trip.price)} style={style.price} />
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



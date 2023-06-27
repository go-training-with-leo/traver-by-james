import { TouchableOpacity, View, Text as RNText } from 'react-native';
import React, { useCallback, useMemo } from 'react';
import {
  Avatar,
  FlexView,
  Icons,
  Switch,
  Text,
  WrapperContent,
  useAppSelector,
  useMergeState,
  Modal,
  Button,
  useAppDispatch,
} from '@/components';
import { useTranslation } from 'react-i18next';
import style from './style';
import { useNavigation } from '@react-navigation/native';
import { colors } from '@/utils/theme';
import { logOut } from '@/global/redux';

export const Profile = () => {
  const user = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');
  const [state, setState] = useMergeState({
    switch: false,
    modalVisible: false,
  });
  const navigation = useNavigation();

  const menu = useMemo(() => {
    return [
      {
        title: t('menu.info'),
        icon: <Icons name="userCircle" />,
        onPress: () => null,
      },
      {
        title: t('menu.noti'),
        icon: (
          <View>
            <Icons name="notification" />
            <View style={style.notiBadge} />
          </View>
        ),
        onPress: () => navigation.navigate('Notification'),
      },
      {
        title: t('menu.faq'),
        icon: <Icons name="message" />,
      },
      {
        title: t('menu.mode'),
        icon: (
          <Switch
            value={state.switch}
            onChange={() => setState({ switch: !state.switch })}
          />
        ),
        onPress: () => null,
      },
      {
        title: t('menu.language'),
        icon: <Icons name="global" />,
        onPress: () => null,
      },
      {
        title: t('menu.signOut'),
        onPress: () => setState({ modalVisible: true }),
      },
    ];
  }, [state.switch]);

  const handleCloseModal = () => {
    setState({ modalVisible: false });
  };

  const handleSignOut = useCallback(() => {
    try {
      handleCloseModal();
      dispatch(logOut());
    } catch (err) {
      throw new Error(err);
    }
  }, []);

  return (
    <WrapperContent>
      <Text title={t('title')} style={style.title} />
      <FlexView style={style.user}>
        <Avatar />
        <View>
          <Text
            title={t('welcome', { name: user.displayName })}
            style={style.greeting}
          />
          <Text title={t('location')} style={style.location} />
        </View>
      </FlexView>
      {menu.map((item, index) => (
        <TouchableOpacity key={index} onPress={item.onPress}>
          <FlexView style={style.menu}>
            <View style={style.menuTitle}>
              <Text title={item.title} />
            </View>
            <View style={style.menuIcon}>{item.icon}</View>
          </FlexView>
        </TouchableOpacity>
      ))}
      <Button
        title={t('signOut')}
        onPress={handleSignOut}
        backgroundColor={colors.white}
      />
      <Modal visible={state.modalVisible} onClose={handleCloseModal}>
        <TouchableOpacity
          activeOpacity={1}
          style={style.modal}
          onPress={() => null}>
          <View style={style.modalContent}>
            <Text title={t('signOut')} style={style.signOut} />
            <RNText style={style.textContainer}>
              <Text
                title="Are you sure you want to log out of"
                style={style.message}
              />
              <Text title={` ${user.displayName}'s `} style={style.name} />
              <Text title="account?" style={style.message} />
            </RNText>
            <FlexView style={style.modalAction}>
              <View style={style.button}>
                <Button
                  title={t('signOut')}
                  onPress={handleSignOut}
                  backgroundColor={colors.white}
                />
              </View>
              <View style={style.button}>
                <Button title={t('cancel')} onPress={handleCloseModal} />
              </View>
            </FlexView>
          </View>
        </TouchableOpacity>
      </Modal>
    </WrapperContent>
  );
};

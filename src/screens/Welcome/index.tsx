import React, { ReactElement, useCallback } from 'react';
import { ImageBackground, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Footer,
  Icons,
  LayoutContent,
  Text,
  Button,
  useMergeState,
  Input,
} from '@/components';
import { useTranslation } from '@/config/i18n';
import { WelcomeProgressBar } from '@/utils/enums';
import ProgressBar from './component/ProgressBar';
import style from './style';

export const Welcome = () => {
  const { t } = useTranslation('welcome');
  const navigation = useNavigation();

  const [state, setState] = useMergeState({
    currentStep: 1,
    total: 3,
    screenName: ['firstScreen', 'secondScreen', 'thirdScreen'],
  });

  const renderProgressBar = () => {
    let progressBar: ReactElement[] = [];
    for (let i = 1; i <= state.total; i++) {
      if (i === state.currentStep) {
        progressBar.push(<ProgressBar status={WelcomeProgressBar.CURRENT} />);
      }
      if (i < state.currentStep) {
        progressBar.push(<ProgressBar status={WelcomeProgressBar.PASSED} />);
      }
      if (i > state.currentStep) {
        progressBar.push(<ProgressBar status={WelcomeProgressBar.FUTURE} />);
      }
    }
    return progressBar;
  };

  const onPress = useCallback(() => {
    if (state.currentStep + 1 <= state.total) {
      setState({
        currentStep: state.currentStep + 1,
      });
    } else navigation.navigate('Login');
  }, [state.currentStep]);

  return (
    <ImageBackground
      source={{
        uri: 'https://fastly.picsum.photos/id/84/1280/848.jpg?hmac=YFRYDI4UsfbeTzI8ZakNOR98wVU7a-9a2tGF542539s',
      }}
      resizeMode="cover"
      style={style.root}>
      <LayoutContent isTransparent={true}>
        <Icons name="whiteLogo" height={20} style={style.icon} />
        <Text
          title={t(`${state.screenName[state.currentStep - 1]}.title`)}
          style={style.title}
        />
        <Text
          title={t(`${state.screenName[state.currentStep - 1]}.subTitle`)}
          style={style.subTitle}
        />
        <View style={style.progressBar}>{renderProgressBar()}</View>
        <Footer>
          <Button title={t('button.title')} onPress={onPress} />
        </Footer>
      </LayoutContent>
    </ImageBackground>
  );
};

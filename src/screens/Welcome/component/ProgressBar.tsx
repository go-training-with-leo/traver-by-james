import React, { useMemo } from 'react';
import { View } from 'react-native';
import { WelcomeProgressBar } from '@/utils/enums';
import { colors } from '@/utils/theme';


interface IProgressBar {
  status: WelcomeProgressBar ;
  key?: React.Key
}

const ProgressBar = ({ status }:IProgressBar) => {
  const width = useMemo(()=>{
   switch (status) {
     case WelcomeProgressBar.PASSED:
       return '100%';
     case WelcomeProgressBar.CURRENT:
       return '50%';
     case WelcomeProgressBar.FUTURE:
       return '0%';
   }
  },[status])

  return (
    <View
      style={{
        flex: 1,
        height: 4,
        backgroundColor: '#767676',
        borderRadius: 10,
        zIndex: -1,
      }}>
      <View
        style={{
          height: 4,
          width: width,
          backgroundColor: colors.background.default,
          borderRadius: 10,
          top: 0,
          zIndex: 1,
        }}
      />
    </View>
  );
};


export default ProgressBar;

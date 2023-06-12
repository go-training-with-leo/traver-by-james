import { View, Text, Dimensions } from 'react-native';
import React, { useMemo } from 'react';

interface IProgressBar {
  percent: number;
}
const width = Dimensions.get('window').width;

const ProgressBar = ({ percent }: IProgressBar) => {
  return (
    <View>
      <View
        style={{
          height: 4,
          width: (percent / 100) * width,
          backgroundColor: 'gray',
          marginBottom: 15,
          maxWidth: Dimensions.get("window").width
        }}
      />
    </View>
  );
};

export default ProgressBar;

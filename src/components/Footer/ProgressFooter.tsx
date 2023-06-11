import React from 'react';
import ProgressBar from '../ProgressBar';
import { View } from 'react-native';
import { Button } from '../Button';
import { Footer } from '.';

export const ProgressFooter = ({title, handleSubmit, percent}) => {
  return (
    <Footer>
      <ProgressBar percent={percent} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            flex: 1,
            width: '90%',
            marginBottom: 20,
          }}>
          <Button title={title} onPress={handleSubmit} />
        </View>
      </View>
    </Footer>
  );
};

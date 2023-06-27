import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '@/utils/theme';
import { FlexView, Icons } from '@/components';

const Review = ({ value = 5, selected = false }) => {
  return (
    <View
      style={{
        height: 60,
        borderWidth: 0.2,
        borderColor: selected ? colors.success : colors.border,
        borderRadius: 20,
        justifyContent: 'center',
        paddingHorizontal: 20,
      }}>
      <FlexView>
        <View style={{ flex: 1 }}>
          <FlexView>
            {Array(5)
              .fill(1)
              .map((_item, index) => (
                <Icons
                  name={index + 1 <= value ? 'starActive' : 'star'}
                  height={20}
                  width={20}
                  key={index}
                  style={{ marginRight: 10 }}
                />
              ))}
          </FlexView>
        </View>
        {selected ? <Icons name="tick" /> : null}
      </FlexView>
    </View>
  );
};

export default Review;

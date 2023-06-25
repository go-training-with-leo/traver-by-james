import React from 'react';
import { Icons } from '../Icons';
import { FlexView } from '../Layout';
import { MAX_RATING } from '@/utils/constants';
import { IStarsProps } from '@/utils/interfaces';
import { Text } from '../Text';
import style from './style';

const Stars = ({ value, textColor }: IStarsProps) => {
  return (
    <FlexView style={style.container}>
      {Array(MAX_RATING)
        .fill('star')
        .map((_item, index) => (
          <Icons
            name={index + 1 <= value ? 'starActive' : 'star'}
            height={15}
            width={20}
            key={index}
          />
        ))}
      <Text
        title={value.toString()}
        style={[style.score, { color: textColor }]}
      />
    </FlexView>
  );
};

export default Stars;

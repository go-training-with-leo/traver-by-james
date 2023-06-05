import React from 'react';
import { LayoutContent, Text } from '@/components';
import { colors } from '@/utils/theme';

export const Login = () => {
  return (
    <LayoutContent>
      <Text
        title="Login"
        style={{
          color: colors.textPrimary.dark,
          fontSize: 16,
          fontWeight: '700',
          textAlign: 'center'
        }}
      />
    </LayoutContent>
  );
};

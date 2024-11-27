import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function HeaderTitle({children}: Props) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

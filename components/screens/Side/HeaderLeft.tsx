import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
type Props = {
  onPress: () => void;
};
export default function HeaderLeft({onPress}: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Left</Text>
    </TouchableOpacity>
  );
}

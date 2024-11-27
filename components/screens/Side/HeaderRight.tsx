import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
type Props = {
  onPress: () => void;
};
export default function HeaderRight({onPress}: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Right</Text>
    </TouchableOpacity>
  );
}

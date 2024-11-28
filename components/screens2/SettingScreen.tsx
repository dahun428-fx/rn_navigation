import {View, Text, Button} from 'react-native';
import React from 'react';
import {SettingScreenProp} from './types';
type Props = SettingScreenProp;
export default function SettingScreen({navigation}: Props) {
  return (
    <View>
      <Text>SettingScreen</Text>
      <Button
        title="뒤로가기"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}

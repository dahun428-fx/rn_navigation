import {View, Text, Button} from 'react-native';
import React from 'react';
import {HomeScreenProp} from './types';

type Props = HomeScreenProp;
export default function HomeScreen({navigation}: Props) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Drawer 열기"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <Button
        title="Setting 열기"
        onPress={() => {
          navigation.navigate('Setting');
        }}
      />
    </View>
  );
}

import React from 'react';
import {Button, View} from 'react-native';
import {HomeScreenProp} from './types';

type Props = HomeScreenProp;
export default function HomeScreen({navigation}: Props) {
  const ids = [1, 2, 3];

  return (
    <View>
      {ids.map(num => {
        return (
          <Button
            key={num}
            title={`Detail ${num} 열기`}
            onPress={() => {
              navigation.navigate('Detail', {id: num});
            }}
          />
        );
      })}
      <Button
        title="headerLess"
        onPress={() => {
          navigation.navigate('HeaderLess');
        }}
      />
    </View>
  );
}

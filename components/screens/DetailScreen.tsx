import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {DetailScreenProp} from './types';

type Props = DetailScreenProp;
export default function DetailScreen({route, navigation}: Props) {
  useEffect(() => {
    navigation.setOptions({
      title: `상세페이지 ${route.params.id}`,
    });
  }, [navigation, route.params.id]);

  return (
    <View>
      <Text>Detail {route.params.id}</Text>
      <Button
        title="다음"
        onPress={() => {
          navigation.navigate('Detail', {id: route.params.id + 1});
        }}
      />
      <Button
        title="뒤로가기"
        onPress={() => {
          navigation.pop();
        }}
      />
      <Button
        title="처음으로"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
}

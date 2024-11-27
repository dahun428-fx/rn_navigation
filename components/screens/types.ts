import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  //   Detail: undefined;
  Detail: {id: number};
  HeaderLess: undefined;
};

export type HomeScreenProp = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type DetailScreenProp = NativeStackScreenProps<
  RootStackParamList,
  'Detail'
>;

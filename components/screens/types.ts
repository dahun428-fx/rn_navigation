import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main?: undefined;
  Home: undefined;
  //   Detail: undefined;
  Detail: {id: number};
  HeaderLess: undefined;
  Search?: undefined;
  Notification?: undefined;
  Message?: undefined;
};

export type HomeScreenProp = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type DetailScreenProp = NativeStackScreenProps<
  RootStackParamList,
  'Detail'
>;
export type SearchScreenProp = NativeStackScreenProps<
  RootStackParamList,
  'Search'
>;
export type NotificationScreenProp = NativeStackScreenProps<
  RootStackParamList,
  'Notification'
>;

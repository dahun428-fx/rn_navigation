import type {DrawerScreenProps} from '@react-navigation/drawer';

export type RootStackParamList = {
  Home: undefined;
  //   Detail: undefined;
  Detail: {id: number};
  Setting: undefined;
};

export type HomeScreenProp = DrawerScreenProps<RootStackParamList, 'Home'>;

export type DetailScreenProp = DrawerScreenProps<RootStackParamList, 'Detail'>;

export type SettingScreenProp = DrawerScreenProps<
  RootStackParamList,
  'Setting'
>;

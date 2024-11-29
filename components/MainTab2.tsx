import React from 'react';
import {Button, Text, View} from 'react-native';
import {
  HomeScreenProp,
  NotificationScreenProp,
  RootStackParamList,
  SearchScreenProp,
} from './screens/types';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export const HomeScreen = ({navigation}: HomeScreenProp) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Detail 1 열기"
        onPress={() => {
          navigation.navigate('Detail', {id: 1});
        }}
      />
    </View>
  );
};

export const SearchScreen = ({}: SearchScreenProp) => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

export const Notification: React.FC<NotificationScreenProp> = ({}) => {
  return (
    <View>
      <Text>Noti</Text>
    </View>
  );
};

export const MessageScreen = () => {
  return (
    <View>
      <Text>Message</Text>
    </View>
  );
};
export const MainTab = () => {
  const Tab = createMaterialTopTabNavigator<RootStackParamList>();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: '#009688',
        },
        tabBarActiveTintColor: '#009688',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Message" component={MessageScreen} />
    </Tab.Navigator>
  );
};

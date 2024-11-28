import React from 'react';
import {Button, Text, View} from 'react-native';
import {
  HomeScreenProp,
  NotificationScreenProp,
  RootStackParamList,
  SearchScreenProp,
} from './screens/types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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

export const SeachScreen = ({}: SearchScreenProp) => {
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
  const Tab = createBottomTabNavigator<RootStackParamList>();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#fb8c00',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
        }}
      />
      <Tab.Screen
        name="Search"
        component={SeachScreen}
        options={{
          title: '검색',
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          title: '알림',
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          title: '메시지',
        }}
      />
    </Tab.Navigator>
  );
};

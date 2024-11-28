import {Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

export default function MainContainer3() {
  const Tab = createBottomTabNavigator();

  function HomeScreen() {
    return <Text>HomeScreen</Text>;
  }
  function SearchScreen() {
    return <Text>SearchScreen</Text>;
  }
  function NotificationScreen() {
    return <Text>NotificationScreen</Text>;
  }
  function MessageScreen() {
    return <Text>MessageScreen</Text>;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: '검색',
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            title: '알림',
          }}
        />
        <Tab.Screen
          options={{
            title: '메시지',
          }}
          name="Message"
          component={MessageScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

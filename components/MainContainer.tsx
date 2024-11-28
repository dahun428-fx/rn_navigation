import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './screens/types';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import HeaderLeft from './screens/Side/HeaderLeft';
import HeaderRight from './screens/Side/HeaderRight';
import HeaderTitle from './screens/Side/HeaderTitle';
import HeaderLessScreen from './HeaderLessScreen';

export default function MainContainer() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            headerStyle: {
              backgroundColor: '#29b6f6',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerLeft: ({onPress}) => <HeaderLeft onPress={onPress} />,
            headerRight: ({onPress}) => <HeaderRight onPress={onPress} />,
            headerTitle: ({children}) => <HeaderTitle children={children} />,
          }}
        />
        <Stack.Screen
          name="HeaderLess"
          component={HeaderLessScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

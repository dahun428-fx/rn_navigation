import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './components/screens/HomeScreen';
import DetailScreen from './components/screens/DetailScreen';
import {RootStackParamList} from './components/screens/types';
import HeaderLeft from './components/screens/Side/HeaderLeft';
import HeaderRight from './components/screens/Side/HeaderRight';
import HeaderTitle from './components/screens/Side/HeaderTitle';
import HeaderLessScreen from './components/HeaderLessScreen';

export default function App() {
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

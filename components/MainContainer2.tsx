import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import {RootStackParamList} from './screens2/types';
import SettingScreen from './screens2/SettingScreen';
import {Button, SafeAreaView, Text} from 'react-native';

export default function MainContainer2() {
  const Drawer = createDrawerNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        backBehavior="history"
        drawerContent={({navigation}) => (
          <SafeAreaView>
            <Text>A Custom Drawer</Text>
            <Button
              title="Drawer 닫기"
              onPress={() => {
                navigation.closeDrawer();
              }}
            />
          </SafeAreaView>
        )}
        screenOptions={{
          drawerActiveBackgroundColor: '#fb8c00',
          drawerActiveTintColor: 'white',
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            title: '설정',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

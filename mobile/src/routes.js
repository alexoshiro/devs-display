import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#FFF',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#7D40E7'
          }
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'DevDisplay' }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Perfil no Github' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
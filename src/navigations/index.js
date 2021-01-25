import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Conferences from '../screens/ConferencesScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Conferences" component={Conferences} />
        <Tab.Screen name="Menu" component={Conferences} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

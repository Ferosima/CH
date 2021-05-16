import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import ConferencesScreen from '../screens/ConferencesScreen';
import {colors} from '../const/colors';
import {navigation_icons} from '../const/icons';
import MapScreen from '../screens/MapScreen';
import CalendarScreen from '../screens/CalendarScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PersonalInfoScreen from '../screens/PersonalInfoScreen';

const Stack = createStackNavigator();

export default function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Personal Info"
        component={PersonalInfoScreen}
        options={PersonalInfoScreen.navigationOptions}
      />
    </Stack.Navigator>
  );
}

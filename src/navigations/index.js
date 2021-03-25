import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import Conferences from '../screens/ConferencesScreen';
import {colors} from '../const/colors';

const Tab = createBottomTabNavigator();

// const TabComponent = ({route}) => ({focused}) => {
// return (

// );
// }
const TabComponent = (route) => ({focused}) => {
  return (
    <Text
      style={{
        fontSize: 14,
        color: focused ? colors.main : 'grey',
        borderBottomWidth: focused ? 1 : 0,
        borderColor: colors.main,
      }}>
      {route.name}
    </Text>
  );
};

// TODO bottom tab height
export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarLabel: TabComponent(route),
        })}
        tabBarOptions={{
          tabStyle: {justifyContent: 'center'},
        }}>
        <Tab.Screen name="Events" component={Conferences} />
        <Tab.Screen name="Menu" component={Conferences} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

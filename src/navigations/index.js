import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import Conferences from '../screens/ConferencesScreen';
import {colors} from '../const/colors';
import {navigation_icons} from '../const/icons';
import MapScreen from '../screens/MapScreen';

const Tab = createBottomTabNavigator();
class TabBarButton extends React.Component {
  render() {
    const {
      accessibilityState,
      accessibilityLabel,
      onPress,
      children,
    } = this.props.data;
    const label = accessibilityLabel.split(',')[0];
    const icon = navigation_icons[label]
      ? navigation_icons[label]
      : navigation_icons.Another;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{flex: 1, justifyContent: 'center'}}>
        <Icon
          name={icon.name}
          type={icon.type}
          color={accessibilityState.selected ? colors.blueDark : colors.grey}
          size={icon.size}
        />
        {children}
      </TouchableOpacity>
    );
  }
}

// TODO bottom tab height
export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            justifyContent: 'center',
            height: 60,
            borderTopWidth: 0,
            backgroundColor: '#ffffff',
            elevation: 0,
          },
          tabStyle: {
            justifyContent: 'center',
            fontSize: 16,
          },
          labelStyle: {fontSize: 14},
          activeTintColor: colors.blueDark,
          inactiveTintColor: colors.grey,
        }}>
        <Tab.Screen
          name="Events"
          component={Conferences}
          options={{
            tabBarButton: (props) => <TabBarButton data={props} />,
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarButton: (props) => <TabBarButton data={props} />,
          }}
        />
        {/* <Tab.Screen
          name="Menu"
          component={Conferences}
          options={{
            tabBarButton: (props) => <TabBarButton data={props} />,
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

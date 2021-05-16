import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import ConferencesScreen from '../screens/ConferencesScreen';
import {colors} from '../const/colors';
import {navigation_icons} from '../const/icons';
import MapScreen from '../screens/MapScreen';
import CalendarScreen from '../screens/CalendarScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreateEventScreen from '../screens/CreateEventScreen';

import ProfileNavigator from './profile';

const Tab = createBottomTabNavigator();
class TabBarButton extends React.Component {
  render() {
    const {
      accessibilityState,
      accessibilityLabel,
      onPress,
      children,
    } = this.props.data;
    const {withoutLabel} = this.props;
    const label = accessibilityLabel.split(',')[0];
    const icon = navigation_icons[label]
      ? navigation_icons[label]
      : navigation_icons.Another;
    // accessibilityState.selected
    //   ? navigation_icons[`${label}_active`]
    //   : navigation_icons[label];
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Icon
          name={accessibilityState.selected ? icon.active_name : icon.name}
          type={icon.type}
          color={accessibilityState.selected ? colors.blueDark : colors.grey}
          size={icon.size}
        />
        {withoutLabel ? null : children}
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
            alignItems: 'baseline',
            height: 55,
            borderTopWidth: 0,
            backgroundColor: '#ffffff',
            elevation: 0,
          },
          tabStyle: {
            justifyContent: 'center',
            fontSize: 14,
            fontFamily: 'Nunito-Regular',
          },
          labelStyle: {fontSize: 14, fontFamily: 'Nunito-Regular'},
          activeTintColor: colors.blueDark,
          inactiveTintColor: colors.grey,
        }}>
        <Tab.Screen
          name="Events"
          component={ConferencesScreen}
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
          name="CreateEvent"
          component={CreateEventScreen}
          options={{
            tabBarButton: (props) => <TabBarButton data={props} withoutLabel />,
          }}
        /> */}
        <Tab.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            tabBarButton: (props) => <TabBarButton data={props} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileNavigator}
          options={{
            tabBarButton: (props) => <TabBarButton data={props} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

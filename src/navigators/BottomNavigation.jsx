import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import Home from '../Screens/Main/Home';
import Profile from '../Screens/Main/Profile';
import Feed from '../Screens/Main/Feed';
import ChatList from '../Screens/Main/ChatList';
import Explore from '../Screens/Main/Explore';
import AccountPage from '../Screens/Main/Account';

const Tab = createBottomTabNavigator();

// Local image assets
const icons = {
  home: 'https://cdn-icons-png.flaticon.com/128/1946/1946488.png',
  // add: 'https://cdn-icons-png.flaticon.com/128/18779/18779614.png',
  add: 'https://cdn-icons-png.flaticon.com/128/3131/3131446.png',
  profile: 'https://cdn-icons-png.flaticon.com/128/456/456283.png',
  chat: 'https://cdn-icons-png.flaticon.com/128/9446/9446874.png',
  explore: 'https://cdn-icons-png.flaticon.com/128/4229/4229877.png',
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = icons.home;
          } else if (route.name === 'Feed') {
            iconSource = icons.add;
          } else if (route.name === 'Profile') {
            iconSource = icons.profile;
          } else if (route.name === 'Chat') {
            iconSource = icons.chat;
          } else if (route.name === 'Explore') {
            iconSource = icons.explore;
          }

          return (
            <Image
              source={{uri: iconSource}}
              style={{
                width:
                  route.name == 'Feed'
                    ? 25
                    : route.name == 'Chat'
                    ? 25
                    : route.name == 'Explore'
                    ? 26
                    : 22,
                height:
                  route.name == 'Feed'
                    ? 25
                    : route.name == 'Chat'
                    ? 25
                    : route.name == 'Explore'
                    ? 26
                    : 22,
                marginBottom: route.name == 'Feed' ? 0 : 0,
                tintColor:
                  // route.name == 'Feed'
                  //   ? null
                  //   :
                  focused ? '#3b82f6' : 'gray',
              }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Chat" component={ChatList} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Profile" component={AccountPage} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

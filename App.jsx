import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OnBoarding from './src/Screens/Auth/OnBoarding';
import Login from './src/Screens/Auth/Login';
import SignUp from './src/Screens/Auth/SignUp';
import Home from './src/Screens/Main/Home';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigators/MainNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

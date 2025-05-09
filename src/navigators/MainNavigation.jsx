import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthNavigation';
import BottomNavigation from './BottomNavigation';

const MainNavigation = () => {
  const isAuth = true;
  return <>{!isAuth ? <BottomNavigation /> : <AuthStack />}</>;
};

export default MainNavigation;

const styles = StyleSheet.create({});

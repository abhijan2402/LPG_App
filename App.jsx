import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OnBoarding from './src/Screens/Auth/OnBoarding';
import Login from './src/Screens/Auth/Login';
import SignUp from './src/Screens/Auth/SignUp';
import Home from './src/Screens/Main/Home';

const App = () => {
  return (
    <View>
      {/* <Text>App</Text> */}
      {/* <OnBoarding /> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

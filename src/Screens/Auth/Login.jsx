import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {COLOR} from '../../Constants/Colors';
import CustomButton from '../../Components/CustomButton';
import LottieView from 'lottie-react-native';
import Input from '../../Components/Input';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

const Login = ({navigation}) => {
  const animationRef = useRef(null);
  const [email, setEmail] = useState(null);
  useEffect(() => {
    animationRef.current?.play();

    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120);
  }, []);
  return (
    <ScrollView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <LottieView
          ref={animationRef}
          source={require('../../assets/Lottie/Login.json')}
          style={styles.image}
        />
        <View style={{borderTopWidth: 0.5, paddingTop: 15}}>
          <View style={{marginLeft: 25, marginBottom: 10}}>
            <Text
              style={{fontSize: 22, color: COLOR.royalBlue, fontWeight: '700'}}>
              Sign In
            </Text>
          </View>
          <Input
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            value={email}
            onChangeText={setEmail}
          />

          <CustomButton
            title="Login"
            onPress={() => {
              navigation.navigate('BottomNavigation');
            }}
            style={{marginTop: 15}}
          />
          <Text style={styles.footerText}>
            Not having account?{' '}
            <TouchableOpacity
              style={{marginTop: 8}}
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Text style={styles.linkText}>Create One</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: COLOR.white,
  },
  image: {
    width: width,
    height: height * 0.5111,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: width / 1.5,
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLOR.white,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 20,
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#333',
    alignSelf: 'center',
    alignItems: 'center',
  },
  linkText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#333',
    alignSelf: 'center',
  },
  linkText: {
    color: COLOR.royalBlue,
    fontWeight: 'bold',
  },
});

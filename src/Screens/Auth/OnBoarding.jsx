import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {COLOR} from '../../Constants/Colors';
import CustomButton from '../../Components/CustomButton';
import {windowWidth} from '../../Constants/Dimensions';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

const OnBoarding = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://img.freepik.com/premium-vector/handshake-businessmens-isometric-meeting-businesspeople-two-human-suits-with-briefcase-shake-hand-vector-illustration-3d-design-isolated-white-background-professional-people-deal-agreement_153097-2882.jpg',
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={{marginTop: '10%'}}>
        <Text
          style={{
            fontSize: 15,
            color: COLOR.black,
            width: windowWidth / 1.3,
            textAlign: 'center',
            alignSelf: 'center',
            fontWeight: '500',
            marginBottom: 25,
          }}>
          Improve and get connected with our new idea and new connecttion
        </Text>
        <CustomButton
          title="Let's get started!"
          onPress={() => console.log('Join pressed')}
        />
        {/* <Text style={styles.footerText}>
          Not having account? <Text style={styles.linkText}>Create One</Text>
        </Text> */}
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: COLOR.white,
  },
  image: {
    width: width,
    height: height * 0.7,
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
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#333',
    alignSelf: 'center',
  },
  linkText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

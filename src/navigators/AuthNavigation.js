import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../Screens/Auth/OnBoarding';
import Login from '../Screens/Auth/Login';
import SignUp from '../Screens/Auth/SignUp';
import BottomNavigation from './BottomNavigation';
import AddFeed from '../Screens/Main/AddFeed';
import AddEvent from '../Screens/Main/AddEvent';
import Profile from '../Screens/Main/Profile';
import MyPost from '../Screens/Main/MyPost';
import Cms from '../Screens/Main/Cms';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="AddFeed" component={AddFeed} />
      <Stack.Screen name="AddEvent" component={AddEvent} />
      <Stack.Screen name="EditProfile" component={Profile} />
      <Stack.Screen name="MyPost" component={MyPost} />
      <Stack.Screen name="Cms" component={Cms} />

    </Stack.Navigator>
  );
};

export default AuthStack;

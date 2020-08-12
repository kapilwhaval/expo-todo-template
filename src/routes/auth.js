import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login';
import ForgotPasswordScreen from '../screens/login/forgot-password';
import RegisterScreen from '../screens/register';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="LoginScreen" headerMode="none">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </Stack.Navigator>
);
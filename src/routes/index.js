import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Auth from './auth';
import App from './app';

export default () => {

  const { userDetails } = useSelector(state => state.loginDetails);

  return (
    <NavigationContainer>
      {userDetails && userDetails.token ? <App /> : <Auth />}
    </NavigationContainer>
  )
}
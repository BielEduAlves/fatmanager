import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';


import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';


import { AuthContext } from '../src/contexts/auth';

const Routes = () => {

  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ?
        <AppRoutes />
        :
        <AuthRoutes />
      }
    </NavigationContainer>
  )
}
export default Routes;
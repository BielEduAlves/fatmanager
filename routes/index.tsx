import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';


import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';


const Routes: React.FC = () => {


  return (
    <NavigationContainer>
      {false ?
        <AppRoutes />
        :
        <AuthRoutes />
      }
    </NavigationContainer>
  )
}
export default Routes;
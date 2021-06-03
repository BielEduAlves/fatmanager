import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';


import AuthRoutes from './auth.routes';

import AppRoutes from './app.routes';
import PerfilRoutes from './perfil.routes';


import { AuthContext } from '../src/contexts/auth';

const Routes = () => {

  const { user, perfil } = useContext(AuthContext);

  return (

    <NavigationContainer>
      {user ?
        perfil ?
          <AppRoutes />
          :
          <PerfilRoutes />
        :
        <AuthRoutes />
      }
    </NavigationContainer>
  )
}
export default Routes;
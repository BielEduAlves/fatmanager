import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './auth.routes';

import AppRoutes from './app.routes';
import PerfilRoutes from './perfil.routes';


import { AuthContext } from '../src/contexts/auth';

const Routes = () => {
  // console.log(perfil);
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
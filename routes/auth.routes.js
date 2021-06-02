import React, { } from 'react';

import Login from '../src/pages/Login';
import { Cadastro } from '../src/pages/Cadastro';
import colors from '../src/styles/colors';

import { createStackNavigator } from '@react-navigation/stack';

const LoginStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <LoginStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white
        },
      }}
    >
      <LoginStack.Screen
        name="Login" component={Login}
      />
      <LoginStack.Screen
        name="Cadastro" component={Cadastro}
      />

    </LoginStack.Navigator>
  )
}
export default AuthRoutes;
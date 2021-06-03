import React, { useContext } from 'react';

import { Home } from '../src/pages/Home';
import { Exercicios } from '../src/pages/Exercicios';
import { Dados } from '../src/pages/Dados';
import { Agua } from '../src/pages/Agua';

import colors from '../src/styles/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import { Feather } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      },
    }}
  >
    <HomeStack.Screen
      name="Home" component={Home}
    />

    <HomeStack.Screen
      name="Exercicios" component={Exercicios}
    />
    <HomeStack.Screen
      name="Agua" component={Agua}
    />
    <HomeStack.Screen
      name="Dados" component={Dados}
    />




  </HomeStack.Navigator>
)

const TabInDrawerScreen = () => (
  <Tab.Navigator
    tabBarOptions={
      {
        activeTintColor: colors.red,
        inactiveTintColor: '#ccc'
      }
    }
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={
        {
          tabBarIcon: ({ color }) => (
            <Feather
              name="airplay"
              size={32}
              color={color}
            />
          )
        }
      }
    />

    <Tab.Screen
      name="Exercicios"
      component={Exercicios}
      options={
        {
          tabBarIcon: ({ color }) => (
            <Feather
              name="activity"
              size={32}
              color={color}
            />
          )
        }
      }
    />

    <Tab.Screen
      name="Água"
      component={Agua}
      options={
        {
          tabBarIcon: ({ color }) => (
            <Feather
              name="droplet"
              size={32}
              color={color}
            />
          )
        }
      }
    />

  </Tab.Navigator>
)

const AppRoutes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabInDrawerScreen} />
      <Drawer.Screen name="Exercícios" component={Exercicios} />
      <Drawer.Screen name="Dados" component={Dados} />
      <Drawer.Screen name="Água" component={Agua} />


    </Drawer.Navigator>
  )
}
export default AppRoutes;
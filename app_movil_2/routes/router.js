import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../views/login';
import Registro from '../views/registro';
import Home from '../views/home';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#ff4a1c' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Registro"
          component={Registro}
          options={{ title: 'Registro' }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{ title: 'Bienvenido' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
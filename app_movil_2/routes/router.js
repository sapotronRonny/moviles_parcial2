// routes/router.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../views/login';
import Registro from '../views/registro'; // Asegúrate de que la ruta sea correcta
// import Registro from '../views/Registro';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ff4a1c', // 🟧 Fondo del header
          },
          headerTintColor: '#fff',      // ⚪ Color de la letra y botones
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }} // Puedes cambiar a "Iniciar sesión"
        />
        <Stack.Screen
          name="Registro"
          component={Registro}
          options={{ title: 'Registro' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;



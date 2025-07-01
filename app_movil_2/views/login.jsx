import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>

      <Image
        source={require('../assets/wachon4 - copia.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.inputContainer}>
        <MaterialIcons name="person" size={20} color="#ff4a1c" style={styles.icon} />
        <TextInput
          placeholder="Correo electrónico"
          placeholderTextColor="#ff4a1c"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="password" size={20} color="#ff4a1c" style={styles.icon} />
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#ff4a1c"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={20}
            color="#555"
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('home')}
      >
        <Text style={styles.loginText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
        <Text style={styles.registerText}>¿No tienes cuenta?,registrate gratis</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f8ee',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ff4a1c',
    textAlign: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 150,
    height: 45,
    alignSelf: 'center',
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ff4a1c',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#ff4a1c',
    fontSize: 16,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 5,
  },
  eyeIcon: {
    padding: 5,
  },
  loginButton: {
    backgroundColor: '#ff4a1c',
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 30,
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  registerText: {
    color: '#000',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
  },
});
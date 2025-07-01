import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ToastAndroid
} from 'react-native';
import Checkbox from 'expo-checkbox';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { MaterialIcons, FontAwesome5, Entypo, Feather } from '@expo/vector-icons';

const provincias = [
  "Bolívar", "Chone", "El Carmen", "Flavio Alfaro", "Jama", "Jaramijó",
  "Jipijapa", "Junín", "Manta", "Montecristi", "Olmedo", "Paján",
  "Pedernales", "Pichincha", "Portoviejo", "Puerto López", "Rocafuerte",
  "Santa Ana", "Sucre", "Tosagua", "24 de Mayo"
];

export default function Registro() {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [genero, setGenero] = useState('');
  const [provincia, setProvincia] = useState(provincias[0]);
  const [noticias, setNoticias] = useState({
    Deportes: false,
    Cultura: false,
    Educación: false,
    Salud: false,
    Política: false,
  });
  const [foto, setFoto] = useState(null);

  const handlePickImage = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.7 }, response => {
      if (response.assets && response.assets.length > 0) {
        setFoto(response.assets[0].uri);
      }
    });
  };

  const handleTakePhoto = () => {
    launchCamera({ mediaType: 'photo', quality: 0.7 }, response => {
      if (response.assets && response.assets.length > 0) {
        setFoto(response.assets[0].uri);
      }
    });
  };

  const handleRegister = () => {
    if (!nombre || nombre.length < 8 || /\d/.test(nombre)) {
      ToastAndroid.show('Nombre inválido', ToastAndroid.SHORT);
      return;
    }
    if (!correo || !/\S+@\S+\.\S+/.test(correo)) {
      ToastAndroid.show('Correo inválido', ToastAndroid.SHORT);
      return;
    }
    if (contraseña.length < 8 || !/\d/.test(contraseña) || !/[A-Z]/.test(contraseña)) {
      ToastAndroid.show('Contraseña débil', ToastAndroid.SHORT);
      return;
    }
    if (!genero) {
      ToastAndroid.show('Selecciona un género', ToastAndroid.SHORT);
      return;
    }
    ToastAndroid.show('Registro exitoso', ToastAndroid.LONG);
    navigation.replace('home');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <View style={styles.inputContainer}>
        <FontAwesome5 name="user-alt" size={18} color="#ff4a1c" style={styles.icon} />
        <TextInput value={nombre} onChangeText={setNombre} placeholder="Nombre" style={styles.inputUnderline} />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={20} color="#ff4a1c" style={styles.icon} />
        <TextInput value={correo} onChangeText={setCorreo} placeholder="Correo" keyboardType="email-address" style={styles.inputUnderline} />
      </View>

      <View style={styles.inputContainer}>
        <Entypo name="lock" size={20} color="#ff4a1c" style={styles.icon} />
        <TextInput value={contraseña} onChangeText={setContraseña} placeholder="Contraseña" secureTextEntry style={styles.inputUnderline} />
      </View>

      <Text style={styles.sectionLabel}>Género</Text>
      <View style={styles.row}>
        {['Masculino', 'Femenino', 'Otro'].map(g => (
          <TouchableOpacity key={g} onPress={() => setGenero(g)} style={styles.radioContainer}>
            <View style={styles.radioOuter}>
              {genero === g && <View style={styles.radioInner} />}
            </View>
            <Text>{g}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionLabel}>Provincia</Text>
      <View style={styles.pickerWrapper}>
        <Picker selectedValue={provincia} onValueChange={setProvincia} style={styles.picker}>
          {provincias.map(p => <Picker.Item key={p} label={p} value={p} />)}
        </Picker>
      </View>

      <View style={styles.sectionWhiteFull}>
        <Text style={styles.sectionLabel}>Categorías de noticia</Text>
        {Object.keys(noticias).map(cat => (
          <View key={cat} style={styles.checkboxRowSimple}>
            <Checkbox value={noticias[cat]} onValueChange={v => setNoticias({ ...noticias, [cat]: v })} color={'#ff4a1c'} />
            <Text style={styles.checkboxLabel}>{cat}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionLabel}>Foto de perfil</Text>
      {foto && <Image source={{ uri: foto }} style={styles.image} />}
      <View style={styles.row}>
        <TouchableOpacity style={styles.orangeButton} onPress={handleTakePhoto}>
          <Text style={styles.buttonText}>Tomar Foto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.orangeButton} onPress={handlePickImage}>
          <Text style={styles.buttonText}>Cargar Foto</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#f9f8ee' },
  title: { fontSize: 36, fontWeight: 'bold', color: '#ff4a1c', textAlign: 'center', marginBottom: 16 },
  sectionLabel: { fontWeight: 'bold', fontSize: 18, color: '#ff4a1c', marginTop: 20, marginBottom: 8 },
  label: { fontWeight: 'bold', marginTop: 12, color: '#333' },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: '#ff4a1c', marginBottom: 12 },
  icon: { marginRight: 8 },
  inputUnderline: { flex: 1, height: 40, color: '#333' },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, justifyContent: 'space-between', marginBottom: 10 },
  radioContainer: { flexDirection: 'row', alignItems: 'center', marginRight: 16, marginTop: 4 },
  radioOuter: { height: 20, width: 20, borderRadius: 10, borderWidth: 1, borderColor: '#ff4a1c', alignItems: 'center', justifyContent: 'center', marginRight: 4 },
  radioInner: { height: 12, width: 12, borderRadius: 6, backgroundColor: '#ff4a1c' },
  pickerWrapper: { borderWidth: 0, borderColor: '#ff4a1c', borderRadius: 10, backgroundColor: "white", marginBottom: 24 },
  picker: { height: 50 },
  sectionWhiteFull: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginVertical: 25, marginHorizontal: -16 },
  checkboxRowSimple: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  checkboxLabel: { marginLeft: 8, color: '#333' },
  image: { width: 100, height: 100, marginBottom: 8, borderRadius: 8, alignSelf: 'center' },
  orangeButton: { backgroundColor: '#ff4a1c', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 12, margin: 4, flex: 1, alignItems: 'center' },
  registerButton: { backgroundColor: '#ff4a1c', paddingVertical: 15, borderRadius: 12, marginTop: 20, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

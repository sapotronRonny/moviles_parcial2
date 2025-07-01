import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome5, Entypo } from '@expo/vector-icons';

// Cambia la función a mayúscula: Home
export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.cardRow}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Noticias')}>
          <MaterialIcons name="article" size={40} color="#ff4a1c" />
          <Text style={styles.cardText}>Noticias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Perfil')}>
          <FontAwesome5 name="user-alt" size={40} color="#ff4a1c" />
          <Text style={styles.cardText}>Perfil</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardRow}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Configuración')}>
          <Entypo name="cog" size={40} color="#ff4a1c" />
          <Text style={styles.cardText}>Configuración</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Login')}>
          <MaterialIcons name="logout" size={40} color="#ff4a1c" />
          <Text style={styles.cardText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9f8ee', padding: 20 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#ff4a1c', marginBottom: 30 },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 24 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    flex: 1,
    elevation: 4,
  },
  cardText: { marginTop: 12, fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#333' },
});
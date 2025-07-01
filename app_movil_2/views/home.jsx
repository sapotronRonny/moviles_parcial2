import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Página de Inicio</Text>
        {/* Aquí puedes poner el contenido principal */}
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('home')}>
          <Ionicons name="home" size={28} color="#ff4a1c" />
          <Text style={styles.tabText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Noticias')}>
          <MaterialIcons name="article" size={28} color="#ff4a1c" />
          <Text style={styles.tabText}>Noticias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Configuraciones')}>
          <Entypo name="cog" size={28} color="#ff4a1c" />
          <Text style={styles.tabText}>Configuraciones</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Perfil')}>
          <FontAwesome5 name="user-circle" size={28} color="#ff4a1c" />
          <Text style={styles.tabText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f8ee' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#ff4a1c', marginBottom: 30 },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    elevation: 10,
  },
  tab: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  tabText: { fontSize: 12, color: '#ff4a1c', marginTop: 2 },
  });
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AlbumsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Ionicons name="albums-outline" size={80} color="#333" />
      <Text style={styles.title}>Tus Álbumes</Text>
      <Text style={styles.subtitle}>Aquí podrás organizar tus fotos en carpetas.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginTop: 20, marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#888', textAlign: 'center' },
});
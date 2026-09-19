import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FavoritesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Ionicons name="heart-outline" size={80} color="#333" />
      <Text style={styles.title}>Tus Favoritos</Text>
      <Text style={styles.subtitle}>Aquí aparecerán las fotos que marques con un corazón.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginTop: 20, marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#888', textAlign: 'center' },
});
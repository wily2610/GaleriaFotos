// src/components/PhotoCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
// Calculamos el ancho para que quepan exactamente 2 columnas con un pequeño margen
const CARD_WIDTH = (width / 2) - 15; 

export default function PhotoCard({ photo, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image source={{ uri: photo.url }} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title} numberOfLines={1}>{photo.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 1.2,
    margin: 5,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#1e1e1e',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)', 
    padding: 10,
  },
  title: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

export default function DetailScreen({ route }) {
  const { photo } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={{ uri: photo.url }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{photo.title}</Text>
          <View style={styles.divider} />
          <Text style={styles.desc}>{photo.desc}</Text>
          <Text style={styles.meta}>ID de imagen: {photo.id}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  image: {
    width: '100%',
    height: 350,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#333333',
    marginVertical: 15,
  },
  desc: {
    fontSize: 16,
    color: '#dddddd',
    lineHeight: 24,
    marginBottom: 20,
  },
  meta: {
    fontSize: 12,
    color: '#666666',
    fontStyle: 'italic',
  }
});

import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import PhotoCard from '../components/PhotoCard';
import PHOTOS from '../data/photos.json'; 

export default function GalleryScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mi Galería</Text>
        <Text style={styles.headerSubtitle}>{PHOTOS.length} fotos</Text>
      </View>

      <FlatList
        data={PHOTOS}
        keyExtractor={(item) => item.id}
        numColumns={2} 
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PhotoCard 
            photo={item} 
            onPress={() => navigation.navigate('Detail', { photo: item })} 
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', 
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#888888',
    marginTop: 5,
  },
  list: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});
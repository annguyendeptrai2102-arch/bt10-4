import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductCard({ name, price, unit, image }) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text style={styles.unit}>{unit}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.price}>{price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20, // Bo góc thẻ cực mạnh cho giống app hiện đại
    borderWidth: 1,
    borderColor: '#F2F3F2',
    padding: 15,
    height: 250,
    justifyContent: 'space-between',
    
    // Đổ bóng nhẹ để thẻ nổi lên
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    
    overflow: 'hidden', // Cắt nội dung thừa để giữ góc bo
  },
  imageContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    marginTop: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181725',
  },
  unit: {
    fontSize: 14,
    color: '#7C7C7C',
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#181725',
  },
  addButton: {
    backgroundColor: '#53B175',
    width: 42,
    height: 42,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
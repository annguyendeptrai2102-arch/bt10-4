import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CheckoutRowProps {
  label: string;
  value?: string;
  isImage?: boolean;
  imageSource?: any;
}

export default function CheckoutRow({ label, value, isImage, imageSource }: CheckoutRowProps) {
  return (
    <TouchableOpacity style={styles.row} activeOpacity={0.7}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueContainer}>
        {isImage ? (
          <Image source={imageSource} style={styles.cardImage} resizeMode="contain" />
        ) : (
          <Text style={styles.valueText}>{value}</Text>
        )}
        <Ionicons name="chevron-forward" size={18} color="#181725" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
  },
  label: { fontSize: 18, color: '#7C7C7C', fontWeight: '600' },
  valueContainer: { flexDirection: 'row', alignItems: 'center' },
  valueText: { fontSize: 16, color: '#181725', fontWeight: '600', marginRight: 10 },
  cardImage: { width: 25, height: 18, marginRight: 10 },
});
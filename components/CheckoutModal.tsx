import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CheckoutRow from './CheckoutRow';

const { width } = Dimensions.get('window');

interface CheckoutModalProps {
  visible: boolean;
  onClose: () => void;
  onPlaceOrder: () => void;
}

export default function CheckoutModal({ visible, onClose, onPlaceOrder }: CheckoutModalProps) {
  if (!visible) return null; // Nếu không hiện thì không render gì cả

  return (
    // View này đóng vai trò là overlay làm mờ nền
    <View style={styles.overlay}>
      {/* View này là nội dung bảng Checkout */}
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Checkout</Text>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={28} color="#181725" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.divider} />
        <CheckoutRow label="Delivery" value="Select Method" />
        <View style={styles.divider} />
        <CheckoutRow 
          label="Payment" 
          isImage 
          imageSource={require('../assets/images/payment_card.png')} 
        />
        <View style={styles.divider} />
        <CheckoutRow label="Promo Code" value="Pick discount" />
        <View style={styles.divider} />
        <CheckoutRow label="Total Cost" value="$13.97" />
        <View style={styles.divider} />

        <Text style={styles.terms}>
          By placing an order you agree to our 
          <Text style={styles.boldText}> Terms</Text> and 
          <Text style={styles.boldText}> Conditions</Text>
        </Text>

        <TouchableOpacity style={styles.placeOrderBtn} onPress={onPlaceOrder}>
          <Text style={styles.btnText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    // Quan trọng: Dùng absolute để nó nằm đè lên cart screen
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    zIndex: 1000, // Đảm bảo nằm trên cùng
  },
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    paddingBottom: 40,
  },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#181725' },
  divider: { height: 1, backgroundColor: '#E2E2E2' },
  terms: { fontSize: 14, color: '#7C7C7C', marginTop: 25, lineHeight: 22 },
  boldText: { color: '#181725', fontWeight: '600' },
  placeOrderBtn: { backgroundColor: '#53B175', height: 67, borderRadius: 19, justifyContent: 'center', alignItems: 'center', marginTop: 25 },
  btnText: { color: 'white', fontSize: 18, fontWeight: '600' },
});
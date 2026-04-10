import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function OrderFailedScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.phoneWrapper}>
        <View style={styles.content}>
          
          {/* Hình ảnh minh họa lỗi - Bạn có thể dùng một icon hoặc ảnh Oops! */}
          <Image 
            source={require('../assets/images/order_failed.png')} 
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={styles.title}>Oops! Order Failed</Text>
          
          <Text style={styles.subtitle}>
            Something went wrong while processing your order. Please try again.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.tryAgainBtn} 
              onPress={() => router.back()} // Quay lại trang Cart để thử lại
            >
              <Text style={styles.tryAgainText}>Please Try Again</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.backHomeBtn} 
              onPress={() => router.replace('/(tabs)')}
            >
              <Text style={styles.backHomeText}>Back to home</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F5F5F5' },
  phoneWrapper: { 
    flex: 1, backgroundColor: 'white',
    width: width > 500 ? 414 : '100%',
    alignSelf: 'center',
    borderLeftWidth: width > 500 ? 8 : 0, 
    borderRightWidth: width > 500 ? 8 : 0,
    borderColor: '#181725',
    borderRadius: width > 500 ? 30 : 0,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#181725',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#7C7C7C',
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 60,
  },
  tryAgainBtn: {
    backgroundColor: '#181725', // Màu tối hơn để phân biệt với nút thành công
    height: 67,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  tryAgainText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  backHomeBtn: {
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backHomeText: {
    color: '#181725',
    fontSize: 18,
    fontWeight: '600',
  },
});
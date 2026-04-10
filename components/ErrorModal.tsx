import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Định nghĩa các thuộc tính cho ErrorModal
interface ErrorModalProps {
  visible: boolean;
  onClose: () => void;
  onTryAgain: () => void;
  onBackToHome: () => void;
}

export default function ErrorModal({ visible, onClose, onTryAgain, onBackToHome }: ErrorModalProps) {
  return (
    // Dùng component Modal của React Native để hiện đè lên
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        
        {/* Nội dung bảng thông báo */}
        <View style={styles.modalContent}>
          
          {/* Nút X để đóng bảng */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Ionicons name="close" size={24} color="#181725" />
          </TouchableOpacity>
          
          {/* Hình minh họa Oops */}
          <Image 
            source={require('../assets/images/oops.png')} 
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={styles.title}>Oops! Order Failed</Text>
          
          <Text style={styles.subtitle}>
            Something went wrong while processing your order.
          </Text>

          {/* Cụm nút bấm: Nút Try Again màu xanh */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.tryAgainBtn} onPress={onTryAgain}>
              <Text style={styles.tryAgainText}>Please Try Again</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.backHomeBtn} onPress={onBackToHome}>
              <Text style={styles.backHomeText}>Back to home</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Làm mờ nền phía sau
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 25,
    width: '100%',
    alignItems: 'center',
    position: 'relative', // Để đặt nút close
  },
  closeBtn: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  image: {
    width: 220,
    height: 180,
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#181725',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#7C7C7C',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '100%',
  },
  tryAgainBtn: {
    backgroundColor: '#53B175', // Đổi thành màu xanh lá cây theo yêu cầu
    height: 67,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  tryAgainText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  backHomeBtn: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backHomeText: {
    color: '#181725',
    fontSize: 18,
    fontWeight: '600',
  },
});
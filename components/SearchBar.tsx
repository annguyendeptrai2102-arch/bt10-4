import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { router } from 'expo-router'; // 1. Import router để chuyển trang

export default function SearchBar() {
  // 2. Tạo state để lưu nội dung người dùng gõ
  const [keyword, setKeyword] = useState('');

  // 3. Hàm xử lý khi nhấn Enter (nút Search trên bàn phím)
  const handleSearchSubmit = () => {
    if (keyword.trim().length > 0) {
      router.push({
        pathname: '/search', // Tên file trang kết quả (app/search.tsx)
        params: { categoryTitle: keyword } // Truyền chữ "Egg" sang trang đó
      });
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color={Colors.dark || '#181725'} />
      
      <TextInput 
        placeholder="Search Store" 
        style={styles.input}
        placeholderTextColor={Colors.grey || '#7C7C7C'}
        value={keyword}
        onChangeText={setKeyword}
        returnKeyType="search" // Đổi nút Enter thành chữ "Search"
        onSubmitEditing={handleSearchSubmit} // BẮT SỰ KIỆN NHẤN ENTER
      />

      {/* 4. Nút xóa nhanh nội dung đã nhập */}
      {keyword.length > 0 && (
        <TouchableOpacity onPress={() => setKeyword('')}>
          <Ionicons name="close-circle" size={18} color={Colors.grey || '#7C7C7C'} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F3F2', // Bạn có thể dùng Colors.lightGrey nếu đã định nghĩa
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15, // Dùng padding ngang cho chuẩn UI
    height: 50, // Fix chiều cao cho cân đối
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
    color: '#181725',
  },
});
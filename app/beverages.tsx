import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  SafeAreaView, 
  TouchableOpacity, 
  Image,
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import ProductCard from '../components/ProductCard';

const { width } = Dimensions.get('window');

// Dữ liệu sản phẩm đồ uống
const BEVERAGES_DATA = [
  { id: '1', name: 'Diet Coke', unit: '355ml, Price', price: '$1.99', image: require('../assets/images/diet_coke.png') },
  { id: '2', name: 'Sprite Can', unit: '325ml, Price', price: '$1.50', image: require('../assets/images/sprite.png') },
  { id: '3', name: 'Apple & Grape Juice', unit: '2L, Price', price: '$15.99', image: require('../assets/images/apple_juice.png') },
  { id: '4', name: 'Orange Juice', unit: '2L, Price', price: '$15.99', image: require('../assets/images/orange_juice.png') },
  { id: '5', name: 'Coca Cola Can', unit: '325ml, Price', price: '$4.99', image: require('../assets/images/coca_cola.png') },
  { id: '6', name: 'Pepsi Can', unit: '330ml, Price', price: '$4.99', image: require('../assets/images/pepsi.png') },
];

export default function BeveragesScreen() {

  // Hàm điều hướng sang trang chi tiết
  const handleProductPress = (item: any) => {
    router.push({
      pathname: '/product-detail',
      params: { 
        name: item.name, 
        price: item.price, 
        unit: item.unit,
        // Lưu ý: require image không truyền qua params dạng chuỗi được dễ dàng, 
        // trang detail sẽ mặc định dùng ảnh táo hoặc bạn cần logic xử lý URI nếu dùng ảnh mạng.
      }
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.phoneWrapper}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
            <Ionicons name="chevron-back" size={28} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Beverages</Text>
          <TouchableOpacity>
            <Image source={require('../assets/images/filter.png')} style={styles.filterIcon} />
          </TouchableOpacity>
        </View>

        {/* Danh sách sản phẩm dạng lưới (2 cột) */}
        <FlatList
          data={BEVERAGES_DATA}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.cardWrapper} 
              activeOpacity={0.8}
              onPress={() => handleProductPress(item)}
            >
              <ProductCard 
                name={item.name}
                unit={item.unit}
                price={item.price}
                image={item.image}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
  },
  phoneWrapper: {
    flex: 1,
    backgroundColor: 'white',
    width: width > 500 ? 414 : '100%',
    overflow: 'hidden',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#F2F3F2',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F3F2', // Thêm đường kẻ mờ dưới header cho chuyên nghiệp
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181725',
  },
  filterIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  listContent: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 30,
  },
  cardWrapper: {
    flex: 1,
    padding: 8,
  }
});
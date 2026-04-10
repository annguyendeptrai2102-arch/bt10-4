import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  SafeAreaView, 
  TouchableOpacity, 
  Image,
  Dimensions,
} from 'react-native';
import { router } from 'expo-router';
import SearchBar from '../../components/SearchBar';
import CustomTabBar from '../../components/CustomTabBar';

const { width } = Dimensions.get('window');

const CATEGORIES = [
  { id: '1', title: 'Fresh Fruits\n& Vegetable', color: '#EEF8F2', border: '#53B175', image: require('../../assets/images/fruits_veg_cat.png') },
  { id: '2', title: 'Cooking Oil\n& Ghee', color: '#FEF6ED', border: '#F8A44C', image: require('../../assets/images/oil_cat.png') },
  { id: '3', title: 'Meat & Fish', color: '#FDE9E9', border: '#F7A593', image: require('../../assets/images/meat_fish_cat.png') },
  { id: '4', title: 'Bakery & Snacks', color: '#F4EBF7', border: '#D3B0E0', image: require('../../assets/images/bakery_cat.png') },
  { id: '5', title: 'Dairy & Eggs', color: '#FFF8E5', border: '#FDE598', image: require('../../assets/images/dairy_cat.png') },
  { id: '6', title: 'Beverages', color: '#EDF7FC', border: '#B7DFF5', image: require('../../assets/images/beverages_cat.png') },
];

export default function ExploreScreen() {
  
  const handleCategoryPress = (item: any) => {
    if (item.id === '6') {
      router.push('/beverages'); 
    } else {
      router.push({
        pathname: '/search',
        params: { categoryTitle: item.title.replace('\n', ' ') }
      });
    }
  };

  const renderCategory = ({ item }: { item: any }) => (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: item.color, borderColor: item.border }]}
      activeOpacity={0.8}
      onPress={() => handleCategoryPress(item)}
    >
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={styles.titleText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.phoneWrapper}>
        
        {/* Phần nội dung phía trên Tab Bar */}
        <View style={{ flex: 1 }}>
          <Text style={styles.headerTitle}>Find Products</Text>
          
          <View style={styles.searchBox}>
             <SearchBar />
          </View>

          <FlatList
            data={CATEGORIES}
            renderItem={renderCategory}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
          />
        </View>

        {/* Luôn hiển thị ở dưới cùng của viền đen */}
        <CustomTabBar />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#F5F5F5', // Đổi nền ngoài thành xám nhạt để nổi viền đen
    alignItems: 'center' 
  },
  phoneWrapper: { 
    flex: 1, 
    backgroundColor: 'white', 
    width: width > 500 ? 414 : '100%', 
    position: 'relative',
    
    // ĐÃ SỬA: Viền đen đồng bộ với trang Cart
    borderLeftWidth: width > 500 ? 8 : 0, 
    borderRightWidth: width > 500 ? 8 : 0, 
    borderColor: '#181725', 
    borderRadius: width > 500 ? 30 : 0, 
    overflow: 'hidden',
    
    // Đổ bóng cho giống mockup
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  headerTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    paddingTop: 20, 
    paddingBottom: 10, 
    color: '#181725' 
  },
  searchBox: { 
    paddingBottom: 10 
  },
  listContent: { 
    paddingHorizontal: 12, 
    paddingBottom: 100 // Tăng padding để không bị TabBar che mất card cuối
  },
  card: { 
    flex: 1, 
    margin: 8, 
    height: 190, 
    borderRadius: 18, 
    borderWidth: 1, 
    padding: 15, 
    alignItems: 'center', 
    justifyContent: 'center', 
    overflow: 'hidden' 
  },
  imageContainer: { 
    height: 90, 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 15 
  },
  image: { 
    width: '100%', 
    height: '100%' 
  },
  titleText: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: '#181725' 
  },
});
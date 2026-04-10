import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  SafeAreaView, 
  TouchableOpacity, 
  Image,
  Dimensions,
  TextInput 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import ProductCard from '../../components/ProductCard';

const { width } = Dimensions.get('window');

const SEARCH_DATA = [
  { id: '1', name: 'Egg Chicken Red', unit: '4pcs, Price', price: '$1.99', image: require('../../assets/images/egg_chicken_red.png') },
  { id: '2', name: 'Egg Chicken White', unit: '180g, Price', price: '$1.50', image: require('../../assets/images/egg_chicken_white.png') },
  { id: '3', name: 'Egg Pasta', unit: '30g, Price', price: '$15.99', image: require('../../assets/images/egg_pasta.png') },
  { id: '4', name: 'Egg Noodles', unit: '2L, Price', price: '$15.99', image: require('../../assets/images/egg_noodles.png') },
  { id: '5', name: 'Mayonnais Eggless', unit: '325ml, Price', price: '$4.99', image: require('../../assets/images/mayonnais.png') },
  { id: '6', name: 'Egg Noodles', unit: '330ml, Price', price: '$4.99', image: require('../../assets/images/egg_noodles.png') },
];

export default function SearchScreen() {
  const params = useLocalSearchParams();
  const [searchText, setSearchText] = useState((params.categoryTitle as string) || '');

  const handleProductPress = (item: any) => {
    router.push({
      pathname: '/product-detail',
      params: { name: item.name, price: item.price, unit: item.unit }
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.phoneWrapper}>
        
        {/* HEADER CÓ NÚT BACK */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => router.back()} 
            style={styles.backButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="chevron-back" size={28} color="black" />
          </TouchableOpacity>

          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="black" style={styles.searchIcon} />
            <TextInput 
              style={styles.searchInput}
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Search Store"
              returnKeyType="search"
            />
            {searchText.length > 0 && (
              <TouchableOpacity onPress={() => setSearchText('')}>
                <Ionicons name="close-circle" size={18} color="#7C7C7C" />
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity onPress={() => router.push('/filters')}>
            <Image 
              source={require('../../assets/images/filter.png')} 
              style={styles.filterIcon} 
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={SEARCH_DATA}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.cardWrapper} 
              activeOpacity={0.9}
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
    backgroundColor: '#F5F5F5', // Nền ngoài xám nhạt đồng bộ
    alignItems: 'center' 
  },
  phoneWrapper: { 
    flex: 1, 
    backgroundColor: 'white', 
    width: width > 500 ? 414 : '100%', 
    position: 'relative',
    
    // Đã thêm: Viền đen và bo góc đồng nhất
    borderLeftWidth: width > 500 ? 8 : 0, 
    borderRightWidth: width > 500 ? 8 : 0, 
    borderColor: '#181725', 
    borderRadius: width > 500 ? 30 : 0, 
    overflow: 'hidden',
    
    // Đổ bóng khung hình
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 15, 
    paddingVertical: 15,
    backgroundColor: 'white'
  },
  backButton: {
    marginRight: 5,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F3F2',
    borderRadius: 15,
    paddingHorizontal: 10,
    height: 45,
    marginRight: 12,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { 
    flex: 1, 
    fontSize: 14, 
    fontWeight: '600',
    color: '#181725' 
  },
  filterIcon: { width: 18, height: 18, resizeMode: 'contain' },
  listContent: { 
    paddingHorizontal: 10, 
    paddingBottom: 30 
  },
  cardWrapper: { 
    flex: 1, 
    padding: 8 
  },
});
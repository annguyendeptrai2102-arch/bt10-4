import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  Image, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router'; 
import SearchBar from '../../components/SearchBar';
import ProductCard from '../../components/ProductCard';
// IMPORT thanh điều hướng mới
import CustomTabBar from '../../components/CustomTabBar';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  
  const goToDetail = (name: string, price: string, unit: string) => {
    router.push({
      pathname: '/product-detail',
      params: { name, price, unit }
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Khung Wrapper giả lập điện thoại */}
      <View style={styles.phoneWrapper}>
        
        {/* Bọc nội dung chính vào ScrollView và để flex: 1 */}
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={styles.scrollContent}
          style={{ flex: 1 }}
        >
          
          {/* 1. Header: Logo & Location */}
          <View style={styles.header}>
            <Image 
              source={require('../../assets/images/carrot.png')} 
              style={styles.logo} 
            />
            <View style={styles.locationRow}>
              <Ionicons name="location-sharp" size={18} color="#4C4F4D" />
              <Text style={styles.locationText}>Dhaka, Banassre</Text>
            </View>
          </View>

          {/* 2. Search Bar */}
          <SearchBar />

          {/* 3. Banner */}
          <View style={styles.bannerContainer}>
            <Image 
              source={require('../../assets/images/banner.png')} 
              style={styles.banner}
              resizeMode="cover"
            />
          </View>

          {/* 4. Exclusive Offer Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Exclusive Offer</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.horizontalList}
          >
            <View style={styles.cardContainer}>
              <TouchableOpacity onPress={() => goToDetail('Organic Bananas', '$4.99', '7pcs, Price')}>
                <ProductCard 
                  name="Organic Bananas" 
                  price="$4.99" 
                  unit="7pcs, Price" 
                  image={require('../../assets/images/bananas.png')} 
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => goToDetail('Red Apple', '$4.99', '1kg, Price')}>
                <ProductCard 
                  name="Red Apple" 
                  price="$4.99" 
                  unit="1kg, Price" 
                  image={require('../../assets/images/apple.png')} 
                />
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* 5. Best Selling Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Best Selling</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.horizontalList}
          >
            <View style={styles.cardContainer}>
              <TouchableOpacity onPress={() => goToDetail('Bell Pepper Red', '$4.99', '1kg, Price')}>
                <ProductCard 
                  name="Bell Pepper Red" 
                  price="$4.99" 
                  unit="1kg, Price" 
                  image={require('../../assets/images/bell_pepper.png')} 
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => goToDetail('Ginger', '$4.99', '250g, Price')}>
                <ProductCard 
                  name="Ginger" 
                  price="$4.99" 
                  unit="250g, Price" 
                  image={require('../../assets/images/ginger.png')} 
                />
              </TouchableOpacity>
            </View>
          </ScrollView>

          <View style={{ height: 100 }} />
        </ScrollView>

        {/* HIỂN THỊ TAB BAR Ở ĐÂY (Nằm cuối phoneWrapper) */}
        <CustomTabBar />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#F5F5F5', // Nền ngoài sáng hơn để nổi bật viền đen
    alignItems: 'center' 
  },
  phoneWrapper: {
    flex: 1,
    backgroundColor: 'white',
    width: width > 500 ? 414 : '100%',
    position: 'relative',
    
    // PHẦN THÊM VIỀN ĐEN DÀY VÀ BO GÓC Ở ĐÂY
    borderLeftWidth: width > 500 ? 8 : 0, 
    borderRightWidth: width > 500 ? 8 : 0, 
    borderColor: '#181725', 
    borderRadius: width > 500 ? 30 : 0, 
    overflow: 'hidden',
    
    // Đổ bóng cho khung hình
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  scrollContent: { paddingBottom: 20 },
  header: { alignItems: 'center', marginTop: 10 },
  logo: { width: 30, height: 35 },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  locationText: { fontSize: 18, fontWeight: 'bold', color: '#4C4F4D', marginLeft: 5 },
  bannerContainer: { 
    marginHorizontal: 20, 
    marginVertical: 15, 
    borderRadius: 15, 
    overflow: 'hidden',
  },
  banner: { width: '100%', height: 115 }, 
  sectionHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    marginTop: 25 
  },
  sectionTitle: { fontSize: 24, fontWeight: 'bold', color: '#181725' },
  seeAll: { color: '#53B175', fontSize: 16, fontWeight: '600' },
  horizontalList: { 
    paddingLeft: 20, 
    marginTop: 15, 
    paddingRight: 20 
  },
  cardContainer: {
    flexDirection: 'row',
  },
});
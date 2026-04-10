import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  ScrollView, 
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { Colors } from '../constants/Colors';

const { width } = Dimensions.get('window');

export default function ProductDetailScreen() {
  const params = useLocalSearchParams();
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* KHUNG GIẢ LẬP ĐIỆN THOẠI */}
      <View style={styles.phoneWrapper}>
        
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          {/* 1. Header (Nút Back và Nút Share) */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <Image source={require('../assets/images/back_arrow.png')} style={styles.headerIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/images/share.png')} style={styles.headerIcon} />
            </TouchableOpacity>
          </View>

          {/* 2. Phần ảnh sản phẩm */}
          <View style={styles.imageSection}>
            <View style={styles.imageBackground}>
              <Image 
                source={require('../assets/images/apple.png')} 
                style={styles.productImage} 
                resizeMode="contain" 
              />
            </View>
            {/* 3. Pagination dots */}
            <View style={styles.paginationDots}>
              <View style={[styles.dot, styles.activeDot]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </View>

          {/* 4. Phần thông tin sản phẩm */}
          <View style={styles.infoSection}>
            <View style={styles.rowBetween}>
              <Text style={styles.productName}>{params.name || 'Natural Red Apple'}</Text>
              <TouchableOpacity>
                <Ionicons name="heart-outline" size={28} color="#7C7C7C" />
              </TouchableOpacity>
            </View>
            <Text style={styles.unitText}>{params.unit || '1kg, Price'}</Text>

            {/* 5. Số lượng & 6. Giá cả */}
            <View style={[styles.rowBetween, { marginTop: 30 }]}>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => quantity > 1 && setQuantity(quantity - 1)} style={styles.quantityBtn}>
                  <Ionicons name="remove" size={28} color="#7C7C7C" />
                </TouchableOpacity>
                <View style={styles.quantityBadge}>
                  <Text style={styles.quantityText}>{quantity}</Text>
                </View>
                <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.quantityBtn}>
                  <Ionicons name="add" size={28} color={Colors.primary || '#53B175'} />
                </TouchableOpacity>
              </View>
              <Text style={styles.priceText}>{params.price || '$4.99'}</Text>
            </View>

            <View style={styles.separator} />

            {/* 7. Product Detail */}
            <TouchableOpacity style={styles.detailHeader}>
              <Text style={styles.detailTitle}>Product Detail</Text>
              <Ionicons name="chevron-down" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.description}>
              Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples May Be Good For Your Heart. As Part Of A Healtful And Varied Diet.
            </Text>

            {/* 8. Nutritions */}
            <View style={styles.detailHeader}>
              <Text style={styles.detailTitle}>Nutritions</Text>
              <View style={styles.row}>
                <View style={styles.nutritionBadge}><Text style={styles.nutritionText}>100gr</Text></View>
                <Ionicons name="chevron-forward" size={20} color="black" />
              </View>
            </View>

            {/* 9. Review */}
            <View style={[styles.detailHeader, { borderBottomWidth: 0 }]}>
              <Text style={styles.detailTitle}>Review</Text>
              <View style={styles.row}>
                <View style={styles.stars}>
                  {[1,2,3,4,5].map(i => <Ionicons key={i} name="star" size={16} color="#F3603F" />)}
                </View>
                <Ionicons name="chevron-forward" size={20} color="black" />
              </View>
            </View>
          </View>

          {/* 10. Nút Add To Basket */}
          <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
            <Text style={styles.addButtonText}>Add To Basket</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#E0E0E0', 
    alignItems: 'center' 
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
  scrollContent: {
    paddingBottom: 20,
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20,
    paddingVertical: 15 
  },
  headerIcon: { width: 24, height: 24, resizeMode: 'contain' },
  imageSection: { 
    width: '100%', 
    alignItems: 'center', 
    marginBottom: 20 
  },
  imageBackground: { 
    width: '100%', // Đổi từ 90% sang 100% để bo góc sát lề phoneWrapper cho đẹp
    height: 300, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#F2F3F2', 
    borderBottomLeftRadius: 25, 
    borderBottomRightRadius: 25 
  },
  productImage: { width: '70%', height: '70%' },
  paginationDots: { flexDirection: 'row', marginTop: 15 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#E2E2E2', marginHorizontal: 3 },
  activeDot: { backgroundColor: '#53B175', width: 20 },
  infoSection: { padding: 25 },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  productName: { fontSize: 24, fontWeight: 'bold', color: '#181725' },
  unitText: { fontSize: 16, color: '#7C7C7C', marginTop: 5 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center' },
  quantityBtn: { padding: 5 },
  quantityBadge: { 
    width: 45, 
    height: 45, 
    borderRadius: 17, 
    borderWidth: 1, 
    borderColor: '#E2E2E2', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginHorizontal: 15 
  },
  quantityText: { fontSize: 18, fontWeight: 'bold', color: '#181725' },
  priceText: { fontSize: 24, fontWeight: 'bold', color: '#181725' },
  separator: { height: 1, backgroundColor: '#E2E2E2', marginVertical: 20 },
  detailHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingVertical: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2' 
  },
  detailTitle: { fontSize: 16, fontWeight: '600', color: '#181725' },
  description: { color: '#7C7C7C', lineHeight: 21, marginTop: 10, fontSize: 13 },
  row: { flexDirection: 'row', alignItems: 'center' },
  nutritionBadge: { backgroundColor: '#EBEBEB', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 5, marginRight: 10 },
  nutritionText: { fontSize: 12, color: '#7C7C7C', fontWeight: '500' },
  stars: { flexDirection: 'row', marginRight: 10 },
  addButton: { 
    backgroundColor: '#53B175', 
    marginHorizontal: 25, 
    marginTop: 10,
    height: 67, 
    borderRadius: 19, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  addButtonText: { color: 'white', fontSize: 18, fontWeight: '600' }
});
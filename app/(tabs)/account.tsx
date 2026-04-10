import React from 'react';
import { 
  View, Text, StyleSheet, SafeAreaView, Image, 
  TouchableOpacity, ScrollView, Dimensions, Platform 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

// Component dòng menu dùng chung
const AccountMenuItem = ({ iconName, label, onPress, showBorder = true }: any) => (
  <TouchableOpacity style={[styles.menuItem, showBorder && styles.borderBottom]} onPress={onPress}>
    <View style={styles.menuLeft}>
      <Ionicons name={iconName} size={24} color="#181725" />
      <Text style={styles.menuLabel}>{label}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#181725" />
  </TouchableOpacity>
);

export default function AccountScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.phoneWrapper}>
        
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header Thông tin cá nhân */}
          <View style={styles.profileHeader}>
            <Image 
              source={require('../../assets/images/user_avatar.png')} 
              style={styles.avatar} 
            />
            <View style={styles.profileInfo}>
              <View style={styles.nameRow}>
                <Text style={styles.userName}>Afsar Hossen</Text>
                <TouchableOpacity>
                  <Ionicons name="pencil" size={18} color="#53B175" />
                </TouchableOpacity>
              </View>
              <Text style={styles.userEmail}>Imshuvo97@gmail.com</Text>
            </View>
          </View>

          {/* Danh sách Menu */}
          <View style={styles.menuSection}>
            <AccountMenuItem iconName="bag-handle-outline" label="Orders" />
            <AccountMenuItem iconName="card-outline" label="My Details" />
            <AccountMenuItem iconName="location-outline" label="Delivery Address" />
            <AccountMenuItem iconName="card-outline" label="Payment Methods" />
            <AccountMenuItem iconName="pricetag-outline" label="Promo Cord" />
            <AccountMenuItem iconName="notifications-outline" label="Notifications" />
            <AccountMenuItem iconName="help-circle-outline" label="Help" />
            <AccountMenuItem iconName="information-circle-outline" label="About" showBorder={false} />
          </View>

          {/* NÚT LOG OUT ĐÃ SỬA: Nền xanh, chữ trắng */}
          <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.8}>
            <Ionicons name="log-out-outline" size={24} color="white" style={styles.logoutIcon} />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
          
          <View style={{ height: 100 }} /> 
        </ScrollView>

        {/* Tab Bar cố định ở dưới */}
        <View style={styles.bottomSection}>
          <View style={styles.customTabBar}>
            <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/(tabs)')}>
              <Ionicons name="storefront-outline" size={24} color="#181725" />
              <Text style={styles.tabLabel}>Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/(tabs)/explore')}>
              <Ionicons name="search-outline" size={24} color="#181725" />
              <Text style={styles.tabLabel}>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/(tabs)/cart')}>
              <Ionicons name="cart-outline" size={24} color="#181725" />
              <Text style={styles.tabLabel}>Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/(tabs)/favourite')}>
              <Ionicons name="heart-outline" size={24} color="#181725" />
              <Text style={styles.tabLabel}>Favourite</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
              <Ionicons name="person" size={24} color="#53B175" />
              <Text style={[styles.tabLabel, { color: '#53B175' }]}>Account</Text>
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
    alignSelf: 'center', position: 'relative',
    borderLeftWidth: width > 500 ? 8 : 0, borderRightWidth: width > 500 ? 8 : 0,
    borderColor: '#181725', borderRadius: width > 500 ? 30 : 0,
    overflow: 'hidden',
  },
  profileHeader: {
    flexDirection: 'row', alignItems: 'center',
    padding: 25, paddingTop: 40,
    borderBottomWidth: 1, borderBottomColor: '#F2F3F2',
  },
  avatar: { width: 64, height: 64, borderRadius: 27 },
  profileInfo: { marginLeft: 20, flex: 1 },
  nameRow: { flexDirection: 'row', alignItems: 'center' },
  userName: { fontSize: 20, fontWeight: 'bold', color: '#181725', marginRight: 5 },
  userEmail: { fontSize: 16, color: '#7C7C7C', marginTop: 2 },
  
  menuSection: { marginTop: 10 },
  menuItem: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingVertical: 18, paddingHorizontal: 25,
  },
  menuLeft: { flexDirection: 'row', alignItems: 'center' },
  menuLabel: { fontSize: 18, fontWeight: '600', color: '#181725', marginLeft: 15 },
  borderBottom: { borderBottomWidth: 1, borderBottomColor: '#F2F3F2' },

  // STYLE NÚT LOG OUT MỚI
  logoutBtn: {
    backgroundColor: '#53B175', // Màu xanh lá đặc trưng của Nectar
    height: 67, 
    borderRadius: 19,
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginHorizontal: 25, 
    marginTop: 30,
    // Đổ bóng cho nút nổi bật
    shadowColor: '#53B175',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  logoutIcon: { position: 'absolute', left: 25 },
  logoutText: { 
    color: 'white', // Chữ trắng cho nổi bật trên nền xanh
    fontSize: 18, 
    fontWeight: '600' 
  },

  bottomSection: { position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'white' },
  customTabBar: { 
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', 
    height: 80, borderTopWidth: 1, borderTopColor: '#F2F3F2', 
    paddingBottom: Platform.OS === 'ios' ? 20 : 10, backgroundColor: 'white' 
  },
  tabItem: { alignItems: 'center' },
  tabLabel: { fontSize: 12, fontWeight: '600', marginTop: 4, color: '#181725' },
});
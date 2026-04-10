import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, FlatList, SafeAreaView, 
  TouchableOpacity, Image, Dimensions, Platform, Modal 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const INITIAL_FAVOURITES = [
  { id: '1', name: 'Sprite Can', unit: '325ml, Price', price: 1.50, image: require('../../assets/images/sprite.png') },
  { id: '2', name: 'Diet Coke', unit: '355ml, Price', price: 1.99, image: require('../../assets/images/diet_coke.png') },
  { id: '3', name: 'Apple & Grape Juice', unit: '2L, Price', price: 15.50, image: require('../../assets/images/apple_juice.png') },
  { id: '4', name: 'Coca Cola Can', unit: '325ml, Price', price: 4.99, image: require('../../assets/images/coca_cola.png') },
  { id: '5', name: 'Pepsi Can', unit: '330ml, Price', price: 4.99, image: require('../../assets/images/pepsi.png') },
];

export default function FavouriteScreen() {
  const [favourites, setFavourites] = useState(INITIAL_FAVOURITES);
  const [isErrorVisible, setErrorVisible] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.phoneWrapper}>
        
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Favourite</Text>
        </View>

        <FlatList
          data={favourites}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => (
            <View style={styles.favItem}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemUnit}>{item.unit}</Text>
              </View>
              <View style={styles.rightSection}>
                <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
                <TouchableOpacity>
                  <Ionicons name="chevron-forward" size={20} color="#181725" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

        <View style={styles.bottomSection}>
          <TouchableOpacity 
            style={styles.addAllBtn} 
            activeOpacity={0.8}
            onPress={() => setErrorVisible(true)}
          >
            <Text style={styles.addAllText}>Add All To Cart</Text>
          </TouchableOpacity>

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
            <TouchableOpacity style={styles.tabItem}>
              <Ionicons name="heart" size={24} color="#53B175" />
              <Text style={[styles.tabLabel, { color: '#53B175' }]}>Favourite</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/(tabs)/account')}>
              <Ionicons name="person-outline" size={24} color="#181725" />
              <Text style={styles.tabLabel}>Account</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Modal Lỗi */}
        <Modal visible={isErrorVisible} transparent animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.closeIcon} onPress={() => setErrorVisible(false)}>
                <Ionicons name="close" size={24} color="#181725" />
              </TouchableOpacity>

              <Image 
                source={require('../../assets/images/order_failed.png')} 
                style={styles.errorImage}
                resizeMode="contain"
              />

              <Text style={styles.errorTitle}>Oops! Order Failed</Text>
              <Text style={styles.errorSubtitle}>Something went tembly wrong.</Text>

              <TouchableOpacity style={styles.tryAgainBtn} onPress={() => setErrorVisible(false)}>
                <Text style={styles.tryAgainText}>Please Try Again</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.backHomeBtn} 
                onPress={() => { setErrorVisible(false); router.push('/(tabs)'); }}
              >
                <Text style={styles.backHomeText}>Back to home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

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
    overflow: 'hidden', elevation: 5,
  },
  header: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#F2F3F2' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#181725' },
  listContent: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 160 },
  separator: { height: 1, backgroundColor: '#F2F3F2', marginVertical: 15 },
  favItem: { flexDirection: 'row', alignItems: 'center' },
  itemImage: { width: 60, height: 60, resizeMode: 'contain' },
  itemInfo: { flex: 1, marginLeft: 15 },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#181725' },
  itemUnit: { fontSize: 14, color: '#7C7C7C', marginTop: 2 },
  rightSection: { flexDirection: 'row', alignItems: 'center' },
  itemPrice: { fontSize: 16, fontWeight: '600', color: '#181725', marginRight: 10 },
  bottomSection: { position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'white' },
  addAllBtn: { backgroundColor: '#53B175', height: 67, borderRadius: 19, justifyContent: 'center', alignItems: 'center', marginHorizontal: 20, marginBottom: 20 },
  addAllText: { color: 'white', fontSize: 18, fontWeight: '600' },
  customTabBar: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 80, borderTopWidth: 1, borderTopColor: '#F2F3F2', paddingBottom: Platform.OS === 'ios' ? 20 : 10, backgroundColor: 'white' },
  tabItem: { alignItems: 'center' },
  tabLabel: { fontSize: 12, fontWeight: '600', marginTop: 4, color: '#181725' },

  // STYLES FIX TRÀN MÀN HÌNH
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    maxWidth: 380, // Giới hạn chiều rộng để nằm trong khung 414px
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    position: 'relative',
    elevation: 5,
  },
  closeIcon: { position: 'absolute', top: 15, left: 15 },
  errorImage: { width: 160, height: 160, marginBottom: 20 },
  errorTitle: { fontSize: 24, fontWeight: 'bold', color: '#181725', marginBottom: 10 },
  errorSubtitle: { fontSize: 16, color: '#7C7C7C', marginBottom: 30, textAlign: 'center' },
  tryAgainBtn: { backgroundColor: '#53B175', width: '100%', height: 60, borderRadius: 19, justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  tryAgainText: { color: 'white', fontSize: 18, fontWeight: '600' },
  backHomeBtn: { width: '100%', height: 50, justifyContent: 'center', alignItems: 'center' },
  backHomeText: { color: '#181725', fontSize: 18, fontWeight: '600' },
});
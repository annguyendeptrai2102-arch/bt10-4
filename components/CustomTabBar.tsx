import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { router, usePathname } from 'expo-router';

const { width } = Dimensions.get('window');

export default function CustomTabBar() {
  const pathname = usePathname();

  // Danh sách các Tab khớp với file icon bạn đã lưu
  const tabs = [
    { 
      name: 'Shop', 
      icon: require('../assets/images/shop_icon.png'), 
      path: '/' 
    },
    { 
      name: 'Explore', 
      icon: require('../assets/images/explore_icon.png'), 
      path: '/explore' 
    },
    { 
      name: 'Cart', 
      icon: require('../assets/images/cart_icon.png'), 
      path: '/cart' 
    },
    { 
      name: 'Favourite', 
      icon: require('../assets/images/favourite_icon.png'), 
      path: '/favourite' 
    },
    { 
      name: 'Account', 
      icon: require('../assets/images/account_icon.png'), 
      path: '/account' 
    },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        // Kiểm tra xem tab này có đang được chọn hay không
        const isActive = pathname === tab.path;

        return (
          <TouchableOpacity 
            key={tab.name} 
            style={styles.tabItem} 
            activeOpacity={0.7}
            onPress={() => router.push(tab.path)}
          >
            <Image 
              source={tab.icon} 
              style={[
                styles.icon, 
                { tintColor: isActive ? '#53B175' : '#181725' } // Đổi màu icon khi chọn
              ]} 
              resizeMode="contain"
            />
            <Text style={[
              styles.label, 
              { color: isActive ? '#53B175' : '#181725' } // Đổi màu chữ khi chọn
            ]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 90, // Tăng chiều cao để nhìn thoáng như app xịn
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#F2F3F2',
    paddingBottom: 25, // Đẩy icon lên trên một chút (tránh chạm mép dưới điện thoại)
    paddingTop: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    
    // Đổ bóng nhẹ cho thanh TabBar
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 10,

    // Bo góc dưới để khớp với phoneWrapper
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  tabItem: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  icon: { 
    width: 24, 
    height: 24, 
    marginBottom: 5 
  },
  label: { 
    fontSize: 12, 
    fontWeight: '600',
    fontFamily: 'System' // Hoặc font bạn đang dùng
  }
});
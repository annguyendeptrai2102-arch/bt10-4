import React from 'react';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Ẩn tiêu đề trang ở trên cùng
        
        /* QUAN TRỌNG: Dòng này sẽ ẩn hoàn toàn thanh điều hướng mặc định.
           Nó sẽ giúp bạn không bị tình trạng "2 thanh điều hướng" chồng lên nhau nữa.
        */
        tabBarStyle: { display: 'none' }, 
      }}
    >
      {/* Bạn PHẢI giữ các Screen ở đây để Expo Router hiểu 
          các file index, explore, cart... thuộc hệ thống Tabs 
      */}
      <Tabs.Screen name="index" options={{ title: 'Shop' }} />
      <Tabs.Screen name="explore" options={{ title: 'Explore' }} />
      <Tabs.Screen name="cart" options={{ title: 'Cart' }} />
      <Tabs.Screen name="favourite" options={{ title: 'Favourite' }} />
      <Tabs.Screen name="account" options={{ title: 'Account' }} />
    </Tabs>
  );
}
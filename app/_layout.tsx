import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

// Sửa lại đường dẫn tương đối để tránh lỗi @/
import { useColorScheme } from '../hooks/use-color-scheme';

export const unstable_settings = {
  // Đảm bảo app luôn bắt đầu từ nhóm tabs
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Nhóm màn hình chính có Bottom Tab */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        
        {/* Màn hình chi tiết sản phẩm - Hiển thị đè lên Tab */}
        <Stack.Screen 
          name="product-detail" 
          options={{ 
            presentation: 'card', // Hoặc 'modal' nếu bạn muốn vuốt xuống để đóng
            headerShown: false 
          }} 
        />

        {/* Màn hình danh mục đồ uống */}
        <Stack.Screen 
          name="beverages" 
          options={{ 
            headerShown: false // Chúng ta sẽ tự làm Header custom trong file beverages.tsx
          }} 
        />

        {/* Giữ lại modal mặc định nếu bạn cần dùng sau này */}
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
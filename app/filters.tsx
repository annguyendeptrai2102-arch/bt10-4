import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  ScrollView, 
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

const FilterItem = ({ label, isSelected, onPress }: { label: string, isSelected: boolean, onPress: () => void }) => (
  <TouchableOpacity style={styles.filterItemRow} onPress={onPress} activeOpacity={0.7}>
    <View style={[styles.checkbox, isSelected && styles.checkboxActive]}>
      {isSelected && <Ionicons name="checkmark" size={16} color="white" />}
    </View>
    <Text style={[styles.filterLabel, isSelected && styles.labelActive]}>{label}</Text>
  </TouchableOpacity>
);

export default function FiltersScreen() {
  const [categories, setCategories] = useState(['Eggs']);
  const [brands, setBrands] = useState(['Cocola']);

  const toggleSelection = (item: string, list: string[], setList: Function) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* phoneWrapper bây giờ đã có viền đen dày và bo góc */}
      <View style={styles.phoneWrapper}>
        
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.closeBtn}>
            <Ionicons name="close" size={28} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Filters</Text>
          <View style={{ width: 28 }} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <FilterItem 
              label="Eggs" 
              isSelected={categories.includes('Eggs')} 
              onPress={() => toggleSelection('Eggs', categories, setCategories)} 
            />
            <FilterItem 
              label="Noodles & Pasta" 
              isSelected={categories.includes('Noodles & Pasta')} 
              onPress={() => toggleSelection('Noodles & Pasta', categories, setCategories)} 
            />
            <FilterItem 
              label="Chips & Crisps" 
              isSelected={categories.includes('Chips & Crisps')} 
              onPress={() => toggleSelection('Chips & Crisps', categories, setCategories)} 
            />
            <FilterItem 
              label="Fast Food" 
              isSelected={categories.includes('Fast Food')} 
              onPress={() => toggleSelection('Fast Food', categories, setCategories)} 
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Brand</Text>
            <FilterItem 
              label="Individual Collection" 
              isSelected={brands.includes('Individual')} 
              onPress={() => toggleSelection('Individual', brands, setBrands)} 
            />
            <FilterItem 
              label="Cocola" 
              isSelected={brands.includes('Cocola')} 
              onPress={() => toggleSelection('Cocola', brands, setBrands)} 
            />
            <FilterItem 
              label="Ifad" 
              isSelected={brands.includes('Ifad')} 
              onPress={() => toggleSelection('Ifad', brands, setBrands)} 
            />
            <FilterItem 
              label="Kazi Farmas" 
              isSelected={brands.includes('Kazi')} 
              onPress={() => toggleSelection('Kazi', brands, setBrands)} 
            />
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.applyButton} 
            onPress={() => router.back()}
          >
            <Text style={styles.applyButtonText}>Apply Filter</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#E0E0E0', alignItems: 'center' },
  phoneWrapper: { 
    flex: 1, 
    backgroundColor: '#FFFFFF', 
    width: width > 500 ? 414 : '100%',
    alignSelf: 'center',
    overflow: 'hidden',

    // THÊM VIỀN ĐEN DÀY Ở ĐÂY
    borderLeftWidth: width > 500 ? 8 : 0, 
    borderRightWidth: width > 500 ? 8 : 0, 
    borderBottomWidth: width > 500 ? 8 : 0,
    borderColor: '#181725', 
    borderRadius: width > 500 ? 30 : 0,

    // Đổ bóng cho khung
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  closeBtn: { padding: 5 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  scrollContent: { 
    paddingHorizontal: 20, 
    paddingBottom: 40,
    backgroundColor: '#F2F3F2',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexGrow: 1,
    paddingTop: 20
  },
  section: { marginBottom: 30 },
  sectionTitle: { fontSize: 24, fontWeight: '600', color: '#181725', marginBottom: 20 },
  filterItemRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#B1B1B1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  checkboxActive: { backgroundColor: '#53B175', borderColor: '#53B175' },
  filterLabel: { fontSize: 16, color: '#181725' },
  labelActive: { color: '#53B175' },
  footer: { padding: 20, backgroundColor: '#F2F3F2' },
  applyButton: {
    backgroundColor: '#53B175',
    height: 65,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButtonText: { color: 'white', fontSize: 18, fontWeight: '600' },
});
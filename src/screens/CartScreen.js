import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function CartScreen() {
  const { cart } = useContext(AppContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🛒 Your Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.title}</Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    color: '#222',
  },
  item: {
    backgroundColor: '#f1f1f1',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#444',
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1976D2',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#1976D2',
  },
});

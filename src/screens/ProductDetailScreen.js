import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;
  const { addToCart, addToWishlist } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
      <Button title="Add to Wishlist" onPress={() => addToWishlist(product)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 12,
  },
  price: {
    fontSize: 18,
    color: '#1976D2',
    marginBottom: 20,
  },
});

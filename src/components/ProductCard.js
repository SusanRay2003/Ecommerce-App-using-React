import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ product }) => {
  const { addToCart, addToWishlist } = useContext(AppContext);
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
      <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.cartBtn]}
          onPress={() => {
            addToCart(product);
            navigation.navigate('Cart');
          }}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.wishlistBtn]}
          onPress={() => {
            addToWishlist(product);
            navigation.navigate('Wishlist');
          }}
        >
          <Text style={styles.buttonText}>Wishlist</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    margin: 6,
    width: '48%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    height: 120,
    width: '100%',
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginVertical: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1976D2',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 6,
    marginHorizontal: 4,
    borderRadius: 8,
  },
  cartBtn: {
    backgroundColor: '#1976D2',
  },
  wishlistBtn: {
    backgroundColor: '#FF4081',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default ProductCard;

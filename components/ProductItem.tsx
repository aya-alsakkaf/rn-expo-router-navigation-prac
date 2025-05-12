import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../data/products";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/ProductDetails`} asChild>
      <TouchableOpacity style={styles.container}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          contentFit="cover"
          transition={300}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <Text style={styles.category}>{product.category}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: "600",
    color: "#007AFF",
    marginBottom: 4,
  },
  category: {
    fontSize: 13,
    color: "#666",
  },
});

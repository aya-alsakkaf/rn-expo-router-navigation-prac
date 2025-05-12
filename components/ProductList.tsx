import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { products } from "../data/products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem product={item} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No products available</Text>
        }
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 50,
    color: "#666",
  },
});

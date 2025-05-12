import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { orders } from "../data/orders";
import OrderItem from "./OrderItem";

const OrderList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderItem order={item} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No orders available</Text>
        }
      />
    </View>
  );
};

export default OrderList;

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

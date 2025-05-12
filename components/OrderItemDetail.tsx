import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { OrderItem } from "../data/orders";

interface OrderItemDetailProps {
  item: OrderItem;
}

const OrderItemDetail = ({ item }: OrderItemDetailProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.product.image }}
        style={styles.image}
        contentFit="cover"
        transition={300}
      />
      <View style={styles.details}>
        <Text style={styles.name}>{item.product.name}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)} each</Text>
        <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
        <Text style={styles.subtotal}>
          Subtotal: ${(item.price * item.quantity).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default OrderItemDetail;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 6,
  },
  details: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  quantity: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  subtotal: {
    fontSize: 14,
    fontWeight: "600",
    color: "#007AFF",
  },
});

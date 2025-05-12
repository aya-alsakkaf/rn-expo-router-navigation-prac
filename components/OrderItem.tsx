import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Order } from "../data/orders";

interface OrderItemProps {
  order: Order;
}

const OrderItem = ({ order }: OrderItemProps) => {
  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return "#FFA500"; // Orange
      case "processing":
        return "#007AFF"; // Blue
      case "shipped":
        return "#5856D6"; // Purple
      case "delivered":
        return "#34C759"; // Green
      case "cancelled":
        return "#FF3B30"; // Red
      default:
        return "#8E8E93"; // Gray
    }
  };

  return (
    <Link href={`/order/${order.id}`} asChild>
      <TouchableOpacity style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.orderNumber}>{order.orderNumber}</Text>
          <View
            style={[
              styles.statusBadge,
              { backgroundColor: getStatusColor(order.status) },
            ]}
          >
            <Text style={styles.statusText}>
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </Text>
          </View>
        </View>

        <View style={styles.details}>
          <Text style={styles.date}>Ordered on {order.date}</Text>
          <Text style={styles.items}>
            {order.items.reduce((sum, item) => sum + item.quantity, 0)} items
          </Text>
          <Text style={styles.total}>${order.total.toFixed(2)}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  details: {
    marginTop: 4,
  },
  date: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  items: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  total: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007AFF",
    marginTop: 4,
  },
});

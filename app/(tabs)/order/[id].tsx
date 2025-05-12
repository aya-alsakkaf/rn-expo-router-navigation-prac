import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import OrderItemDetail from "../../../components/OrderItemDetail";
import { orders } from "../../../data/orders";

const OrderDetails = () => {
  const { id } = useLocalSearchParams();
  const order = orders.find((o) => o.id === id);

  if (!order) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Order not found</Text>
      </View>
    );
  }

  const getStatusColor = (status: typeof order.status) => {
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
    <ScrollView style={styles.container}>
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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Date:</Text>
          <Text style={styles.infoValue}>{order.date}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Total:</Text>
          <Text style={styles.infoValue}>${order.total.toFixed(2)}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Items:</Text>
          <Text style={styles.infoValue}>
            {order.items.reduce((sum, item) => sum + item.quantity, 0)}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shipping Address</Text>
        <Text style={styles.address}>{order.shippingAddress}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Items</Text>
        {order.items.map((item, index) => (
          <OrderItemDetail key={index} item={item} />
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal:</Text>
          <Text style={styles.summaryValue}>${order.total.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Shipping:</Text>
          <Text style={styles.summaryValue}>$0.00</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Tax:</Text>
          <Text style={styles.summaryValue}>$0.00</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalValue}>${order.total.toFixed(2)}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  errorText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
    color: "red",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  orderNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  infoLabel: {
    width: 100,
    fontSize: 15,
    color: "#666",
  },
  infoValue: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
  },
  address: {
    fontSize: 15,
    lineHeight: 22,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 15,
    color: "#666",
  },
  summaryValue: {
    fontSize: 15,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  totalLabel: {
    fontSize: 17,
    fontWeight: "600",
  },
  totalValue: {
    fontSize: 17,
    fontWeight: "600",
    color: "#007AFF",
  },
});

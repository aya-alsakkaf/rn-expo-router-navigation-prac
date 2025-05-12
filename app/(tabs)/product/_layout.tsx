import { Stack } from "expo-router";

export default function ProductLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Products" }} />
      <Stack.Screen name="[id]" options={{ title: "Product Details" }} />
    </Stack>
  );
}

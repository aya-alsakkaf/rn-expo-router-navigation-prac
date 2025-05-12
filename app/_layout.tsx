import { Stack } from "expo-router";
import React from "react";
import { Button } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="product/[id]"
        options={{
          title: "Product Details",
          headerBackTitle: "Go Back",
          headerRight: () => (
            <Button
              title="Edit"
              onPress={() => {
                alert("You Edited The Product");
              }}
            />
          ),
        }}
      />
    </Stack>
  );
}

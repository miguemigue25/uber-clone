import { Slot } from "expo-router";
import { View } from "react-native";
import "../global.css";

export default function RootLayout() {
  return (
    <View className="flex-1">
      <Slot />
    </View>
  );
}

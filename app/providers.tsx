import { PropsWithChildren } from "react";
import { View } from "react-native";

export default function Provider({ children }: PropsWithChildren) {
  return (
    <View className="flex-1">
      {children}
    </View>
  );
}
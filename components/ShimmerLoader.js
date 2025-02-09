import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ShimmerLoader() {
  return (
    <View style={styles.card}>
      <LinearGradient
        colors={["#E0E0E0", "#F5F5F5", "#E0E0E0"]}
        style={styles.shimmer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ddd",
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
  },
  shimmer: {
    flex: 1,
    width: "100%",
  },
});

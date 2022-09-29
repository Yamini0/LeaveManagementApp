import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

type TitleHeaderProps = {
  title: string;
};

export const TitleHeader: FC<TitleHeaderProps> = ({ title }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  titleContainer: {
    paddingStart: 16,
    paddingBottom: 16,
  },
  title: {
    color: "#1F1E1E",
    fontSize: 24,
    fontWeight: "bold",
  },
});

import React, { FC, useCallback, useContext } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { deviceWidth } from "../../utils";
import { CalenderItems } from "../../Context";

type TouchableCardsProps = {
  onPress: (item: any) => void;
  item: any;
};

export const TouchableCards: FC<TouchableCardsProps> = ({ item, onPress }) => {
  const { selectedCard, setSelectedCard } = useContext<any>(CalenderItems);

  const handlePress = useCallback(() => {
    if (item.id === selectedCard) {
      setSelectedCard("");
    } else {
      setSelectedCard(item.id);
    }
    onPress(item);
  }, []);

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.container,
        { backgroundColor: selectedCard === item.id ? "#000" : "#E3E3E3" },
      ]}
    >
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name={item?.icon} size={24} color="black" />
      </View>
      <Text
        style={[
          styles.title,
          { color: selectedCard === item.id ? "#FFF" : "#938F8d" },
        ]}
      >
        {item?.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 2,
    width: deviceWidth / 2.3,
    padding: 24,
    justifyContent: "flex-start",
    borderRadius: 22,
  },
  iconContainer: {
    marginVertical: 8,
    backgroundColor: "#FCF9F4",
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 24,
  },
});

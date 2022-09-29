import React, { FC } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { deviceHeight, deviceWidth } from "../../utils";

type HeaderContainerProps = {
  children: any;
  childHeight: number | string;
  px?: number;
};

export const HeaderContainer: FC<HeaderContainerProps> = ({
  children,
  childHeight,
  px,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://i.pravatar.cc/300" }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
      <View
        style={[
          styles.childrenContainer,
          { height: childHeight },
          { paddingHorizontal: px },
        ]}
      >
        {children}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7AD18",
    flex: 1,
    paddingTop: 16,
  },
  profileHeader: {
    zIndex: 10,
    width: 120,
    borderBottomWidth: 10,
    borderEndWidth: 10,
    borderEndColor: "#F7AD18",
    borderStartWidth: 10,
    borderStartColor: "#F7AD18",
    borderBottomColor: "#F7AD18",
    height: 120,
    alignSelf: "center",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#a00",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 60,
    elevation: 30,
  },
  imageContainer: {
    zIndex: 10,
    width: 104,
    height: 104,
    alignSelf: "center",
    position: "absolute",
    margin: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 52,
  },
  childrenContainer: {
    top: 90,
    alignSelf: "center",
    position: "absolute",
    backgroundColor: "#fff",
    width: deviceWidth - 16,
    borderRadius: 16,
    paddingBottom: 16,
    paddingTop: 56,
  },
});

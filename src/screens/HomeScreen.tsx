import React, { FC, useCallback, useContext, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

import { HeaderContainer } from "../Components/HeaderContainer";

import { MainStackScreen } from "../typings/routers";
import { deviceHeight } from "../utils";
import { LeaveStatusData } from "../Constants";
import { CalenderItems } from "../Context";

export const HomeScreen: FC<MainStackScreen<"HomeScreen">> = ({
  navigation,
}) => {
  const { leaveData } = useContext<any>(CalenderItems);

  const handleAddPress = useCallback(() => {
    navigation.navigate("RequestScreen");
  }, []);
  useEffect(() => {}, [leaveData]);

  return (
    <SafeAreaView style={styles.wrapper} edges={["top"]}>
      <StatusBar backgroundColor="#F7AD18" />
      <HeaderContainer childHeight={deviceHeight / 3.5} px={16}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.title}>Yamini Sharma</Text>
            <Text style={styles.subTitle}>React Native Developer</Text>
          </View>
          <TouchableOpacity onPress={handleAddPress} style={styles.iconButton}>
            <AntDesign name="plus" size={16} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.horizontalDivider} />

        <View style={styles.row}>
          {leaveData.map((item, index) => {
            const isLast = index === leaveData.length - 1;

            return (
              <View style={styles.mainRowContainer} key={`${item.id}`}>
                <View style={styles.rowContainer}>
                  <Text style={styles.header}>{item.title}</Text>

                  <Text style={styles.dayCountText}>{item.daysCount}</Text>
                </View>

                {!isLast && <View style={styles.verticalDivider} />}
              </View>
            );
          })}
        </View>
      </HeaderContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  verticalDivider: {
    width: 1,
    height: "100%",
    backgroundColor: "#A2A09D",
  },
  dayCountText: {
    marginTop: 4,
    color: "#1F1E1E",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 20,
  },
  header: {
    color: "#938F8C",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
  },
  rowContainer: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 8,
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
  },
  mainRowContainer: {
    flexDirection: "row",
    flex: 1,
  },
  horizontalDivider: {
    width: "100%",
    height: 1,
    backgroundColor: "#A2A09D",
    marginVertical: 24,
  },
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#000",
  },
  subTitle: {
    color: "#938F8C",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },
  title: {
    color: "#1F1E1E",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 32,
  },
});

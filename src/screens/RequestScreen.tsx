import React, { FC, useCallback, useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
  TextInput,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { HeaderContainer } from "../Components/HeaderContainer";
import { TitleHeader } from "../Components/TitleHeader";

import { deviceHeight } from "../utils";

import { CalenderItems } from "../Context";

import { TouchableCards } from "../Components/TouchableCards";
import { Button } from "../Components/Button";

import { MainStackScreen } from "../typings/routers";
import { RequestCarddataType } from "../typings/common";

import { RequestCarddata } from "../Constants";

export const RequestScreen: FC<MainStackScreen<"RequestScreen">> = ({
  navigation,
}) => {
  const {
    selectedStartDate,
    selectedEndDate,
    selectedCardItem,
    setSelectedCardItem,
    finalData,
    setFinalData,
  } = useContext<any>(CalenderItems);

  const handleCardSelection = useCallback((item: RequestCarddataType) => {
    setSelectedCardItem(item);
  }, []);

  const renderItems = useCallback(
    ({ item }: ListRenderItemInfo<RequestCarddataType>) => {
      return (
        <TouchableCards
          onPress={(val) => handleCardSelection(val)}
          item={item}
        />
      );
    },
    []
  );

  const handleSubmit = useCallback(() => {
    if (finalData === null) {
      Alert.alert("Error", "Kindly select leave type.");
    } else {
      const _finalObj = {
        leave_type: selectedCardItem.title,
        leave_from: selectedStartDate,
        leave_to: selectedEndDate,
      };
      setFinalData(_finalObj);

      navigation.navigate("HomeScreen");
    }
  }, []);

  return (
    <View style={styles.container}>
      <HeaderContainer childHeight={deviceHeight / 1.2} px={16}>
        <TitleHeader title="New Request" />
        <KeyboardAwareScrollView
          enableOnAndroid
          showsVerticalScrollIndicator={false}
          extraScrollHeight={80}
          keyboardShouldPersistTaps="handled"
        >
          <FlatList
            data={RequestCarddata}
            renderItem={renderItems}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("CalenderView")}
            style={[styles.textinputContainer, { marginTop: 56 }]}
          >
            <TextInput
              placeholder="From"
              value={selectedStartDate}
              editable={false}
              autoCorrect={false}
              style={styles.textInputColor}
            />
          </TouchableOpacity>
          <View style={styles.textinputContainer}>
            <TextInput
              placeholder="To"
              value={selectedEndDate}
              editable={false}
              autoCorrect={false}
              style={styles.textInputColor}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Submit" onPress={handleSubmit} btnWidth="100%" />
          </View>
        </KeyboardAwareScrollView>
      </HeaderContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  buttonContainer: {
    marginTop: 64,
  },
  textInputColor: {
    color: "#000",
  },
  textinputContainer: {
    marginVertical: 16,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#E3E3E3",
  },
});

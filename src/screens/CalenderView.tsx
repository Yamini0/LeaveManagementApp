import React, { FC, useCallback, useContext } from "react";
import { Alert, StyleSheet, View, Text } from "react-native";
import { CalendarList } from "react-native-calendars";
import moment from "moment";

import { Button } from "../Components/Button";
import { CalenderItems } from "../Context";
import { HeaderContainer } from "../Components/HeaderContainer";
import { deviceHeight } from "../utils";
import { TitleHeader } from "../Components/TitleHeader";
import { MainStackScreen } from "../typings/routers";

type dayType = {
  year: number;
  month: number;
  day: number;
  timestamp: number;
  dateString: string;
};

export const CalenderView: FC<MainStackScreen<"CalenderView">> = ({
  navigation,
}) => {
  const theme = {
    backgroundColor: "#ffffff",
    calendarBackground: "#ffffff",
    selectedDayBackgroundColor: "#ff8b3d",
    selectedDayTextColor: "#ffffff",
    todayTextColor: "#ff8b3d",
    dayTextColor: "#2d4150",
    monthTextColor: "#000",
    textDayFontFamily: "monospace",
    textMonthFontFamily: "monospace",
    textDayHeaderFontFamily: "monospace",
    textDayFontWeight: "300",
    textMonthFontWeight: "bold",
    textDayHeaderFontWeight: "900",
    textDayFontSize: 16,
    textMonthFontSize: 18,
  };
  const {
    selectedStartDate,
    selectedEndDate,
    setSelectedStartDate,
    setSelectedEndDate,
    setIsEndDatePicked,
    isStartDatePicked,
    setIsStartDatePicked,
    markedDates,
    setMarkedDates,

    leaveData,
    setLeaveData,
    leaveDuration,

    setLeaveDuration,
  } = useContext<any>(CalenderItems);

  const onDayPress = (day: dayType) => {
    if (isStartDatePicked == false) {
      const markedDates: any = {};
      markedDates[day.dateString] = {
        startingDay: true,
        color: "#ff8b3d",
        textColor: "#FFFFFF",
      };
      setMarkedDates(markedDates);
      setIsStartDatePicked(true);
      setIsEndDatePicked(false);
      setSelectedStartDate(day.dateString);
    } else {
      const _markedDates = markedDates;

      const _startDate = moment(selectedStartDate);
      const _endDate = moment(day.dateString);

      const _range = _endDate.diff(selectedStartDate, "days");
      setLeaveDuration(_range);
      if (_range > 0) {
        for (let i = 1; i <= _range; i++) {
          var tempDate: number = Number(_startDate.add(1, "day"));
          tempDate = moment(tempDate).format("YYYY-MM-DD");
          if (i < _range) {
            _markedDates[tempDate] = { color: "#F3F3EF", textColor: "#000" };
          } else {
            _markedDates[tempDate] = {
              endingDay: true,
              color: "#ff8b3d",
              textColor: "#FFFFFF",
            };
          }
        }
        setMarkedDates(_markedDates);
        setIsStartDatePicked(false);
        setIsEndDatePicked(true);
        setSelectedEndDate(day.dateString);
      } else {
        Alert.alert("Error", "Kindly select an upcomming date.");
      }
    }
  };

  const onButtonPress = useCallback(() => {
    if (selectedStartDate !== "" && selectedEndDate === "") {
      Alert.alert("Error", "Kindly select an upcomming date.");
    } else {
      const updatedLeaveData = leaveData.map((item: any) => {
        if (item.title === "Used") {
          const range = `${leaveDuration} days`;
          return {
            ...item,
            daysCount: range,
            days: leaveDuration,
          };
        } else if (item.title === "Available") {
          const leftDays = item.days - leaveDuration;
          return {
            ...item,
            daysCount: `${leftDays} days`,
            days: leftDays,
          };
        }
        return { ...item };
      });

      setLeaveData(updatedLeaveData);

      navigation.goBack();
    }
  }, []);

  console.log("from calender", leaveData);

  return (
    <View style={styles.container}>
      <HeaderContainer childHeight={deviceHeight / 1.17}>
        <TitleHeader title="New Request" />
        <View style={styles.calenderContainer}>
          <CalendarList
            minDate={Date()}
            monthFormat={"MMMM yyyy"}
            markedDates={markedDates}
            markingType="period"
            onDayPress={onDayPress}
            theme={theme}
            style={{ alignSelf: "flex-start" }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Select" onPress={onButtonPress} />
        </View>
      </HeaderContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  calenderContainer: {
    flex: 5,
  },
  buttonContainer: {
    backgroundColor: "#fff",
    alignItems: "flex-end",
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  textStyle: {
    marginTop: 10,
  },
  titleStyle: {
    textAlign: "center",
    fontSize: 20,
    margin: 20,
  },
  backBtn: {
    color: "#1F1E1E",
    fontSize: 18,
    lineHeight: 24,
  },
});

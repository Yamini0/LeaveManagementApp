import React, { createContext, useState } from "react";
import { LeaveStatusData } from "../Constants";
import { RequestCarddataType } from "../typings/common";

const CalenderItems = createContext();

const BaseContext = ({ children }: any) => {
  const [leaveData, setLeaveData] = useState(LeaveStatusData);

  const [selectedStartDate, setSelectedStartDate] = useState<string>("");
  const [selectedEndDate, setSelectedEndDate] = useState<string>("");
  const [isEndDatePicked, setIsEndDatePicked] = useState<boolean>(false);
  const [isStartDatePicked, setIsStartDatePicked] = useState<boolean>(false);
  const [markedDates, setMarkedDates] = useState<any>({});

  const [leaveDuration, setLeaveDuration] = useState<number>(0);

  const [selectedCard, setSelectedCard] = useState("");
  const [selectedCardItem, setSelectedCardItem] = useState<RequestCarddataType>(
    {
      id: "",
      title: "",
      icon: "",
    }
  );

  const [finalData, setFinalData] = useState({});

  return (
    <CalenderItems.Provider
      value={{
        leaveData,
        setLeaveData,

        selectedStartDate,
        setSelectedStartDate,
        selectedEndDate,
        setSelectedEndDate,
        isEndDatePicked,
        setIsEndDatePicked,
        isStartDatePicked,
        setIsStartDatePicked,
        markedDates,
        setMarkedDates,

        leaveDuration,
        setLeaveDuration,

        selectedCard,
        setSelectedCard,

        selectedCardItem,
        setSelectedCardItem,

        finalData,
        setFinalData,
      }}
    >
      {children}
    </CalenderItems.Provider>
  );
};

export { BaseContext, CalenderItems };

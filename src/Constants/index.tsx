import { LeaveStatusDataType, RequestCarddataType } from "../typings/common";

export const RequestCarddata: RequestCarddataType[] = [
  {
    id: "1",
    title: "Annual",
    icon: "calendar-month",
  },
  {
    id: "2",
    title: "Parential",
    icon: "car-child-seat",
  },
  {
    id: "3",
    title: "Unpaid",
    icon: "camera-document-off",
  },
  {
    id: "4",
    title: "Special",
    icon: "star",
  },
];

export const LeaveStatusData: LeaveStatusDataType[] = [
  { id: 1, title: "Available", daysCount: "20 days", days: 20 },
  { id: 2, title: "All", daysCount: "30 days", days: 30 },
  { id: 3, title: "Used", daysCount: "0 days", days: 0 },
];

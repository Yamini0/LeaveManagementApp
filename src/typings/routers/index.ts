import type { StackScreenProps } from "@react-navigation/stack";

export type MainStackParamList = {
  HomeScreen: undefined;
  RequestScreen: undefined;
  CalenderView: undefined;
};

export type MainStackScreen<RouteName extends keyof MainStackParamList> =
  StackScreenProps<MainStackParamList, RouteName>;

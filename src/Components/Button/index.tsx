import React, { FC } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
} from "react-native";

type Props = {
  title: string;
  backgroundColor?: string;
  border?: boolean;
  onPress: () => void;
  btnWidth?: string | number;
  textStyle?: StyleProp<TextStyle>;
};

export const Button: FC<Props> = ({
  title,
  backgroundColor,
  onPress,
  border,
  btnWidth,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { width: btnWidth ? btnWidth : "40%" },
        { backgroundColor: backgroundColor },
        { borderColor: border ? "#D3C9C7" : "transparent" },
      ]}
      onPress={onPress}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 26,
    borderWidth: 1,
  },
});

Button.defaultProps = {
  title: "",
  backgroundColor: "#FF8B3D",
  border: false,
  textStyle: {
    color: "#FFF",
    fontSize: 18,
    lineHeight: 24,
  },
};

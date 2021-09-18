import React from "react";
import { Platform, Text, Dimensions, PixelRatio } from "react-native";
import { textColor } from "../../constants/colors";
export default function Texts({
  children,
  style,
  weight,
  scale,
  bigFont,
  medium,
  bold,
  regular,
}) {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
    "window"
  );
  function actuatedNormalize(size) {
    const scale = SCREEN_WIDTH / 340;
    const newSize = size * scale;
    if (Platform.OS === "ios") {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
  }
  return (
    <Text
      style={[
        {color:textColor},
        style,
        {
          fontFamily: medium
            ? "Poppins-Medium"
            : bold
            ? "Poppins-Bold"
            : regular
            ? "Poppins-Regular"
            : "Poppins-Regular",
        },
        bigFont && { fontSize: 24, lineHeight: 32 },
        scale && { fontSize: scale && actuatedNormalize(12) },
        {
          fontWeight: weight
            ? Platform.OS === "ios"
              ? fontWeight[weight][Platform.OS]
              : fontWeight[weight][Platform.OS]
            : null,
        },
      ]}
    >
      {children}
    </Text>
  );
}
const fontWeight = {
  regular: {
    android: "normal",
    ios: "400",
  },
  medium: {
    android: "normal",
    ios: "500",
  },
  bold: {
    android: "bold",
    ios: "700",
  },
  extrabold: {
    android: "bold",
    ios: "900",
  },
  light: {
    android: "normal",
    ios: "300",
  },
};

import React, { useRef, useState } from "react";
import { useTheme } from "@react-navigation/native";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Animated,
  ScrollView,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONTS, IMAGES, SIZES } from "../../constants/theme";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import Button from "../../components/Button/Button";

const DATA = [
  {
    title: "A New Generation of Natural Cosmetic Ingredients",
    desc: "Because You Need Time for Yourself. Blend Beauty in You",
  },
  {
    title: "A New Generation of Natural Cosmetic Ingredients",
    desc: "Because You Need Time for Yourself. Blend Beauty in You",
  },
  {
    title: "A New Generation of Natural Cosmetic Ingredients",
    desc: "Because You Need Time for Yourself. Blend Beauty in You",
  },
];

const PhotoSkin = ({ navigation }) => {
  const theme = useTheme();
  const { colors } = theme;
  const scrollRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;

  const [sliderIndex, setSliderIndex] = useState(1);

  const onScroll = (val) => {
    navigation.navigate("Steps");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={[
            GlobalStyleSheet.container,
            { padding: 0, flex: 0.8, justifyContent: "center", marginTop: 50 },
          ]}
        >
          <View style={{ width: "75%", alignSelf: "center" }}>
            <Text
              style={{
                marginVertical: 10,
                ...FONTS.fontBold,
                fontSize: 20,
                fontWeight: "800",
                textAlign: "center",
                color: colors.title,
              }}
            >
              {"Do you currenlty follow a skincare routine?"}
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Button
                style={{ width: "50%", marginBottom: 20 }}
                title={"Yes"}
                size={"lg"}
                btnRounded
                color={colors.title}
                onPress={() => {}}
              />
              <Button
                style={{ width: "50%", marginBottom: 20, marginLeft: 20 }}
                title={"No"}
                size={"lg"}
                btnRounded
                color={colors.title}
                onPress={() => {}}
              />
            </View>
          </View>
          <View
            style={[
              GlobalStyleSheet.row,
              {
                justifyContent: "center",
                alignSelf: "center",
                width: "85%",
                paddingVertical: 5,
              },
            ]}
          >
            <Text
              style={{
                marginVertical: 10,
                ...FONTS.fontBold,
                fontSize: 20,
                fontWeight: "800",
                textAlign: "center",
                color: colors.title,
              }}
            >
              {"if yes, how consistent are you with your routine?"}
            </Text>
            {[
              "Always consistent",
              "Mostly consistent",
              "Occasionally consistent",
              "Rarely consistent",
            ].map((item, index) => {
              return (
                <Button
                  key={index}
                  style={{ width: "80%", marginBottom: 20 }}
                  title={item}
                  size={"lg"}
                  btnRounded
                  color={colors.title}
                  onPress={() => alert(`Selected ${item}`)}
                />
              );
            })}
          </View>
        </View>

        <View style={[GlobalStyleSheet.container, { paddingHorizontal: 40 }]}>
          <TouchableOpacity style={{ width: "30%", alignSelf: "flex-end" }}>
            <Button
              onPress={() => onScroll(sliderIndex)}
              title={"Next"}
              btnRounded
              color={colors.title}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

function Indicator({ i, scrollValue }) {
  const theme = useTheme();
  const { colors } = theme;

  const translateX = scrollValue.interpolate({
    inputRange: [
      -SIZES.width + i * SIZES.width,
      i * SIZES.width,
      SIZES.width + i * SIZES.width,
    ],
    outputRange: [-20, 0, 20],
  });
  return (
    <View
      style={[
        styles.indicator,
        {
          backgroundColor: theme.dark
            ? "rgba(255,255,255,0.20)"
            : "rgba(0, 0, 0, 0.20)",
          borderColor: theme.dark
            ? "rgba(255,255,255,0.20)"
            : "rgba(0, 0, 0, 0.20)",
        },
      ]}
    >
      <Animated.View
        style={[
          styles.activeIndicator,
          { transform: [{ translateX }], backgroundColor: colors.title },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slideItem: {
    width: SIZES.width,
    paddingBottom: 30,
  },
  slideItem2: {
    width: SIZES.width,
    alignItems: "center",
    justifyContent: "center",
    // padding: 20,
    paddingBottom: 0,
    paddingTop: 20,
  },

  indicatorConatiner: {
    alignSelf: "flex-end",
    position: "absolute",
    flexDirection: "row",
    paddingRight: 30,
    top: -30,
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    overflow: "hidden",
  },
  activeIndicator: {
    height: "100%",
    width: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
});
export default PhotoSkin;

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

const Onbording = ({ navigation }) => {
  const theme = useTheme();
  const { colors } = theme;
  const scrollRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;

  const [sliderIndex, setSliderIndex] = useState(1);

  const onScroll = (val) => {
    if (sliderIndex == 3) {
      navigation.navigate("SignIn");
    }
    // console.log(scrollX);
    scrollRef.current?.scrollTo({
      // x: val.nativeEvent.contentOffset.x,
      x: SIZES.width * val,
      animated: true,
    });

    setSliderIndex(sliderIndex + 1);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[GlobalStyleSheet.container, { padding: 0, flex: 0.8 }]}>
          <View
            style={[GlobalStyleSheet.row, { justifyContent: "space-between" }]}
          >
            <View
              style={[
                GlobalStyleSheet.col50,
                {
                  transform: [{ rotate: "-41.8deg" }],
                  height: undefined,
                  aspectRatio: 1 / 1.5,
                  backgroundColor: "#C7C8CC",
                  marginTop: -100,
                  marginLeft: -40,
                  overflow: "hidden",
                  borderBottomLeftRadius: 160,
                  borderBottomRightRadius: 160,
                  borderTopRightRadius: 100,
                },
              ]}
            >
              <Image
                style={{
                  width: "100%",
                  height: undefined,
                  aspectRatio: 2.4 / 3.2,
                  transform: [{ rotate: "41.8deg" }, { scale: 1.1 }],
                  marginTop: 60,
                  marginLeft: 25,
                }}
                source={IMAGES.item1}
              />
            </View>
            <View
              style={[
                GlobalStyleSheet.col50,
                {
                  width: 144,
                  height: 144,
                  borderRadius: 100,
                  backgroundColor: COLORS.white,
                  marginRight: 50,
                  marginTop: -30,
                  alignItems: "center",
                },
              ]}
            >
              <Image
                style={{
                  resizeMode: "contain",
                  width: 73,
                  height: 110,
                  marginTop: 40,
                }}
                source={IMAGES.item3}
              />
            </View>
          </View>
          <View
            style={[GlobalStyleSheet.row, { justifyContent: "space-between" }]}
          >
            <View
              style={[
                GlobalStyleSheet.col50,
                {
                  width: 190,
                  height: 190,
                  borderRadius: 150,
                  backgroundColor: COLORS.white,
                  marginLeft: -30,
                  marginTop: 70,
                  overflow: "visible",
                },
              ]}
            >
              <Image
                style={{
                  height: 240,
                  width: 95,
                  marginLeft: 47,
                  marginTop: -60,
                }}
                source={IMAGES.item21}
              />
            </View>
            <View
              style={[
                GlobalStyleSheet.col50,
                {
                  transform: [{ rotate: "-135deg" }],
                  height: undefined,
                  aspectRatio: 1 / 1,
                  backgroundColor: "#D2C1AF",
                  marginTop: "-60%",
                  marginRight: -80,
                  overflow: "hidden",
                  borderRadius: 160,
                },
              ]}
            >
              <Image
                style={{
                  width: "100%",
                  height: undefined,
                  aspectRatio: 1 / 1.3,
                  transform: [{ rotate: "135deg" }, { scale: 1.5 }],
                  marginTop: 52,
                }}
                source={IMAGES.item2}
              />
            </View>
          </View>
        </View>
        <View style={[{ marginTop: 10 }]}>
          <View
            style={[
              styles.indicatorConatiner,
              Platform.OS === "ios" && {
                bottom: 10,
              },
            ]}
            pointerEvents="none"
          >
            {DATA.map((x, i) => (
              <Indicator i={i} key={i} scrollValue={scrollX} />
            ))}
          </View>
          <ScrollView
            // contentContainerStyle={{ marginTop: 20 }}
            ref={scrollRef}
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            //contentContainerStyle={{ height: 50 }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
          >
            {DATA.map((data, index) => (
              <View
                style={[
                  styles.slideItem,
                  Platform.OS === "ios" &&
                    {
                      // paddingBottom:35
                    },
                ]}
                key={index}
              >
                <View style={{ paddingHorizontal: 30 }}>
                  <Text
                    style={{
                      ...FONTS.Marcellus,
                      fontSize: 30,
                      textAlign: "left",
                      color: colors.title,
                    }}
                  >
                    {data.title}
                  </Text>
                  <Text
                    style={{
                      ...FONTS.fontRegular,
                      fontSize: 18,
                      textAlign: "left",
                      lineHeight: 24,
                      color: colors.title,
                      paddingTop: 10,
                      paddingRight: 50,
                    }}
                  >
                    {data.desc}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={[GlobalStyleSheet.container, { paddingHorizontal: 40 }]}>
          <View
            style={[
              GlobalStyleSheet.row,
              { justifyContent: "space-between", alignItems: "center" },
            ]}
          >
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text
                style={{
                  ...FONTS.fontRegular,
                  fontSize: 16,
                  color: colors.title,
                  textDecorationLine: "underline",
                }}
              >
                Skip
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: "30%" }}>
              <Button
                onPress={() => onScroll(sliderIndex)}
                title={"Next"}
                btnRounded
                color={colors.title}
              />
            </TouchableOpacity>
          </View>
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
export default Onbording;

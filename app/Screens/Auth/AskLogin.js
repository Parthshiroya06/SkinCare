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

const AskLogin = ({ navigation }) => {
  const theme = useTheme();
  const { colors } = theme;
  const scrollRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;

  const [sliderIndex, setSliderIndex] = useState(1);

  const onScroll = (val) => {
    navigation.navigate(val);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={[
            GlobalStyleSheet.container,
            { justifyContent: "center", padding: 0, flex: 0.8 },
          ]}
        >
          <View>
            <Text
              style={{
                marginTop: 10,
                ...FONTS.Marcellus,
                fontSize: 30,
                fontWeight: "800",
                textAlign: "center",
                color: colors.title,
              }}
            >
              {"SkinSync"}
            </Text>
          </View>
          <Image
            style={{
              width: "80%",
              height: undefined,
              alignSelf: "center",
              aspectRatio: 1.5,

              marginTop: 52,
            }}
            source={IMAGES.sinkcare1}
          />
          <View
            style={[
              GlobalStyleSheet.row,
              { justifyContent: "center", marginTop: 50 },
            ]}
          >
            <Button
              style={{ width: "80%" }}
              title={"I'm a new, Sign me up"}
              size={"lg"}
              btnRounded
              color={colors.title}
              onPress={() => {
                onScroll("SignUp");
              }}
            />
            <Button
              style={{ width: "80%", marginTop: 20 }}
              title={"I'm a already a member"}
              size={"lg"}
              btnRounded
              color={colors.title}
              onPress={() => {
                onScroll("SignIn");
              }}
            />
          </View>
        </View>

        {/* <View style={[{ marginTop: 10 }]}>
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
        </View> */}
        {/* <View style={[GlobalStyleSheet.container, { paddingHorizontal: 40 }]}>
          <TouchableOpacity style={{ width: "30%", alignSelf: "flex-end" }}>
            <Button
              onPress={() => onScroll(sliderIndex)}
              title={"Next"}
              btnRounded
              color={colors.title}
            />
          </TouchableOpacity>
        </View> */}
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
export default AskLogin;

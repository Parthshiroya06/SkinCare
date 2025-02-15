import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  LayoutAnimation,
  Platform,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { FONTS, IMAGES } from "../../constants/theme";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import Button from "../../components/Button/Button";
import Header from "../../layout/Header";
import SwiperBox2 from "../../components/SwiperBox2";

const CardStyleData = [
  {
    image: IMAGES.item11,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
  },
  {
    image: IMAGES.item12,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    text: "FREE",
  },
  {
    image: IMAGES.item32,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    text: "FREE",
  },
  {
    image: IMAGES.item34,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    text: "FREE",
  },
  {
    image: IMAGES.item38,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    text: "FREE",
  },
  {
    image: IMAGES.item11,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
  },
  {
    image: IMAGES.item12,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    text: "FREE",
  },
  {
    image: IMAGES.item32,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    text: "FREE",
  },
  {
    image: IMAGES.item34,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    text: "FREE",
  },
  {
    image: IMAGES.item38,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    text: "FREE",
  },
];

const Shopping = () => {
  const theme = useTheme();
  const { colors } = theme;

  const [lists, setLists] = useState(CardStyleData);

  const deleteItem = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    const arr = [...lists];
    arr.splice(index, 1);
    setLists(arr);
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
      <Header title={"My Cart"} rightIcon2={"search"} leftIcon={"back"} />
      <GestureHandlerRootView
        style={[GlobalStyleSheet.container, { padding: 0, flex: 1 }]}
      >
        <ScrollView
          contentContainerStyle={{ paddingBottom: 200 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ paddingTop: 5, paddingBottom: 5 }}>
            {lists.map((data, index) => {
              return (
                <View key={index}>
                  <SwiperBox2
                    data={data}
                    navigation={navigation}
                    theme={theme}
                    colors={colors}
                    handleDelete={() => deleteItem(index)}
                  />
                </View>
              );
            })}
          </View>
        </ScrollView>
      </GestureHandlerRootView>
      <View
        style={[
          GlobalStyleSheet.container,
          {
            padding: 0,
            shadowColor: "rgba(150, 184, 169, 0.25)",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            //position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
          },
          Platform.OS === "web" && {
            //paddingBottom:150,
            backgroundColor: colors.card,
          },
        ]}
      >
        <View
          style={{
            height: Platform.OS === "windows" ? 130 : 200,
            width: "100%",
            backgroundColor: colors.card,
            flex: 1,
            paddingHorizontal: 15,
            position: "absolute",
            bottom: 0,
            paddingTop: 10,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                ...FONTS.fontRegular,
                fontSize: 18,
                color: colors.title,
              }}
            >
              Subtotal
            </Text>
            <Text
              style={{ ...FONTS.fontBold, fontSize: 18, color: colors.title }}
            >
              {" "}
              £3,599
            </Text>
          </View>
          <View
            style={[
              GlobalStyleSheet.container,
              { paddingHorizontal: 10, marginTop: 10, paddingTop: 0 },
            ]}
          >
            <Button
              title={"Proceed to Buy (8 items)"}
              btnRounded
              color={colors.title}
              onPress={() => navigation.navigate("Checkout")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Shopping;

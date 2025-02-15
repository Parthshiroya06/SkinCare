import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { FONTS, IMAGES } from "../../constants/theme";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../layout/Header";
import CardStyle3 from "../../components/Card/CardStyle3";

const sliderData = [
  {
    title: "All",
  },
  {
    title: "Child",
  },
  {
    title: "Man",
  },
  {
    title: "Woman",
  },
  {
    title: "unisex",
  },
  {
    title: "Boys",
  },
  {
    title: "Girls",
  },
];

const gridData = [
  {
    image: IMAGES.item11,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
  },
  {
    image: IMAGES.item12,
    title: "Dog Cloths",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    text: "FREE",
  },
  {
    image: IMAGES.item32,
    title: "Pet Bed For Dog",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    text: "FREE",
  },
  {
    image: IMAGES.item34,
    title: "Pet Bed For Dog",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    text: "FREE",
  },
  {
    image: IMAGES.item38,
    title: "Pet Bed For Dog",
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
    title: "Dog Cloths",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    text: "FREE",
  },
  {
    image: IMAGES.item32,
    title: "Pet Bed For Dog",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    text: "FREE",
  },
  {
    image: IMAGES.item34,
    title: "Pet Bed For Dog",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    text: "FREE",
  },
  {
    image: IMAGES.item38,
    title: "Pet Bed For Dog",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    text: "FREE",
  },
];

const Favorite = ({ navigation }) => {
  const theme = useTheme();
  const { colors } = theme;

  return (
    <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
      <Header title={"Wishlist"} rightIcon2={"search"} leftIcon={"back"} />
      <View style={[GlobalStyleSheet.container, { flexGrow: 1 }]}>
        <View style={{ marginHorizontal: -15, marginBottom: 10 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                justifyContent: "center",
              }}
            >
              {sliderData.map((data, index) => {
                return (
                  <View
                    key={index}
                    style={[
                      {
                        shadowColor: "rgba(150, 184, 169, 0.25)",
                        shadowOffset: {
                          width: 2,
                          height: 4,
                        },
                        shadowOpacity: 0.1,
                        shadowRadius: 5,
                        marginBottom: 5,
                      },
                      Platform.OS === "ios" && {
                        backgroundColor: "rgba(255, 255, 255, 0.70)",
                        borderRadius: 12,
                      },
                    ]}
                  >
                    <TouchableOpacity
                      style={{
                        backgroundColor: colors.card,
                        height: 40,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 12,
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                      }}
                    >
                      <Text
                        style={{
                          ...FONTS.fontMedium,
                          fontSize: 13,
                          color: colors.title,
                        }}
                      >
                        {data.title}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View
          style={[
            GlobalStyleSheet.container,
            { padding: 0, marginHorizontal: -15 },
          ]}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 190 }}
          >
            <View style={{ marginTop: -10 }}>
              {gridData.map((data, index) => {
                return (
                  <CardStyle3
                    key={index}
                    title={data.title}
                    price={data.price}
                    image={data.image}
                    discount={data.discount}
                    onPress={() => navigation.navigate("Shopping")}
                    review={data.review}
                    CardStyle4
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Favorite;

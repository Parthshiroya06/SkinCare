import React, { useRef, useState } from "react";
import { useTheme, useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TextInput,
} from "react-native";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS, IMAGES, SIZES } from "../../constants/theme";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import CardStyle1 from "../../components/Card/CardStyle1";
import Cardstyle2 from "../../components/Card/Cardstyle2";
import Button from "../../components/Button/Button";
import Scrolling from "../../components/Scrolling";
import SvgcurvedText from "../../components/SvgcurvedText";
import ImageSwiper from "../../components/ImageSwiper";
import ImageSwper2 from "../../components/ImageSwper2";
import ImageSwper3 from "../../components/ImageSwiper3";
import { useDispatch } from "react-redux";
import { openDrawer } from "../../redux/actions/drawerAction";

const Swiper1Data = [
  {
    image: IMAGES.item9,
  },
  {
    image: IMAGES.item8,
  },
  {
    image: IMAGES.item10,
  },
  {
    image: IMAGES.item9,
  },
  {
    image: IMAGES.item8,
  },
  {
    image: IMAGES.item10,
  },
];

const Swiper2Data = [
  {
    image: IMAGES.item14,
    title: "Skin Care\nBody Product",
    price: "£80",
    discount: "£95",
    offer: "Up To 79% Off",
  },
  {
    image: IMAGES.item11,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    delivery: "Free delivery",
  },
  {
    image: IMAGES.item32,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    delivery: "Free delivery",
  },
  {
    image: IMAGES.item13,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    delivery: "Free delivery",
    marginTop: 10,
  },
];
const CategoriesData = [
  {
    image: IMAGES.product1,
    title: "Body Care",
  },
  {
    image: IMAGES.product2,
    title: "Skin Care",
  },
  {
    image: IMAGES.product3,
    title: "Accessories",
  },
  {
    image: IMAGES.product4,
    title: "Hair Care",
  },
  {
    image: IMAGES.product1,
    title: "Body Care",
  },
  {
    image: IMAGES.product2,
    title: "Skin Care",
  },
  {
    image: IMAGES.product3,
    title: "Accessories",
  },
  {
    image: IMAGES.product4,
    title: "Hair Care",
  },
];

const cardstyle3DataData = [
  {
    image: IMAGES.item38,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£89",
  },
  {
    image: IMAGES.item34,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£89",
  },
  {
    image: IMAGES.item32,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£89",
  },
  {
    image: IMAGES.item38,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£89",
  },
  {
    image: IMAGES.item34,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£89",
  },
  {
    image: IMAGES.item32,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£89",
  },
];

const CardStyle1Data = [
  {
    image: IMAGES.item11,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£89",
  },
  {
    image: IMAGES.item12,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£89",
  },
  {
    image: IMAGES.item11,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£89",
  },
  {
    image: IMAGES.item12,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£89",
  },
];

const CardStyle2Data = [
  {
    image: IMAGES.item11,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
  },
  {
    image: IMAGES.item12,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
  },
  {
    image: IMAGES.item13,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
  },
  {
    image: IMAGES.item14,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
  },
];

const PeopleData = [
  {
    image: IMAGES.item11,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    delivery: "Free delivery",
  },
  {
    image: IMAGES.item34,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    delivery: "Free delivery",
    marginTop: 10,
  },
  {
    image: IMAGES.item32,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    delivery: "Free delivery",
  },
  {
    image: IMAGES.item13,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    delivery: "Free delivery",
    marginTop: 10,
  },
];

const PopularData = [
  {
    image: IMAGES.item34,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    delivery: "Free delivery",
  },
  {
    image: IMAGES.item11,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    delivery: "Free delivery",
  },
  {
    image: IMAGES.item32,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    delivery: "Free delivery",
  },
  {
    image: IMAGES.item13,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    delivery: "Free delivery",
  },
];

const CartData = [
  {
    image: IMAGES.item38,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    offer: "40% Off",
  },
  {
    image: IMAGES.item11,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    offer: "Up To 70% Off",
  },
  {
    image: IMAGES.item34,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    offer: "60% Off",
  },
];
const Cart2Data = [
  {
    image: IMAGES.item14,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    offer: "40% Off",
  },
  {
    image: IMAGES.item15,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    offer: "Up To 70% Off",
  },
  {
    image: IMAGES.item14,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    offer: "60% Off",
  },
];

const adsData = [
  {
    image: IMAGES.ads1,
    title: "Get Flat £75 Back",
    offer: "Up to 40% Off",
  },
  {
    image: IMAGES.ads2,
    title: "Get Flat £85 Back",
    offer: "Up to 70% Off",
  },
  {
    image: IMAGES.ads1,
    title: "Get Flat £95 Back",
    offer: "Up to 60% Off",
  },
  {
    image: IMAGES.ads2,
    title: "Get Flat £86 Back",
    offer: "Up to 90% Off",
  },
];

const SponsoredData = [
  {
    image: IMAGES.item12,
    title: "Skin Care\nBody Product",
    price: "£80",
    discount: "£89",
    offer: "Min. 30% Off",
  },
  {
    image: IMAGES.item11,
    title: "Skin Care\nBody Product",
    price: "£80",
    discount: "£89",
    offer: "Min. 50% Off",
  },
  {
    image: IMAGES.item12,
    title: "Skin Care\nBody Product",
    price: "£80",
    discount: "£89",
    offer: "Min. 70% Off",
  },
];

const SliderData = [
  {
    image: IMAGES.star3,
    title: "Bodycare",
  },
  {
    image: IMAGES.star3,
    title: "Skincare",
  },
  {
    image: IMAGES.star3,
    title: "Accessories",
  },
  {
    image: IMAGES.star3,
    title: "Haircare",
  },
];

const Home = () => {
  const theme = useTheme();
  const { colors } = theme;

  const navigation = useNavigation();

  const dispatch = useDispatch();

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.background, flex: 1, marginBottom: 0 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <View
          style={[
            GlobalStyleSheet.container,
            {
              marginHorizontal: 5,
              marginVertical: 5,
              backgroundColor: colors.background,
              marginBottom: 0,
              paddingBottom: 0,
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              height: 45,
            }}
          >
            <TouchableOpacity
              onPress={() => dispatch(openDrawer())}
              // onPress={() => navigation.openDrawer()}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  gap: 10,
                  paddingRight: 15,
                }}
              >
                <Image
                  style={{ height: 45, width: 45, borderRadius: 15 }}
                  source={IMAGES.small1}
                />
                <Text
                  style={{
                    ...FONTS.Marcellus,
                    fontSize: 14,
                    color: colors.title,
                  }}
                >
                  Hello{"\n"}
                  <Text style={{ fontSize: 18 }}>Elizabeth</Text>
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{}}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Notification")}
                style={{
                  height: 45,
                  width: 45,
                  backgroundColor: colors.card,
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={[GlobalStyleSheet.image, { tintColor: colors.title }]}
                  source={IMAGES.bell}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={[
              {
                shadowColor: "rgba(150, 184, 169, 0.25)",
                shadowOffset: {
                  width: 2,
                  height: 4,
                },
                shadowOpacity: 0.1,
                shadowRadius: 5,
                marginTop: 20,
              },
              Platform.OS === "ios" && {
                backgroundColor: colors.card,
                borderRadius: 15,
              },
            ]}
          >
            <View style={{}}>
              <View>
                <TextInput
                  style={{
                    ...FONTS.fontRegular,
                    fontSize: 16,
                    height: 52,
                    backgroundColor: colors.card,
                    borderRadius: 15,
                    paddingLeft: 20,
                    color: colors.title,
                  }}
                  placeholder="Search"
                  placeholderTextColor={
                    theme.dark ? "rgba(255,255,255,0.8)" : "#666666"
                  }
                />
                <View style={{ position: "absolute", right: 15, top: 15 }}>
                  <Image
                    style={{ height: 20, width: 20, tintColor: COLORS.primary }}
                    source={IMAGES.search}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 50,
              backgroundColor: colors.card,
              opacity: 0.6,
              borderRadius: 10,
              marginHorizontal: 20,
              marginTop: -40,
              zIndex: -1,
            }}
          ></View>

          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  ...FONTS.Marcellus,
                  fontSize: 24,
                  color: colors.title,
                  lineHeight: 33,
                }}
              >
                A New Generation{"\n"}of Natural Cosmetic{"\n"}Ingredients
              </Text>
            </View>

            <View
              style={[
                {
                  shadowColor: "rgba(0, 0, 0, 0.15)",
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 5,
                  marginRight: 20,
                },
                Platform.OS === "ios" && {
                  backgroundColor: colors.card,
                  borderRadius: 100,
                },
              ]}
            >
              <View
                style={{
                  height: 110,
                  width: 110,
                  backgroundColor: colors.card,
                  borderRadius: 100,
                }}
              >
                <View style={{ position: "absolute", top: -44, right: -12 }}>
                  <SvgcurvedText />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
            <ImageSwiper data={Swiper1Data} />
          </View>
          <View style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
            <Image source={IMAGES.border1} />
          </View>
        </View>
        <View style={{ width: "100%", marginBottom: 5 }}>
          <View
            style={[
              GlobalStyleSheet.container,
              { marginHorizontal: 5, marginVertical: 5 },
            ]}
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
                  ...FONTS.fontMedium,
                  fontSize: 20,
                  color: colors.title,
                }}
              >
                Because You Need Time for{"\n"}Yourself. Blend Beauty in You
              </Text>
            </View>
            <View style={{ marginHorizontal: -15 }}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
              >
                <View
                  style={{
                    marginTop: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    justifyContent: "center",
                  }}
                >
                  {CategoriesData.map((data, index) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => navigation.navigate("Products")}
                        key={index}
                        style={{ alignItems: "center", marginRight: 7 }}
                      >
                        <View
                          style={{
                            backgroundColor: colors.card,
                            height: 88,
                            width: 88,
                            borderRadius: 100,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Image
                            style={{
                              height: 80,
                              width: 80,
                              borderRadius: 100,
                              resizeMode: "contain",
                            }}
                            source={data.image}
                          />
                        </View>
                        <View
                          style={{
                            marginTop: 10,
                          }}
                        >
                          <Text
                            style={{
                              ...FONTS.Marcellus,
                              fontSize: 15,
                              color: colors.title,
                            }}
                          >
                            {data.title}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 0, overflow: "hidden", paddingBottom: 0 }}>
          <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
            <View style={{ zIndex: 20 }}>
              <Image
                style={{
                  width: "100%",
                  tintColor: theme.dark ? colors.background : null,
                }}
                source={IMAGES.border}
              />
            </View>
            <Image
              style={[
                {
                  width: "100%",
                  height: undefined,
                  aspectRatio: 1 / 0.6,
                  transform: [{ scale: 1.1 }],
                },
                Platform.OS === "ios" && { aspectRatio: 1 / 0.5 },
              ]}
              source={IMAGES.product5}
            />
            <View
              style={{
                alignItems: "center",
                position: "absolute",
                left: 0,
                top: 70,
                right: 0,
              }}
            >
              <View
                style={{
                  height: 85,
                  width: 85,
                  backgroundColor: theme.dark
                    ? "rgba(0,0,0, 0.70)"
                    : "rgba(255, 255, 255, 0.70)",
                  borderRadius: 100,
                }}
              >
                <View style={{ position: "absolute", top: -56, left: -41 }}>
                  <SvgcurvedText small />
                </View>
              </View>
            </View>
            {Platform.OS === "android" && (
              <Scrolling
                endPaddingWidth={"50"}
                style={{ position: "absolute", bottom: -40 }}
              >
                <View
                  style={{
                    height: 50,
                    backgroundColor: colors.card,
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                    marginBottom: 40,
                    marginTop: 30,
                    paddingRight: 20,
                  }}
                >
                  {SliderData.map((data, index) => {
                    return (
                      <View
                        key={index}
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 15,
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            ...FONTS.fontRegular,
                            fontSize: 18,
                            color: colors.title,
                          }}
                        >
                          {data.title}
                        </Text>
                        <Image
                          style={{
                            width: 16,
                            height: 16,
                            resizeMode: "contain",
                            tintColor: colors.title,
                          }}
                          source={data.image}
                        />
                      </View>
                    );
                  })}
                </View>
              </Scrolling>
            )}
          </View>
        </View>
        <View style={[GlobalStyleSheet.container, { paddingTop: 25 }]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ ...FONTS.Marcellus, fontSize: 24, color: colors.title }}
            >
              Highly Recommended{"\n"}Beauty Essentials
            </Text>
          </View>
          <View style={{ marginHorizontal: -15, marginTop: 20 }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 15 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 15,
                  marginRight: 10,
                }}
              >
                {CardStyle1Data.map((data, index) => {
                  return (
                    <View
                      style={[
                        {
                          marginBottom: 20,
                          width:
                            SIZES.width > SIZES.container
                              ? SIZES.container / 3
                              : SIZES.width / 2.3,
                        },
                      ]}
                      key={index}
                    >
                      <CardStyle1
                        image={data.image}
                        title={data.title}
                        price={data.price}
                        discount={data.discount}
                        onPress={() => navigation.navigate("ProductDetails")}
                        closebtn
                      />
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          <View style={{ top: 60, left: 0, position: "absolute", zIndex: -1 }}>
            <Image style={{}} source={IMAGES.border2} />
          </View>
        </View>
        <View
          style={[
            GlobalStyleSheet.container,
            {
              backgroundColor: colors.background,
              paddingTop: 0,
              paddingBottom: 0,
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ ...FONTS.Marcellus, fontSize: 20, color: colors.title }}
            >
              Recently Shortlisted By You
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  ...FONTS.fontRegular,
                  fontSize: 13,
                  color: colors.title,
                }}
              >
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: -15, marginTop: 20 }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 15 }}
            >
              <View
                style={[
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                  },
                  Platform.OS === "ios" && {
                    gap: 5,
                  },
                ]}
              >
                {cardstyle3DataData.map((data, index) => {
                  return (
                    <View
                      style={[
                        {
                          width:
                            SIZES.width > SIZES.container
                              ? SIZES.container / 3
                              : SIZES.width / 2.9,
                        },
                      ]}
                      key={index}
                    >
                      <CardStyle1
                        image={data.image}
                        title={data.title}
                        price={data.price}
                        discount={data.discount}
                        onPress={() => navigation.navigate("ProductDetails")}
                        card3
                        removelikebtn
                      />
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={{ backgroundColor: colors.background, width: "100%" }}>
          <View style={[GlobalStyleSheet.container, { paddingBottom: 5 }]}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  ...FONTS.Marcellus,
                  fontSize: 20,
                  color: colors.title,
                }}
              >
                Sponsored
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    ...FONTS.fontRegular,
                    fontSize: 13,
                    color: colors.title,
                  }}
                >
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: -15, marginTop: 20 }}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 15,
                  }}
                >
                  {SponsoredData.map((data, index) => {
                    return (
                      <View
                        key={index}
                        style={{
                          backgroundColor: colors.card,
                          height: 138,
                          padding: 20,
                          borderRadius: 20,
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 15,
                        }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text
                            style={{
                              ...FONTS.Marcellus,
                              fontSize: 16,
                              color: colors.title,
                            }}
                          >
                            {data.title}
                          </Text>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              gap: 5,
                              marginTop: 5,
                            }}
                          >
                            <Text
                              style={{
                                ...FONTS.Marcellus,
                                fontSize: 16,
                                color: colors.title,
                              }}
                            >
                              {data.price}
                            </Text>
                            <Text
                              style={{
                                ...FONTS.Marcellus,
                                fontSize: 13,
                                textDecorationLine: "line-through",
                                color: theme.dark
                                  ? "rgba(255,255,255, .4)"
                                  : "rgba(0, 0, 0, 0.40)",
                                marginRight: 5,
                              }}
                            >
                              {data.discount}
                            </Text>
                          </View>
                          <Text
                            style={{
                              ...FONTS.fontSemiBold,
                              fontSize: 13,
                              color: COLORS.success,
                              marginTop: 8,
                            }}
                          >
                            {data.offer}
                          </Text>
                        </View>
                        <View>
                          <Image
                            style={{
                              height: 115,
                              width: 86,
                              resizeMode: "contain",
                            }}
                            source={data.image}
                          />
                        </View>
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: colors.background, width: "100%" }}>
          <View
            style={[
              GlobalStyleSheet.container,
              { marginVertical: 10, marginBottom: 20 },
            ]}
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
                  ...FONTS.Marcellus,
                  fontSize: 20,
                  color: colors.title,
                }}
              >
                People Also Viewed
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    ...FONTS.fontRegular,
                    fontSize: 13,
                    color: colors.title,
                  }}
                >
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[GlobalStyleSheet.row, { marginTop: 20 }]}>
              {PeopleData.map((data, index) => {
                return (
                  <View
                    style={[GlobalStyleSheet.col50, { marginBottom: 0 }]}
                    key={index}
                  >
                    <Cardstyle2
                      image={data.image}
                      title={data.title}
                      price={data.price}
                      discount={data.discount}
                      delivery={data.delivery}
                      onPress={() => navigation.navigate("ProductDetails")}
                      marginTop={data.marginTop}
                    />
                  </View>
                );
              })}
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.card,
            width: "100%",
            paddingBottom: 10,
          }}
        >
          <View style={[GlobalStyleSheet.container, { marginVertical: 10 }]}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  ...FONTS.Marcellus,
                  fontSize: 20,
                  color: colors.title,
                }}
              >
                Items In Your Cart
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Shopping")}>
                <Text
                  style={{
                    ...FONTS.fontMedium,
                    fontSize: 13,
                    color: colors.title,
                  }}
                >
                  View Cart
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{}}>
              {CartData.map((data, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                      marginTop: 20,
                    }}
                    onPress={() => navigation.navigate("Shopping")}
                  >
                    <Image
                      style={{
                        width: 75,
                        height: 75,
                        borderRadius: 15,
                        borderWidth: 1,
                        borderColor: colors.border,
                      }}
                      source={data.image}
                    />
                    <View style={{}}>
                      <Text
                        style={{
                          ...FONTS.fontMedium,
                          fontSize: 14,
                          color: colors.title,
                        }}
                      >
                        {data.title}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 5,
                          marginTop: 5,
                        }}
                      >
                        <Text
                          style={{
                            ...FONTS.fontSemiBold,
                            fontSize: 16,
                            color: colors.title,
                          }}
                        >
                          {data.price}
                        </Text>
                        <Text
                          style={{
                            ...FONTS.fontRegular,
                            fontSize: 13,
                            textDecorationLine: "line-through",
                            textDecorationColor: "rgba(0, 0, 0, 0.70)",
                            color: theme.dark
                              ? "rgba(255,255,255, .7)"
                              : "rgba(0, 0, 0, 0.70)",
                            marginRight: 5,
                          }}
                        >
                          {data.discount}
                        </Text>
                        <Image
                          style={{
                            height: 12,
                            width: 12,
                            resizeMode: "contain",
                          }}
                          source={IMAGES.star4}
                        />
                        <Text
                          style={{
                            ...FONTS.fontRegular,
                            fontSize: 12,
                            color: theme.dark
                              ? "rgba(255,255,255, .5)"
                              : "rgba(0, 0, 0, 0.50)",
                          }}
                        >
                          (2k review)
                        </Text>
                      </View>
                      <Text
                        style={{
                          ...FONTS.fontRegular,
                          fontSize: 14,
                          color: colors.title,
                        }}
                      >
                        Quantity:
                        <Text style={{ ...FONTS.fontBold, fontSize: 14 }}>
                          {" "}
                          1
                        </Text>
                      </Text>
                    </View>
                    <View
                      style={[
                        {
                          shadowColor: "#000",
                          shadowOffset: {
                            width: 2,
                            height: 2,
                          },
                          shadowOpacity: 0.1,
                          shadowRadius: 5,
                          position: "absolute",
                          right: 0,
                        },
                        Platform.OS === "ios" && {
                          backgroundColor: colors.card,
                          borderRadius: 50,
                        },
                      ]}
                    >
                      <TouchableOpacity
                        style={{
                          height: 40,
                          width: 40,
                          borderRadius: 50,
                          backgroundColor: theme.dark ? "#fff" : "#ECF5F1",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          style={{
                            height: 18,
                            width: 18,
                            resizeMode: "contain",
                            tintColor: COLORS.title,
                          }}
                          source={IMAGES.close}
                        />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={{ marginTop: 20 }}>
              <Button
                title={"Proceed to checkout (3)"}
                onPress={() => navigation.navigate("Shopping")}
                btnRounded
                outline={true}
                icon={
                  <Feather size={24} color={colors.card} name={"arrow-right"} />
                }
                color={colors.card}
                text={colors.title}
              />
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: colors.background, width: "100%" }}>
          <View
            style={[
              GlobalStyleSheet.container,
              { marginVertical: 10, marginBottom: 5 },
            ]}
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
                  ...FONTS.Marcellus,
                  fontSize: 20,
                  color: colors.title,
                }}
              >
                Popular Nearby
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    ...FONTS.fontRegular,
                    fontSize: 13,
                    color: colors.title,
                  }}
                >
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                ...FONTS.fontRegular,
                fontSize: 13,
                color: colors.title,
              }}
            >
              Up to 60% off + up to £107 Cash BACK
            </Text>
          </View>
          <View
            style={[
              GlobalStyleSheet.container,
              { padding: 0, marginTop: 70 },
              Platform.OS === "ios" && {
                marginTop: 70,
              },
            ]}
          >
            <View
              style={{ marginTop: -70, alignItems: "center", marginBottom: 10 }}
            >
              <ImageSwper3 data={PopularData} />
            </View>
          </View>
        </View>
        <View
          style={[
            GlobalStyleSheet.container,
            {
              backgroundColor: colors.background,
              width: "100%",
              paddingVertical: 0,
            },
          ]}
        >
          <Image
            style={{ width: "100%", borderRadius: 15, height: 150 }}
            source={IMAGES.ads1}
          />
        </View>
        <View style={{ backgroundColor: colors.background, width: "100%" }}>
          <View
            style={[
              GlobalStyleSheet.container,
              { marginVertical: 10, marginBottom: 0, paddingBottom: 0 },
            ]}
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
                  ...FONTS.Marcellus,
                  fontSize: 20,
                  color: colors.title,
                }}
              >
                Blockbuster deals
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Products")}>
                <Text
                  style={{
                    ...FONTS.fontRegular,
                    fontSize: 13,
                    color: colors.title,
                  }}
                >
                  See All Deals
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              GlobalStyleSheet.container,
              { padding: 0, paddingVertical: 15 },
            ]}
          >
            <ImageSwper2 data={Swiper2Data} />
          </View>
        </View>
        <View style={{ backgroundColor: colors.background, width: "100%" }}>
          <View
            style={[
              GlobalStyleSheet.container,
              { marginVertical: 10, padding: 0, marginTop: 20 },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginRight: 20,
                marginLeft: 20,
              }}
            >
              <Text
                style={{
                  ...FONTS.Marcellus,
                  fontSize: 20,
                  color: colors.title,
                }}
              >
                Add To Your wishlist
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    ...FONTS.fontRegular,
                    fontSize: 13,
                    color: colors.title,
                  }}
                >
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ marginHorizontal: 20, paddingRight: 40 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 15,
                  marginBottom: 10,
                  gap: 20,
                }}
              >
                {CardStyle2Data.map((data, index) => {
                  return (
                    <View
                      style={[
                        {
                          marginBottom: 20,
                          width:
                            SIZES.width > SIZES.container
                              ? SIZES.container / 3
                              : SIZES.width / 2.3,
                        },
                      ]}
                      key={index}
                    >
                      <CardStyle1
                        image={data.image}
                        title={data.title}
                        price={data.price}
                        discount={data.discount}
                        onPress={() => navigation.navigate("ProductDetails")}
                        closebtn
                      />
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={{ backgroundColor: colors.background, width: "100%" }}>
          <View
            style={[
              GlobalStyleSheet.container,
              { marginVertical: 10, paddingTop: 0, marginTop: 0 },
            ]}
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
                  ...FONTS.Marcellus,
                  fontSize: 20,
                  color: colors.title,
                }}
              >
                Featured Now{" "}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    ...FONTS.fontRegular,
                    fontSize: 13,
                    color: colors.title,
                  }}
                >
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: -15 }}>
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
                  }}
                >
                  {Cart2Data.map((data, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() => navigation.navigate("ProductDetails")}
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 10,
                          marginTop: 20,
                          backgroundColor: colors.card,
                          padding: 10,
                          borderRadius: 20,
                          paddingRight: 20,
                        }}
                      >
                        <Image
                          style={{
                            width: 75,
                            height: 75,
                            borderRadius: 15,
                            backgroundColor: colors.background,
                          }}
                          source={data.image}
                        />
                        <View style={{}}>
                          <Text
                            style={{
                              ...FONTS.Marcellus,
                              fontSize: 16,
                              color: colors.title,
                            }}
                          >
                            {data.title}
                          </Text>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              gap: 5,
                              marginTop: 5,
                            }}
                          >
                            <Text
                              style={{
                                ...FONTS.fontSemiBold,
                                fontSize: 16,
                                color: colors.title,
                              }}
                            >
                              {data.price}
                            </Text>
                            <Text
                              style={{
                                ...FONTS.fontRegular,
                                fontSize: 13,
                                textDecorationLine: "line-through",
                                textDecorationColor: "rgba(0, 0, 0, 0.70)",
                                color: theme.dark
                                  ? "rgba(255,255,255,0.7)"
                                  : "rgba(0, 0, 0, 0.70)",
                                marginRight: 5,
                              }}
                            >
                              {data.discount}
                            </Text>
                            <Image
                              style={{
                                height: 12,
                                width: 12,
                                resizeMode: "contain",
                              }}
                              source={IMAGES.star4}
                            />
                            <Text
                              style={{
                                ...FONTS.fontRegular,
                                fontSize: 12,
                                color: theme.dark
                                  ? "rgba(255,255,255,0.5)"
                                  : "rgba(0, 0, 0, 0.50)",
                              }}
                            >
                              (2k review)
                            </Text>
                          </View>
                          <Text
                            style={{
                              ...FONTS.fontMedium,
                              fontSize: 13,
                              color: COLORS.danger,
                            }}
                          >
                            {data.offer}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          </View>
          <View
            style={[
              GlobalStyleSheet.container,
              { marginTop: 0, paddingTop: 0, paddingBottom: 0 },
            ]}
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
                  ...FONTS.Marcellus,
                  fontSize: 20,
                  color: colors.title,
                }}
              >
                Featured Offer For You
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    ...FONTS.fontRegular,
                    fontSize: 13,
                    color: colors.title,
                  }}
                >
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: -15, marginTop: 20 }}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
              >
                {adsData.map((data, index) => {
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
                          shadowOpacity: 0.2,
                          shadowRadius: 5,
                        },
                        Platform.OS === "ios" &&
                          {
                            //backgroundColor: colors.card,
                          },
                      ]}
                    >
                      <TouchableOpacity
                        style={{
                          marginRight: 15,
                          marginBottom: 10,
                        }}
                        onPress={() => navigation.navigate("Coupons")}
                      >
                        <Image
                          style={{ width: 250, height: 105, borderRadius: 15 }}
                          source={data.image}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: colors.background, width: "100%" }}>
          <View style={[GlobalStyleSheet.container, { marginVertical: 5 }]}>
            <Text
              style={{ ...FONTS.Marcellus, fontSize: 20, color: colors.title }}
            >
              Great Saving On Everyday Essentials
            </Text>
            <Text
              style={{
                ...FONTS.fontRegular,
                fontSize: 13,
                color: colors.title,
              }}
            >
              Up to 60% off + up to £107 Cash BACK
            </Text>
            <View style={[GlobalStyleSheet.row, { marginTop: 20 }]}>
              {PeopleData.map((data, index) => {
                return (
                  <View
                    style={[GlobalStyleSheet.col50, { marginBottom: 0 }]}
                    key={index}
                  >
                    <Cardstyle2
                      image={data.image}
                      title={data.title}
                      price={data.price}
                      discount={data.discount}
                      delivery={data.delivery}
                      onPress={() => navigation.navigate("ProductDetails")}
                      marginTop={data.marginTop}
                    />
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrolling2: {
    backgroundColor: "red",
    width: "100%",
    // padding: 10,
    marginBottom: 10,
  },
  welcome: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    height: undefined,
    width: "100%",
    aspectRatio: 1 / 0.6,
    //justifyContent:'center',
    //alignItems: 'center',
    //borderRadius: 6
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Home;

import React, { useState, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { COLORS, FONTS, IMAGES } from "../../constants/theme";
import { IconButton } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { ScrollView } from "react-native-gesture-handler";
import CardStyle3 from "../../components/Card/CardStyle3";
import Cardstyle2 from "../../components/Card/Cardstyle2";
import { BlurView } from "expo-blur";
import BottomSheet2 from "../Shortcode/BottomSheet2";

const sliderData = [
  {
    title: "Crazy Deals",
  },
  {
    title: "Budget Buys",
  },
  {
    title: "Best Offer",
  },
  {
    title: "Woman",
  },
  {
    title: "Dress",
  },
  {
    title: "unisex",
  },
];

const ListData = [
  {
    image: IMAGES.item11,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    review: "40% Off",
  },
  {
    image: IMAGES.item34,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    review: "40% Off",
  },
  {
    image: IMAGES.item32,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    review: "40% Off",
  },
  {
    image: IMAGES.item13,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    review: "40% Off",
  },
  {
    image: IMAGES.item11,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    review: "40% Off",
  },
  {
    image: IMAGES.item34,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    review: "40% Off",
  },
  {
    image: IMAGES.item32,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    offer: "40% Off",
  },
  {
    image: IMAGES.item13,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    review: "40% Off",
  },
];

const gridData = [
  {
    image: IMAGES.item11,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    offer: "40% Off",
    success: false,
  },
  {
    image: IMAGES.item34,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    offer: "FREE Delivery",
    success: true,
  },
  {
    image: IMAGES.item32,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    offer: "40% Off",
    success: false,
  },
  {
    image: IMAGES.item13,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    offer: "FREE Delivery",
    success: true,
  },
  {
    image: IMAGES.item11,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    offer: "40% Off",
    success: false,
  },
  {
    image: IMAGES.item34,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    offer: "FREE Delivery",
    success: true,
  },
  {
    image: IMAGES.item32,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    offer: "40% Off",
    review: "(2k Review)",
    success: false,
  },
  {
    image: IMAGES.item13,
    title: "Skin Care Body\nProduct",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    offer: "FREE Delivery",
    success: true,
  },
];

const Products = ({ navigation }) => {
  const theme = useTheme();
  const { colors } = theme;

  const [show, setshow] = useState(true);

  const sheetRef = React.useRef();

  return (
    <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
      <View
        style={[
          {
            shadowColor: "rgba(150, 184, 169, 0.25)",
            shadowOffset: {
              width: 2,
              height: 4,
            },
            shadowOpacity: 0.6,
            shadowRadius: 5,
          },
          Platform.OS === "ios" &&
            {
              //backgroundColor: colors.card,
            },
        ]}
      >
        <View
          style={[
            GlobalStyleSheet.container,
            {
              padding: 0,
              height: 60,
              backgroundColor: theme.dark
                ? "rgba(0,0,0,.4)"
                : "rgba(255,255,255,.4)",
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
              flexDirection: "row",
              alignItems: "center",
            },
          ]}
        >
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 15,
              backgroundColor: colors.card,
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <IconButton
              onPress={() => navigation.goBack()}
              icon={(props) => (
                <MaterialIcons name="arrow-back-ios" {...props} />
              )}
              iconColor={colors.title}
              size={20}
            />
          </View>
          <View
            style={{
              height: 40,
              backgroundColor: colors.card,
              borderRadius: 10,
              marginLeft: 10,
              flex: 1,
            }}
          >
            <TextInput
              placeholder="Search Products"
              placeholderTextColor={
                theme.dark ? "rgba(255, 255, 255, .6)" : "rgba(0, 0, 0, 0.6)"
              }
              style={{
                ...FONTS.fontRegular,
                fontSize: 16,
                color: colors.title,
                paddingLeft: 40,
                flex: 1,
                borderRadius: 15,
              }}
            />
            <View style={{ position: "absolute", top: 9, left: 10 }}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  resizeMode: "contain",
                  tintColor: colors.title,
                }}
                source={IMAGES.search}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{ padding: 10, marginLeft: 10 }}
            onPress={() => {
              setshow(!show);
            }}
          >
            <Image
              style={{
                height: 22,
                width: 22,
                resizeMode: "contain",
                tintColor: colors.title,
              }}
              source={show ? IMAGES.list : IMAGES.grid}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 10, marginRight: 10 }}
            onPress={() => navigation.navigate("Shopping")}
          >
            <Image
              style={{
                height: 20,
                width: 20,
                resizeMode: "contain",
                tintColor: colors.title,
              }}
              source={IMAGES.shopping2}
            />
            <View
              style={[
                GlobalStyleSheet.notification,
                { position: "absolute", right: 3, bottom: 22 },
              ]}
            >
              <Text
                style={{
                  ...FONTS.fontRegular,
                  fontSize: 10,
                  color: COLORS.white,
                }}
              >
                14
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[GlobalStyleSheet.container, { paddingTop: 20 }]}>
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
        <View style={{ marginHorizontal: -15 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 230,
              paddingHorizontal: 15,
            }}
          >
            {show ? (
              <View style={[GlobalStyleSheet.row, { marginTop: 5 }]}>
                {ListData.map((data, index) => {
                  return (
                    <View
                      key={index}
                      style={[GlobalStyleSheet.col50, { marginBottom: 20 }]}
                    >
                      <Cardstyle2
                        image={data.image}
                        title={data.title}
                        price={data.price}
                        discount={data.discount}
                        delivery={data.delivery}
                        onPress={() => navigation.navigate("ProductDetails")}
                        likebtn
                      />
                    </View>
                  );
                })}
              </View>
            ) : (
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
                      success={data.success}
                      offer={data.offer}
                      CardStyle4
                      CardStyle5
                      likeBtn
                    />
                  );
                })}
              </View>
            )}
          </ScrollView>
        </View>
      </View>
      <View
        style={[
          {
            width: "100%",
            position: "absolute",
            bottom: 0,
            overflow: "hidden",
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          },
        ]}
      >
        <BlurView
          style={[
            { width: "100%", height: 60, borderRadius: 50 },
            Platform.OS === "ios" && { height: 80 },
          ]}
          overlayColor=""
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        ></BlurView>
        <View
          style={[
            {
              backgroundColor: theme.dark
                ? "rgba(0,0,0,0.50)"
                : "rgba(255, 255, 255, 0.50)",
              height: 60,
              width: "100%",
              flexDirection: "row",
              position: "absolute",
              bottom: 0,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            },
            Platform.OS === "ios" && {
              height: 80,
            },
          ]}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              flex: 1,
              paddingHorizontal: 10,
              justifyContent: "center",
            }}
            onPress={() => sheetRef.current.openSheet("gender")}
          >
            <Image
              style={{
                height: 20,
                width: 20,
                resizeMode: "contain",
                tintColor: colors.title,
              }}
              source={IMAGES.user2}
            />
            <Text
              style={{ ...FONTS.fontMedium, fontSize: 15, color: colors.title }}
            >
              GENDER
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              flex: 1,
              paddingHorizontal: 10,
              justifyContent: "center",
            }}
            onPress={() => sheetRef.current.openSheet("short")}
          >
            <Image
              style={{
                height: 20,
                width: 20,
                resizeMode: "contain",
                tintColor: colors.title,
              }}
              source={IMAGES.arrowup}
            />
            <Text
              style={{ ...FONTS.fontMedium, fontSize: 15, color: colors.title }}
            >
              SORT
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              flex: 1,
              paddingHorizontal: 10,
              justifyContent: "center",
            }}
            onPress={() => sheetRef.current.openSheet("filter")}
          >
            <Image
              style={{
                height: 20,
                width: 20,
                resizeMode: "contain",
                tintColor: colors.title,
              }}
              source={IMAGES.filter}
            />
            <Text
              style={{ ...FONTS.fontMedium, fontSize: 15, color: colors.title }}
            >
              FILTER
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 1,
            height: 32,
            backgroundColor: "#D9D9D9",
            position: "absolute",
            left: 135,
            bottom: 15,
          }}
        ></View>
        <View
          style={{
            width: 1,
            height: 32,
            backgroundColor: "#D9D9D9",
            position: "absolute",
            right: 135,
            bottom: 15,
          }}
        ></View>
      </View>

      <BottomSheet2 ref={sheetRef} />
      {/* <ShortShreet
                ref={shortRef}
                height={false}
            /> */}
      {/* <GenderSheet
                ref={GenderRef}
                height={false}
            /> */}
    </SafeAreaView>
  );
};

export default Products;

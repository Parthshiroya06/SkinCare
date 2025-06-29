import React, { useRef, useState } from "react";
import { useTheme } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, FONTS, IMAGES, SIZES } from "../../constants/theme";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import Header from "../../layout/Header";
import { ScrollView } from "react-native-gesture-handler";
import CardStyle3 from "../../components/Card/CardStyle3";
import { LinearGradient } from "expo-linear-gradient";

const MyorderData = [
  {
    image: IMAGES.item11,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    btntitel: "Track Order",
    review: "(2k Review)",
    offer: "40% Off",
  },
  {
    image: IMAGES.item12,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    btntitel: "Track Order",
    review: "(2k Review)",
    offer: "40% Off",
  },
  {
    image: IMAGES.item34,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    btntitel: "Track Order",
    review: "(2k Review)",
    offer: "40% Off",
  },
  {
    image: IMAGES.item32,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    btntitel: "Track Order",
    review: "(2k Review)",
    offer: "40% Off",
  },
  {
    image: IMAGES.item38,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    btntitel: "Track Order",
    review: "(2k Review)",
    offer: "40% Off",
  },
  {
    image: IMAGES.item13,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    btntitel: "Track Order",
    review: "(2k Review)",
    offer: "40% Off",
  },
];
const CompletedData = [
  {
    image: IMAGES.item13,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    btntitel: "Write Review",
    review: "(2k Review)",
    offer: "40% Off",
  },
  {
    image: IMAGES.item12,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    btntitel: "Write Review",
    review: "(2k Review)",
    offer: "40% Off",
  },
  {
    image: IMAGES.item11,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    btntitel: "Write Review",
    review: "(2k Review)",
    offer: "40% Off",
  },
  {
    image: IMAGES.item34,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    btntitel: "Write Review",
    review: "(2k Review)",
    offer: "40% Off",
  },
  {
    image: IMAGES.item32,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    btntitel: "Write Review",
    review: "(2k Review)",
    offer: "40% Off",
  },
  {
    image: IMAGES.item38,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    btntitel: "Write Review",
    review: "(2k Review)",
    offer: "40% Off",
  },
];

const Myorder = ({ navigation }) => {
  const scrollRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onPressTouch = (val) => {
    setCurrentIndex(val);
    scrollRef.current?.scrollTo({
      x: SIZES.width * val,
      animated: true,
    });
  };

  const theme = useTheme();
  const { colors } = theme;

  return (
    <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
      <Header title={"My Order"} leftIcon={"back"} />
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={["rgba(236,245,241,0)", "rgba(236,245,241,0.80)"]}
          style={{
            width: "100%",
            height: 90,
            bottom: 0,
            position: "absolute",
            zIndex: 10,
            backgroundColor: "rgba(255,255,255,.1)",
          }}
        >
          <View
            style={[
              GlobalStyleSheet.container,
              { paddingTop: 20, paddingHorizontal: 60 },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                marginRight: 10,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.card,
                height: 50,
                borderRadius: 25,
                paddingHorizontal: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => onPressTouch(0)}
                style={[
                  GlobalStyleSheet.TouchableOpacity2,
                  {
                    backgroundColor:
                      currentIndex === 0 ? colors.title : colors.card,
                    borderColor:
                      currentIndex === 0 ? colors.title : colors.title,
                  },
                ]}
              >
                <Text
                  style={{
                    ...FONTS.fontRegular,
                    fontSize: 15,
                    color: currentIndex === 0 ? colors.card : colors.text,
                  }}
                >
                  Ongoing
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPressTouch(1)}
                style={[
                  GlobalStyleSheet.TouchableOpacity2,
                  {
                    backgroundColor:
                      currentIndex === 1 ? colors.title : colors.card,
                    borderColor:
                      currentIndex === 1 ? colors.title : colors.title,
                  },
                ]}
              >
                <Text
                  style={{
                    ...FONTS.fontRegular,
                    fontSize: 15,
                    color: currentIndex === 1 ? colors.card : colors.text,
                  }}
                >
                  Completed
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>

        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={scrollRef}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onMomentumScrollEnd={(e) => {
            if (
              e.nativeEvent.contentOffset.x.toFixed(0) == SIZES.width.toFixed(0)
            ) {
              setCurrentIndex(1);
            } else if (e.nativeEvent.contentOffset.x.toFixed(0) == 0) {
              setCurrentIndex(0);
            } else {
              setCurrentIndex(0);
            }
          }}
          //contentContainerStyle={{paddingBottom:100}}
        >
          <View style={{ width: SIZES.width }}>
            <View
              style={[
                GlobalStyleSheet.container,
                { paddingTop: 0, paddingBottom: 0 },
              ]}
            >
              <View style={{}}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ paddingBottom: 100 }}
                >
                  {MyorderData.map((data, index) => {
                    return (
                      <CardStyle3
                        key={index}
                        title={data.title}
                        price={data.price}
                        image={data.image}
                        discount={data.discount}
                        btntitel={data.btntitel}
                        review={data.review}
                        offer={data.offer}
                        onPress={() => navigation.navigate("Trackorder")}
                        grid
                      />
                    );
                  })}
                </ScrollView>
              </View>
            </View>
          </View>
          <View style={{ width: SIZES.width }}>
            <View
              style={[
                GlobalStyleSheet.container,
                { paddingTop: 0, paddingBottom: 0 },
              ]}
            >
              <View style={{}}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ paddingBottom: 100 }}
                >
                  {CompletedData.map((data, index) => {
                    return (
                      <CardStyle3
                        key={index}
                        title={data.title}
                        price={data.price}
                        image={data.image}
                        discount={data.discount}
                        btntitel={data.btntitel}
                        review={data.review}
                        offer={data.offer}
                        onPress={() => navigation.navigate("WriteReview")}
                        grid
                      />
                    );
                  })}
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Myorder;

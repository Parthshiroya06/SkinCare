import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Header from "../../layout/Header";
import { IMAGES, FONTS, COLORS } from "../../constants/theme";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import CardStyle3 from "../../components/Card/CardStyle3";
import { ScrollView } from "react-native-gesture-handler";

const TrackorderData = [
  {
    image: IMAGES.item11,
    title: "Skin Care Body Product",
    price: "£80",
    discount: "£95",
    review: "(2k Review)",
    offer: "40% Off",
  },
];

const Trackorder = () => {
  const theme = useTheme();
  const { colors } = theme;

  return (
    <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
      <Header title={"Track Order"} leftIcon={"back"} />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={GlobalStyleSheet.container}>
          <View
            style={
              {
                // marginHorizontal: -15
              }
            }
          >
            {TrackorderData.map((data, index) => {
              return (
                <View key={index}>
                  <CardStyle3
                    title={data.title}
                    price={data.price}
                    image={data.image}
                    discount={data.discount}
                    removebtn
                    review={data.review}
                    grid
                    offer={data.offer}
                  />
                </View>
              );
            })}
          </View>
          <View style={{ marginTop: 20, marginBottom: 10 }}>
            <Text
              style={{ ...FONTS.Marcellus, fontSize: 20, color: colors.title }}
            >
              Track Order
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <Image
              style={{ height: 24, width: 24, resizeMode: "contain" }}
              source={IMAGES.check}
            />
            <View
              style={{
                backgroundColor: colors.card,
                padding: 10,
                borderRadius: 12,
              }}
            >
              <Text
                style={{
                  ...FONTS.Marcellus,
                  fontSize: 16,
                  color: COLORS.primary,
                }}
              >
                Order Placed
                <Text
                  style={{
                    ...FONTS.fontRegular,
                    fontSize: 14,
                    color: theme.dark
                      ? "rgba(255,255,255,0.50)"
                      : "rgba(0, 0, 0, 0.50)",
                  }}
                >
                  {" "}
                  27 Dec 2023
                </Text>
              </Text>
              <Text
                style={{
                  ...FONTS.fontRegular,
                  fontSize: 14,
                  color: colors.title,
                }}
              >
                We have received your order
              </Text>
            </View>
            <View
              style={{
                height: 60,
                width: 2,
                backgroundColor: COLORS.success,
                position: "absolute",
                left: 11,
                top: 40,
              }}
            ></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              marginTop: 20,
            }}
          >
            <Image
              style={{ height: 24, width: 24, resizeMode: "contain" }}
              source={IMAGES.check}
            />
            <View
              style={{
                backgroundColor: colors.card,
                padding: 10,
                borderRadius: 12,
              }}
            >
              <Text
                style={{
                  ...FONTS.Marcellus,
                  fontSize: 16,
                  color: COLORS.primary,
                }}
              >
                Order Confirm
                <Text
                  style={{
                    ...FONTS.fontRegular,
                    fontSize: 14,
                    color: theme.dark
                      ? "rgba(255,255,255,0.50)"
                      : "rgba(0, 0, 0, 0.50)",
                  }}
                >
                  {" "}
                  27 Dec 2023
                </Text>
              </Text>
              <Text
                style={{
                  ...FONTS.fontRegular,
                  fontSize: 14,
                  color: colors.title,
                }}
              >
                We has been confirmed
              </Text>
            </View>
            <View
              style={{
                height: 60,
                width: 2,
                backgroundColor: COLORS.success,
                position: "absolute",
                left: 11,
                top: 40,
              }}
            ></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              marginTop: 20,
            }}
          >
            <View
              style={{
                height: 24,
                width: 24,
                borderWidth: 2,
                borderColor: colors.card,
                borderRadius: 24,
                backgroundColor: theme.dark ? "#0C101C" : "#EBF4F0",
              }}
            ></View>
            <View
              style={{
                backgroundColor: colors.card,
                padding: 10,
                borderRadius: 12,
                opacity: 0.4,
              }}
            >
              <Text
                style={{
                  ...FONTS.Marcellus,
                  fontSize: 16,
                  color: colors.title,
                }}
              >
                Order Processed
                <Text
                  style={{
                    ...FONTS.fontRegular,
                    fontSize: 14,
                    color: theme.dark
                      ? "rgba(255,255,255,0.50)"
                      : "rgba(0, 0, 0, 0.50)",
                  }}
                >
                  {" "}
                  28 Dec 2023
                </Text>
              </Text>
              <Text
                style={{
                  ...FONTS.fontRegular,
                  fontSize: 14,
                  color: colors.title,
                }}
              >
                We are preparing your order
              </Text>
            </View>
            <View
              style={{
                height: 60,
                width: 2,
                backgroundColor: colors.card,
                position: "absolute",
                left: 11,
                top: 40,
              }}
            ></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              marginTop: 20,
            }}
          >
            <View
              style={{
                height: 24,
                width: 24,
                borderWidth: 2,
                borderColor: colors.card,
                borderRadius: 24,
                backgroundColor: theme.dark ? "#0C101C" : "#EBF4F0",
              }}
            ></View>
            <View
              style={{
                backgroundColor: colors.card,
                padding: 10,
                borderRadius: 12,
                opacity: 0.4,
              }}
            >
              <Text
                style={{
                  ...FONTS.Marcellus,
                  fontSize: 16,
                  color: colors.title,
                }}
              >
                Ready To Ship
                <Text
                  style={{
                    ...FONTS.fontRegular,
                    fontSize: 14,
                    color: theme.dark
                      ? "rgba(255,255,255,0.50)"
                      : "rgba(0, 0, 0, 0.50)",
                  }}
                >
                  {" "}
                  29 Dec 2023
                </Text>
              </Text>
              <Text
                style={{
                  ...FONTS.fontRegular,
                  fontSize: 14,
                  color: colors.title,
                }}
              >
                Your order is ready for shipping{" "}
              </Text>
            </View>
            <View
              style={{
                height: 60,
                width: 2,
                backgroundColor: colors.card,
                position: "absolute",
                left: 11,
                top: 40,
              }}
            ></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              marginTop: 20,
            }}
          >
            <View
              style={{
                height: 24,
                width: 24,
                borderWidth: 2,
                borderColor: colors.card,
                borderRadius: 24,
                backgroundColor: theme.dark ? "#0C101C" : "#EBF4F0",
              }}
            ></View>
            <View
              style={{
                backgroundColor: colors.card,
                padding: 10,
                borderRadius: 12,
                opacity: 0.4,
              }}
            >
              <Text
                style={{
                  ...FONTS.Marcellus,
                  fontSize: 16,
                  color: colors.title,
                }}
              >
                Out For Delivery
                <Text
                  style={{
                    ...FONTS.fontRegular,
                    fontSize: 14,
                    color: theme.dark
                      ? "rgba(255,255,255,0.50)"
                      : "rgba(0, 0, 0, 0.50)",
                  }}
                >
                  {" "}
                  31 Dec 2023
                </Text>
              </Text>
              <Text
                style={{
                  ...FONTS.fontRegular,
                  fontSize: 14,
                  color: colors.title,
                }}
              >
                Your order is out for delivery
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Trackorder;

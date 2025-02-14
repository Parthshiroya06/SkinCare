import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { COLORS, FONTS, IMAGES } from "../constants/theme";
import ThemeBtn from "../components/ThemeBtn";
import { useDispatch } from "react-redux";
import { closeDrawer } from "../redux/actions/drawerAction";
import { Feather } from "@expo/vector-icons";

const MenuItems = [
  {
    icon: IMAGES.home,
    name: "Home",
    navigate: "DrawerNavigation",
  },
  {
    icon: IMAGES.producta,
    name: "Products",
    navigate: "Products",
  },
  {
    icon: IMAGES.components,
    name: "Components",
    navigate: "Components",
  },
  {
    icon: IMAGES.star,
    name: "Review",
    navigate: "WriteReview",
  },
  {
    icon: IMAGES.heart2,
    name: "Wishlist",
    navigate: "Favorite",
  },
  {
    icon: IMAGES.order,
    name: "My Orders",
    navigate: "Myorder",
  },
  {
    icon: IMAGES.shopping2,
    name: "My Cart",
    navigate: "Shopping",
  },
  {
    icon: IMAGES.chat,
    name: "Chat List",
    navigate: "Chat",
  },
  {
    icon: IMAGES.user2,
    name: "Profile",
    navigate: "Profile",
  },
  {
    icon: IMAGES.logout,
    name: "Logout",
    navigate: "SignIn",
  },
];

const Sidebar = () => {
  const dispatch = useDispatch();

  const theme = useTheme();
  const { colors } = theme;

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            paddingTop: 30,
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderColor: colors.border,
            paddingBottom: 20,
            marginBottom: 15,
            alignItems: "flex-start",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                alignItems: "flex-start",
                flex: 1,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Image
                  style={{
                    height: 60,
                    width: 60,
                    resizeMode: "contain",
                    borderRadius: 20,
                  }}
                  source={IMAGES.small1}
                />
                <View>
                  <Text
                    style={{
                      ...FONTS.fontSemiBold,
                      fontSize: 18,
                      color: colors.title,
                    }}
                  >
                    Roopa
                  </Text>
                  <Text
                    style={{
                      ...FONTS.fontRegular,
                      fontSize: 15,
                      color: colors.title,
                    }}
                  >
                    example@gmail.com
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ position: "absolute", right: 0, top: -10 }}>
              <ThemeBtn />
            </View>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          {MenuItems.map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  data.navigate === "DrawerNavigation"
                    ? dispatch(closeDrawer())
                    : dispatch(closeDrawer());
                  navigation.navigate(data.navigate);
                }}
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                }}
              >
                <View
                  style={[
                    {
                      shadowColor: theme.dark
                        ? "#000"
                        : "rgba(150, 184, 169, 0.25)",
                      shadowOffset: {
                        width: 2,
                        height: 2,
                      },
                      shadowOpacity: 0.4,
                      shadowRadius: 5,
                      marginRight: 15,
                    },
                    Platform.OS === "ios" && {
                      backgroundColor: colors.card,
                      borderRadius: 10,
                    },
                  ]}
                >
                  <View
                    style={{
                      height: 40,
                      width: 40,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: colors.card,
                      borderRadius: 10,
                    }}
                  >
                    <Image
                      style={{
                        height: 20,
                        width: 20,
                        resizeMode: "contain",
                        tintColor: COLORS.primary,
                      }}
                      source={data.icon}
                    />
                  </View>
                </View>
                <Text
                  style={{
                    ...FONTS.fontRegular,
                    fontSize: 18,
                    color: colors.title,
                    flex: 1,
                  }}
                >
                  {data.name}
                </Text>
                <Feather size={16} color={colors.title} name="chevron-right" />
              </TouchableOpacity>
            );
          })}
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 20,
            marginTop: 10,
            borderTopWidth: 1,
            borderTopColor: colors.border,
          }}
        >
          <Text
            style={{
              ...FONTS.fontSemiBold,
              fontSize: 13,
              color: colors.title,
              marginBottom: 4,
            }}
          >
            SkinSync
            <Text style={{ ...FONTS.fontRegular, fontSize: 13 }}>
              {" "}
              Cosmetic Store
            </Text>
          </Text>
          <Text
            style={{ ...FONTS.fontRegular, fontSize: 13, color: colors.title }}
          >
            App Version 1.0
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Sidebar;

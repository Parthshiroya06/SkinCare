import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  SectionList,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { IMAGES, FONTS, COLORS } from "../../constants/theme";
import ListItem from "../../components/list/ListItem";

const btnData = [
  {
    title: "Your Order",
    navigate: "Myorder",
  },
  {
    title: "Wishlist",
    navigate: "Favorite",
  },
  {
    title: "Coupons",
    navigate: "Coupons",
  },
  {
    title: "Track Order",
    navigate: "Trackorder",
  },
];

const ListwithiconData = [
  {
    title: "Account Settings",
    data: [
      {
        icon: IMAGES.user2,
        title: "Edit Profile",
        navigate: "EditProfile",
      },
      {
        icon: IMAGES.card2,
        title: "Saved Cards & Wallet",
        navigate: "Payment",
      },
      {
        icon: IMAGES.map2,
        title: "Saved Addresses",
        navigate: "SavedAddresses",
      },
      {
        icon: IMAGES.translation,
        title: "Select Language",
        navigate: "Language",
      },
      {
        icon: IMAGES.bell2,
        title: "Notifications Settings",
        navigate: "Notification",
      },
    ],
  },
  {
    title: "My Activity",
    data: [
      {
        icon: IMAGES.star,
        title: "Reviews",
        navigate: "WriteReview",
      },
      {
        icon: IMAGES.comment,
        title: "Questions & Answers",
        navigate: "Questions",
      },
    ],
  },
];

const Profile = ({ navigation }) => {
  const theme = useTheme();
  const { colors } = theme;

  return (
    <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
      {theme.dark ? null : (
        <LinearGradient
          colors={["#F4C2C2", "#FDEDF3"]}
          style={{ width: "100%", height: 230, top: 0, position: "absolute" }}
        ></LinearGradient>
      )}
      <View style={[GlobalStyleSheet.container, { flex: 1 }]}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Image
              style={{ height: 30, width: 30, resizeMode: "contain" }}
              source={IMAGES.logo}
            />
            <Text
              style={{ ...FONTS.Marcellus, fontSize: 24, color: colors.title }}
            >
              SkinSync
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Image
              style={{
                height: 18,
                width: 18,
                resizeMode: "contain",
                tintColor: colors.title,
              }}
              source={IMAGES.logout}
            />
            <Text
              style={{
                ...FONTS.fontRegular,
                fontSize: 16,
                color: colors.title,
                marginLeft: 5,
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingTop: 20,
            paddingBottom: 30,
          }}
        >
          <View
            style={{
              height: 45,
              width: 45,
              borderRadius: 50,
              backgroundColor: COLORS.white,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ height: 40, width: 40, borderRadius: 50 }}
              source={IMAGES.small1}
            />
          </View>
          <Text
            style={{ ...FONTS.Marcellus, fontSize: 24, color: colors.title }}
          >
            Hello, Navdeep
          </Text>
        </View>
        <View style={[GlobalStyleSheet.row]}>
          {btnData.map((data, index) => {
            return (
              <View
                key={index}
                style={[GlobalStyleSheet.col50, { marginBottom: 15 }]}
              >
                <View
                  style={[
                    {
                      shadowColor: theme.dark ? null : "#B8E4D1",
                      shadowOffset: {
                        width: 2,
                        height: 4,
                      },
                      shadowOpacity: 0.5,
                      shadowRadius: 5,
                    },
                    Platform.OS === "ios" && {
                      backgroundColor: colors.card,
                      borderRadius: 10,
                    },
                  ]}
                >
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.navigate(data.navigate)}
                    style={{
                      height: 48,
                      backgroundColor: colors.card,
                      //width: 180,
                      borderRadius: 15,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.fontMedium,
                        fontSize: 16,
                        color: colors.title,
                      }}
                    >
                      {data.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
        <View style={{ marginHorizontal: -15, marginTop: 0, flex: 1 }}>
          <SectionList
            sections={ListwithiconData}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <ListItem
                icon={
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                      tintColor: colors.title,
                      resizeMode: "contain",
                    }}
                    source={item.icon}
                  />
                }
                title={item.title}
                onPress={() => navigation.navigate(item.navigate)}
              />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text
                style={{
                  ...FONTS.Marcellus,
                  fontSize: 20,
                  color: colors.title,
                  paddingLeft: 20,
                  paddingBottom: 10,
                  paddingTop: 20,
                  backgroundColor: colors.background,
                }}
              >
                {title}
              </Text>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

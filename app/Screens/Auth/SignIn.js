import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { IMAGES, FONTS, COLORS } from "../../constants/theme";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import CustomInput from "../../components/Input/CustomInput";
import Button from "../../components/Button/Button";
import SocialBtn from "../../components/Socials/SocialBtn";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const SignIn = ({ navigation }) => {
  const theme = useTheme();
  const { colors } = theme;

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
        <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
          <View
            style={{
              width: 600,
              height: 500,
              backgroundColor: COLORS.primary,
              borderRadius: 250,
              marginLeft: -95,
              marginTop: -220,
              overflow: "hidden",
            }}
          >
            <Image
              style={{
                height: undefined,
                aspectRatio: 2.3 / 1.2,
                resizeMode: "contain",
                width: "100%",
                marginTop: 220,
              }}
              source={IMAGES.item4}
            />
            <View
              style={{
                width: 600,
                height: 500,
                backgroundColor: "#6A1B4D",
                borderRadius: 250,
                position: "absolute",
                opacity: 0.7,
              }}
            ></View>
          </View>
          <View style={{ position: "absolute", top: 30, left: 20 }}>
            <Text
              style={{ ...FONTS.Marcellus, fontSize: 28, color: COLORS.white }}
            >
              Sign In To{"\n"}Your Account
            </Text>
          </View>
        </View>
        <View
          style={[
            GlobalStyleSheet.container,
            { paddingTop: 0, marginTop: -150 },
          ]}
        >
          <View
            style={[
              {
                shadowColor: colors.primaryLight,
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 0.3,
                shadowRadius: 5,
              },
            ]}
          >
            <View
              style={{
                backgroundColor: colors.card,
                padding: 30,
                borderRadius: 40,
                paddingBottom: 80,
              }}
            >
              <Text
                style={{
                  ...FONTS.Marcellus,
                  fontSize: 20,
                  color: colors.title,
                  lineHeight: 28,
                }}
              >
                Welcome Back You've{"\n"}Been Missed!
              </Text>
              <View style={{ marginBottom: 15, marginTop: 20 }}>
                <Text
                  style={{
                    ...FONTS.fontRegular,
                    fontSize: 15,
                    color: colors.title,
                  }}
                >
                  Email Address<Text style={{ color: "#FF0000" }}>*</Text>
                </Text>
                <CustomInput onChangeText={(value) => console.log(value)} />
              </View>
              <View>
                <Text
                  style={{
                    ...FONTS.fontRegular,
                    fontSize: 15,
                    color: colors.title,
                  }}
                >
                  Password<Text style={{ color: "#FF0000" }}>*</Text>
                </Text>
                <CustomInput
                  type={"password"}
                  onChangeText={(value) => console.log(value)}
                />
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    bottom: -25,
                    left: 0,
                  }}
                  onPress={() => navigation.navigate("ForgatPassword")}
                >
                  <Text
                    style={{
                      ...FONTS.fontRegular,
                      fontSize: 15,
                      color: colors.title,
                      borderBottomWidth: 1,
                      borderBottomColor: colors.title,
                    }}
                  >
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ paddingHorizontal: 60, marginTop: -30 }}>
            <Button
              title={"Sign In"}
              btnRounded
              fullWidth
              icon={
                <Feather size={24} color={colors.title} name={"arrow-right"} />
              }
              onPress={() => navigation.navigate("Gender")}
              color={colors.title}
            />
          </View>
        </View>
        <View
          style={[
            GlobalStyleSheet.container,
            { paddingHorizontal: 20, flex: 1 },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <View
              style={{
                height: 1,
                flex: 1,
                backgroundColor: colors.title,
              }}
            />
            <Text
              style={{
                ...FONTS.fontMedium,
                color: colors.text,
                marginHorizontal: 15,
                fontSize: 13,
              }}
            >
              Or continue with
            </Text>
            <View
              style={{
                height: 1,
                flex: 1,
                backgroundColor: colors.title,
              }}
            />
          </View>
          <View>
            <View style={{ marginBottom: 20 }}>
              <SocialBtn
                icon={
                  <Image
                    style={{ height: 20, width: 20, resizeMode: "contain" }}
                    source={IMAGES.google2}
                  />
                }
                rounded
                color={theme.dark ? "#000" : "#FFFFFF"}
                text={"Sign in with google"}
              />
            </View>
            <View>
              <SocialBtn
                icon={
                  <FontAwesome name="apple" size={20} color={colors.title} />
                }
                rounded
                color={theme.dark ? "#000" : "#FFFFFF"}
                text={"Sign in with apple"}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Text
            style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title }}
          >
            Not a member?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text
              style={{
                ...FONTS.fontMedium,
                borderBottomWidth: 1,
                borderBottomColor: colors.title,
                color: colors.title,
              }}
            >
              {" "}
              Create an account
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignIn;

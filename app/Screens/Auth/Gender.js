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

const Gender = ({ navigation }) => {
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
              SkinSync
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
                shadowColor: "rgba(150, 184, 169, 0.25)",
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
                Welcome back
              </Text>
              <View style={{ marginBottom: 15, marginTop: 20 }}>
                <Text
                  style={{
                    ...FONTS.fontRegular,
                    fontSize: 15,
                    color: colors.title,
                  }}
                >
                  Your Name<Text style={{ color: "#FF0000" }}>*</Text>
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
                  Age<Text style={{ color: "#FF0000" }}>*</Text>
                </Text>
                <CustomInput
                  //   type={"password"}
                  onChangeText={(value) => console.log(value)}
                />
              </View>
              <View style={{ marginBottom: 15, marginTop: 20 }}>
                <Text
                  style={{
                    ...FONTS.fontBold,
                    fontSize: 25,
                    color: colors.title,
                    textAlign: "center",
                  }}
                >
                  Gender
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ width: 150, height: 200 }}>
                    <Image
                      style={{
                        width: 120,
                        height: 120,
                        alignSelf: "center",
                        aspectRatio: 1.5,
                        tintColor: "black",
                        resizeMode: "contain",
                        marginTop: 10,
                      }}
                      source={IMAGES.female}
                    />
                    <Button
                      style={{ height: 50 }}
                      title={"Female"}
                      btnRounded
                      fullWidth
                      onPress={() => alert("Selected Female")}
                      color={colors.title}
                    />
                  </View>
                  <View style={{ width: 150, height: 200, marginLeft: 10 }}>
                    <Image
                      style={{
                        width: 120,
                        height: 120,
                        alignSelf: "center",
                        aspectRatio: 1.5,
                        tintColor: "black",
                        resizeMode: "contain",
                        marginTop: 10,
                      }}
                      source={IMAGES.male}
                    />
                    <Button
                      style={{ height: 50 }}
                      title={"Male"}
                      btnRounded
                      fullWidth
                      onPress={() => alert("Selected Male")}
                      color={colors.title}
                    />
                  </View>
                </View>
                <Text
                  style={{
                    ...FONTS.Marcellus,
                    fontSize: 20,
                    color: colors.title,
                    lineHeight: 28,
                    textAlign: "center",
                  }}
                >
                  Prefer not to say
                </Text>
              </View>
            </View>
          </View>
          <View style={{ paddingHorizontal: 60, marginTop: -60 }}>
            <Button
              title={"Next"}
              btnRounded
              fullWidth
              onPress={() => navigation.navigate("SkinType")}
              color={colors.title}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Gender;

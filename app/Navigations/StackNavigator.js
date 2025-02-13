import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native";

import Damo from "../Screens/Home/Damo";
import Onbording from "../Screens/onbording/Onbording";
import SignIn from "../Screens/Auth/SignIn";
import SignUp from "../Screens/Auth/SignUp";
import ForgatPassword from "../Screens/Auth/ForgatPassword";
import EnterCode from "../Screens/Auth/EnterCode";
import NewPassword from "../Screens/Auth/NewPassword";
import DrawerNavigation from "./DrawerNavigation";
import Home from "../Screens/Home/Home";
import Favorite from "../Screens/favorite/Favorite";
import Shopping from "../Screens/shopping/Shopping";
import Document from "../Screens/document/Document";
import Notification from "../Screens/Notification/Notification";
import Search from "../Screens/search/Search";
import ProductDetails from "../Screens/Product/ProductDetails";
import EditProfile from "../Screens/profile/EditProfile";
import Trackorder from "../Screens/profile/Trackorder";
import Myorder from "../Screens/profile/Myorder";
import WriteReview from "../Screens/profile/WriteReview";
import SavedAddresses from "../Screens/profile/SavedAddresses";
import SaveAddress from "../Screens/profile/SaveAddress";
import Checkout from "../Screens/profile/Checkout";
import Payment from "../Screens/profile/Payment";
import AddCard from "../Screens/profile/AddCard";
import Coupons from "../Screens/profile/Coupons";
import Questions from "../Screens/profile/Questions";
import Language from "../Screens/language/Language";
import Chat from "../Screens/Chat/Chat";
import SingleChat from "../Screens/Chat/SingleChat";
import Call from "../Screens/Chat/Call";
import Products from "../Screens/document/Products";

import Components from "../Screens/Shortcode/Components";
import AccordionScreen from "../Screens/Shortcode/Accordion";
import BottomSheet from "../Screens/Shortcode/BottomSheet";
import Buttons from "../Screens/Shortcode/Buttons";
import Inputs from "../Screens/Shortcode/Inputs";
import ActionModals from "../Screens/Shortcode/ActionModals";
import Badges from "../Screens/Shortcode/Badges";
import Charts from "../Screens/Shortcode/Charts";
import Headers from "../Screens/Shortcode/Headers";
import Footers from "../Screens/Shortcode/Footers";
import TabStyle1 from "../components/Footers/FooterStyle1";
import TabStyle2 from "../components/Footers/FooterStyle2";
import TabStyle3 from "../components/Footers/FooterStyle3";
import TabStyle4 from "../components/Footers/FooterStyle4";
import ListScreen from "../Screens/Shortcode/Lists";
import Pricings from "../Screens/Shortcode/Pricings";
import DividerElements from "../Screens/Shortcode/DividerElements";
import Socials from "../Screens/Shortcode/Socials";
import SwipeableScreen from "../Screens/Shortcode/Swipeable";
import Tabs from "../Screens/Shortcode/Tabs";
import Tables from "../Screens/Shortcode/Tables";
import Toggles from "../Screens/Shortcode/Toggles";
import Snackbars from "../Screens/Shortcode/Snakbars";
import SkinType from "../Screens/onbording/SkinType";
import MainConcerns from "../Screens/onbording/MainConcerns";

const StackComponent = createStackNavigator();

const StackNavigator = () => {
  const theme = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.card}
        barStyle={theme.dark ? "light-content" : "dark-content"}
      />
      <StackComponent.Navigator
        initialRouteName={"MainConcerns"}
        detachInactiveScreens={true}
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "transparent" },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <StackComponent.Screen name={"Damo"} component={Damo} />
        <StackComponent.Screen name={"Onbording"} component={Onbording} />
        <StackComponent.Screen name={"SkinType"} component={SkinType} />
        <StackComponent.Screen name={"MainConcerns"} component={MainConcerns} />
        <StackComponent.Screen name={"SignIn"} component={SignIn} />
        <StackComponent.Screen name={"SignUp"} component={SignUp} />
        <StackComponent.Screen
          name={"ForgatPassword"}
          component={ForgatPassword}
        />
        <StackComponent.Screen name={"EnterCode"} component={EnterCode} />
        <StackComponent.Screen name={"NewPassword"} component={NewPassword} />
        <StackComponent.Screen
          name={"DrawerNavigation"}
          component={DrawerNavigation}
        />
        <StackComponent.Screen name={"Home"} component={Home} />
        <StackComponent.Screen name={"Favorite"} component={Favorite} />
        <StackComponent.Screen name={"Shopping"} component={Shopping} />
        <StackComponent.Screen name={"Document"} component={Document} />
        <StackComponent.Screen name={"Notification"} component={Notification} />
        <StackComponent.Screen name={"Search"} component={Search} />
        <StackComponent.Screen
          name={"ProductDetails"}
          component={ProductDetails}
        />
        <StackComponent.Screen name={"EditProfile"} component={EditProfile} />
        <StackComponent.Screen name={"Myorder"} component={Myorder} />
        <StackComponent.Screen name={"Trackorder"} component={Trackorder} />
        <StackComponent.Screen name={"WriteReview"} component={WriteReview} />
        <StackComponent.Screen
          name={"SavedAddresses"}
          component={SavedAddresses}
        />
        <StackComponent.Screen name={"SaveAddress"} component={SaveAddress} />
        <StackComponent.Screen name={"Checkout"} component={Checkout} />
        <StackComponent.Screen name={"Payment"} component={Payment} />
        <StackComponent.Screen name={"AddCard"} component={AddCard} />
        <StackComponent.Screen name={"Language"} component={Language} />
        <StackComponent.Screen name={"Questions"} component={Questions} />
        <StackComponent.Screen name={"Coupons"} component={Coupons} />
        <StackComponent.Screen name={"Chat"} component={Chat} />
        <StackComponent.Screen name={"SingleChat"} component={SingleChat} />
        <StackComponent.Screen name={"Call"} component={Call} />
        <StackComponent.Screen name={"Products"} component={Products} />

        <StackComponent.Screen name={"Components"} component={Components} />
        <StackComponent.Screen name={"Accordion"} component={AccordionScreen} />
        <StackComponent.Screen name={"BottomSheet"} component={BottomSheet} />
        <StackComponent.Screen name={"Buttons"} component={Buttons} />
        <StackComponent.Screen name={"Inputs"} component={Inputs} />
        <StackComponent.Screen name={"ActionModals"} component={ActionModals} />
        <StackComponent.Screen name={"Badges"} component={Badges} />
        <StackComponent.Screen name={"Charts"} component={Charts} />
        <StackComponent.Screen name={"Headers"} component={Headers} />
        <StackComponent.Screen name={"Footers"} component={Footers} />
        <StackComponent.Screen name={"TabStyle1"} component={TabStyle1} />
        <StackComponent.Screen name={"TabStyle2"} component={TabStyle2} />
        <StackComponent.Screen name={"TabStyle3"} component={TabStyle3} />
        <StackComponent.Screen name={"TabStyle4"} component={TabStyle4} />
        <StackComponent.Screen name={"lists"} component={ListScreen} />
        <StackComponent.Screen name={"Pricings"} component={Pricings} />
        <StackComponent.Screen
          name={"DividerElements"}
          component={DividerElements}
        />
        <StackComponent.Screen name={"Socials"} component={Socials} />
        <StackComponent.Screen name={"Swipeable"} component={SwipeableScreen} />
        <StackComponent.Screen name={"Tabs"} component={Tabs} />
        <StackComponent.Screen name={"Tables"} component={Tables} />
        <StackComponent.Screen name={"Toggles"} component={Toggles} />
        <StackComponent.Screen name={"Snackbars"} component={Snackbars} />
      </StackComponent.Navigator>
    </>
  );
};
export default StackNavigator;

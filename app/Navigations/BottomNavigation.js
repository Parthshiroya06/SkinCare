import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home/Home';
import BottomTab from '../layout/BottomTab';
import Favorite from '../Screens/favorite/Favorite';
import Shopping from '../Screens/shopping/Shopping';
import Document from '../Screens/document/Document';
import Profile from '../Screens/profile/Profile';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';


const Tab = createBottomTabNavigator();


const BottomNavigation = () => {

    const theme = useTheme();
    const { colors } = theme;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                }}

                tabBar={props => <BottomTab {...props} />}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Wishlist" component={Favorite} />
                <Tab.Screen name="MyCart" component={Shopping} />
                <Tab.Screen name="Category" component={Document} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </SafeAreaView>
    );
};

export default BottomNavigation;
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, IMAGES } from '../../constants/theme';
import { ScrollView } from 'react-native-gesture-handler';

const CategoriesData = [
    {
        image: IMAGES.product1,
        title: "Body Care"
    },
    {
        image: IMAGES.product2,
        title: "Skin Care"
    },
    {
        image: IMAGES.product3,
        title: "Accessories"
    },
    {
        image: IMAGES.product4,
        title: "Hair Care"
    },
    {
        image: IMAGES.product1,
        title: "Body Care"
    },
    {
        image: IMAGES.product2,
        title: "Skin Care"
    },
    {
        image: IMAGES.product3,
        title: "Accessories"
    },
    {
        image: IMAGES.product4,
        title: "Hair Care"
    },
]

const CategoryData = [
    {
        image: IMAGES.item22,
        title: "Body Care",
        count: '24',
    },
    {
        image: IMAGES.item23,
        title: "Skin Care",
        count: '24',
    },
    {
        image: IMAGES.item24,
        title: "Accessories",
        count: '24',
    },
    {
        image: IMAGES.item25,
        title: "Hair Care",
        count: '24',
    },
    {
        image: IMAGES.item26,
        title: "Body Care",
        count: '24',
    },
    {
        image: IMAGES.item16,
        title: "Skin Care",
        count: '24',
    },
]
const Document = ({ navigation }) => {

    const theme = useTheme();
    const { colors } = theme;

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <Header
                title={"Category"}
                rightIcon2={'search'}
                leftIcon={'back'}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={GlobalStyleSheet.container}>
                    <Text style={{ ...FONTS.Marcellus, fontSize: 20, color: colors.title }}>Because You Need Time for Yourself.{"\n"}Blend Beauty in You</Text>
                    <View style={{ marginHorizontal: -15, }}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 15 }}
                        >
                            <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
                                {CategoriesData.map((data, index) => {
                                    return (
                                        <TouchableOpacity
                                            activeOpacity={.9}
                                            onPress={() => navigation.navigate('Products')}
                                            key={index} style={{ alignItems: 'center',marginRight:7 }}
                                        >
                                            <View style={{backgroundColor:colors.card,height:88,width:88,borderRadius:100,alignItems:'center',justifyContent:'center'}}>
                                                <Image
                                                    style={{ height: 80, width: 80,borderRadius:100, resizeMode: 'contain', }}
                                                    source={data.image}
                                                />
                                            </View>
                                            <View style={{
                                                marginTop: 10
                                            }}>
                                                <Text style={{ ...FONTS.Marcellus, fontSize: 15, color: colors.title }}>{data.title}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ paddingTop: 30 }}>
                        <Text style={{ ...FONTS.Marcellus, fontSize: 20, color: colors.title }}>Discover Latest Collection </Text>
                    </View>
                    <View style={[GlobalStyleSheet.row,{marginTop:20}]}>
                        {CategoryData.map((data, index) => {
                            return (
                                <TouchableOpacity
                                    activeOpacity={.9}
                                    onPress={() => navigation.navigate('Products')} 
                                    key={index} 
                                    style={[GlobalStyleSheet.col50, { marginBottom: 20, }]}
                                >
                                    <View style={{justifyContent:'center'}}>
                                        <Image
                                            style={{ height:undefined, width:'100%',aspectRatio:1/1.2, borderRadius: 20,}}
                                            source={data.image}
                                        />
                                        <View 
                                            style={{ 
                                                backgroundColor:colors.card,
                                                height:40,
                                                width:'100%',
                                                borderRadius: 20,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transform:[{rotate:'90deg'}],
                                                position:'absolute',
                                                marginLeft:-60
                                            }}
                                        >
                                            <Text style={{ ...FONTS.fontMedium, fontSize: 16, color:colors.title }}>{data.title}<Text style={{ ...FONTS.fontRegular, fontSize: 12 }}> ({data.count} Items)</Text></Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Document
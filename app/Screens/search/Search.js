import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, IMAGES, FONTS } from '../../constants/theme';
import { ScrollView } from 'react-native-gesture-handler';


const SearchData = [
    {
        title: "All",
    },
    {
        title: "Face Wash",
    },
    {
        title: "Cleanser",
    },
    {
        title: "Scrubs",
    },
    {
        title: "Makeup Remover",
    },
]
const SearchHistoryData = [
    {
        title: "Woman Face Cream",
    },
    {
        title: "Cosmetic",
    },
    {
        title: "Man Face Cream",
    },
    {
        title: "Girls",
    },
    {
        title: "Unisex",
    },

]

const Search = ({ navigation }) => {

    const theme = useTheme();
    const { colors } = theme;

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            {theme.dark
                ?
                null
                :
                <LinearGradient colors={['#97D7BA', '#EBF4F0']}
                    style={{ width: '100%', height: 230, top: 0, position: 'absolute' }}
                ></LinearGradient>
            }
            <View style={[GlobalStyleSheet.container, { paddingBottom: 10, }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[
                            GlobalStyleSheet.background,
                            {
                                height: 48,
                                width: 48,
                                backgroundColor:colors.card,
                                borderRadius:15
                            }]}
                    >
                        <Image
                            style={{ height: 18, width: 18, resizeMode: 'contain', tintColor: colors.title  }}
                            source={IMAGES.arrowleft}
                        />
                    </TouchableOpacity>
                    <View style={{ height: 48, flex: 1, backgroundColor: colors.card, borderRadius: 15 }}>
                        <TextInput
                            style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.text, paddingLeft: 20,flex:1 }}
                            placeholder='Search Best items for You'
                            placeholderTextColor={colors.title}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ ...FONTS.Marcellus, fontSize: 20, color: colors.title }}>Categories</Text>
                </View>
                <View style={{marginHorizontal:-15}}> 
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingRight: 20 ,paddingHorizontal:15}}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10 }}>
                            {SearchData.map((data, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        style={{
                                            backgroundColor:colors.card,
                                            height: 40,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 10,
                                            marginTop: 10,
                                            paddingHorizontal: 25,
                                            paddingVertical: 5
                                        }}>
                                        <Text style={{ ...FONTS.fontMedium, fontSize: 13, color: colors.title }}>{data.title}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
                <View style={{ marginTop: 30 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ ...FONTS.Marcellus, fontSize: 20, color: colors.title }}>Search History</Text>
                        <TouchableOpacity>
                            <Text style={{ ...FONTS.fontMedium, fontSize: 12, color: colors.title }}>Clear All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        {SearchHistoryData.map((data, index) => {
                            return (
                                <View key={index} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 5 }}>
                                    <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title }}>{data.title}</Text>
                                    <TouchableOpacity>
                                        <Image
                                            style={{ height: 19, width: 19, resizeMode: 'contain', opacity: 0.5, tintColor: colors.title }}
                                            source={IMAGES.close}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )	
                        })}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Search
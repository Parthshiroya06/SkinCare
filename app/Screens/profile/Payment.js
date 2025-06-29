import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, Platform } from 'react-native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, IMAGES } from '../../constants/theme';
import CreditCard from '../../components/Card/CreditCard';
import { ScrollView } from 'react-native-gesture-handler';
import PaymentAccordion from '../../components/Accordion/PaymentAccordion';
import Button from '../../components/Button/Button';

const Payment = ({ navigation }) => {

    const theme = useTheme();
    const { colors } = theme;

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <Header
                title={"Payment"}
                leftIcon={"back"}
            />
            <ScrollView contentContainerStyle={{ flexGrow: 1 ,paddingBottom:70}}>
                <View style={[GlobalStyleSheet.container, { flex: 1 }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ ...FONTS.Marcellus, fontSize: 18, color: colors.title }}>Credit/Debit Card</Text>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 5
                            }}
                            onPress={() => navigation.navigate('AddCard')}
                        >
                            <Image
                                style={{ height: 14, width: 14, resizeMode: 'contain',tintColor:colors.title }}
                                source={IMAGES.plus}
                            />
                            <Text style={{ ...FONTS.fontMedium, fontSize: 13, color: colors.title }}>Add Card</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 20, marginHorizontal: -15 }}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ gap: 20, paddingLeft: 15, paddingRight: 15 }}
                        >
                            <CreditCard
                                creditcard
                            />
                            <CreditCard
                                debitcard
                            />
                        </ScrollView>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <PaymentAccordion
                            component
                            Payment
                            netbanking
                        />
                    </View>
                </View>
            </ScrollView>
            <View
                style={[{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 2,
                        height: 2,
                    },
                    shadowOpacity: .1,
                    shadowRadius: 5,
                }, Platform.OS === "ios" && {
                    backgroundColor: colors.card,
                    borderTopLeftRadius:25,borderTopRightRadius:25,
                    bottom:30
                }]}
            >
                <View style={{ height: 88, backgroundColor: colors.card,borderTopLeftRadius:25,borderTopRightRadius:25 }}>
                    <View style={[GlobalStyleSheet.container, { paddingHorizontal: 10, marginTop: 15, paddingTop: 0 }]}>
                        <Button
                            title={"Continue"}
                            onPress={() => navigation.navigate('Checkout')}
                            color={colors.title}
                            btnRounded
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Payment;
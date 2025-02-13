import React, { useState } from 'react';
import { Platform, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import Header from '../../layout/Header';
import CustomInput from '../../components/Input/CustomInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';



const Inputs = () => {

    const { colors } = useTheme();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: colors.background,
                }}
            >
                
                    <Header
                        
                        title={'Inputs'}
                        leftIcon={'back'}
                    />
                
                <ScrollView>
                    <View style={GlobalStyleSheet.container}>
                        <View style={[GlobalStyleSheet.card, GlobalStyleSheet.shadow, { backgroundColor: colors.card }]}>

                            <View style={[GlobalStyleSheet.cardHeader, { borderBottomColor: colors.border }]}>
                                <Text style={{ ...FONTS.h6, color: colors.title }}>Classic Input</Text>
                            </View>

                            <View style={GlobalStyleSheet.cardBody}>
                                <View style={{ marginBottom: 10 }}>
                                    <CustomInput
                                        placeholder="Enter Username"
                                        onChangeText={(value) => console.log(value)}
                                    />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <CustomInput
                                        placeholder="Enter Email"
                                        onChangeText={(value) => console.log(value)}
                                    />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <CustomInput
                                        type={'password'}
                                        placeholder="Enter Password"
                                        onChangeText={(value) => console.log(value)}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={[GlobalStyleSheet.card, GlobalStyleSheet.shadow, { backgroundColor: colors.card }]}>
                            <View style={[GlobalStyleSheet.cardHeader, { borderBottomColor: colors.border }]}>
                                <Text style={{ ...FONTS.h6, color: colors.title }}>Input with Icon</Text>
                            </View>
                            <View style={GlobalStyleSheet.cardBody}>
                                <View style={{ marginBottom: 10 }}>
                                    <CustomInput
                                        icon={<FontAwesome style={{ opacity: .6 }} name={'user'} size={20} color={colors.title} />}
                                        placeholder="Enter Username"
                                        onChangeText={(value) => console.log(value)}
                                    />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <CustomInput
                                        icon={<MaterialIcon style={{ opacity: .6 }} name={'email'} size={20} color={colors.title} />}
                                        placeholder="Enter Email"
                                        onChangeText={(value) => console.log(value)}
                                    />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <CustomInput
                                        type={'password'}
                                        icon={<FontAwesome style={{ opacity: .6 }} name={'lock'} size={20} color={colors.title} />}
                                        placeholder="Password"
                                        onChangeText={(value) => console.log(value)}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={[GlobalStyleSheet.card, GlobalStyleSheet.shadow, { backgroundColor: colors.card }]}>
                            <View style={[GlobalStyleSheet.cardHeader, { borderBottomColor: colors.border }]}>
                                <Text style={{ ...FONTS.h6, color: colors.title }}>Input with different sizes</Text>
                            </View>
                            <View style={GlobalStyleSheet.cardBody}>
                                <View style={{ marginBottom: 10 }}>
                                    <CustomInput
                                        inputLg
                                        placeholder="Enter Username"
                                        onChangeText={(value) => console.log(value)}
                                    />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <CustomInput
                                        placeholder="Enter Username"
                                        onChangeText={(value) => console.log(value)}
                                    />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <CustomInput
                                        inputSm
                                        placeholder="Enter Username"
                                        onChangeText={(value) => console.log(value)}
                                    />
                                </View>
                            </View>
                        </View>


                        <View style={[GlobalStyleSheet.card, GlobalStyleSheet.shadow, { backgroundColor: colors.card }]}>
                            <View style={[GlobalStyleSheet.cardHeader, { borderBottomColor: colors.border }]}>
                                <Text style={{ ...FONTS.h6, color: colors.title }}>Rounded Input</Text>
                            </View>
                            <View style={GlobalStyleSheet.cardBody}>
                                <View style={{ marginBottom: 10 }}>
                                    <CustomInput
                                        inputRounded
                                        icon={<FontAwesome style={{ opacity: .6 }} name={'user'} size={20} color={colors.title} />}
                                        placeholder="Enter Username"
                                        onChangeText={(value) => console.log(value)}
                                    />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <CustomInput
                                        inputRounded
                                        icon={<MaterialIcon style={{ opacity: .6 }} name={'email'} size={20} color={colors.title} />}
                                        placeholder="Enter Email"
                                        onChangeText={(value) => console.log(value)}
                                    />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <CustomInput
                                        inputRounded
                                        type={'password'}
                                        icon={<FontAwesome style={{ opacity: .6 }} name={'lock'} size={20} color={colors.title} />}
                                        placeholder="Password"
                                        onChangeText={(value) => console.log(value)}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={[GlobalStyleSheet.card, GlobalStyleSheet.shadow, { backgroundColor: colors.card }]}>
                            <View style={[GlobalStyleSheet.cardHeader, { borderBottomColor: colors.border }]}>
                                <Text style={{ ...FONTS.h6, color: colors.title }}>Border Input</Text>
                            </View>
                            <View style={GlobalStyleSheet.cardBody}>
                                <View style={{ marginBottom: 10 }}>
                                    <CustomInput
                                        inputBorder
                                        icon={<FontAwesome style={{ opacity: .6 }} name={'user'} size={20} color={colors.title} />}
                                        placeholder="Enter Username"
                                        onChangeText={(value) => console.log(value)}
                                    />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <CustomInput
                                        inputBorder
                                        icon={<MaterialIcon style={{ opacity: .6 }} name={'email'} size={20} color={colors.title} />}
                                        placeholder="Enter Email"
                                        onChangeText={(value) => console.log(value)}
                                    />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <CustomInput
                                        inputBorder
                                        type={'password'}
                                        icon={<FontAwesome style={{ opacity: .6 }} name={'lock'} size={20} color={colors.title} />}
                                        placeholder="Password"
                                        onChangeText={(value) => console.log(value)}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};


export default Inputs;
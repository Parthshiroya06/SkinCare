import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, IMAGES, FONTS } from '../../constants/theme';
import CustomInput from '../../components/Input/CustomInput';
import Button from '../../components/Button/Button';
import { ScrollView } from 'react-native-gesture-handler';

const EditProfile = ({ navigation }) => {

    const theme = useTheme();
    const { colors } = theme;

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <Header
                title={"Edit Profile"}
                leftIcon={'back'}
                // titleLeft
            />
            <ScrollView>
                <View style={[GlobalStyleSheet.container, { flex: 1 }]}>
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <View style={{ borderWidth: 2, borderColor:'#7B9589', height: 150, width: 150, borderRadius: 150, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                style={{ height: 140, width: 140, borderRadius: 100 }}
                                source={IMAGES.product4}
                            />
                        </View>
                        <TouchableOpacity activeOpacity={0.9} style={{ height: 45, width: 45, borderRadius: 45, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0, right: 120 }}>
                            <View style={{ height: 40, width: 40, borderRadius: 40, alignItems: 'center', justifyContent: 'center', backgroundColor:'#7B9589'}}>
                                <Image
                                    style={{ height: 18, width: 18, resizeMode: 'contain', tintColor: colors.card }}
                                    source={IMAGES.write}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: 15, marginTop: 30 }}>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title, marginBottom: 5 }}>Full Name</Text>
                        <CustomInput
                            onChangeText={(value) => console.log(value)}
                            background
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title, marginBottom: 5 }}>Mobile Number</Text>
                        <CustomInput
                            onChangeText={(value) => console.log(value)}
                            background
                            keyboardType={'number-pad'}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title, marginBottom: 5 }}>Email</Text>
                        <CustomInput
                            onChangeText={(value) => console.log(value)}
                            background
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title, marginBottom: 5 }}>Location</Text>
                        <CustomInput
                            onChangeText={(value) => console.log(value)}
                            background
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={{ height: 88, width: '100%', backgroundColor: colors.card,borderTopLeftRadius:25,borderTopRightRadius:25 }}>
                <View style={[GlobalStyleSheet.container, { paddingHorizontal: 10, marginTop: 20, paddingTop: 0 }]}>
                    <Button
                        title={"Update Profile"}
                        color={colors.title}
                        onPress={() => navigation.navigate('Profile')}
                        btnRounded
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default EditProfile
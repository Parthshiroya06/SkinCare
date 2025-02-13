import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { IMAGES, FONTS, COLORS } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import CustomInput from '../../components/Input/CustomInput';
import Button from '../../components/Button/Button';
import SocialBtn from '../../components/Socials/SocialBtn';
import { Feather ,FontAwesome } from '@expo/vector-icons';
import { Checkbox } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';



const SignUp = ({ navigation }) => {

    const theme = useTheme();
    const { colors } = theme;

    const [isChecked, setisChecked] = useState(false);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
                <View style={[GlobalStyleSheet.container,{padding:0}]}>
                    <View style={{width:600,height:500,backgroundColor:COLORS.primary,borderRadius:250,marginLeft:-95,marginTop:-220,overflow:'hidden'}}>
                        <Image
                            style={{ height: undefined, aspectRatio: 2.3 / 1.2,resizeMode:'contain', width:'100%', marginTop:220,}}
                            source={IMAGES.item5}
                        />
                        <View style={{width:600,height:500,backgroundColor:'#001E11',borderRadius:250,position:'absolute',opacity:.7}}></View>
                    </View>
                    <View style={{position:'absolute',top:30,left:20}}> 
                        <Text style={{...FONTS.Marcellus,fontSize:28,color:COLORS.card}}>Create your{"\n"}Account</Text>
                    </View>
                </View>
                <View style={[GlobalStyleSheet.container,{paddingTop:0,marginTop:-150}]}>
                    <View
                        style={[{
                            shadowColor: 'rgba(150, 184, 169, 0.25)',
                            shadowOffset: {
                                width: 2,
                                height: 2,
                            },
                            shadowOpacity: .3,
                            shadowRadius: 5,
                        }, Platform.OS === "ios" && {
                            backgroundColor: colors.card,
                            borderRadius:35
                        }]}
                    >
                        <View style={{backgroundColor:colors.card,padding:30,borderRadius:40,paddingBottom:40}}>
                            <Text style={{...FONTS.Marcellus,fontSize:20,color:colors.title,lineHeight:28}}>Welcome Back! Please Enter{"\n"}Your Deails</Text>
                            <View style={{ marginBottom: 15, marginTop: 20 }}>
                                <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title }}>Name<Text style={{ color: '#FF0000' }}>*</Text></Text>
                                <CustomInput
                                    onChangeText={(value) => console.log(value)}
                                />
                            </View>
                            <View style={{ marginBottom: 15 }}>
                                <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title }}>Email Address<Text style={{ color: '#FF0000' }}>*</Text></Text>
                                <CustomInput
                                    onChangeText={(value) => console.log(value)}
                                />
                            </View>
                            <View>
                                <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title }}>Password<Text style={{ color: '#FF0000' }}>*</Text></Text>
                                <CustomInput
                                    type={'password'}
                                    onChangeText={(value) => console.log(value)}
                                />
                                <View>
                                    <Checkbox.Item
                                        onPress={() => setisChecked(!isChecked)}
                                        position='leading'
                                        label="I agree to all Term, Privacy and Fees"
                                        color={colors.title}
                                        uncheckedColor={colors.textLight}
                                        status={isChecked ? "checked" : "unchecked"}
                                        style={{
                                            paddingHorizontal: 0,
                                            paddingVertical: 5,
                                        }}
                                        labelStyle={{
                                            ...FONTS.fontRegular,
                                            fontSize: 15,
                                            color: colors.title,
                                            textAlign: 'left',
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingHorizontal:60,marginTop:-30}}>
                        <Button
                            title={'Sign Up'}
                            btnRounded
                            fullWidth
                            icon={<Feather  size={24} color={colors.title} name={'arrow-right'} />}
                            onPress={() => navigation.navigate('SignIn')}
                            color={colors.title}
                        />
                    </View>
                </View>
                <View style={[GlobalStyleSheet.container,{paddingHorizontal:20,flex:1,paddingTop:5}]}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom:20
                        }}
                    >
                        <View
                            style={{
                                height: 1,
                                flex: 1,
                                backgroundColor: colors.title,
                            }}
                        />
                        <Text style={{
                            ...FONTS.fontMedium,
                            color: colors.text,
                            marginHorizontal: 15,
                            fontSize: 13
                        }}>Or continue with</Text>
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
                                icon={<Image style={{ height: 20, width: 20, resizeMode: 'contain' }} source={IMAGES.google2} />}
                                rounded
                                color={theme.dark ? '#000':'#FFFFFF'}
                                text={'Sign in with google'}
                            />
                        </View>
                        <View>
                            <SocialBtn
                                icon={<FontAwesome name='apple' size={20} color={colors.title} />}
                                rounded
                                color={theme.dark ? '#000':'#FFFFFF'}
                                text={'Sign in with apple'}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center',flex:1,paddingBottom:10 }}>
                    <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title }}>Already have and account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={{
                            ...FONTS.fontMedium,
                            borderBottomWidth: 1,
                            borderBottomColor: colors.title,
                            color: colors.title
                        }}>  Sign In</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default SignUp;
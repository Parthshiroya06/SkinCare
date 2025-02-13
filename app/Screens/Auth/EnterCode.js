import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, Platform } from 'react-native';
import { COLORS, IMAGES, FONTS } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import Button from '../../components/Button/Button';
import { Feather  } from '@expo/vector-icons';
import Customotp from '../../components/Input/Customotp';
import { ScrollView } from 'react-native-gesture-handler';

const EnterCode = ({ navigation }) => {

    const theme = useTheme();
    const { colors } = theme;
    
    const [otpCode, setOTPCode] = useState("");
    const [isPinReady, setIsPinReady] = useState(false);
    const maximumCodeLength = 4;

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View style={[GlobalStyleSheet.container,{padding:0}]}>
                    <View style={{width:600,height:500,backgroundColor:COLORS.primary,borderRadius:250,marginLeft:-95,marginTop:-220,overflow:'hidden'}}>
                        <Image
                            style={{ height: undefined, aspectRatio: 2.3 / 1.2,resizeMode:'contain', width:'100%', marginTop:220,}}
                            source={IMAGES.item7}
                        />
                        <View style={{width:600,height:500,backgroundColor:'#001E11',borderRadius:250,position:'absolute',opacity:.7}}></View>
                    </View>
                    <View style={{position:'absolute',top:30,left:20}}> 
                        <Text style={{...FONTS.Marcellus,fontSize:28,color:COLORS.white}}>Enter One Time{"\n"}Password (OTP)</Text>
                    </View>
                </View>
                <View style={[GlobalStyleSheet.container,{paddingTop:0,marginTop:-150,flex:1}]}>
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
                        <View style={{backgroundColor:colors.card,padding:30,borderRadius:40,paddingBottom:50}}>
                            <Text style={{...FONTS.Marcellus,fontSize:20,color:colors.title,lineHeight:28}}>An Authentication Code Has{"\n"}Sent To <Text style={{color:'#7B9589'}}>testing@gmail.com</Text></Text>
                            <View style={{ marginBottom: 10, marginTop: 20 }}>
                                <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title,paddingLeft:10 }}>OTP<Text style={{ color: '#FF0000' }}>*</Text></Text>
                                <View style={[{ alignItems: 'center',width:'100%'}]}>
                                    <View style={[{alignItems:'center',}]}>
                                        <Customotp
                                             code={otpCode}
                                             setCode={setOTPCode}
                                             maximumLength={maximumCodeLength}
                                             setIsPinReady={setIsPinReady}
                                        />
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title }}>If you don't receive code! </Text>
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('ForgatPassword')}
                                        >
                                            <Text style={{ ...FONTS.fontMedium, borderBottomWidth: 1, borderBottomColor:COLORS.danger, color:COLORS.danger }}>Resend</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingHorizontal:55,marginTop:-30}}>
                        <Button
                            title={'Verify'}
                            btnRounded
                            fullWidth
                            icon={<Feather  size={24} color={colors.title} name={'arrow-right'} />}
                            onPress={() => navigation.navigate('NewPassword')}
                            color={colors.title}
                        />
                    </View>
                </View>
                <View style={{paddingBottom:15}}>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title }}>Back To </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignIn')}
                        >
                            <Text style={{
                                ...FONTS.fontMedium,
                                borderBottomWidth: 1,
                                borderBottomColor: colors.title,
                                color: colors.title
                            }}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default EnterCode;
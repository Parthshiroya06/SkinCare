import React from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { FONTS, COLORS } from '../../constants/theme';
import { useTheme } from '@react-navigation/native';
import LikeBtn from '../LikeBtn';

const Cardstyle2 = ({ image, price, discount, delivery, title, mindiscount, onPress,marginTop,likebtn }) => {

    const theme = useTheme();
    const { colors } = theme;

    return (
        <View
            style={[{
                shadowColor: "rgba(150, 184, 169, 0.25)",
                shadowOffset: {
                    width: 2,
                    height: 4,
                },
                shadowOpacity: .1,
                shadowRadius: 5,
                marginTop:marginTop ? 15 : 0,
            }, Platform.OS === "ios" && {
                backgroundColor: colors.card,
                borderRadius:20
            }]}
        >
            <TouchableOpacity
                activeOpacity={.9}
                style={{ backgroundColor: colors.card, borderRadius: 20, }}
                onPress={() => onPress && onPress()} 
            >
                <View style={{paddingHorizontal:15,paddingTop:15}}>
                    <Text style={{ ...FONTS.Marcellus, fontSize:16, color: colors.title,}}>{title}</Text>
                </View>
                <Image
                    style={{ width: '100%', height: undefined, aspectRatio: 1 /.8, }}
                    source={image}
                />
                <View style={{ padding: 15,paddingTop:0, alignItems:mindiscount ? 'center' : null,  }}>
                    {mindiscount
                        ?
                        <View>
                            <Text style={{ ...FONTS.fontSemiBold, fontSize: 15, color: COLORS.success }}>{discount}</Text>
                        </View>
                        :
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <Text style={{ ...FONTS.fontSemiBold, fontSize: 14, color: colors.title, marginTop: 2 }}>{price}</Text>
                            <Text
                                style={{
                                    ...FONTS.fontRegular,
                                    fontSize: 12,
                                    textDecorationLine: 'line-through',
                                    textDecorationColor: 'rgba(0, 0, 0, 0.70)',
                                    color: theme.dark ? 'rgba(255,255,255, .7)' : 'rgba(0, 0, 0, 0.70)',
                                    marginRight: 5
                                }}>{discount}
                            </Text>
                            <Text numberOfLines={1} style={{ ...FONTS.fontMedium, fontSize: 13, color: COLORS.success ,paddingRight:60}}>{delivery}</Text>
                        </View>
                    }
                </View>
                {likebtn
                    ?
                    <View style={{ position: 'absolute', right: 5, top: 5 }}>
                        <TouchableOpacity
                            style={{
                                height: 38,
                                width: 38,
                                borderRadius: 38,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <LikeBtn />
                        </TouchableOpacity>
                    </View>
                    :
                    null
                }
            </TouchableOpacity>
        </View>
    )
}

export default Cardstyle2
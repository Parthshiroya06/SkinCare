import React from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';
import { useTheme } from '@react-navigation/native';
//

const SocialBtn = (props) => {

    const { onPress } = props;

    const theme = useTheme();
    const { colors } = theme;

    return (
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
            <TouchableOpacity
                style={[{
                    backgroundColor: props.color ? props.color : COLORS.primary,
                    // paddingVertical: 12,
                    overflow: 'hidden',
                    paddingLeft: 20,
                    paddingRight: 20,
                    height: 55,
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap:props.gap ? 0: 20,
                    justifyContent: 'center'
                }, props.rounded && {
                    borderRadius: 30,
                }]}
                onPress={onPress}
            >
                <View
                    style={[{

                        // width: 44,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }, props.rounded && {
                        borderRadius: 30,
                    }]}
                >
                    {props.icon}
                </View>
                <Text style={{ ...FONTS.font, ...FONTS.fontLg, color: props.textcolor ? colors.card : theme.dark ? COLORS.white : COLORS.title }}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
};



export default SocialBtn;
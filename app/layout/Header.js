import React from 'react';
import { Image, Platform, Text, TouchableOpacity, View, } from 'react-native';
import { COLORS, FONTS, IMAGES } from '../constants/theme';
import { Feather ,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import { GlobalStyleSheet } from '../constants/StyleSheet';

const Header = (props) => {

    const navigation = useNavigation();

    const theme = useTheme();
    const { colors } = theme;

    const { grid, handleLayout, layout } = props;

    return (
        <View
            style={[{
                shadowColor: 'rgba(150, 184, 169, 0.25)',
                shadowOffset: {
                    width: 2,
                    height: 4,
                },
                shadowOpacity: .6,
                shadowRadius: 5,
                zIndex:20,
            }, Platform.OS === "ios" && {
                backgroundColor:theme.dark ?  'rgba(0, 0, 0, 0.70)':'rgba(255,255,255,0.70)',
                borderBottomLeftRadius:25,
                borderBottomRightRadius:25,
                //zIndex:20
            }]}
        >
            <View
                style={[{
                    height: 60,
                    backgroundColor:props.color ? theme.dark ? 'rgba(0,0,0,0.60)':'rgba(255,255,255,0.65)':theme.dark ? 'rgba(0,0,0,0.40)':'rgba(255,255,255,0.40)',
                    borderBottomLeftRadius:25,
                    borderBottomRightRadius:25,
                    alignItems:'center',justifyContent:'center'
                }, props.transparent && {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    borderBottomWidth: 0,
                },Platform.OS === 'ios' && {
                    backgroundColor:theme.dark ? 'rgba(0,0,0,0.10)':'rgba(255,255,255,0.10)'
                }]}
            >
                <View style={[GlobalStyleSheet.container, {
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft:props.paddingLeft ? 15 : 0,
                    justifyContent: 'space-between',
                    paddingTop:10
                }]}
                >
                    {props.leftIcon == "back" &&
                        <View style={{height:40,width:40,borderRadius:15,backgroundColor:colors.card,justifyContent:'center',marginLeft:15}}>
                            <IconButton
                                onPress={() => props.backAction ? props.backAction() : navigation.goBack()}
                                icon={props => <MaterialIcons size={20} name="arrow-back-ios" {...props} />}
                                iconColor={colors.title}
                                size={20}
                            />
                        </View>
                    }
                    <View style={{ flex: 1,marginRight:props.rightIcon ? 0 : props.rightIcon2 ? 0 :props.rightIcon3 ? 0 :props.rightIcon4 ? 0 : 20}}>
                        <Text style={{ ...FONTS.Marcellus, fontSize: 18, color: colors.title, textAlign: props.titleLeft ? 'left' : 'center' }}>{props.title}</Text>
                        {props.productId &&
                            <Text style={{ ...FONTS.fontSm, color: colors.text, textAlign: 'center', marginTop: 2 }}>{props.productId}</Text>
                        }
                    </View>
                    {props.rightIcon2 == "search" &&
                        <View style={{height:40,width:40,borderRadius:15,backgroundColor:colors.card,justifyContent:'center',alignItems:'center'}}>
                            <IconButton
                                onPress={() => navigation.navigate('Search')}
                                size={20}
                                iconColor={colors.title}
                                icon={props => <Feather name="search" {...props} />}
                            />
                        </View>
                    }
                    {props.rightIcon == "cart" &&
                        <View style={{height:40,width:40,borderRadius:15,backgroundColor:colors.card,justifyContent:'center',alignItems:'center'}}>
                            <IconButton
                                onPress={() => navigation.navigate('Shopping')}
                                size={20}
                                iconColor={colors.title}
                                icon={prop =>

                                    <Image {...prop} style={{ height: 20, width: 20, resizeMode: 'contain', tintColor: colors.title }} source={IMAGES.shopping2} />

                                }
                            />
                        </View>
                    }
                    {props.rightIcon3 == "home" &&
                        <IconButton
                            onPress={() => navigation.navigate('DrawerNavigation')}
                            size={20}
                            iconColor={colors.title}
                            icon={props => <Feather  name="home" {...props} />}
                        />
                    }
                    {props.rightIcon4 == "chat" &&
                         <View style={{height:40,width:40,borderRadius:15,backgroundColor:colors.card,justifyContent:'center',alignItems:'center'}}>
                            <IconButton
                                onPress={() => navigation.navigate('SingleChat')}
                                size={20}
                                iconColor={colors.title}
                                icon={props => <Image {...props} style={{ height: 20, width: 20, resizeMode: 'contain', tintColor: colors.title }} source={IMAGES.comment} />}
                            />
                        </View>
                    }
                    {props.rightIcon == "wishlist" &&
                        <IconButton
                            onPress={() => props.handleLike()}
                            size={20}
                            iconColor={props.isLike ? "#F9427B" : colors.title}
                            icon={val => <FontAwesome  name={props.isLike ? "heart" : "heart-o"} {...val} />}
                        />
                    }
                    {grid &&
                        <View
                            style={{
                                flexDirection: 'row',
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => handleLayout('grid')}
                                style={{
                                    padding: 10,
                                }}
                            >
                                <Image
                                    style={{
                                        height: 22,
                                        width: 22,
                                        resizeMode: 'contain',
                                        tintColor: layout === 'grid' ? COLORS.primary : '#BEB9CD',
                                    }}
                                    source={IMAGES.grid}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleLayout('list')}
                                style={{
                                    padding: 10,
                                }}
                            >
                                <Image
                                    style={{
                                        height: 22,
                                        width: 22,
                                        resizeMode: 'contain',
                                        tintColor: layout === 'list' ? COLORS.primary : '#BEB9CD',
                                    }}
                                    source={IMAGES.grid2}
                                />
                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </View>
        </View>
    );
};



export default Header;
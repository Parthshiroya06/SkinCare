import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Header from '../../layout/Header';
import Button from '../../components/Button/Button';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { IMAGES, COLORS } from '../../constants/theme';
import BottomSheet2 from '../Shortcode/BottomSheet2';


const Language = () => {

    const moresheet = React.useRef();

    const [Language, setLanguage] = useState('English');

    const theme = useTheme();
    const { colors } = theme;


    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <Header
                leftIcon={'back'}
                title='Language'
                // titleLeft
            />
            <View style={[GlobalStyleSheet.container, { marginTop: 15 }]}>
                <View>
                    <View
                        style={[
                            GlobalStyleSheet.inputBox, {
                                borderColor: colors.border,
                                borderWidth: 1,
                                paddingLeft: 20,
                            },
                        ]}
                    >
                        <Image
                            style={[GlobalStyleSheet.inputimage, { tintColor: colors.title, left: 'auto', right: 15, }]}
                            source={IMAGES.downaeeowsmall}
                        />

                        <TextInput
                            editable={false}
                            style={[GlobalStyleSheet.input, { color: colors.title, }]}
                            value={Language}
                            placeholderTextColor={colors.border}
                        />
                    </View>
                    <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0 }}
                        onPress={() => moresheet.current.openSheet('Language')}
                    ></TouchableOpacity>
                </View>
                <Button
                    title="Save"
                    color={colors.title}
                    btnRounded
                />
            </View>
            <BottomSheet2
                ref={moresheet}
                setLanguage={setLanguage}
            />
        </SafeAreaView>
    )
}

export default Language
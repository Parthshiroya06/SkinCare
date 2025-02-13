import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform, } from 'react-native';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, IMAGES } from '../../constants/theme';
import { useNavigation, useTheme } from '@react-navigation/native';
import Button from '../Button/Button';
import { ScrollView } from 'react-native-gesture-handler';


const FilterSheet2 = ({sheetRef}) => {

  const theme = useTheme();
  const { colors } = theme;

  const brandData = ["Good Vibes", "Maybelline", "NY Bae", "Lakme","Vibes"];

  const [activeSize, setActiveSize] = useState(brandData[0]);

  const categoriesData = ["All", "Face Wash", "Cleanser", "Scrubs", "Makeup Remover", "Hand Cream",];

  const [active1Size, setActive1Size] = useState(categoriesData[0]);

  const sizeData = ["S", "M", "L", "XL", "2Xl"];

  const [active2Size, setActive2Size] = useState(sizeData[0]);

  return (
      <View style={[GlobalStyleSheet.container, { paddingTop: 0 }]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: colors.border,
              paddingBottom: 15,
              marginHorizontal: -15,
              paddingHorizontal: 15
            }}
          >
            <Text style={[FONTS.Marcellus, { color: colors.title, fontSize: 20 }]}>Filters</Text>
            <TouchableOpacity
              style={{ height: 38, width: 38, backgroundColor: colors.card, borderRadius: 38, alignItems: 'center', justifyContent: 'center' }}
              onPress={() => sheetRef.current.close()}
            >
              <Image
                style={{ width: 18, height: 18, resizeMode: 'contain', tintColor: colors.title }}
                source={IMAGES.close}
              />
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={{ ...FONTS.fontMedium, fontSize: 18, color: colors.title }}>Brand</Text>
                <TouchableOpacity>
                  <Text style={{ ...FONTS.fontRegular, fontSize: 13, color: colors.title }}>See All</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginTop: 5 }}>
                {brandData.map((data, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => setActiveSize(data)}
                      key={index}
                      style={[{
                        backgroundColor: colors.card,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        marginBottom: 5
                      }, activeSize === data && {
                        backgroundColor: COLORS.primary,
                        borderColor: COLORS.primary,
                      }]}
                    >
                      <Text style={[{ ...FONTS.fontMedium, fontSize: 13, color: colors.title }, activeSize === data && {  color: COLORS.white }]}>{data}</Text>
                    </TouchableOpacity>
                  )
                })}
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={{ ...FONTS.fontMedium, fontSize: 18, color: colors.title }}>Categories:</Text>
                <TouchableOpacity>
                  <Text style={{ ...FONTS.fontRegular, fontSize: 13, color: colors.title }}>See All</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginTop: 5 }}>
                {categoriesData.map((data, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => setActive1Size(data)}
                      key={index}
                      style={[{
                        backgroundColor: colors.card,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        marginBottom: 5
                      }, active1Size === data && {
                        backgroundColor: COLORS.primary,
                        borderColor: COLORS.primary,
                      }]}
                    >
                      <Text style={[{ ...FONTS.fontMedium, fontSize: 13, color: colors.title }, active1Size === data && {  color: COLORS.white }]}>{data}</Text>
                    </TouchableOpacity>
                  )
                })}
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={{ ...FONTS.fontMedium, fontSize: 18, color: colors.title }}>Size:</Text>
                <TouchableOpacity>
                  <Text style={{ ...FONTS.fontRegular, fontSize: 13, color: colors.title }}>See All</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginTop: 5 }}>
                {sizeData.map((data, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => setActive2Size(data)}
                      key={index}
                      style={[{
                        backgroundColor: colors.card,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        marginBottom: 5
                      }, active2Size === data && {
                        backgroundColor: COLORS.primary,
                        borderColor: COLORS.primary,
                      }]}
                    >
                      <Text style={[{ ...FONTS.fontMedium, fontSize: 13, color: colors.title }, active2Size === data && { color: COLORS.white }]}>{data}</Text>
                    </TouchableOpacity>
                  )
                })}
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={{ ...FONTS.fontMedium, fontSize: 18, color: colors.title }}>Price:</Text>
              </View>
              <View style={{ flexDirection: 'row', gap: 10, paddingRight: 10, marginTop: 20,marginBottom:50 }}>
                <View style={{ width: '50%' }}>
                  <Button
                    onPress={() => sheetRef.current.close()}
                    title={"Reset"}
                    text={colors.title}
                    color={colors.card}
                    btnRounded
                  />
                </View>
                <View style={{ width: '50%' }}>
                  <Button
                    onPress={() => sheetRef.current.close()}
                    title={"Apply"}
                    text={colors.card}
                    color={colors.title}
                    btnRounded
                  />
                </View>
              </View>
          </ScrollView>
      </View>
  );
};

export default FilterSheet2;

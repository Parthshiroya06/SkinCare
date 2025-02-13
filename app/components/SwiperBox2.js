import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { COLORS, FONTS, IMAGES, SIZES } from '../constants/theme';
import CheckoutItems from './CheckoutItems';

const SCREEN_WIDTH = Dimensions.get('window').width;



export default class SwiperBox2 extends Component {


  rightSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [45, 90],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });


    return (
      <TouchableOpacity onPress={() => { this.close(); this.props.handleDelete() }} activeOpacity={0.6}>
        <View style={[styles.deleteBox, { backgroundColor: this.props.theme.dark ? COLORS.white : COLORS.title }]}>
          <Animated.View>
            <Image
              style={{ height: 20, width: 20, resizeMode: 'contain', tintColor: this.props.theme.dark ? COLORS.primary : COLORS.white }}
              source={IMAGES.delete}
            />
          </Animated.View>
        </View>
      </TouchableOpacity>
    );
  };

  updateRef = ref => {
    this._swipeableRow = ref;
  };
  close = () => {
    this._swipeableRow.close();
  };

  render() {

    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        renderRightActions={this.rightSwipe}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    marginTop: 15,
                    backgroundColor:this.props.colors.card,
                    borderRadius:20,
                    padding:10,
                    paddingLeft:0,
                    marginHorizontal:15
                }}
            >
                <View>
                    <Image
                        style={{ height: undefined, width:SIZES.width / 2.8,aspectRatio:1/.8, }}
                        source={this.props.data.image}
                    />
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ProductDetails')}
                    >
                        <Text style={{ ...FONTS.Marcellus, fontSize: 18, color:this.props.colors.title }}>{this.props.data.title}</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 5 }}>
                        <Text style={{ ...FONTS.Marcellus, fontSize: 16, color:this.props.colors.title, }}>{this.props.data.price}</Text>
                        <Text
                            style={{
                                ...FONTS.Marcellus,
                                fontSize: 14,
                                textDecorationLine: 'line-through',
                                textDecorationColor: 'rgba(0, 0, 0, 0.70)',
                                color: this.props.theme.dark ? 'rgba(255,255,255,0.7)' : 'rgba(0, 0, 0, 0.70)',
                                marginRight: 5
                            }}>{this.props.data.discount}
                        </Text>
                        <Image
                            style={{ height: 12, width: 12, resizeMode: 'contain', }}
                            source={IMAGES.star4}
                        />
                        <Text style={{ ...FONTS.fontRegular, fontSize: 12, color: this.props.theme.dark ? 'rgba(255,255,255,0.5)' : 'rgba(0, 0, 0, 0.50)' }}>{this.props.data.review}</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <CheckoutItems />
                    </View>
                </View>
            </View>  
      </Swipeable>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    height: 80,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    padding: 20,
  },
  deleteBox: {
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 135,
    right: 0,
    top:15,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  },
});

import {
  View,
  Text,
  ScrollView,
  Animated,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontFamily from '../Styles/fontFamily';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Image} from 'react-native';
import colors from '../Styles/colors';
import BssChild from '../Components/BssChild';
const ChildBss = props => {
  const data = [
    {
      id: 283831,
      name: 'Muhammad Moeez Zeeshan',
      img: 'bss',
      dob: '15 Oct, 2017',
      date: 'One Violet',
      school: 'LMA 11-FCC Gulberg, Lahore',
      fee: '1010 (for Jul-Jul 2023)',
      due: 'Due Date 13 July, 2023',
      invoice: '2400000012345 (for Jul-Jul 2023)',
    },
    {
      id: 283832,
      name: 'Muhammad Moeez Zeeshan',
      img: 'bss',
      dob: '15 Oct, 2017',
      date: 'One Violet',
      school: 'IT Department',
      fee: 'Head office',
      due: 'Administrative Staff',
      invoice: 'Regular',
    },
    {
      id: 283833,
      name: 'Muhammad Moeez Zeeshan',
      img: 'bss',
      dob: '15 Oct, 2017',
      date: 'One Violet',
      school: 'IT Department',
      fee: 'Head office',
      due: 'Administrative Staff',
      invoice: 'Regular',
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: colors.appBackGroundColor}}>
      <View>
        <MainHeader
          text={'Child’s in BSS'}
          iconName={'arrow-left'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <View>
        {data.map((item, i) => {
          return <BssChild item={item} key={i} />;
        })}
      </View>
    </View>
  );
};

export default ChildBss;

const styles = EStyleSheet.create({
  zetext: {
    color: '#363636',
    fontWeight: '700',
    fontSize: '0.9rem',
    fontFamily: fontFamily.ceraBlack,
  },
  zetext1: {
    color: '#363636',
    fontWeight: '500',
    // marginTop: hp(1),
    fontSize: '0.7rem',
    fontFamily: fontFamily.ceraBlack,
  },
  smalltext: {
    fontWeight: '700',
    fontSize: '0.7375rem',
    fontFamily: fontFamily.ceraBlack,
    color: '#353535',
    fontStyle: 'normal',
  },
  smalltext1: {
    fontWeight: '500',
    fontSize: '0.5rem',
    fontFamily: fontFamily.ceraBlack,
    color: '#353535',
    fontStyle: 'normal',
    alignItems: 'center',
  },
  dtext: {
    color: '#353535',
    fontSize: '0.8rem',
    fontWeight: '700',
    fontStyle: 'normal',
    paddingVertical: hp(0.5),
    fontFamily: fontFamily.ceraBlack,
  },
  centertext: {
    fontFamily: fontFamily.ceraBlack,
    fontSize: '0.75rem',
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#363636',
  },
  ststext: {
    fontFamily: fontFamily.ceraBlack,
    paddingHorizontal: hp(2.5),
    paddingVertical: hp(0.5),
    textTransform: 'uppercase',
  },
  childname: {
    color: '#353535',
    fontFamily: fontFamily.ceraBold,
    fontSize: '0.6rem',
    fontWeight: '700',
    fontStyle: 'normal',
  },
  number: {
    color: '#2D8E00',
    backgroundColor: '#D4FFCC',
    borderRadius: hp(50),
    paddingHorizontal: hp(0.8),
    fontFamily: fontFamily.ceraBold,
    fontSize: '0.5rem',
    fontWeight: '700',
    fontStyle: 'normal',
  },
  dob: {
    color: '#363636',
    fontFamily: fontFamily.ceraMedium,
    fontSize: '0.5rem',
    fontWeight: '300',
    fontStyle: 'normal',
  },
  dobdata: {
    color: '#353535',
    // backgroundColor: '#D4FFCC',
    borderRadius: hp(50),
    paddingHorizontal: hp(0.8),
    fontFamily: fontFamily.ceraMedium,
    fontSize: '0.55rem',
    fontWeight: '300',
    fontStyle: 'normal',
  },
});

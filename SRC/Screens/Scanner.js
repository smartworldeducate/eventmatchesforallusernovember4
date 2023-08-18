import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import fontFamily from '../Styles/fontFamily';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MainHeader from '../Components/Headers/MainHeader';
const Scanner = props => {
  const data = props.route.params;
  console.log('my scanner data', data);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <MainHeader
          text={'Scanner'}
          iconName={'arrow-left'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <View
        style={{
          marginHorizontal: hp(2.5),
          height: hp(10),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: hp(2),
          backgroundColor: '#FFFFFF',
          marginTop: hp(2),
          shadowColor: '#000',
          shadowOpacity: 0.5,
          shadowRadius: 4,
          elevation: 4,
        }}>
        <Text style={{color: '#cdcdcd'}}>{data?.data}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Scanner;

const styles = EStyleSheet.create({
  headerChild: {
    marginTop: hp(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textstyle: {
    color: '#fff',
    marginTop: hp(0),
    fontSize: '0.9rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
  },
  mainHeader: {
    height: hp(20),
    borderBottomRightRadius: hp(2.5),
    borderBottomLeftRadius: hp(2.5),
  },
  homesearchView: {
    width: wp(80),
    height: hp(6),
    backgroundColor: '#58D68D ',
    borderRadius: hp(2),
  },

  textstyle: {
    color: '#fff',
    fontSize: hp(2),
    marginTop: hp(0.5),
  },
  textInputCustomStyle: {
    height: hp('6'),
    letterSpacing: -0.05,
    paddingLeft: wp('3'),
    color: '#292D32',
    fontSize: '0.7rem',
    fontWeight: '300',
    fontFamily: fontFamily.ceraLight,
  },
  homeSearch: {
    marginTop: hp(2.2),
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginHorizontal: hp(2.5),
    borderRadius: hp(1.5),
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  searchicon: {marginTop: hp(1.5), marginRight: hp(2)},
  placeholderStyle: {
    fontSize: '0.575rem',
    fontWeight: '300',
    fontFamily: fontFamily.ceraLight,
    fontStyle: 'normal',
  },

  itemStyle: {
    padding: 10,
    color: '#000',
    fontSize: '0.6rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    lineHeight: hp(1.5),
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});

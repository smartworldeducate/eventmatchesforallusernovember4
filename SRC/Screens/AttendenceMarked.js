import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import Check from 'react-native-vector-icons/AntDesign';
import Wrench from 'react-native-vector-icons/FontAwesome';
import User from 'react-native-vector-icons/AntDesign';
import Gte from 'react-native-vector-icons/AntDesign';
import Phone from 'react-native-vector-icons/Feather';
import colors from '../Styles/colors';
import {Div, ThemeProvider, Radio} from 'react-native-magnus';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ViewInput from '../Components/ViewInput';
import Button from '../Components/Button/Button';
import EStyleSheet from 'react-native-extended-stylesheet';
import fontFamily from '../Styles/fontFamily';
const AttendenceMarked = (props) => {
  const [fullDay,setFullDay]=useState(false)
  const [halfDay,setHalfDay]=useState(false)
  const [shortLeave,setShortLeave]=useState(false)
  const [withPay,setWithPay]=useState(false)
  const [withOutPay,setWithOutPay]=useState(false)
  const fulDayHandle=()=>{
    fullDay == true ? setFullDay(false) : setFullDay(true)
  }
  const halfDayHandle=()=>{
    halfDay == true ? setHalfDay(false) : setHalfDay(true)
  }
  const shortLeaveHandle=()=>{
    shortLeave == true ? setShortLeave(false) : setShortLeave(true)
  }
  const withPayHandle=()=>{
    withPay == true ? setWithPay(false) : setWithPay(true)
  }
  const withOutPayHandle=()=>{
    withOutPay == true ? setWithOutPay(false) : setWithOutPay(true)
  }
  return (
    <View>
      <MainHeader text={'Attendance Not Marked'} iconName={'arrow-left'} onpressBtn={()=>props.navigation.goBack()}/>
      
      <View
        style={{
          marginTop: hp(2),
          marginHorizontal: wp('5'),
          backgroundColor: '#fff',
          borderRadius: wp(10),
          shadowColor: '#000',
          shadowOpacity: 1,
          shadowRadius: wp('15'),
          elevation: 10,
        }}>
        <ViewInput
          // dateText={dateThree}
          // dateFun={showDatePickerthree}
          iconName={'calendar-days'}
          placeholder={'Tue, Jun 27, 2023'}
          placeholderColor={colors.loginTextColor}
          iconColor={colors.loginIconColor}
          // style={styles.textInputCustomStyle}
        />
      </View>
     
      <View
        style={{
          marginHorizontal: hp(2.5),
          marginTop: hp(2),
          flexDirection: 'row',
          justifyContent:'space-between'
        }}>
        <TouchableOpacity activeOpacity={0.8} onPress={fulDayHandle} style={{flexDirection: 'row'}}>
          <View>
            <Radio
              checked={fullDay}
              activeColor={'#0EAA24'}
              inactiveColor={'#CDCDCD'}
              fontSize={30}
              onChange={fulDayHandle}
            />
          </View>
          <View style={{marginVertical: hp(0.8), paddingHorizontal: hp(0.5)}}>
            <Text style={styles.radiotext}>Time In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={halfDayHandle} style={{flexDirection: 'row'}}>
          <View>
            <Radio
              checked={halfDay}
              activeColor={'#0EAA24'}
              inactiveColor={'#CDCDCD'}
              fontSize={30}
              onChange={halfDayHandle}
            />
          </View>
          <View style={{marginVertical: hp(0.8), paddingHorizontal: hp(0.5)}}>
            <Text style={styles.radiotext}>Time Out</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={shortLeaveHandle} style={{flexDirection: 'row'}}>
          <View>
            <Radio
              checked={shortLeave}
              activeColor={'#0EAA24'}
              inactiveColor={'#CDCDCD'}
              fontSize={30}
              onChange={shortLeaveHandle}
            />
          </View>
          <View style={{marginVertical: hp(0.9), paddingHorizontal: hp(0.5)}}>
            <Text style={styles.radiotext}>Both</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: hp(2),
          marginHorizontal: wp('5'),
          backgroundColor: '#fff',
          borderRadius: wp(10),
          shadowColor: '#000',
          shadowOpacity: 1,
          shadowRadius: wp('15'),
          elevation: 10,
        }}>
        <ViewInput
          // dateText={dateThree}
          // dateFun={showDatePickerthree}
          iconName={'clock'}
          placeholder={'09:00 AM'}
          placeholderColor={colors.loginTextColor}
          iconColor={colors.loginIconColor}
          // style={styles.textInputCustomStyle}
        />
      </View>
      <View
        style={{
          marginTop: hp(2),
          marginHorizontal: wp('5'),
          backgroundColor: '#fff',
          borderRadius: wp(10),
          shadowColor: '#000',
          shadowOpacity: 1,
          shadowRadius: wp('15'),
          elevation: 10,
        }}>
        <ViewInput
          // dateText={dateThree}
          // dateFun={showDatePickerthree}
          iconName={'clock'}
          placeholder={'17:15 PM'}
          placeholderColor={colors.loginTextColor}
          iconColor={colors.loginIconColor}
          // style={styles.textInputCustomStyle}
        />
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: hp(1.5),
          shadowColor: '#000',
          shadowOpacity: 0.5,
          shadowRadius: 4,
          elevation: 8,
          marginHorizontal: wp(5),
          marginTop: hp('2'),
        }}>
        <TextInput
          placeholder={'Reason'}
          placeholderColor={'gray'}
          placeholderTextColor="black"
          style={{
            height: hp(15),
            textAlignVertical: 'top',
            paddingLeft: wp('3'),
          }}
        />
      </View>
      <View
        style={{
          marginTop: hp(2),
          marginHorizontal: wp('5'),
          backgroundColor: '#fff',
          borderRadius: wp(10),
          shadowColor: '#000',
          shadowOpacity: 1,
          shadowRadius: wp('15'),
          elevation: 10,
        }}>
        <ViewInput
          // dateText={dateThree}
          // dateFun={showDatePickerthree}
          iconName={'user'}
          placeholder={'Muhammad Qasim Ali Khan'}
          placeholderColor={colors.loginTextColor}
          iconColor={colors.loginIconColor}
          // style={styles.textInputCustomStyle}
        />
      </View>
      <TouchableOpacity
        style={{
          width: wp(90),
          marginHorizontal: hp(2.5),
          height: hp(6.5),
          justifyContent: 'center',
          backgroundColor: '#1C37A4',
          position: 'absolute',
          top: hp(90),
          borderRadius: hp(50),
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.submittext}>SUBMIT REQUEST</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AttendenceMarked;

const styles = EStyleSheet.create({
  textInputView: {
    marginTop: hp('2'),
    justifyContent: 'center',
    backgroundColor: colors.whiteColor,
    alignItems: 'center',
    flexDirection: 'row',
    height: hp('7'),
    borderRadius: wp('10'),
    borderColor: colors.grey,
    borderWidth: wp('0.1'),
    marginBottom: hp('2'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: wp('10'),
    shadowRadius: wp('10'),
    elevation: 10,
  },
  textInputCustomStyle: {
    fontSize: hp('1.65'),
    height: hp('6.3'),
    letterSpacing: -0.05,
    paddingLeft: wp('6'),
    color:'black',
  },
  loginWithGoogle: {
    justifyContent: 'center',
    backgroundColor: colors.whiteColor,
    alignItems: 'center',
    flexDirection: 'row',
    height: hp('7'),

    borderRadius: wp('10'),
    borderColor: colors.grey,
    borderWidth: wp('0.1'),
    marginBottom: hp('2'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: wp('10'),
    shadowRadius: wp('10'),
    elevation: 10,
  },
  textInputCustomStyle: {
    fontSize: '0.7rem',
    height: hp('6'),
    letterSpacing: -0.05,
    paddingLeft: wp('3'),
    color:'#363636',
    fontWait:'500',
    fontFamily: fontFamily.ceraMedium,
  },
  radiotext:{
    fontSize: '0.62rem',
    fontWaight:'500',
    color: '#363636',
    fontFamily:fontFamily.ceraMedium,
},
submittext:{
  color: '#fff',
  fontFamily:fontFamily.ceraMedium,
  fontSize: '0.7rem',
  // color:'#363636',
    fontWait:'500',
}
});

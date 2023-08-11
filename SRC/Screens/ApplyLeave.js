import {View, Text, StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
// import Check from 'react-native-vector-icons/AntDesign';
// import Wrench from 'react-native-vector-icons/FontAwesome';
// import User from 'react-native-vector-icons/AntDesign';
// import Gte from 'react-native-vector-icons/AntDesign';
// import Phone from 'react-native-vector-icons/Feather';
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
const ApplyLeave = (props) => {
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
      <MainHeader text={'Apply Leave'} iconName={'arrow-left'} onpressBtn={()=>props.navigation.goBack()}/>
      <View
        style={{width: wp(90), marginHorizontal: hp(2.5), marginTop: hp(2)}}>
        <ViewInput
          //  value={employeeId}
          //  onChangeText={onChangeEmpId}
          //  keyboardType={'numeric'}
          //  maxLength={11}
          //  returnKeyType={'done'}
          iconName={'arrowright'}
          placeholder={'Tue, Jun 27, 2023'}
          placeholderColor={colors.loginTextColor}
          iconColor={colors.loginIconColor}
          style={styles.textInputCustomStyle}
        />
      </View>
      <View
        style={{width: wp(90), marginHorizontal: hp(2.5), marginTop: hp(2)}}>
        <ViewInput
          //  value={employeeId}
          //  onChangeText={onChangeEmpId}
          //  keyboardType={'numeric'}
          //  maxLength={11}
          //  returnKeyType={'done'}
          iconName={'arrowright'}
          placeholder={'Tue, Jun 27, 2023'}
          placeholderColor={colors.loginTextColor}
          iconColor={colors.loginIconColor}
          style={styles.textInputCustomStyle}
        />
      </View>
      <View
        style={{width: wp(90), marginHorizontal: hp(2.5), marginTop: hp(2)}}>
        <ViewInput
          //  value={employeeId}
          //  onChangeText={onChangeEmpId}
          //  keyboardType={'numeric'}
          //  maxLength={11}
          //  returnKeyType={'done'}
          iconName={'calendar'}
          placeholder={'8 Days'}
          placeholderColor={colors.loginTextColor}
          iconColor={colors.loginIconColor}
          style={styles.textInputCustomStyle}
        />
      </View>
      <View
        style={{width: wp(90), marginHorizontal: hp(2.5), marginTop: hp(2)}}>
        <ViewInput
          //  value={employeeId}
          //  onChangeText={onChangeEmpId}
          //  keyboardType={'numeric'}
          //  maxLength={11}
          //  returnKeyType={'done'}
          iconName={'calendar'}
          placeholder={'Leave Type'}
          placeholderColor={colors.loginTextColor}
          iconColor={colors.loginIconColor}
          style={styles.textInputCustomStyle}
        />
      </View>
      <View
        style={{
          marginHorizontal: hp(2.5),
          marginTop: hp(2),
          flexDirection: 'row',
          justifyContent:'space-between'
        }}>
        <View style={{flexDirection: 'row'}}>
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
            <Text style={styles.radiotext}>Full Day</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row',}}>
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
            <Text style={styles.radiotext}>Half Day</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Radio
               checked={shortLeave}
               activeColor={'#0EAA24'}
               inactiveColor={'#CDCDCD'}
               fontSize={30}
               onChange={shortLeaveHandle}
            />
          </View>
          <View style={{marginVertical: hp(0.8), paddingHorizontal: hp(0.5)}}>
            <Text style={styles.radiotext}>Short Leave</Text>
          </View>
        </View>
      </View>
      <View style={{marginHorizontal:hp(2.5),height:hp(0.1),marginTop:hp(2),backgroundColor:'#DBDBDB',justifyContent:'center',alignItems:'center'}}></View>
      <View
        style={{
          width: wp(90),
          marginHorizontal: hp(2.5),
          marginTop: hp(1.7),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Radio
            style={{}}
             checked={withPay}
             activeColor={'#0EAA24'}
             inactiveColor={'#CDCDCD'}
             fontSize={30}
             onChange={withPayHandle}
            />
          </View>
          <View style={{marginVertical: hp(0.5), paddingHorizontal: hp(0.5)}}>
            <Text style={styles.radiotext}>With Pay</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Radio
             checked={withOutPay}
             activeColor={'#0EAA24'}
             inactiveColor={'#CDCDCD'}
             fontSize={30}
             onChange={withOutPayHandle}
            />
          </View>
          <View style={{marginVertical: hp(0.5), paddingHorizontal: hp(0.5)}}>
            <Text style={styles.radiotext}>Without Pay</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          width: wp(90),
          marginHorizontal: hp(2.5),
          marginTop: hp(3),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: wp(90),
            height: hp(15),
            backgroundColor: '#fff',
            borderRadius: hp(1.5),
            shadowColor: '#000',
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 8,
          }}>
          <View style={{marginHorizontal: hp(2), marginVertical: hp(1)}}>
            <TextInput  placeholder={'Reason'}
                  placeholderColor={'gray'}
                  placeholderTextColor="gray"
                  style={styles.textInputCustomStyle} />
          </View>
        </View>
      </View>
      <View
        style={{width: wp(90), marginHorizontal: hp(2.5), marginTop: hp(2)}}>
        <ViewInput
          //  value={employeeId}
          //  onChangeText={onChangeEmpId}
          //  keyboardType={'numeric'}
          //  maxLength={11}
          //  returnKeyType={'done'}
          iconName={'adduser'}
          placeholder={'Muhammad Qasim Ali Khan'}
          placeholderColor={colors.loginTextColor}
          iconColor={colors.loginIconColor}
          style={styles.textInputCustomStyle}
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
          top: hp(95),
          borderRadius: hp(50),
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.submittext}>SUBMIT REQUEST</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ApplyLeave;

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

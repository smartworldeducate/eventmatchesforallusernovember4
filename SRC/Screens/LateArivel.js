import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import colors from '../Styles/colors';
import {Div, ThemeProvider, Radio} from 'react-native-magnus';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ViewInput from '../Components/ViewInput';
import Button from '../Components/Button/Button';
import EStyleSheet from 'react-native-extended-stylesheet';
import fontFamily from '../Styles/fontFamily';
import ViewInputTwo from '../Components/ViewInputTwo';
const LateArivel = props => {
  const [fullDay, setFullDay] = useState(false);
  const [halfDay, setHalfDay] = useState(false);
  const [shortLeave, setShortLeave] = useState(false);
  const [withPay, setWithPay] = useState(false);
  const [withOutPay, setWithOutPay] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('');
  const [dateTwo, setDateTwo] = useState('');
  const [dateThree, setDateThree] = useState('');
  //one
  const showDatePicker = () => {
    setDatePickerVisibility(true);
    setDate('');
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    console.log(date);
    const dt =
      date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
    setDate(dt);
    hideDatePicker();
    setDateView(false);
  };

  //two

  const showDatePickertwo = () => {
    setDatePickerVisibility(true);
    setDateTwo('');
  };

  const hideDatePickertwo = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirmtwo = date => {
    console.log(date);
    const dt =
      date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
    setDateTwo(dt);
    hideDatePickertwo();
    setDateView(false);
  };

  //three

  const showDatePickerthree = () => {
    setDatePickerVisibility(true);
    setDateThree('');
  };

  const hideDatePickerthree = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirmthree = date => {
    console.log(date);
    const dt =
      date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
    setDateThree(dt);
    hideDatePickertwo();
    setDateView(false);
  };

  const fulDayHandle = () => {
    setFullDay(!fullDay);
  };
  const halfDayHandle = () => {
    setHalfDay(!halfDay);
  };
  const shortLeaveHandle = () => {
    setShortLeave(!shortLeave);
  };
  const withPayHandle = () => {
    setWithPay(!withPay);
  };
  const withOutPayHandle = () => {
    setWithOutPay(!withOutPay);
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#F5F8FC'}}>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirmtwo}
        onCancel={hideDatePickertwo}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirmthree}
        onCancel={hideDatePickerthree}
      />
      <MainHeader
        text={'LateArivel'}
        iconName={'arrow-left'}
        onpressBtn={() => props.navigation.goBack()}
      />
      <View style={{}}>
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
            dateText={date}
            dateFun={showDatePicker}
            iconName={'arrow-right'}
            rIcon={'angles-up-down'}
            placeholder={'Tue, Jun 27, 2023'}
            placeholderColor={colors.loginTextColor}
            iconColor={colors.loginIconColor}
            // style={styles.textInputCustomStyle}
          />
        </View>
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
          dateText={dateTwo}
          dateFun={showDatePickertwo}
          iconName={'arrow-right'}
          placeholder={'Tue, Jun 27, 2023'}
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
          dateText={dateThree}
          dateFun={showDatePickerthree}
          iconName={'calendar-days'}
          placeholder={'8 Days'}
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
          //  value={employeeId}
          //  onChangeText={onChangeEmpId}
          //  keyboardType={'numeric'}
          //  maxLength={11}
          //  returnKeyType={'done'}
          iconName={'clock'}
          placeholder={'Late Arrival'}
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
          //  value={employeeId}
          //  onChangeText={onChangeEmpId}
          //  keyboardType={'numeric'}
          //  maxLength={11}
          //  returnKeyType={'done'}
          iconName={'user'}
          placeholder={'Muhammad Qasim Ali Khan'}
          placeholderColor={colors.loginTextColor}
          iconColor={colors.loginIconColor}
          // style={styles.textInputCustomStyle}
        />
      </View>
      <TouchableOpacity
        style={{
          marginTop: hp(6),
          marginHorizontal: hp(2.5),
          height: hp(6.5),
          justifyContent: 'center',
          backgroundColor: '#1C37A4',

          borderRadius: hp(50),
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.submittext}>SUBMIT REQUEST</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LateArivel;

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
    // fontSize: '0.7rem',
    // height: hp('6'),
    // letterSpacing: -0.05,
    // paddingLeft: wp('3'),
    // color: '#363636',
    // fontWait: '500',
    // fontFamily: fontFamily.ceraMedium,
  },
  radiotext: {
    fontSize: '0.62rem',
    fontWaight: '500',
    color: '#363636',
    fontFamily: fontFamily.ceraMedium,
  },
  submittext: {
    color: '#fff',
    fontFamily: fontFamily.ceraMedium,
    fontSize: '0.7rem',
    // color:'#363636',
    fontWait: '500',
  },
 
});

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import colors from '../Styles/colors';
import {Div, ThemeProvider, Radio} from 'react-native-magnus';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-fontawesome-pro';
import SelectDropdown from 'react-native-select-dropdown';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ViewInput from '../Components/ViewInput';
import Button from '../Components/Button/Button';
import EStyleSheet from 'react-native-extended-stylesheet';
import fontFamily from '../Styles/fontFamily';
const AttendenceMarked = props => {
  const [fullDay, setFullDay] = useState(false);
  const [halfDay, setHalfDay] = useState(false);
  const [shortLeave, setShortLeave] = useState(false);
  const [withPay, setWithPay] = useState(false);
  const [withOutPay, setWithOutPay] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [myDate, setMyDate] = useState('');
  const [stime, setStime] = useState('');
  const [etime, setEtime] = useState('');
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [endTimePickerVisible, setEndTimePickerVisibility] = useState(false);
  const reportee = ['Muhammad Qasim Ali Khan', 'Asad Numan Shahid'];
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    const dt = day + '-' + month + '-' + year;

    setMyDate(dt);
    hideDatePicker();
  };
  ///timepicke start
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleSconfirm = time => {
    const x = time.toLocaleTimeString();
    setStime(x);
    hideTimePicker();
  };

  //timepicker end

  const showEndTimePicker = () => {
    setEndTimePickerVisibility(true);
    setEtime('');
  };
  const hideEndTimePicker = () => {
    setEndTimePickerVisibility(false);
  };

  const handleEndConfirm = time => {
    const x = time.toLocaleTimeString();
    setEtime(x);
    hideEndTimePicker();
  };

  const fulDayHandle = () => {
    fullDay == true ? setFullDay(false) : setFullDay(true);
  };
  const halfDayHandle = () => {
    halfDay == true ? setHalfDay(false) : setHalfDay(true);
  };
  const shortLeaveHandle = () => {
    shortLeave == true ? setShortLeave(false) : setShortLeave(true);
  };
  const withPayHandle = () => {
    withPay == true ? setWithPay(false) : setWithPay(true);
  };
  const withOutPayHandle = () => {
    withOutPay == true ? setWithOutPay(false) : setWithOutPay(true);
  };
  return (
    <View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleSconfirm}
        onCancel={hideTimePicker}
      />
      <DateTimePickerModal
        mode="time"
        isVisible={endTimePickerVisible}
        onConfirm={handleEndConfirm}
        onCancel={hideEndTimePicker}
      />
      <MainHeader
        text={'Attendance Not Marked'}
        iconName={'arrow-left'}
        onpressBtn={() => props.navigation.goBack()}
      />

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
          dateText={myDate}
          dateFun={showDatePicker}
          iconName={'calendar-days'}
          placeholder={'Tue, Jun 27, 2023'}
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
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={fulDayHandle}
          style={{flexDirection: 'row'}}>
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
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={halfDayHandle}
          style={{flexDirection: 'row'}}>
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
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={shortLeaveHandle}
          style={{flexDirection: 'row'}}>
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
          dateText={stime}
          dateFun={showTimePicker}
          iconName={'clock'}
          placeholder={'09:00 AM'}
          placeholderColor={colors.loginTextColor}
          iconColor={colors.loginIconColor}
          style={styles.textInputCustomStyle}
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
          dateText={etime}
          dateFun={showEndTimePicker}
          iconName={'clock'}
          placeholder={'17:15 PM'}
          placeholderColor={colors.loginTextColor}
          iconColor={colors.loginIconColor}
          style={styles.textInputCustomStyle}
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
      <View style={{marginHorizontal: hp(2.5), marginTop: hp(2)}}>
        <SelectDropdown
          data={reportee}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText={'Muhammad Qasim Ali Khan'}
          buttonTextAfterSelection={(selectedItem, index) => {
            console.log(selectedItem);
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          renderDropdownIcon={isOpened => {
            return (
              <View
                style={{
                  backgroundColor: '#FDEB13',
                  height: hp(7),
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 56,
                  marginLeft: -8,
                  borderRadius: 50,
                }}>
                <Icon type="light" name="user" color={'#444'} size={hp(3)} />
              </View>
            );
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          dropdownIconPosition={'left'}
        />
      </View>
      <TouchableOpacity
      activeOpacity={0.8}
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
    color: '#363636',
    fontWait: '500',
    fontFamily: fontFamily.ceraMedium,
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
  dropdown1BtnStyle: {
    width: '100%',
    height: hp(7),
    backgroundColor: '#FFF',
    borderRadius: 50,

    elevation: 8,
  },
  dropdown1BtnTxtStyle: {
    color: '#363636',
    fontSize: '0.7rem',
    fontFamily: fontFamily.ceraMedium,
    textAlign: 'left',
  },
  dropdown1DropdownStyle: {
    backgroundColor: '#EFEFEF',
    marginTop: hp(-3.85),
    borderRadius: hp(1.5),
  },
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
    width: wp(100),
  },
  dropdown1RowTxtStyle: {
    color: '#444',
    textAlign: 'left',
    color: '#363636',
    fontSize: '0.7rem',
    fontFamily: fontFamily.ceraMedium,}
});

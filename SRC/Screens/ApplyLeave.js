import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Ficon from 'react-native-fontawesome-pro';

import React, { useEffect, useState } from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../Styles/colors';
import { Div, ThemeProvider, Radio } from 'react-native-magnus';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SelectDropdown from 'react-native-select-dropdown';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ViewInput from '../Components/ViewInput';
import Button from '../Components/Button/Button';
import EStyleSheet from 'react-native-extended-stylesheet';
import fontFamily from '../Styles/fontFamily';
import ViewInputTwo from '../Components/ViewInputTwo';
import InputBackground from '../Components/InputBackground';
import Icon from 'react-native-fontawesome-pro';
import { useDispatch, useSelector } from 'react-redux';
import { getLineMangerHandller } from '../features/lineManager/createSlice';
import { reporteeHandleFun } from '../features/reportee/createSlice';
const ApplyLeave = props => {
  const dispatch = useDispatch();
  const lineMangerData = useSelector(state => state.getLineManger);
  const [fullDay, setFullDay] = useState(false);
  const [halfDay, setHalfDay] = useState(false);
  const [shortLeave, setShortLeave] = useState(false);
  const [withPay, setWithPay] = useState(false);
  const [withOutPay, setWithOutPay] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisibleTwo, setDatePickerVisibilityTwo] = useState(false);
  const [isDatePickerVisibleThree, setDatePickerVisibilityThree] =
    useState(false);
  const [myDate, setMyDate] = useState('');
  const [dateTwo, setDateTwo] = useState('');
  const [dateThree, setDateThree] = useState('');
  const [selectValue, setSelectValue] = useState(0);
  const [selectLeave, setSelectLeave] = useState('');
  const [reporteeData, setReporteeData] = useState([]);
  const [empLength, setEmpLength] = useState('');
  const [mangerData, setMangerData] = useState([])
  const leaveType = ['Anuall Leave', 'Casual Leave', 'Sick Leave'];
  // const reportee = ['Muhammad Qasim Ali Khan', 'Asad Numan Shahid'];
  const userData = useSelector(state => state.reportee);
  // console.log("appli lieave data",userData?.user)
  const lineMangerHandler = async () => {
    try {
      const lineMdata = await dispatch(getLineMangerHandller());
      console.log('line manager data', lineMdata?.payload?.data);
      if (lineMdata && lineMdata.payload && lineMdata.payload.data) {
        console.log('line manager data inside dispatch', lineMdata?.payload?.data);
        setMangerData(lineMdata?.payload?.data);
      }
      return lineMdata;
    } catch (error) {
      console.error('Error in reporteeHandler:', error);
      throw error;
    }
  };
  const reporteeHandler = async (val) => {
    try {
      // console.log('selected value', val);
      const reportee = await dispatch(reporteeHandleFun(val));
      if (reportee && reportee.payload && reportee.payload.data) {
        console.log('reprtee dada inside dispatch', reportee.payload?.data);
        setReporteeData(reportee.payload?.data);
        setEmpLength(reportee.payload?.data?.length)
      }
      return reportee;
    } catch (error) {
      console.error('Error in reporteeHandler:', error);
      throw error;
    }
  };

  useEffect(() => {
    setReporteeData(userData);
    const rd = reporteeHandler({
      reportingToId: selectValue ? selectValue : '18776'
    });
    setReporteeData(rd.payload?.data);
    const lmd = lineMangerHandler();
    console.log("linemanger data", lmd.payload?.data)
    // setMangerData(lmd);
  }, [dateTwo, dateThree, selectValue]);

  //one
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

  //second datetime picker
  const showDatePickerTwo = () => {
    setDatePickerVisibilityTwo(true);
  };

  const hideDatePickerTwo = () => {
    setDatePickerVisibilityTwo(false);
  };

  const handleDateConfirmTwo = date => {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    const dt = day + '-' + month + '-' + year;

    setDateTwo(dt);
    hideDatePickerTwo();
  };

  //third date time picker
  const showDatePickerThree = () => {
    setDatePickerVisibilityThree(true);
  };

  const hideDatePickerThree = () => {
    setDatePickerVisibilityThree(false);
  };

  const handleDateConfirmThree = date => {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    const dt = day + '-' + month + '-' + year;

    setDateThree(dt);
    hideDatePickerThree();
  };

  useEffect(() => {
    console.log('myDateInUseEffect', myDate);
  }, [myDate]);

  console.log('dateOutside', myDate);

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
    <ScrollView style={{ flex: 1, backgroundColor: '#F5F8FC' }}>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        mode="date"
        isVisible={isDatePickerVisibleTwo}
        onConfirm={handleDateConfirmTwo}
        onCancel={hideDatePickerTwo}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisibleThree}
        onConfirm={handleDateConfirmThree}
        onCancel={hideDatePickerThree}
        mode="date"
      />
      <MainHeader
        text={'Apply Leave'}
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
          iconName={'arrow-right'}
          rIcon={'angles-up-down'}
          placeholder={'Tue, Jun 27, 2023'}
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
          dateText={dateTwo}
          dateFun={showDatePickerTwo}
          iconName={'arrow-right'}
          placeholder={'Tue, Jun 27, 2023'}
          placeholderColor={colors.loginTextColor}
          iconColor={colors.loginIconColor}
          style={styles.textInputCustomStyle}
        />
      </View>
      <View
        style={{
          marginTop: hp(2),
          marginHorizontal: wp('5'),
          backgroundColor: '#FFF2CC',
          borderRadius: wp(10),
          shadowColor: '#000',
          shadowOpacity: 1,
          shadowRadius: wp('15'),
          elevation: 10,
        }}>
        <ViewInput
          dateText={dateThree}
          dateFun={showDatePickerThree}
          iconName={'calendar-days'}
          placeholder={'8 Days'}
          placeholderColor={colors.loginTextColor}
          iconColor={colors.loginIconColor}
          style={styles.textInputCustomStyle}
        />
      </View>

      <View style={{ height: hp('7'), marginVertical: hp('2'), marginHorizontal: hp('2.5'), elevation: 8, backgroundColor: "white", borderRadius: hp(50), flexDirection: 'row' }}>
        <View
          style={{
            flex: 0.19,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FDEB13',
            borderRadius: wp('10'),
          }}>
          <Ficon type="light" name='calendar-exclamation' color='#000' size={25} />
        </View>

        <View style={{ flex: 0.80 }}>
          <SelectDropdown
            data={mangerData}
            onSelect={(selectedItem, index) => {
              setSelectValue(selectedItem?.EMPLOYEE_ID);
            }}
            defaultButtonText={'Leave Type'}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <Text style={styles.dropdown1BtnTxt}>{selectedItem ? selectedItem.EMP_NAME : ' Leave Type'}</Text>
              );
            }}
            renderCustomizedRowChild={(item, index) => {
              return (
                <View style={styles.dropdown1RowChildStyle}>
                  <Image source={item.image} style={styles.dropdownRowImage} />
                  <Text style={styles.dropdown1RowTxtStyle}>{item.EMP_NAME}</Text>
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

        <View style={{ flex: 0.23, justifyContent: 'center', alignItems: 'center', marginRight: hp(-1) }}>
          <Ficon type="light" name="angles-up-down" color="#cdcdcd" size={20} />
        </View>
      </View>
      <View
        style={{
          marginHorizontal: hp(2.5),
          height: hp(0.1),
          marginTop: hp(2),
          backgroundColor: '#DBDBDB',
          justifyContent: 'center',
          alignItems: 'center',
        }}></View>
      <View
        style={{
          width: wp(90),
          marginHorizontal: hp(2.5),
          marginTop: hp(1.7),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={withPayHandle}
          style={{ flexDirection: 'row' }}>
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
          <View style={{ marginVertical: hp(0.85), paddingHorizontal: hp(0.5) }}>
            <Text style={styles.radiotext}>With Pay</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={withOutPayHandle}
          style={{ flexDirection: 'row' }}>
          <View>
            <Radio
              checked={withOutPay}
              activeColor={'#0EAA24'}
              inactiveColor={'#CDCDCD'}
              fontSize={30}
              onChange={withOutPayHandle}
            />
          </View>
          <View style={{ marginVertical: hp(0.85), paddingHorizontal: hp(0.5) }}>
            <Text style={styles.radiotext}>Without Pay</Text>
          </View>
        </TouchableOpacity>
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
            color: '#000'
          }}
        />
      </View>

      <View style={{ height: hp('7'), marginVertical: hp('2'), marginHorizontal: hp('2.5'), elevation: 8, backgroundColor: "white", borderRadius: hp(50), flexDirection: 'row' }}>
        <View
          style={{
            flex: 0.19,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FDEB13',
            borderRadius: wp('10'),
          }}>
          <Ficon type="light" name='user' color='#000' size={25} />
        </View>

        <View style={{ flex: 0.80 }}>
          <SelectDropdown
            data={mangerData}
            onSelect={(selectedItem, index) => {
              setSelectValue(selectedItem?.EMPLOYEE_ID);
            }}
            defaultButtonText={'Muhammad Qasim Ali Khan'}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <Text style={styles.dropdown1BtnTxt}>{selectedItem ? selectedItem.EMP_NAME : ' Qasim Ali Khan'}</Text>
              );
            }}
            renderCustomizedRowChild={(item, index) => {
              return (
                <View style={styles.dropdown1RowChildStyle}>
                  <Image source={item.image} style={styles.dropdownRowImage} />
                  <Text style={styles.dropdown1RowTxtStyle}>{item.EMP_NAME}</Text>
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

        <View style={{ flex: 0.23, justifyContent: 'center', alignItems: 'center', marginRight: hp(-1) }}>
          <Ficon type="light" name="angles-up-down" color="#cdcdcd" size={20} />
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          marginTop: hp(6),
          marginHorizontal: hp(2.5),
          height: hp(6.5),
          justifyContent: 'center',
          backgroundColor: '#1C37A4',

          borderRadius: hp(50),
        }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.submittext}>SUBMIT REQUEST</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
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
    paddingLeft: wp('2'),
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
    width: wp('50'),
    height: hp(7),
    backgroundColor: '#fff',
    marginVertical: hp(0)
  },
  dropdown1BtnTxt: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: fontFamily.ceraMedium,
    fontSize: '0.7rem',
    color: 'gray',
    fontWaight: 700,
  },
  dropdown1DropdownStyle: {
    width: wp('90'),
    backgroundColor: '#EFEFEF',
    marginTop: hp(-3.85),
    marginLeft: hp(-7),
    borderRadius: hp(1.5),
  },
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
    width: wp(90),
  },
  dropdown1RowTxtStyle: {
    textAlign: 'left',
    color: 'gray',
    fontSize: '0.7rem',
    fontWaight: 500,
    marginLeft: hp(1.5),
    fontFamily: fontFamily.ceraMedium,
  },
});

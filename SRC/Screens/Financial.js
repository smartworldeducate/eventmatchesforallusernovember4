import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import EStyleSheet from 'react-native-extended-stylesheet';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontFamily from '../Styles/fontFamily';
import {color} from '@rneui/themed/dist/config';
import CmpTest from '../Components/CmpTest';
import SallaryComp from '../Components/Sallary';
const Financial = props => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [salary, setSalary] = useState(true);
  const [history, setHistory] = useState(false);

  const salaryHandler = () => {
    setSalary(true);
    setHistory(false);
  };
  const historyHandler = () => {
    setHistory(true);
    setSalary(false);
  };
  const [clinder, setClinder] = useState(null);
  const clinderHandler = item => {
    setClinder(item);
    setDefalut(false);
    // console.log('my month', item);
  };

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
    setHide(false);
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <MainHeader
          text={'Financials'}
          iconName={'arrow-left'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
      <View style={styles.salaryMainView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            marginHorizontal: hp(1),
            marginVertical: hp(0.7),
          }}>
          <TouchableOpacity
            onPress={salaryHandler}
            style={{
              height: hp(5.5),
              backgroundColor: salary == true ? '#fff' : '#E7E7E7',
              paddingVertical: hp(1),
              borderRadius: hp(1),
              paddingHorizontal: hp(6),
              justifyContent: 'center',
            }}>
            <Text style={styles.headertext}>Salary Slip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={historyHandler}
            style={{
              height: hp(5.5),
              backgroundColor: history == true ? '#fff' : '#E7E7E7',
              paddingVertical: hp(1),
              borderRadius: hp(1),
              paddingHorizontal: hp(7),
              justifyContent: 'center',
            }}>
            <Text style={styles.headertext}>History</Text>
          </TouchableOpacity>
        </View>
      </View>

      {salary == true && <SallaryComp />}
      {history == true && <CmpTest />}
    </View>
  );
};

export default Financial;
const styles = EStyleSheet.create({
  smalltext: {
    fontWeight: '500',
    fontSize: '0.9rem',
    fontFamily: fontFamily.ceraMedium,
    color: '#363636',
    fontStyle: 'normal',
  },
  smalltext1: {
    fontWeight: '500',
    fontSize: '0.5rem',
    fontFamily: fontFamily.ceraMedium,
    color: '#353535',
    fontStyle: 'normal',
    alignItems: 'center',
  },
  iconSty: {
    fontSize: hp(2.5),
    color: '#A6ACAF',
    fontWeight: 100,
  },
  headertext: {
    fontSize: '0.75rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    color: '#363636',
    fontWeight: '500',
  },
  duction: {
    color: '#979797',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  testname: {
    color: '#343434',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  textnum: {
    color: '#343434',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  circularText: {
    fontSize: '0.75rem',
    color: '#646464',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBold,
    fontStyle: 'normal',
  },
  circularText1: {
    fontSize: '0.5rem',
    color: '#979797',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    marginHorizontal: hp(0.9),
    textTransform: 'uppercase',
  },
  numbertext: {
    color: '#353535',
    fontSize: '0.7rem',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBold,
    fontStyle: 'normal',
    textTransform: 'uppercase',
  },
  basictext: {
    color: '#979797',
    fontSize: '0.5rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    textTransform: 'uppercase',
  },
  btc: {
    paddingLeft: hp(0.5),
    fontSize: hp(2),
    fontWeight: '700',
    fontFamily: fontFamily.ceraBlack,
  },
  ftbotom: {
    color: '#FFF',
    fontSize: '0.55rem',
    fontFamily: fontFamily.ceraBold,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  mainHeader: {
    height: hp(8),
    backgroundColor: '#1C37A4',
    borderBottomRightRadius: hp(0),
    borderBottomLeftRadius: hp(0),
  },
  container: {
    flex: 1,
    marginTop: hp(0),
  },
  pdf: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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
    borderRadius: hp(50),
    paddingHorizontal: hp(0.8),
    fontFamily: fontFamily.ceraMedium,
    fontSize: '0.55rem',
    fontWeight: '300',
    fontStyle: 'normal',
  },
  renderdot: {
    height: hp(3.7),
    width: wp(2.5),
    borderRadius: 1,
    backgroundColor: color,
    marginRight: 10,
  },
  salaryMainView: {
    height: hp(7),
    marginHorizontal: hp(2.5),
    borderRadius: hp(1),
    backgroundColor: '#E7E7E7',
    marginTop: hp(2),
  },
});

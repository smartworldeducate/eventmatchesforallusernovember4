import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import Check from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-fontawesome-pro';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontFamily from '../Styles/fontFamily';
import EStyleSheet from 'react-native-extended-stylesheet';
const Reportee = props => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [salary, setSalary] = useState(true);
  const [history, setHistory] = useState(false);
  const [dateView, setDateView] = useState(true);
  const [date, setDate] = useState('');
  const salaryHandler = () => {
    setSalary(true);
    setHistory(false);
  };
  const historyHandler = () => {
    setHistory(true);
    setSalary(false);
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
  };

  const data = [
    {text: 'PF Own', number: '5,000'},
    {text: 'EOBI Own', number: '250'},
    {text: 'Income Tax', number: '5,000'},
    {text: 'Absent Deduction (Absent days)', number: '0(0)'},
    {text: 'Other Deduction', number: '840'},
    {text: 'Total Deduction', number: '1190'},
    {text: 'Net Salary', number: '88090'},
    {text: 'PF Own', number: '5,000'},
    {text: 'EOBI Own', number: '250'},
    {text: 'Income Tax', number: '5,000'},
    
  ];
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Qasim Team', value: 'Y'},
    {label: 'Asad Numan Shahid', value: 'N'},
  ]);
  return (
    <>
      <View>
        <MainHeader
          text={'Reportees'}
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: hp(2.5),
          marginTop: hp(1),
        }}>
        <View style={{width: wp(43), zIndex: 1}}>
          <DropDownPicker
            placeholder="Reportee"
            placeholderStyle={{color: '#cdcdcd'}}
            style={{
              borderColor: '#E4DFDF',
              borderWidth: 1,
              borderRadius: hp(1.2),
              height: hp(6),
              paddingLeft: hp(1.5),
            }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>

        <TouchableOpacity
          onPress={showDatePicker}
          style={{
            width: wp(43),
          }}>
          <View
            style={{
              height: hp(6),
              flexDirection: 'row',
              borderColor: '#E4DFDF',
              justifyContent: 'space-between',
              borderWidth: 1,
              borderRadius: hp(1.2),
              backgroundColor: '#FFFFFF',
              paddingLeft: hp(1.5),
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: 'gray'}}>{date}</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: hp(1.5),
              }}>
              <Icon
                type="light"
                name="calendar-days"
                size={hp(2)}
                color="#cdcdcd"
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: hp(5),
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: hp(2.5),
          marginTop: hp(2),
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center', paddingVertical: hp(0.4)}}>
            <Check name="checkcircleo" size={hp(3)} color="#239B56" />
          </View>
          <View style={{marginLeft: hp(0.8)}}>
            <View>
              <Text style={styles.smalltext}>15</Text>
            </View>
            <View style={{marginTop:hp(-0.2)}}>
              <Text style={styles.smalltext1}>Total</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginLeft: hp(3.5)}}>
          <View style={{alignItems: 'center', paddingVertical: hp(0.4)}}>
            <Icon name="wrench" size={hp(3)} color="#BB8FCE" />
          </View>
          <View style={{marginLeft: hp(0.5)}}>
            <View>
              <Text style={styles.smalltext}>06</Text>
            </View>
            <View style={{marginTop:hp(-0.2)}}>
              <Text style={styles.smalltext1}>present</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginLeft: hp(3.5)}}>
          <View style={{alignItems: 'center', paddingVertical: hp(0.4)}}>
            <Check name="checkcircleo" size={hp(3)} color="#CD6155" />
          </View>
          <View style={{marginLeft: hp(0.5)}}>
            <View>
              <Text style={styles.smalltext}>09</Text>
            </View>
            <View style={{marginTop:hp(-0.2)}}>
              <Text style={styles.smalltext1}>Absent</Text>
            </View>
          </View>
        </View>
      </View>
      {/* <View
        style={{
          height: hp(0.05),
          backgroundColor: '#cdcdcd',
          marginTop: hp(1),
        }}></View> */}
      <View style={{flex: 1, marginHorizontal: hp(2.5), marginTop: hp(1)}}>
        {data.map((item, i) => {
          return (
            <>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}
                key={i}>
                <View
                  style={{
                    height: hp(6),
                    marginHorizontal: hp(1),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row',justifyContent:'center',marginVertical:hp(1)}}>
                    <View style={{}}>
                      <Image
                        style={{width: wp(6), height: hp(3)}}
                        source={{uri: 'asd'}}
                        resizeMode="cover"
                      />
                    </View>
                    <View style={{paddingLeft: hp(1)}}>
                      <View>
                        <Text style={styles.testname}>Zeeshan A.Hafeez</Text>
                      </View>
                      <View>
                        <Text style={styles.desig}>
                          Senior Officer UX/UI Design
                        </Text>
                      </View>
                    </View>
                  </View>
              
                </View>
                <View>
                    <View style={{flexDirection: 'row',justifyContent:'center',marginVertical:hp(2),marginLeft:hp(-7)}}>
                      <View style={{justifyContent:'center'}}>
                        <Icon
                          type="light"
                          name="arrow-down-right"
                          size={hp(2)}
                          color="green"
                        />
                      </View>
                      <View style={{justifyContent:'center',paddingLeft:hp(0.5)}}>
                        <Text style={styles.timestyle}>08:57:25</Text>
                      </View>
                    </View>
                  </View>
                <View style={{justifyContent:'center'}}>
                  <Text style={styles.timestyle}>--:--:--</Text>
                </View>
              </View>
              <View style={{height: 1, backgroundColor: '#DBDBDB'}}></View>
            </>
          );
        })}
      </View>
    </>
  );
};

export default Reportee;

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
  duction: {
    color: '#979797',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  testname: {
    color: '#343434',
    fontSize: '0.55rem',
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
  textobj: {
    color: '#505255',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: hp(1.8),
  },
  objnum: {
    color: '#969696',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    fontWeight: '500',
  },
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
    fontSize: '0.7rem',
    fontFamily: fontFamily.ceraBold,
    color: '#353535',
    fontStyle: 'normal',
  },
  smalltext1: {
    fontWeight: '300',
    fontSize: '0.45rem',
    fontFamily: fontFamily.ceraLight,
    color: '#979797',
    fontStyle: 'normal',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  dtext: {
    color: '#353535',
    fontSize: '0.65rem',
    fontWeight: '700',
    fontStyle: 'normal',
    paddingVertical: hp(0.5),
    fontFamily: fontFamily.ceraBold,
  },
  desig: {
    color: '#343434',
    fontSize: '0.45rem',
    fontFamily: fontFamily.ceraLight,
    fontStyle: 'normal',
    fontWeight: '300',
  },
  timestyle: {
    color: '#343434',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    fontWeight: '500',
  },
});

import React, {useEffect, useState} from 'react';
// import Left from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-fontawesome-pro';
import Menu from 'react-native-vector-icons/Entypo';
import Clinder from 'react-native-vector-icons/AntDesign';
import EStyleSheet from 'react-native-extended-stylesheet';

import {
  ScrollView,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  useLinkProps,
  useNavigation,
  CommonActions,
} from '@react-navigation/native';

import colors from '../Styles/colors';
import HeaderTop from '../Components/Headers/HeaderTop';
import HeaderSecond from '../Components/Headers/HeaderSecond';
import HomeList from '../Components/HomeList/HomeList';
import HomeList2 from '../Components/HomeList/HomeList2';
import MainHeader from '../Components/Headers/MainHeader';
import TextInputCustom from '../Components/TextInput/TextInput';
import Button from '../Components/Button/Button';
import Card from '../Components/Card';
import Calinder from '../Components/Calinder';
import fontSize from '../Styles/fontSize';
import fontFamily from '../Styles/fontFamily';

const HomeScreen = props => {
  const navigation = useNavigation();
  const handleNavigate = (routeName, clearStack, params) => {
    navigation.navigate(routeName, params);
    if (clearStack) {
      console.log('Clear');
    }
  };
  const [employeeId, setEmployeeId] = useState();
  const [employeePassword, setEmployeePassword] = useState();

  // const [refreshing, setRefreshing] = useState(false);
  // const onRefresh = () => {
  //   setRefreshing(true);
  //   setRefreshing(false);
  // };

  const onChangeEmpId = val => {
    setEmployeeId(val);
  };
  const onChangeEmpPassword = val => {
    setEmployeePassword(val);
  };

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onPressLogin = () => {
    handleNavigate('Login');
  };

  return (
  
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor:
            Platform.OS === 'android' ? colors.white : colors.white,
        }}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={colors.yellowColor}
        />
        <View>
          <HeaderTop
            onPressIcon={() => navigation.openDrawer()}
            iconName={'arrowleft'}
            text={'Change Password'}
          />
        </View>
        <ScrollView>
        <View style={styles.botContainer}>
          <View
            style={{
              width: wp(30),
              height: hp(9),
              justifyContent: 'space-between',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <View style={{alignContent: 'center', marginHorizontal: hp(4)}}>
              <Icon name="bars-progress" size={35} color="#AED6F1" />
            </View>
            <View
              style={{
                alignContent: 'center',
                marginHorizontal: hp(1),
                width: wp(30),
              }}>
              <Text style={[styles.bootContText1, {marginLeft: hp(0)}]}>
                3.7 Years
              </Text>
              <Text style={[styles.bootContText2, {marginLeft: hp(-1.5)}]}>
                Service Length
              </Text>
            </View>
          </View>
          <View
            style={{
              width: wp(30),
              height: hp(9),
              justifyContent: 'space-between',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <View style={{alignContent: 'center', marginHorizontal: hp(4)}}>
              <Icon name="chart-area" size={35} color="#AED6F1" />
            </View>
            <View
              style={{
                alignContent: 'center',
                marginHorizontal: hp(1),
                width: wp(30),
              }}>
              <Text style={[styles.bootContText1, {}]}>Regular</Text>
              <Text style={[styles.bootContText2, {paddingLeft: hp(2.5)}]}>
                Status
              </Text>
            </View>
          </View>

          <View
            style={{
              width: wp(30),
              height: hp(9),
              justifyContent: 'space-between',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <View style={{alignContent: 'center', marginHorizontal: hp(4)}}>
              <Clinder name="calendar" size={35} color="#AED6F1" />
            </View>
            <View
              style={{
                alignContent: 'center',
                marginHorizontal: hp(1),
                width: wp(30),
              }}>
              <Text style={styles.bootContText1}>08:59:05</Text>
              <Text style={[styles.bootContText2, {paddingLeft: hp(1.5)}]}>
                Attendance
              </Text>
            </View>
          </View>
        </View>

        <Card />
        <View>
          <Calinder />
        </View>
        </ScrollView>

        <View
          style={{
            backgroundColor: '#fff',
            position: 'relative',
            bottom:hp(0)
           
          }}>
          <View
            style={{
              height: hp(7),
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
             
            }}>
            {/* <View style={{flex:0.1}}></View> */}
            <TouchableOpacity
              onPress={() => {}}
              style={{flex: 0.2, alignItems: 'center', }}>
              <Menu name="home" size={hp(4)} color="#1C37A4" style={{}} />
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 0.2, paddingTop: hp(0.5), alignItems: 'center'}}>
              <Icon name="book-bookmark" size={hp(4)} color="#979797" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 0.2, alignItems: 'center'
              }}>
              <View
                style={{
                  height: hp('6'),
                  alignItems: 'center',
                  width:wp(12),
                  borderWidth: hp(0.5),
                  borderColor: 'gray',
                  borderRadius: hp(50),
                  backgroundColor: 'black',
                  justifyContent: 'center',
                }}>
                <Icon style={{}} name="qrcode" size={hp(4)} color="#fff" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 0.2,alignItems: 'center'}}>
              <Clinder name="calendar" size={hp(4)} color="#979797" />
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 0.2, alignItems: 'center', paddingTop: hp(0)}}>
              <Icon name="user-tie" size={hp(4)} color="#979797" />
            </TouchableOpacity>
            {/* <View style={{flex:0.1}}></View> */}
          </View>
        </View>
      </SafeAreaView>
   
  );
};

const styles = EStyleSheet.create({
  textInputView: {
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
    height: hp('7'),
    letterSpacing: -0.05,
    paddingLeft: wp('6'),
    color: colors.loginIconColor,
  },
  textView: {
    marginTop: hp(2),
  },
  botContainer: {
    backgroundColor: '#F0F3F4',
    marginTop: hp(2),
    flexDirection: 'row',
    // width: wp(90),
    // justifyContent: 'space-between',
    marginHorizontal: hp(3.5),
  },
  textstyle: {
    color: '#fff',
    fontSize: hp(2),
    marginTop: hp(0.5),
  },
  headerRow: {
    justifyContent: 'space-between',
  },
  botContainer: {
    backgroundColor: '#F0F3F4',
    marginTop: hp(2),
    flexDirection: 'row',
    // width: wp(90),
    // justifyContent: 'space-between',
    marginHorizontal: hp(3.5),
  },
  zetext: {
    color: '#fff',
    fontSize: fontSize.small,
    fontWeight: '100',
    fontFamily: fontFamily.ceraBlack,
  },
  bootContText: {
    fontSize: '0.5rem',
    fontWeight: '900',
    fontFamily: fontFamily.ceraBlack,
    paddingHorizontal: hp(3),
    color: '#979797',
  },
  bootContText2: {
    fontSize: '0.5rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraBlack,
    paddingHorizontal: hp(2),
    color: '#979797',
    textTransform: 'uppercase',
  },
  bootContText1: {
    fontSize: '0.7rem',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBlack,
    fontStyle: 'normal',
    paddingHorizontal: hp(2),
    color: '#353535',
  },
  zetext1: {
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '100',
    fontFamily: fontFamily.ceraBlack,
  },

  ztitle: {
    color: '#fff',
    fontSize: hp(1.5),
    fontWeight: '600',
    marginTop: hp(1),
    fontFamily: fontFamily.ceraBlack,
  },
  textInputCustomStyle: {
    fontSize: hp('1.65'),
    height: hp('6'),
    letterSpacing: -0.05,
    paddingLeft: wp('3'),
    color: colors.loginIconColor,
  },
});

export default HomeScreen;

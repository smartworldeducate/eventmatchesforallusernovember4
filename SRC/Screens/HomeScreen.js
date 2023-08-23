import React, {useEffect, useState, useRef} from 'react';
// import Left from 'react-native-vector-icons/AntDesign';
import Ficon from 'react-native-fontawesome-pro';
import Menu from 'react-native-vector-icons/Entypo';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Modal from 'react-native-modal';
import {Toast} from 'galio-framework';
import {BottomSheet} from '@rneui/themed';
import {
  ScrollView,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
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

import Card from '../Components/Card';
import Calinder from '../Components/Calinder';
import fontSize from '../Styles/fontSize';
import fontFamily from '../Styles/fontFamily';

const HomeScreen = props => {
  const [animodal, setAnimodal] = useState(false);
  const [animation, setAnimation] = useState(true);
  const [isShow, setShow] = useState(false);
  const [visibleBtn, setVisibleBtn] = useState(false);
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState({
    scan: false,
    ScanResult: false,
    result: '',
  });
  const {scan, ScanResult, result} = state;

  var ncode = result?.data;

  var [barcode, setBarcode] = useState({
    item: [],
  });

  const addCode = data => {
    const newCode = barcode.item.concat(data);
    setBarcode({item: newCode});
  };
  // console.log(barcode.item);

  const scanner = useRef(null);

  const scanData = result;

  const onSuccess = async e => {
    props.navigation.navigate('Scanner', e);
    setInterval(() => {
      setShow(false);
    }, 4000);
    const check = e.data.substring(0, 4);
    setState({
      result: e,
      scan: false,
      ScanResult: true,
    });
    if (check === 'http') {
      Linking.openURL(e.data).catch(err =>
        console.error('An error occured', err),
      );
    } else {
      setState({
        result: e,
        scan: false,
        ScanResult: true,
      });
      setVisible(false);
      console.log('scan data', e.data);
    }
  };

  const activeQR = e => {
    setState({
      scan: true,
    });
  };

  const handleQrcode = () => {
    // setShow(true)
    setVisible(true);
    activeQR('active qr');
  };

  const handleReset = () => {
    setState({scan: false});
    setVisible(false);
   
  };
  const [leave, setLeave] = useState(false);
  const [clinder, setClinder] = useState(false);
  const handleLeave = () => {
    setLeave(true);
    setClinder(false);
  };
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
          Platform.OS === 'android'
            ? colors.appBackGroundColor
            : colors.appBackGroundColor,
      }}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#1C37A5', '#4D69DC']}
        style={{height: hp('5')}}>
        <StatusBar translucent backgroundColor="transparent" />
      </LinearGradient>
      <View>
        <HeaderTop
          onPressIcon={() => navigation.openDrawer()}
          iconName={'arrowleft'}
          // text={'Change Password'}
        />
      </View>
      <Toast
        isShow={isShow}
        positionIndicator="top"
        style={{
          backgroundColor: '#F1948A',
          width: wp(90),
          marginHorizontal: hp(2.5),
          borderRadius: 5,
        }}>
        <Text style={{color: '#fff'}}>please enter valid Qrcode</Text>
      </Toast>

      {animation && (
        <View>
          <Modal isVisible={animodal}>
            <View
              style={{
                width: wp(30),
                height: hp(15),
                backgroundColor: '#EAFAF1',
                borderRadius: hp(2),
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: hp(15),
              }}>
              <View style={{}}>
                <ActivityIndicator animating={animation} size={'large'} />
              </View>
            </View>
          </Modal>
        </View>
      )}
      <BottomSheet
        isVisible={visible}
        style={{
          width: wp(100),
          height: hp(100),
          backgroundColor: '#fff',
          flex: 1,
        }}>
        <View
          
          style={{
            width: wp(100),
            position: 'relative',
            zIndex: 1,
            marginBottom: hp(20),
          }}>
          <TouchableOpacity
          onPress={handleReset}
            style={{
              width: wp(10),
              height: hp(5),
              // borderRadius: hp(50),
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 20,
              left: hp(45),
            }}>
            <Text style={{color: 'gray', fontSize: hp(2)}}>X</Text>
          </TouchableOpacity>
        </View>

        {scan && (
          <QRCodeScanner
            cameraStyl={{height: hp(120)}}
            reactivate={true}
            showMarker={true}
            ref={scanner}
            onRead={onSuccess}
            bottomContent={
              <View
                style={{
                  paddingTop: hp(8),
                  flexDirection: 'row',
                  marginTop: hp(8),
                }}></View>
            }
          />
        )}
      </BottomSheet>
      <ScrollView>
        <View style={styles.botContainer}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ficon
              type="light"
              name="bars-progress"
              size={hp(3.5)}
              color="#4D69DC"
            />

            <Text style={[styles.serviceSection]}>3.7 Years</Text>

            <Text style={[styles.bootContText2]}>Service Length</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: hp(2),
            }}>
            <Ficon
              type="light"
              name="chart-area"
              size={hp(3.5)}
              color="#4D69DC"
            />

            <Text style={[styles.serviceSection]}>Regular</Text>
            <Text style={[styles.bootContText2]}>Status</Text>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ficon
              type="light"
              containerStyle={styles.iconStyle}
              name="calendar-days"
              size={hp(3.5)}
              color="#4D69DC"
            />
            {/* <Svg width="50" height="30" viewBox="0 0 50 50">
      <Path d="M10,10 L40,40" fill="none" stroke="black" />
    </Svg> */}

            <Text style={styles.serviceSection}>08:59:05</Text>
            <Text style={[styles.bootContText2]}>Attendance</Text>
          </View>
        </View>
        <Card />
        <View>
          <Calinder />
        </View>
        <View style={{marginHorizontal: hp(2.2), marginTop: hp(2)}}>
          <Text style={styles.clText1}>W.F.H</Text>
        </View>
        <View
          style={{
            marginHorizontal: hp(2),
            borderRadius: hp(2),
            height: hp(12),
            backgroundColor: '#FFFFFF',
            marginBottom: hp(5),
            shadowColor: '#000',
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 4,
          }}>
          <View
            style={{
              height: hp(10),
              marginHorizontal: hp(2),
              flexDirection: 'row',
              marginVertical: hp(3.7),
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Wfh')}
              style={{
                borderRadius: hp(50),
                width: wp(38),
                height: hp(4.5),
                borderWidth: 1,
                borderColor: '#1C37A4',
                backgroundColor: '#1C37A4',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.viewClinderText}>Request W.F.H</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('WorkFromHome')}
              style={{
                width: wp(38),
                justifyContent: 'center',
                alignItems: 'center',
                height: hp(4.5),
                borderRadius: hp(50),
                borderWidth: 1,
                borderColor: '#1C37A4',
                backgroundColor: '#fff',
                // marginTop: hp(4),
              }}>
              <Text style={styles.clbtnStyle}>Mark Attendance</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          backgroundColor: '#fff',
          position: 'relative',
          bottom: hp(0),
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
            style={{flex: 0.2, alignItems: 'center'}}>
            <Menu name="home" size={hp(3)} color="#1C37A4" style={{}} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Index')}
            style={{flex: 0.2, paddingTop: hp(0.5), alignItems: 'center'}}>
            <Ficon
              type="light"
              name="book-bookmark"
              size={hp(3)}
              color="#979797"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleQrcode}
            style={{
              flex: 0.2,
              alignItems: 'center',
            }}>
            <View
              style={{
                height: hp('6'),
                alignItems: 'center',
                width: wp(12),
                borderWidth: hp(0.5),
                borderColor: 'gray',
                borderRadius: hp(50),
                backgroundColor: 'black',
                justifyContent: 'center',
              }}>
              <Ficon style={{}} name="qrcode" size={hp(4)} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 0.2, alignItems: 'center'}}
            onPress={() => props.navigation.navigate('Scanner')}>
            <Ficon
              type="light"
              name="user-tag"
              size={hp(3.5)}
              color="#979797"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={{flex: 0.2, alignItems: 'center', paddingTop: hp(0)}}>
            <Ficon type="light" name="user-tie" size={hp(3)} color="#979797" />
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

  textstyle: {
    color: '#fff',
    fontSize: hp(2),
    marginTop: hp(0.5),
  },
  headerRow: {
    justifyContent: 'space-between',
  },
  botContainer: {
    flex: 1,
    height: hp(7),
    marginTop: hp(3),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  zetext: {
    color: '#fff',
    fontSize: fontSize.small,
    fontWeight: '100',
    fontFamily: fontFamily.ceraLight,
  },
  bootContText: {
    fontSize: '0.5rem',
    fontWeight: '900',
    fontFamily: fontFamily.ceraLight,
    paddingHorizontal: hp(3),
    color: '#979797',
  },
  bootContText2: {
    fontSize: '0.5rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    color: '#979797',
    textTransform: 'uppercase',
    paddingTop: hp(0.2),
  },
  serviceSection: {
    fontSize: '0.7rem',
    fontWeight: '700',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    paddingHorizontal: hp(2),
    color: '#353535',
    paddingTop: hp(0.3),
  },

  zetext1: {
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '100',
    fontFamily: fontFamily.ceraLight,
  },

  ztitle: {
    color: '#fff',
    fontSize: hp(1.5),
    fontWeight: '600',
    marginTop: hp(1),
    fontFamily: fontFamily.ceraLight,
  },
  textInputCustomStyle: {
    fontSize: hp('1.65'),
    height: hp('6'),
    letterSpacing: -0.05,
    paddingLeft: wp('3'),
    color: colors.loginIconColor,
  },
  iconStyle: {
    fontSize: '1.5625rem',
    fontWeight: 300,
  },
  clText1: {
    fontSize: '0.7rem',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBold,
    paddingBottom: hp(0.5),
    color: '#646464',
    fontStyle: 'normal',
  },
  clbtnText: {
    color: '#fff',
    marginHorizontal: hp(3),
    marginVertical: hp(1),
  },
  clbtnStyle: {
    fontSize: '0.5rem',
    color: '#061D7A',
    paddingHorizontal: hp(3.5),
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
  },
  leaveSectionText: {
    fontSize: '0.7rem',
    color: '#353535',
    marginTop: hp(1),
    fontWeight: '700',
    fontFamily: fontFamily.ceraBold,
    fontStyle: 'normal',
  },
  viewClinderText: {
    color: '#fff',
    fontFamily: fontFamily.ceraMedium,
    paddingHorizontal: hp(3.5),
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: '0.55rem',
  },
});

export default HomeScreen;

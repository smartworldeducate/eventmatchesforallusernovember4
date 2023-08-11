import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import EStyleSheet from 'react-native-extended-stylesheet';
import Ficon from 'react-native-fontawesome-pro';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontFamily from '../Styles/fontFamily';
const WorkFromHome = props => {
  const [timeState, setTimeState] = useState(true);
  const [outState, setOutState] = useState(false);
  const timeinHandler = () => {
    setTimeState(true);
    setOutState(false);
  };
  const timeiOutHandler = () => {
    setOutState(true);
    setTimeState(false);
  };
  return (
    <>
      <View>
        <MainHeader
          text={'Work From Home'}
          iconName={'arrow-left'}
          onpressBtn={() => props.navigation.goBack()}
        />
        {timeState == true && <></>}
      </View>
      {timeState == true && (
        <>
          <View
            style={{
              marginTop: hp(7),
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: hp(1.5),
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.time1}>09:41</Text>
              <Text style={styles.timetext}>Thursday, June 22</Text>
            </View>
          </View>
          <View
            style={{
              height: hp(20),
              marginTop: hp(10),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: wp(56), height: hp(28)}}
              source={{uri: 'timein'}}
              resizeMode="contain"
            />
          </View>
        </>
      )}
      {outState == true && (
        <>
          <View
            style={{
              marginTop: hp(7),
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: hp(1.5),
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.time1}>09:41</Text>
              <Text style={styles.timetext}>Thursday, June 22</Text>
            </View>
          </View>
          <View
            style={{
              height: hp(20),
              marginTop: hp(10),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: wp(56), height: hp(28)}}
              source={{uri: 'outimg'}}
              resizeMode="contain"
            />
          </View>
        </>
      )}
      <View style={styles.botContainer}>
        <TouchableOpacity
          onPress={timeinHandler}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: wp(8), height: hp(4)}}
            source={{uri: 'timeione'}}
            resizeMode="contain"
          />
          <Text style={[styles.serviceSection]}>09:10:12</Text>

          <Text style={[styles.bootContText2]}>TIME IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={timeiOutHandler}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: hp(2),
          }}>
          <Image
            style={{width: wp(8), height: hp(4)}}
            source={{uri: 'timeout'}}
            resizeMode="contain"
          />

          <Text style={[styles.serviceSection]}>--:--:--</Text>
          <Text style={[styles.bootContText2]}>TIME out</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: wp(8), height: hp(4)}}
            source={{uri: 'chkimg'}}
            resizeMode="contain"
          />

          <Text style={styles.serviceSection}>--:--:--</Text>
          <Text style={[styles.bootContText2]}>Working hr’s</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default WorkFromHome;

const styles = EStyleSheet.create({
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
  botContainer: {
    flex: 1,
    height: hp(7),
    marginTop: hp(-3),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  zetext: {
    color: '#fff',
    // fontSize: fontSize.small,
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
  },
  iconStyle: {
    fontSize: '1.5625rem',
    fontWeight: 300,
  },
  time1: {
    fontSize: hp(5),
    color: '#363636',
    fontFamily: fontFamily.ceraLight,
    fontSize: '2.5rem',
    fontWeight: '300',
  },
  timetext: {
    fontSize: hp(2.5),
    color: '#363636',
    fontFamily: fontFamily.ceraLight,
    fontSize: '1rem',
    fontWeight: '300',
  },
});

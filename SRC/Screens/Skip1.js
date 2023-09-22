import React, {useEffect, useRef, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import LottieView from 'lottie-react-native';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Text,
  Switch,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../Components/Button/Button';
import TextInputCustom from '../Components/TextInput/TextInput';
import colors from '../Styles/colors';
import {
  useLinkProps,
  useNavigation,
  CommonActions,
} from '@react-navigation/native';
import fontSize from '../Styles/fontSize';
import fontFamily from '../Styles/fontFamily';
const Skip1 = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title1: 'Welcome',
      title2: 'to BEAMS!',
      disc: 'Were so excited to have you on board.',
      image: 'appbg',
    },
    {
      id: 1,
      title1: 'We',
      title2: 'Redesigned',
      disc: 'The app to add new features that our users have been requesting',
      image: 'appbg',
    },
    {
      id: 1,
      title1: 'Explore',
      title2: ' the app',
      disc: 'Take some time to explore the app and learn how it works.',
      image: 'appbg',
    },
  ]);
  const [initVal, setInitVal] = useState(0);

  const swiperRef = useRef(null);

  const navigation = useNavigation();
  const handleNavigate = (routeName, clearStack, params) => {
    navigation.navigate(routeName, params);
    if (clearStack) {
      console.log('Clear');
    }
  };
  const handleSkip = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1);
    }
  };

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 20;

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
    <View style={{flex: 1}}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
        ref={swiperRef}>
        <View style={styles.slide1}>
          <ImageBackground
            source={{uri: 'appbg'}}
            style={{flex: 1}}
            resizeMode={'cover'}>
            <KeyboardAvoidingView
              behavior="position"
              keyboardVerticalOffset={keyboardVerticalOffset}>
              <View
                style={{
                  width: wp(100),
                  flexDirection: 'row',
                  marginTop: hp(5),
                }}>
                <View style={{width: wp(50)}}></View>
                <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPressLogin}
                  style={{width: wp(50), marginLeft: hp(15)}}>
                  <Text style={{fontSize: hp(2), color: 'black'}}>SKIP</Text>
                </TouchableOpacity>
              </View>
              <View style={{width: wp(100), marginTop: hp(12)}}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: hp(5),
                  }}>
                  <Text style={styles.textSkip}>
                    Welcome to
                    <Text style={styles.skipbText}> BEAMS!</Text>
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <LottieView
                    style={{
                      width: wp(80),
                      height: hp(40),
                    }}
                    source={require('../assets/animation_lm0fv0a2.json')}
                    autoPlay
                  />
                </View>
                <View
                  style={{
                    marginTop: hp(5),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.textSkip}>
                    We're so excited to have you on board.
                  </Text>
                </View>
              </View>
            </KeyboardAvoidingView>
          </ImageBackground>
        </View>
        <View style={styles.slide2}>
          <ImageBackground
            source={{uri: 'appbg'}}
            style={{flex: 1}}
            resizeMode={'cover'}>
            <KeyboardAvoidingView
              behavior="position"
              keyboardVerticalOffset={keyboardVerticalOffset}>
              <View
                style={{
                  width: wp(100),
                  flexDirection: 'row',
                  marginTop: hp(5),
                }}>
                <View style={{width: wp(50)}}></View>
                <TouchableOpacity
                activeOpacity={0.8}
                  onPress={handleSkip}
                  style={{width: wp(50), marginLeft: hp(15)}}>
                  <Text style={{fontSize: hp(2), color: 'black'}}>SKIP</Text>
                </TouchableOpacity>
              </View>
              <View style={{width: wp(100), marginTop: hp(12)}}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: hp(5),
                  }}>
                  <Text style={styles.textSkip}>
                    We
                    <Text style={styles.skipbText}> Redesigned!</Text>
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <LottieView
                    style={{
                      width: wp(80),
                      height: hp(30),
                      // backgroundColor: '#eee',
                    }}
                    source={require('../assets/animation_lm0h8lv3.json')}
                    autoPlay
                  />
                </View>
                <View
                  style={{
                    marginLeft: hp(3.5),
                    marginTop: hp(5),
                    width: wp(90),
                    alignItems: 'center',
                  }}>
                  <Text style={styles.textSkip}>
                    The app to add new features that our users have been
                    requesting
                  </Text>
                </View>
              </View>
            </KeyboardAvoidingView>
          </ImageBackground>
        </View>
        <View style={styles.slide3}>
          <ImageBackground
            source={{uri: 'appbg'}}
            style={{flex: 1}}
            resizeMode={'cover'}>
            <KeyboardAvoidingView
              behavior="position"
              keyboardVerticalOffset={keyboardVerticalOffset}>
              <View
                style={{
                  width: wp(100),
                  flexDirection: 'row',
                  marginTop: hp(5),
                }}>
                <View style={{width: wp(50)}}></View>
                <TouchableOpacity
                activeOpacity={1}
                  onPress={onPressLogin}
                  style={{width: wp(50), marginLeft: hp(15)}}>
                  <Text style={{fontSize: hp(2), color: 'black'}}>SKIP</Text>
                </TouchableOpacity>
              </View>
              <View style={{width: wp(100), marginTop: hp(12)}}>
                <View
                  style={{
                    marginLeft: hp(16),
                    width: wp(100),
                    marginBottom: hp(5),
                  }}>
                  <Text style={styles.textSkip}>
                    Explore
                    <Text style={styles.skipbText}> the app!</Text>
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <LottieView
                    style={{
                      width: wp(80),
                      height: hp(30),
                      // backgroundColor: '#fff',
                    }}
                    source={require('../assets/animation_lm0hbmk9.json')}
                    autoPlay
                  />
                </View>
                <View
                  style={{
                    marginLeft: hp(3.5),
                    marginTop: hp(5),
                    width: wp(90),
                  }}>
                  <Text style={styles.textSkip}>
                    Take some time to explore the app and learn how it works.
                  </Text>
                </View>
              </View>
            </KeyboardAvoidingView>
          </ImageBackground>
        </View>
      </Swiper>
    </View>
  );
};

const styles = EStyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSkip: {
    color: '#626161',
    fontSize: '0.7rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
  },
  skipbText: {
    color: '#061D7A',
    fontSize: '0.7rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    marginLeft: hp(1),
  },
});

export default Skip1;

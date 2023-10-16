import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {loginUserHandle} from '../features/register/googleLoginSlice';
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
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
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
import {StackActions} from '@react-navigation/native';
const Login = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleNavigate = (routeName, clearStack, params) => {
    navigation.navigate(routeName, params);
    if (clearStack) {
      console.log('Clear');
    }
  };
  const [employeeId, setEmployeeId] = useState();
  const [employeePassword, setEmployeePassword] = useState();
  const [loaduiung, setLoding] = useState(false);
  const [visible, setVisible] = useState(false);
  const [animodal, setAnimodal] = useState(false);
  const [animation, setAnimation] = useState(true);
  const [data, setData] = useState(null);

  //set data in local storage///

  async function saveData(value) {
    const jsonString = JSON.stringify(value);
    try {
      await AsyncStorage.setItem("loginData", jsonString);
      console.log('Data saved successfully.');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }
  const handleLogin = async () => {
    if (employeeId && employeePassword !== '') {
      var login_data = await dispatch(
        loginUserHandle({employeeId: employeeId, password: employeePassword}),
      );
      const loginObj= Object.assign({}, ...login_data.payload)
      saveData(loginObj)
     console.log('login data on login screen',loginObj);
      setData(loginObj);
      setLoding(true);
      if (login_data !== '') {
        // console.log("login page data",login_data)
        props.navigation.dispatch(StackActions.replace('HomeScreen'));
        // setLoding(false);
      } else {
        ToastAndroid.showWithGravity(
          'something went wrong',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      }
    } else {
      ToastAndroid.showWithGravity(
        'enter valid username and password',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
  };

  //249159142983-3r1307q40tb9de7qctsm4ckk244etg9h.apps.googleusercontent.com
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '941654580803-btnt6no51u8js15k4aorf8gqiu9vq2jf.apps.googleusercontent.com',
    });
  }, []);
  const signinWithGoogle = async () => {
    // setAnimodal(true)
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo?.user);
      handleNavigate('HomeScreen');
      const {id, name, email, givenName, photo} = userInfo?.user;
      await storeData({google_id: id, photo: photo});
      const glData = await dispatch(loginUser({email: email, google_id: id}));
      // console.log("google data",glData.payload.data)
      // glData.payload.data ? props.navigation.navigate('Home') : props.navigation.navigate('Register')
      // setAnimodal(false)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
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
    handleNavigate('HomeScreen');
  };

  const [showPassword, setShowPassword] = useState(true);
  const [eyeType, setEyeType] = useState(false);
  const onPressShowPassword = () => {
    setShowPassword(!showPassword);
    setEyeType(!eyeType);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          Platform.OS === 'android' ? colors.white : colors.white,
      }}>
      <StatusBar barStyle={'default'} backgroundColor={colors.loginIconColor} />
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
              <View style={{}}>
                <Text>please wait</Text>
              </View>
            </View>
          </Modal>
        </View>
      )}
      <ImageBackground
        source={{uri: 'appbg'}}
        style={{flex: 1}}
        resizeMode={'cover'}>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}>
          <View style={{marginHorizontal: wp('5')}}>
            <View
              style={{
                marginTop: hp('8'),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: 'logo'}}
                style={{height: hp('25'), width: wp('50')}}
                resizeMode={'contain'}
              />
            </View>

            <View style={{marginTop: hp('3'), marginBottom: hp('2')}}>
              <Text
                style={{fontSize: hp('2.75'), color: colors.loginTextColor}}>
                Login
              </Text>
            </View>

            <View style={styles.textInputView}>
              <TextInputCustom
                value={employeeId}
                onChangeText={onChangeEmpId}
                keyboardType={'numeric'}
                maxLength={11}
                returnKeyType={'done'}
                iconName={'user'}
                placeholder={'Employee ID'}
                placeholderColor={colors.loginTextColor}
                // iconColor={colors.loginIconColor}
                style={styles.textInputCustomStyle}
              />
            </View>

            <View style={styles.textInputView}>
              <TextInputCustom
                value={employeePassword}
                onChangeText={onChangeEmpPassword}
                keyboardType={'default'}
                maxLength={11}
                returnKeyType={'done'}
                iconName={'key'}
                iconRight={eyeType == true ? 'eye' : 'eye-slash'}
                placeholder={'Password'}
                placeholderColor={colors.loginTextColor}
                secureTextEntry={showPassword}
                iconColor={colors.loginIconColor}
                onPressIcon={onPressShowPassword}
                style={styles.textInputCustomStyle}
              />
            </View>
            <View
              style={{
                marginTop: hp('3'),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleLogin}
                style={{
                  height: hp('7'),
                  width: wp('90'),
                  backgroundColor: colors.whiteColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: wp(10),
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 12},
                  shadowOpacity: 0.58,
                  shadowRadius: 16,
                  elevation: 7,
                }}>
                <Text style={{color: '#000'}}>LOGIN</Text>
              </TouchableOpacity>
            </View>

            <Text
              style={{
                textAlign: 'center',
                fontSize: hp('2'),
                marginVertical: hp('2'),
                color: colors.greyColor,
                fontStyle: 'normal',
                fontWeight: '500',
              }}>
              OR
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.loginWithGoogle}
              onPress={() =>
                signinWithGoogle()
                  .then(res => {
                    console.log('respo:', res);
                  })
                  .catch(error => {
                    console.log(error);
                  })
              }>
              <View style={{flex: 0.15, backgroundColor: 'white'}}></View>

              <View
                style={{
                  flex: 0.25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={{uri: 'google'}}
                  style={{
                    height: hp('3.75'),
                    width: wp('7'),
                  }}
                  resizeMode={'contain'}
                />
              </View>

              <View style={{flex: 0.5}}>
                <Text style={{color: colors.loginTextColor, fontSize: hp('2')}}>
                  {'Login with Google'}
                </Text>
              </View>

              <View style={{flex: 0.1, backgroundColor: 'pink'}}></View>
            </TouchableOpacity>
          </View>
          <View style={{justifyContent: 'center', marginTop: hp(5)}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleNavigate('ForgotPassword')}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{color: colors.loginTextColor, fontSize: hp('1.75')}}>
                Reset Password?
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInputView: {
    marginTop: hp('2'),
    justifyContent: 'center',
    backgroundColor: colors.whiteColor,
    alignItems: 'center',
    flexDirection: 'row',
    height: hp('7'),
    borderRadius: wp('10'),
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
  loginWithGoogle: {
    justifyContent: 'center',
    backgroundColor: colors.whiteColor,
    alignItems: 'center',
    flexDirection: 'row',
    height: hp('7'),

    borderRadius: wp('10'),
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
});

export default Login;

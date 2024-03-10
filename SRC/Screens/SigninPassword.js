import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {verifyPasswordHandler} from '../features/login/passwordSlice';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ficon from 'react-native-fontawesome-pro';
import React, {useState} from 'react';
import ViewInput from '../Components/Headers/ViewInput';
import fontFamily from '../Styles/fontFamily';
import colors from '../Styles/colors';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions} from '@react-navigation/native';
const SigninPassword = props => {
  const dispatch = useDispatch();
  const {email} = props.route.params;
  console.log('param data', email);
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(true);
  const [eyeType, setEyeType] = useState(false);
  const onPressShowPassword = () => {
    console.log("dasjkas",showPassword)
    setShowPassword(!showPassword);
    setEyeType(!eyeType);
  };
  const onPressHandler = (fieldName, fieldValue) => {
    setPassword(fieldValue);
  };
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
    if (password) {
      const verifyUser = await dispatch(
        verifyPasswordHandler({user_email: email, user_password: password}),
      );
      if (verifyUser?.payload?.response?.success === 1) {
        saveData(verifyUser?.payload?.response);
        props.navigation.navigate('Admins');
      } else {
        ToastAndroid.showWithGravity(
          verifyUser?.payload?.response?.message,
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      }
    } else {
      ToastAndroid.showWithGravity(
        'Password is required',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar
        barStyle={'default'}
        translucent
        backgroundColor="transparent"
      />
      <View style={{flex: 1}}>
        <View style={{height: hp(14), marginTop: hp(-3)}}>
          <Image
            source={{uri: 'vectortop'}}
            style={{width: '100%', height: '100%'}}
            resizeMode={'contain'}
          />
        </View>
        <View style={{flex: 0.5, marginTop: hp(8)}}>
          <View
            style={{
              flex: 0.5,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: hp(-6),
            }}>
            <Image
              source={{uri: 'eventmaches'}}
              style={{width: wp(46), height: hp(23)}}
              resizeMode={'contain'}
            />
          </View>
          <View style={{marginHorizontal: hp(3.5), marginTop: hp(10)}}>
            <View>
              <Text
                style={{
                  color: '#cdcdcd',
                  fontWeight: '400',
                  fontSize: hp(2.5),
                  fontFamily: fontFamily.robotoMedium,
                }}>
                Sign in as
              </Text>
            </View>
          </View>
          <View style={{marginHorizontal: hp(3.5), marginTop: hp(0.3)}}>
            <Text
              style={{
                color: colors.blackColor,
                fontWeight: '600',
                fontSize: hp(2.5),
              }}>
              {email}
            </Text>
          </View>

          <View style={{flex: 0.5, marginTop: hp(8)}}>
            <ViewInput
              name={'Enter Password'}
              value={password}
              onPress={value => onPressHandler('Password', value)}
              iconRight={eyeType == true ? 'eye' : 'eye-slash'}
              maxLength={25}
              onPressShowPassword={onPressShowPassword}
              secureTextEntry={showPassword}
            />
          </View>
        </View>
        <View
          style={{
            flex: 0.2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: hp(3.5),
            marginTop: hp(10),
          }}>
          <View></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{paddingRight: 10}}>
              <Text
                style={{
                  color: '#262626ed',
                  fontSize: hp(2.5),
                  fontWeight: '600',
                  fontFamily: fontFamily.robotoBold,
                }}>
                Continue
              </Text>
            </View>
            <TouchableOpacity
              onPress={handleLogin}
              style={{
                width: wp(13.5),
                height: hp(4.5),
                backgroundColor: '#2CC2E4',
                borderRadius: hp(1.5),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ficon
                type="light"
                name="arrow-right"
                color="#FFFFFF"
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 0.3, marginLeft: hp(-25.5), marginTop: hp(4)}}>
          <Image
            source={{uri: 'vectorbottom'}}
            style={{height: hp(32)}}
            resizeMode={'contain'}
          />
        </View>
      </View>
    </View>
  );
};

export default SigninPassword;

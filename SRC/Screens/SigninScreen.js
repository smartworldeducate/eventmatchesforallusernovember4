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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {verifyEmailHandler} from '../features/login/emailSlice'
import Ficon from 'react-native-fontawesome-pro';
import React, {useState} from 'react';
import ViewInput from '../Components/Headers/ViewInput';
import fontFamily from '../Styles/fontFamily';
import { useDispatch } from 'react-redux';
import colors from '../Styles/colors';
import validator from 'validator';
const SigninScreen = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [data,setData]=useState('');
  const onPressHandler = (fieldName, fieldValue) => {
    setEmail(fieldValue);
  };
  console.log(data);
  const handleLogin = async () => {
    if (validator.isEmail(email)) {
      const verifyEmail = await dispatch(verifyEmailHandler({"user_email":email}));
      console.log("data==",verifyEmail?.payload?.response?.success);
      if(verifyEmail?.payload?.response?.success===1){
        props.navigation.navigate("SigninPassword",{email});
       }else{
        props.navigation.navigate("RegisterScreen",{email});
        ToastAndroid.showWithGravity(
          verifyEmail?.payload?.response?.message,
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      }
    } else {
      ToastAndroid.showWithGravity(
        'Enter Valid Email is required',
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

          <View style={{flex: 0.3, marginTop: hp(8)}}>
            <ViewInput
              name={'Email Address'}
              value={email}
              onPress={value => onPressHandler('Email Address', value)}
            />
          </View>
        </View>
      
         <View
          style={{
            flex: 0.2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: hp(3.5),
            // backgroundColor:'red',

            // marginTop: hp(10),
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

export default SigninScreen;

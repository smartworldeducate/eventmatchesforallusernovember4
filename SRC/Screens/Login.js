import React, {useEffect, useState} from 'react';
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
const Login = () => {
  const [employeeId, setEmployeeId] = useState();
  const [employeePassword, setEmployeePassword] = useState();

  const navigation = useNavigation();
  const handleNavigate = (routeName, clearStack, params) => {
    navigation.navigate(routeName, params);
    if (clearStack) {
      console.log('Clear');
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

  const onPressLogin=()=>{
    handleNavigate("Home");
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          Platform.OS === 'android' ? colors.white : colors.white,
      }}>
      <StatusBar barStyle={'default'} backgroundColor={colors.loginIconColor} />
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
                iconColor={colors.loginIconColor}
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
                placeholder={'Password'}
                placeholderColor={colors.loginTextColor}
                iconColor={colors.loginIconColor}
                style={styles.textInputCustomStyle}
              />
            </View>

            <View style={{flexDirection: 'row', marginTop: hp('1')}}>
              <View
                style={{
                  flex: 0.15,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Switch
                  trackColor={{false: '#767577', true: colors.loginIconColor}}
                  thumbColor={isEnabled ? 'white' : 'silver'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  // style={{transform: [{scaleX: 1.1}, {scaleY: 1.1}]}}
                />
              </View>
              <View style={{flex: 0.45, justifyContent: 'center'}}>
                <Text
                  style={{color: colors.loginTextColor, fontSize: hp('1.75')}}>
                  Remember Me
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => handleNavigate('ForgotPassword')}
                style={{
                  flex: 0.4,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Text
                  style={{color: colors.loginTextColor, fontSize: hp('1.75')}}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: hp('3'),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Button
              onPress={onPressLogin}
                height={hp('7')}
                width={wp('90')}
                text="LOGIN"
                bgColor={colors.whiteColor}
                textColor={colors.loginIconColor}
                textSize={hp('2')}
                borderRadius={wp('10')}
                borderColor={'#BABABA33'}
                borderWidth={wp('0.3')}
                shadowColor={'#000'}
                shadowOffset={{width: 0, height: 12}}
                shadowOpacity={0.58}
                shadowRadius={16}
                elevation={7}
              />
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

            <TouchableOpacity style={styles.loginWithGoogle}>
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
});

export default Login;

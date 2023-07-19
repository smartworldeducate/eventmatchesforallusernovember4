import React, { useEffect, useState } from 'react';
// import Left from 'react-native-vector-icons/AntDesign';

import {
  ScrollView,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
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

const Home = () => {
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
    handleNavigate("Login");
  }

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

      <MainHeader
        // onPressIcon={() => navigation.openDrawer()}
        iconName={'arrowleft'}
        //   iconColor1={colors.loginIconColor}
        text={'Change Password'}
      //   iconName2={'bell-o'}
      //   iconColor2={colors.loginIconColor}

      />
      <View style={{ width: wp(90), marginHorizontal: hp(2.5) ,marginTop:hp(2)}}>
        <View style={styles.textInputView}>
          <TextInputCustom
            value={employeeId}
            onChangeText={onChangeEmpId}
            keyboardType={'numeric'}
            maxLength={11}
            returnKeyType={'done'}
            iconName={'user'}
            placeholder={'Current Password'}
            placeholderColor={colors.loginTextColor}
            iconColor={colors.loginIconColor}
            style={styles.textInputCustomStyle}
          />
        </View>
      </View>
      <View style={{ width: wp(90), marginHorizontal: hp(2.5) }}>
        <View style={styles.textInputView}>
          <TextInputCustom
            value={employeeId}
            onChangeText={onChangeEmpId}
            keyboardType={'numeric'}
            maxLength={11}
            returnKeyType={'done'}
            iconName={'user'}
            placeholder={'New Password'}
            placeholderColor={colors.loginTextColor}
            iconColor={colors.loginIconColor}
            style={styles.textInputCustomStyle}
          />
        </View>
      </View>
      <View style={{ width: wp(90), marginHorizontal: hp(2.5) }}>
        <View style={styles.textInputView}>
          <TextInputCustom
            value={employeeId}
            onChangeText={onChangeEmpId}
            keyboardType={'numeric'}
            maxLength={11}
            returnKeyType={'done'}
            iconName={'user'}
            placeholder={'Confirm Password'}
            placeholderColor={colors.loginTextColor}
            iconColor={colors.loginIconColor}
            style={styles.textInputCustomStyle}
          />
        </View>
      </View>
       <View
                  style={{
                    marginTop: hp('45'),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Button
                    onPress={onPressLogin}
                    height={hp('7')}
                    width={wp('90')}
                    text="SUBMIT"
                    bgColor={colors.btnColore}
                    textColor={colors.whiteColor}
                    textSize={hp('2')}
                    borderRadius={wp('10')}
                    borderColor={'#BABABA33'}
                    borderWidth={wp('0.3')}
                    shadowColor={'#000'}
                    shadowOffset={{ width: 0, height: 12 }}
                    shadowOpacity={0.58}
                    shadowRadius={16}
                    elevation={7}
                  />
                </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: colors.white,
        }}
      // refreshControl={
      //   <RefreshControl
      //     refreshing={refreshing}
      //     onRefresh={onRefresh}
      //     colors={[colors.loginIconColor, "green"]}
      //     progressBackgroundColor={colors.lightSilver}
      //     // tintColor={colors.whiteColor}
      //   />
      // }
      >
        {/* <View style={{marginHorizontal: wp('5')}}>
          <HomeList
            iconName={'atom'}
            text1={'Attendance'}
            text2={'Leaves'}
            text3={'25 May, 2023'}
            text4={'08:53:05'}
          />
          <HomeList2
            iconName={'asterisk'}
            text1={'Financial Info'}
            text2={'Provident Fund'}
            iconName2={'arrow-right'}
          />
          <HomeList2
            iconName={'book-open'}
            text1={'My Desk'}
            text2={'Service Desk'}
            iconName2={'arrow-right'}
          />
          <HomeList2
            iconName={'bug'}
            text1={'BSS Manuals'}
            text2={'Visit Link'}
            iconName2={'arrow-right'}
          />
          <HomeList2
            iconName={'cannabis'}
            text1={'Policies & SOPs'}
            text2={'Company Policies'}
            iconName2={'arrow-right'}
          />
          <HomeList2
            iconName={'clinic-medical'}
            text1={'Appraisal'}
            text2={'Star 2022'}
            iconName2={'arrow-right'}
          />
        </View> */}

        <View style={{ marginBottom: hp('5') }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  textView:{
    marginTop:hp(2)
  }
});

export default Home;

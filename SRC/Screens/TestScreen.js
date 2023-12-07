import React, {useEffect, useState} from 'react';
import Icon from 'react-native-fontawesome-pro';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  UIManager,
} from 'react-native';
import {AccordionList} from 'react-native-accordion-list-view';
import MainHeader from '../Components/Headers/MainHeader';
import EStyleSheet from 'react-native-extended-stylesheet';
import fontFamily from '../Styles/fontFamily';
import { useSelector } from 'react-redux';

const TestScreen = () => {
  const profileData = useSelector((state) => state.profileState)
  const seprateData = Object.assign({}, ...profileData?.user);
  const {EMPLOYEE_NAME,COMPANY_ID,DESIGNATION,DEPARTMENT,CATEGORY,DEPT_HEAD_ID,EMP_STATUS,HIRING,SERVICE_LENGTH,BASIC_SAL,GROSS_SAL,ALLOWANCES,TAKE_HOME,ADRESS,PHONE_NO,NIC_NUMBER,MOB_PHONE,PASSPORT_NUM,QUALIFICATION,EOBI_NUMBER,DEPARTMENT_ID,E_MAIL,BRANCH_ID,COMPANY,BRANCH,NATIONALITY,MARITAL_STATUS}=seprateData
  console.log("pf data==0",seprateData)
  const [active,setActive]=useState(false)
  const data = [
    {
      id:1,
      iconName: 'user',
      textName: 'Personal Information',
      fatherName: EMPLOYEE_NAME,
      gender: 'Male',
      religin: 'Islam',
      date: '08 oct 1991',
      cnic: '31101-8356254-5',
    },
    {
      id:2,
      iconName: 'user-gear',
      textName: 'Service Information',
      fatherName: 'Abdual Hafeez',
    },
    {
      id:3,
      iconName: 'money-bill-1-wave',
      textName: 'Financial Information',
      fatherName: 'Abdual Hafeez',
    },
    {
      id:4,
      iconName: 'clipboard-check',
      textName: 'Movement Log',
      key:'Father Name',
      fatherName: 'Abdual Hafeez',
    },
    {
      id:5,
      iconName: 'child',
      textName: 'Children in Beaconhouse',
      fatherName: 'Abdual Hafeez',
    },
    
  ];
  
  // useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     if (UIManager.setLayoutAnimationEnabledExperimental) {
  //       UIManager.setLayoutAnimationEnabledExperimental(true);
  //     }
  //   }
  // },[active]);
  return (
    <SafeAreaView>
      <View>
        <MainHeader
          text={'TestScreen'}
          iconName={'arrow-left'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <View style={{marginHorizontal:hp(2.5)}}>
        <AccordionList
          data={data}
          customTitle={item => <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection:'row',paddingVertical:hp(1.5),flex:0.50,}}>
              <View style={{justifyContent:'center',alignItems:'center',paddingLeft: hp(1)}}>
                <Icon
                  type="light"
                  name={item.iconName}
                  color="#979797"
                  style={styles.iconSty}
                />
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center',paddingHorizontal:hp(1.5)}}>
                <Text style={styles.smalltext}>{item.textName}</Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'flex-end',paddingRight:hp(1),flex:0.50,}}>
              <Icon
                type="light"
                name="chevron-right"
                size={hp(2)}
                color="gray"
                Size={hp(2)}
              />
            </View>
          </View>}
          customBody={item =>    <View
            style={{
              backgroundColor:'#FFF',
              overflow: 'hidden',
              borderRadius: hp(1),
            }}>
            
            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:hp(1.3),paddingVertical:hp(0.5)}}>
              <View>
                <Text style={styles.expandtext}>Father Name</Text>
              </View>
              <View>
                <Text style={styles.expandtext1}>{item.fatherName}</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:hp(1.3),paddingVertical:hp(0.5)}}>
              <View>
                <Text style={styles.expandtext}>Gender</Text>
              </View>
              <View>
                <Text style={styles.expandtext1}>thrt</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:hp(1.3),paddingVertical:hp(0.5)}}>
              <View>
                <Text style={styles.expandtext}>Religin</Text>
              </View>
              <View>
                <Text style={styles.expandtext1}>vvs</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:hp(1.3),paddingVertical:hp(0.5)}}>
              <View>
                <Text style={styles.expandtext}>Date of Birth</Text>
              </View>
              <View>
                <Text style={styles.expandtext1}>rthrt</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:hp(1.3),paddingVertical:hp(0.5)}}>
              <View>
                <Text style={styles.expandtext}>CNIC</Text>
              </View>
              <View>
                <Text style={styles.expandtext1}>rthtr</Text>
              </View>
            </View>
          </View>}
          animationDuration={400}
          expandMultiple={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default TestScreen;

const styles = EStyleSheet.create({
  smalltext: {
    fontWeight: '500',
    fontSize: '0.7rem',
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
    fontFamily: fontFamily.ceraBlack,
    fontSize: hp(2),
    color: '#A6ACAF',
    fontWeight: 100,
  },
  expandtext: {
    fontWeight: '500',
    fontSize: '0.7rem',
    fontFamily: fontFamily.ceraMedium,
    color: '#363636',
    fontStyle: 'normal',
  },
  expandtext1: {
    fontWeight: '100',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    color: '#363636',
    fontStyle: 'normal',
  },
});

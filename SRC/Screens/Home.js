import React, {useEffect, useState} from 'react';
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

const Home = () => {
  const navigation = useNavigation();
  const handleNavigate = (routeName, clearStack, params) => {
    navigation.navigate(routeName, params);
    if (clearStack) {
      console.log('Clear');
    }
  };

  // const [refreshing, setRefreshing] = useState(false);
  // const onRefresh = () => {
  //   setRefreshing(true);
  //   setRefreshing(false);
  // };

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
      
      <HeaderTop
        iconName1={'navicon'}
        iconColor1={colors.loginIconColor}
        text={'BEAMS'}
        iconName2={'bell-o'}
        iconColor2={colors.loginIconColor}
      />
      <View style={{marginTop: hp('-5')}}>
        <HeaderSecond
          timeInText={'Time In'}
          timeIn={'08:59:00'}
          empImg={'employee'}
          empName={'Zeeshan Abdul Hafeez'}
          empDesignation={'Senior Officer UX/UI Designer'}
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
        <View style={{marginHorizontal: wp('5')}}>
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
        </View>

        <View style={{marginBottom: hp('5')}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;

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
      onPressIcon={() => navigation.openDrawer()}
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

    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;

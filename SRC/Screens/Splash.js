import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
} from 'react-native';
import {
  useLinkProps,
  useNavigation,
  CommonActions,
} from '@react-navigation/native';
import {color} from '@rneui/base';
// import LoaderKit from 'react-native-loader-kit';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.dispatch(StackActions.replace('NextScreen'));
    }, 3000);
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Platform.OS === 'android' ? 'white' : 'white',
      }}>
      <StatusBar
        barStyle={'default'}
        translucent
        backgroundColor="transparent"
      />
      <View style={{flex: 0.3}}></View>
      <View style={{flex: 0.4}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{uri: 'splash'}}
            style={{width: '70%', height: '70%'}}
            resizeMode={'contain'}
          />
        </View>
      </View>
      <View style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
        {/* <LoaderKit
          style={{width: 50, height: 50}}
          name={'BallSpinFadeLoader'}
          size={60}
          color={'#2CC2E4'}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default Splash;


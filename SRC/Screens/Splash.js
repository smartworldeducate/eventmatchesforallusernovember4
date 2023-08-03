import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, ImageBackground, View, Text} from 'react-native';
import {
  useLinkProps,
  useNavigation,
  CommonActions,
} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  const handleNavigate = (routeName, clearStack, params) => {
    navigation.navigate(routeName, params);

    // if (clearStack) {
    //   navigation.dispatch(
    //     CommonActions.reset({
    //       index: 1,
    //       routes: [{name: 'Login'}],
    //     }),
    //   );
    //   console.log('Clear');
    // }
  };

  setTimeout(async () => {
    handleNavigate('Login', true);
  }, 3000);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          Platform.OS === 'android' ? "white": "white",
      }}>
      <StatusBar barStyle={'default'} translucent backgroundColor="transparent" />
      <ImageBackground
        source={{uri: 'splash'}}
        style={{flex: 1}}
        resizeMode={'cover'}></ImageBackground>
    </SafeAreaView>
  );
};

export default Splash;
const styles = StyleSheet.create({});

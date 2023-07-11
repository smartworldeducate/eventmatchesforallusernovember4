import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  ImageBackground,
  View,
  Text,
} from 'react-native';
import {
  useLinkProps,
  useNavigation,
  CommonActions,
} from '@react-navigation/native';
import colors from '../Styles/colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigate = (routeName, clearStack, params) => {
    navigation.navigate(routeName, params);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Platform.OS === 'android' ? 'white' : 'white',
      }}>
      <StatusBar
        barStyle={'default'}
        translucent
        backgroundColor={colors.loginIconColor}
      />
      <ImageBackground
        source={{uri: 'splash'}}
        style={{flex: 1}}
        resizeMode={'cover'}>
        <View style={{flex: 0.2, justifyContent: 'center', alignItems:"flex-end"}}>
          <Text style={{color: colors.drakGrey, marginRight:wp('5'), fontSize:hp('2.25'), fontStyle:"normal", fontWeight:"300"}}>SKIP</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default WelcomeScreen;

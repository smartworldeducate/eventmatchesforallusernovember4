import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions} from '@react-navigation/native';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  View,
  Text,
} from 'react-native';
import {
  useLinkProps,
  useNavigation,
  CommonActions,
} from '@react-navigation/native';

const Splash = props => {
  const [data, setData] = useState(null);
  const navigation = useNavigation();
  async function getData(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // console.log('Data retrieved successfully:', value);
        const parsedData = JSON.parse(value);
        setData(parsedData);

        // console.log('here is splash screen data', parsedData?.EMP_NAME);
        if (parsedData) {
          props.navigation.dispatch(StackActions.replace('HomeScreen'))
        }
        return parsedData;
      } else {
        props.navigation.dispatch(StackActions.replace('Skip1'));
        console.log('No data found for key:', key);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  }
  console.log(' bofore load fsdfsd spalsh ', typeof data);
  const handleNavigate = (routeName, clearStack, params) => {
    navigation.navigate(routeName, params);
  };

  useEffect(() => {
    getData('loginData');
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
      <ImageBackground
        source={{uri: 'splash'}}
        style={{flex: 1}}
        resizeMode={'cover'}></ImageBackground>
    </SafeAreaView>
  );
};

export default Splash;
const styles = StyleSheet.create({});

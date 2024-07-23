import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  ActivityIndicator,
  Alert
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RNPrint from 'react-native-print';
import MainHeader from '../Components/Headers/MainHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import fontFamily from '../Styles/fontFamily';
import colors from '../Styles/colors';
const Printbadge = props => {
  const dispatch = useDispatch();
  const getPrintBadgeData = useSelector(state => state.getPrintBadgeState);
//   console.log('getPrintBadgeData===', getPrintBadgeData?.user?.response);

  const pdfUrl =getPrintBadgeData?.user?.response?.url;
  const handlePrint = async () => {
    if (!pdfUrl) {
      Alert.alert('Error', 'No PDF URL available');
      return;
    }

    try {
      await RNPrint.print({filePath: pdfUrl});
    } catch (error) {
      console.error('error', error);
      Alert.alert('Error', 'Failed to print PDF');
    }
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'default'}
        translucent
        backgroundColor="transparent"
      />

      <View style={{flex: 0.1, zIndex: 1}}>
        <MainHeader
          text={'Printbadge'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>

      <View style={{flex: 0.9, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            flex: 0.2,
            width: hp(40),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={handlePrint}
            style={{
              height: hp(8),
              width: hp(30),
              borderWidth: 1,
              borderColor: '#cdcdcd',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: hp(1),
              backgroundColor: colors.lightBlue,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: hp(3),
                fontFamily: fontFamily.robotoMedium,
                fontWeight: '400',
              }}>
              Print
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Printbadge;

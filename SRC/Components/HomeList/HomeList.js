import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../Styles/colors';
import Icon from 'react-native-vector-icons//FontAwesome5';

const HomeList = ({iconName, text1, text2, text3, text4}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        marginTop: hp('5'),
        backgroundColor: colors.lightSilver,
        borderRadius: wp('5'),
        paddingVertical: hp('2.5'),
      }}>
      <View style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
        <Icon name={iconName} color={colors.loginIconColor} size={30} />
      </View>
      <View style={{flex: 0.45, justifyContent: 'center'}}>
        <Text
          style={{
            color: colors.loginIconColor,
            fontSize: hp('2'),
            fontWeight: 'bold',
          }}>
          {text1}
        </Text>
        <Text style={{color: colors.loginIconColor, fontSize: hp('1.75')}}>
          {text2}
        </Text>
      </View>

      <View
        style={{
          flex: 0.35,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <Text
          numberOfLines={1}
          ellipsizeMode={'tail'}
          style={{
            color: colors.loginIconColor,
            fontSize: hp('1.8'),
            fontWeight: 'bold',
            paddingRight: wp('5'),
          }}>
          {text3}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode={'tail'}
          style={{
            color: colors.loginIconColor,
            fontSize: hp('1.75'),
            paddingRight: wp('5'),
          }}>
          {text4}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default HomeList;

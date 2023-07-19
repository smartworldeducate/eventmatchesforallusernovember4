import {View, Text} from 'react-native';
import React from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Graph from '../Components/Graph';
const Financial = props => {
  return (
    <>
      <View>
        <MainHeader
          text={'Financials'}
          iconName={'arrowleft'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <View
        style={{
          width: wp(90),
          height: hp(7),
          marginHorizontal: hp(2.5),
          borderRadius: hp(1),
          backgroundColor: '#E7E7E7',
          marginTop: hp(2),
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: wp(37),
            height: hp(5.5),
            backgroundColor: '#fff',
            marginVertical: hp(0.7),
            borderRadius: hp(1),
            marginLeft: hp(1),
          }}>
          <Text
            style={{
              marginLeft: hp(5),
              fontSize: hp(1.8),
              color: '#363636',
              marginVertical: hp(1.6),
            }}>
            Salary Slip
          </Text>
        </View>
        <View
          style={{
            width: wp(37),
            height: hp(5.5),
            backgroundColor: '#fff',
            marginVertical: hp(0.7),
            borderRadius: hp(1),
            marginLeft: hp(5.6),
          }}>
          <Text
            style={{
              marginHorizontal: hp(6),
              fontSize: hp(1.8),
              color: '#363636',
              marginVertical: hp(1.6),
            }}>
            History
          </Text>
        </View>
      </View>

      <View>
        <Graph/>
      </View>
    </>
  );
};

export default Financial;

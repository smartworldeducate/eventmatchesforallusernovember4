import {View, Text, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Check from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-fontawesome-pro';
import fontFamily from '../Styles/fontFamily';
import fontSize from '../Styles/fontSize';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MovementLine = props => {
  const [localData, setLocalData] = useState('');

  const timeLineData = useSelector(state => state.movementState);

  async function getData(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const parsedData = JSON.parse(value);
        setLocalData(parsedData);
      } else {
        console.log('No data found for key:', key);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  }
  useEffect(() => {
    getData('loginData');
  }, []);

  console.log("PftimeLIneData",localData)

  const renderItem = ({item, index}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View>
          <View
            style={{
              width: wp(6),
              height: hp(3),
              borderRadius: hp(50),
              borderWidth: 1,
              borderColor: '#1C37A4',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: wp(4),
                height: hp(2),
                borderRadius: hp(50),
                backgroundColor: '#1C37A4',
              }}></View>
          </View>
          <View
            style={{
              height: hp(9.8),
              width: wp(0.5),
              backgroundColor: '#1C37A4',
              marginLeft: hp(1.2),
              marginTop: hp(0.5),
              marginBottom: hp(0.5),
            }}></View>
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: hp(1),
            height: hp(12),
            borderRadius: hp(2),
            backgroundColor: '#FFF',
            shadowColor: '#000',
            shadowOpacity: 0.8,
            shadowRadius: 3,
            elevation: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: hp(2),
              marginTop: hp(1),
            }}>
            <View>
              <Text style={styles.dtext}>{item?.SINCE}</Text>
            </View>
            <View
              style={{
                backgroundColor: '#D4FFCC',
                borderRadius: hp(5),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={[styles.ststext, {color: '#2D8E00'}]}>
              {item?.DURATION < 1 ? "0" : "" }{item?.DURATION }  {item?.DURATION < 1 ? "month" : "years" } 
              </Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: hp(1),
              paddingVertical: hp(1),
              marginHorizontal: hp(2),
            }}>
            <Text style={styles.centertext}>
              <Text style={[styles.prev, {color: '#1C37A4'}]}>
                {' '}
                {item?.DESIGNATION}{' '}
              </Text>
              in{' '}
              <Text style={[styles.prev, {color: '#1C37A4'}]}>
                {item?.DEPT_NAME}
              </Text>
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: hp(1),
              paddingVertical: hp(0),
              marginHorizontal: hp(2),
            }}>
            <Text
              style={[
                styles.centertext,
                {color: '#000', marginTop: hp(-0.5), fontWeight: 'bold'},
              ]}>
              {item?.SALARY}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <View>
        <MainHeader
          text={'Movement Log'}
          iconName={'arrow-left'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <View
        style={{
          height: hp(5),
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: hp(2.5),
          marginTop: hp(3),
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center', paddingVertical: hp(0.3)}}>
            <Icon
              type="light"
              name="circle-check"
              size={hp(3)}
              color="#239B56"
            />
          </View>
          <View style={{marginLeft: hp(0.8)}}>
            <View>
              <Text style={styles.smalltext}>{localData?.EMP_STATUS}</Text>
            </View>
            <View>
              <Text style={styles.smalltext1}>STATUS</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginLeft: hp(3.5)}}>
          <View style={{alignItems: 'center', paddingVertical: hp(0.3)}}>
            <Icon name="wrench" size={hp(3)} color="#BB8FCE" />
          </View>
          <View style={{marginLeft: hp(0.5)}}>
            <View>
              <Text style={styles.smalltext}>{localData?.SERVICE_LENGTH}</Text>
            </View>
            <View>
              <Text style={styles.smalltext1}>SERVICE</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginLeft: hp(3.5)}}>
          <View style={{alignItems: 'center', paddingVertical: hp(0.3)}}>
            <Check name="checkcircleo" size={hp(3)} color="#CD6155" />
          </View>
          <View style={{marginLeft: hp(0.5)}}>
            <View>
              <Text style={styles.smalltext}>31 Years</Text>
            </View>
            <View>
              <Text style={styles.smalltext1}>AGE</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 1, marginHorizontal: hp(2.5), marginTop: hp(2)}}>
        <FlatList
          data={timeLineData?.user}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </>
  );
};

export default MovementLine;

const styles = EStyleSheet.create({
  zetext: {
    color: '#363636',
    fontWeight: '700',
    fontSize: '0.9rem',
    fontFamily: fontFamily.ceraBlack,
  },
  zetext1: {
    color: '#363636',
    fontWeight: '500',
    // marginTop: hp(1),
    fontSize: '0.7rem',
    fontFamily: fontFamily.ceraBlack,
  },
  smalltext: {
    fontWeight: '700',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraBold,
    color: '#353535',
    fontStyle: 'normal',
  },
  smalltext1: {
    fontWeight: '500',
    fontSize: '0.5rem',
    fontFamily: fontFamily.ceraMedium,
    color: '#979797',
    fontStyle: 'normal',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  dtext: {
    color: '#353535',
    fontSize: '0.65rem',
    fontWeight: '700',
    fontStyle: 'normal',
    paddingVertical: hp(0.5),
    fontFamily: fontFamily.ceraBold,
  },
  centertext: {
    fontFamily: fontFamily.ceraLight,
    fontSize: '0.65rem',
    fontWeight: '100',
    fontStyle: 'normal',
    color: '#979797',
    lineHeight: hp(2),
  },
  ststext: {
    fontSize: '0.5rem',
    fontFamily: fontFamily.ceraBold,
    paddingHorizontal: hp(2.5),
    paddingVertical: hp(0.5),
    textTransform: 'uppercase',
    fontWeight: '700',
    fontStyle: 'normal',
  },
  prev: {
    // color: '#4E69DA',
    fontSize: '0.65rem',
    fontFamily: fontFamily.ceraMedium,
    fontWeight: '500',
    fontStyle: 'normal',
  },
  endtext: {
    color: '#4E69DA',
    fontSize: '0.65rem',
    fontFamily: fontFamily.ceraMedium,
    fontWeight: '500',
    fontStyle: 'normal',
  },
});

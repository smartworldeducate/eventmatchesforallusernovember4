import {View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator, Modal} from 'react-native';
import React, {useEffect,useCallback} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import colors from '../Styles/colors';
import fontFamily from '../Styles/fontFamily';
import Icon from 'react-native-fontawesome-pro';
import {adminListHandler} from '../features/adminlist/adminSlice';
import { useFocusEffect } from '@react-navigation/native';
import {activityHomeHandler,resetState} from '../features/eventactivityhome/hactivitySlice';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
const Admins = props => {
  const adminList = useSelector(state => state.adminListState);
  console.log('adminlist==', adminList?.isLoading);
  const dispatch = useDispatch();
  useFocusEffect(
    useCallback(() => {
      dispatch(adminListHandler());
      dispatch(resetState());
    }, [])
  )
  useEffect(() => {
    dispatch(adminListHandler());
  }, []);
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('AllEvents',{"user_id":item?.user_id})}
        style={{
          flex: 0.1,
          flexDirection: 'row',
          // backgroundColor: 'green',
          height: hp(10.3),
          borderRadius: hp(1),
          borderWidth: 0.5,
          borderColor: '#cdcdcd',
          marginVertical: hp(1.3),
          marginHorizontal: hp(2.5),
        }}>
        <View
          style={{
            flex: 0.29,
            justifyContent: 'center',
            alignItems: 'center',
            // paddingLeft: hp(-1),
            // backgroundColor:'green',
            paddingVertical: hp(1),
          }}>
          <Image
            style={{width: '75%', height: '95%',borderRadius:hp(1)}}
            source={{uri: item?.image}}
            resizeMode="contain"
          />
        </View>
        <View style={{flex: 0.7, justifyContent: 'center'}}>
          <Text
            style={{
              color: colors.blackColor,
              paddingLeft: hp(0),
              fontSize: hp(2),
              fontWeight: '500',
              fontFamily: fontFamily.robotoMedium,
            }}>
            {item?.first_name} {item?.last_name}
          </Text>
          {/* <Text
            style={{
              color: colors.grayDescColor,
              fontSize: hp(2),
              paddingLeft: hp(0),
              fontWeight: '300',
              fontFamily: fontFamily.robotoLight,
            }}>
            {item?.company_name}-{item?.user_id}
          </Text> */}
        </View>
        <View
          style={{
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: hp(1),
            // backgroundColor:'red',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#2CC2E4',
              paddingHorizontal: hp(1.2),
              paddingVertical: hp(0.5),
              borderRadius: hp(1),
            }}>
            <Icon type="light" name="arrow-right" size={hp(3)} color="#fff" />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      
      <Modal
        visible={adminList?.isLoading}
        transparent={true}
        animationType="fade"
      >
        <View style={{flex:1,justifyContent: 'center', alignItems: 'center',backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{width:wp(25),height:hp(12.5),backgroundColor: 'white',borderRadius:hp(1),justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#cdcdcd" />
        </View>
        </View>
      </Modal>
      
      <View style={{flex: 0.1}}>
        <MainHeader
          text={'Admins'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <View style={{flex: 0.02}}></View>
      <View style={{flex: 0.86}}>
        <FlatList
          data={adminList?.user?.admins}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        
          
      </View>
    </View>
  );
};

export default Admins;

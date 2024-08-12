import React, {useCallback, useEffect, useState} from 'react';
import Icon from 'react-native-fontawesome-pro';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontFamily from '../Styles/fontFamily';
import colors from '../Styles/colors';
import {speakerHandler} from '../features/speaker/speakerSlice'
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
  ActivityIndicator,
} from 'react-native';
import MainHeader from '../Components/Headers/MainHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
const Exibitornew = props => {
   
    const dispatch = useDispatch();
    const speakerData=useSelector((state)=>state.speakerState);
    console.log("exibitor==",speakerData?.user?.response?.events);
    async function getData(key) {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          console.log('Data retrieved successfully:', value);
          const parsedData = JSON.parse(value);
  
          // setData(parsedData);
          // {"user_id":parsedData.user_id,"event_id":parsedData.event_id,"type_id":1}
          dispatch(speakerHandler({"user_id":parsedData.user_id,"event_id":parsedData.event_id,"type_id":2}));
          console.log('here is feedback screen data', parsedData);
          return parsedData;
        } 
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    }
    // useFocusEffect(
    //   useCallback(() => {
    //     getData('userSession');
    //     // dispatch(resetState());
    //   }, [])
    // )
    useEffect(() => {
      getData('userSession');
    }, []);

    const renderItem = ({item, index}) => {
      return (
        <TouchableOpacity activeOpacity={0.8}
          onPress={() => props.navigation.navigate('ExibitoeDetail',{item})}
          style={[
            {
            //   marginHorizontal: hp(2.5),
              flex: 1,
              marginBottom: hp(2),
              height: hp(13.5),
              flexDirection: 'row',
              backgroundColor: '#fff',
              borderRadius: hp(1),
              paddingVertical:hp(0),
              // backgroundColor:'red',
              // Shadow styles
              ...(Platform.OS === 'ios'
                ? {
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                  }
                : {
                    elevation: 5,
                  }),
            },
          ]}>
          <View style={{flex: 1, flexDirection: 'row', margin: hp(1.5)}}>
            <View style={{flex: 0.23}}>
              <Image
                style={{width: '100%', height: '100%', borderRadius: hp(0)}}
                source={{uri: item?.image_name ? item?.image_name : 'groupfore'}}
                resizeMode="contain"
              />
            </View>
            <View style={{flex: 0.72, marginLeft: hp(1.5)}}>
              <Text
                style={{
                  color: colors.grayDescColor,
                  fontSize: hp(2),
                  flexWrap: 'wrap',
                  fontWeight: 'bold',
                  fontFamily: fontFamily.robotoMedium,
                }}
                ellipsizeMode="tail"
                numberOfLines={3}>
                {item?.speaker_name}
              </Text>
              <View style={{flexDirection:'row'}}>
              
             <View style={{paddingLeft:hp(0),marginTop:hp(0.5)}}>
             <Text
                style={{
                  color: colors.grayDescColor,
                  fontSize: hp(1.8),
                  flexWrap: 'wrap',
                  fontWeight: '300',
                  fontFamily: fontFamily.robotoMedium,
                  paddingTop:hp(0.5)
                }} numberOfLines={2}>
             
              {item?.designation}
              </Text>
             </View>
              </View>
            </View>
            <View style={{flex: 0.08, justifyContent: 'flex-end'}}>
              <Icon
                type="light"
                name="arrow-down-right"
                size={hp(3)}
                color="#832D8E"
              />
            </View>
          </View>
        </TouchableOpacity>
      );
    };
  
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle={'default'} translucent backgroundColor="#832D8E" />
        
          <Modal
          visible={speakerData?.isLoading}
          transparent={true}
          animationType="fade">
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
            <View
              style={{
                width: wp(25),
                height: hp(12.5),
                backgroundColor: 'white',
                borderRadius: hp(1),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator size="large" color="#cdcdcd" />
            </View>
          </View>
        </Modal>
       
        <View style={{flex: 0.13}}>
          <MainHeader
            text={'Exibitor'}
            onpressBtn={() => props.navigation.goBack()}
          />
        </View>
       
        <View style={{flex: 0.9, marginHorizontal: hp(2.5), marginTop: hp(3)}}>
            <FlatList
                data={speakerData?.user?.response?.events}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                />
        </View>
  
        {speakerData?.user?.response?.success===0 && (
          <View style={{flex:0.1,height:hp(15),justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:colors.grayDescColor,fontSize:hp(2),fontStyle:'italic',fontFamily:fontFamily.robotoBold}}>No Data Available.</Text>
          </View>
        )} 
       
        
      </View>
    );
  };
  
  
  
  export default Exibitornew;
  
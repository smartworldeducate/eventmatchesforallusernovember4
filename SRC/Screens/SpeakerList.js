import {View, Text, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import React, { useEffect } from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import Search from '../Components/Search';
import Icon from 'react-native-fontawesome-pro';
import {speakerHandler} from '../features/speaker/speakerSlice'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../Styles/colors';
import fontFamily from '../Styles/fontFamily';
import { useDispatch, useSelector } from 'react-redux';
const SpeakerList = props => {

  const dispatch = useDispatch();
  const speakerData=useSelector((state)=>state.speakerState);
  // console.log("activityData==",speakerData?.user?.response?.events);
  const urlData=speakerData?.user?.response?.events[0];
  // const {facebook_url,speaker_id,twitter_url,googleplus_url,pinterest_url,linkedin_url,}=urlData;
  // console.log("url==",urlData?.twitter_url);
  useEffect(() => {
    dispatch(speakerHandler({"user_id":6502,"event_id":348,"type_id":1}));
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile',{item})}
            style={{
              flex: 0.4,
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
                alignItems:'center',
                paddingLeft: hp(-1),
                // backgroundColor:'red',
                paddingVertical:hp(1)
              }}>
              <Image
                style={{width: '70%', height: '90%', paddingTop: hp(0),borderRadius:hp(50)}}
                source={{uri: item?.image_name}}
                resizeMode="cover"
              />
            </View>
            <View style={{flex: 0.7, justifyContent: 'center'}}>
              <Text
                style={{
                  color: colors.blackColor,
                  paddingLeft: hp(0),
                  fontSize: hp(2),
                  fontWeight: '600',
                  fontFamily:fontFamily.robotoBold
                }}>
                {item?.speaker_name}
              </Text>
              <Text
                style={{
                  color:colors.grayDescColor,
                  fontSize: hp(2),
                  paddingLeft: hp(0),
                  fontWeight: '300',
                  fontFamily:fontFamily.robotoLight
                }}>
                {item?.designation}
              </Text>
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: hp(1),
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
                <Icon
                  type="light"
                  name="arrow-right"
                  size={hp(3)}
                  color="#fff"
                />
              </View>
            </View>
          </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.1}}>
        <MainHeader
          text={'Speaker List'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <View style={{flex: 0.03}}></View>
      <View style={{flex: 0.1,marginTop:hp(2)}}>
        <Search />
      </View>

      <View style={{flex:0.8}}>
          <FlatList
          data={speakerData?.user?.response?.events}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default SpeakerList;

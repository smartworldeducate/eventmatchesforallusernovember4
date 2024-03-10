import { View, Text, StatusBar, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainHeader from '../Components/Headers/MainHeader'
import BtnThree from '../Components/BtnThree';
import { pastEventHandler} from '../features/pastevents/pastEventSlice'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
const PrevEvents = (props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  // 6502
  async function getData(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log('Data retrieved successfully:', value);
        const parsedData = JSON.parse(value);
        setData(parsedData);
        dispatch(pastEventHandler({"user_id":6502}));
        console.log('here is splash screen data', parsedData?.user_id);
      } else {
        console.log('No data found for key:', key);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  }
  const pastEventData=useSelector((state)=>state.pastEventState);
  console.log("pastEventData==",pastEventData?.user?.response?.events);
  useEffect(() => {
    getData('loginData');
    // dispatch(pastEventHandler({"user_id":6502,"event_id":209}));
  }, []);
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={()=>{}} style={{marginHorizontal:hp(2.5),marginBottom:hp(2),height:hp(15)}}>
        <Image
          style={{ width: '100%', height: '100%', borderRadius: hp(1.5) }}
          source={{ uri:item?.logo ? item?.logo:'groupfore'}}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex:1}}>
         <StatusBar
        barStyle={'default'}
        translucent
        backgroundColor="transparent"
      />
     <View style={{flex:0.1}}>
     <MainHeader text={'Previous Events'} onpressBtn={() => props.navigation.goBack()}/>
     </View>
      
      <View style={{flex:0.01,justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginHorizontal:hp(2.5),marginTop:hp(-2)}}>
      </View>
      <View style={{flex:0.8}}>
      <FlatList
          data={pastEventData?.user?.response?.events}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  )
}

export default PrevEvents
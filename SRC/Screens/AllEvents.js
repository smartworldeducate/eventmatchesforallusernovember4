import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState,useCallback} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import BtnThree from '../Components/BtnThree';
import fontFamily from '../Styles/fontFamily';
import colors from '../Styles/colors';
import {eventsListHandler} from '../features/allevents/alleventSlice';
import Icon from 'react-native-fontawesome-pro';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {activityHomeHandler,resetState} from '../features/eventactivityhome/hactivitySlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { pastEventHandler } from '../features/pastevents/pastEventSlice';
import { futureEventHandler } from '../features/upcommingevents/upcomingEventSlice';
import { useFocusEffect } from '@react-navigation/native';

const AllEvents = props => {
  const dispatch = useDispatch();
  const {user_id} = props.route.params;
  // console.log("user id==",user_id);
  const [tbnState, setBtnState] = useState('All Events');
  const [data, setData] = useState(null);
  const [btnone,setBtnOne]=useState(true);
  const [btntwo,setBtnTwo]=useState(false);
  const [btnthree,setBtnThree]=useState(false);
  const [loginData, setLoginData] = useState(null);
  const [currentState, setCurrentState] = useState(true);
  const [seeAllState, setSeeAlltState] = useState(false);
  const activityData = useSelector(state => state.acitivityState);
  const allevntsData = useSelector(state => state.alleventsState);
  const pastEventData=useSelector((state)=>state.pastEventState);
  const futureEventData=useSelector((state)=>state.futureEventState);
  // console.log("futureEventData===",futureEventData)

  async function saveData(value) {
    const jsonString = JSON.stringify(value);
    try {
      await AsyncStorage.setItem('userSession', jsonString);
      console.log('Data saved successfully.');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }

  async function geLogintData(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // console.log('Data retrieved successfully:', value);
        const parsedData = JSON.parse(value);
        setLoginData(parsedData);
      } 
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  }
 
  useEffect(() => {
    geLogintData('loginData');
    dispatch(resetState());
    dispatch(eventsListHandler({user_id: user_id}));
  }, [btnone,btntwo,btnthree]);
  const propHandler = (event_id) => {
     saveData({user_id: user_id, event_id: event_id,login_id:loginData?.user_id});
    if (event_id) {
       dispatch(activityHomeHandler({event_id: event_id,user_id:loginData?.user_id}));
      // if (activityData?.user?.responseData?.response?.success === 1) {
        props.navigation.navigate('HomeScreen');
    //   }
    // } else {
    //   console.log('something went wrong');
     }
  };
  
  const btn2Handler = () => {
    dispatch(pastEventHandler({"user_id":user_id}));
    setBtnTwo(true);
    setBtnOne(false);
    setBtnThree(false);
    setBtnState('Previous Events');

  };

  const btn3Handler = () => {
    dispatch(futureEventHandler({"user_id":user_id}));
    setBtnTwo(false);
    setBtnOne(false);
    setBtnThree(true);
    setBtnState('Future Events');

  };
  const btn1Handler=()=>{
    dispatch(eventsListHandler({user_id: user_id}));
    setBtnTwo(false);
    setBtnOne(true);
    setBtnThree(false);
    setBtnState('All Events');
  }

  const currentHandler = () => {
    setCurrentState(true);
    setSeeAlltState(false);
  };
  const seeAllHandler = () => {
    setCurrentState(false);
    setSeeAlltState(true);
  };
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => propHandler(item?.event_id)}
        style={[
          {
            marginHorizontal: hp(2.5),
            flex: 1,
            marginBottom: hp(2),
            height: hp(12),
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: hp(1),
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
              style={{width: '100%', height: '100%', borderRadius: hp(1)}}
              source={{uri: item?.logo ? item?.logo : 'groupfore'}}
              resizeMode="cover"
            />
          </View>
          <View style={{flex: 0.72, marginLeft: hp(1)}}>
            <Text
              style={{
                color: colors.grayDescColor,
                fontSize: hp(2),
                flexWrap: 'wrap',
                fontWeight: '500',
                fontFamily: fontFamily.robotoLight,
              }}
              ellipsizeMode="tail"
              numberOfLines={3}>
              {item?.event_name}
            </Text>
            <Text
              style={{
                color: colors.grayDescColor,
                fontSize: hp(1.8),
                flexWrap: 'wrap',
                fontWeight: '500',
                fontFamily: fontFamily.robotoLight,
                paddingTop:hp(0.5)
              }}>
           
              {item?.start_date} - {item?.end_date}
            </Text>
          
          </View>
          <View style={{flex: 0.08, justifyContent: 'flex-end'}}>
            <Icon
              type="light"
              name="arrow-down-right"
              size={hp(3)}
              color="#2CC2E4"
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'default'} translucent backgroundColor="#2CC2E4" />
      
        <Modal
        visible={allevntsData?.isLoading || pastEventData?.isLoading || futureEventData?.isLoading}
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
          text={tbnState}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <View
        style={{
          flex: 0.12,
          marginHorizontal: hp(2.5),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <BtnThree
          onpressBtn={btn2Handler}
          onpressBtn2={ btn3Handler}
          onpressBtn1={btn1Handler}
        />
      </View>

      {btnone && allevntsData?.user?.response?.success===0 && (
        <View style={{flex:0.1,height:hp(15),justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:colors.grayDescColor,fontSize:hp(2)}}>No Events Available.</Text>
        </View>
      )}
       {btntwo && pastEventData?.user?.response?.success===0 && (
        <View style={{flex:0.1,height:hp(15),justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:colors.grayDescColor,fontSize:hp(2)}}>No Events Available.</Text>
        </View>
      )}
      {btnthree && futureEventData?.user?.response?.success===0 && (
        <View style={{flex:0.1,height:hp(15),justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:colors.grayDescColor,fontSize:hp(2)}}>No Events Available.</Text>
        </View>
      )}
  
      {btnone && allevntsData?.user?.response?.events && (
        <ButtonSection
          currentHandler={currentHandler}
          seeAllHandler={seeAllHandler}
          seeAllState={seeAllState}
          ifevent={allevntsData}
          events={allevntsData.user.response.events}
        />
      )}

      {btntwo && pastEventData?.user?.response?.events && (
        <ButtonSection
          currentHandler={currentHandler}
          seeAllHandler={seeAllHandler}
          seeAllState={seeAllState}
          ifevent={pastEventData}
          events={pastEventData.user.response.events}
        />
      )}

      {btnthree && futureEventData?.user?.response?.events && (
        <ButtonSection
          currentHandler={currentHandler}
          seeAllHandler={seeAllHandler}
          seeAllState={seeAllState}
          ifevent={futureEventData}
          events={futureEventData.user.response.events}
        />
      )}
      
    
     
      
      {btnone && (
        <View style={{flex: 0.75}}>
        {currentState && (
          <View style={{flex: 1}}>
            <FlatList
              data={allevntsData?.user?.response?.events?.slice(0, 10)}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
        {seeAllState && (
          <View style={{flex: 1}}>
            <FlatList
              data={allevntsData?.user?.response?.events}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
      </View>
      )}

      {btntwo && (
        <View style={{flex: 0.75}}>
        {currentState && (
          <View style={{flex: 1}}>
            <FlatList
              data={pastEventData?.user?.response?.events?.slice(0, 10)}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
        {seeAllState && (
          <View style={{flex: 1}}>
            <FlatList
              data={pastEventData?.user?.response?.events}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
      </View>
      )}

      {btnthree && (
         <View style={{flex: 0.75}}>
         {currentState && (
           <View style={{flex: 1}}>
             <FlatList
               data={futureEventData?.user?.response?.events?.slice(0, 10)}
               renderItem={renderItem}
               keyExtractor={(item, index) => index.toString()}
             />
           </View>
         )}
         {seeAllState && (
           <View style={{flex: 1}}>
             <FlatList
               data={futureEventData?.user?.response?.events}
               renderItem={renderItem}
               keyExtractor={(item, index) => index.toString()}
             />
           </View>
         )}
       </View>
      )}
      
    </View>
  );
};
const ButtonSection = ({ currentHandler, seeAllHandler, seeAllState, events,ifevent }) => (

  <View
    style={{
      flex: 0.07,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginHorizontal: 20,
      marginTop: -15,
      paddingBottom: 15,
    }}>
    <TouchableOpacity onPress={currentHandler}>
      <Text
        style={{
          color: colors.blackColor,
          fontSize:hp(2.3),
          fontWeight: '600',
          fontFamily: fontFamily.robotoMedium,
        }}>
        Current
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={seeAllHandler}>
      <Text
        style={{
          color: seeAllState ? '#000' : colors.blackColor,
          fontSize: 16,
          fontWeight: '400',
          fontFamily: fontFamily.robotoLight,
        }}>
       <View style={{flexDirection:'row'}}>
        <View style={{paddingRight:hp(0.5)}}>
        <Text style={{color:colors.grayDescColor}}>See All</Text>
        </View>
      <View style={{marginTop:hp(0.5)}}>
      <Icon
              type="solid"
              name="play"
              size={hp(1.5)}
              color="gray"
            />
      </View>
       </View>
      </Text>
    </TouchableOpacity>
  </View>
);


export default AllEvents;

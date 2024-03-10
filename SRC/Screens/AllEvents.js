import { View, Text, StatusBar, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainHeader from '../Components/Headers/MainHeader'
import BtnThree from '../Components/BtnThree'
import fontFamily from '../Styles/fontFamily'
import colors from '../Styles/colors';
import {eventsListHandler} from '../features/allevents/alleventSlice'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux'
import { activityHomeHandler } from '../features/eventactivityhome/hactivitySlice'
const AllEvents = (props) => {
  const dispatch = useDispatch();
  const {user_id} = props.route.params;
  const [currentState,setCurrentState]=useState(true)
  const [seeAllState,setSeeAlltState]=useState(false)
  const activityData=useSelector((state)=>state.acitivityState);
  // console.log("activityData==",activityData?.user?.userData?.event_id);
  const allevntsData=useSelector((state)=>state.alleventsState);
  useEffect(() => {
    dispatch(eventsListHandler({"user_id":user_id}));
  }, []);
  const propHandler=(event_id)=>{
    if(event_id){
     dispatch(activityHomeHandler({"event_id":event_id}));
     if(activityData?.user?.responseData?.response?.success===1){
      props.navigation.navigate('HomeScreen');
     }
    }else{
      console.log("something went wrong");
    }
  }
  const btn1Handler=()=>{
    props.navigation.navigate('PrevEvents')
  }
  // const btn2Handler=()=>{
  //   props.navigation.navigate('PastEvents')
  // }

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
      <TouchableOpacity onPress={()=>propHandler(item?.event_id)} style={{marginHorizontal:hp(2.5),marginBottom:hp(2),height:hp(15)}}>
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
     <MainHeader text={'All Events'} onpressBtn={() => props.navigation.goBack()}/>
     </View>
      <View style={{flex:0.1,marginHorizontal:hp(2.5),justifyContent:'center',alignItems:'center'}}>
        <BtnThree onpressBtn={btn1Handler}/>
      </View>
      <View style={{flex:0.05,justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginHorizontal:hp(2.5),marginTop:hp(-2)}}>
        <TouchableOpacity onPress={currentHandler}>
          <Text style={{color:colors.blackColor,fontSize:hp(2.5),fontWeight:'600',fontFamily:fontFamily.robotoBold}}>Current</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={seeAllHandler}>
          <Text style={{color:seeAllState ? '#000':colors.blackColor,fontSize:hp(2),fontWeight:'400',fontFamily:fontFamily.robotoLight}}>See All</Text>
        </TouchableOpacity>

      </View>
      {currentState && (<View style={{flex:0.7}}>
      <FlatList
          data={allevntsData?.user?.response?.events?.slice(0, 10)}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>)}
      {seeAllState && (<View style={{flex:0.7}}>
      <FlatList
          data={allevntsData?.user?.response?.events}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>)}
     
    </View>
  )
}

export default AllEvents
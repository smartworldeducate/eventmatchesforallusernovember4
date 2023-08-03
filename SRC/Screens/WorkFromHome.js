import { View, Text, Image } from 'react-native'
import React from 'react'
import MainHeader from '../Components/Headers/MainHeader'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
const WorkFromHome = (props) => {
  return (
   <>
    <View>
          <MainHeader text={'Work From Home'} iconName={'arrowleft'} onpressBtn={()=>props.navigation.goBack()}/>
    </View>
    <View style={{height:hp(20),marginTop:hp(5),justifyContent:'center',alignItems:'center'}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:hp(5),color:'#000'}}>09:41</Text>
            <Text style={{fontSize:hp(2.5),color:'#000'}}>Thursday, June 22</Text>
        </View>
    </View>

    <View style={{height:hp(20),marginTop:hp(5),justifyContent:'center',alignItems:'center'}}>
       <Image style={{width:wp(20),height:hp(10)}} source={{uri:'timein'}} resizeMode='contain'/>
    </View>
   </>
  )
}

export default WorkFromHome
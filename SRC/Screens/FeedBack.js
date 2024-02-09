import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MainHeader from '../Components/Headers/MainHeader'
import fontFamily from '../Styles/fontFamily';
import colors from '../Styles/colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
const FeedBack = () => {
    const [feedback,setFeedback]=useState('')
  return (
    <View style={{flex:1}}>
      <View style={{flex: 0.1}}>
        <MainHeader
          text={'FeedBack'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <View style={{flex:0.9,marginHorizontal:hp(2.5)}}>
            <View style={{flex:0.05}}></View>
            {/* <View style={{flex:0.05}}>
            <Text style={{color:colors.blackColor,fontSize:hp(2.5),fontWeight:'600',fontFamily:fontFamily.robotoBold}}>FeedBack</Text>
            </View> */}
            <View style={{flex:0.5,backgroundColor:'#fff',borderRadius:hp(1),borderWidth:1,borderColor:'gray'}}>
            <TextInput style={{color:colors.blackColor, fontSize: hp(1.6), fontWeight: '600',fontFamily:fontFamily.robotoBold,  textAlignVertical: 'top',height:hp(47)}}
            placeholder={'Enter Feedback'}
            // value={feedback}
            multiline={true}
            onPress={(text)=>setFeedback(text)}
            placeholderTextColor={'#cdcdcd'}
            keyboardType="default" 
            autoCapitalize="none" 
            autoCorrect={false}
            secureTextEntry={false}/>
            </View>
            <View style={{flex:0.1}}>
            <TouchableOpacity
          onPress={()=>{}}
          activeOpacity={0.8}
          style={{
            marginHorizontal: hp(2.5),
            height: hp(7),
            borderRadius: hp(5),
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: hp(5),
            backgroundColor: colors.lightBlue,
            shadowColor: '#000',
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 4,
          }}>
          <Text style={{color:'#fff',fontSize:hp(2.5),fontFamily:fontFamily.robotoBold}}>SUBMIT</Text>
        </TouchableOpacity>
            </View>
      </View>
    </View>
  )
}

export default FeedBack
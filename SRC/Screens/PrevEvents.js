import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MainHeader from '../Components/Headers/MainHeader'
import BtnThree from '../Components/BtnThree'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const PrevEvents = (props) => {
    const upcomingHandler=()=>{
         props.navigation.navigate('PrevEvents')
    }
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
      {/* <View style={{flex:0.1,marginHorizontal:hp(2.5)}}>
        <BtnThree />
      </View> */}
      <View style={{flex:0.1,justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginHorizontal:hp(2.5),marginTop:hp(-2)}}>
        {/* <TouchableOpacity>
          <Text style={{color:'#000',fontSize:hp(2),fontWeight:'700'}}>Current</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color:'#000'}}>See All</Text>
        </TouchableOpacity> */}

      </View>
      <View style={{ flex: 0.15,marginHorizontal:hp(2.5),marginBottom:hp(2)}}>
        <Image
          style={{ width: '100%', height: '100%', borderRadius: hp(1.5) }}
          source={{ uri: 'groupfore' }}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 0.15,marginHorizontal:hp(2.5),marginBottom:hp(2)}}>
        <Image
          style={{ width: '100%', height: '100%', borderRadius: hp(1.5) }}
          source={{ uri: 'groupthree' }}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 0.15,marginHorizontal:hp(2.5),marginBottom:hp(2)}}>
        <Image
          style={{ width: '100%', height: '100%', borderRadius: hp(1.5) }}
          source={{ uri: 'grouptwo' }}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 0.15,marginHorizontal:hp(2.5),marginBottom:hp(2)}}>
        <Image
          style={{ width: '100%', height: '100%', borderRadius: hp(1.5) }}
          source={{ uri: 'groupone' }}
          resizeMode="cover"
        />
      </View>
    </View>
  )
}

export default PrevEvents
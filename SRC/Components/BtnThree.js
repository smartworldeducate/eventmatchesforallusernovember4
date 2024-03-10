import { View, Text, TouchableOpacity } from 'react-native'
import fontFamily from '../Styles/fontFamily'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React from 'react'
const BtnThree = ({onpressBtn}) => {
  return (
    <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:hp(0)}}>
      <TouchableOpacity  style={{flex:0.37,borderRadius:hp(5),height:hp(5),justifyContent:'center',alignItems:'center',backgroundColor:'#F0635A'}}>
        <Text style={{color:'#fff',fontSize:hp(2),fontWeight:'400',fontFamily:fontFamily.robotoMedium}}>Current</Text>
        {/* <Text style={{color:'#2CC2E4',fontSize:hp(1.3),fontWeight:'300'}}>8th, Nov 2022</Text> */}
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=>{}}style={{flex:0.37,borderRadius:hp(5),height:hp(5),justifyContent:'center',alignItems:'center',marginHorizontal:hp(1),backgroundColor:'#F59762'}}>
      <Text style={{color:'#fff',fontSize:hp(2),fontWeight:'400',fontFamily:fontFamily.robotoMedium}}>Upcomming</Text>
        {/* <Text style={{color:'#2CC2E4',fontSize:hp(1.3),fontWeight:'300'}}>8th, Nov 2022</Text> */}
      </TouchableOpacity>
      <TouchableOpacity onPress={onpressBtn} style={{flex:0.37,borderRadius:hp(5),height:hp(5),justifyContent:'center',alignItems:'center',backgroundColor:'#29D697'}}>
      <Text style={{color:'#fff',fontSize:hp(2),fontWeight:'400',fontFamily:fontFamily.robotoMedium}}>Past</Text>
        {/* <Text style={{color:'#2CC2E4',fontSize:hp(1.3),fontWeight:'300'}}>8th, Nov 2022</Text> */}
      </TouchableOpacity>
    </View>
    
  )
}

export default BtnThree
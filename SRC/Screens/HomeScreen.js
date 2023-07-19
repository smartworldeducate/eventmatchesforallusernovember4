import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderTop from '../Components/Headers/HeaderTop';
const HomeScreen = () => {
  return (
    <View style={styles.mainview}> 
    <HeaderTop/>
     
    </View>
  )
}

export default HomeScreen

const styles=StyleSheet.create({
  mainview:{
    flex:1
  }

})
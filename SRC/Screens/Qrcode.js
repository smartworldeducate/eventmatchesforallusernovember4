import { View, Text, StatusBar, TouchableOpacity, Image, FlatList, Modal, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import MainHeader from '../Components/Headers/MainHeader';
const Qrcode = (props) => {


  return (
    <View style={{flex:1}}>
         <StatusBar
        barStyle={'default'}
        translucent
        backgroundColor="transparent"
      />
      
     <View style={{flex:0.1,zIndex:1}}>
     <MainHeader text={'Qrcode'} onpressBtn={() => props.navigation.goBack()}/>
     </View>
      

      <View style={{flex:0.9}}>
      <Image
        source={{uri: 'https://jetpackme.files.wordpress.com/2023/05/jetpack-qr-code.png'}}
        style={{width: '100%', height: '100%'}}
        resizeMode={'contain'}
          />
      </View> 
     
    </View>
  )
}

export default Qrcode
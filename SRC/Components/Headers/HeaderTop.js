import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-fontawesome-pro';
import fontFamily from '../../Styles/fontFamily';
import colors from '../../Styles/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
const HeaderTop = ({ onPressIcon,onflterPress }) => {

  const navigation = useNavigation();
  const handleNavigate = (routeName, clearStack, params) => {
    navigation.navigate(routeName, params);
    if (clearStack) {
      console.log('Clear');
    }
  };
  return (
    <View style={s.container}>
      <View style={{ flex: 0.2, justifyContent: 'center', paddingTop: hp(4.5) }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ alignItems: 'flex-start', marginTop: hp(1) }}
          onPress={onPressIcon}>
          <Image
            style={{ width: '56%', height: '83%', paddingTop: hp(0) }}
            source={{ uri: 'logo' }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 0.2, justifyContent: 'center', paddingTop: hp(5), marginLeft: hp(-2.3) }}>
        <Text style={{ color:colors.blackColor, fontSize: hp(2.5), fontWeight: '600',fontFamily:fontFamily.robotoMedium }}>Home</Text>
      </View>

      <View style={{ flex: 0.2, justifyContent: 'center' }}></View>

      <View style={{ flex: 0.2, justifyContent: 'center', paddingTop: hp(5)}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ alignItems: 'flex-end',position:'relative' }}
          onPress={() => { }}>
            <View style={{height:hp(2),width:wp(4),borderRadius:hp(50),backgroundColor:'red',zIndex:1,position:'absolute',top:hp(-1),right:hp(-0.7)}}>
              <View style={{justifyContent:'center',alignItems:'center',marginTop:hp(-0.3)}}>
              <Text style={{color:'#fff',fontSize:hp(2)}}>2</Text>
              </View>
              
            </View>
          <Icon type="regular" name="bell" size={hp(3.5)} color="#2CC2E4" />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 0.2, justifyContent: 'center', paddingTop: hp(5) }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ alignItems: 'flex-end', marginRight: hp(1) }}
          onPress={onflterPress}>
            <Icon type="regular" name="filter" size={hp(3.5)} color="#2CC2E4" />
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default HeaderTop

const s = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: hp(5)

  }
})
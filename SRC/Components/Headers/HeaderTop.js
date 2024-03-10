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
        <Text style={{ color:colors.blackColor, fontSize: hp(2.5), fontWeight: '600',fontFamily:fontFamily.robotoBold }}>Home</Text>
      </View>

      <View style={{ flex: 0.2, justifyContent: 'center' }}></View>

      <View style={{ flex: 0.2, justifyContent: 'center', paddingTop: hp(5) }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ alignItems: 'flex-end' }}
          onPress={() => { }}>
          <Icon type="light" name="bell" size={hp(3.5)} color="#2CC2E4" />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 0.2, justifyContent: 'center', paddingTop: hp(5) }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ alignItems: 'flex-end', marginTop: hp(2) }}
          onPress={onflterPress}>
          <Image
            style={{ width: '70%', height: '70%', paddingTop: hp(2) }}
            source={{ uri: 'filter' }}
            resizeMode="cover"
          />
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
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import User from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Gte from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-fontawesome-pro';
import EStyleSheet from 'react-native-extended-stylesheet';
import fontFamily from '../Styles/fontFamily';
// import Icon from 'react-native-fontawesome-pro';

const ListProfile = ({IconName, textName}) => {
  return (
    <TouchableOpacity
      style={{
        width: wp(90),
        height: hp(6),
        borderRadius: hp(1),
        backgroundColor: '#FFF',
        marginBottom: hp(2),
        justifyContent:'center'
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems:'center'
          
        }}>
        <View style={{justifyContent: 'center',alignItems:'center',paddingLeft:hp(2)}}>
          <Icon type='light' name={IconName} color="#979797" style={styles.iconSty}/>
        </View>
        <View style={{alignItems: 'center', paddingHorizontal: hp(1)}}>
          <Text style={styles.smalltext}>{textName}</Text>
        </View>
        <View
          style={{
            marginLeft: hp(15),
            paddingVertical: hp(0.8),
            position: 'absolute',
            left: hp(27),
          }}>
          <Icon type='light' name="chevron-right" size={hp(2)} color="gray" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListProfile;

const styles = EStyleSheet.create({
  smalltext: {
    fontWeight: '500',
    fontSize: '0.7rem',
    fontFamily: fontFamily.ceraMedium,
    color: '#363636',
    fontStyle: 'normal',
  },
  smalltext1: {
    fontWeight: '500',
    fontSize: '0.5rem',
    fontFamily: fontFamily.ceraMedium,
    color: '#353535',
    fontStyle: 'normal',
    alignItems: 'center',
  },
  iconSty:{
    fontSize:hp(2.5),
    color:"#A6ACAF",
    fontWeight:100
  }
});

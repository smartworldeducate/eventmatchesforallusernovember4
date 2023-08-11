import React from 'react';
import {StyleSheet, TextInput, View, Image, ScrollView} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import colors from '../Styles/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import EStyleSheet from 'react-native-extended-stylesheet';
import fontFamily from '../Styles/fontFamily';

const ViewInput = ({
  iconName,
  iconColor,
  style,
  onChange,
  onChangeText,
  placeholder,
  Value,
  placeholderColor,
  maxLength,
  keyboardType,
  multiline,
  onPressIn,
  autoFocus,
  onFocus,
  editable,
  secureTextEntry,
  returnKeyType,
  numberOfLines,
  ref,
}) => {
  return (
    <ScrollView>
      <View
      style={{
        flexDirection: 'row',
        borderColor: colors.borderLightGrey,
        borderWidth: 1,
        borderRadius: widthPercentageToDP('10'),
        backgroundColor:'#fff'
      }}>
      <View
        style={{
          flex: 0.14,
          justifyContent: 'center',
          alignItems: 'center',
          // paddingHorizontal: wp('1'),
          backgroundColor: '#FDEB13',
          borderRadius: wp('10'),
        }}>
        <Icon name={iconName} color={iconColor} size={25} />
      </View>

      <View style={{flex: 0.86, justifyContent: 'center'}}>
        <TextInput
          style={style}
          onChangeText={onChangeText}
          onChange={onChange}
          placeholder={placeholder}
          value={Value}
          placeholderTextColor={placeholderColor}
          maxLength={maxLength}
          keyboardType={keyboardType}
          multiline={multiline}
          onPressIn={onPressIn}
          autoFocus={autoFocus}
          onFocus={onFocus}
          editable={editable}
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType}
          numberOfLines={numberOfLines}
          ref={ref}></TextInput>
      </View>
    </View>
    </ScrollView>
  );
};
export default ViewInput;


const styles = EStyleSheet.create({
  zetext1: {
    fontSize: '0.72rem',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBold,
    color: '#343434',
    fontStyle: 'normal',
  },
  ztitle: {
    fontSize: hp(1.5),
    fontWeight: '600',
    marginTop: hp(1),
    fontFamily: fontFamily.ceraBlack,
  },
  textInputCustomStyle: {
    fontSize: hp('1.65'),
    height: hp('6'),
    letterSpacing: -0.05,
    paddingLeft: wp('3'),
    color: colors.loginIconColor,
  },
  btc:{
    paddingLeft:hp(0.5),
    fontSize:hp(2),
    fontWeight:'700',
    fontFamily: fontFamily.ceraBlack,
  }
});
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Stylesheet, StyleSheet } from 'react-native';
import Icon from 'react-native-fontawesome-pro';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../Styles/colors';
const TestScreen = () => {
  const [state,setState]=useState('')
  const [hidePassword,setHidePassword]=useState(true)
 const managePasswordVisibility = () => {
  console.log('cdsafasvsa')
    setHidePassword(!hidePassword);
  };
  return (
    <View style={{marginTop:hp(10),marginHorizontal:hp(2.5)}}>
      <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInputCustomStyle}
                  secureTextEntry={hidePassword}
                  autoCompleteType="password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="send"
                  onChangeText={(UserPassword) =>setState(UserPassword)}
                  // value={state}
                />
                <TouchableOpacity
                  style={{marginRight:hp(2)}}
                  onPress={managePasswordVisibility}>
                  <Icon type='light' name='eye-slash' color='#000' size={30}/>
                </TouchableOpacity>
              </View>
            </View>
    
  )
}

export default TestScreen

const styles = StyleSheet.create({

  container: {
  flex: 1,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      marginTop: 10,
    },
  inputFlex: {
      alignSelf: 'stretch',
      width: '100%',
      padding: 0,
      backgroundColor: '#ddd'
    },
  visibilityBtn: {
      position: 'absolute',
      right: 9,
      height: 25,
      width: 25,
      padding: 0,
      marginTop: 21,
    },
    textInputView: {
      marginTop: hp('2'),
      justifyContent: 'center',
      backgroundColor: colors.whiteColor,
      alignItems: 'center',
      flexDirection: 'row',
      height: hp('7'),
      borderRadius: wp('10'),
      borderColor: colors.grey,
      borderWidth: wp('0.1'),
      marginBottom: hp('2'),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: wp('10'),
      shadowRadius: wp('10'),
      elevation: 10,
    },
    textInputCustomStyle: {
      fontSize: hp('1.65'),
      height: hp('7'),
      letterSpacing: -0.05,
      paddingLeft: wp('6'),
      color:'red',
    },
  
  })
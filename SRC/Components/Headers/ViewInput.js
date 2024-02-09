import React from 'react';
import {TextInput, View, Text, KeyboardAvoidingView, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet';
import fontFamily from '../../Styles/fontFamily';
import colors from '../../Styles/colors'
const ViewInput = ({value, name}) => {
  return (
    <KeyboardAvoidingView style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100} >
    <View>
      <View
        style={{
          marginHorizontal: hp(5),
          paddingBottom: 10,
          marginTop: hp(1.5),
        }}>
        <Text style={{color:'#2C3A4B', fontWeight: '600', fontSize: hp(1.8),fontFamily:fontFamily.robotoBold}}>
          {name}
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: hp(3.5),
          borderRadius: wp(10),
          borderColor: '#cdcdcd',
          borderWidth: 1,
          height: hp(5.5),
        }}>
        <View style={{paddingHorizontal: hp(1.5)}}>
          <TextInput
            style={{color:colors.blackColor, fontSize: hp(1.6), fontWeight: '600',fontFamily:fontFamily.robotoBold}}
            placeholder={name}
            value={value}
            placeholderTextColor={'#cdcdcd'}
            keyboardType="default" 
            autoCapitalize="none" 
            autoCorrect={false}
            secureTextEntry={false}></TextInput>
        </View>
      </View>
    </View>
    </KeyboardAvoidingView>
  );
};
export default ViewInput;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

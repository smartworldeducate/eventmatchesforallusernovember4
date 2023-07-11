import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  useLinkProps,
  useNavigation,
  CommonActions,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../Styles/colors';

const HeaderTop = ({iconName1, iconColor1, text, iconName2, iconColor2}) => {
  const navigation = useNavigation();
  const handleNavigate = (routeName, clearStack, params) => {
    navigation.navigate(routeName, params);
    if (clearStack) {
      console.log('Clear');
    }
  };

  return (
    <View
      style={{
        height: hp('16'),
        marginTop:hp('5'),
        paddingTop: wp('5'),
        backgroundColor: colors.yellowColor,
        borderBottomRightRadius: wp('18'),
      }}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{flex: 0.2, alignItems: 'center'}}>
          <Icon name={iconName1} color={iconColor1} size={30} />
        </TouchableOpacity>
        <View
          style={{
            flex: 0.6,
            color: colors.loginIconColor,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: hp('2.75'), color: colors.loginIconColor}}>
            {text}
          </Text>
        </View>
        <TouchableOpacity style={{flex: 0.2, alignItems: 'center'}}>
          <Icon name={iconName2} color={iconColor2} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HeaderTop;

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Left from 'react-native-vector-icons/AntDesign';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-fontawesome-pro';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet';
import fontFamily from '../../Styles/fontFamily';

const MainHeader = ({text, iconName, onpressBtn, rightIcon, yearText}) => {
  return (
    <>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#1C37A5', '#4D69DC']}
        style={styles.mainHeader}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.headerChild}>
          <TouchableOpacity
            onPress={onpressBtn}
            style={{justifyContent: 'center'}}>
            <Icon type="light" name={iconName} size={hp(2.5)} color="#fff" />
          </TouchableOpacity>
          <View style={{marginLeft: hp(-1.5)}}>
            <Text style={styles.textstyle}>{text}</Text>
          </View>
          <View style={{marginVertical: hp(0.5)}}>
            {rightIcon && (
              <Icon type="light" name={rightIcon} size={hp(2.5)} color="#fff" />
            )}
            {yearText && <Text style={styles.textstyle}>{yearText}</Text>}
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default MainHeader;

const styles = EStyleSheet.create({
  mainHeader: {
    height: hp(12),
    backgroundColor: '#1C37A4',
    borderBottomRightRadius: hp(3),
    borderBottomLeftRadius: hp(3),
  },
  headerChild: {
    marginTop: hp(6),
    flexDirection: 'row',
    width: wp(90),
    justifyContent: 'space-between',
    marginHorizontal: hp(2.5),
  },
  textstyle: {
    color: '#fff',
    marginTop: hp(0),
    fontSize: '0.9rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
  },
});

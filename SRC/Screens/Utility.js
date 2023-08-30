import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import Svg, {Path, Circle, Rect} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-fontawesome-pro';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '@rneui/themed/dist/config';
const Utility = props => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#1C37A5', '#4D69DC']}
      style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <MainHeader
        text={'Utitlity'}
        iconName={'arrow-left'}
        onpressBtn={() => props.navigation.goBack()}
      />
      <View
        style={{
          flex: 1,
          marginTop: hp(5),
          marginHorizontal: hp(2.5),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp(1),
            height: hp(22),
          }}>
          <LinearGradient
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
            colors={['#639cca', '#6600FF']}
            style={{
              width: wp(40),
              height: hp(22),
              borderRadius: hp(2),
              borderWidth: hp(0.1),
              borderColor: '#fff',
              backgroundColor: '#6600FF',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => {}}>
              <Icon
                type="light"
                name="square-list"
                size={hp(10)}
                color="#fff"
              />
              <Text style={{color: '#fff', fontSize: hp(3)}}>Menu</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={['#639cca', '#6600FF']}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
            style={{
              width: wp(40),
              height: hp(22),
              borderRadius: hp(2),
              borderWidth: hp(0.1),
              borderColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => {}}>
              <Icon
                type="light"
                name="list-dropdown"
                size={hp(10)}
                color="#fff"
              />
              <Text style={{color: '#fff', fontSize: hp(3)}}>Give up</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp(3),
            height: hp(22),
          }}>
          <LinearGradient
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
            colors={['#639cca', '#6600FF']}
            style={{
              width: wp(40),
              height: hp(22),
              borderRadius: hp(2),
              borderWidth: hp(0.1),
              borderColor: '#fff',
              backgroundColor: '#6600FF',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => {}}>
              <Icon type="light" name="file-minus" size={hp(10)} color="#fff" />
              <Text style={{color: '#fff', fontSize: hp(3)}}>File</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={['#639cca', '#6600FF']}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
            style={{
              width: wp(40),
              height: hp(22),
              borderRadius: hp(2),
              borderWidth: hp(0.1),
              borderColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => {}}>
              <Icon
                type="light"
                name="folder-minus"
                size={hp(10)}
                color="#fff"
              />
              <Text style={{color: '#fff', fontSize: hp(3)}}>Folder</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp(3),
            height: hp(22),
          }}>
          <LinearGradient
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
            colors={['#639cca', '#6600FF']}
            style={{
              width: wp(40),
              height: hp(22),
              borderRadius: hp(2),
              borderWidth: hp(0.1),
              borderColor: '#fff',
              backgroundColor: '#6600FF',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => {}}>
              <Icon
                type="light"
                name="square-list"
                size={hp(10)}
                color="#fff"
              />
              <Text style={{color: '#fff', fontSize: hp(3)}}>List</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={['#639cca', '#6600FF']}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
            style={{
              width: wp(40),
              height: hp(22),
              borderRadius: hp(2),
              borderWidth: hp(0.1),
              borderColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => {}}>
              <Icon
                type="light"
                name="message-minus"
                size={hp(10)}
                color="#fff"
              />
              <Text style={{color: '#fff', fontSize: hp(3)}}>Message</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Utility;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 2, // Adjust this ratio to achieve the desired height
  },
});

import React, {useEffect, useState} from 'react';
import Left from 'react-native-vector-icons/AntDesign';
import Bell from 'react-native-vector-icons/EvilIcons';
import Menu from 'react-native-vector-icons/Entypo';
import Serch from 'react-native-vector-icons/EvilIcons';
import Prograss from 'react-native-vector-icons/Entypo';
import Chart from 'react-native-vector-icons/FontAwesome5';
import Clinder from 'react-native-vector-icons/AntDesign';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-fontawesome-pro';
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
// import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../Styles/colors';
import Card from '../Card';
import fontFamily from '../../Styles/fontFamily';
import fontSize from '../../Styles/fontSize';

const HeaderTop = ({
  iconName,
  iconColor1,
  text,
  iconName2,
  iconColor2,
  onPressIcon,
}) => {
  const navigation = useNavigation();
  const handleNavigate = (routeName, clearStack, params) => {
    navigation.navigate(routeName, params);
    if (clearStack) {
      console.log('Clear');
    }
  };
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 20;

  return (
    <>
      <StatusBar backgroundColor={'#1C37A4'} barStyle="Light-content" />
      <View style={{flex:1}}>
      <View style={styles.mainHeader}>
        <View style={styles.headerChild}>
          <View style={styles.headerRow}>
            <View>
              <View
                style={{
                  width: wp(50),
                  height: hp(7.9),
                  flexDirection: 'row',
                  backgroundColor: '#1C37A4',
                }}>
                <View
                  style={{
                    width: wp(12),
                    height: hp(6),
                    backgroundColor: '#58D68D ',
                    borderRadius: hp(2),
                    marginVertical: hp(1),
                    marginRight: hp(3),
                  }}>
                  <Image
                    style={{width: wp(12), height: hp(6), borderRadius: hp(1)}}
                    source={{uri: 'artg'}}
                    resizeMode="cover"
                  />
                </View>
                <View style={{marginTop: hp(0.5)}}>
                  <View>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: hp(1.5),
                        fontWeight: '600',
                        marginTop: hp(1),
                        fontFamily: fontFamily.ceraBlack,
                      }}>
                      Welcome
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                    <View style={{marginRight: hp(1)}}>
                      <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                        <View style={{marginRight: hp(1)}}>
                          <Text style={styles.zetext}>Zeeshan Hafeez</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{marginTop: hp(2), marginRight: hp(2)}}
              onPress={() => handleNavigate('Notification')}>
              <Icon name="bell" size={25} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressIcon}
              style={{marginTop: hp(1.3)}}>
              <Menu name="menu" size={40} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.headerRow}>
          <View>
            <View
              style={{
                marginTop: hp(2),
                width: wp(90),
                height: hp(6),
                flexDirection: 'row',
                backgroundColor: '#fff',
                justifyContent: 'space-between',
                marginHorizontal: hp(2.5),
                borderRadius: hp(1),
                shadowColor: '#000',
                shadowOpacity: 0.5,
                shadowRadius: 4,
                elevation: 4,
              }}>
              <View
                style={{
                  width: wp(45),
                  height: hp(6),
                  backgroundColor: '#58D68D ',
                  borderRadius: hp(2),
                  marginVertical: hp(1.5),
                  marginHorizontal: hp(2),
                }}>
                <Text>Search Employee</Text>
              </View>

              <View style={{marginTop: hp(1), marginRight: hp(1)}}>
                <Serch name="search" size={40} color="#292D32" />
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            width: wp(80),
            position: 'relative',
            height: hp(6),
            flexDirection: 'row',
            marginHorizontal: hp(9),
            marginVertical: hp(2),
          }}>
          <View style={{width: wp(10)}}>
            <Image
              style={{width: wp(10), height: hp(5), borderRadius: hp(50)}}
              source={{uri: 'hcl'}}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              marginRight: hp(5),
              width: wp(10),
              position: 'absolute',
              zIndex: 2,
              marginLeft: hp(4),
            }}>
            <Image
              style={{width: wp(10), height: hp(5), borderRadius: hp(50)}}
              source={{uri: 'rfd'}}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              marginRight: hp(5),
              width: wp(10),
              position: 'absolute',
              zIndex: 2,
              marginLeft: hp(8),
            }}>
            <Image
              style={{width: wp(10), height: hp(5), borderRadius: hp(50)}}
              source={{uri: 'hcl'}}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              marginRight: hp(5),
              width: wp(10),
              position: 'absolute',
              zIndex: 2,
              marginLeft: hp(12),
            }}>
            <Image
              style={{width: wp(10), height: hp(5), borderRadius: hp(50)}}
              source={{uri: 'fg'}}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              marginRight: hp(5),
              width: wp(10),
              position: 'absolute',
              zIndex: 2,
              marginLeft: hp(16),
            }}>
            <Image
              style={{width: wp(10), height: hp(5), borderRadius: hp(50)}}
              source={{uri: 'asd'}}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              marginRight: hp(5),
              width: wp(10),
              position: 'absolute',
              zIndex: 2,
              marginLeft: hp(20),
            }}>
            <Image
              style={{width: wp(10), height: hp(5), borderRadius: hp(50)}}
              source={{uri: 'ssl'}}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              marginRight: hp(5),
              width: wp(10),
              position: 'absolute',
              zIndex: 2,
              marginLeft: hp(24),
            }}>
            <Image
              style={{width: wp(10), height: hp(5), borderRadius: hp(50)}}
              source={{uri: 'btc'}}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
      </View>

      {/* <View style={styles.botContainer}>
        <View
          style={{
            width: wp(30),
            height: hp(9),
            justifyContent: 'space-between',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <View style={{alignContent: 'center', marginHorizontal: hp(4)}}>
            <Prograss name="progress-two" size={40} color="#AED6F1" />
          </View>
          <View
            style={{
              alignContent: 'center',
              marginHorizontal: hp(1),
              width: wp(30),
            }}>
            <Text style={{paddingHorizontal: hp(2), fontWeight: 'bold'}}>
              3.7 Years
            </Text>
            <Text>Service Length</Text>
          </View>
        </View>
        <View
          style={{
            width: wp(30),
            height: hp(9),
            justifyContent: 'space-between',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <View style={{alignContent: 'center', marginHorizontal: hp(4)}}>
            <Chart name="chart-area" size={40} color="#AED6F1" />
          </View>
          <View
            style={{
              alignContent: 'center',
              marginHorizontal: hp(1),
              width: wp(30),
            }}>
            <Text style={{paddingHorizontal: hp(2.5), fontWeight: 'bold'}}>
              Regular
            </Text>
            <Text style={{paddingHorizontal: hp(3)}}>Status</Text>
          </View>
        </View>

        <View
          style={{
            width: wp(30),
            height: hp(9),
            justifyContent: 'space-between',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <View style={{alignContent: 'center', marginHorizontal: hp(4)}}>
            <Clinder name="calendar" size={40} color="#AED6F1" />
          </View>
          <View
            style={{
              alignContent: 'center',
              marginHorizontal: hp(1),
              width: wp(30),
            }}>
            <Text style={{paddingHorizontal: hp(2.5), fontWeight: 'bold'}}>
              08:59:05
            </Text>
            <Text style={{paddingHorizontal: hp(2)}}>Attendance</Text>
          </View>
        </View>
      </View> */}

      {/* <View>
        <Card/>
      </View> */}
    </>
  );
};

export default HeaderTop;

const styles = EStyleSheet.create({
  mainHeader: {
    // flex:wp(0.3),
    width: wp(100),
    height: hp(30),
    backgroundColor: '#1C37A4',
    borderBottomRightRadius: hp(2.5),
    borderBottomLeftRadius: hp(2.5),
  },
  headerChild: {
    marginTop: hp(5),
    flexDirection: 'row',
    width: wp(90),
    justifyContent: 'space-between',
    marginHorizontal: hp(2),
  },
  textstyle: {
    color: '#fff',
    fontSize: hp(2),
    marginTop: hp(0.5),
  },
  headerRow: {
    justifyContent: 'space-between',
  },
  botContainer: {
    backgroundColor: '#F0F3F4',
    marginTop: hp(2),
    flexDirection: 'row',
    width: wp(90),
    justifyContent: 'space-between',
    marginHorizontal: hp(2.5),
  },
  zetext: {
    color: '#fff',
    fontSize: fontSize.extraSmall,
    fontWeight: '600',
    fontFamily: fontFamily.ceraBlack,
  },
});

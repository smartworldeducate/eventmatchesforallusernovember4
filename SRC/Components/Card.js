import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {BottomSheet} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import Check from 'react-native-vector-icons/AntDesign';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontSize from '../Styles/fontSize';
import fontFamily from '../Styles/fontFamily';
import Icon from 'react-native-fontawesome-pro';
import colors from '../Styles/colors';
export default function Card() {
  const [visible, setVisible] = useState(false);
  const [iconType,setType]=useState(false)
  const handleReset = () => {
    setVisible(false);
  };
  const typeHandler=()=>{
    setType(!iconType)
  }
  const data = [1, 2, 3, 4, 5];
  return (
    <View style={{flex: 1}}>
      <BottomSheet
        isVisible={visible}
        style={{
          backgroundColor:colors.appBackGroundColor,
          flex: 1,
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#1C37A5', '#4D69DC']}
          style={styles.mainHeader}>
          <View
            style={{
              marginHorizontal: hp(2.5),
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'relative',
            }}>
            <View
              style={{
                justifyContent: 'center',
                marginTop: hp(0),
                height: hp(5),
              }}>
              <Text style={{color: '#fff', paddingBottom: hp(0.1)}}>
                Massages
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={handleReset}
                style={{justifyContent: 'center', marginTop: hp(0)}}>
                <Icon type="light" name="xmark" size={hp(3)} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
        <View style={{flex: 1, height: hp(84)}}>
          <View style={styles.detailcard}>
            <View style={{marginHorizontal: hp(1)}}>
              <View
                style={{
                  width: wp(50),
                  height: hp(7.9),
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    marginVertical: hp(1.5),
                    paddingHorizontal: hp(0.5),
                  }}>
                  <Image
                    style={{
                      width: wp(12),
                      height: hp(6),
                      borderRadius: hp(50),
                    }}
                    source={{uri: 'artg'}}
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{
                    marginLeft: hp(0.5),
                    justifyContent: 'center',
                    marginTop: hp(-0.7),
                  }}>
                  <View>
                    <Text style={styles.cduserName}>Zeeshan Abdual Hafeez</Text>
                  </View>
                  <View style={{marginRight: hp(1)}}>
                    <Text style={styles.cdctitle}>May 22,2023</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{marginTop: hp(-1)}}>
              <Text style={styles.longdesc}>
              React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities
              </Text>
            </View>
            <View style={{}}>
              <Image
                style={{height: hp(35), borderRadius: hp(1)}}
                resizeMode="contain"
                source={{
                  uri: 'https://images.ctfassets.net/xmu5vdhtphau/6iYvUHa5loS3AIXjd2Jymf/0e341cb5a38a6ef9c1898e916262fb9a/social-bg-7.png',
                }}
              />
            </View>
            {/* <View
              style={{
                height: hp(0.1),
                backgroundColor: '#cdcdcd',
                borderRadius: hp(50),
              }}></View> */}
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: '#FFF', height: hp(8)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: hp(2.5),
              marginVertical: hp(0.5),
            }}>
            <TouchableOpacity
              style={{
                width: wp(20),
                marginTop: hp(1),
                borderRadius: hp(1),
                height: hp(5),
                borderWidth: 1,
                borderColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* <Text style={styles.viewbtn}>View </Text> */}
            </TouchableOpacity>
            <TouchableOpacity
            onPress={typeHandler}
              style={{
                width: wp(20),
                marginTop: hp(1),
                borderRadius: hp(1),
                height: hp(5),
                borderWidth: 1,
                borderColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Icon type={iconType ? 'solid':'light'} name='heart' color='red' size={hp(4)}/>
              {/* <Text style={styles.viewbtn}>Like </Text> */}
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
      <View style={{marginTop: hp(3)}}>
        <View style={styles.cardHeading}>
          <View>
            <Text style={styles.message}>Messages</Text>
          </View>
          <View>
            <Text style={styles.viewAll}>View All</Text>
          </View>
        </View>
        <ScrollView
          horizontal={true}
          style={styles.container}
          showsHorizontalScrollIndicator={false}>
          {data.map((e, i) => {
            return (
              <TouchableOpacity
                onPress={() => setVisible(true)}
                style={styles.card}
                key={i}>
                <View style={{marginHorizontal: hp(1)}}>
                  <View
                    style={{
                      width: wp(50),
                      height: hp(7.9),
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        marginVertical: hp(1.5),
                        paddingHorizontal: hp(0.5),
                      }}>
                      <Image
                        style={{
                          width: wp(7),
                          height: hp(3.5),
                          borderRadius: hp(50),
                        }}
                        source={{uri: 'artg'}}
                        resizeMode="cover"
                      />
                    </View>
                    <View
                      style={{
                        marginLeft: hp(0.5),
                        justifyContent: 'center',
                        marginTop: hp(-0.7),
                      }}>
                      <View>
                        <Text style={styles.userName}>
                          Zeeshan Abdual Hafeez
                        </Text>
                      </View>
                      <View style={{marginRight: hp(1)}}>
                        <Text style={styles.ctitle}>May 22,2023</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{marginHorizontal: hp(1.5), marginTop: hp(-2)}}>
                  <Text
                    style={styles.cardText}
                    numberOfLines={4}
                    ellipsizeMode={'tail'}>
                    React Native is an open-source UI software framework created by Meta Platforms about at Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: hp(1),
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    height: hp(18),
    width: wp(80),
    borderRadius: hp(2),
    margin: 10,
    marginRight: hp('1.5'),
  },
  bootContText: {
    fontSize: fontSize.extraSmall,
    fontWeight: '600',
    fontFamily: fontFamily.ceraLight,
    color: '#979797',
  },

  ctitle: {
    marginTop: hp(-0.3),
    fontSize: '0.5rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    letterSpacing: '-0.00938rem',
    color: '#979797',
    fontStyle: 'normal',
  },
  message: {
    fontSize: '0.7rem',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBold,
    color: '#646464',
    fontStyle: 'normal',
  },
  viewAll: {
    fontSize: '0.6rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    color: '#646464',
    fontStyle: 'normal',
  },
  userName: {
    fontSize: '0.6rem',
    fontWeight: '700',
    fontFamily: fontFamily.ceraLight,
    fontStyle: 'normal',
    // letterSpacing: '0.00938rem',
    color: '#6A6A6A',
  },
  cardText: {
    fontSize:'0.6rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    // letterSpacing: '0.00938rem',
    color: '#979797',
    marginTop: hp(0.5),
    fontStyle: 'normal',
    lineHeight: hp(1.9),
    // letterSpacing:hp(0.1),
    // textTransform: 'uppercase',
    textAlign:'left'
  },
  cardHeading: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: hp(2.3),
  },
  mainHeader: {
    height: hp(8),
    backgroundColor: '#1C37A4',
    borderBottomRightRadius: hp(0),
    borderBottomLeftRadius: hp(0),
  },
  smalltext: {
    fontWeight: '700',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraBold,
    color: '#353535',
    fontStyle: 'normal',
  },
  smalltext1: {
    fontWeight: '500',
    fontSize: '0.5rem',
    fontFamily: fontFamily.ceraMedium,
    color: '#979797',
    fontStyle: 'normal',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  zetext: {
    color: '#363636',
    fontWeight: '500',
    fontSize: '1rem',
    fontFamily: fontFamily.ceraLight,
    fontStyle: 'normal',
  },
  zetext1: {
    color: '#363636',
    fontWeight: '500',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
  },
  longdesc: {
    fontWeight: '500',
    fontSize: '0.62rem',
    fontFamily: fontFamily.ceraMedium,
    color: '#979797',
    fontStyle: 'normal',
    alignItems: 'center',
    lineHeight: hp(1.8),
    padding: hp(1.5),
    lineHeight: hp(2),
    letterSpacing:hp(0.1),
    textAlign:'left'
  },
  detailcard: {
    marginHorizontal: hp(2.5),
    marginTop: hp(2),
    borderRadius: hp(0.4),
  },
  cduserName: {
    fontSize: '0.7rem',
    fontWeight: '700',
    fontFamily: fontFamily.ceraLight,
    fontStyle: 'normal',
    letterSpacing: '0.00938rem',
    color: '#6A6A6A',
    marginTop: hp(1.5),
  },
  cdctitle: {
    marginTop: hp(-0.3),
    fontSize: '0.65rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    letterSpacing: '-0.00938rem',
    color: '#979797',
    fontStyle: 'normal',
  },
  viewbtn: {
    color: '#fff',
    fontWeight: '500',
    fontSize: '0.8rem',
    fontFamily: fontFamily.ceraLight,
    fontStyle: 'normal',
    paddingLeft: hp(0.5),
  },
});

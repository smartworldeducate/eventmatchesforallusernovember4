import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import fontFamily from '../Styles/fontFamily';
import fontSize from '../Styles/fontSize';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Notification = props => {
  const data = [
    {
      id: 1,
      image: 'rfd',
      name: 'Muhammad Moeez',
      desc: 'Lörem ipsum agnostisiv ekograf alltså best prest inte Helena Marti nsson. Das ryliga Das ryliga vir og  gra nska seliga...',
    },
    {
      id: 2,
      image: 'hcl',
      name: 'Ahmad Zahid',
      desc: 'Lörem ipsum agnostisiv ekograf alltså best prest inte Helena Marti nsson. Das ryliga Das ryliga vir og  gra nska seliga...',
    },
    {
      id: 3,
      image: 'asd',
      name: 'Salman Ali',
      desc: 'Lörem ipsum agnostisiv ekograf alltså best prest inte Helena Marti nsson. Das ryliga Das ryliga vir og  gra nska seliga...',
    },
    {
      id: 4,
      image: 'btc',
      name: 'Umair Rehan',
      desc: 'Lörem ipsum agnostisiv ekograf alltså best prest inte Helena Marti nsson. Das ryliga Das ryliga vir og  gra nska seliga...',
    },
    {
      id: 5,
      image: 'asd',
      name: 'Muhammad Qasim',
      desc: 'Lörem ipsum agnostisiv ekograf alltså best prest inte Helena Marti nsson. Das ryliga Das ryliga vir og  gra nska seliga...',
    },
    {
      id: 6,
      image: 'btc',
      name: 'Shahzad Ali',
      desc: 'Lörem ipsum agnostisiv ekograf alltså best prest inte Helena Marti nsson. Das ryliga Das ryliga vir og  gra nska seliga...',
    },
    {
      id: 7,
      image: 'artg',
      name: 'Ahmad Zahid',
      desc: 'Lörem ipsum agnostisiv ekograf alltså best prest inte Helena Marti nsson. Das ryliga Das ryliga vir og  gra nska seliga...',
    },
    {
      id: 8,
      image: 'rfd',
      name: 'Umai Thair',
      desc: 'Lörem ipsum agnostisiv ekograf alltså best prest inte Helena Marti nsson. Das ryliga Das ryliga vir og  gra nska seliga...',
    },
    {
      id: 9,
      image: 'hcl',
      name: 'Ahmad Zahid',
      desc: 'Lörem ipsum agnostisiv ekograf alltså best prest inte Helena Marti nsson. Das ryliga Das ryliga vir og  gra nska seliga...',
    },
  ];
  const [appDiv, setAppDiv] = useState(false);
  const [penDiv, setPenDiv] = useState(true);
  const handleApprove = props => {
    setAppDiv(true);
    setPenDiv(false);
  };
  return (
    <>
      <View style={{marginBottom: hp(2)}}>
        <MainHeader
          text={'Notifications'}
          iconName={'arrowleft'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <ScrollView style={{flex:1}}>
        {data.map((item, i) => {
          return (
            <View style={{width: wp(100), marginTop: hp(-1.7)}} key={i}>
              <View style={styles.card}>
                <View style={{marginHorizontal: hp(1), marginVertical: hp(1)}}>
                  <View>
                    <View
                      style={{
                        width: wp(50),
                        height: hp(7.9),
                        flexDirection: 'row',
                        //   backgroundColor: '#1C37A4',
                      }}>
                      <View
                        style={{
                          width: wp(12),
                          height: hp(6),
                          backgroundColor: '#58D68D ',
                          borderRadius: hp(2),
                          marginVertical: hp(0.5),
                          //   marginRight: hp(3),
                        }}>
                        <Image
                          style={{
                            width: wp(6),
                            height: hp(3),
                            borderRadius: hp(1),
                          }}
                          source={{uri: item.image}}
                          resizeMode="cover"
                        />
                      </View>
                      <View style={{marginTop: hp(0.5), marginLeft: hp(-2)}}>
                        <View>
                          <Text style={styles.zetext}>{item.name}</Text>
                        </View>
                        <View style={{}}>
                          <View style={{}}>
                            <Text
                              style={{
                                color: 'gray',
                                fontSize: hp(1.1),
                                fontWeight: '600',
                              }}>
                              May 22,2023
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{width: wp(80), marginHorizontal: hp(1)}}>
                  <View style={{marginTop: hp(-4.8), width: wp(78)}}>
                    <Text style={styles.zetext1}>{item.desc}</Text>
                  </View>
                </View>
                <View style={{width: wp(90), flexDirection: 'row'}}>
                  {appDiv && (
                    <View
                      style={{
                        width: wp(30.2),
                        height: hp(3.8),
                        borderRadius: hp(50),
                        justifyContent: 'center',
                        backgroundColor: '#F6CA45',
                      }}>
                      <View
                        style={{
                          alignContent: 'center',
                          alignItems: 'center',
                          fontSize: hp(1.2),
                        }}>
                        <Text style={{fontSize: hp(1.2), color: '#343434'}}>
                          Approval Pending
                        </Text>
                      </View>
                    </View>
                  )}
                  {penDiv && (
                    <TouchableOpacity
                      onPress={handleApprove}
                      style={{flexDirection: 'row'}}>
                      <View
                        style={{
                          width: wp(25.2),
                          height: hp(3.8),
                          borderRadius: hp(50),
                          justifyContent: 'center',
                          backgroundColor: '#1C37A4',
                        }}>
                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            fontSize: hp(1.2),
                          }}>
                          <Text style={{fontSize: hp(1.5), color: '#fff'}}>
                            APPROVE
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          width: wp(25.2),
                          marginLeft: hp(1),
                          height: hp(3.8),
                          borderRadius: hp(50),
                          justifyContent: 'center',
                          backgroundColor: '#EB4C35',
                        }}>
                        <View
                          style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            fontSize: hp(1.2),
                          }}>
                          <Text style={{fontSize: hp(1.5), color: '#fff'}}>
                            DECLINE
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
                <View
                  style={{
                    width: wp(94),
                    backgroundColor: '#CACFD2',
                    height: hp(0.1),
                    marginLeft: hp(-1),
                    marginTop: hp(2),
                  }}></View>
              </View>
            </View>
          );
        })}
      
      </ScrollView>
    </>
  );
};

export default Notification;

const styles = EStyleSheet.create({
  heading: {
    fontSize: hp(2),
    paddingHorizontal: hp(2),
  },

  card: {
    flex: 1,
    // backgroundColor: '#fff',

    height: hp(18),
    width: wp(90),
    // borderRadius: 5,
    marginHorizontal: hp(2.5),
  },
  zetext: {
    color: '#363636',
    fontWeight: '700',
    fontSize: '0.5rem',
    fontFamily: fontFamily.ceraBlack,
  },
  zetext1: {
    color: '#363636',
    fontWeight: '500',
    // marginTop: hp(1),
    fontSize: '0.5rem',
    fontFamily: fontFamily.ceraBlack,
  },
  smalltext: {
    fontWeight: '700',
    fontSize: '0.7375rem',
    fontFamily: fontFamily.ceraBlack,
    color: '#353535',
    fontStyle: 'normal',
  },
  smalltext1: {
    fontWeight: '500',
    fontSize: '0.5rem',
    fontFamily: fontFamily.ceraBlack,
    color: '#353535',
    fontStyle: 'normal',
    alignItems: 'center',
  },
});

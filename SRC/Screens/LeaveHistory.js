import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import Icon from 'react-native-fontawesome-pro';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontFamily from '../Styles/fontFamily';
import EStyleSheet from 'react-native-extended-stylesheet';
const LeaveHistory = props => {
  const data1 = [
    {
      id: 1,
      iconName: 'user',
      textName: 'Personal Information',
      fatherName: 'Abdual Hafeez',
      gender: 'Male',
      religin: 'Islam',
      date: '08 oct 1991',
      cnic: '31101-8356254-5',
      month: 'June  2023',
    },
    {
      id: 2,
      iconName: 'user-gear',
      textName: 'Service Information',
      fatherName: 'Abdual Hafeez',
      month: 'May  2023',
    },
    {
      id: 3,
      iconName: 'money-bill-1-wave',
      textName: 'Financial Information',
      fatherName: 'Abdual Hafeez',
      month: 'April  2023',
    },
    {
      id: 4,
      iconName: 'clipboard-check',
      textName: 'Movement Log',
      fatherName: 'Abdual Hafeez',
      month: 'March  2023',
    },
    {
      id: 5,
      iconName: 'child',
      textName: 'Children in Beaconhouse',
      fatherName: 'Abdual Hafeez',
      month: 'Feb  2023',
    },
    {
      id: 6,
      iconName: 'user',
      textName: 'Personal Information',
      fatherName: 'Abdual Hafeez',
      month: 'Jan  2023',
    },
  ];
  const [clinder, setClinder] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [inheight, setInHeight] = useState(null);
  const toggleExpansion = item => {
    setInHeight(item);
    setExpanded(!expanded);
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [60, 200], // Change this value to control the expanded height
  });
  const data = [
    {id: 1, text: '17-06-2023', number: 'Full Toil', month: '2020'},
    {id: 2, text: '08:40:33', number: '08:44:47', month: '2021'},
    {id: 3, text: '08:40:33', number: '08:17:03', month: '2022'},
    {id: 4, text: '17-06-2023', number: '08:17:03', month: '2023'},
    {id: 5, text: '17-06-2023', number: '08:17:03', month: '2024'},
    {id: 6, text: '08:40:33', number: '08:44:47', month: '2025'},
    {id: 7, text: '08:40:33', number: '5,000', month: '2026'},
    {id: 8, text: '17-06-2023', number: '08:17:03', month: '2027'},
    {id: 9, text: '17-06-2023', number: 'Weekend', month: '2028'},
    {id: 10, text: '08:40:33', number: 'Full Toil', month: '2029'},
    {id: 11, text: '17-06-2023', number: '08:44:47', month: '2030'},
    {id: 12, text: '17-06-2023', number: '08:17:03', month: '2031'},
  ];
  const [def, setDef] = useState(true);
  const clinderHandler = item => {
    setClinder(item);
    setDef(false);
    console.log('my item  time out', item);
  };
  return (
    <View style={{flex: 1}}>
      <View>
        <MainHeader
          text={'Leave History'}
          iconName={'arrow-left'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <View style={{marginHorizontal: hp(2.5)}}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            marginTop: hp(2.5),
            marginHorizontal: hp(2.5),
            justifyContent: 'center',
          }}
          showsHorizontalScrollIndicator={false}>
          {data?.map((item, i) => {
            <TouchableOpacity activeOpacity={0.8} onPress={() => {}} key={i}>
              <View
                style={{
                  height: hp(4.3),
                  paddingHorizontal: hp(2.7),
                  borderRadius: hp(20),
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: i == 2 ? '#4D69DC' : ' ',
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: i == 2 ? '#FFF' : 'gray',
                      fontSize: hp(1.5),
                    }}>
                    {item.month}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>;
            return (
              <>
                {clinder == item.id && (
                  <TouchableOpacity activeOpacity={0.8} key={i}>
                    <View
                      style={{
                        height: hp(3.7),
                        paddingHorizontal: hp(2),
                        borderRadius: hp(20),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#4D69DC',
                        marginHorizontal: hp(1.5),
                      }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#FFF',
                            fontSize: hp(1.5),
                            paddingHorizontal: hp(0.5),
                          }}>
                          {item.month}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
                {clinder !== item.id && (
                  <TouchableOpacity
                  activeOpacity={0.8}
                    onPress={() => clinderHandler(item.id)}
                    key={i}>
                    <View
                      style={{
                        height: hp(3.7),
                        paddingHorizontal: hp(2.7),
                        justifyContent: 'center',
                        alignItems: 'center',
                        // borderRadius: item == 3 ? hp(20):'',
                        // backgroundColor:item == 3 ? '#4D69DC':'',
                      }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color: 'gray',
                            fontSize: hp(1.5),
                          }}>
                          {item.month}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              </>
            );
          })}
        </ScrollView>
      </View>
      <View style={{marginHorizontal: hp(2.5), marginTop: hp(2)}}>
        {data1.map((item, i) => {
          return (
            <View style={{}} key={i}>
              <TouchableOpacity
              activeOpacity={0.8}
                onPress={() => toggleExpansion(item.id)}
                style={{
                  width: wp(90),
                  borderRadius: hp(2),
                  backgroundColor: '#FFF',
                  shadowColor: '#000',
                  shadowOpacity: 0.4,
                  shadowRadius: 1,
                  elevation: 4,
                  marginTop: hp(1.8),
                }}>
                {inheight == item.id && (
                  <Animated.View
                    style={{
                      height,
                      overflow: 'hidden',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{paddingVertical: hp(1.5)}}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingHorizontal: hp(1.5),
                          marginVertical: hp(0.7),
                        }}>
                        <Text style={styles.smalltext}>{item.month}</Text>
                      </View>
                    </View>
                    <View style={{paddingVertical: hp(1.5)}}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginRight: hp(1.5),
                          marginVertical: hp(1.5),
                        }}>
                        <Icon
                          type="light"
                          name="arrow-right"
                          size={hp(2)}
                          color="#cdcdcd"
                          Size={hp(2)}
                        />
                      </View>
                    </View>
                  </Animated.View>
                )}
                {inheight !== item.id && (
                  <Animated.View
                    style={{
                      height: hp(7.5),
                      overflow: 'hidden',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{paddingVertical: hp(1.5)}}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingHorizontal: hp(1.5),
                          marginVertical: hp(0.7),
                        }}>
                        <Text style={styles.smalltext}>{item.month}</Text>
                      </View>
                    </View>
                    <View style={{paddingVertical: hp(1.5)}}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginRight: hp(1.5),
                          marginVertical: hp(1.5),
                        }}>
                        <Icon
                          type="light"
                          name="arrow-right"
                          size={hp(2)}
                          color="#cdcdcd"
                          Size={hp(2)}
                        />
                      </View>
                    </View>
                  </Animated.View>
                )}
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default LeaveHistory;

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
  iconSty: {
    fontFamily: fontFamily.ceraBlack,
    fontSize: hp(2),
    color: '#A6ACAF',
    fontWeight: 100,
  },
  expandtext: {
    fontWeight: '500',
    fontSize: '0.7rem',
    fontFamily: fontFamily.ceraMedium,
    color: '#363636',
    fontStyle: 'normal',
  },
  expandtext1: {
    fontWeight: '100',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    color: '#363636',
    fontStyle: 'normal',
  },
  zetext: {
    color: '#363636',
    fontWeight: '700',
    fontSize: '0.9rem',
    fontFamily: fontFamily.ceraBlack,
  },
  zetext1: {
    color: '#363636',
    fontWeight: '500',
    // marginTop: hp(1),
    fontSize: '0.7rem',
    fontFamily: fontFamily.ceraBlack,
  },
  smalltext: {
    fontWeight: '700',
    fontSize: '0.65rem',
    fontFamily: fontFamily.ceraBold,
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
  dtext: {
    color: '#353535',
    fontSize: '0.8rem',
    fontWeight: '700',
    fontStyle: 'normal',
    paddingVertical: hp(0.5),
    fontFamily: fontFamily.ceraBlack,
  },
  centertext: {
    fontFamily: fontFamily.ceraBlack,
    fontSize: '0.75rem',
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#363636',
  },
  ststext: {
    fontFamily: fontFamily.ceraBlack,
    paddingHorizontal: hp(2.5),
    paddingVertical: hp(0.5),
    textTransform: 'uppercase',
  },
  childname: {
    color: '#353535',
    fontFamily: fontFamily.ceraBold,
    fontSize: '0.6rem',
    fontWeight: '700',
    fontStyle: 'normal',
  },
  number: {
    color: '#2D8E00',
    backgroundColor: '#D4FFCC',
    borderRadius: hp(50),
    paddingHorizontal: hp(0.8),
    fontFamily: fontFamily.ceraBold,
    fontSize: '0.5rem',
    fontWeight: '700',
    fontStyle: 'normal',
  },
  dob: {
    color: '#363636',
    fontFamily: fontFamily.ceraMedium,
    fontSize: '0.5rem',
    fontWeight: '300',
    fontStyle: 'normal',
  },
  dobdata: {
    color: '#353535',
    // backgroundColor: '#D4FFCC',
    borderRadius: hp(50),
    paddingHorizontal: hp(0.8),
    fontFamily: fontFamily.ceraMedium,
    fontSize: '0.55rem',
    fontWeight: '300',
    fontStyle: 'normal',
  },
});

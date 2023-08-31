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
const Utility = props => {
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
          text={'Utility'}
          iconName={'arrow-left'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <View style={{marginHorizontal: hp(2.5), marginTop: hp(2)}}>
        <View>
          <TouchableOpacity
            // onPress={() => toggleExpansion(item.id)}
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
            <Animated.View
              style={{
                height: hp(7),
                overflow: 'hidden',
                flexDirection: 'row',
                marginHorizontal: hp(1),
                marginVertical: hp(1),
              }}>
              <View style={{width: wp(15)}}>
                <Icon
                  type="light"
                  name="square-list"
                  size={hp(7)}
                  color="#cdcdcd"
                />
              </View>
              <View style={{marginTop: hp(0.3)}}>
                <View>
                  <Text style={styles.smalltext}>
                    {' '}
                    BeaconHouse School Event
                  </Text>
                </View>
                <View style={{width: wp(70)}}>
                  <Text style={styles.smalltext1}>
                    React Native is an open-source UI software React Native is
                    an open-source UI software
                  </Text>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginHorizontal: hp(2.5)}}>
        <View>
          <TouchableOpacity
            // onPress={() => toggleExpansion(item.id)}
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
            <Animated.View
              style={{
                height: hp(7),
                overflow: 'hidden',
                flexDirection: 'row',
                marginHorizontal: hp(1),
                marginVertical: hp(1),
              }}>
              <View style={{width: wp(15)}}>
                <Icon
                  type="light"
                  name="people-group"
                  size={hp(7)}
                  color="#cdcdcd"
                />
              </View>
              <View style={{marginTop: hp(0.3)}}>
                <View>
                  <Text style={styles.smalltext}> BeaconHouse Teams</Text>
                </View>
                <View style={{width: wp(70)}}>
                  <Text style={styles.smalltext1}>
                    React Native is an open-source UI software React Native is
                    an open-source UI software
                  </Text>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginHorizontal: hp(2.5)}}>
        <View>
          <TouchableOpacity
            // onPress={() => toggleExpansion(item.id)}
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
            <Animated.View
              style={{
                height: hp(7),
                overflow: 'hidden',
                flexDirection: 'row',
                marginHorizontal: hp(1),
                marginVertical: hp(1),
              }}>
              <View style={{width: wp(15)}}>
                <Icon type="light" name="coins" size={hp(7)} color="#cdcdcd" />
              </View>
              <View style={{marginTop: hp(0.3)}}>
                <View>
                  <Text style={styles.smalltext}> BeaconHouse Finance</Text>
                </View>
                <View style={{width: wp(70)}}>
                  <Text style={styles.smalltext1}>
                    React Native is an open-source UI software React Native is
                    an open-source UI software
                  </Text>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginHorizontal: hp(2.5)}}>
        <View>
          <TouchableOpacity
            // onPress={() => toggleExpansion(item.id)}
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
            <Animated.View
              style={{
                height: hp(7),
                overflow: 'hidden',
                flexDirection: 'row',
                marginHorizontal: hp(1),
                marginVertical: hp(1),
              }}>
              <View style={{width: wp(15)}}>
                <Icon type="light" name="play" size={hp(7)} color="#cdcdcd" />
              </View>
              <View style={{marginTop: hp(0.3)}}>
                <View>
                  <Text style={styles.smalltext}> BeaconHouse Finance</Text>
                </View>
                <View style={{width: wp(70)}}>
                  <Text style={styles.smalltext1}>
                    React Native is an open-source UI software React Native is
                    an open-source UI software
                  </Text>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginHorizontal: hp(2.5)}}>
        <View>
          <TouchableOpacity
            // onPress={() => toggleExpansion(item.id)}
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
            <Animated.View
              style={{
                height: hp(7),
                overflow: 'hidden',
                flexDirection: 'row',
                marginHorizontal: hp(1),
                marginVertical: hp(1),
              }}>
              <View style={{width: wp(15)}}>
                <Icon
                  type="light"
                  name="people-group"
                  size={hp(7)}
                  color="#cdcdcd"
                />
              </View>
              <View style={{marginTop: hp(0.3)}}>
                <View>
                  <Text style={styles.smalltext}> BeaconHouse Teams</Text>
                </View>
                <View style={{width: wp(70)}}>
                  <Text style={styles.smalltext1}>
                    React Native is an open-source UI software React Native is
                    an open-source UI software
                  </Text>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginHorizontal: hp(2.5)}}>
        <View>
          <TouchableOpacity
            // onPress={() => toggleExpansion(item.id)}
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
            <Animated.View
              style={{
                height: hp(7),
                overflow: 'hidden',
                flexDirection: 'row',
                marginHorizontal: hp(1),
                marginVertical: hp(1),
              }}>
              <View style={{width: wp(15)}}>
                <Icon type="light" name="coins" size={hp(7)} color="#cdcdcd" />
              </View>
              <View style={{marginTop: hp(0.3)}}>
                <View>
                  <Text style={styles.smalltext}> BeaconHouse Finance</Text>
                </View>
                <View style={{width: wp(70)}}>
                  <Text style={styles.smalltext1}>
                    React Native is an open-source UI software React Native is
                    an open-source UI software
                  </Text>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginHorizontal: hp(2.5)}}>
        <View>
          <TouchableOpacity
            // onPress={() => toggleExpansion(item.id)}
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
            <Animated.View
              style={{
                height: hp(7),
                overflow: 'hidden',
                flexDirection: 'row',
                marginHorizontal: hp(1),
                marginVertical: hp(1),
              }}>
              <View style={{width: wp(15)}}>
                <Icon type="light" name="play" size={hp(7)} color="#cdcdcd" />
              </View>
              <View style={{marginTop: hp(0.3)}}>
                <View>
                  <Text style={styles.smalltext}> BeaconHouse Finance</Text>
                </View>
                <View style={{width: wp(70)}}>
                  <Text style={styles.smalltext1}>
                    React Native is an open-source UI software React Native is
                    an open-source UI software
                  </Text>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Utility;

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
    fontFamily: fontFamily.ceraMedium,
    color: '#cdcdcd',
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

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
import {ScrollView, TextInput} from 'react-native-gesture-handler';

const HeaderTop = ({
  iconName,
  iconColor1,
  text,
  iconName2,
  iconColor2,
  onPressIcon,
}) => {
  const data = [
    {id: 1, image: 'one'},
    {id: 2, image: 'two'},
    {id: 3, image: 'five'},
    {id: 4, image: 'imran'},
    {id: 5, image: 'im'},
    {id: 6, image: 'ssl'},
    {id: 7, image: 'artg'},
  ];
  const navigation = useNavigation();
  const handleNavigate = (routeName, clearStack, params) => {
    navigation.navigate(routeName, params);
    if (clearStack) {
      console.log('Clear');
    }
  };

  const [employeeId, setEmployeeId] = useState();
  const [employeePassword, setEmployeePassword] = useState();

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 20;

  const onChangeEmpId = val => {
    setEmployeeId(val);
  };
  const onChangeEmpPassword = val => {
    setEmployeePassword(val);
  };

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onPressLogin = () => {
    handleNavigate('HomeScreen');
  };
  return (
    <>
      <StatusBar backgroundColor={'#1C37A4'} barStyle="Light-content" />
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
                <View style={{marginTop: hp(0.5), marginLeft: hp(-1.5)}}>
                  <View>
                    <Text style={styles.ztitle}>Welcome</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                    <View style={{marginRight: hp(1)}}>
                      <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                        <View style={{marginRight: hp(1)}}>
                          <Text style={styles.zetext1}>Zeeshan Hafeez</Text>
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
              <Icon name="bell" size={hp(3)} color="#fff" />
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
                marginTop: hp(1),
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
                  marginHorizontal: hp(1),
                }}>
                <TextInput
                  value={employeeId}
                  onChangeText={onChangeEmpId}
                  returnKeyType={'done'}
                  iconName={'user'}
                  placeholder={'Search Employee'}
                  placeholderColor={'gray'}
                  iconColor={colors.loginIconColor}
                  placeholderTextColor="gray"
                  style={styles.textInputCustomStyle}></TextInput>
              </View>
              <View style={{marginTop: hp(0.5), marginRight: hp(1)}}>
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
            marginHorizontal: hp(10),
            marginVertical: hp(1.5),
          }}>
          {data.map((item, i) => {
            return (
              <View style={{width: wp(10), marginLeft: hp(-1)}}>
                <Image
                  style={{width: wp(10), height: hp(5), borderRadius: hp(50)}}
                  source={{uri: item.image}}
                  resizeMode="cover"
                />
              </View>
            );
          })}
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
            <Icon name="bars-progress" size={35} color="#AED6F1" />
          </View>
          <View
            style={{
              alignContent: 'center',
              marginHorizontal: hp(1),
              width: wp(30),
            }}>
            <Text style={[styles.bootContText1, {marginLeft: hp(0)}]}>
              3.7 Years
            </Text>
            <Text style={[styles.bootContText2, {marginLeft: hp(-1.5)}]}>
              Service Length
            </Text>
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
            <Icon name="chart-area" size={35} color="#AED6F1" />
          </View>
          <View
            style={{
              alignContent: 'center',
              marginHorizontal: hp(1),
              width: wp(30),
            }}>
            <Text style={[styles.bootContText1, {}]}>Regular</Text>
            <Text style={[styles.bootContText2, {paddingLeft: hp(2.5)}]}>
              Status
            </Text>
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
            <Clinder name="calendar" size={35} color="#AED6F1" />
          </View>
          <View
            style={{
              alignContent: 'center',
              marginHorizontal: hp(1),
              width: wp(30),
            }}>
            <Text style={styles.bootContText1}>08:59:05</Text>
            <Text style={[styles.bootContText2, {paddingLeft: hp(1.5)}]}>Attendance</Text>
          </View>
        </View>
      </View> */}

      {/* <View>
        <Card />
      </View> */}
    </>
  );
};

export default HeaderTop;

const styles = EStyleSheet.create({
  mainHeader: {
    marginTop: hp(1),
    width: wp(100),
    height: hp(28),
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
    // width: wp(90),
    // justifyContent: 'space-between',
    marginHorizontal: hp(3.5),
  },
  zetext: {
    color: '#fff',
    fontSize: fontSize.small,
    fontWeight: '100',
    fontFamily: fontFamily.ceraBlack,
  },
  bootContText: {
    fontSize: '0.5rem',
    fontWeight: '900',
    fontFamily: fontFamily.ceraBlack,
    paddingHorizontal: hp(3),
    color: '#979797',
  },
  bootContText2: {
    fontSize: '0.5rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraBlack,
    paddingHorizontal: hp(2),
    color: '#979797',
    textTransform: 'uppercase',
  },
  bootContText1: {
    fontSize: '0.7rem',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBlack,
    fontStyle: 'normal',
    paddingHorizontal: hp(2),
    color: '#353535',
  },
  zetext1: {
    color: '#fff',
    fontSize: '0.9rem',
    fontWeight: '100',
    fontFamily: fontFamily.ceraBlack,
  },

  ztitle: {
    color: '#fff',
    fontSize:'0.5rem',
    fontWeight: '600',
    marginTop: hp(1),
    fontFamily: fontFamily.ceraBlack,
  },
  textInputCustomStyle: {
    fontSize: hp('1.65'),
    height: hp('6'),
    letterSpacing: -0.05,
    paddingLeft: wp('3'),
    color: colors.loginIconColor,
  },
});

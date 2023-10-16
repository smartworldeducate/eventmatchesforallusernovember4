import React, {useEffect, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-fontawesome-pro';
import {useSelector} from 'react-redux';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
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
import colors from '../../Styles/colors';
import Card from '../Card';
import fontFamily from '../../Styles/fontFamily';
import fontSize from '../../Styles/fontSize';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HeaderTop = ({
  iconName,
  iconColor1,
  text,
  iconName2,
  iconColor2,
  onPressIcon,
  item,
}) => {
  // console.log('item data', item);
  
  const [localData, setLocalData] = useState(null);
  // const {EMP_PHOTO,EMP_DEPT,EMP_NAME}=item
  const data = [
    {id: 1, image: 'igt'},
    {id: 2, image: 'salman'},
    {id: 3, image: 'qasim'},
    {id: 4, image: 'imran'},
    {id: 5, image: 'im'},
    {id: 6, image: 'asd'},
    {id: 7, image: 'artg'},
  ];
  async function getData(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // console.log('Data retrieved successfully:', value);
        const parsedData = JSON.parse(value);
        setLocalData(parsedData);
        return value;
      } else {
        console.log('No data found for key:', key);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  }
  // console.log(' header lacal data', localData?.EMP_PHOTO);
  useEffect(() => {
    getData('loginData');
  }, []);
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
    navigation.navigate('Search');
    setEmployeeId('');
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
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#1C37A5', '#4D69DC']}
        style={styles.mainHeader}>
        <View style={styles.headerChild}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.firstRow}
            onPress={() => navigation.navigate('Profile')}>
            <View style={styles.firstRowView}>
              <Image
                style={[styles.userImage, {borderRadius: hp(50)}]}
                source={{uri: 'artg'}}
                resizeMode="cover"
              />
            </View>
            <View style={styles.welcomTitle}>
              <View>
                <Text style={styles.welCome}>Welcome</Text>
              </View>
              <View>
                <Text style={styles.userName}>{localData?.EMP_NAME}</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.firstRowRightSection}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.bell}
              onPress={() => handleNavigate('Notification')}>
              <Icon type="light" name="bell" size={hp(3)} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressIcon} style={styles.menu}>
              <Image
                style={styles.menustyle}
                source={{uri: 'menuicon'}}
                resizeMode="cover"
              />
              {/* <Menu name="menu" size={40} color="#fff" /> */}
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.homeSearch}
          onPress={() => navigation.navigate('Search')}>
          <View style={styles.homesearchView}>
            <TextInput
              value={employeeId}
              onChangeText={text => onChangeEmpId(text)}
              returnKeyType={'done'}
              iconName={'user'}
              placeholder={'Search Employee'}
              placeholderColor={'gray'}
              iconColor={colors.loginIconColor}
              placeholderTextColor="gray"
              placeholderStyle={styles.plaseholderStyle}
              style={styles.textInputCustomStyle}></TextInput>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.searchicon}
            onPress={() => {}}>
            <Icon
              type="light"
              name="magnifying-glass"
              size={hp(3)}
              color="#292D32"
            />
          </TouchableOpacity>
        </TouchableOpacity>

        <View style={styles.headerImageSection}>
          {data.slice(0, 7).map((item, i) => {
            item.id == 6
              ? console.log('lastitem of imagelist', item.id == 6)
              : console.log('lastitem id', item.id);
            if (i < 6) {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Reportee')}
                  style={styles.imageList}
                  key={i}>
                  <Image
                    style={styles.imgStyle}
                    source={{uri: item.image}}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              );
            } else {
              return (
                <View style={styles.imageList} key={i}>
                  <ImageBackground
                    style={styles.imgStyle}
                    source={{uri: item.image}}
                    resizeMode="cover">
                    <View style={styles.overlyImage}>
                      <Icon
                        type="regular"
                        name="plus"
                        size={hp(2.5)}
                        color="#fff"
                      />
                    </View>
                  </ImageBackground>
                </View>
              );
            }
          })}
        </View>
      </LinearGradient>
    </>
  );
};

export default HeaderTop;

const styles = EStyleSheet.create({
  mainHeader: {
    height: hp(26.5),
    borderBottomRightRadius: hp(2.5),
    borderBottomLeftRadius: hp(2.5),
  },
  headerChild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: hp(2),
  },
  textstyle: {
    color: '#fff',
    fontSize: hp(2),
    marginTop: hp(0.5),
  },
  botContainer: {
    backgroundColor: '#F0F3F4',
    marginTop: hp(2),
    flexDirection: 'row',
    marginHorizontal: hp(3.5),
  },
  zetext: {
    color: '#fff',
    fontSize: fontSize.small,
    fontWeight: '100',
    fontFamily: fontFamily.ceraLight,
  },
  bootContText: {
    fontSize: '0.5rem',
    fontWeight: '900',
    fontFamily: fontFamily.ceraLight,
    paddingHorizontal: hp(3),
    color: '#979797',
  },
  bootContText2: {
    fontSize: '0.5rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraLight,
    paddingHorizontal: hp(2),
    color: '#979797',
    textTransform: 'uppercase',
  },
  bootContText1: {
    fontSize: '0.7rem',
    fontWeight: '700',
    fontFamily: fontFamily.ceraLight,
    fontStyle: 'normal',
    paddingHorizontal: hp(2),
    color: '#353535',
  },
  userName: {
    color: '#fff',
    fontSize: '0.75rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
  },

  welCome: {
    color: '#fff',
    fontSize: '0.575rem',
    fontWeight: '300',
    marginTop: hp(0.5),
    fontFamily: fontFamily.ceraLight,
    fontStyle: 'normal',
    paddingBottom: hp(0.2),
  },
  textInputCustomStyle: {
    width: wp(80),
    // fontSize: hp('1.65'),
    height: hp('6'),
    letterSpacing: -0.05,
    paddingLeft: wp('3'),
    color: '#292D32',
    fontSize: '0.7rem',
    fontWeight: '300',
    fontFamily: fontFamily.ceraLight,
  },
  firstRow: {
    width: wp(50),
    height: hp(7.9),
    flexDirection: 'row',
    paddingTop: hp(1),
  },
  homeSearch: {
    marginTop: hp(2.2),
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginHorizontal: hp(2.5),
    borderRadius: hp(1.5),
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  welcomTitle: {marginTop: hp(1), marginLeft: hp(-2)},
  imageList: {
    width: wp(10.7),
    marginLeft: hp(-0.5),
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: hp(50),
  },
  homesearchView: {
    width: wp(45),
    height: hp(6),
    backgroundColor: '#58D68D ',
    borderRadius: hp(2),
    marginHorizontal: hp(1),
  },
  firstRowView: {
    width: wp(12),
    height: hp(6),
    borderRadius: hp(2),
    marginVertical: hp(1),
    marginRight: hp(3),
  },
  userImage: {width: wp(12), height: hp(6), borderRadius: hp(1)},
  firstRowRightSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: hp(0.6),
  },
  bell: {marginTop: hp(1), marginRight: hp(2)},
  menu: {marginTop: hp(1.3)},
  headerImageSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(2.5),
  },
  imgStyle: {width: wp(10), height: hp(5), borderRadius: hp(50)},
  menustyle: {
    width: '1.3rem',
    height: '1rem',
  },
  searchicon: {marginTop: hp(1.5), marginRight: hp(2)},
  placeholderStyle: {
    fontSize: '0.575rem',
    fontWeight: '300',
    fontFamily: fontFamily.ceraLight,
    fontStyle: 'normal',
  },
  overlyImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(1),
  },
});

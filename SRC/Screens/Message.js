import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
  ActivityIndicator,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useCallback, useMemo, useRef, useEffect, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {BottomSheet} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import Check from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import RenderHtml from 'react-native-render-html';
import HTMLView from 'react-native-htmlview';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontSize from '../Styles/fontSize';
import fontFamily from '../Styles/fontFamily';
import Icon from 'react-native-fontawesome-pro';
import colors from '../Styles/colors';
import {useDispatch, useSelector} from 'react-redux';
import {empMessageHandler} from '../features/message/createSlice';
import HeaderTop from '../Components/Headers/HeaderTop';
import {detailMessageHandler} from '../features/detailMessage/createSlice';
export default function Messages(props) {
  const {width} = useWindowDimensions();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [iconType, setType] = useState(false);
  const [localData, setLocalData] = useState(null);
  const [msgData, setMsgData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [msDetail, setMsDetail] = useState(null);
  const [offset, setOffset] = useState(1); // Initial offset
  //   const messagData = useSelector(state => state.empMessageState);
  async function getData(key) {
    // setAnimodal(true)
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const parsedData = JSON.parse(value);
        setLocalData(parsedData);
        const empMsg = await dispatch(
          empMessageHandler({
            employeeId: parsedData?.EMPLOYEE_ID,
            ofset: offset,
          }),
        );
        setMsgData([...msgData, ...empMsg?.payload?.data]);
        // setMsgData(empMsg?.payload?.data);
        setFilterData([...filterData, ...empMsg?.payload?.data]);
        // setAnimodal(false)
        return value;
      } else {
        console.log('No data found for key:', key);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  }

  useEffect(() => {
    const filtered =
      filterData &&
      filterData?.filter(item =>
        item.MSG_SUBJECT.toLowerCase().includes(searchText.toLowerCase()),
      );
    // console.log('filter data', filtered);

    // console.log('filterdata', filterData);

    if (searchText == '') {
      getData('loginData');
    } else {
      setFilterData(filtered);
    }
  }, [searchText]);

  const handleSearch = query => {
    setSearchText(query);
  };

  useEffect(() => {
    getData('loginData');
  }, []);

  const detailMessagePress = async item => {
    setSelectedItemId(item);
    setVisible(true);
    console.log('detail message====', item?.MSG_ID);
    const empMsg = await dispatch(
      detailMessageHandler({messageId: item?.MSG_ID}),
    );

    const dtmsg = Object.assign({}, ...empMsg?.payload?.data);
    console.log('detail message', dtmsg);
    setMsDetail(dtmsg);
  };

  //when user scroll down then this function will be call
  const handleLoadMore = async () => {
    // console.log('loadmore function call');
    setOffset(filterData?.length);
    await getData('loginData');
  };

  const handleReset = () => {
    setVisible(false);
  };

  const typeHandler = () => {
    setType(!iconType);
  };

  const renderFooter = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            width: wp(20),
            height: hp(10),
            backgroundColor: '#EAFAF1',
            borderRadius: hp(50),
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: hp(15),
          }}>
          <View style={{}}>
            <ActivityIndicator size={'large'} color="blue" />
          </View>
        </View>
      </View>
    );
  };

  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => detailMessagePress(item?.item)}
        style={styles.cardview}>
        <View>
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
                source={{uri: 'qasim'}}
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
                <Text style={styles.userName}>{item?.item.EMP_NAME}</Text>
              </View>
              <View style={{marginRight: hp(1)}}>
                <Text style={styles.ctitle}>{item?.item.HIRE_DATE}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: hp(1.5), marginTop: hp(-2)}}>
          <Text
            style={styles.cardText}
            numberOfLines={5}
            ellipsizeMode={'tail'}>
            {item?.item?.MSG_SUBJECT}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const tagsStyles = {
    body: {
      whiteSpace: 'normal',
      color: '#aaa',
    },
    div: {color: 'blue', fontSize: 16},
    p: {
      color: '#000',
      fontSize: hp(1.5),
      lineHeight: hp(1.8),
      fontFamily: fontFamily.ceraMedium,
    }, // Customize color and font size for paragraph tags
    span: {color: 'green'},
  };

  return (
    <View style={{flex: 1}}>
      <BottomSheet
        isVisible={visible}
        style={{
          backgroundColor: colors.appBackGroundColor,
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
              paddingBottom: hp(2.5),
              // position: 'relative',
            }}>
            <View
              style={{
                justifyContent: 'center',
                marginTop: hp(0),
                // height: hp(5),
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
                activeOpacity={0.8}
                onPress={handleReset}
                style={{justifyContent: 'center', marginTop: hp(0)}}>
                <Icon type="light" name="xmark" size={hp(3)} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
        <ScrollView style={{flex: 1, height: hp(84), backgroundColor: '#fff'}}>
          <View style={styles.detailcard}>
            <View style={{}}>
              <View
                style={{
                  width: wp(50),
                  height: hp(7.9),
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    marginVertical: hp(1.5),
                    paddingHorizontal: hp(0),
                  }}>
                  <Image
                    style={{
                      width: wp(12),
                      height: hp(6),
                      borderRadius: hp(50),
                    }}
                    source={{uri: 'qasim'}}
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
                    <Text style={styles.cduserName}>
                      {selectedItemId?.EMP_NAME}
                    </Text>
                  </View>
                  <View style={{marginRight: hp(1)}}>
                    <Text style={styles.cdctitle}>
                      {selectedItemId?.HIRE_DATE}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{marginHorizontal: hp(1), marginVertical: hp(1)}}>
              <Text
                style={{
                  color: '#072374',
                  fontSize: hp(1.8),
                  fontWeight: 'bold',
                }}>
                {msDetail?.ASMSG_TITLE}
              </Text>
            </View>
            <View style={{marginHorizontal: hp(0.7)}}>
              <Text
                style={{
                  fontSize: hp('1.85'),
                  color: colors.appColor,
                  marginBottom: hp('2'),
                }}></Text>
              <View
                contentInsetAdjustmentBehavior="automatic"
                style={{marginTop: hp(-6), flex: 1}}>
                <RenderHtml
                  contentWidth={width}
                  source={{
                    html: msDetail
                      ? '<p>' + msDetail.MSG_DETAIL_SUBSTRING + '</p>'
                      : '',
                  }}
                  stylesheet={{color: 'blue'}}
                  tagsStyles={tagsStyles}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{flex: 1, backgroundColor: '#FFF', height: hp(8)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: hp(2.5),
              marginVertical: hp(0.5),
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
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
              activeOpacity={0.8}
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
              <Icon
                type={iconType ? 'solid' : 'light'}
                name="thumbs-up"
                color="#1C37A4"
                size={hp(4)}
              />
              {/* <Text style={styles.viewbtn}>Like </Text> */}
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#1C37A5', '#4D69DC']}
        style={styles.mainHeaderTop}>
        <View
          style={{
            marginHorizontal: hp(2.5),
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'relative',
            marginTop: hp(1),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: hp(3.5),
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => props.navigation.goBack()}
              style={{justifyContent: 'center', marginTop: hp(0)}}>
              <Icon type="light" name="arrow-left" size={hp(3)} color="#fff" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              marginTop: hp(3.5),
              height: hp(5),
              backgroundColor: '#fff',
              flex: 0.9,
              borderRadius: hp(5),
            }}>
            <View style={styles.homesearchView}>
              <TextInput
                onChangeText={handleSearch}
                value={searchText}
                returnKeyType={'done'}
                iconName={'user'}
                placeholder={'Search Employee'}
                placeholderColor={'gray'}
                iconColor={colors.loginIconColor}
                placeholderTextColor="gray"
                placeholderStyle={styles.plaseholderStyle}
                underlineColorAndroid="transparent"
                style={styles.textInputCustomStyle}></TextInput>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View style={{flex: 1}}>
        <FlatList
          data={filterData}
          renderItem={renderItem}
          keyExtractor={item => item.EMPLOYEE_ID}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={1}
          ListFooterComponent={renderFooter}
        />
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
    fontSize: '0.6rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    // letterSpacing: '0.00938rem',
    color: '#979797',
    marginTop: hp(0.5),
    fontStyle: 'normal',
    lineHeight: hp(1.9),
    // letterSpacing:hp(0.1),
    // textTransform: 'uppercase',
    textAlign: 'left',
  },
  cardHeading: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: hp(2.3),
  },
  mainHeaderTop: {
    height: hp(15),
    backgroundColor: '#1C37A4',
    borderBottomRightRadius: hp(0),
    borderBottomLeftRadius: hp(0),
    // alignItems:'center',
    justifyContent: 'center',
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
    letterSpacing: hp(0.1),
    textAlign: 'left',
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
  cardview: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    height: hp(18),
    marginHorizontal: hp(2),
    borderRadius: hp(2),
    marginTop: hp(2),
  },
  textInputCustomStyle: {
    height: hp('6'),
    letterSpacing: -0.05,
    paddingLeft: wp('3'),
    color: '#292D32',
    fontSize: '0.7rem',
    fontWeight: '300',
    fontFamily: fontFamily.ceraLight,
  },
});

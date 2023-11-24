import React, {useEffect, useState, useCallback, useRef} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-fontawesome-pro';
import QRCodeScanner from 'react-native-qrcode-scanner';
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
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import {
  useLinkProps,
  useNavigation,
  CommonActions,
} from '@react-navigation/native';
import {Toast} from 'galio-framework';
import {BottomSheet} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import fontFamily from '../Styles/fontFamily';
import fontSize from '../Styles/fontSize';
import colors from '../Styles/colors';
import Menu from 'react-native-vector-icons/AntDesign';
// import Sop from 'react-native-vector-icons/Entypo';

import Ball from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import {getAllTags} from '../features/tags/tagSlice';
import {getAllCats} from '../features/category/allCatSlice';
import {filterCats} from '../features/category/singleCatSlice';
import {useFocusEffect} from '@react-navigation/native';
import { getSingleTag } from '../features/tagsingle/singletagSlice';
import { handleScaneer } from '../features/scan/scanSlice';
const Scanner = props => {
  const tgData = useSelector(state => state.getAllTags);
  const catData = useSelector(state => state.getAllCats);
  const dispatch = useDispatch();
  const param = props.route.params;
  // console.log('lacalData data===', param);
  const [refreshing, setRefreshing] = useState(false);
  const [tagData, setTagData] = useState([]);
  const [catgory, setCategory] = useState([]);
  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [animodal, setAnimodal] = useState(false);
  const [animation, setAnimation] = useState(true);
  const [modalState,setModalState]=useState(false)
  const [isShow, setShow] = useState(false);
  const [visibleBtn, setVisibleBtn] = useState(false);
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState({
    scan: false,
    ScanResult: false,
    result: '',
  });
  const {scan, ScanResult, result} = state;

 


  const scanner = useRef(null);
  const handleZoomIn = () => {
    if (scanner.current) {
      scanner.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (scanner.current) {
      scanner.current.zoomOut();
    }
  };
  const onSuccess = async e => {
    const check = e.data.substring(0, 4);
    setState({
      result: e,
      scan: false,
      ScanResult: true,
    });
    if (check === 'http') {
      Linking.openURL(e.data).catch(err =>
        console.error('An error occured', err),
      );
    } else {
    
        await dispatch(
          handleScaneer({
            tag_id: e.data,
            employeeId: param?.EMPLOYEE_ID,
          }),
        );
      
      setState({
        result: e.data,
        scan: false,
        ScanResult: true,
      });
      const catData = await dispatch(getSingleTag({employee_id: param?.EMPLOYEE_ID}));
      await setTagData(catData?.payload?.data);
      setVisible(false);
      // console.log('scan data', e.data);
      setModalState(true)
      
    }
  };

  const activeQR = e => {
    setState({
      scan: true,
    });
  };

  const handleQrcode = () => {
    setVisible(true);
    activeQR('active qr');
  };

  const handleReset = () => {
    setState({scan: false});
    setVisible(false);
  };

  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.tag_desc
          ? item.tag_desc.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setTagData(newData);
      setSearch(text);
    } else {
      setTagData(masterDataSource);
      setSearch(text);
    }
  };
  const handleTags = async () => {
    setAnimodal(true);
    const tagData = await dispatch(getAllTags());
    if (tagData !== '') {
      await setTagData(tagData?.payload?.data);
      await setMasterDataSource(tagData?.payload?.data);
    }
    setInterval(() => {
      setAnimodal(false);
    }, 1000);
  };

  // const getAllCatHandle = async () => {
  //   const catData = await dispatch(getAllCats());
  //   if (catData !== '') {
  //     await setCategory(catData?.payload?.data);
  //   }
  // };

  const handleFilter = async category_id => {
    setAnimodal(true);
    const flData = await dispatch(filterCats({employeeId: category_id}));
    if (flData !== '') {
      setTagData(flData?.payload?.data);
    }
    setInterval(() => {
      setAnimodal(false);
    }, 1000);
  };

  useFocusEffect(
    useCallback(() => {
      handleTags();
    }, []),
  );
  useEffect(() => {
    // console.log('selector alltag data', tgData?.user);
    setTagData(tgData?.user);
    setMasterDataSource(tgData?.user);
    setCategory(catData?.user);
    // handleTags();
    // getAllCatHandle();
  }, []);

  const navigation = useNavigation();
  const handleNavigate = (routeName, clearStack, params) => {
    navigation.navigate(routeName, params);
    if (clearStack) {
      console.log('Clear');
    }
  };

  const [employeeId, setEmployeeId] = useState();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          Platform.OS === 'android'
            ? colors.appBackGroundColor
            : colors.appBackGroundColor,
      }}>
      <Toast
        isShow={isShow}
        positionIndicator="top"
        style={{
          backgroundColor: '#F1948A',
          width: wp(90),
          marginHorizontal: hp(2.5),
          borderRadius: 5,
        }}>
        <Text style={{color: '#fff'}}>please enter valid Qrcode</Text>
      </Toast>
      {modalState && (<View >
          <Modal isVisible={modalState}>
          {tagData && tagData?.map((item,i)=>{
                return(<View style={{width:wp(80),height:hp(20),backgroundColor:'#cdcdcd',marginHorizontal:hp(2.3),borderRadius:hp(2),}} key={i}>
             
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <View></View>
                  <TouchableOpacity onPress={()=>setModalState(false)} style={{width:wp(8),height:hp(4),backgroundColor:'red',borderRadius:hp(5),justifyContent:'center',alignItems:'center',marginTop:hp(-2),marginRight:hp(-2)}}>
                    <Text style={{color:'#fff'}}>X</Text>
                  </TouchableOpacity>
                </View>
                  <View style={{alignItems:'center',marginTop:hp(2)}}>
                    <Text style={{color:'#186A3B',alignContent:'center',paddingLeft:hp(2),fontSize:hp(3)}}>Tag Scan successfully</Text>
                  </View>
                  <View style={{marginLeft:hp(5),marginTop:hp(1)}}>
                  <Text style={{color:'#363636',paddingLeft:hp(2)}}>Tag ID : {item?.tag_id}</Text>
                  <Text style={{color:'#363636',paddingLeft:hp(2)}}>Employee ID  :  {item?.employee_id}</Text>
                  <Text style={{color:'#363636',paddingLeft:hp(2)}}>IN TIME :  {item?.scan_time}</Text>
                  <Text style={{color:'#363636',paddingLeft:hp(2)}}>OUT TIME  :  {item?.scan_time2}</Text>
                  </View>
                 
                </View>)
              })}
            
          </Modal>
        </View>)} 
      {animation && (
        <View>
          <Modal isVisible={animodal}>
            <View
              style={{
                width: wp(30),
                height: hp(15),
                backgroundColor: '#EAFAF1',
                borderRadius: hp(50),
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: hp(15),
              }}>
              <View style={{}}>
                <ActivityIndicator animating={animation} size={'large'} />
              </View>
            </View>
          </Modal>
        </View>
      )}
      <BottomSheet
        isVisible={visible}
        style={{
          width: wp(100),
          height: hp(100),
          backgroundColor: '#fff',
          flex: 1,
        }}>
        <View
          style={{
            width: wp(100),
            position: 'relative',
            zIndex: 1,
            marginBottom: hp(20),
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleReset}
            style={{
              width: wp(10),
              height: hp(5),
              // borderRadius: hp(50),
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 20,
              left: hp(45),
            }}>
            <Text style={{color: 'gray', fontSize: hp(2)}}>X</Text>
          </TouchableOpacity>
        </View>

        {scan && (
          <QRCodeScanner
            cameraStyl={{height: hp(120)}}
            reactivate={true}
            showMarker={true}
            ref={scanner}
            onRead={onSuccess}
            bottomContent={
              <View
                style={{
                  paddingTop: hp(8),
                  flexDirection: 'row',
                  marginTop: hp(8),
                }}></View>
            }
          />
        )}
      </BottomSheet>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#1C37A5', '#4D69DC']}
        style={styles.mainHeader}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.headerChild}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.firstRow}
            onPress={() => navigation.navigate('Profile')}>
            <View style={styles.firstRowView}>
              <Image
                style={styles.userImage}
                source={{uri: 'group'}}
                resizeMode="cover"
              />
            </View>
            <View style={styles.welcomTitle}>
              <View>
                <Text style={styles.welCome}>Welcome</Text>
              </View>
              <View>
                <Text style={styles.userName}>{param?.EMP_NAME}</Text>
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
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => props.navigation.openDrawer()}
              style={styles.menu}>
              <Image
                style={styles.menustyle}
                source={{uri: 'menuicon'}}
                resizeMode="cover"
              />
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
              onChangeText={text => searchFilterFunction(text)}
              returnKeyType={'done'}
              iconName={'user'}
              placeholder={'Search Event'}
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
      </LinearGradient>
      <View style={{zIndex: 1, position: 'absolute', top: hp(23)}}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            height: hp(7),
            paddingLeft: hp(2.5),
            paddingRight: hp(1),
          }}
          showsHorizontalScrollIndicator={false}>
          {catgory &&
            catgory?.map((e, i) => {
              const icon = [
                'grid-view',
                'pause-presentation',
                'card-giftcard',
                'flight-land',
              ];
              const bgcolor = [
                '#46CDFB',
                '#F0635A',
                '#F19561',
                '#29D697',
                '#46CDFB',
                '#F19561',
                '#F19561',
              ];
              if (i == 4) {
                i = 0;
              }
              const {category_id, category_name} = e;
              return (
                <View
                  style={{marginRight: hp(1), justifyContent: 'center'}}
                  key={category_id}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      category_name == 'All'
                        ? handleTags()
                        : handleFilter(category_id)
                    }>
                    <View
                      style={{
                        height: hp(4.3),
                        paddingHorizontal: hp(1.2),
                        borderRadius: hp(2),
                        backgroundColor: bgcolor[i],
                        flexDirection: 'row',
                      }}>
                      <View
                        style={{
                          marginVertical: hp(0.9),
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Ball name={icon[i]} color="white" size={20} />
                      </View>
                      <View
                        style={{
                          marginLeft: hp(0.5),
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingRight: wp(0.75),
                        }}>
                        <Text style={styles.catname}>{category_name}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
        </ScrollView>
      </View>

    
        <ScrollView style={{paddingTop: hp(5),flex:0.9}}>
          {tagData &&
            tagData?.map((e, i) => {
              const {
                tag_id,
                tag_desc,
                tag_logo,
                setup_name,
                scan_time,
                setup_id,
                scan_time2,
              } = e;
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    height: hp(10),
                    flexDirection: 'row',
                    marginHorizontal: hp(2.5),
                    marginBottom: hp(2),
                    backgroundColor: '#FFFFFF',
                    borderRadius: hp(2),
                    shadowColor: '#000',
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                    elevation: 4,
                  }}
                  onPress={() => props.navigation.navigate('ScannerDetail', e)}
                  key={i}>
                  <View
                    style={{
                      height: hp(10),
                      backgroundColor: '#58D68D ',
                      borderRadius: hp(2),
                      marginVertical: hp(1.5),
                      marginHorizontal: hp(1.5),
                      marginRight: hp(2),
                    }}>
                    <Image
                      style={{
                        width: wp(14),
                        height: hp(7),
                        borderRadius: hp(1),
                      }}
                      source={{uri: tag_logo}}
                      resizeMode="cover"
                    />
                  </View>
                  <View>
                    <View style={{marginVertical: hp(0.5)}}>
                      <Text style={styles.desc}>{tag_desc}</Text>
                    </View>

                    {scan_time !== null && (
                      <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                        <View style={{marginRight: hp(1)}}>
                          <Text style={styles.texttime}>
                            TIME {setup_id == 1 ? 'IN ' : 'IN'}{' '}
                            <Text style={styles.times}>{scan_time}</Text>
                          </Text>
                        </View>
                        {scan_time2 !== null && (
                          <View>
                            <Text style={styles.texttime}>
                              {' '}
                              | TIME {setup_id == 2 ? 'OUT' : 'OUT'}{' '}
                              <Text style={styles.times}>{scan_time2}</Text>
                            </Text>
                          </View>
                        )}
                      </View>
                    )}
                    {scan_time == null && (
                      <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                        <View style={{marginRight: hp(1)}}>
                          <Text style={styles.texttime}>
                            TIME IN <Text style={styles.times}> 00:00 |</Text>
                          </Text>
                        </View>
                        {scan_time2 == null && (
                          <View>
                            <Text style={styles.texttime}>
                              TIME OUT <Text style={styles.times}>00:00</Text>
                            </Text>
                          </View>
                        )}
                      </View>
                    )}
                  </View>
                  <View
                    style={{
                      marginVertical: hp(3.5),
                      position: 'absolute',
                      left: hp(40),
                    }}>
                    <Image
                      style={{width: wp(6), height: hp(3)}}
                      source={{uri: scan_time == null ? 'yelo' : 'listicon'}}
                      resizeMode="cover"
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
        <View
        style={{
          backgroundColor: '#fff',
          position: 'relative',
          bottom: hp(0),
          flex:0.1
          
        }}>
        <View
          style={{
            height: hp(7),
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          {/* <View style={{flex:0.1}}></View> */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            style={{flex: 0.2, alignItems: 'center'}}>
            <Menu name="home" size={hp(3)} color="#1C37A4" style={{}} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.navigation.navigate('Index')}
            style={{flex: 0.2, paddingTop: hp(0.5), alignItems: 'center'}}>
            <Icon
              type="light"
              name="book-bookmark"
              size={hp(3)}
              color="#979797"
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleQrcode}
            style={{
              flex: 0.2,
              alignItems: 'center',
            }}>
            <View
              style={{
                height: hp('6'),
                alignItems: 'center',
                width: wp(12),
                borderWidth: hp(0.5),
                borderColor: 'gray',
                borderRadius: hp(50),
                backgroundColor: 'black',
                justifyContent: 'center',
              }}>
              <Icon style={{}} name="qrcode" size={hp(4)} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{flex: 0.2, alignItems: 'center'}}
            onPress={() => {}}>
            <Icon
              type="light"
              name="user-tag"
              size={hp(3.5)}
              color="#979797"
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Profile')}
            style={{flex: 0.2, alignItems: 'center', paddingTop: hp(0)}}>
            <Icon type="light" name="user-tie" size={hp(3)} color="#979797" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Scanner;

const styles = EStyleSheet.create({
  mainHeader: {
    height: hp(26.5),
    borderBottomRightRadius: hp(2.5),
    borderBottomLeftRadius: hp(2.5),
  },
  headerChild: {
    marginTop: hp(4),
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
  catname: {
    color: '#fff',
    fontSize: '0.6rem',
    fontWeight: '500',
    marginTop: hp(0.5),
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    paddingBottom: hp(0.2),
    textTransform: 'uppercase',
  },
  desc: {
    color: '#1D1E29',
    fontSize: '0.7rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    marginTop: hp(1.5),
    textTransform: 'uppercase',
  },
  times: {
    color: '#5669FF',
    fontSize: '0.6rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraBold,
    fontStyle: 'normal',
  },
  texttime: {
    color: '#807A7A',
    fontSize: '0.6rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
  },
});

import React, {useEffect, useState, useCallback} from 'react';
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
  ImageBackground,
  TextInput,
  ScrollView,
  RefreshControl,
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

import LinearGradient from 'react-native-linear-gradient';
import fontFamily from '../Styles/fontFamily';
import fontSize from '../Styles/fontSize';
import colors from '../Styles/colors';
import Menu from 'react-native-vector-icons/AntDesign';
// import Sop from 'react-native-vector-icons/Entypo';
import Gpt from 'react-native-vector-icons/FontAwesome5';
import Saminar from 'react-native-vector-icons/MaterialIcons';
import Camra from 'react-native-vector-icons/MaterialCommunityIcons';
import Ball from 'react-native-vector-icons/MaterialIcons';
import Filter from 'react-native-vector-icons/Octicons';
import Search from 'react-native-vector-icons/Feather';
import Bell from 'react-native-vector-icons/EvilIcons';
import Drop from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';
import {getAllTags} from '../features/tags/tagSlice';
import {getAllCats} from '../features/category/allCatSlice';
import {filterCats} from '../features/category/singleCatSlice';

// import Modal from 'react-native-modal';

import {useFocusEffect} from '@react-navigation/native';
const Scanner = props => {
  const dispatch = useDispatch();
  // const [visible, setVisible] = useState(false)
  // const [success, setSuccess] = useState(false)
  const [refreshing, setRefreshing] = useState(false);
  const [animodal, setAnimodal] = useState(false);
  const [animation, setAnimation] = useState(true);
  const [tagData, setTagData] = useState([]);
  const [catgory, setCategory] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       setFilteredDataSource(responseJson);
  //       setMasterDataSource(responseJson);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setTagData(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setTagData(masterDataSource);
      setSearch(text);
    }
  };
  const handleTags = async () => {
    setAnimodal(true);
    const tagData = await dispatch(getAllTags());
    if (tagData !== '') {
      await setTagData(tagData.payload);
      await setMasterDataSource(tagData.payload);
    }
    setInterval(() => {
      setAnimodal(false);
    }, 1000);
  };

  const getAllCatHandle = async () => {
    const catData = await dispatch(getAllCats());
    if (catData !== '') {
      await setCategory(catData.payload);
      // console.log("tagdata here", data.payload)
    }
  };

  const handleFilter = async category_id => {
    setAnimodal(true);
    // console.log("fsdgfdghfgjgfj", category_id)
    const flData = await dispatch(filterCats({user_id: category_id}));
    if (flData !== '') {
      setTagData(flData.payload);
      // console.log("filter  here", flData.payload)
    }
    setInterval(() => {
      setAnimodal(false);
    }, 1000);
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = query => {
    setSearchQuery(query);

    const filtered = tagData.filter(item =>
      item.tag_desc.toLowerCase().includes(query.toLowerCase()),
    );

    setTagData(filtered);
    if (searchQuery == '') {
      handleTags();
    }
  };
  // console.log("tagdata here",tagData)

  useFocusEffect(
    useCallback(() => {
      handleTags();
    }, []),
  );
  useEffect(() => {
    handleTags();
    getAllCatHandle();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    handleTags();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          Platform.OS === 'android'
            ? colors.appBackGroundColor
            : colors.appBackGroundColor,
      }}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#1C37A5', '#4D69DC']}
        style={styles.mainHeader}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.headerChild}>
          <TouchableOpacity
            style={styles.firstRow}
            onPress={() => navigation.navigate('Profile')}>
            <View style={styles.firstRowView}>
              <Image
                style={styles.userImage}
                source={{uri: 'artg'}}
                resizeMode="cover"
              />
            </View>
            <View style={styles.welcomTitle}>
              <View>
                <Text style={styles.welCome}>Welcome</Text>
              </View>
              <View>
                <Text style={styles.userName}>Zeeshan Hafeez</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.firstRowRightSection}>
            <TouchableOpacity
              style={styles.bell}
              onPress={() => handleNavigate('Notification')}>
              <Icon type="light" name="bell" size={hp(3)} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
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
          style={styles.homeSearch}
          onPress={() => navigation.navigate('Search')}>
          <View style={styles.homesearchView}>
            <TextInput
              value={employeeId}
              onChangeText={text => searchFilterFunction(text)}
              returnKeyType={'done'}
              iconName={'user'}
              placeholder={'Search Employee'}
              placeholderColor={'gray'}
              iconColor={colors.loginIconColor}
              placeholderTextColor="gray"
              placeholderStyle={styles.plaseholderStyle}
              style={styles.textInputCustomStyle}></TextInput>
          </View>
          <TouchableOpacity style={styles.searchicon} onPress={() => {}}>
            <Icon
              type="light"
              name="magnifying-glass"
              size={hp(3)}
              color="#292D32"
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </LinearGradient>
      <ScrollView
        horizontal={true}
        style={{height: hp(8), paddingLeft: hp(2.5), marginTop: hp(-3)}}
        showsHorizontalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#2A72B6', '#203B88']}
            progressBackgroundColor={{color: 'blue'}}
            tintColor={{color: 'blue'}}
          />
        }>
        {catgory?.map((e, i) => {
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
            <View style={{marginRight: hp(1)}} key={category_id}>
              <TouchableOpacity
                onPress={() =>
                  category_name == 'All'
                    ? handleTags()
                    : handleFilter(category_id)
                }>
                <View
                  style={{
                    height: hp(4.2),
                    paddingHorizontal: hp(1.2),
                    borderRadius: hp(2),
                    backgroundColor: bgcolor[i],
                    flexDirection: 'row',
                  }}>
                  <View style={{marginVertical: hp(0.9)}}>
                    <Ball name={icon[i]} color="white" size={20} />
                  </View>
                  <View style={{marginVertical: hp(0.3), marginLeft: hp(0.5)}}>
                    <Text style={styles.catname}>{category_name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {tagData.length >= 6 ? (
        <ScrollView style={{marginTop: hp(3)}}>
          {tagData?.map((e, i) => {
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
                style={{
                  height: hp(10),
                  flexDirection: 'row',
                  marginHorizontal: hp(2.5),
                  marginBottom: hp(2),
                  backgroundColor: 'white',
                  borderRadius: hp(2),
                  shadowColor: '#000',
                  shadowOpacity: 0.5,
                  shadowRadius: 4,
                  elevation: 1,
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
                  <View>
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
      ) : (
        <View style={{marginTop: hp(3)}}>
          {tagData?.map((e, i) => {
            // console.log(e.tag_logo)
            const {
              tag_id,
              tag_desc,
              tag_logo,
              setup_name,
              scan_time,
              setup_id,
            } = e;
            return (
              <TouchableOpacity
                style={{
                  height: hp(10),
                  flexDirection: 'row',
                  marginHorizontal: hp(2.5),
                  marginBottom: hp(2),
                  backgroundColor: 'white',
                  borderRadius: hp(1.3),
                  shadowColor: '#000',
                  shadowOpacity: 0.5,
                  shadowRadius: 4,
                  elevation: 1,
                }}
                onPress={() => props.navigation.navigate('ScannerDetail', e)}
                key={i}>
                <View
                  style={{
                    width: wp(14),
                    height: hp(7),
                    backgroundColor: '#58D68D ',
                    borderRadius: hp(2),
                    marginVertical: hp(1.5),
                    marginHorizontal: hp(1.5),
                    marginRight: hp(2),
                  }}>
                  <Image
                    style={{width: wp(14), height: hp(7), borderRadius: hp(1)}}
                    source={{uri: tag_logo}}
                    resizeMode="cover"
                  />
                </View>
                <View>
                  <View>
                    <Text style={styles.desc}>{tag_desc}</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                    <View style={{marginRight: hp(1)}}>
                      {scan_time == null && (
                        <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                          <View style={{marginRight: hp(1)}}>
                            <Text style={styles.texttime}>
                              TIME IN <Text style={styles.times}>00:00 |</Text>
                            </Text>
                          </View>
                          <View>
                            <Text style={styles.texttime}>
                              TIME OUT <Text style={styles.times}>00:00 </Text>
                            </Text>
                          </View>
                        </View>
                      )}
                      {scan_time !== null && (
                        <Text style={styles.texttime}>
                          TIME {setup_id == 1 ? 'IN' : 'OUT'}{' '}
                          <Text style={styles.times}>{scan_time}</Text>
                        </Text>
                      )}
                    </View>
                  </View>
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
        </View>
      )}
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
  },
  desc: {
    color: '#1D1E29',
    fontSize: '0.9rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    marginTop: hp(1.5),
  },
  times: {
    color: '#5669FF',
    fontSize: '0.7rem',
    fontWeight: '300',
    fontFamily: fontFamily.ceraLight,
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

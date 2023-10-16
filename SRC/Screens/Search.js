import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import fontFamily from '../Styles/fontFamily';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontSize from '../Styles/fontSize';
import LinearGradient from 'react-native-linear-gradient';
import HeaderTop from '../Components/Headers/HeaderTop';
import colors from '../Styles/colors';
import Icon from 'react-native-fontawesome-pro';
import SearchEmp from '../Components/SearchEmp';
import {useSelector} from 'react-redux';
import axios from 'axios';
const Search = props => {
  const [empData, setEmpData] = useState([]);
  const userData = useSelector(state => state.search);
  const allemployeeData = useSelector(state => state.allEmployee);
  useEffect(() => {
    setEmpData(userData);
  });
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);

  const empHandle = async () => {
    const response = await axios.get(
      'https://b2training.beaconhouse.net/beams_ci/index.php/api/getAllEmployee',
      {
        headers: {
          api_key: 'X5Ne0km78x2Q1ykny9FfcIK',
          api_secret: 'Q1X5NeknkyV5v6VkT78y9F',
        },
      },
    );
    setSearchData(response.data?.data);
  };

  const onpressSearch = async search => {
    console.log('search ', search);
    const response = await axios.post(
      'https://b2training.beaconhouse.net/beams_ci/index.php/api/search',
      {searchEmp: search},
      {
        headers: {
          api_key: 'X5Ne0km78x2Q1ykny9FfcIK',
          api_secret: 'Q1X5NeknkyV5v6VkT78y9F',
        },
      },
    );
    setSearchData(response.data?.data);
    console.log('search response', response.data?.data);
  };
  useEffect(() => {
    empHandle();
  }, []);

  const renderItem = (item, index) => {
    return <SearchEmp item={item} />;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.appBackGroundColor}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#1C37A5', '#4D69DC']}
        style={styles.mainHeader}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.headerChild}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.navigation.goBack()}
            style={{
              marginLeft: hp(2),
              marginTop: hp(1.5),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon type="light" name="arrow-left" size={hp(3)} color="#FFF" />
          </TouchableOpacity>
          <View
            style={styles.homeSearch}
            onPress={() => navigation.navigate('Search')}>
            <View style={styles.homesearchView}>
              <TextInput
                onChangeText={text => setSearch(text)}
                value={search}
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
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.searchicon}
              onPress={() => onpressSearch(search)}>
              <Icon
                type="light"
                name="magnifying-glass"
                size={hp(3)}
                color="#292D32"
              />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <View style={{flex: 1, marginTop: hp(2)}}>
        <FlatList
          data={searchData}
          renderItem={renderItem}
          keyExtractor={item => item.EMPLOYEE_ID}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = EStyleSheet.create({
  headerChild: {
    marginTop: hp(7),
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  textstyle: {
    color: '#fff',
    marginTop: hp(0),
    fontSize: '0.9rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
  },
  mainHeader: {
    height: hp(20),
    borderBottomRightRadius: hp(2.5),
    borderBottomLeftRadius: hp(2.5),
  },
  homesearchView: {
    width: wp(71),
    height: hp(6),
    backgroundColor: '#58D68D ',
    borderRadius: hp(2),
  },

  textstyle: {
    color: '#fff',
    fontSize: hp(2),
    marginTop: hp(0.5),
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
  searchicon: {marginTop: hp(1.5), marginRight: hp(2)},
  placeholderStyle: {
    fontSize: '0.575rem',
    fontWeight: '300',
    fontFamily: fontFamily.ceraLight,
    fontStyle: 'normal',
  },

  itemStyle: {
    padding: 10,
    color: '#000',
    fontSize: '0.6rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    lineHeight: hp(1.5),
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
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

import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  TextInput,
  TouchableOpacity,
  Animated,
  Image,
  ScrollView,
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
const Search = props => {

  const data = [
    {
      id: 283831,
      name: 'Muhammad Qasim',
      img: 'qasim',
      desig: 'Manager',
      hdate: '15 Oct,2010',
      dpt: 'IT Department',
      brnch: 'Head office',
      carde: 'Administrative Staff',
      status: 'Regular',
      slength: '3.7 years',
    },
    {
      id: 283832,
      name: 'Muhammad Ayaz',
      img: 'ayaz',
      desig: 'Officer Developer',
      hdate: '15 Oct,2019',
      dpt: 'IT Department',
      brnch: 'Head office',
      carde: 'Administrative Staff',
      status: 'Regular',
      slength: '3.7 years',
    },
    {
      id: 283833,
      name: 'Salman Khan',
      img: 'salman',
      desig: 'Officer Developer',
      hdate: '15 Oct,2019',
      dpt: 'IT Department',
      brnch: 'Head office',
      carde: 'Administrative Staff',
      status: 'Regular',
      slength: '3.7 years',
    },
    {
      id: 283834,
      name: 'Fahad Hussan',
      img: 'igt',
      desig: 'Officer Developer',
      hdate: '15 Oct,2019',
      dpt: 'IT Department',
      brnch: 'Head office',
      carde: 'Administrative Staff',
      status: 'Regular',
      slength: '3.7 years',
    },
    {
      id: 283835,
      name: 'Muhammad Qasim',
      img: 'qasim',
      desig: 'Manager',
      hdate: '15 Oct,2010',
      dpt: 'IT Department',
      brnch: 'Head office',
      carde: 'Administrative Staff',
      status: 'Regular',
      slength: '3.7 years',
    },
    {
      id: 283836,
      name: 'Muhammad Ayaz',
      img: 'ayaz',
      desig: 'Officer Developer',
      hdate: '15 Oct,2019',
      dpt: 'IT Department',
      brnch: 'Head office',
      carde: 'Administrative Staff',
      status: 'Regular',
      slength: '3.7 years',
    },
    {
      id: 283837,
      name: 'Salman Khan',
      img: 'salman',
      desig: 'Officer Developer',
      hdate: '15 Oct,2019',
      dpt: 'IT Department',
      brnch: 'Head office',
      carde: 'Administrative Staff',
      status: 'Regular',
      slength: '3.7 years',
    },
  ];
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

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
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
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
                onChangeText={text => searchFilterFunction(text)}
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
            <TouchableOpacity activeOpacity={0.8} style={styles.searchicon} onPress={() => {}}>
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
      <View style={{flex:1,marginTop:hp(2)}}>
            <ScrollView>
              {data.map((item,i)=>{
                return(<SearchEmp item={item} key={i}/>)
              })}
            </ScrollView>
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

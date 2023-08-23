import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  TextInput,
  TouchableOpacity,
  Animated,
  Image
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
const Search = () => {
  const data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
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
    outputRange: [90, 250], // Change this value to control the expanded height
  });

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <View
      style={{ marginBottom: hp(1.5)}}
      >
      <TouchableOpacity
        onPress={() => toggleExpansion(item.id)}
        style={{
          borderRadius: hp(2),
          backgroundColor: '#FFF',
          shadowColor: '#000',
          shadowOpacity: 0.4,
          shadowRadius: 1,
          elevation: 1,
        }}>
        {inheight == item.id && (
          <Animated.View
            style={{
              height,

              overflow: 'hidden',
            }}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <View
                style={{
                  flex: 0.3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: hp(-2),
                  marginVertical:hp(0.3)
                }}>
                <Image
                  style={{
                    width: wp(18),
                    height: hp(9),
                    marginTop: hp('1.5'),
                    position: 'absolute',
                    top: hp(0),
                  }}
                  source={{uri: 'bss'}}
                  resizeMode="contain"
                />
              </View>
              <View style={{flex: 0.7, marginLeft: hp(-2.5)}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{marginVertical: hp(1.5)}}>
                    <Text style={styles.childname}>
                      Muhammad Moeez Zeeshan
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: hp(2),
                    }}>
                    <Text style={styles.number}>283831</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: hp(-2),
                  }}>
                  <View style={{marginVertical: hp(1.5)}}>
                    <Text style={styles.dob}>DOB :</Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: hp(2),
                    }}>
                    <Text style={styles.dobdata}>15 Oct, 2017</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: hp(-2.5),
                  }}>
                  <View style={{marginVertical: hp(1.5)}}>
                    <Text style={styles.dob}>Designation:</Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: hp(2),
                    }}>
                    <Text style={styles.dobdata}>One Violet</Text>
                  </View>
                </View>
              </View>
            </View>
          </Animated.View>
        )}
        {inheight !== item.id && (
          <Animated.View
            style={{
              height: hp(11),
              overflow: 'hidden',
            }}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <View
                style={{
                  flex: 0.3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: hp(-2),
                  marginVertical:hp(0.3)
                }}>
                <Image
                  style={{
                    width: wp(18),
                    height: hp(9),
                    marginTop: hp('1.5'),
                    position: 'absolute',
                    top: hp(0),
                  }}
                  source={{uri: 'bss'}}
                  resizeMode="contain"
                />
              </View>
              <View style={{flex: 0.7, marginLeft: hp(-2.5)}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{marginVertical: hp(1.5)}}>
                    <Text style={styles.childname}>
                      Muhammad Moeez Zeeshan
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: hp(2),
                    }}>
                    <Text style={styles.number}>283831</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: hp(-2),
                  }}>
                  <View style={{marginVertical: hp(1.5)}}>
                    <Text style={styles.dob}>DOB :</Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: hp(2),
                    }}>
                    <Text style={styles.dobdata}>15 Oct, 2017</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: hp(-2.5),
                  }}>
                  <View style={{marginVertical: hp(1.5)}}>
                    <Text style={styles.dob}>Designation:</Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: hp(2),
                    }}>
                    <Text style={styles.dobdata}>One Violet</Text>
                  </View>
                </View>
              </View>
            </View>
          </Animated.View>
        )}
     
      </TouchableOpacity>
    </View>
      // <View
      //   style={{
      //     height: hp(10),
      //     borderRadius: hp(2),
      //     backgroundColor: '#FFFFFF',
      //     shadowOpacity: 0.5,
      //     justifyContent:'center',      
      //     elevation: 1.5,
      //     marginTop: hp(2),
      //   }}>
      //   <Text style={styles.itemStyle} onPress={() => getItem(item)}>
      //     {item.id}
      //     {'.'}
      //     {item.title.toUpperCase()}
      //   </Text>
      // </View>
    );
  };

  const getItem = item => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#1C37A5', '#4D69DC']}
        style={styles.mainHeader}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.headerChild}>
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
            <TouchableOpacity style={styles.searchicon} onPress={() => {}}>
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
      <View style={{marginHorizontal: hp(2.5), marginTop: hp(2)}}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
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
    justifyContent: 'space-between',
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
    width: wp(80),
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

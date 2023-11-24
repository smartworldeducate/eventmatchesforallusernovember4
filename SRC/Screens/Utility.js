import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Image,
  FlatList,
  Linking,
} from 'react-native';
import {BottomSheet} from '@rneui/themed';
import React, {useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import Icon from 'react-native-fontawesome-pro';
import LinearGradient from 'react-native-linear-gradient';
import {WebView} from 'react-native-webview';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontFamily from '../Styles/fontFamily';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../Styles/colors';
import {useSelector} from 'react-redux';
const Utility = props => {
  const [clinder, setClinder] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [inheight, setInHeight] = useState(null);
  const [visible, setVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState('');
  const utilityData = useSelector(state => state.utilityState);
  console.log('utility data==', utilityData?.user);

  const handleReset = () => {
    setVisible(false);
  };
  const detailMessagePress = async item => {
    console.log('uitem===', item);
    setSelectedItemId(item);
    setVisible(true);
  };

  const [def, setDef] = useState(true);
  const clinderHandler = item => {
    setClinder(item);
    setDef(false);
    console.log('my item  time out', item);
  };

  const handlePress = async item => {
    console.log("item",item)
    setSelectedItemId(item);
    
      await Linking.openURL(item);
   
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={{marginHorizontal: hp(2.5), marginTop: hp(0)}}>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={
              item?.status == 'Y'
                ? () => detailMessagePress(item)
                : () => handlePress(item?.utility_url)
            }
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
              <View style={{width: wp(12), justifyContent: 'center'}}>
                <Icon
                  type="light"
                  name={item.utility_icon}
                  size={hp(5)}
                  color="#cdcdcd"
                />
              </View>
              <View style={{marginTop: hp(0.3), marginTop: hp(0.5)}}>
                <View>
                  <Text style={styles.smalltext}> {item.utility_title}</Text>
                </View>
                <View style={{width: wp(70)}}>
                  <Text style={styles.smalltext1}>{item.utility_desc}</Text>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
    );
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
              position: 'relative',
            }}>
            <View
              style={{
                justifyContent: 'center',
                marginTop: hp(0),
                height: hp(5),
              }}></View>
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
        <View style={{flex: 1, height: hp(92), backgroundColor: 'red'}}>
          <WebView source={{uri: selectedItemId?.utility_url}} />
        </View>
      </BottomSheet>
      <View>
        <MainHeader
          text={'Utility'}
          iconName={'arrow-left'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={utilityData?.user}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={1}
        />
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
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    color: '#B2BABB',
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
  mainHeader: {
    height: hp(8),
    backgroundColor: '#1C37A4',
    borderBottomRightRadius: hp(0),
    borderBottomLeftRadius: hp(0),
    // alignItems:'center',
    justifyContent: 'center',
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
});

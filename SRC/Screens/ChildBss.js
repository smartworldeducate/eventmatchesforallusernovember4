import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontFamily from '../Styles/fontFamily';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Image} from 'react-native';
const ChildBss = props => {
    const data=[1,2,3,4,5,6,7,8]
  return (
    <>
      <View>
        <MainHeader
          text={'Child’s in BSS'}
          iconName={'arrowleft'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <ScrollView style={{flex: 1, marginTop: hp(2)}}>
        {data.map((item,i)=>{
            return(<View style={{marginHorizontal: wp('5'),marginBottom:hp(1.5)}} key={i}>
            <View
              style={{
                marginTop: hp(1),
                height: hp(12),
                borderRadius: hp(2),
                backgroundColor: '#FFFFFF',
                shadowColor: '#000',
                shadowOpacity: 0.4,
                shadowRadius: 2,
                elevation: 6,
              }}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View
                  style={{
                    flex: 0.3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: hp(-2),
                  }}>
                  <Image
                    style={{width: wp(20), marginTop: hp('1.5'), height: hp(10)}}
                    source={{uri: 'bss'}}
                    resizeMode="contain"
                  />
                </View>
                <View style={{flex: 0.7, marginLeft: hp(-1)}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={{color: '#353535'}}>
                        Muhammad Moeez Zeeshan
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(1),
                      }}>
                      <Text
                        style={{
                          color: '#2D8E00',
                          backgroundColor: '#D4FFCC',
                          borderRadius: hp(50),
                          paddingHorizontal: hp(0.8),
                        }}>
                        283831
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={{color: '#353535'}}>DOB :</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(1),
                      }}>
                      <Text
                        style={{
                          color: '#353535',
                          // backgroundColor: '#D4FFCC',
                          borderRadius: hp(50),
                          paddingHorizontal: hp(0.8),
                        }}>
                        15 Oct, 2017
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2.5),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={{color: '#353535'}}>Class Section:</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(1),
                      }}>
                      <Text
                        style={{
                          color: '#353535',
                          // backgroundColor: '#D4FFCC',
                          borderRadius: hp(50),
                          paddingHorizontal: hp(0.8),
                        }}>
                        One Violet
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>)
        })}
        
        <View style={{marginTop: hp('10')}}></View>
      </ScrollView>
    </>
  );
};

export default ChildBss;

const styles = EStyleSheet.create({
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
    fontSize: '0.7375rem',
    fontFamily: fontFamily.ceraBlack,
    color: '#353535',
    fontStyle: 'normal',
  },
  smalltext1: {
    fontWeight: '500',
    fontSize: '0.5rem',
    fontFamily: fontFamily.ceraBlack,
    color: '#353535',
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
});

import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontSize from '../Styles/fontSize';
import fontFamily from '../Styles/fontFamily';
export default function Card() {
  const data = [1, 2, 3, 4, 5];
  return (
    <View style={{marginTop: hp(2), width: wp(100)}}>
      <View
        style={{
          width: wp(90),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={styles.hndCard}>Message</Text>
        </View>
        <View style={{marginLeft: hp(25)}}>
          <Text style={styles.hndCard}>View All</Text>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        style={styles.container}
        showsHorizontalScrollIndicator={false}>
        {data.map((e, i) => {
          return (
            <View style={styles.card} key={i}>
              <View style={{marginHorizontal: hp(1), marginVertical: hp(1)}}>
                <View>
                  <View
                    style={{
                      width: wp(50),
                      height: hp(7.9),
                      flexDirection: 'row',
                      //   backgroundColor: '#1C37A4',
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
                        style={{
                          width: wp(10),
                          height: hp(5),
                          borderRadius: hp(1),
                        }}
                        source={{uri: 'artg'}}
                        resizeMode="cover"
                      />
                    </View>
                    <View style={{marginTop: hp(0.5), marginLeft: hp(-2)}}>
                      <View>
                        <Text style={styles.cardText}>
                          Zeeshan Abdual Hafeez
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                        <View style={{marginRight: hp(1)}}>
                          <View
                            style={{flexDirection: 'row', marginTop: hp(0)}}>
                            <View style={{marginRight: hp(1)}}>
                              <Text style={styles.ctitle}>May 22,2023</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{width: wp(80), marginHorizontal: hp(1)}} >
                <View style={{marginTop: hp(-2), width: wp(78)}}>
                  <Text style={styles.cardText} numberOfLines={4} ellipsizeMode={'tail'}>
                    Lörem ipsum agnostisiv ekograf alltså best prest inte Helena
                    Martinsson. Das ryliga Das ryliga viralgranska seliga: red.
                    Astront Nsson. Das ryliga Das rylig ranska seliga.
                    Lörem ipsum agnostisiv ekograf alltså best prest inte Helena
                    Martinsson. Das ryliga Das ryliga viralgranska seliga: red.
                    Astront Nsson. Das ryliga Das rylig ranska seliga.
                  </Text>
                  
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = EStyleSheet.create({
  heading: {
    paddingHorizontal: hp(2),
  },
  container: {
    paddingHorizontal: hp(1),
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    height: hp(18),
    width: wp(80),
    borderRadius: hp(1.5),
    margin: 10,
    marginRight:hp('1.5')
  },
  bootContText: {
    fontSize: fontSize.extraSmall,
    fontWeight: '600',
    fontFamily: fontFamily.ceraBlack,
    // paddingHorizontal:hp(5),
    color: '#979797',
  },
  cardText: {
    fontSize: '0.75rem',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBlack,
    letterSpacing: '0.00938rem',
    color: '#6A6A6A',
    marginTop: hp(1),
  },
  ctitle: {
    fontSize: '0.55rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraBlack,
    letterSpacing: '0.00938rem',
    color: '#979797',
  },
  hndCard: {
    fontSize: '0.7rem',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBlack,
    // paddingHorizontal:hp(4),
    color: '#343434',
    paddingHorizontal: hp(2.5),
  },
  cardText: {
    fontSize: '0.6rem',
    fontWeight: '300',
    fontFamily: fontFamily.ceraBlack,
    letterSpacing: '0.00938rem',
    color: '#343434',
    marginTop: hp(1),
    // lineHeight:'normal'
   
  },
});

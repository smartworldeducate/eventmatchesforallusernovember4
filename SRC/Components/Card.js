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
    <View style={{marginTop: hp(3)}}>
      <View style={styles.cardHeading}>
        <View>
          <Text style={styles.message}>Messages</Text>
        </View>
        <View>
          <Text style={styles.viewAll}>View All</Text>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        style={styles.container}
        showsHorizontalScrollIndicator={false}>
        {data.map((e, i) => {
          return (
            <View style={styles.card} key={i}>
              <View style={{marginHorizontal: hp(1)}}>
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
                      source={{uri: 'artg'}}
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
                      <Text style={styles.userName}>Zeeshan Abdual Hafeez</Text>
                    </View>
                    <View style={{marginRight: hp(1)}}>
                      <Text style={styles.ctitle}>May 22,2023</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{marginHorizontal: hp(1.5),marginTop:hp(-2)}}>
                <Text
                  style={styles.cardText}
                  numberOfLines={4}
                  ellipsizeMode={'tail'}>
                  Lörem ipsum agnostisiv ekograf alltså best prest inte Helena
                  Martinsson. Das ryliga Das ryliga viralgranska seliga: red.
                  Astront Nsson. Das ryliga Das rylig ranska seliga. Astront
                  Nsson. Das Das.
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: hp(1),
  },
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    fontSize: '0.55rem',
    fontWeight: '300',
    fontFamily: fontFamily.ceraLight,
    letterSpacing: '0.00938rem',
    color: '#343434',
    marginTop: hp(1),
    fontStyle:'normal',
    lineHeight:hp(1.8)
  },
  cardHeading: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: hp(2.3),
  },
});

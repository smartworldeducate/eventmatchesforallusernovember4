import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontFamily from '../Styles/fontFamily';
import colors from '../Styles/colors';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MainHeader from '../Components/Headers/MainHeader';
const Exibitor = props => {
  const [data, setData] = useState([
    {
      image: 'logoaws',
      backgroundColor: '#AFAFAF',
      name: 'Gold',
      disc: 'Aws',
      bgcolor: '#FFF3B3',
      btnColor: '#FFD703',
    },
    {
      image: 'logohonda',
      backgroundColor: '#FFD700',
      name: 'Walls',
      disc: 'Channal',
      bgcolor: '#ECECEC',
      btnColor: '#C4C4C4',
    },
    {
      image: 'nesle',
      backgroundColor: '#FFD700',
      name: 'nesle',
      disc: 'Nesle',
      bgcolor: '#F0D9C2',
      btnColor: '#F9AB5D',
    },
    {
      image: 'oodi',
      backgroundColor: '#FFD700',
      name: 'audi',
      disc: 'Audi',
      bgcolor: '#F0D9C2',
      btnColor: '#F9AB5D',
    },
    {
      image: 'logothree',
      backgroundColor: '#FFD700',
      name: 'adidas',
      disc: 'Adidas',
      bgcolor: '#FFF3B3',
      btnColor: '#FFD703',
    },
    {
      image: 'channal',
      backgroundColor: '#FFD700',
      name: 'channal',
      disc: 'Channal',
      bgcolor: '#FFF3B3',
      btnColor: '#FFD703',
    },

    {
      image: 'logoaws',
      backgroundColor: '#AFAFAF',
      name: 'Gold',
      disc: 'Aws',
      bgcolor: '#FFF3B3',
      btnColor: '#FFD703',
    },
    {
      image: 'logohonda',
      backgroundColor: '#FFD700',
      name: 'Walls',
      disc: 'Channal',
      bgcolor: '#ECECEC',
      btnColor: '#C4C4C4',
    },
    {
      image: 'nesle',
      backgroundColor: '#FFD700',
      name: 'nesle',
      disc: 'Nesle',
      bgcolor: '#F0D9C2',
      btnColor: '#F9AB5D',
    },
    {
      image: 'oodi',
      backgroundColor: '#FFD700',
      name: 'audi',
      disc: 'Audi',
      bgcolor: '#F0D9C2',
      btnColor: '#F9AB5D',
    },
    {
      image: 'logothree',
      backgroundColor: '#FFD700',
      name: 'adidas',
      disc: 'Adidas',
      bgcolor: '#FFF3B3',
      btnColor: '#FFD703',
    },
    {
      image: 'channal',
      backgroundColor: '#FFD700',
      name: 'channal',
      disc: 'Channal',
      bgcolor: '#FFF3B3',
      btnColor: '#FFD703',
    },
  ]);
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'default'}
        translucent
        backgroundColor="transparent"
      />
      <View style={{flex: 0.1}}>
        <MainHeader
          text={'Exhibitor'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <View style={{flex: 0.9, marginHorizontal: hp(2.5), marginTop: hp(3)}}>
        <ScrollView>
          {data.map((card, index) => {
            return (
              <View style={[styles.card]} key={index}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('ExibitoeDetail')}
                  style={styles.cardImgWrapper}>
                  <Image
                    source={{uri: card.image}}
                    resizeMode="contain"
                    style={styles.cardImg}
                  />
                </TouchableOpacity>
                <View
                  style={[styles.cardInfo, {backgroundColor: card.bgcolor}]}>
                  <Text style={styles.cardTitle}>{card.disc}</Text>
                  <View style={{marginTop: hp(1.8), flexDirection: 'row'}}>
                    {/* <ExibitorBtn /> */}
                    <View style={{flex: 0.5}}></View>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate('Sponsor')}
                      style={{
                        flex: 0.5,
                        backgroundColor: card.btnColor,
                        borderRadius: hp(1),
                        alignItems: 'center',
                        width: hp(10),
                        paddingVertical: hp(0.5),
                        marginTop: hp(1),
                        borderColor: '#5669FF',
                        marginBottom: hp(1),
                      }}>
                      <View
                        style={{flexDirection: 'column', alignItems: 'center'}}>
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: 15,
                            fontWeight: '600',
                          }}>
                          {card.name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Exibitor;

const styles = StyleSheet.create({
  cardsWrapper: {
    marginHorizontal: hp(2.5),
  },
  card: {
    height: hp(13),
    marginVertical: hp(1),
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    // backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImgWrapper: {
    backgroundColor: '#fff',
    flex: hp(0.12),
    height: hp(12),
    marginRight: hp(1),
    borderColor: '#cdcdcd',
    borderWidth: 0.5,
    borderRadius: hp(1.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImg: {
    height: '80%',
    width: '80%',
    alignSelf: 'center',

    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    borderColor: '#EBEEF2',
    borderWidth: 1,
    borderRadius: hp(1.5),
    flex: 2.5,
    padding: 10,
    height: hp(12),
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: 18,
    color: colors.blackColor,
    fontFamily:fontFamily.robotoBold
  },
  cardDetails: {
    fontSize: hp(3),
    color: '#1C2833',
  },
});

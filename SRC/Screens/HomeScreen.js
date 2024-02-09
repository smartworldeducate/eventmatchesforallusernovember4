import React, { useEffect, useState, useRef, useCallback } from 'react';
import Ficon from 'react-native-fontawesome-pro';
import Menu from 'react-native-vector-icons/Entypo';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-fontawesome-pro';

import {
  Image,
  SafeAreaView,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
  FlatList
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import colors from '../Styles/colors';
import HeaderTop from '../Components/Headers/HeaderTop';
import BtnThree from '../Components/BtnThree';
import fontFamily from '../Styles/fontFamily';
const HomeScreen = props => {

  const [dayone,setDayOne]=useState(true);
  const [daytwo,setDayTwo]=useState(false);
  const [daythree,setDayThree]=useState(false);
  const navigation = useNavigation();


  const dayOneHandler=()=>{
    setDayOne(true)
    setDayTwo(false)
    setDayThree(false)
  }

  const dayTwoHandler=()=>{
    setDayOne(false)
    setDayTwo(true)
    setDayThree(false)
  }

  const dayThreeHandler=()=>{
    setDayOne(false)
    setDayTwo(false)
    setDayThree(true)
  }

  const data = [
    { id: 1, image: 'imgone' },
    { id: 2, image: 'imgtwo' },
    { id: 3, image: 'imgfore' },

  ];

  const cardData=[
    { id: 1, image: 'banertwo',headingText:'A Beginner s Guide',timetext:'10:00 - 11:00',locatoin:'Manchester',btntext:'Register' },
    { id: 2, image: 'cardtwo',headingText:'Simple Tips for Success',timetext:'11:00 - 12:00',locatoin:'Glasgow',btntext:'Un-Register' },
    { id: 3, image: 'cardone',headingText:'Your Event Success For',timetext:'13:00 - 14:00',locatoin:'Bristol',btntext:'Register' },
    { id: 3, image: 'banertwo',headingText:'A Beginner s Guide',timetext:'10:00 - 11:00',locatoin:'Manchester',btntext:'Register' },
  ]
  const renderItem = ({item, index}) => {
    return (
      <View style={{ flex: 0.19, borderRadius: hp(3), borderWidth: 1, borderColor: '#cdcdcd', flexDirection: 'row',marginTop:hp(1.5) }}>
        <View style={{ flex: 0.45, height: hp[(5)] }}>
          {/* banertwo */}
          <Image
            style={{ width: '100%', height: '100%', paddingTop: hp(2), borderBottomLeftRadius: hp(2), borderTopLeftRadius: hp(2) }}
            source={{ uri: item.image }}
            resizeMode="contain"
          />
        </View>
        <View style={{ flex: 0.55 }}>
          <View style={{ marginHorizontal: hp(1.5), marginVertical: hp(1.5) }}>
            <Text style={{ color:colors.lightBlack, fontWeight: '600', fontSize: hp(2),fontFamily:fontFamily.robotoBold }}>{item.headingText}</Text>
            <Text style={{ color: 'gray', fontWeight: '300',fontFamily:fontFamily.robotoLight,fontSize: hp(2) }}>1{item.timetext}</Text>
            <View style={{ marginTop: hp(0.7) }}>
              <Text style={{ color: colors.lightBlue, fontWeight: '600',fontFamily:fontFamily.robotoBold,fontSize: hp(2) }}>Workshop</Text>
            </View>
            <View style={styles.headerImageSection}>
              {data.slice(0, 7).map((item, i) => {

                return (
                  <TouchableOpacity

                    style={styles.imageList}
                    key={i}>
                    <Image
                      style={styles.imgStyle}
                      source={{ uri: item.image }}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                );

              })}
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 0.6, flexDirection: 'row' }}>

                <View style={{ flex: 0.3 }}>
                  <Icon type="light" name="location-dot" size={hp(2.5)} color="#2CC2E4" />
                </View>

                <TouchableOpacity style={{ flex: 0.9 }}>
                  <Text style={{ color: colors.lightBlack}}>{item.locatoin}</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 0.1 }}></View>
              <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flex: 0.4, borderRadius: hp(0.9), borderColor: '#2CC2E4', borderWidth: 1, height: hp(5), marginTop: hp(-1.4), marginLeft: hp(-1), backgroundColor: '#2CC2E4',height:hp(4) }}>
                <Text style={{ color: '#fff', fontWeight: '600' }}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: hp(2.5),
        backgroundColor:'#fffff'
      }}>
      <StatusBar
        barStyle={'default'}
        translucent
        backgroundColor="transparent"
      />
      <View style={{ flex: 0.2 }}>
        <HeaderTop
          onPressIcon={() => navigation.openDrawer()}
        />
      </View>

      <View style={{ flex: 0.3 }}>
        <Image
          style={{ width: '100%', height: '90%', borderRadius: hp(1.5) }}
          source={{ uri: 'groupfore' }}
          resizeMode="cover"
        />
      </View>

      <View style={{ flex: 0.1 }}>
        {/* <BtnThree/> */}

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingBottom: hp(2) }}>
          <TouchableOpacity onPress={dayOneHandler} style={{ flex: 0.37, borderRadius: hp(5), height: hp(6), borderWidth:1, borderColor:dayone ? "#fff":"#2CC2E4", justifyContent: 'center', alignItems: 'center',backgroundColor:dayone ? "#2CC2E4":"#fff", }}>
            <Text style={{ color:dayone ? "#fff":"#2CC2E4",fontSize: hp(2), fontWeight: '600',fontFamily:fontFamily.robotoBold }}>DAY 1</Text>
            <Text style={{ color:dayone ? "#fff":"#2CC2E4", fontSize: hp(1.3), fontWeight: '300',fontFamily:fontFamily.robotoMedium  }}>8th, Nov 2022</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={dayTwoHandler} style={{ flex: 0.37, borderRadius: hp(5), height: hp(6), borderWidth: 1, borderColor: '#2CC2E4', justifyContent: 'center', alignItems: 'center', marginHorizontal: hp(1),backgroundColor:daytwo ? "#2CC2E4":"#fff", }}>
            <Text style={{ color:daytwo ? "#fff":"#2CC2E4", fontSize: hp(2), fontWeight: '600',fontFamily:fontFamily.robotoBold }}>DAY 1</Text>
            <Text style={{ color:daytwo ? "#fff":"#2CC2E4", fontSize: hp(1.3), fontWeight: '300',fontFamily:fontFamily.robotoMedium }}>8th, Nov 2022</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={dayThreeHandler} style={{ flex: 0.37, borderRadius: hp(5), height: hp(6), borderWidth: 1, borderColor: '#2CC2E4', justifyContent: 'center', alignItems: 'center',backgroundColor:daythree ? "#2CC2E4":"#fff", }}>
            <Text style={{ color:daythree ? "#fff":"#2CC2E4", fontSize: hp(2), fontWeight: '600',fontFamily:fontFamily.robotoBold }}>DAY 3</Text>
            <Text style={{ color:daythree ? "#fff":"#2CC2E4", fontSize: hp(1.3), fontWeight: '300',fontFamily:fontFamily.robotoMedium }}>8th, Nov 2022</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1}}>
      <FlatList
        data={cardData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
      
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = EStyleSheet.create({
  headerImageSection: {
    flexDirection: 'row',
    marginLeft: hp(3),
    alignItems: 'center',
    marginVertical: hp(0.9),
  },
  imageList: {
    width: wp(10.7),
    marginLeft: hp(-3),
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: hp(50),
  },


  imgStyle: { width: wp(7), height: hp(3.5), borderRadius: hp(50) },

  overlyImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(1),
  },
});

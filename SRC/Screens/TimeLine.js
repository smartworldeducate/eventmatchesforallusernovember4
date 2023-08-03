import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Check from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-fontawesome-pro';
import fontFamily from '../Styles/fontFamily';
import fontSize from '../Styles/fontSize';
import EStyleSheet from 'react-native-extended-stylesheet';
const TimeLine = (props) => {

  const data1 = [
    {
      date: 'June 22, 2023',
      status: 'HIRE',
      text: 'Hired as a',
      centext: 'Senior Officer UX/UI Designer',
      in: 'in',
      endtext: 'IT Department.',
      bgclor: '#D4FFCC',
      colr: '#2D8E00',
    },
    {
      date: 'May 01, 2020',
      status: 'confirmation',
      text: 'Hired as a',
      centext: 'Senior Officer UX/UI Designer',
      in: 'in',
      endtext: 'IT Department.',
      bgclor: '#CCFFF3',
      colr: '#008E8E',
    },
    {
      date: 'Dec 31, 2020',
      status: 'Appraisal',
      text: 'Hired as a',
      centext: 'Senior Officer UX/UI Designer',
      in: 'in',
      endtext: 'IT Department.',
      bgclor: '#FFFDCC',
      colr: '#8E7700',
    },
    {
      date: 'Jun 06, 2021',
      status: 'Promoted',
      text: 'Hired as a',
      centext: 'Senior Officer UX/UI Designer',
      in: 'in',
      endtext: 'IT Department.',
      bgclor: '#E0CCFF',
      colr: '#69008E',
    },
    {
      date: 'July 15, 2021',
      status: 'Transfer',
      text: 'Hired as a',
      centext: 'Senior Officer UX/UI Designer',
      in: 'in',
      endtext: 'IT Department.',
      bgclor: '#FFE5CC',
      colr: '#D69A03',
    },
    {
      date: 'Dec 31, 2021',
      status: 'Resign',
      text: 'Hired as a',
      centext: 'Senior Officer UX/UI Designer',
      in: 'in',
      endtext: 'IT Department.',
      bgclor: '#FFCCCC',
      colr: '#D80000',
    },
  ];
  return (
    <>
      <View>
        <MainHeader text={'Timeline'} iconName={'arrowleft'} onpressBtn={()=>props.navigation.goBack()}/>
      </View>
      <View
        style={{
          height: hp(5),
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: hp(2.5),
          marginTop: hp(3),
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center', paddingVertical: hp(0.3)}}>
            <Check name="checkcircleo" size={hp(3.5)} color="#239B56" />
          </View>
          <View style={{marginLeft: hp(0.8)}}>
            <View>
              <Text style={styles.smalltext}>Regular</Text>
            </View>
            <View>
              <Text style={styles.smalltext1}>STATUS</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginLeft: hp(3.5)}}>
          <View style={{alignItems: 'center', paddingVertical: hp(0.3)}}>
            <Icon name="wrench" size={hp(3.5)} color="#BB8FCE" />
          </View>
          <View style={{marginLeft: hp(0.5)}}>
            <View>
              <Text style={styles.smalltext}>3.7 Years</Text>
            </View>
            <View>
              <Text style={styles.smalltext1}>SERVICE</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginLeft: hp(3.5)}}>
          <View style={{alignItems: 'center', paddingVertical: hp(0.3)}}>
            <Check name="checkcircleo" size={hp(3.5)} color="#CD6155" />
          </View>
          <View style={{marginLeft: hp(0.5)}}>
            <View>
              <Text style={styles.smalltext}>31 Years</Text>
            </View>
            <View>
              <Text style={styles.smalltext1}>AGE</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        style={{flex: 1, marginHorizontal: hp(2.5), marginTop: hp(2)}}>
        {data1.map((item, i) => {
          return (
            <View style={{flexDirection: 'row'}} key={i}>
              <View>
                <View
                  style={{
                    width: wp(6),
                    height: hp(3),
                    borderRadius: hp(50),
                    borderWidth: 1,
                    borderColor: '#1C37A4',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: wp(4),
                      height: hp(2),
                      borderRadius: hp(50),
                      backgroundColor: '#1C37A4',
                    }}></View>
                </View>
                <View
                  style={{
                    height: hp(12),
                    width: wp(0.5),
                    backgroundColor: '#1C37A4',
                    marginLeft: hp(1.2),
                    marginTop: hp(0.5),
                    marginBottom: hp(0.5),
                  }}></View>
              </View>
              <View
                style={{
                  flex: 1,
                  marginLeft: hp(1),
                  height: hp(14),
                  borderRadius: hp(2),
                  backgroundColor: '#FFFFFF',
                  shadowColor: '#000',
                  shadowOpacity: 0.8,
                  shadowRadius: 3,
                  elevation: 1,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: hp(2),
                    marginTop: hp(1),
                  }}>
                  <View>
                    <Text
                      style={styles.dtext}>
                      {item.date}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: item.bgclor,
                      borderRadius: hp(5),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={[styles.ststext,{
                        color: item.colr,
                        
                      }]}>
                      {item.status}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: hp(1),
                    paddingVertical: hp(1),
                    marginHorizontal: hp(2),
                  }}>
                  <Text style={styles.centertext}>
                    {item.text}
                    <Text style={{color: '#4E69DA'}}>{item.centext}</Text>{' '}
                    {item.in}{' '}
                    <Text style={{color: '#4E69DA'}}>{item.endtext}</Text>
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

export default TimeLine;

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
  dtext:{
    color: '#353535',
    fontSize: '0.8rem',
    fontWeight: '700',
    fontStyle:'normal',
    paddingVertical: hp(0.5),
    fontFamily: fontFamily.ceraBlack,
  },
  centertext:{
    fontFamily: fontFamily.ceraBlack,
    fontSize: '0.75rem',
    fontWeight: '700',
    fontStyle:'normal',
    color:'#363636'
  },
  ststext:{
    fontFamily: fontFamily.ceraBlack,
    paddingHorizontal: hp(2.5),
    paddingVertical: hp(0.5),
    textTransform: 'uppercase'
  }

});

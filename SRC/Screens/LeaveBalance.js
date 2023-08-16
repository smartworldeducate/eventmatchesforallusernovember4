import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontFamily from '../Styles/fontFamily';
import EStyleSheet from 'react-native-extended-stylesheet';
import Pie from 'react-native-pie';
import Icon from 'react-native-fontawesome-pro';

const LeaveBalance = props => {
  const data = [
    {
      id: 1,
      iconName: 'island-tropical',
      title: 'Casuals',
      title1: '3 Pending Leaves',
      date: '13/20',
      colr: '#41CE68',
    },
    {
      id: 2,
      iconName: 'masks-theater',
      title: 'Annuals',
      title1: '1.25 Pending Leaves',
      date: '6/15',
      colr: '#B141CE',
    },
    {
      id: 3,
      iconName: 'temperature-half',
      title: 'Sick',
      title1: ' 0.25 Balance',
      date: '10/9',
      colr: '#CE5141',
    },
    {
      id: 4,
      iconName: 'calendar-range',
      title: 'Long Leave',
      title1: '0 Balance',
      date: '0/0',
      colr: '#4167C4',
    },
    {
      id: 5,
      iconName: 'kaaba',
      title: 'Hajj',
      title1: '15 Balance',
      date: '15/15',
      colr: '#41CEB4',
    },
    {
      id: 6,
      iconName: 'money-bill-wave',
      title: 'Without Pay',
      title1: '0 Balance Pending Leaves',
      date: '0/0',
      colr: '#7051CE',
    },
  ];
  return (
    <>
      <View>
        <MainHeader
          text={'Leave Balance'}
          iconName={'arrow-left'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <View
        style={{
          shadowColor: '#000',
          shadowOpacity: 0.5,
          shadowRadius: 4,
          elevation: 4,
          height: hp(28),
          borderRadius: hp(2),
          marginHorizontal: hp(2.5),
          marginTop: hp(2),
          backgroundColor: '#FFFFFF',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Pie
          radius={80}
          innerRadius={67}
          sections={[
            {
              percentage: 10,
              color: '#41CEB5',
            },
            {
              percentage: 15,
              color: '#7151CE',
            },
            {
              percentage: 20,
              color: '#7151CE',
            },
            {
              percentage: 25,
              color: '#B241CE',
            },
            {
              percentage: 20,
              color: '#41CE68',
            },
            {
              percentage: 10,
              color: '#CE5241',
            },
            {
              percentage: 10,
              color: '#cdcdcd',
            },
          ]}
          strokeCap={'butt'}
        />
        <View style={styles.gauge}>
          <Text style={styles.gaugeText}>35.25</Text>
          <Text style={styles.gaugeText1}>balance</Text>
        </View>
      </View>
      <View style={{flex: 1, marginHorizontal: hp(2.5), marginTop: hp(2)}}>
        {data.map((item, i) => {
          return (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: hp(1),
                }}
                key={i}>
                <View
                  style={{
                    height: hp(6),
                    marginHorizontal: hp(1),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginVertical: hp(1),
                    }}>
                    <View style={{}}>
                      <Icon
                        type="light"
                        name={item.iconName}
                        size={hp(3.5)}
                        color={item.colr}
                      />
                    </View>
                    <View style={{paddingLeft: hp(1), marginTop: hp(-0.5)}}>
                      <View>
                        <Text style={styles.testname}>{item.title}</Text>
                      </View>
                      <View>
                        <Text style={styles.desig}>{item.title1}</Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={styles.timestyle}>{item.date}</Text>
                </View>
              </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: '#DBDBDB',
                  marginTop: hp(1.5),
                }}></View>
            </>
          );
        })}
      </View>
    </>
  );
};

export default LeaveBalance;

const styles = EStyleSheet.create({
  smalltext: {
    fontWeight: '500',
    fontSize: '0.9rem',
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
    fontSize: hp(2.5),
    color: '#A6ACAF',
    fontWeight: 100,
  },
  headertext: {
    fontSize: '0.75rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    color: '#363636',
    fontWeight: '500',
  },
  duction: {
    color: '#979797',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    fontWeight: '500',
  },

  textnum: {
    color: '#343434',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  circularText: {
    fontSize: '0.75rem',
    color: '#646464',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBold,
    fontStyle: 'normal',
  },
  circularText1: {
    fontSize: '0.5rem',
    color: '#979797',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    marginHorizontal: hp(0.9),
    textTransform: 'uppercase',
  },
  numbertext: {
    color: '#353535',
    fontSize: '0.7rem',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBold,
    fontStyle: 'normal',
    textTransform: 'uppercase',
  },
  basictext: {
    color: '#979797',
    fontSize: '0.5rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    textTransform: 'uppercase',
  },
  duction: {
    color: '#979797',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  testname: {
    color: '#343434',
    fontSize: '0.8rem',
    fontFamily: fontFamily.ceraBold,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  textnum: {
    color: '#343434',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  textobj: {
    color: '#505255',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: hp(1.8),
  },
  objnum: {
    color: '#969696',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    fontWeight: '500',
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
    fontSize: '0.7rem',
    fontFamily: fontFamily.ceraBold,
    color: '#353535',
    fontStyle: 'normal',
  },
  smalltext1: {
    fontWeight: '300',
    fontSize: '0.45rem',
    fontFamily: fontFamily.ceraLight,
    color: '#979797',
    fontStyle: 'normal',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  dtext: {
    color: '#353535',
    fontSize: '0.65rem',
    fontWeight: '700',
    fontStyle: 'normal',
    paddingVertical: hp(0.5),
    fontFamily: fontFamily.ceraBold,
  },
  desig: {
    color: '#343434',
    fontSize: '0.55rem',
    fontFamily: fontFamily.ceraLight,
    fontStyle: 'normal',
    fontWeight: '300',
  },
  timestyle: {
    color: '#363636',
    fontSize: '1rem',
    fontFamily: fontFamily.ceraLight,
    fontStyle: 'normal',
    fontWeight: '300',
  },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    color: '#646464',
    fontFamily: fontFamily.ceraBold,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '1.2rem',
  },
  gaugeText1: {
    color: '#979797',
    fontSize: 24,
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '0.7rem',
    textTransform: 'uppercase',
  },
});

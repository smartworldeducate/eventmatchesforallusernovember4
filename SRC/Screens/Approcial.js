import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import ViewPager from '@react-native-community/viewpager';
import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet';
import fontFamily from '../Styles/fontFamily';
import GraphChart from '../Components/LineChart';
// import GraphList from '../Components/GraphList';
const Approcial = props => {
  const [salary, setSalary] = useState(true);
  const [history, setHistory] = useState(false);
  const salaryHandler = () => {
    setSalary(true);
    setHistory(false);
  };
  const objHandler = () => {
    setHistory(true);
    setSalary(false);
  };
  const years = ['2020', '2021', '2022', '2023', '2024'];
  const data = [
    {
      text: 'BEAMS Design Inner Pages, Student and Employee Dashboards',
      number: '30/12/23',
    },
    {
      text: 'BEAMS Design Inner Pages, Student and Employee Dashboards',
      number: '30/12/23',
    },
    {
      text: 'BEAMS Design Inner Pages, Student and Employee Dashboards',
      number: '30/12/23',
    },
    {
      text: 'BEAMS Design Inner Pages, Student and Employee Dashboards',
      number: '30/12/23',
    },
    {
      text: 'BEAMS Design Inner Pages, Student and Employee Dashboards',
      number: '30/12/23',
    },
    {
      text: 'BEAMS Design Inner Pages, Student and Employee Dashboards',
      number: '30/12/23',
    },
    {
      text: 'BEAMS Design Inner Pages, Student and Employee Dashboards',
      number: '30/12/23',
    },
  ];

  return (
    <>
      <View style={{flex: 1}}>
        <View>
          <MainHeader
            text={'Appraisal'}
            iconName={'arrow-left'}
            onpressBtn={() => props.navigation.goBack()}
          />
        </View>
        <View
          style={{
            height: hp(7),
            marginHorizontal: hp(2.5),
            borderRadius: hp(1),
            backgroundColor: '#E7E7E7',
            marginTop: hp(2),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              marginHorizontal: hp(1),
              marginVertical: hp(0.7),
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={salaryHandler}
              style={{
                width: wp(42),
                height: hp(5.5),
                backgroundColor: salary ? '#fff' : '#E7E7E7',
                paddingVertical: hp(1),
                borderRadius: hp(1),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.headertext}>Appraisal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={objHandler}
              style={{
                width: wp(42),
                height: hp(5.5),
                backgroundColor: history ? '#fff' : '#E7E7E7',
                // backgroundColor:'blue',
                borderRadius: hp(1),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.headertext}>Objective</Text>
            </TouchableOpacity>
          </View>
        </View>
        {salary == true && (
          <View>
            <View
              style={{
                shadowColor: '#000',
                shadowOpacity: 0.5,
                shadowRadius: 4,
                elevation: 4,
                marginHorizontal: hp(2.5),
                backgroundColor: '#fff',
                borderRadius: hp(2),
                marginTop: hp(2),
              }}>
              <GraphChart />
            </View>
            <ScrollView style={{marginTop: hp(1)}}>
              {[1, 2, 3, 4, 5].map((item, i) => {
                return (
                  <View style={{marginBottom: hp(0.5)}} key={i}>
                    <CmpTest />
                  </View>
                );
              })}
            </ScrollView>
          </View>
        )}
        {history == true && (
          <>
            <ScrollView
              horizontal={true}
              style={{
                marginHorizontal: hp(2.5),
                marginTop: hp(2),
                marginBottom: hp(0),
                paddingBottom: hp(0),
              }}
              showsHorizontalScrollIndicator={false}>
              {years?.map((e, i) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {}}
                    key={i}>
                    <View
                      style={{
                        height: hp(4.3),
                        paddingHorizontal: hp(2.7),
                        borderRadius: hp(20),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: i == 2 ? '#4D69DC' : ' ',
                      }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color: i == 2 ? '#FFF' : 'gray',
                            fontSize: hp(1.5),
                          }}>
                          {e}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <View
              style={{flex: 1, marginHorizontal: hp(2.5), marginTop: hp(-75)}}>
              <View
                style={{
                  height: hp(4.5),
                  backgroundColor: '#E7E7E7',
                  justifyContent: 'center',
                  paddingLeft: hp(1),
                }}>
                <Text style={styles.duction}>Description</Text>
              </View>
              <ScrollView>
                {data.map((item, i) => {
                  return (
                    <View key={i}>
                      <View
                        style={{
                          paddingVertical: hp(1),
                          marginHorizontal: hp(1),
                        }}>
                        <View
                          style={{
                            justifyContent: 'center',
                            paddingVertical: hp(1),
                          }}>
                          <Text style={styles.textobj}>{item.text}</Text>
                        </View>
                        <View
                          style={{justifyContent: 'center', marginTop: hp(-1)}}>
                          <Text style={styles.objnum}>{item.number}</Text>
                        </View>
                      </View>
                      <View
                        style={{height: 1, backgroundColor: '#DBDBDB'}}></View>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default Approcial;

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
});

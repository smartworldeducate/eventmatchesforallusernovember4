import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import EStyleSheet from 'react-native-extended-stylesheet';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Graph from '../Components/Graph';
import fontFamily from '../Styles/fontFamily';
const Financial = props => {
  const [salary, setSalary] = useState(true);
  const [history, setHistory] = useState(false);
  const salaryHandler = () => {
    setSalary(true);
    setHistory(false);
  };
  const historyHandler = () => {
    setHistory(true);
    setSalary(false);
  };
  const months = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const years = ['2020', '2021', '2022', '2023', '2024'];

  const data = [
    {text: 'PF Own', number: '5,000'},
    {text: 'EOBI Own', number: '250'},
    {text: 'Income Tax', number: '5,000'},
    {text: 'Absent Deduction (Absent days)', number: '0(0)'},
    {text: 'Other Deduction', number: '840'},
    {text: 'Total Deduction', number: '1190'},
    {text: 'Net Salary', number: '88090'},
  ];
  const renderDot = color => {
    return (
      <View
        style={{
          height: hp(3.7),
          width: wp(2.5),
          borderRadius: 1,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };
  return (
    <>
      <View>
        <MainHeader
          text={'Financials'}
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
            onPress={salaryHandler}
            style={{
              height: hp(5.5),
              backgroundColor: salary == true ? '#fff' : '#E7E7E7',
              paddingVertical: hp(1),
              borderRadius: hp(1),
              paddingHorizontal: hp(6),
              justifyContent: 'center',
            }}>
            <Text style={styles.headertext}>Salary Slip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={historyHandler}
            style={{
              height: hp(5.5),
              backgroundColor: history == true ? '#fff' : '#E7E7E7',
              paddingVertical: hp(1),
              borderRadius: hp(1),
              paddingHorizontal: hp(7),
              justifyContent: 'center',
            }}>
            <Text style={styles.headertext}>History</Text>
          </TouchableOpacity>
        </View>
      </View>
      {salary == true && (
        <ScrollView style={{flex: 1}}>
          <View style={{flex: 1}}>
            <Graph />
          </View>
          <View style={{flex: 1, marginHorizontal: hp(2.5), marginTop: hp(2)}}>
            <View
              style={{
                height: hp(4.5),
                backgroundColor: '#E7E7E7',
                justifyContent: 'center',
                paddingLeft: hp(1),
              }}>
              <Text style={styles.duction}>Deductions</Text>
            </View>
            {data.map((item, i) => {
              return (
                <View key={i}>
                  <View
                    style={{
                      height: hp(5),
                      marginHorizontal: hp(1),
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{justifyContent: 'center'}}>
                      <Text style={styles.testname}>{item.text}</Text>
                    </View>
                    <View style={{justifyContent: 'center'}}>
                      <Text style={styles.textnum}>{item.number}</Text>
                    </View>
                  </View>
                  <View style={{height: 1, backgroundColor: '#DBDBDB'}}></View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      )}

      {history == true && (
        <>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              height: hp(8),
              marginTop: hp(2.5),
              marginHorizontal: hp(2.5),
              justifyContent: 'center',
            }}
            showsHorizontalScrollIndicator={false}>
            {years?.map((e, i) => {
              return (
                <TouchableOpacity onPress={() => {}} key={i}>
                  <View
                    style={{
                      height: hp(4),
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
          <ScrollView style={{flex: 1, marginTop: hp(-77)}}>
            {months.map((item, i) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: hp(2),
                    marginHorizontal: hp(2.5),
                    height: hp(14),
                    borderRadius: hp(2),
                    backgroundColor: '#FFFFFF',
                    marginBottom: hp(2),
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                    elevation: 4,
                  }}
                  key={i}>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <AnimatedCircularProgress
                        size={86}
                        width={8}
                        fill={50}
                        tintColor="#D4E9FF"
                        onAnimationComplete={() =>
                          console.log('onAnimationComplete')
                        }
                        backgroundColor="#C1B7FD">
                        {fill => (
                          <View style={{justifyContent: 'center'}}>
                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Text style={styles.circularText}>{item}</Text>
                            </View>
                            {/* <View>
                      <Text style={styles.circularText1}>Leave Balance</Text>
                    </View> */}
                          </View>
                        )}
                      </AnimatedCircularProgress>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: hp(2.5),
                        // position:'absolute',left:hp(5)
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{marginVertical: hp(0.5)}}>
                          {renderDot('#C1B7FD')}
                        </View>
                        <View>
                          <View>
                            <Text style={styles.numbertext}>25,000</Text>
                          </View>
                          <View>
                            <Text style={styles.basictext}>Gross Salary</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: hp(3),
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{marginVertical: hp(0.5)}}>
                          {renderDot('#FEBB5B')}
                        </View>
                        <View>
                          <View>
                            <Text style={styles.numbertext}>25,000</Text>
                          </View>
                          <View>
                            <Text style={styles.basictext}>net Salary</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View>{/* <Text>vfgdfgdf</Text> */}</View>
                </View>
              );
            })}
          </ScrollView>
        </>
      )}
    </>
  );
};

export default Financial;

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
});

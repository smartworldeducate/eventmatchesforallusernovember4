import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import EStyleSheet from 'react-native-extended-stylesheet';

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
  const data = [
    {text: 'PF Own', number: '5,000'},
    {text: 'EOBI Own', number: '250'},
    {text: 'Income Tax', number: '5,000'},
    {text: 'Absent Deduction (Absent days)', number: '0(0)'},
    {text: 'Other Deduction', number: '840'},
    {text: 'Total Deduction', number: '1190'},
    {text: 'Net Salary', number: '88090'},
  ];
  return (
    <>
      <View>
        <MainHeader
          text={'Financials'}
          iconName={'arrowleft'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      {salary == true && (
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              flex: 1,
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
                  paddingHorizontal: hp(5),
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: hp(2.5),
                    color: '#363636',
                  }}>
                  Salary Slip
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={historyHandler}
                style={{
                  height: hp(5.5),
                  backgroundColor: history == true ? '#fff' : '#E7E7E7',
                  paddingVertical: hp(1),
                  borderRadius: hp(1),
                  paddingHorizontal: hp(6.8),
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: hp(2.5),
                    color: '#363636',
                  }}>
                  History
                </Text>
              </TouchableOpacity>
            </View>
          </View>

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
              <Text style={{color: '#343434'}}>Deductions</Text>
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
                      <Text style={{color: '#343434'}}>{item.text}</Text>
                    </View>
                    <View style={{justifyContent: 'center'}}>
                      <Text style={{color: '#343434'}}>{item.number}</Text>
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
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              flex: 1,
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
                  paddingHorizontal: hp(5),
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: hp(2.5),
                    color: '#363636',
                  }}>
                  Salary Slip
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={historyHandler}
                style={{
                  height: hp(5.5),
                  backgroundColor: history == true ? '#fff' : '#E7E7E7',
                  paddingVertical: hp(1),
                  borderRadius: hp(1),
                  paddingHorizontal: hp(6.8),
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: hp(2.5),
                    color: '#363636',
                  }}>
                  History
                </Text>
              </TouchableOpacity>
            </View>
          </View>
{/* 
          write code for bottomm development */}
          
        </ScrollView>
      )}
    </>
  );
};

export default Financial;


const styles = EStyleSheet.create({
  smalltext: {
    fontWeight: '500',
    fontSize: '0.9rem',
    fontFamily: fontFamily.ceraBlack,
    color: '#363636',
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
  iconSty:{
    fontSize:hp(2.5),
    color:"#A6ACAF",
    fontWeight:100
  }
});

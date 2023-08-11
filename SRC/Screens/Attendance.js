import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet';
import fontFamily from '../Styles/fontFamily';
const Attendance = props => {
  const data = [
    {id: 1, text: 'PF Own', number: '5,000'},
    {id: 2, text: 'EOBI Own', number: '250'},
    {id: 3, text: 'Income Tax', number: '5,000'},
    {id: 4, text: 'Net Salary', number: '88090'},
    {id: 5, text: 'PF Own', number: '5,000'},
    {id: 6, text: 'EOBI Own', number: '250'},
    {id: 7, text: 'Income Tax', number: '5,000'},
    {id: 8, text: 'Net Salary', number: '88090'},
    {id: 9, text: 'PF Own', number: '5,000'},
  ];
  const [btn, setBtn] = useState(null);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const btnHandler = item => {
    setBtn(item);
    console.log("my item",item)
  };
  return (
    <>
      <View>
        <MainHeader
          text={'Attendance'}
          iconName={'arrow-left'}
          onpressBtn={() => props.navigation.goBack()}
          yearText={'2023'}
        />
      </View>

      <View style={{marginHorizontal: hp(2.5)}}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            marginTop: hp(2.5),
            marginHorizontal: hp(2.5),
            justifyContent: 'center',
          }}
          showsHorizontalScrollIndicator={false}>
          {months?.map((e, i) => {
            return (
              <TouchableOpacity onPress={() => {}} key={i}>
                <View
                  style={{
                    height: hp(3.7),
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
      </View>
      <View style={{flex: 1, marginHorizontal: hp(2.5), marginTop: hp(1)}}>
        <View
          style={{
            height: hp(4.5),
            // backgroundColor: '#E7E7E7',
            paddingHorizontal: hp(1),
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: hp(1.05),
          }}>
          <View></View>
          <View>
            <Text style={styles.duction}>Late Minutes: 65</Text>
          </View>
        </View>
        <View
          style={{
            height: hp(4.5),
            backgroundColor: '#E7E7E7',
            paddingHorizontal: hp(1),
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: hp(1.05),
          }}>
          <View>
            <Text style={styles.duction}>Date</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              marginVertical: hp(1),
              width: wp(15),
              position: 'absolute',
              left: hp(8),
            }}>
            <Text style={styles.duction}>Time in</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              marginVertical: hp(1),
              width: wp(15),
              position: 'absolute',
              left: hp(21),
            }}>
            <Text style={styles.duction}>Time out</Text>
          </View>
          <View>
            <Text style={styles.duction}>Working Hr’s</Text>
          </View>
        </View>
        <ScrollView>
          {data.map((item, i) => {
            return (
              <View key={i}>
                <View
                  style={{
                    height: hp(6),
                    marginHorizontal: hp(1),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      marginVertical: hp(1),
                      alignItems: 'center',
                      width: wp(7.5),
                      height: hp(4),
                      borderRadius: 2,
                      backgroundColor: '#EBEBEB',
                    }}>
                    <View>
                      <Text style={styles.testname}>20</Text>
                    </View>
                    <View style={{marginTop: hp(-0.3)}}>
                      <Text style={styles.testname1}>fri</Text>
                    </View>
                  </View>

                  <View
                    style={{
                      marginVertical: hp(2),
                      justifyContent: 'center',
                      width: wp(20),
                      position: 'absolute',
                      left: hp(7),
                    }}>
                    <Text style={styles.testname}>{item.text}</Text>
                  </View>
                  <View
                    style={{
                      marginVertical: hp(2),
                      justifyContent: 'center',
                      position: 'absolute',
                      left: hp(20),
                      width: wp(20),
                    }}>
                    <Text style={styles.testname}>{item.text}</Text>
                  </View>
                  {btn ==item.id && (
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        borderRadius: hp(5),
                        width: wp(12),
                        height: hp(3.5),
                        backgroundColor: '#4D69DC',
                        marginVertical: hp(1.5),
                        alignItems: 'center',
                        width: wp(20),
                        position: 'absolute',
                        left: hp(33),
                      }}>
                      <Text style={styles.btncloor}>Apply</Text>
                    </TouchableOpacity>
                  )}
                  {btn !==item.id && (
                    <TouchableOpacity
                      onPress={() => btnHandler(item.id)}
                      style={{
                        justifyContent: 'center',
                        marginVertical: hp(2),
                        width: wp(20),
                        position: 'absolute',
                        left: hp(35),
                      }}>
                      <Text style={styles.textnum}>{item.number}</Text>
                    </TouchableOpacity>
                  )}
                </View>
                <View style={{height: 1, backgroundColor: '#DBDBDB'}}></View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default Attendance;

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
  testname1: {
    color: '#343434',
    fontSize: '0.5rem',
    fontFamily: fontFamily.ceraLight,
    fontStyle: 'normal',
    fontWeight: '100',
  },
  btncloor: {
    color: '#fff',
    fontSize: '0.5rem',
    fontFamily: fontFamily.ceraLight,
    fontStyle: 'normal',
    fontWeight: '300',
  },
});

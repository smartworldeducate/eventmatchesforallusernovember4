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
    {id: 1, text: '17-06-2023', number: 'Full Toil',month:'Jan'},
    {id: 2, text: '08:40:33', number: '08:44:47',month:'Feb'},
    {id: 3, text: '08:40:33', number: '08:17:03',month:'Mar'},
    {id: 4, text: '17-06-2023', number: '08:17:03',month:'Apr'},
    {id: 5, text: '17-06-2023', number: '08:17:03',month:'May'},
    {id: 6, text: '08:40:33', number: '08:44:47',month:'Jun'},
    {id: 7, text: '08:40:33', number: '5,000',month:'Jul'},
    {id: 8, text: '17-06-2023', number: '08:17:03',month:'Aug'},
    {id: 9, text: '17-06-2023', number: 'Weekend',month:'Sep'},
    {id: 10, text: '08:40:33', number: 'Full Toil',month:'Oct'},
    {id: 11, text: '17-06-2023', number: '08:44:47',month:'Nov'},
    {id: 12, text: '17-06-2023', number: '08:17:03',month:'Dec'},
  ];
  const [btn, setBtn] = useState(null);
  const [timein,setTimeIn]=useState(null);
  const [timeout,setTimeOut]=useState(null);
  const [clinder,setClinder]=useState(null);
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
  const timeInHandler = item => {
    setTimeIn(item);
    console.log("my item time in",item)
  };
  const timeOutHandler = item => {
    setTimeOut(item);
    console.log("my item  time out",item)
  };
  const clinderHandler = item => {
    setClinder(item);
    console.log("my item  time out",item)
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
          {data?.map((item, i) => {
            return (
              <>
              {clinder == item.id && (<TouchableOpacity key={i}>
                <View
                  style={{
                    height: hp(3.7),
                    paddingHorizontal: hp(3),
                    borderRadius: hp(20),
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:'#4D69DC',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color:'#FFF',
                        fontSize: hp(1.5),
                        paddingHorizontal:hp(0.5)
                      }}>
                      {item.month}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>)}
              {clinder !== item.id && (<TouchableOpacity onPress={() => clinderHandler(item.id)} key={i}>
                <View
                  style={{
                    height: hp(3.7),
                    paddingHorizontal: hp(2.7),
                    justifyContent: 'center',
                    alignItems: 'center',
                   
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color:'gray',
                        fontSize: hp(1.5),
                      }}>
                      {item.month}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>)}
              
              </>
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
                      <Text style={styles.testname1}>{item.month}</Text>
                    </View>
                  </View>

                   {timein ==item.id && (
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        borderRadius: hp(5),
                        width: wp(12),
                        height: hp(3.5),
                        backgroundColor: '#F5B7B1',
                        marginVertical: hp(1.5),
                        alignItems: 'center',
                        width: wp(20),
                        position: 'absolute',
                        left: hp(6.5),
                      }}>
                      <Text style={styles.btncloor}>{item.text}</Text>
                    </TouchableOpacity>
                  )}
                  {timein !==item.id && (<TouchableOpacity
                  onPress={() => timeInHandler(item.id)}
                    style={{
                      marginVertical: hp(2),
                      justifyContent: 'center',
                      width: wp(20),
                      position: 'absolute',
                      left: hp(7),
                    }}>
                    <Text style={styles.testname}>{item.text}</Text>
                  </TouchableOpacity>)}
                  {timeout ==item.id && (
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        borderRadius: hp(5),
                        width: wp(12),
                        height: hp(3.5),
                        backgroundColor: '#F5B7B1',
                        marginVertical: hp(1.5),
                        alignItems: 'center',
                        width: wp(20),
                        position: 'absolute',
                        left: hp(19.5),
                      }}>
                      <Text style={styles.btncloor}>{item.text}</Text>
                    </TouchableOpacity>
                  )}
                  {timeout !==item.id && (  <TouchableOpacity
                   onPress={() => timeOutHandler(item.id)}
                    style={{
                      marginVertical: hp(2),
                      justifyContent: 'center',
                      position: 'absolute',
                      left: hp(20),
                      width: wp(20),
                    }}>
                    <Text style={styles.testname}>{item.text}</Text>
                  </TouchableOpacity>)}
                
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
                      <Text style={styles.apply}>Apply</Text>
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
    fontSize: '0.55rem',
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
    color: '#FF0000',
    fontSize: '0.5rem',
    fontFamily: fontFamily.ceraLight,
    fontStyle: 'normal',
    fontWeight: '300',
  },
  timein: {
    color: '#979797',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  apply: {
    color: '#FFF',
    fontSize: '0.5rem',
    fontFamily: fontFamily.ceraLight,
    fontStyle: 'normal',
    fontWeight: '300',
  },
});

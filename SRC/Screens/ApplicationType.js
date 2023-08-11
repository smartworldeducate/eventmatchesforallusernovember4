import {View, Text, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import User from 'react-native-vector-icons/AntDesign';
import Gte from 'react-native-vector-icons/AntDesign';
// import Icon from 'react-native-fontawesome-pro';
import Icon from 'react-native-fontawesome-pro';
import EStyleSheet from 'react-native-extended-stylesheet';
import Menu from 'react-native-vector-icons/Entypo';import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontFamily from '../Styles/fontFamily';
import colors from '../Styles/colors';
const ApplicationType = props => {
  const [btColor,setBtColor]=useState(false)
  const [btColor1,setBtColor1]=useState(false)
  const [btColor2,setBtColor2]=useState(false)
  const [btColor3,setBtColor3]=useState(false)
  const btColorHandler=()=>{
    setBtColor1(false)
    setBtColor2(false)
    setBtColor3(false)
    setBtColor(true)
  }
  const btColorHandler1=()=>{
    setBtColor(false)
    setBtColor1(true)
    setBtColor2(false)
    setBtColor3(false)
  }
  const btColorHandler2=()=>{
    setBtColor(false)
    setBtColor1(false)
    setBtColor2(true)
    setBtColor3(false)
    // setBtColor(true)
  }
  const btColorHandler3=()=>{
    setBtColor(false)
    setBtColor1(false)
    setBtColor2(false)
    setBtColor3(true)
  }
  return (
    <>
      <View>
        <MainHeader text={'Application Type'} iconName={'arrow-left'} />
        <View
          style={{
            // width: wp(90),
            marginHorizontal: hp(2.5),
            height: hp(50),
            marginTop: hp(2),
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ApplyLeave')}
            style={{
              height: hp(10.5),
              shadowColor: '#000',
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 4,
              borderRadius: hp(1.5),
              backgroundColor: '#FFF',
              marginBottom: hp(2),
            }}>
            <View
              style={{
                height: hp(10.5),
                flexDirection: 'row',
                // marginVertical: hp(1),
                marginHorizontal: hp(1),
              }}>
             <View style={{flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
             <View style={{ paddingHorizontal: hp(3),justifyContent:'center',alignItems:'center'}}>
                <Icon type='light' name="calendar-days" size={hp(3)} color="#979797" />
              </View>
              <View style={{paddingVertical: hp(2.5),marginLeft:hp(-1.5)}}>
                <Text style={styles.zetext1}>
                Leave
                </Text>
              </View>
             </View>
              <View
                style={{
                  marginLeft: hp(11),
                  paddingVertical: hp(0.5),
                 
                  position: 'absolute',
                  left: hp(30),
                  right: 0,
                  bottom: 0,
                }}>
                <Icon  type="light"
                name="arrow-right" size={hp(2.2)} color="#979797" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Outstation')}
            style={{
              height: hp(10.5),
              shadowColor: '#000',
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 4,
              borderRadius: hp(1.5),
              backgroundColor: '#FFF',
              marginBottom: hp(2),
            }}>
            <View
              style={{
                height: hp(10.5),
                flexDirection: 'row',
                // marginVertical: hp(1),
                marginHorizontal: hp(1),
              }}>
             <View style={{flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
             <View style={{ paddingHorizontal: hp(3),justifyContent:'center',alignItems:'center'}}>
                <Icon type='light' name="business-time" size={hp(3.5)} color="#979797" />
              </View>
              <View style={{paddingVertical: hp(2.5),marginLeft:hp(-1.5)}}>
                <Text style={styles.zetext1}>
                Outstation
                </Text>
              </View>
             </View>
              <View
                style={{
                  marginLeft: hp(11),
                  paddingVertical: hp(0.5),
                 
                  position: 'absolute',
                  left: hp(30),
                  right: 0,
                  bottom: 0,
                }}>
                 <Icon  type="light"
                name="arrow-right" size={hp(2.2)} color="#979797" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AttendenceMarked')}
            style={{
              height: hp(10.5),
              shadowColor: '#000',
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 4,
              borderRadius: hp(1.5),
              backgroundColor: '#FFF',
              marginBottom: hp(2),
            }}>
            <View
              style={{
                height: hp(10.5),
                flexDirection: 'row',
                // marginVertical: hp(1),
                marginHorizontal: hp(1),
              }}>
             <View style={{flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
             <View style={{ paddingHorizontal: hp(3),justifyContent:'center',alignItems:'center'}}>
                <Icon type='light' name="calendar-circle-exclamation" size={hp(3.5)} color="#979797" />
              </View>
              <View style={{paddingVertical: hp(2.5),marginLeft:hp(-1.5)}}>
                <Text style={styles.zetext1}>
                Attendance Not Marked
                </Text>
              </View>
             </View>
              <View
                style={{
                  marginLeft: hp(11),
                  paddingVertical: hp(0.5),
                 
                  position: 'absolute',
                  left: hp(30),
                  right: 0,
                  bottom: 0,
                }}>
                <Icon  type="light"
                name="arrow-right" size={hp(2.2)} color="#979797" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('LateArivel')}
            style={{
              height: hp(10.5),
              shadowColor: '#000',
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 4,
              borderRadius: hp(1.5),
              backgroundColor: '#FFF',
              marginBottom: hp(2),
            }}>
            <View
              style={{
                height: hp(10.5),
                flexDirection: 'row',
                // marginVertical: hp(1),
                marginHorizontal: hp(1),
              }}>
             <View style={{flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
             <View style={{ paddingHorizontal: hp(3),justifyContent:'center',alignItems:'center'}}>
                <Icon type='light' name="clock-nine-thirty" size={hp(3.5)} color="#979797" />
              </View>
              <View style={{paddingVertical: hp(2.5),marginLeft:hp(-1.5)}}>
                <Text style={styles.zetext1}>
                Late Arrival
                </Text>
              </View>
             </View>
              <View
                style={{
                  marginLeft: hp(11),
                  paddingVertical: hp(0.5),
                 
                  position: 'absolute',
                  left: hp(30),
                  right: 0,
                  bottom: 0,
                }}>
                <Icon  type="light"
                name="arrow-right" size={hp(2.2)} color="#979797" />
              </View>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => props.navigation.navigate('EarliLeaving')}
            style={{
              height: hp(10.5),
              shadowColor: '#000',
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 4,
              borderRadius: hp(1.5),
              backgroundColor: '#FFF',
              marginBottom: hp(2),
            }}>
            <View
              style={{
                height: hp(10.5),
                flexDirection: 'row',
                // marginVertical: hp(1),
                marginHorizontal: hp(1),
              }}>
             <View style={{flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
             <View style={{ paddingHorizontal: hp(3),justifyContent:'center',alignItems:'center'}}>
                <Icon type='light' name="clock-three-thirty" size={hp(3.5)} color="#979797" />
              </View>
              <View style={{paddingVertical: hp(2.5),marginLeft:hp(-1.5)}}>
                <Text style={styles.zetext1}>
                Early Leaving
                </Text>
              </View>
             </View>
              <View
                style={{
                  marginLeft: hp(11),
                  paddingVertical: hp(0.5),
                 
                  position: 'absolute',
                  left: hp(30),
                  right: 0,
                  bottom: 0,
                }}>
                <Icon  type="light"
                name="arrow-right" size={hp(2.2)} color="#979797" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ToilLeave')}
            style={{
              height: hp(10.5),
              shadowColor: '#000',
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 4,
              borderRadius: hp(1.5),
              backgroundColor: '#FFFFFF',
              marginBottom: hp(2),
            }}>
            <View
              style={{
                height: hp(10.5),
                flexDirection: 'row',
                // marginVertical: hp(1),
                marginHorizontal: hp(1),
              }}>
             <View style={{flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
             <View style={{ paddingHorizontal: hp(3),justifyContent:'center',alignItems:'center'}}>
                <Icon type='light' name="calendar-clock" size={hp(3.5)} color="#979797" />
              </View>
              <View style={{paddingVertical: hp(2.5),marginLeft:hp(-1.5)}}>
                <Text style={styles.zetext1}>
                Toil
                </Text>
              </View>
             </View>
              <View
                style={{
                  marginLeft: hp(11),
                  paddingVertical: hp(0.5),
                 
                  position: 'absolute',
                  left: hp(30),
                  right: 0,
                  bottom: 0,
                }}>
                <Icon  type="light"
                name="arrow-right" size={hp(2.2)} color="#979797" />
              </View>
            </View>
          </TouchableOpacity>
          
        </View>
      </View>
    
        <View
          style={{
            flax:1,
            height: hp(8),
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            position:'relative',
            top:hp(34),bottom:hp(0)
          }}>
          <TouchableOpacity
            onPress={btColorHandler}
            style={{flex: 0.2, alignItems: 'center'}}>
            <Menu name="calendar" size={hp(2.5)} color={btColor ==true ? '#1C37A4':'#979797'}  style={{}} />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={btColorHandler1}
            style={{flex: 0.2, paddingTop: hp(0.5), alignItems: 'center',flexDirection:'row',paddingLeft:hp(1)}}>
           <View>
           <Icon name="paper-plane" size={hp(2.5)} color={btColor1 ==true ? '#1C37A4':'#979797'} />
           </View>
           <View>
           <Text style={[styles.btc,{color:btColor1 ==true ? '#1C37A4':'#979797'}]}>Apply</Text>
           </View>
          
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 0.2, alignItems: 'center'}} onPress={btColorHandler2}>
            <Icon name="chart-simple" size={hp(2.5)} color={btColor2 ==true ? '#1C37A4':'#979797'} />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={btColorHandler3}
            style={{flex: 0.2, alignItems: 'center', paddingTop: hp(0)}}>
            <Icon name="rectangle-history" size={hp(2.5)} color={btColor3 ==true ? '#1C37A4':'#979797'} />
          </TouchableOpacity>
        </View>
     
    </>
  );
};

export default ApplicationType;

const styles = EStyleSheet.create({
  zetext1: {
    fontSize: '0.72rem',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBold,
    color: '#343434',
    fontStyle: 'normal',
  },
  ztitle: {
    fontSize: hp(1.5),
    fontWeight: '600',
    marginTop: hp(1),
    fontFamily: fontFamily.ceraBlack,
  },
  textInputCustomStyle: {
    fontSize: hp('1.65'),
    height: hp('6'),
    letterSpacing: -0.05,
    paddingLeft: wp('3'),
    color: colors.loginIconColor,
  },
  btc:{
    paddingLeft:hp(0.5),
    fontSize:hp(2),
    fontWeight:'700',
    fontFamily: fontFamily.ceraBlack,
  }
});

import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import React, {useState} from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-fontawesome-pro';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Face from 'react-native-vector-icons/AntDesign';
import Therm from 'react-native-vector-icons/FontAwesome';
import Island from 'react-native-vector-icons/Fontisto';
import {TouchableOpacity} from 'react-native-gesture-handler';
import fontSize from '../Styles/fontSize';
import fontFamily from '../Styles/fontFamily';

const Calinder = () => {
  const [leave, setLeave] = useState(false);
  const [clinder, setClinder] = useState(false);
  const handleLeave = () => {
    setLeave(true);
    setClinder(false);
  };
  const handleClinder = () => {
    setClinder(true);
    setLeave(false);
  };
  return (
    <>
      <View style={{flex: 1}}>
        <View
          style={{
            width: wp(90),
            marginHorizontal: hp(2.5),
            // marginTop: hp(1),
            // marginBottom: hp(1),
          }}>
          <Text style={styles.clText1}>Leaves</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.cardbody}>
              <View
                style={{
                  width: wp(45),
                  marginVertical: hp(3),
                  marginHorizontal: hp(1),
                }}>
                <AnimatedCircularProgress
                  size={120}
                  width={8}
                  fill={60}
                  tintColor="#415DCE"
                  onAnimationComplete={() => console.log('onAnimationComplete')}
                  backgroundColor="#E3E3E3">
                  {fill => <View style={{justifyContent:'center'}}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                      <Text style={styles.circularText}>12</Text>
                    </View>
                    <View>
                    <Text style={styles.circularText1}>Leave Balance</Text>
                    </View>
                    </View>}
                </AnimatedCircularProgress>
              </View>

              <View>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      marginTop: hp(2),
                      marginRight: hp(1),
                      marginLeft: hp(0.5),
                    }}>
                    <Face name="frowno" size={35} color="#BB8FCE" />
                  </View>
                  <View style={{marginTop: hp(0.5)}}>
                    <View>
                      <Text
                        style={{
                          color: '#6A6A6A',
                          fontSize: hp(2),
                          fontWeight: '600',
                          marginTop: hp(1),
                        }}>
                        15
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                      <View style={{marginRight: hp(1)}}>
                        <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                          <View style={{marginRight: hp(1)}}>
                            <Text style={styles.clText}>Casual Leaves</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{flexDirection: 'row',marginTop:hp(-1)}}>
                  <View
                    style={{
                      marginTop: hp(2),
                      marginLeft: hp(1.5),
                      marginRight: hp(2),
                    }}>
                    <Therm name="thermometer-half" size={35} color="#DC7633" />
                  </View>
                  <View style={{marginTop: hp(0.5)}}>
                    <View>
                      <Text
                        style={{
                          color: '#6A6A6A',
                          fontSize: hp(2),
                          fontWeight: '600',
                          marginTop: hp(1),
                        }}>
                        10
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                      <View style={{marginRight: hp(1)}}>
                        <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                          <View style={{marginRight: hp(1)}}>
                            <Text style={styles.clText}>Sick Leaves</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{flexDirection: 'row',marginTop:hp(-1)}}>
                  <View
                    style={{
                      marginTop: hp(2),
                      marginLeft: hp(1.5),
                      marginRight: hp(1),
                    }}>
                    <Island name="island" size={35} color="#58D68D" />
                  </View>
                  <View style={{marginTop: hp(0.5)}}>
                    <View>
                      <Text
                        style={{
                          color: '#6A6A6A',
                          fontSize: hp(2),
                          fontWeight: '600',
                          marginTop: hp(1),
                        }}>
                        30
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                      <View style={{marginRight: hp(1)}}>
                        <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                          <View style={{marginRight: hp(1)}}>
                            <Text style={styles.clText}>Annual Leaves</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                // width: wp(88),
                height: hp(12),
                flexDirection: 'row',
                marginHorizontal: hp(1.5),
                paddingBottom: hp(2.5),
                paddingTop: hp(2),
                justifyContent:'space-between'
              }}>
              <TouchableOpacity
                onPress={handleLeave}
                style={{
                 
                  // width: wp(37),
                  justifyContent:'center',
                  alignItems:'center',
                  height: hp(4.5),
                  borderRadius: hp(50),
                  borderWidth: 1,
                  borderColor:'#1C37A4' ,
                  backgroundColor:'#fff',
                  marginTop: hp(4),
                }}>
                <Text
                  style={{
                    color:'#1C37A4',
                    fontFamily: fontFamily.ceraBlack,
                    paddingHorizontal: hp(2.5),
                  }}>
                  Apply Leave
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                // onPress={handleClinder}
                style={{
                  borderRadius: hp(50),
                
                  height: hp(4.5),
                  borderWidth: 1,
                  borderColor: '#1C37A4' ,
                  backgroundColor:'#1C37A4',
                  marginTop: hp(4),
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                <Text
                  style={{
                    color:'#fff',
                    fontFamily: fontFamily.ceraBlack,
                    paddingHorizontal: hp(2),
                  }}>
                  View Calendar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Calinder;

const styles = EStyleSheet.create({
  heading: {
    fontSize: hp(2),
    paddingHorizontal: hp(2),
  },
  container: {
    paddingHorizontal: hp(1),
    marginBottom: hp(3),
    // backgroundColor:'red'
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    height: hp(26.5),
    width: wp(90),
    borderRadius: hp(1.5),
    marginHorizontal: hp(1.5),
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    margin:hp(1),
    
    
  },
  cardbody: {
    flex: 1,
    // backgroundColor: '#fff',
    height: hp(20),
    width: wp(86),
    borderRadius: 5,
    flexDirection: 'row',
    marginHorizontal: hp(1.5),
  },
  clText: {
    fontSize: '0.6rem',
    fontWeight: '100',
    fontFamily: fontFamily.ceraBlack,
    // paddingHorizontal:hp(3),
    color: '#979797',
  },
  clText1: {
    fontSize: '0.7rem',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBlack,
    // paddingHorizontal:hp(4),
    paddingBottom:hp(1),
    color: '#343434',
    paddingHorizontal: hp(0.5),
  },
  clbtnText: {
    color: '#fff',
    marginHorizontal: hp(3),
    marginVertical: hp(1),
  },

  circularText:{
    fontSize:'1.7rem',
    color:'#646464',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBlack,
    fontStyle:'normal'
  },
  circularText1:{
    fontSize:'0.6rem',
    color:'#979797',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBlack,
    fontStyle:'normal'
  }
});

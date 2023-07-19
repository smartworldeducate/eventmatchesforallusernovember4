import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import Check from 'react-native-vector-icons/AntDesign';
import Wrench from 'react-native-vector-icons/FontAwesome';
import User from 'react-native-vector-icons/AntDesign';
import Gte from 'react-native-vector-icons/AntDesign';
import Phone from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const ApplicationType = props => {
  return (
    <>
      <View>
        <MainHeader text={'Application Type'} iconName={'arrowleft'} />
        <View
          style={{
            width: wp(90),
            marginHorizontal: hp(2.5),
            height: hp(50),
            marginTop: hp(2),
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ApplyLeave')}>
            <View
              style={{
                width: wp(90),
                height: hp(8),
                shadowColor: '#000',
                shadowOpacity: 0.5,
                shadowRadius: 4,
                elevation: 8,
                borderRadius: hp(1),
                backgroundColor: '#FFFFFF',
                marginBottom: hp(2),
              }}>
              <View
                style={{
                  height: hp(8),
                  flexDirection: 'row',
                  marginVertical: hp(1),
                  marginHorizontal: hp(1),
                }}>
                <View
                  style={{marginVertical: hp(1.5), paddingHorizontal: hp(3)}}>
                  <User name="calendar" size={25} color="#979797" />
                </View>
                <View style={{paddingVertical: hp(1.8)}}>
                  <Text style={{fontSize: hp(2), color: '#343434'}}>Leave</Text>
                </View>
                <View
                  style={{
                    marginLeft: hp(10),
                    paddingVertical: hp(2),
                    position: 'absolute',
                    left: hp(28),
                    right: 0,
                    bottom: 0,
                  }}>
                  <Gte name="arrowright" size={20} color="#979797" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Outstation')}
            style={{
              width: wp(90),
              height: hp(8),
              shadowColor: '#000',
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 8,
              borderRadius: hp(1),
              backgroundColor: '#FFFFFF',
              marginBottom: hp(2),
            }}>
            <View
              style={{
                height: hp(8),
                flexDirection: 'row',
                marginVertical: hp(1),
                marginHorizontal: hp(1),
              }}>
              <View style={{marginVertical: hp(1.5), paddingHorizontal: hp(3)}}>
                <User name="calendar" size={25} color="#979797" />
              </View>
              <View style={{paddingVertical: hp(1.8)}}>
                <Text style={{fontSize: hp(2), color: '#343434'}}>
                  Outstation
                </Text>
              </View>
              <View
                style={{
                  marginLeft: hp(10),
                  paddingVertical: hp(2),
                  position: 'absolute',
                  left: hp(28),
                  right: 0,
                  bottom: 0,
                }}>
                <Gte name="arrowright" size={20} color="#979797" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AttendenceMarked')}
            style={{
              width: wp(90),
              height: hp(8),
              shadowColor: '#000',
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 8,
              borderRadius: hp(1),
              backgroundColor: '#FFFFFF',
              marginBottom: hp(2),
            }}>
            <View
              style={{
                height: hp(8),
                flexDirection: 'row',
                marginVertical: hp(1),
                marginHorizontal: hp(1),
              }}>
              <View style={{marginVertical: hp(1.5), paddingHorizontal: hp(3)}}>
                <User name="calendar" size={25} color="#979797" />
              </View>
              <View style={{paddingVertical: hp(1.8)}}>
                <Text style={{fontSize: hp(2), color: '#343434'}}>
                  Attendance Not Marked
                </Text>
              </View>
              <View
                style={{
                  marginLeft: hp(10),
                  paddingVertical: hp(2),
                  position: 'absolute',
                  left: hp(28),
                  right: 0,
                  bottom: 0,
                }}>
                <Gte name="arrowright" size={20} color="#979797" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('LateArivel')}
            style={{
              width: wp(90),
              height: hp(8),
              shadowColor: '#000',
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 8,
              borderRadius: hp(1),
              backgroundColor: '#FFFFFF',
              marginBottom: hp(2),
            }}>
            <View
              style={{
                height: hp(8),
                flexDirection: 'row',
                marginVertical: hp(1),
                marginHorizontal: hp(1),
              }}>
              <View style={{marginVertical: hp(1.5), paddingHorizontal: hp(3)}}>
                <User name="calendar" size={25} color="#979797" />
              </View>
              <View style={{paddingVertical: hp(1.8)}}>
                <Text style={{fontSize: hp(2), color: '#343434'}}>
                  Late Arrival
                </Text>
              </View>
              <View
                style={{
                  marginLeft: hp(10),
                  paddingVertical: hp(2),
                  position: 'absolute',
                  left: hp(28),
                  right: 0,
                  bottom: 0,
                }}>
                <Gte name="arrowright" size={20} color="#979797" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('EarliLeaving')}
            style={{
              width: wp(90),
              height: hp(8),
              shadowColor: '#000',
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 8,
              borderRadius: hp(1),
              backgroundColor: '#FFFFFF',
              marginBottom: hp(2),
            }}>
            <View
              style={{
                height: hp(8),
                flexDirection: 'row',
                marginVertical: hp(1),
                marginHorizontal: hp(1),
              }}>
              <View style={{marginVertical: hp(1.5), paddingHorizontal: hp(3)}}>
                <User name="calendar" size={25} color="#979797" />
              </View>
              <View style={{paddingVertical: hp(1.8)}}>
                <Text style={{fontSize: hp(2), color: '#343434'}}>
                  Early Leaving
                </Text>
              </View>
              <View
                style={{
                  marginLeft: hp(10),
                  paddingVertical: hp(2),
                  position: 'absolute',
                  left: hp(28),
                  right: 0,
                  bottom: 0,
                }}>
                <Gte name="arrowright" size={20} color="#979797" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ToilLeave')}
            style={{
              width: wp(90),
              height: hp(8),
              shadowColor: '#000',
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 8,
              borderRadius: hp(1),
              backgroundColor: '#FFFFFF',
              marginBottom: hp(2),
            }}>
            <View
              style={{
                height: hp(8),
                flexDirection: 'row',
                marginVertical: hp(1),
                marginHorizontal: hp(1),
              }}>
              <View style={{marginVertical: hp(1.5), paddingHorizontal: hp(3)}}>
                <User name="calendar" size={25} color="#979797" />
              </View>
              <View style={{paddingVertical: hp(1.8)}}>
                <Text style={{fontSize: hp(2), color: '#343434'}}>Toil</Text>
              </View>
              <View
                style={{
                  marginLeft: hp(10),
                  paddingVertical: hp(2),
                  position: 'absolute',
                  left: hp(28),
                  right: 0,
                  bottom: 0,
                }}>
                <Gte name="arrowright" size={20} color="#979797" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: wp(100),
            height: hp(8),
            backgroundColor: '#fff',
            position: 'absolute',
            top: hp(92),
            shadowColor: '#000',
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 10,
          }}>
          <View
            style={{
              width: wp(90),
              height: hp(8),
              marginHorizontal: hp(2.5),
              backgroundColor: '#fff',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: hp(2),
            }}>
            <TouchableOpacity>
            <User name="calendar" size={25} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate('ApplyLeave')}>
              <Text style={{color: 'gray', fontSize: hp(2)}}>Apply</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate('HomeScreen')}>
              <Text style={{color: 'gray', fontSize: hp(2)}}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{}}>
              <Text style={{color: 'gray', fontSize: hp(2)}}>Attendence</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default ApplicationType;

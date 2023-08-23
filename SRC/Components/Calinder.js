import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-fontawesome-pro';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native';
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
// import { useNavigation } from '@react-navigation/native';
const Calinder = (props) => {
  const navigation =useNavigation()
  // const navigation=useNavigation()
  const [leave, setLeave] = useState(false);
  const [clinder, setClinder] = useState(false);
  const handleLeave = () => {
    setLeave(true);
    setClinder(false);
  };
  // const handleClinder = () => {
  //   setClinder(true);
  //   setLeave(false);
  // };
  return (
    <>
      <View style={styles.card}>
        <View>
          <Text style={styles.clText1}>Leaves</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardbody}>
            <View
              style={{
                width: wp(45),
                marginVertical: hp(1.5),
                marginHorizontal: hp(1),
              }}>
              <AnimatedCircularProgress
                size={145}
                width={4}
                fill={30}
                tintColor="#415DCE"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#E3E3E3">
                {fill => (
                  <View style={{justifyContent: 'center'}}>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={styles.circularText}>12</Text>
                    </View>
                    <View>
                      <Text style={styles.circularText1}>Leave Balance</Text>
                    </View>
                  </View>
                )}
              </AnimatedCircularProgress>
            </View>

            <View>
              <TouchableOpacity style={{flexDirection: 'row'}} onPress={()=>navigation.navigate('LeaveBalance')}>
                <View
                  style={{
                    marginTop: hp(2),
                    marginRight: hp(1),
                    marginLeft: hp(1),
                  }}>
                
                  <Icon type='light' name="masks-theater" size={hp(4)} color="#BB8FCE" />
                </View>
                <View style={{marginTop: hp(0.5)}}>
                  <View>
                    <Text
                      style={styles.leaveSectionText}>
                      15
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: hp(-0.5)}}>
                    <View style={{marginRight: hp(1)}}>
                      <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                        <View style={{marginRight: hp(1)}}>
                          <Text style={styles.clText}>Casual Leaves</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row'}} onPress={()=>navigation.navigate('LeaveBalance')}>
                <View
                  style={{
                    marginTop: hp(2),
                    marginLeft: hp(1),
                    marginRight: hp(2),
                  }}>
                  <Icon type='light' name="temperature-half" size={hp(4)} color="#DC7633" />
                </View>
                <View style={{marginTop: hp(0.5),marginLeft:hp(-1)}}>
                  <View>
                    <Text
                      style={styles.leaveSectionText}>
                      10
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: hp(-0.5)}}>
                    <View style={{marginRight: hp(1)}}>
                      <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                        <View style={{marginRight: hp(1)}}>
                          <Text style={styles.clText}>Sick Leaves</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row',marginLeft:hp(1),marginTop:hp(1)}} onPress={()=>navigation.navigate('LeaveBalance')}>
                <View
                  style={{
                    marginTop: hp(2),
                    marginLeft: hp(1),
                    marginRight: hp(1),
                  }}>
                  <Icon type='light' name="island-tropical" size={hp(3)} color="#58D68D" />
                </View>
                <View style={{marginTop: hp(0.5)}}>
                  <View>
                    <Text
                      style={styles.leaveSectionText}>
                      30
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: hp(-0.5)}}>
                    <View style={{marginRight: hp(1)}}>
                      <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                        <View style={{marginRight: hp(1)}}>
                          <Text style={styles.clText}>Annual Leaves</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
            <View style={{marginHorizontal:hp(2),height:hp(0.05),backgroundColor:'#D9D9D9',borderRadius:hp(50),marginTop:hp(-0.5),}}></View>
          <View
            style={{
              height: hp(10),
              marginHorizontal: hp(2),
              flexDirection: 'row',
              marginVertical:hp(2.4),
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={()=>navigation.navigate('ApplicationType')}
              style={{
                width:wp(38),
                justifyContent: 'center',
                alignItems: 'center',
                height: hp(4.5),
                borderRadius: hp(50),
                borderWidth: 1,
                borderColor: '#1C37A4',
                backgroundColor: '#fff',
                // marginTop: hp(4),
              }}>
              <Text
                style={styles.clbtnStyle}>
                Apply Leave
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={()=>navigation.navigate('Attendance')}
                style={{
                  borderRadius: hp(50),
                width:wp(38),
                  height: hp(4.5),
                  borderWidth: 1,
                  borderColor: '#1C37A4' ,
                  backgroundColor:'#1C37A4',
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                <Text
                  style={styles.viewClinderText}>
                  View Calendar
                </Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Calinder;

const styles = EStyleSheet.create({
  card: {
    flex: 1,
    height: hp(35),
    marginTop: hp(1.5),
  },
  cardContainer: {
    height: hp(30),
    backgroundColor: '#ffffff',
    borderRadius: hp(2),
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
    marginHorizontal: hp(2),
  },
  cardbody: {
    flexDirection: 'row',
    marginHorizontal: hp(1.5),
  },
  clText: {
    fontSize: '0.6rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    color: '#979797',
    fontStyle:'normal'
  },
  clText1: {
    fontSize: '0.7rem',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBold,
    paddingBottom: hp(0.5),
    color: '#646464',
    marginHorizontal: hp(2),
    fontStyle: 'normal',
  },
  clbtnText: {
    color: '#fff',
    marginHorizontal: hp(3),
    marginVertical: hp(1),
  },

  circularText: {
    fontSize: '1rem',
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
    textTransform:'uppercase'
  },
  clbtnStyle:{
    fontSize: '0.5rem',
    color: '#061D7A',
    paddingHorizontal: hp(3.5),
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
  },
  leaveSectionText:{
    fontSize: '0.7rem',
    color: '#353535',
   marginTop: hp(1),
    fontWeight: '700',
    fontFamily: fontFamily.ceraBold,
    fontStyle: 'normal',
  },
  viewClinderText:{
    color:'#fff',
    fontFamily: fontFamily.ceraMedium,
    paddingHorizontal: hp(3.5),
    fontWeight:'500',
    fontStyle:'normal',
    fontSize: '0.5rem',
  }
});

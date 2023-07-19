import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Face from 'react-native-vector-icons/AntDesign';
import Therm from 'react-native-vector-icons/FontAwesome';
import Island from 'react-native-vector-icons/Fontisto';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Calinder = () => {
  return (
    <>
      <View
        style={{
          width: wp(90),
          marginHorizontal: hp(2.5),
          marginTop: hp(2),
          marginBottom: hp(1),
        }}>
        <Text style={{fontSize: hp(2)}}>Leaves</Text>
      </View>
      <View horizontal={true} style={styles.container}>
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
              backgroundColor="#E3E3E3"
            />
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginTop: hp(2), marginRight: hp(1),marginLeft:hp(0.5)}}>
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
                        <Text
                          style={{
                            color: 'gray',
                            fontSize: hp(1.5),
                            fontWeight: '600',
                          }}>
                          Casual Leaves
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
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
                        <Text
                          style={{
                            color: 'gray',
                            fontSize: hp(1.5),
                            fontWeight: '600',
                          }}>
                          Sick Leaves
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
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
                        <Text
                          style={{
                            color: 'gray',
                            fontSize: hp(1.5),
                            fontWeight: '600',
                          }}>
                          Annual Leaves
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
         </View>

         <View style={{width:wp(88),height:hp(10),flexDirection:'row',marginHorizontal:hp(1.5),paddingBottom:hp(2.5),paddingTop:hp(0.5)}}>
          
           <TouchableOpacity style={{paddingHorizontal:hp(2),width:wp(37),height:hp(4.5),borderRadius:hp(50),backgroundColor:'#1C37A4',marginTop:hp(4)}}>
           <Text style={{color:'#fff',marginHorizontal:hp(2),marginVertical:hp(1)}}>Apply Leave</Text>
           </TouchableOpacity>
           <View style={{marginLeft:hp(5),borderRadius:hp(50),width:wp(37),height:hp(4.5),backgroundColor:'#1C37A4',marginTop:hp(4)}}>
           <Text style={{color:'#fff',marginHorizontal:hp(3),marginVertical:hp(1)}}>View Calendar</Text>
           </View>
             
             
         </View>
         
        </View>
      </View>
    </>
  );
};

export default Calinder;

const styles = StyleSheet.create({
  heading: {
    fontSize: hp(2),
    paddingHorizontal: hp(2),
  },
  container: {
    paddingHorizontal: hp(1),
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    height: hp(26),
    width: wp(90),
    borderRadius: 5,
    marginHorizontal: hp(1.5),
    shadowColor: '#000', 
    shadowOpacity: 0.5,
    shadowRadius: 4,   
    elevation: 4
  },
  cardbody:{
    flex: 1,
    backgroundColor: '#fff',
    height: hp(20),
    width: wp(86),
    borderRadius: 5,
    flexDirection: 'row',
    marginHorizontal: hp(1.5),
    
  }
});

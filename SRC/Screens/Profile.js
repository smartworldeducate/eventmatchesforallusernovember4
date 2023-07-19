import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import Bell from 'react-native-vector-icons/EvilIcons';
import Menu from 'react-native-vector-icons/Entypo';
import Check from 'react-native-vector-icons/AntDesign';
import Wrench from 'react-native-vector-icons/FontAwesome';
import User from 'react-native-vector-icons/AntDesign';
import Gte from 'react-native-vector-icons/AntDesign';
import Phone from 'react-native-vector-icons/Feather';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Profile = (props) => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#1C37A4'}}>
        <View
          style={{
            width: wp(90),
            marginHorizontal: hp(2.5),
            height: hp(8),
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp(8),
          }}>
          <View>
            <Bell name="bell" size={35} color="#fff" />
          </View>
          <View>{/* <Text>gdfgd</Text> */}</View>
          <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
            <Menu name="menu" size={35} color="#fff" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: wp(90),
            marginHorizontal: hp(2.5),
            position: 'relative',
            borderRadius: hp(2),
            height: hp(22),
            shadowColor: '#000',
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 4,
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: wp(50),
              height: hp(25),
              borderRadius: hp(50),
              backgroundColor: '#1C37A4',
              position: 'absolute',
              top: hp(-21.5),
              left: hp(10),
            }}>
            <View
              style={{
                width: wp(26),
                height: hp(13),
                borderRadius: hp(50),
                borderWidth: 3,
                borderColor: 'gray',
                position: 'absolute',
                top: hp(11.5),
                left: hp(5.8),
              }}>
              <Image
                style={{width: wp(25), height: hp(11.8), borderRadius: hp(50)}}
                source={{uri: 'artg'}}
                resizeMode="contain"
              />
            </View>
          </View>
          <View>
            <View
              style={{
                width: wp(50),
                height: hp(7.9),
                flexDirection: 'row',
                marginTop: hp(3),
              }}>
              <View
                style={{
                  width: wp(12),
                  height: hp(6),
                  backgroundColor: '#58D68D ',
                  borderRadius: hp(2),
                  marginVertical: hp(1),
                  marginRight: hp(3),
                }}>
                {/* <Image style={{ width: wp(12), height: hp(6), borderRadius: hp(1) }} source={{ uri: 'artg' }} resizeMode='cover' /> */}
              </View>
              <View style={{marginTop: hp(0.5)}}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Text
                      style={{
                        color: '#6A6A6A',
                        fontSize: hp(2),
                        fontWeight: '600',
                        marginTop: hp(1),
                      }}>
                      Zeeshan Abdual Hafeez
                    </Text>
                  </View>
                  <View
                    style={{
                      width: wp(12),
                      height: hp(2),
                      marginTop: 12,
                      marginLeft: 10,
                      borderRadius: 5,
                      backgroundColor: '#D4FFCC',
                    }}>
                    <Text style={{fontSize: 10, paddingHorizontal: 8}}>
                      81090
                    </Text>
                  </View>
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
                          Senior Officer UX/UI Designer
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                width: wp(90),
                height: 1,
                backgroundColor: '#DBDBDB',
                marginTop: hp(2),
              }}>
              <Text>vxvdfbccfb</Text>
            </View>

            {/* card bottom content */}

            <View
              style={{
                width: wp(90),
                height: hp(7),
                paddingHorizontal: hp(2),
                flexDirection: 'row',
                marginTop: hp(2),
              }}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Check name="checkcircleo" size={30} color="#D4FFCC" />
                </View>
                <View style={{marginLeft: 10}}>
                  <View>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#353535',
                        fontWeight: 'bold',
                      }}>
                      Regular
                    </Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 10}}>Status</Text>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginLeft: hp(3.5)}}>
                <View>
                  <Wrench name="wrench" size={30} color="#BB8FCE" />
                </View>
                <View style={{marginLeft: 10}}>
                  <View>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#353535',
                        fontWeight: 'bold',
                      }}>
                      3.7 Years
                    </Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 10}}>Service</Text>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginLeft: hp(3.5)}}>
                <View>
                  <Check name="checkcircleo" size={30} color="#CD6155" />
                </View>
                <View style={{marginLeft: 10}}>
                  <View>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#353535',
                        fontWeight: 'bold',
                      }}>
                      31 Years
                    </Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 10}}>AGE</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{width:wp(90),marginHorizontal:hp(2.5),height:hp(50),marginTop:hp(2)}}>
            <View style={{width:wp(90),height:hp(6),borderRadius:hp(1),backgroundColor:'#FFFFFF',marginBottom:hp(2)}}>
                     <View style={{flexDirection:'row',marginVertical:hp(1),marginHorizontal:hp(1)}}>
                        <View>
                        <User name="user" size={30} color="#363636" />

                        </View>
                        <View style={{paddingVertical:hp(0.5),paddingHorizontal:hp(0.5)}}>
                            <Text  style={{fontSize:hp(2),color:'#363636'}}>Personal Information</Text>
                        </View>
                        <View style={{marginLeft:hp(15),paddingVertical:hp(0.8)}}>
                        <Gte name="right" size={20} color="gray" />

                        </View>
                     </View>
            </View>
            <View style={{width:wp(90),height:hp(6),borderRadius:hp(1),backgroundColor:'#FFFFFF',marginBottom:hp(2)}}>
                     <View style={{flexDirection:'row',marginVertical:hp(1),marginHorizontal:hp(1)}}>
                        <View>
                        <Phone name="phone" size={30} color="#363636" />

                        </View>
                        <View style={{paddingVertical:hp(0.5),paddingHorizontal:hp(0.5)}}>
                            <Text  style={{fontSize:hp(2),color:'#363636'}}>Service Information</Text>
                        </View>
                        <View style={{marginLeft:hp(15),paddingVertical:hp(0.8)}}>
                        <Gte name="right" size={20} color="gray" />

                        </View>
                     </View>
            </View>
            <View style={{width:wp(90),height:hp(6),borderRadius:hp(1),backgroundColor:'#FFFFFF',marginBottom:hp(2)}}>
                     <View style={{flexDirection:'row',marginVertical:hp(1),marginHorizontal:hp(1)}}>
                        <View>
                        <User name="user" size={30} color="#363636" />

                        </View>
                        <View style={{paddingVertical:hp(0.5),paddingHorizontal:hp(0.5)}}>
                            <Text  style={{fontSize:hp(2),color:'#363636'}}>Contact Information</Text>
                        </View>
                        <View style={{marginLeft:hp(15),paddingVertical:hp(0.8)}}>
                        <Gte name="right" size={20} color="gray" />

                        </View>
                     </View>
            </View>
            <View style={{width:wp(90),height:hp(6),borderRadius:hp(1),backgroundColor:'#FFFFFF',marginBottom:hp(2)}}>
                     <View style={{flexDirection:'row',marginVertical:hp(1),marginHorizontal:hp(1)}}>
                        <View>
                        <Phone name="phone" size={30} color="#363636" />

                        </View>
                        <View style={{paddingVertical:hp(0.5),paddingHorizontal:hp(0.5)}}>
                            <Text  style={{fontSize:hp(2),color:'#363636'}}>Movement Log</Text>
                        </View>
                        <View style={{marginLeft:hp(15),paddingVertical:hp(0.8)}}>
                        <Gte name="right" size={20} color="gray" />

                        </View>
                     </View>
            </View>
            <View style={{width:wp(90),height:hp(6),borderRadius:hp(1),backgroundColor:'#FFFFFF',marginBottom:hp(2)}}>
                     <View style={{flexDirection:'row',marginVertical:hp(1),marginHorizontal:hp(1)}}>
                        <View>
                        <User name="user" size={30} color="#363636" />

                        </View>
                        <View style={{paddingVertical:hp(0.5),paddingHorizontal:hp(0.5)}}>
                            <Text  style={{fontSize:hp(2),color:'#363636'}}>Children in Beaconhouse</Text>
                        </View>
                        <View style={{marginLeft:hp(15),paddingVertical:hp(0.8)}}>
                        <Gte name="right" size={20} color="gray" />

                        </View>
                     </View>
            </View>
            <View style={{width:wp(90),height:hp(6),borderRadius:hp(1),backgroundColor:'#FFFFFF',marginBottom:hp(2)}}>
                     <View style={{flexDirection:'row',marginVertical:hp(1),marginHorizontal:hp(1)}}>
                        <View>
                        <User name="user" size={30} color="#363636" />

                        </View>
                        <View style={{paddingVertical:hp(0.5),paddingHorizontal:hp(0.5)}}>
                            <Text  style={{fontSize:hp(2),color:'#363636'}}>Personal Information</Text>
                        </View>
                        <View style={{marginLeft:hp(15),paddingVertical:hp(0.8)}}>
                        <Gte name="right" size={20} color="gray" />

                        </View>
                     </View>
            </View>
            <View style={{width:wp(90),height:hp(6),borderRadius:hp(1),backgroundColor:'#FFFFFF',marginBottom:hp(2)}}>
                     <View style={{flexDirection:'row',marginVertical:hp(1),marginHorizontal:hp(1)}}>
                        <View>
                        <Phone name="phone" size={30} color="#363636" />

                        </View>
                        <View style={{paddingVertical:hp(0.5),paddingHorizontal:hp(0.5)}}>
                            <Text  style={{fontSize:hp(2),color:'#363636'}}>Personal Information</Text>
                        </View>
                        <View style={{marginLeft:hp(15),paddingVertical:hp(0.8)}}>
                        <Gte name="right" size={20} color="gray" />

                        </View>
                     </View>
            </View>
            

        </View>
        

      </View>

    </>
  );
};

export default Profile;

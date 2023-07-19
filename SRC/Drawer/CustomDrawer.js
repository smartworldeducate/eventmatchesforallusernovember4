import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import Menu from 'react-native-vector-icons/AntDesign';
// import Home from 'react-native-vector-icons/AntDesign';
// import Chart from 'react-native-vector-icons/Feather';
// import Hlap from 'react-native-vector-icons/FontAwesome5';
// import Doc from 'react-native-vector-icons/Entypo';
// import Clip from 'react-native-vector-icons/MaterialCommunityIcons';
// import Star from 'react-native-vector-icons/Entypo';

// import Event from 'react-native-vector-icons/MaterialCommunityIcons';
// import Session from 'react-native-vector-icons/Ionicons';
// import Hand from 'react-native-vector-icons/FontAwesome5';
// import Notification from 'react-native-vector-icons/Feather';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Contact from 'react-native-vector-icons/FontAwesome';
// import Help from 'react-native-vector-icons/Feather';
// import Out from 'react-native-vector-icons/FontAwesome';
import {Image} from 'react-native';
// import { useSelector } from 'react-redux';

const CustomDrawer = ({navigation}) => {
  const [user, setUser] = useState('');

  return (
    <>
      <ImageBackground
        source={{uri: 'drawer'}}
        style={{flex: 1}}
        resizeMode={'cover'}>
        <View
          style={{
            width: wp(90),
            marginHorizontal: hp(2.5),
            height: hp(10),
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View style={{width: wp(70), height: hp(10)}}>
            {/* <Text>fdgdgd</Text> */}
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.closeDrawer();
            }}
            style={{width: wp(20), height: hp(10)}}>
            <Text
              style={{
                color: '#fff',
                paddingTop: hp(5),
                paddingLeft: hp(5),
                fontSize: hp(3),
              }}>
              X
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, marginHorizontal: hp(5)}}>
          <View
            style={{
              width: wp(50),
              height: hp(7.9),
              flexDirection: 'row',
              marginHorizontal: hp(2),
            }}>
            <View
              style={{
                width: wp(14),
                height: hp(7),
                backgroundColor: '#58D68D ',
                borderRadius: hp(50),
                marginRight: hp(3),
              }}>
              <Image
                style={{
                  width: wp(14),
                  borderWidth: 1,
                  borderColor: 'gray',
                  height: hp(7),
                  borderRadius: hp(50),
                }}
                source={{uri: 'artg'}}
                resizeMode="cover"
              />
            </View>
            <View style={{marginTop: hp(0.5)}}>
              <View>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: hp(2),
                    fontWeight: '600',
                    marginTop: hp(1),
                  }}>
                  Zeeshan Abdual Hafeez
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                <View style={{marginRight: hp(1)}}>
                  <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                    <View style={{marginRight: hp(1)}}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: hp(1.5),
                          fontWeight: '600',
                        }}>
                        View Profile
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{width: wp(50), height: hp(5), marginTop: wp(5)}}>
            <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
              <View style={{flexDirection: 'row', marginLeft: hp(3)}}>
                {/* <View >
              <Icon name='home' size={25} color='#fff'/>
              </View> */}
                <View style={{marginLeft: hp(2), marginTop: hp(0.3)}}>
                  <Text style={{fontSize: hp(1.8), color: '#fff'}}>Home</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{width: wp(50), height: hp(5), marginTop: wp(3)}}>
            <TouchableOpacity onPress={()=>navigation.navigate('ApplicationType')}>
              <View style={{flexDirection: 'row', marginLeft: hp(3)}}>
                {/* <View >
              <Icon name='home' size={25} color='#fff'/>
              </View> */}
                <View style={{marginLeft: hp(2), marginTop: hp(0.3)}}>
                  <Text style={{fontSize: hp(1.8), color: '#fff'}}>
                    Attendance
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{width: wp(50), height: hp(5), marginTop: wp(3)}}>
            <TouchableOpacity  onPress={()=>navigation.navigate('Financial')}>
              <View style={{flexDirection: 'row', marginLeft: hp(3)}}>
                {/* <View >
              <Icon name='home' size={25} color='#fff'/>
              </View> */}
                <View style={{marginLeft: hp(2), marginTop: hp(0.3)}}>
                  <Text style={{fontSize: hp(1.8), color: '#fff'}}>
                    Financials
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{width: wp(50), height: hp(5), marginTop: wp(3)}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
              <View style={{flexDirection: 'row', marginLeft: hp(3)}}>
                {/* <View >
              <Icon name='home' size={25} color='#fff'/>
              </View> */}
                <View style={{marginLeft: hp(2), marginTop: hp(0.3)}}>
                  <Text style={{fontSize: hp(1.8), color: '#fff'}}>
                    Timeline
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{width: wp(50), height: hp(5), marginTop: wp(3)}}>
            <TouchableOpacity>
              <View style={{flexDirection: 'row', marginLeft: hp(3)}}>
                {/* <View >
              <Icon name='home' size={25} color='#fff'/>
              </View> */}
                <View style={{marginLeft: hp(2), marginTop: hp(0.3)}}>
                  <Text style={{fontSize: hp(1.8), color: '#fff'}}>
                    Reportees
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{width: wp(50), height: hp(5), marginTop: wp(3)}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Wfh')}>
              <View style={{flexDirection: 'row', marginLeft: hp(3)}}>
                {/* <View >
              <Icon name='home' size={25} color='#fff'/>
              </View> */}
                <View style={{marginLeft: hp(2), marginTop: hp(0.3)}}>
                  <Text style={{fontSize: hp(1.8), color: '#fff'}}>
                    Appraisal
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{width: wp(50), height: hp(5), marginTop: wp(3)}}>
            <TouchableOpacity>
              <View style={{flexDirection: 'row', marginLeft: hp(3)}}>
                {/* <View >
              <Icon name='home' size={25} color='#fff'/>
              </View> */}
                <View style={{marginLeft: hp(2), marginTop: hp(0.3)}}>
                  <Text style={{fontSize: hp(1.8), color: '#fff'}}>
                    Children in BSS
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{width: wp(50), height: hp(5), marginTop: wp(3)}}>
            <TouchableOpacity>
              <View style={{flexDirection: 'row', marginLeft: hp(3)}}>
                {/* <View >
              <Icon name='home' size={25} color='#fff'/>
              </View> */}
                <View style={{marginLeft: hp(2), marginTop: hp(0.3)}}>
                  <Text style={{fontSize: hp(1.8), color: '#fff'}}>Index</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{width: wp(50), height: hp(5), marginTop: wp(3)}}>
            <TouchableOpacity>
              <View style={{flexDirection: 'row', marginLeft: hp(3)}}>
                {/* <View >
              <Icon name='home' size={25} color='#fff'/>
              </View> */}
                <View style={{marginLeft: hp(2), marginTop: hp(0.3)}}>
                  <Text style={{fontSize: hp(1.8), color: '#fff'}}>
                    Feedback
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <View style={{width: wp(50), height: hp(5), marginTop: wp(3)}}>
                <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
                  <View style={{flexDirection: 'row', marginLeft: hp(3)}}>
                    {/* <View >
              <Icon name='home' size={25} color='#fff'/>
              </View> */}
                    <View style={{marginLeft: hp(2), marginTop: hp(0.3)}}>
                      <Text style={{fontSize: hp(1.8), color: '#fff'}}>
                        Change Password
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{width: wp(50), height: hp(5), marginTop: wp(3)}}>
                <TouchableOpacity>
                  <View style={{flexDirection: 'row', marginLeft: hp(3)}}>
                    {/* <View >
              <Icon name='home' size={25} color='#fff'/>
              </View> */}
                    <View style={{marginLeft: hp(2), marginTop: hp(0.3)}}>
                      <Text style={{fontSize: hp(1.8), color: '#fff'}}>
                        Logout
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Image
                style={{width: wp(38), height: hp(20)}}
                source={{uri: 'dimg'}}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default CustomDrawer;

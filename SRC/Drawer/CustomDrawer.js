import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-fontawesome-pro';
import { StackActions} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Image } from 'react-native';
import fontFamily from '../Styles/fontFamily';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CustomDrawer = ({ navigation }) => {

  const navigatorHandler=(screen)=>{
    navigation.navigate(screen);
    navigation.closeDrawer();
  }


  async function saveData() {
   console.log("logout")
      await AsyncStorage.removeItem("loginData");
      navigation.dispatch(StackActions.replace('SigninScreen'))
      
    
  }
  // console.log(' drawer lacal data', localData?.EMP_PHOTO);

  return (
    <>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#0AA3F5', '#0A8DF5']}
        style={{ flex: 1 }}>
        <View
          style={{
            width: wp(90),
            marginHorizontal: hp(2.5),
            height: hp(10),
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: hp(3),
          }}>
          <View style={{ width: wp(70), height: hp(10) }}></View>
          <TouchableOpacity
            onPress={() => {
              navigation.closeDrawer();
            }}
            style={{ width: wp(20), height: hp(10) }}>
            <View
              style={{
                color: '#fff',
                paddingTop: hp(5),
                paddingLeft: hp(7),
                fontSize: hp(3),
              }}>
              <Icon type="light" name="xmark" size={hp(3.5)} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, marginHorizontal: hp(5) }}>
          <View
            style={{
              width: wp(50),
              height: hp(7.9),
              flexDirection: 'row',
              marginHorizontal: hp(3),
              marginTop: hp(1),
            }}>
            <TouchableOpacity
            onPress={()=>navigatorHandler('Speaker')}
              style={{
                width: wp(18),
                height: hp(9),
                backgroundColor: '#58D68D ',
                borderRadius: hp(50),
                marginRight: hp(3),
                borderWidth:1,
                borderColor:'#fff'
              }}>
              <Image
                style={{
                  width: '100%',
                  borderWidth: 1,
                  borderColor: 'gray',
                  height:'100%',
                  borderRadius: hp(50),
                }}
                source={{ uri: 'imgfive' }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View style={{ marginLeft: hp(-2),marginTop:hp(1) }}>
              <View>
                <Text style={styles.username}>Qasim Ali Khan</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: hp(0) }}>
                <View style={{ marginRight: hp(1) }}>
                  <View style={{ flexDirection: 'row', marginTop: hp(0) }}>
                    <View style={{ marginRight: hp(1) }}>
                      <Text style={styles.viewProfile}>View Profile</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.listnameStyle, { marginTop: hp(4) }]}>
            <TouchableOpacity
              onPress={() => navigatorHandler('HomeScreenDrawer')}>
              <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                <View style={{}}>
                <Icon type='light' name="house" size={hp(2.5)} color={'#fff'}  style={{marginTop:hp(1)}}/>   
                </View>
                <View>
                <Text style={[styles.textlistStyle,{paddingLeft:hp(2)}]}>Home</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.listnameStyle, { marginTop: hp(1.5) }]}>
            <TouchableOpacity
              onPress={() => navigatorHandler('Events')}>
              <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                <View style={{}}>
                <Icon type='light' name="calendar-star" size={hp(2.5)} color={'#fff'} />   
                </View>
                <View>
                <Text style={[styles.textlistStyle,{paddingLeft:hp(2)}]}>Events</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.listnameStyle, { marginTop: hp(1.5) }]}>
            <TouchableOpacity
              onPress={() => navigatorHandler('Events')}>
              <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                <View style={{}}>
                <Icon type='light' name="calendar-lines-pen" size={hp(2.5)} color={'#fff'} />   
                </View>
                <View>
                <Text style={[styles.textlistStyle,{paddingLeft:hp(2)}]}>Events Info</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.listnameStyle, { marginTop: hp(1.5) }]}>
            <TouchableOpacity
              onPress={() => navigatorHandler('Exibitor')}>
              <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                <View style={{}}>
                <Icon type='light' name="person-chalkboard"  size={hp(3.5)} color={'#fff'}/>   
                </View>
                <View>
                <Text style={[styles.textlistStyle,{paddingLeft:hp(1.1)}]}>Exhibitor</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.listnameStyle, { marginTop: hp(1.5) }]}>
            <TouchableOpacity
              onPress={() => navigatorHandler('SpeakerList')}>
              <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                <View style={{}}>
                <Icon type='light' name="user-tie" size={hp(2.5)} color={'#fff'}/>  
                </View>
                <View>
                <Text style={[styles.textlistStyle,{paddingLeft:hp(1.5)}]}> Speaker</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.listnameStyle, { marginTop: hp(1.5) }]}>
            <TouchableOpacity
              onPress={() => navigatorHandler('Attendees')}>
              <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                <View style={{}}>
                <Icon type='light' name="users"  size={hp(3)} color={'#fff'}/>   
                </View>
                <View>
                <Text style={[styles.textlistStyle,{paddingLeft:hp(1.5)}]}>Attendees</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.listnameStyle, { marginTop: hp(1.5) }]}>
            <TouchableOpacity
              onPress={() => navigatorHandler('Attendees')}>
              <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                <View style={{}}>
                <Icon type='light' name="clipboard-list-check"  size={hp(2.5)} color={'#fff'}/>   
                </View>
                <View>
                <Text style={[styles.textlistStyle,{paddingLeft:hp(2)}]}>Survey</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.listnameStyle, { marginTop: hp(1.5) }]}>
            <TouchableOpacity
              onPress={() => navigatorHandler('Qrcode')}>
              <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                <View style={{}}>
                <Icon type='light' name="qrcode"  size={hp(2.5)} color={'#fff'}/>
                </View>
                <View>
                <Text style={[styles.textlistStyle,{paddingLeft:hp(1.8)}]}>Qr Code</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.listnameStyle, { marginTop: hp(1.5) }]}>
            <TouchableOpacity
              onPress={() => navigatorHandler('Schedulemeeting')}>
              <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                <View style={{}}>
                <Icon type='light' name="screencast"  size={hp(2.5)} color={'#fff'}/>
                </View>
                <View>
                <Text style={[styles.textlistStyle,{paddingLeft:hp(1.8)}]}>Meeting Schedule</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.listnameStyle, { marginTop: hp(1.5),zIndex:9}]}>
            <TouchableOpacity
              onPress={saveData}>
              <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                <View style={{}}>
                <Icon type='light' name="right-from-bracket"  size={hp(2.5)} color={'#fff'}/>
                </View>
                <View>
                <Text style={[styles.textlistStyle,{paddingLeft:hp(1.8)}]}>Logout</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:0.32,flexDirection:'row'}}>
          <View style={{flex:0.15}}></View>
          <View style={{flex:0.8}}>
          <Image
            style={{ width: '100%', height: '100%', paddingTop: hp(5) }}
            source={{ uri: 'drawerimg' }}
            resizeMode="contain"
          />
          </View>
       
        </View>
      </LinearGradient>
    </>
  );
};

export default CustomDrawer;

const styles = EStyleSheet.create({
  username: {
    fontSize: '0.85rem',
    color: '#fff',
    fontWeight: '600',
    marginTop: hp(1),
    fontFamily: fontFamily.robotoMedium,
    fontStyle: 'normal',
  },
  viewProfile: {
    fontSize: '0.5rem',
    color: '#FFF',
    fontSize: hp(1.5),
    fontWeight: '400',
    fontFamily: fontFamily.robotoMedium,
    fontStyle: 'normal',
  },
  textlistStyle: {
    fontSize: '0.8rem',
    color: '#fff',
    fontWeight: '400',
    fontFamily: fontFamily.robotoLight,
    fontStyle: 'normal',
    
  },
  listnameStyle: { width: wp(50), height: hp(5), marginTop: hp(1) },
  homeleft: { marginLeft: hp(0.5),flexDirection:'row',backgroundColor:'red'},
});

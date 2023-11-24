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
  const [localData, setLocalData] = useState(null);
  const [data, setData] = useState([]);
  const userData = useSelector(state => state.userLogin);
  console.log('drawer data', userData?.user);
  async function getData(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // console.log('Data retrieved successfully:', value);
        const parsedData = JSON.parse(value);
        setLocalData(parsedData);
        return value;
      } else {
        console.log('No data found for key:', key);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  }

  async function saveData() {
   console.log("logout")
      await AsyncStorage.removeItem("loginData");
      navigation.dispatch(StackActions.replace('Login'))
      
    
  }
  // console.log(' drawer lacal data', localData?.EMP_PHOTO);
  useEffect(() => {
    getData('loginData');
  }, []);
  return (
    <>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#1C37A5', '#4D69DC']}
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
                source={{ uri: 'artg' }}
                resizeMode="cover"
              />
            </View>
            <View style={{ marginLeft: hp(-2) }}>
              <View>
                <Text style={styles.username}>Salman Ali</Text>
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
              onPress={() => navigation.navigate('HomeScreenDrawer')}>
              <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                <View style={styles.homeleft}>
                  <Text style={styles.textlistStyle}>Home</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.listnameStyle}>
            <TouchableOpacity onPress={() => navigation.navigate('Attendance')}>
              <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                <View style={styles.homeleft}>
                  <Text style={styles.textlistStyle}>Attendance</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.listnameStyle}>
            <TouchableOpacity onPress={() => navigation.navigate('Financial')}>
              <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                <View style={styles.homeleft}>
                  <Text style={styles.textlistStyle}>Financials</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.listnameStyle}>
            <TouchableOpacity onPress={() => navigation.navigate('TimeLine')}>
              <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                <View style={styles.homeleft}>
                  <Text style={styles.textlistStyle}>Timeline</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.listnameStyle}>
            <TouchableOpacity onPress={() => navigation.navigate('Reportee')}>
              <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                <View style={styles.homeleft}>
                  <Text style={styles.textlistStyle}>Reportees</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.listnameStyle}>
            <TouchableOpacity onPress={() => navigation.navigate('Approcial')}>
              <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                <View style={styles.homeleft}>
                  <Text style={styles.textlistStyle}>Appraisal</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.listnameStyle}>
            <TouchableOpacity onPress={() => navigation.navigate('ChildBss')}>
              <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                <View style={styles.homeleft}>
                  <Text style={styles.textlistStyle}>Children in BSS</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.listnameStyle}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                <View style={styles.homeleft}>
                  <Text style={styles.textlistStyle}>Index</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.listnameStyle}>
            <TouchableOpacity onPress={() => navigation.navigate('FeedBack')}>
              <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                <View style={styles.homeleft}>
                  <Text style={styles.textlistStyle}>Feedback</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.listnameStyle}>
            <TouchableOpacity onPress={() => navigation.navigate('Utility')}>
              <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                <View style={styles.homeleft}>
                  <Text style={styles.textlistStyle}>Utility</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <View style={styles.listnameStyle}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotPassword')}>
                  <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                    <View style={styles.homeleft}>
                      <Text style={styles.textlistStyle}>Change Password</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.listnameStyle}>
                <TouchableOpacity
                  onPress={saveData}>
                  <View style={{ flexDirection: 'row', marginLeft: hp(3) }}>
                    <View style={styles.homeleft}>
                      <Text style={styles.textlistStyle}>Logout</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Image
                style={{ width: wp(38), height: hp(20) }}
                source={{ uri: 'dimg' }}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default CustomDrawer;

const styles = EStyleSheet.create({
  username: {
    fontSize: '0.7rem',
    color: '#fff',
    fontWeight: '700',
    marginTop: hp(1),
    fontFamily: fontFamily.ceraBold,
    fontStyle: 'normal',
  },
  viewProfile: {
    fontSize: '0.5rem',
    color: '#FFF',
    fontSize: hp(1.5),
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
  },
  textlistStyle: {
    fontSize: '0.7rem',
    color: '#fff',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
  },
  listnameStyle: { width: wp(50), height: hp(5), marginTop: hp(1) },
  homeleft: { marginLeft: hp(0.5) },
});

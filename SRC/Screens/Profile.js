import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Check from 'react-native-vector-icons/AntDesign';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-fontawesome-pro';
import fontFamily from '../Styles/fontFamily';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ExpandableList from '../Components/expandlist/ExpandableList';
const Profile = props => {
  const data = [
    {iconName: 'user', textName: 'Personal Information',fatherName:'Abdual Hafeez',gender:'Male',religin:'Islam',date:'08 oct 1991',cnic:'31101-8356254-5'},
    {iconName: 'user-gear', textName: 'Service Information',fatherName:'Abdual Hafeez'},
    {iconName: 'money-bill-1-wave', textName: 'Financial Information',fatherName:'Abdual Hafeez'},
    {iconName: 'clipboard-check', textName: 'Movement Log',fatherName:'Abdual Hafeez'},
    {iconName: 'child', textName: 'Children in Beaconhouse',fatherName:'Abdual Hafeez'},
    {iconName: 'user', textName: 'Personal Information',fatherName:'Abdual Hafeez'},
   
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1C37A4'}}>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            marginHorizontal: hp(2.5),
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp(8),
          }}>
          <TouchableOpacity onPress={()=>props.navigation.navigate('Notification')}>
            < Icon type='light' name="bell" size={hp(3)} color="#FFF" />
          </TouchableOpacity>
          <View>{/* <Text>gdfgd</Text> */}</View>
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            {/* <Menu name="menu" size={35} color="#fff" /> */}
            <Image
                style={styles.menustyle}
                source={{uri: 'menuicon'}}
                resizeMode="cover"
              />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            marginHorizontal: hp(2.5),
            marginTop: hp(6),
            borderRadius: hp(2),
            height: hp(20),
            shadowColor: '#000',
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 4,
            backgroundColor: '#FFF',
          }}>
          <View
            style={{
              width: wp(50),
              height: hp(25),
              borderRadius: hp(50),
              backgroundColor: '#1C37A4',
              position: 'absolute',
              top: hp(-23.5),
              left: hp(9),
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: wp(21),
                height: hp(10.5),
                borderRadius: hp(50),
                borderWidth: 3,
                borderColor: 'gray',
                position: 'absolute',
                top: hp(14),
                left: hp(7.5),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: wp(20), height: hp(10), borderRadius: hp(50)}}
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
                    <Text style={styles.zetext}>Zeeshan Abdual Hafeez</Text>
                  </View>
                  <View
                    style={{
                      height: hp(2),
                      marginTop: hp(0.8),
                      marginLeft: 10,
                      borderRadius: 5,
                      backgroundColor: '#D4FFCC',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={styles.textnum}>
                      81090
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                  <View style={{marginRight: hp(1)}}>
                    <View style={{flexDirection: 'row', marginTop: hp(0)}}>
                      <View style={{marginRight: hp(1)}}>
                        <Text style={styles.zetext1}>
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
                marginTop: hp(1),
              }}>
              {/* <Text>vxvdfbccfb</Text> */}
            </View>

            {/* card bottom content */}

            <View
              style={{
                width: wp(90),
                height: hp(7),
                flexDirection: 'row',
                marginTop: hp(2),
                justifyContent: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{alignItems: 'center', paddingVertical: hp(0.3)}}>
                  <Check name="checkcircleo" size={hp(3.5)} color="#D4FFCC" />
                </View>
                <View style={{marginLeft: hp(0.8)}}>
                  <View>
                    <Text style={styles.smalltext}>Regular</Text>
                  </View>
                  <View>
                    <Text style={styles.smalltext1}>STATUS</Text>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginLeft: hp(3.5)}}>
                <View style={{alignItems: 'center', paddingVertical: hp(0.3)}}>
                  <Icon type='light' name="wrench" size={hp(3.5)} color="#BB8FCE" />
                </View>
                <View style={{marginLeft: hp(0.5)}}>
                  <View>
                    <Text style={styles.smalltext}>3.7 Years</Text>
                  </View>
                  <View>
                    <Text style={styles.smalltext1}>SERVICE</Text>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginLeft: hp(3.5)}}>
                <View style={{alignItems: 'center', paddingVertical: hp(0.3)}}>
                  <Check name="checkcircleo" size={hp(3.5)} color="#CD6155" />
                </View>
                <View style={{marginLeft: hp(0.5)}}>
                  <View>
                    <Text style={styles.smalltext}>31 Years</Text>
                  </View>
                  <View>
                    <Text style={styles.smalltext1}>AGE</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            width: wp(90),
            marginHorizontal: hp(2.5),
            marginTop: hp(2),
          }}>
          {data.map((item, i) => {
            return (
              <ExpandableList
                IconName={item.iconName}
                textName={item.textName}
                fatherName={item.fatherName}
                religin={item.religin}
                date={item.date}
                cnic={item.cnic}
                gender={item.gender}
                key={i}
              />
            );
          })}
        </View>
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = EStyleSheet.create({
  zetext: {
    color: '#363636',
    fontWeight: '700',
    fontSize: '0.7rem',
    fontFamily: fontFamily.ceraBold,
    fontStyle:'normal'
  },
  zetext1: {
    color: '#363636',
    fontWeight: '500',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
  },
  smalltext: {
    fontWeight: '700',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraBold,
    color: '#353535',
    fontStyle: 'normal',
  },
  smalltext1: {
    fontWeight: '500',
    fontSize: '0.5rem',
    fontFamily: fontFamily.ceraMedium,
    color: '#979797',
    fontStyle: 'normal',
    alignItems: 'center',
    textTransform:'uppercase'
  },
  textnum:{
    fontSize: '0.5rem',
    paddingHorizontal: 8,
    color: '#2D8E00',
    fontStyle:'normal',
    fontWeight:'700'
  },
  menustyle:{
    width:'1.3rem',
    height:'1rem',
    
  },
});

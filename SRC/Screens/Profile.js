import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import Icon from 'react-native-fontawesome-pro';
import {speakerDetailHandler} from '../features/speakerDetail/speakerDetailSlice'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../Styles/colors';
import fontFamily from '../Styles/fontFamily';
import { useDispatch, useSelector } from 'react-redux';
const Profile = props => {
  const dispatch = useDispatch();
  const speakerDetailData=useSelector((state)=>state.speakerDetailState);
  // console.log("dpeakerDetai==",speakerDetailData);
  const {item,event_id} = props.route.params;
  // console.log('speaker detail==', item,event_id);
  const [abstract, setAbstract] = useState(true);
  const [speaker, setSpeaker] = useState(false);
  const [resurces, setResurces] = useState(false);

 
  useEffect(() => {
    dispatch(speakerDetailHandler({"event_id":event_id,"speaker_id":item?.speaker_id}));
  }, []);
  const data = [
    {id: 1, image: 'imgone'},
    {id: 2, image: 'imgtwo'},
    {id: 3, image: 'imgfore'},
  ];

  const cardData = [
    {
      id: 1,
      image: 'banertwo',
      headingText: 'A Beginner s Guide',
      timetext: '10:00 - 11:00',
      locatoin: 'Manchester',
      btntext: 'Register',
    },
    {
      id: 2,
      image: 'cardtwo',
      headingText: 'Simple Tips for Success',
      timetext: '11:00 - 12:00',
      locatoin: 'Glasgow',
      btntext: 'Un-Register',
    },
    {
      id: 3,
      image: 'cardone',
      headingText: 'Your Event Success For',
      timetext: '13:00 - 14:00',
      locatoin: 'Bristol',
      btntext: 'Register',
    },
    {
      id: 3,
      image: 'banertwo',
      headingText: 'A Beginner s Guide',
      timetext: '10:00 - 11:00',
      locatoin: 'Manchester',
      btntext: 'Register',
    },
  ];
  // const renderItem = ({item, index}) => {
  //   return (
  //     <View
  //       style={{
  //         flex: 0.19,
  //         borderRadius: hp(3),
  //         borderWidth: 1,
  //         borderColor: '#cdcdcd',
  //         flexDirection: 'row',
  //         marginTop: hp(1.5),
  //       }}>
  //       <View style={{flex: 0.45, height: hp[5]}}>
  //         {/* banertwo */}
  //         <Image
  //           style={{
  //             width: '100%',
  //             height: '100%',
  //             paddingTop: hp(2),
  //             borderBottomLeftRadius: hp(2),
  //             borderTopLeftRadius: hp(2),
  //           }}
  //           source={{uri: item.image}}
  //           resizeMode="contain"
  //         />
  //       </View>
  //       <View style={{flex: 0.55}}>
  //         <View style={{marginHorizontal: hp(1.5), marginVertical: hp(1.5)}}>
  //           <Text
  //             style={{
  //               color: colors.lightBlack,
  //               fontWeight: '500',
  //               fontSize: hp(2),
  //               fontFamily: fontFamily.robotoMedium,
  //             }}>
  //             {item.headingText}
  //           </Text>
  //           <Text
  //             style={{
  //               color: 'gray',
  //               fontWeight: '300',
  //               fontFamily: fontFamily.robotoLight,
  //               fontSize: hp(2),
  //             }}>
  //             1{item.timetext}
  //           </Text>
  //           <View style={{marginTop: hp(0.7)}}>
  //             <Text
  //               style={{
  //                 color: colors.lightBlue,
  //                 fontWeight: '500',
  //                 fontFamily: fontFamily.robotoMedium,
  //                 fontSize: hp(2),
  //               }}>
  //               Workshop
  //             </Text>
  //           </View>
  //           <View style={styles.headerImageSection}>
  //             {data.slice(0, 7).map((item, i) => {
  //               return (
  //                 <TouchableOpacity style={styles.imageList} key={i}>
  //                   <Image
  //                     style={styles.imgStyle}
  //                     source={{uri: item.image}}
  //                     resizeMode="cover"
  //                   />
  //                 </TouchableOpacity>
  //               );
  //             })}
  //           </View>
  //           <View style={{flexDirection: 'row'}}>
  //             <View style={{flex: 0.6, flexDirection: 'row'}}>
  //               <View style={{flex: 0.3}}>
  //                 <Icon
  //                   type="light"
  //                   name="location-dot"
  //                   size={hp(2.5)}
  //                   color="#2CC2E4"
  //                 />
  //               </View>

  //               <View style={{flex: 0.9}}>
  //                 <Text style={{color: colors.lightBlack}}>
  //                   {item.locatoin}
  //                 </Text>
  //               </View>
  //             </View>
  //             <View style={{flex: 0.1}}></View>
  //             <TouchableOpacity
  //               style={{
  //                 justifyContent: 'center',
  //                 alignItems: 'center',
  //                 flex: 0.4,
  //                 borderRadius: hp(0.9),
  //                 borderColor: '#2CC2E4',
  //                 borderWidth: 1,
  //                 height: hp(5),
  //                 marginTop: hp(-1.4),
  //                 marginLeft: hp(-1),
  //                 backgroundColor: '#2CC2E4',
  //                 height: hp(4),
  //               }}>
  //               <Text style={{color: '#fff', fontWeight: '600'}}>Register</Text>
  //             </TouchableOpacity>
  //           </View>
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };

  // const renderItem = ({item, index}) => {
  //   return (
  //     <TouchableOpacity onPress={()=>props.navigation.navigate('Session',{item})} style={{ flex: 0.19, borderRadius: hp(3), borderWidth: 1, borderColor: '#cdcdcd', flexDirection: 'row',marginTop:hp(1.5) }}>
  //       <View style={{ flex: 0.45, height: hp[(5)] }}>
  //         {/* banertwo */}
  //         <Image
  //           style={{ width: '100%', height: '100%', paddingTop: hp(2), borderBottomLeftRadius: hp(2), borderTopLeftRadius: hp(2) }}
  //           source={{ uri:'banertwo'}}
  //           resizeMode="contain"
  //         />
  //       </View>
  //       <View style={{ flex: 0.55 }}>
  //         <View style={{ marginHorizontal: hp(1.5), marginVertical: hp(1.5) }}>
  //           <Text style={{ color:colors.lightBlack, fontWeight: '500', fontSize: hp(2),fontFamily:fontFamily.robotoMedium }} ellipsizeMode={'tail'} numberOfLines={1}>{item?.activity_name}</Text>
  //           <Text style={{ color: 'gray', fontWeight: '300',fontFamily:fontFamily.robotoLight,fontSize: hp(2) }}>{item?.start_time} - {item?.end_time}</Text>
  //           <View style={{ marginTop: hp(0.7) }}>{}
  //             <Text style={{ color: colors.lightBlue, fontWeight: '500',fontFamily:fontFamily.robotoMedium,fontSize: hp(2) }}>{item?.activity_type}</Text>
  //           </View>
  //           <View style={styles.headerImageSection}>
  //             {data.slice(0, 7).map((item, i) => {

  //               return (
  //                 <TouchableOpacity

  //                   style={styles.imageList}
  //                   key={i}>
  //                   <Image
  //                     style={styles.imgStyle}
  //                     source={{ uri: item.image }}
  //                     resizeMode="cover"
  //                   />
  //                 </TouchableOpacity>
  //               );

  //             })}
  //           </View>
  //           <View style={{ flexDirection: 'row' }}>
  //             <View style={{ flex: 0.6, flexDirection: 'row' }}>

  //               <TouchableOpacity onPress={()=>props.navigation.navigate("MapScreen")} style={{ flex: 0.3 }}>
  //                 <Icon type="light" name="location-dot" size={hp(2.5)} color="#2CC2E4" />
  //               </TouchableOpacity>

  //               <TouchableOpacity style={{ flex: 0.9 }}>
  //                 <Text style={{ color: colors.lightBlack,fontFamily:fontFamily.robotoLight}}>Bristol</Text>
  //               </TouchableOpacity>
  //             </View>
  //             <View style={{ flex: 0.1 }}></View>
  //             <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flex: 0.4, borderRadius: hp(0.9), borderColor: '#2CC2E4', borderWidth: 1, height: hp(5), marginTop: hp(-1.4), marginLeft: hp(-1), backgroundColor: '#2CC2E4',height:hp(4) }}>
  //               <Text style={{ color: '#fff', fontWeight: '500',fontFamily:fontFamily.robotoLight }}>Register</Text>
  //             </TouchableOpacity>
  //           </View>
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };

  const abstractHandler = () => {
    setAbstract(true);
    setSpeaker(false);
    setResurces(false);
  };
  const speakerHandler = () => {
    setAbstract(false);
    setSpeaker(true);
    setResurces(false);
  };
  const resucesHandler = () => {
    setAbstract(false);
    setSpeaker(false);
    setResurces(true);
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'default'}
        translucent
        backgroundColor="transparent"
      />
      <View style={{flex: 0.18}}>
        <MainHeader
          text={'Profile'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <View style={{flex: 0.3}}>
        <View
          style={{
            flex: 0.71,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flex: 0.3}}></View>
          <View style={{flex: 0.31,borderRadius:hp(50),borderColor:'#cdcdcd',borderWidth:1}}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                borderRadius: hp(0),
                borderRadius: hp(50),
              }}
              source={{uri:item?.image_name}}
              resizeMode="contain"
            />
          </View>

          <View style={{flex: 0.3}}></View>
        </View>
        <View
          style={{
            flex: 0.29,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: hp(0),
            // backgroundColor:'red'
            
          }}>
          <Text
            style={{
              color: colors.descBlack,
              fontSize: hp(2.2),
              fontWeight: '500',
              fontFamily: fontFamily.robotoMedium,
            }}>
            {item?.speaker_name}
          </Text>
          <Text
            style={{
              color: colors.grayDescColor,
              fontSize: hp(1.7),
              fontWeight: '500',
              fontFamily: fontFamily.robotoLight,
            }}>
            {item?.designation}
          </Text>
        </View>
      </View>
      
      <View
        style={{
          flex:0.12,
          marginHorizontal: hp(2.5),
          justifyContent: 'center',
          marginVertical: hp(2),
          flexDirection: 'row',
          alignItems: 'center',
          // backgroundColor:'green'
        }}>
        <TouchableOpacity
          onPress={abstractHandler}
          style={{
            flex: 0.37,
            borderRadius: hp(5),
            borderWidth: 1.5,
            borderColor: '#2CC2E4',
            height: hp(5.5),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: abstract ? '#2CC2E4' : '#fff',
          }}>
          <Text
            style={{
              color: abstract ? '#fff' : '#2CC2E4',
              fontSize: hp(2),
              fontWeight: '500',
              fontFamily: fontFamily.robotoMedium,
            }}>
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={speakerHandler}
          style={{
            flex: 0.37,
            borderRadius: hp(5),
            borderWidth: 1.5,
            borderColor: '#2CC2E4',
            height: hp(5.5),
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: hp(1),
            backgroundColor: speaker ? '#2CC2E4' : '#fff',
          }}>
          <Text
            style={{
              color: speaker ? '#fff' : '#2CC2E4',
              fontSize: hp(2),
              fontWeight: '500',
              fontFamily: fontFamily.robotoMedium,
            }}>
            Profile
          </Text>
          {/* <Text style={{color:'#2CC2E4',fontSize:hp(1.3),fontWeight:'300'}}>8th, Nov 2022</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={resucesHandler}
          style={{
            flex: 0.37,
            borderRadius: hp(5),
            borderWidth: 1.5,
            borderColor: '#2CC2E4',
            height: hp(5.5),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: resurces ? '#2CC2E4' : '#fff',
          }}>
          <Text
            style={{
              color: resurces ? '#fff' : '#2CC2E4',
              fontSize: hp(2),
              fontWeight: '600',
              fontFamily: fontFamily.robotoBold,
            }}>
            Session
          </Text>
        </TouchableOpacity>
      </View>

      {abstract && (
        <View style={{flex: 0.7, marginHorizontal: hp(3)}}>
            <View style={{justifyContent:'center',alignItems:'center',flex:0.1,height:hp(5)}}>
            <Text style={{color:colors.grayDescColor,fontSize:hp(2)}}>No Data Available.</Text>
          </View>
          {/* <ScrollView>
            <View>
              <Text
                style={{
                  color:'#000',
                  fontSize: hp(2),
                  fontWeight: '300',
                  lineHeight: hp(3),
                  letterSpacing: hp(0.25),
                  fontFamily: fontFamily.robotoLight,
                }}>
                {item?.description}
              </Text>
            </View>
          </ScrollView> */}
        </View>
      )}

      {speaker && (
        <View style={{flex: 0.7, marginHorizontal: hp(3)}}>
          <View style={{justifyContent:'center',alignItems:'center',flex:0.1,height:hp(5)}}>
            <Text style={{color:colors.grayDescColor,fontSize:hp(2)}}>No Data Available.</Text>
          </View>
          {/* <ScrollView>
            <View style={{marginBottom: hp(1.5)}}>
              <Text
                style={{
                  color: colors.blackColor,
                  fontSize: hp(2),
                  fontWeight: '300',
                  fontFamily: fontFamily.robotoLight,
                }}>
                Name
              </Text>
              <Text
                style={{
                  color: colors.blackColor,
                  fontSize: hp(2.3),
                  fontWeight: '600',
                  fontFamily: fontFamily.robotoBold,
                }}>
                Harmony Harbor
              </Text>
            </View>
            <View style={{marginBottom: hp(1)}}>
              <Text
                style={{
                  color: colors.blackColor,
                  fontSize: hp(2),
                  fontWeight: '300',
                  fontFamily: fontFamily.robotoLight,
                }}>
                Age
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: hp(2.3),
                  fontWeight: '600',
                  fontFamily: fontFamily.robotoBold,
                }}>
                32 Years
              </Text>
            </View>
            <View style={{marginBottom: hp(1)}}>
              <Text
                style={{
                  color: colors.blackColor,
                  fontSize: hp(2),
                  fontWeight: '300',
                  fontFamily: fontFamily.robotoLight,
                }}>
                Phone
              </Text>
              <Text
                style={{
                  color: colors.blackColor,
                  fontSize: hp(2.3),
                  fontWeight: '600',
                  fontFamily: fontFamily.robotoBold,
                }}>
                01225 465156
              </Text>
            </View>
            <View style={{marginBottom: hp(1)}}>
              <Text
                style={{
                  color: colors.blackColor,
                  fontSize: hp(2),
                  fontWeight: '300',
                  fontFamily: fontFamily.robotoLight,
                }}>
                Email
              </Text>
              <Text
                style={{
                  color: colors.blackColor,
                  fontSize: hp(2.3),
                  fontWeight: '600',
                  fontFamily: fontFamily.robotoBold,
                }}>
                harmony.harbor@email.com
              </Text>
            </View>
            <View style={{marginBottom: hp(1)}}>
              <Text
                style={{
                  color: colors.blackColor,
                  fontSize: hp(2),
                  fontWeight: '300',
                  fontFamily: fontFamily.robotoLight,
                }}>
                Industry
              </Text>
              <Text
                style={{
                  color: colors.blackColor,
                  fontSize: hp(2.3),
                  fontWeight: '600',
                  fontFamily: fontFamily.robotoBold,
                }}>
                Construction Contractors
              </Text>
            </View>
            <View style={{marginBottom: hp(1)}}>
              <Text
                style={{
                  color: colors.blackColor,
                  fontSize: hp(2),
                  fontWeight: '300',
                  fontFamily: fontFamily.robotoLight,
                }}>
                Location
              </Text>
              <Text
                style={{
                  color: colors.blackColor,
                  fontSize: hp(2.3),
                  fontWeight: '600',
                  fontFamily: fontFamily.robotoBold,
                }}>
                United Kingdom
              </Text>
            </View>
            <View style={{marginBottom: hp(1)}}>
              <Text
                style={{
                  color: colors.blackColor,
                  fontSize: hp(2),
                  fontWeight: '300',
                  fontFamily: fontFamily.robotoLight,
                }}>
                Address
              </Text>
              <Text
                style={{
                  color: colors.blackColor,
                  fontSize: hp(2.3),
                  fontWeight: '600',
                  fontFamily: fontFamily.robotoBold,
                }}>
                Rosewell Ct, Bath Avon, BA1 2AG
              </Text>
            </View>
          </ScrollView> */}
        </View>
      )}

      {resurces && (
        <View style={{flex: 0.7, marginHorizontal: hp(2.5)}}>
            <View style={{justifyContent:'center',alignItems:'center',flex:0.1,height:hp(5)}}>
            <Text style={{color:colors.grayDescColor,fontSize:hp(2)}}>No Data Available.</Text>
          </View>
          {/* <FlatList
            data={cardData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          /> */}
        </View>
      )}

      <View style={{flex: 0.1, backgroundColor: '#fff'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: hp(1),
          }}>
          <TouchableOpacity onPress={ ()=>{Linking.openURL('https://google.com')}} style={{flex: 0.25}}>
            <Image
              style={{width: '100%', height: '100%', paddingTop: hp(2)}}
              source={{uri: 'icon4'}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=>{Linking.openURL(item?.facebook_url)}} style={{flex: 0.25}}>
            <Image
              style={{width: '100%', height: '100%', paddingTop: hp(2)}}
              source={{uri: 'icon3'}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=>{Linking.openURL(item?.facebook_url)}} style={{flex: 0.25}}>
            <Image
              style={{width: '100%', height: '100%', paddingTop: hp(2)}}
              source={{uri: 'iconone'}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=>{Linking.openURL(item?.twitter_url)}} style={{flex: 0.25}}>
            <Image
              style={{width: '100%', height: '100%', paddingTop: hp(2)}}
              source={{uri: 'icontwo'}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = EStyleSheet.create({
  headerImageSection: {
    flexDirection: 'row',
    marginLeft: hp(3),
    alignItems: 'center',
    marginVertical: hp(0.9),
  },
  imageList: {
    width: wp(10.7),
    marginLeft: hp(-3),
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: hp(50),
  },

  imgStyle: {width: wp(7), height: hp(3.5), borderRadius: hp(50)},

  overlyImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(1),
  },
});

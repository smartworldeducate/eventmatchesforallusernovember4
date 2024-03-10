import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  StyleSheet,
  Linking
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RenderHtml from 'react-native-render-html';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MainHeader from '../Components/Headers/MainHeader';
import SessionParagraphText from '../Components/SessionParagraphText';
import {activityDetailHandler} from '../features/activitydetail/activityDetailSlice'
import Icon from 'react-native-fontawesome-pro';
import {color} from '@rneui/base';
import fontFamily from '../Styles/fontFamily';
import colors from '../Styles/colors';
import { useDispatch, useSelector } from 'react-redux';
const SessionProgramm = (props) => {
  const dispatch=useDispatch();
  const activityData=useSelector((state)=>state.acitivityState);
  const event_id=activityData?.user?.userData?.event_id;
  const {item} = props.route.params;
  const detailData=useSelector((state)=>state.activityDetailState);
    // console.log("detailData===",detailData?.user?.response?.detail);
    const urlData=detailData?.user?.response?.detail[0];
    console.log("url===",urlData);
  const [abstract, setAbstract] = useState(true);
  const [speaker, setSpeaker] = useState(false);
  const [resurces, setResurces] = useState(false);
  useEffect(() => {
    dispatch(activityDetailHandler({"event_id":event_id,"activity_id":item?.activity_id}));
  }, []);
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

  const tagsStyles = {
    body: {
      whiteSpace: 'normal',
      color: '#aaa',
    },
    div: {color: 'blue', fontSize:hp(1.8)},
    p: {
      color:colors.descBlack,
      fontWeight:'400',
      fontSize: hp(1.8),
      lineHeight: hp(2.56),
      fontFamily: fontFamily.robotoMedium,
      textAlign:'left'
    }, 
    span: {color: 'green'}, 
  };
  const renderItem=({item,index})=>{
    console.log("item speaker==",item?.speakers)
   if(abstract){
    return(
      <View>
         <RenderHtml
                  contentWidth={400}
                  source={{
                    html: item
                      ? '<p>' + item?.activity_desc + '</p>'
                      : '',
                  }}
                  stylesheet={{color: 'blue'}}
                  tagsStyles={tagsStyles}
                />
      </View>
    )
   }
   if(speaker){
    return (
      <View>
        {item.speakers.map((speaker, index) => (
          <View key={index}>
            <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile')}
            style={{
            flex: 1,
            flexDirection: 'row',
            height: hp(7),
            borderRadius: hp(1),
            borderWidth: 0.5,
            borderColor: '#cdcdcd',
            marginVertical: hp(1.5),
          }}>
          <View
             style={{
               flex: 0.16,
               justifyContent: 'center',
               paddingLeft: hp(0.7),
               flexDirection:'row',
               justifyContent:'center',
               alignItems:'center'
             }}>
             <Image
               style={{ width: '90%', height: '90%', paddingTop: hp(0),borderRadius:hp(50) }}
               source={{ uri: speaker?.image_name }}
               resizeMode="cover"
             />
          </View>
          <View style={{justifyContent:'center',flex:0.64}}>
             <Text
               style={{
                 color: colors.blackColor,
                 paddingLeft: hp(1.5),
                 fontSize: hp(2),
                 fontWeight: '600',
                 fontFamily: fontFamily.robotoBold,
               }}>
               {speaker.speaker_name}
             </Text>
             <Text
               style={{
                 color: colors.grayDescColor,
                 fontSize: hp(2),
                 paddingLeft: hp(1.5),
                 fontWeight: '300',
                 fontFamily: fontFamily.robotoLight,
               }}>
               {speaker?.designation}
             </Text>
             </View>
             <View style={{flex:0.2,justifyContent: 'center',alignItems: 'center',}}>
               <View style={{backgroundColor:'#2CC2E4',paddingHorizontal:hp(1.5),paddingVertical:hp(0.5),borderRadius:hp(1)}}>
               <Icon
                  type="light"
                  name="arrow-right"
                  size={hp(3)}
                  color="#fff"
                />
               </View>
             </View>
           
         </TouchableOpacity>
          </View>
        ))}
      </View>
    );
    }
  }
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'default'}
        translucent
        backgroundColor="transparent"
      />
      <View style={{flex: 0.35}}>
        <ImageBackground
          source={{uri: 'banertwo'}}
          style={{width: '100%', height: '100%'}}>
          <View style={{flex: 0.15, zIndex: 1}}></View>
          <View
            style={{flex: 0.2, marginHorizontal: hp(0), flexDirection: 'row'}}>
            <TouchableOpacity
            onPress={() => props.navigation.goBack()}
              style={{
                flex: 0.13,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon type="light" name="arrow-left" size={hp(3)} color="#fff" />
            </TouchableOpacity>
            <View style={{flex: 0.7, justifyContent: 'center'}}>
              <Text
                style={{color: '#fff', fontSize: hp(2.5), fontWeight: '600',fontFamily:fontFamily.robotoBold}}>
                Session Details
              </Text>
            </View>
            <View style={{flex: 0.17, justifyContent: 'center',marginTop:hp(2)}}>
              <View
                style={{
                  width: hp(3.5),
                  height: hp(3.5),
                  backgroundColor: '#2CC2E4',
                  marginHorizontal: hp(1),
                  borderRadius: hp(1),
                  justifyContent: 'center',
                  alignItems: 'center',
                  
                }}>
                <Icon type="light" name="bookmark" size={hp(2.5)} color="#fff" />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{flex: 0.7, marginHorizontal: hp(2.5)}}>
        <ScrollView>
          {/* <SessionParagraphText/> */}

          <View style={{flex: 0.2, justifyContent: 'center'}}>
            <Text
              style={{color:colors.grayDescColor, fontSize: hp(2.5), fontWeight: '300',fontFamily:fontFamily.robotoLight}}
              numberOfLines={1}>
              Panel Discussion
            </Text>
            <Text
              style={{color:colors.blackColor, fontSize: hp(2.5), fontWeight: '600',fontFamily:fontFamily.robotoBold}}
              numberOfLines={2}>
              {item?.activity_name}
            </Text>
          </View>
          <View
            style={{flex: 0.25, marginTop: hp(1), justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', flex: 0.44}}>
              <View
                style={{
                  flex: 0.12,
                  backgroundColor: '#cdcdcd',
                  borderRadius: hp(50),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  type="light"
                  name="calendar-days"
                  size={hp(3.5)}
                  color="#2CC2E4"
                />
              </View>
              <View style={{flex: 0.04}}></View>
              <View style={{flex: 0.75}}>
                <Text
                  style={{color:colors.blackColor, fontSize: hp(2.5), fontWeight: '500',fontFamily:fontFamily.robotoMedium}}>
                  {item?.activity_date}
                </Text>
                <Text
                  style={{color:colors.descBlack, fontSize: hp(1.7), fontWeight: '400',fontFamily:fontFamily.robotoMedium}}>
                  Tuesday, {item?.start_time} - {item?.end_time}
                </Text>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', flex: 0.44, marginTop: hp(1.5)}}>
              <View
                style={{
                  flex: 0.12,
                  backgroundColor: '#cdcdcd',
                  borderRadius: hp(50),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  type="light"
                  name="location-dot"
                  size={hp(3.5)}
                  color="#2CC2E4"
                />
              </View>
              <View style={{flex: 0.04}}></View>
              <View style={{flex: 0.75}}>
              <Text
                  style={{color:colors.blackColor, fontSize: hp(2.5), fontWeight: '500',fontFamily:fontFamily.robotoMedium}}>
                  Hall # 40
                </Text>
                <Text
                  style={{color:colors.descBlack, fontSize: hp(1.7), fontWeight: '400',fontFamily:fontFamily.robotoMedium}}>
                 {item?.location}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 0.2,
              justifyContent: 'center',
              marginVertical: hp(2),
              flexDirection: 'row',
              alignItems: 'center',
              // backgroundColor:'red'
            }}>
            <TouchableOpacity
              onPress={abstractHandler}
              style={{
                flex: 0.37,
                borderRadius: hp(5),
                borderWidth: 2,
                borderColor: '#2CC2E4',
                height: hp(6),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: abstract ? '#2CC2E4' : '#fff',
              }}>
              <Text
                style={{
                  color: abstract ? '#fff' : '#2CC2E4',
                  fontSize: hp(2),
                  fontWeight: '600',
                }}>
                Abstract
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={speakerHandler}
              style={{
                flex: 0.37,
                borderRadius: hp(5),
                borderWidth: 2,
                borderColor: '#2CC2E4',
                height: hp(6),
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: hp(1),
                backgroundColor: speaker ? '#2CC2E4' : '#fff',
              }}>
              <Text
                style={{
                  color: speaker ? '#fff' : '#2CC2E4',
                  fontSize: hp(2),
                  fontWeight: '600',
                }}>
                Speakers
              </Text>
              {/* <Text style={{color:'#2CC2E4',fontSize:hp(1.3),fontWeight:'300'}}>8th, Nov 2022</Text> */}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={resucesHandler}
              style={{
                flex: 0.37,
                borderRadius: hp(5),
                borderWidth: 2,
                borderColor: '#2CC2E4',
                height: hp(6),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: resurces ? '#2CC2E4' : '#fff',
              }}>
              <Text
                style={{
                  color: resurces ? '#fff' : '#2CC2E4',
                  fontSize: hp(2),
                  fontWeight: '600',
                }}>
                Resources
              </Text>
              {/* <Text style={{color:'#2CC2E4',fontSize:hp(1.3),fontWeight:'300'}}>8th, Nov 2022</Text> */}
            </TouchableOpacity>
          </View>
          {abstract && (
            <View style={{flex: 0.7}}>
              <View style={{flex:0.2,paddingBottom:hp(1)}}>
              <Text
              style={{
                color:colors.blackColor,
                fontSize: hp(2.3),
                fontWeight: '600',
                fontFamily:fontFamily.robotoBold
              }}>
              About Session
            </Text>
            </View>
            <View style={{flex:0.8}}>
            <FlatList
              data={detailData?.user?.response?.detail}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
            </View>
            </View>
          )}
          {speaker && (
            <View style={{flex: 0.7}}>
              <View style={{flex:0.2}}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: hp(2.3),
                    fontWeight: '600',
                  }}>
                  Moderator:
                </Text>
              </View>
              <View style={{flex:0.8}}>
              <FlatList
              data={detailData?.user?.response?.detail}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
            </View>
            </View>
          )}
          {resurces && (
            <View style={{flex: 0.7, height: hp(34),justifyContent:'center',alignItems:'center'}}>
              <View style={{flex: 0.45, flexDirection: 'row',marginTop:hp(0),justifyContent:'center',alignItems:'center'}}>
                <View
                  style={{
                    flex: 0.32,
                    height:hp(13),
                    backgroundColor: '#2CC2E433',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: hp(0.5),
                  }}>
                  <Icon
                    type="light"
                    name="file-pdf"
                    size={hp(5.5)}
                    color="#2CC2E4"
                  />
                </View>
                <View style={{flex: 0.03, backgroundColor: '#fff'}}></View>
                <View
                  style={{
                    flex: 0.32,
                    height:hp(13),
                    backgroundColor: '#FF8B6633',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: hp(0.5),
                  }}>
                  <Icon
                    type="light"
                    name="file-word"
                    size={hp(5.5)}
                    color="#FF8B66"
                  />
                </View>
                <View style={{flex: 0.03, backgroundColor: '#fff'}}></View>
                <View
                  style={{
                    flex: 0.32,
                    height:hp(13),
                    backgroundColor: '#00B6AA33',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: hp(0.5),
                  }}>
                  <Icon type="light" name="image" size={hp(5.5)} color="#00B6AA" />
                </View>
              </View>
              <View style={{flex: 0.02, backgroundColor: '#fff'}}></View>
              <View style={{flex: 0.45, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 0.32,
                    height:hp(13),
                    backgroundColor: '#00B6AA33',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: hp(0.5),
                  }}>
                  <Icon type="light" name="image" size={hp(5.5)} color="#00B6AA" />
                </View>
                <View style={{flex: 0.03}}></View>
                <View
                  style={{
                    flex: 0.32,
                    height:hp(13),
                    backgroundColor: '#2CC2E433',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: hp(0.5),
                  }}>
                  <Icon
                    type="light"
                    name="file-pdf"
                    size={hp(5.5)}
                    color="#2CC2E4"
                  />
                </View>
                <View style={{flex: 0.03}}></View>
                <View
                  style={{
                    flex: 0.32,
                    height:hp(13),
                    backgroundColor: '#FF8B6633',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: hp(0.5),
                  }}>
                  <Icon
                    type="light"
                    name="file-word"
                    size={hp(5.5)}
                    color="#FF8B66"
                  />
                </View>
              </View>
              
            </View>
            
          )}
        </ScrollView>
      </View>
       <View style={{flex: 0.08, backgroundColor: '#fff',justifyContent:'center',alignItems:'center'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: hp(1),
          }}>
          <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://google.com')}} style={{flex: 0.25}}>
            <Image
              style={{width: '100%', height: '100%', paddingTop: hp(2)}}
              source={{uri: 'icon4'}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=>{urlData?.facebook_url && Linking.openURL(urlData?.facebook_url)}} style={{flex: 0.25}}>
            <Image
              style={{width: '100%', height: '100%', paddingTop: hp(2)}}
              source={{uri: 'icon3'}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 0.25}}>
            <Image
              style={{width: '100%', height: '100%', paddingTop: hp(2)}}
              source={{uri: 'iconone'}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 0.25}}>
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

export default SessionProgramm;



const style=StyleSheet.create({
  tagsStyles: {
    color: '#292D32',
  },
})

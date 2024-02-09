import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import Search from '../Components/Search';
import Icon from 'react-native-fontawesome-pro';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../Styles/colors';
import fontFamily from '../Styles/fontFamily';
const SpeakerList = props => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.1}}>
        <MainHeader
          text={'Speaker List'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <View style={{flex: 0.03}}></View>
      <View style={{flex: 0.1,marginTop:hp(2)}}>
        <Search />
      </View>

      <View style={{flex:0.8}}>
        <ScrollView>
        <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile')}
            style={{
              flex: 0.4,
              flexDirection: 'row',
              // backgroundColor: 'green',
              height: hp(10.3),
              borderRadius: hp(1),
              borderWidth: 0.5,
              borderColor: '#cdcdcd',
              marginVertical: hp(1.3),
              marginHorizontal: hp(2.5),
            }}>
            <View
              style={{
                flex: 0.29,
                justifyContent: 'center',
                alignItems:'center',
                paddingLeft: hp(-1),
                // backgroundColor:'red',
                paddingVertical:hp(1)
              }}>
              <Image
                style={{width: '70%', height: '90%', paddingTop: hp(0)}}
                source={{uri: 'imgone'}}
                resizeMode="cover"
              />
            </View>
            <View style={{flex: 0.7, justifyContent: 'center'}}>
              <Text
                style={{
                  color: colors.blackColor,
                  paddingLeft: hp(0),
                  fontSize: hp(2),
                  fontWeight: '600',
                  fontFamily:fontFamily.robotoBold
                }}>
                TechExplorer
              </Text>
              <Text
                style={{
                  color:colors.grayDescColor,
                  fontSize: hp(2),
                  paddingLeft: hp(0),
                  fontWeight: '300',
                  fontFamily:fontFamily.robotoLight
                }}>
                Chief Executive's, Owner
              </Text>
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: hp(1),
                // backgroundColor:'red',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#2CC2E4',
                  paddingHorizontal: hp(1.2),
                  paddingVertical: hp(0.5),
                  borderRadius: hp(1),
                }}>
                <Icon
                  type="light"
                  name="arrow-right"
                  size={hp(3)}
                  color="#fff"
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile')}
            style={{
              flex: 0.4,
              flexDirection: 'row',
              // backgroundColor: 'green',
              height: hp(10.3),
              borderRadius: hp(1),
              borderWidth: 0.5,
              borderColor: '#cdcdcd',
              marginVertical: hp(1.3),
              marginHorizontal: hp(2.5),
            }}>
            <View
              style={{
                flex: 0.29,
                justifyContent: 'center',
                alignItems:'center',
                paddingLeft: hp(-1),
                // backgroundColor:'red',
                paddingVertical:hp(1)
              }}>
              <Image
                style={{width: '70%', height: '90%', paddingTop: hp(0)}}
                source={{uri: 'imgtwo'}}
                resizeMode="cover"
              />
            </View>
            <View style={{flex: 0.7, justifyContent: 'center'}}>
              <Text
                style={{
                  color: colors.blackColor,
                  paddingLeft: hp(0),
                  fontSize: hp(2),
                  fontWeight: '600',
                  fontFamily:fontFamily.robotoBold
                }}>
                TechExplorer
              </Text>
              <Text
                style={{
                  color:colors.grayDescColor,
                  fontSize: hp(2),
                  paddingLeft: hp(0),
                  fontWeight: '300',
                  fontFamily:fontFamily.robotoLight
                }}>
                Chief Executive's, Owner
              </Text>
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: hp(1),
                // backgroundColor:'red',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#2CC2E4',
                  paddingHorizontal: hp(1.2),
                  paddingVertical: hp(0.5),
                  borderRadius: hp(1),
                }}>
                <Icon
                  type="light"
                  name="arrow-right"
                  size={hp(3)}
                  color="#fff"
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile')}
            style={{
              flex: 0.4,
              flexDirection: 'row',
              // backgroundColor: 'green',
              height: hp(10.3),
              borderRadius: hp(1),
              borderWidth: 0.5,
              borderColor: '#cdcdcd',
              marginVertical: hp(1.3),
              marginHorizontal: hp(2.5),
            }}>
            <View
              style={{
                flex: 0.29,
                justifyContent: 'center',
                alignItems:'center',
                paddingLeft: hp(-1),
                // backgroundColor:'red',
                paddingVertical:hp(1)
              }}>
              <Image
                style={{width: '70%', height: '90%', paddingTop: hp(0)}}
                source={{uri: 'imgthree'}}
                resizeMode="cover"
              />
            </View>
            <View style={{flex: 0.7, justifyContent: 'center'}}>
              <Text
                style={{
                  color: colors.blackColor,
                  paddingLeft: hp(0),
                  fontSize: hp(2),
                  fontWeight: '600',
                  fontFamily:fontFamily.robotoBold
                }}>
                TechExplorer
              </Text>
              <Text
                style={{
                  color:colors.grayDescColor,
                  fontSize: hp(2),
                  paddingLeft: hp(0),
                  fontWeight: '300',
                  fontFamily:fontFamily.robotoLight
                }}>
                Chief Executive's, Owner
              </Text>
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: hp(1),
                // backgroundColor:'red',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#2CC2E4',
                  paddingHorizontal: hp(1.2),
                  paddingVertical: hp(0.5),
                  borderRadius: hp(1),
                }}>
                <Icon
                  type="light"
                  name="arrow-right"
                  size={hp(3)}
                  color="#fff"
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile')}
            style={{
              flex: 0.4,
              flexDirection: 'row',
              // backgroundColor: 'green',
              height: hp(10.3),
              borderRadius: hp(1),
              borderWidth: 0.5,
              borderColor: '#cdcdcd',
              marginVertical: hp(1.3),
              marginHorizontal: hp(2.5),
            }}>
            <View
              style={{
                flex: 0.29,
                justifyContent: 'center',
                alignItems:'center',
                paddingLeft: hp(-1),
                // backgroundColor:'red',
                paddingVertical:hp(1)
              }}>
              <Image
                style={{width: '70%', height: '90%', paddingTop: hp(0)}}
                source={{uri: 'imgfore'}}
                resizeMode="cover"
              />
            </View>
            <View style={{flex: 0.7, justifyContent: 'center'}}>
              <Text
                style={{
                  color: colors.blackColor,
                  paddingLeft: hp(0),
                  fontSize: hp(2),
                  fontWeight: '600',
                  fontFamily:fontFamily.robotoBold
                }}>
                TechExplorer
              </Text>
              <Text
                style={{
                  color:colors.grayDescColor,
                  fontSize: hp(2),
                  paddingLeft: hp(0),
                  fontWeight: '300',
                  fontFamily:fontFamily.robotoLight
                }}>
                Chief Executive's, Owner
              </Text>
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: hp(1),
                // backgroundColor:'red',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#2CC2E4',
                  paddingHorizontal: hp(1.2),
                  paddingVertical: hp(0.5),
                  borderRadius: hp(1),
                }}>
                <Icon
                  type="light"
                  name="arrow-right"
                  size={hp(3)}
                  color="#fff"
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile')}
            style={{
              flex: 0.4,
              flexDirection: 'row',
              // backgroundColor: 'green',
              height: hp(10.3),
              borderRadius: hp(1),
              borderWidth: 0.5,
              borderColor: '#cdcdcd',
              marginVertical: hp(1.3),
              marginHorizontal: hp(2.5),
            }}>
            <View
              style={{
                flex: 0.29,
                justifyContent: 'center',
                alignItems:'center',
                paddingLeft: hp(-1),
                // backgroundColor:'red',
                paddingVertical:hp(1)
              }}>
              <Image
                style={{width: '70%', height: '90%', paddingTop: hp(0)}}
                source={{uri: 'imgone'}}
                resizeMode="cover"
              />
            </View>
            <View style={{flex: 0.7, justifyContent: 'center'}}>
              <Text
                style={{
                  color: colors.blackColor,
                  paddingLeft: hp(0),
                  fontSize: hp(2),
                  fontWeight: '600',
                  fontFamily:fontFamily.robotoBold
                }}>
                TechExplorer
              </Text>
              <Text
                style={{
                  color:colors.grayDescColor,
                  fontSize: hp(2),
                  paddingLeft: hp(0),
                  fontWeight: '300',
                  fontFamily:fontFamily.robotoLight
                }}>
                Chief Executive's, Owner
              </Text>
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: hp(1),
                // backgroundColor:'red',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#2CC2E4',
                  paddingHorizontal: hp(1.2),
                  paddingVertical: hp(0.5),
                  borderRadius: hp(1),
                }}>
                <Icon
                  type="light"
                  name="arrow-right"
                  size={hp(3)}
                  color="#fff"
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile')}
            style={{
              flex: 0.4,
              flexDirection: 'row',
              // backgroundColor: 'green',
              height: hp(10.3),
              borderRadius: hp(1),
              borderWidth: 0.5,
              borderColor: '#cdcdcd',
              marginVertical: hp(1.3),
              marginHorizontal: hp(2.5),
            }}>
            <View
              style={{
                flex: 0.29,
                justifyContent: 'center',
                alignItems:'center',
                paddingLeft: hp(-1),
                // backgroundColor:'red',
                paddingVertical:hp(1)
              }}>
              <Image
                style={{width: '70%', height: '90%', paddingTop: hp(0)}}
                source={{uri: 'imgtwo'}}
                resizeMode="cover"
              />
            </View>
            <View style={{flex: 0.7, justifyContent: 'center'}}>
              <Text
                style={{
                  color: colors.blackColor,
                  paddingLeft: hp(0),
                  fontSize: hp(2),
                  fontWeight: '600',
                  fontFamily:fontFamily.robotoBold
                }}>
                TechExplorer
              </Text>
              <Text
                style={{
                  color:colors.grayDescColor,
                  fontSize: hp(2),
                  paddingLeft: hp(0),
                  fontWeight: '300',
                  fontFamily:fontFamily.robotoLight
                }}>
                Chief Executive's, Owner
              </Text>
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: hp(1),
                // backgroundColor:'red',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#2CC2E4',
                  paddingHorizontal: hp(1.2),
                  paddingVertical: hp(0.5),
                  borderRadius: hp(1),
                }}>
                <Icon
                  type="light"
                  name="arrow-right"
                  size={hp(3)}
                  color="#fff"
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile')}
            style={{
              flex: 0.4,
              flexDirection: 'row',
              // backgroundColor: 'green',
              height: hp(10.3),
              borderRadius: hp(1),
              borderWidth: 0.5,
              borderColor: '#cdcdcd',
              marginVertical: hp(1.3),
              marginHorizontal: hp(2.5),
            }}>
            <View
              style={{
                flex: 0.29,
                justifyContent: 'center',
                alignItems:'center',
                paddingLeft: hp(-1),
                // backgroundColor:'red',
                paddingVertical:hp(1)
              }}>
              <Image
                style={{width: '70%', height: '90%', paddingTop: hp(0)}}
                source={{uri: 'imgthree'}}
                resizeMode="cover"
              />
            </View>
            <View style={{flex: 0.7, justifyContent: 'center'}}>
              <Text
                style={{
                  color: colors.blackColor,
                  paddingLeft: hp(0),
                  fontSize: hp(2),
                  fontWeight: '600',
                  fontFamily:fontFamily.robotoBold
                }}>
                TechExplorer
              </Text>
              <Text
                style={{
                  color:colors.grayDescColor,
                  fontSize: hp(2),
                  paddingLeft: hp(0),
                  fontWeight: '300',
                  fontFamily:fontFamily.robotoLight
                }}>
                Chief Executive's, Owner
              </Text>
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: hp(1),
                // backgroundColor:'red',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#2CC2E4',
                  paddingHorizontal: hp(1.2),
                  paddingVertical: hp(0.5),
                  borderRadius: hp(1),
                }}>
                <Icon
                  type="light"
                  name="arrow-right"
                  size={hp(3)}
                  color="#fff"
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile')}
            style={{
              flex: 0.4,
              flexDirection: 'row',
              // backgroundColor: 'green',
              height: hp(10.3),
              borderRadius: hp(1),
              borderWidth: 0.5,
              borderColor: '#cdcdcd',
              marginVertical: hp(1.3),
              marginHorizontal: hp(2.5),
            }}>
            <View
              style={{
                flex: 0.29,
                justifyContent: 'center',
                alignItems:'center',
                paddingLeft: hp(-1),
                // backgroundColor:'red',
                paddingVertical:hp(1)
              }}>
              <Image
                style={{width: '70%', height: '90%', paddingTop: hp(0)}}
                source={{uri: 'imgfore'}}
                resizeMode="cover"
              />
            </View>
            <View style={{flex: 0.7, justifyContent: 'center'}}>
              <Text
                style={{
                  color: colors.blackColor,
                  paddingLeft: hp(0),
                  fontSize: hp(2),
                  fontWeight: '600',
                  fontFamily:fontFamily.robotoBold
                }}>
                TechExplorer
              </Text>
              <Text
                style={{
                  color:colors.grayDescColor,
                  fontSize: hp(2),
                  paddingLeft: hp(0),
                  fontWeight: '300',
                  fontFamily:fontFamily.robotoLight
                }}>
                Chief Executive's, Owner
              </Text>
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: hp(1),
                // backgroundColor:'red',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#2CC2E4',
                  paddingHorizontal: hp(1.2),
                  paddingVertical: hp(0.5),
                  borderRadius: hp(1),
                }}>
                <Icon
                  type="light"
                  name="arrow-right"
                  size={hp(3)}
                  color="#fff"
                />
              </View>
            </View>
          </TouchableOpacity>
      
        </ScrollView>
      </View>

      
     
      
    </View>
  );
};

export default SpeakerList;

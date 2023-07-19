import {View, Text, Image, ScrollView, StyleSheet,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import MainHeader from '../Components/Headers/MainHeader';
// import Bell from 'react-native-vector-icons/EvilIcons';
// import Menu from 'react-native-vector-icons/Entypo';
// import Check from 'react-native-vector-icons/AntDesign';
// import Wrench from 'react-native-vector-icons/FontAwesome';
// import User from 'react-native-vector-icons/AntDesign';
// import Gte from 'react-native-vector-icons/AntDesign';
// import Phone from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Notification = props => {
    const [appDiv,setAppDiv]=useState(false)
    const [penDiv,setPenDiv]=useState(true)
const handleApprove=(props)=>{
    setAppDiv(true)
    setPenDiv(false)
}
  return (
    <>
      <View>
        <MainHeader text={'Notifications'} iconName={'arrowleft'}  onpressBtn={()=>props.navigation.goBack()}/>
      </View>
      <ScrollView>
      {/* <View style={{width:wp(90),marginHorizontal:hp(2.5)}}></View> */}
      <View style={{marginTop: hp(2), width: wp(100)}}>
        <ScrollView
          horizontal={true}
          style={styles.container}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <View style={{marginHorizontal: hp(1), marginVertical: hp(1)}}>
              <View>
                <View
                  style={{
                    width: wp(50),
                    height: hp(7.9),
                    flexDirection: 'row',
                    //   backgroundColor: '#1C37A4',
                  }}>
                  <View
                    style={{
                      width: wp(12),
                      height: hp(6),
                      backgroundColor: '#58D68D ',
                      borderRadius: hp(2),
                      marginVertical: hp(0.5),
                      //   marginRight: hp(3),
                    }}>
                    <Image
                      style={{
                        width: wp(6),
                        height: hp(3),
                        borderRadius: hp(1),
                      }}
                      source={{uri: 'artg'}}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={{marginTop: hp(0.5),marginLeft:hp(-2)}}>
                    <View>
                      <Text
                        style={{
                          color: '#343434',
                          fontSize: hp(1.3),
                          fontWeight: '600',
                          //   marginTop: hp(1),
                        }}>
                        Zeeshan Abdual Hafeez
                      </Text>
                    </View>
                    <View style={{}}>
                      <View style={{}}>
                        <Text
                          style={{
                            color: 'gray',
                            fontSize: hp(1.1),
                            fontWeight: '600',
                          }}>
                          May 22,2023
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{width: wp(80), marginHorizontal: hp(1)}}>
              <View style={{marginTop: hp(-4.8), width: wp(78)}}>
                <Text style={{fontSize: hp(1.3),color:'#343434'}}>
                  Lörem ipsum agnostisiv ekograf alltså best prest inte Helena
                  Astront Nsson. Das ryliga Das rylig ranska seliga.
                </Text>
              </View>
            </View>
            <View style={{width:wp(90),flexDirection:'row'}}>
                {appDiv && (<View style={{width:wp(30.2),height:hp(3.8),borderRadius:hp(50),justifyContent:'center',backgroundColor:'#F6CA45'}}>
                    <View style={{alignContent:'center',alignItems:'center',fontSize:hp(1.2)}}>
                    <Text style={{fontSize:hp(1.2),color:'#343434'}}>Approval Pending</Text>
                    </View>
                </View>)}
              {penDiv && ( <TouchableOpacity onPress={handleApprove} style={{flexDirection:'row'}}>
               <View style={{width:wp(25.2),height:hp(3.8),borderRadius:hp(50),justifyContent:'center',backgroundColor:'#1C37A4'}}>
                    <View style={{alignContent:'center',alignItems:'center',fontSize:hp(1.2)}}>
                    <Text style={{fontSize:hp(1.5),color:'#fff'}}>Approve</Text>
                    </View>
                </View>
                <View style={{width:wp(25.2),marginLeft:hp(1),height:hp(3.8),borderRadius:hp(50),justifyContent:'center',backgroundColor:'#EB4C35'}}>
                    <View style={{alignContent:'center',alignItems:'center',fontSize:hp(1.2)}}>
                    <Text style={{fontSize:hp(1.5),color:'#fff'}}>decline</Text>
                    </View>
                </View>
               </TouchableOpacity>)}
            </View>
            <View style={{width: wp(90),backgroundColor:"gray",height:hp(0.1),marginLeft:hp(-1),marginTop:hp(2)}}></View>
          </View>
        </ScrollView>
      </View>
      <View style={{marginTop: hp(-2.5), width: wp(100)}}>
        <ScrollView
          horizontal={true}
          style={styles.container}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <View style={{marginHorizontal: hp(1), marginVertical: hp(1)}}>
              <View>
                <View
                  style={{
                    width: wp(50),
                    height: hp(7.9),
                    flexDirection: 'row',
                    //   backgroundColor: '#1C37A4',
                  }}>
                  <View
                    style={{
                      width: wp(12),
                      height: hp(6),
                      backgroundColor: '#58D68D ',
                      borderRadius: hp(2),
                      marginVertical: hp(0.5),
                      //   marginRight: hp(3),
                    }}>
                    <Image
                      style={{
                        width: wp(6),
                        height: hp(3),
                        borderRadius: hp(1),
                      }}
                      source={{uri: 'artg'}}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={{marginTop: hp(0.5),marginLeft:hp(-2)}}>
                    <View>
                      <Text
                        style={{
                          color: '#343434',
                          fontSize: hp(1.3),
                          fontWeight: '600',
                          //   marginTop: hp(1),
                        }}>
                        Zeeshan Abdual Hafeez
                      </Text>
                    </View>
                    <View style={{}}>
                      <View style={{}}>
                        <Text
                          style={{
                            color: 'gray',
                            fontSize: hp(1.1),
                            fontWeight: '600',
                          }}>
                          May 22,2023
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{width: wp(80), marginHorizontal: hp(1)}}>
              <View style={{marginTop: hp(-4.8), width: wp(78)}}>
                <Text style={{fontSize: hp(1.3),color:'#343434'}}>
                  Lörem ipsum agnostisiv ekograf alltså best prest inte Helena
                  Astront Nsson. Das ryliga Das rylig ranska seliga.
                </Text>
              </View>
            </View>
            <View style={{width:wp(90),flexDirection:'row'}}>
                {appDiv && (<View style={{width:wp(30.2),height:hp(3.8),borderRadius:hp(50),justifyContent:'center',backgroundColor:'#F6CA45'}}>
                    <View style={{alignContent:'center',alignItems:'center',fontSize:hp(1.2)}}>
                    <Text style={{fontSize:hp(1.2),color:'#343434'}}>Approval Pending</Text>
                    </View>
                </View>)}
              {penDiv && ( <TouchableOpacity onPress={handleApprove} style={{flexDirection:'row'}}>
               <View style={{width:wp(25.2),height:hp(3.8),borderRadius:hp(50),justifyContent:'center',backgroundColor:'#1C37A4'}}>
                    <View style={{alignContent:'center',alignItems:'center',fontSize:hp(1.2)}}>
                    <Text style={{fontSize:hp(1.5),color:'#fff'}}>Approve</Text>
                    </View>
                </View>
                <View style={{width:wp(25.2),marginLeft:hp(1),height:hp(3.8),borderRadius:hp(50),justifyContent:'center',backgroundColor:'#EB4C35'}}>
                    <View style={{alignContent:'center',alignItems:'center',fontSize:hp(1.2)}}>
                    <Text style={{fontSize:hp(1.5),color:'#fff'}}>decline</Text>
                    </View>
                </View>
               </TouchableOpacity>)}
            </View>
            <View style={{width: wp(90),backgroundColor:"gray",height:hp(0.1),marginLeft:hp(-1),marginTop:hp(2)}}></View>
          </View>
        </ScrollView>
      </View>
      <View style={{marginTop: hp(-2.5), width: wp(100)}}>
        <ScrollView
          horizontal={true}
          style={styles.container}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <View style={{marginHorizontal: hp(1), marginVertical: hp(1)}}>
              <View>
                <View
                  style={{
                    width: wp(50),
                    height: hp(7.9),
                    flexDirection: 'row',
                    //   backgroundColor: '#1C37A4',
                  }}>
                  <View
                    style={{
                      width: wp(12),
                      height: hp(6),
                      backgroundColor: '#58D68D ',
                      borderRadius: hp(2),
                      marginVertical: hp(0.5),
                      //   marginRight: hp(3),
                    }}>
                    <Image
                      style={{
                        width: wp(6),
                        height: hp(3),
                        borderRadius: hp(1),
                      }}
                      source={{uri: 'artg'}}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={{marginTop: hp(0.5),marginLeft:hp(-2)}}>
                    <View>
                      <Text
                        style={{
                          color: '#343434',
                          fontSize: hp(1.3),
                          fontWeight: '600',
                          //   marginTop: hp(1),
                        }}>
                        Zeeshan Abdual Hafeez
                      </Text>
                    </View>
                    <View style={{}}>
                      <View style={{}}>
                        <Text
                          style={{
                            color: 'gray',
                            fontSize: hp(1.1),
                            fontWeight: '600',
                          }}>
                          May 22,2023
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{width: wp(80), marginHorizontal: hp(1)}}>
              <View style={{marginTop: hp(-4.8), width: wp(78)}}>
                <Text style={{fontSize: hp(1.3),color:'#343434'}}>
                  Lörem ipsum agnostisiv ekograf alltså best prest inte Helena
                  Astront Nsson. Das ryliga Das rylig ranska seliga.
                </Text>
              </View>
            </View>
            <View style={{width:wp(90),flexDirection:'row'}}>
                {appDiv && (<View style={{width:wp(30.2),height:hp(3.8),borderRadius:hp(50),justifyContent:'center',backgroundColor:'#F6CA45'}}>
                    <View style={{alignContent:'center',alignItems:'center',fontSize:hp(1.2)}}>
                    <Text style={{fontSize:hp(1.2),color:'#343434'}}>Approval Pending</Text>
                    </View>
                </View>)}
              {penDiv && ( <TouchableOpacity onPress={handleApprove} style={{flexDirection:'row'}}>
               <View style={{width:wp(25.2),height:hp(3.8),borderRadius:hp(50),justifyContent:'center',backgroundColor:'#1C37A4'}}>
                    <View style={{alignContent:'center',alignItems:'center',fontSize:hp(1.2)}}>
                    <Text style={{fontSize:hp(1.5),color:'#fff'}}>Approve</Text>
                    </View>
                </View>
                <View style={{width:wp(25.2),marginLeft:hp(1),height:hp(3.8),borderRadius:hp(50),justifyContent:'center',backgroundColor:'#EB4C35'}}>
                    <View style={{alignContent:'center',alignItems:'center',fontSize:hp(1.2)}}>
                    <Text style={{fontSize:hp(1.5),color:'#fff'}}>decline</Text>
                    </View>
                </View>
               </TouchableOpacity>)}
            </View>
            <View style={{width: wp(90),backgroundColor:"gray",height:hp(0.1),marginLeft:hp(-1),marginTop:hp(2)}}></View>
          </View>
        </ScrollView>
      </View>
      <View style={{marginTop: hp(-2.5), width: wp(100)}}>
        <ScrollView
          horizontal={true}
          style={styles.container}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <View style={{marginHorizontal: hp(1), marginVertical: hp(1)}}>
              <View>
                <View
                  style={{
                    width: wp(50),
                    height: hp(7.9),
                    flexDirection: 'row',
                    //   backgroundColor: '#1C37A4',
                  }}>
                  <View
                    style={{
                      width: wp(12),
                      height: hp(6),
                      backgroundColor: '#58D68D ',
                      borderRadius: hp(2),
                      marginVertical: hp(0.5),
                      //   marginRight: hp(3),
                    }}>
                    <Image
                      style={{
                        width: wp(6),
                        height: hp(3),
                        borderRadius: hp(1),
                      }}
                      source={{uri: 'artg'}}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={{marginTop: hp(0.5),marginLeft:hp(-2)}}>
                    <View>
                      <Text
                        style={{
                          color: '#343434',
                          fontSize: hp(1.3),
                          fontWeight: '600',
                          //   marginTop: hp(1),
                        }}>
                        Zeeshan Abdual Hafeez
                      </Text>
                    </View>
                    <View style={{}}>
                      <View style={{}}>
                        <Text
                          style={{
                            color: 'gray',
                            fontSize: hp(1.1),
                            fontWeight: '600',
                          }}>
                          May 22,2023
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{width: wp(80), marginHorizontal: hp(1)}}>
              <View style={{marginTop: hp(-4.8), width: wp(78)}}>
                <Text style={{fontSize: hp(1.3),color:'#343434'}}>
                  Lörem ipsum agnostisiv ekograf alltså best prest inte Helena
                  Astront Nsson. Das ryliga Das rylig ranska seliga.
                </Text>
              </View>
            </View>
            <View style={{width:wp(90),flexDirection:'row'}}>
                {appDiv && (<View style={{width:wp(30.2),height:hp(3.8),borderRadius:hp(50),justifyContent:'center',backgroundColor:'#F6CA45'}}>
                    <View style={{alignContent:'center',alignItems:'center',fontSize:hp(1.2)}}>
                    <Text style={{fontSize:hp(1.2),color:'#343434'}}>Approval Pending</Text>
                    </View>
                </View>)}
              {penDiv && ( <TouchableOpacity onPress={handleApprove} style={{flexDirection:'row'}}>
               <View style={{width:wp(25.2),height:hp(3.8),borderRadius:hp(50),justifyContent:'center',backgroundColor:'#1C37A4'}}>
                    <View style={{alignContent:'center',alignItems:'center',fontSize:hp(1.2)}}>
                    <Text style={{fontSize:hp(1.5),color:'#fff'}}>Approve</Text>
                    </View>
                </View>
                <View style={{width:wp(25.2),marginLeft:hp(1),height:hp(3.8),borderRadius:hp(50),justifyContent:'center',backgroundColor:'#EB4C35'}}>
                    <View style={{alignContent:'center',alignItems:'center',fontSize:hp(1.2)}}>
                    <Text style={{fontSize:hp(1.5),color:'#fff'}}>decline</Text>
                    </View>
                </View>
               </TouchableOpacity>)}
            </View>
            <View style={{width: wp(90),backgroundColor:"gray",height:hp(0.1),marginLeft:hp(-1),marginTop:hp(2)}}></View>
          </View>
        </ScrollView>
      </View>
      <View style={{marginTop: hp(-2.5), width: wp(100)}}>
        <ScrollView
          horizontal={true}
          style={styles.container}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <View style={{marginHorizontal: hp(1), marginVertical: hp(1)}}>
              <View>
                <View
                  style={{
                    width: wp(50),
                    height: hp(7.9),
                    flexDirection: 'row',
                    //   backgroundColor: '#1C37A4',
                  }}>
                  <View
                    style={{
                      width: wp(12),
                      height: hp(6),
                      backgroundColor: '#58D68D ',
                      borderRadius: hp(2),
                      marginVertical: hp(0.5),
                      //   marginRight: hp(3),
                    }}>
                    <Image
                      style={{
                        width: wp(6),
                        height: hp(3),
                        borderRadius: hp(1),
                      }}
                      source={{uri: 'artg'}}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={{marginTop: hp(0.5),marginLeft:hp(-2)}}>
                    <View>
                      <Text
                        style={{
                          color: '#343434',
                          fontSize: hp(1.3),
                          fontWeight: '600',
                          //   marginTop: hp(1),
                        }}>
                        Zeeshan Abdual Hafeez
                      </Text>
                    </View>
                    <View style={{}}>
                      <View style={{}}>
                        <Text
                          style={{
                            color: 'gray',
                            fontSize: hp(1.1),
                            fontWeight: '600',
                          }}>
                          May 22,2023
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{width: wp(80), marginHorizontal: hp(1)}}>
              <View style={{marginTop: hp(-4.8), width: wp(78)}}>
                <Text style={{fontSize: hp(1.3),color:'#343434'}}>
                  Lörem ipsum agnostisiv ekograf alltså best prest inte Helena
                  Astront Nsson. Das ryliga Das rylig ranska seliga.
                </Text>
              </View>
            </View>
            <View style={{width:wp(90),flexDirection:'row'}}>
                {appDiv && (<View style={{width:wp(30.2),height:hp(3.8),borderRadius:hp(50),justifyContent:'center',backgroundColor:'#F6CA45'}}>
                    <View style={{alignContent:'center',alignItems:'center',fontSize:hp(1.2)}}>
                    <Text style={{fontSize:hp(1.2),color:'#343434'}}>Approval Pending</Text>
                    </View>
                </View>)}
              {penDiv && ( <TouchableOpacity onPress={handleApprove} style={{flexDirection:'row'}}>
               <View style={{width:wp(25.2),height:hp(3.8),borderRadius:hp(50),justifyContent:'center',backgroundColor:'#1C37A4'}}>
                    <View style={{alignContent:'center',alignItems:'center',fontSize:hp(1.2)}}>
                    <Text style={{fontSize:hp(1.5),color:'#fff'}}>Approve</Text>
                    </View>
                </View>
                <View style={{width:wp(25.2),marginLeft:hp(1),height:hp(3.8),borderRadius:hp(50),justifyContent:'center',backgroundColor:'#EB4C35'}}>
                    <View style={{alignContent:'center',alignItems:'center',fontSize:hp(1.2)}}>
                    <Text style={{fontSize:hp(1.5),color:'#fff'}}>decline</Text>
                    </View>
                </View>
               </TouchableOpacity>)}
            </View>
            <View style={{width: wp(90),backgroundColor:"gray",height:hp(0.1),marginLeft:hp(-1),marginTop:hp(2)}}></View>
          </View>
        </ScrollView>
      </View>
      <View style={{marginTop: hp(-2.5), width: wp(100)}}>
        <ScrollView
          horizontal={true}
          style={styles.container}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <View style={{marginHorizontal: hp(1), marginVertical: hp(1)}}>
              <View>
                <View
                  style={{
                    width: wp(50),
                    height: hp(7.9),
                    flexDirection: 'row',
                    //   backgroundColor: '#1C37A4',
                  }}>
                  <View
                    style={{
                      width: wp(12),
                      height: hp(6),
                      backgroundColor: '#58D68D ',
                      borderRadius: hp(2),
                      marginVertical: hp(0.5),
                      //   marginRight: hp(3),
                    }}>
                    <Image
                      style={{
                        width: wp(6),
                        height: hp(3),
                        borderRadius: hp(1),
                      }}
                      source={{uri: 'artg'}}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={{marginTop: hp(0.5),marginLeft:hp(-2)}}>
                    <View>
                      <Text
                        style={{
                          color: '#343434',
                          fontSize: hp(1.3),
                          fontWeight: '600',
                          //   marginTop: hp(1),
                        }}>
                        Zeeshan Abdual Hafeez
                      </Text>
                    </View>
                    <View style={{}}>
                      <View style={{}}>
                        <Text
                          style={{
                            color: 'gray',
                            fontSize: hp(1.1),
                            fontWeight: '600',
                          }}>
                          May 22,2023
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{width: wp(80), marginHorizontal: hp(1)}}>
              <View style={{marginTop: hp(-4.8), width: wp(78)}}>
                <Text style={{fontSize: hp(1.3),color:'#343434'}}>
                  Lörem ipsum agnostisiv ekograf alltså best prest inte Helena
                  Astront Nsson. Das ryliga Das rylig ranska seliga.
                </Text>
              </View>
            </View>
            <View style={{width:wp(90),flexDirection:'row'}}>
                {appDiv && (<View style={{width:wp(30.2),height:hp(3.8),borderRadius:hp(50),justifyContent:'center',backgroundColor:'#F6CA45'}}>
                    <View style={{alignContent:'center',alignItems:'center',fontSize:hp(1.2)}}>
                    <Text style={{fontSize:hp(1.2),color:'#343434'}}>Approval Pending</Text>
                    </View>
                </View>)}
              {penDiv && ( <TouchableOpacity onPress={handleApprove} style={{flexDirection:'row'}}>
               <View style={{width:wp(25.2),height:hp(3.8),borderRadius:hp(50),justifyContent:'center',backgroundColor:'#1C37A4'}}>
                    <View style={{alignContent:'center',alignItems:'center',fontSize:hp(1.2)}}>
                    <Text style={{fontSize:hp(1.5),color:'#fff'}}>Approve</Text>
                    </View>
                </View>
                <View style={{width:wp(25.2),marginLeft:hp(1),height:hp(3.8),borderRadius:hp(50),justifyContent:'center',backgroundColor:'#EB4C35'}}>
                    <View style={{alignContent:'center',alignItems:'center',fontSize:hp(1.2)}}>
                    <Text style={{fontSize:hp(1.5),color:'#fff'}}>decline</Text>
                    </View>
                </View>
               </TouchableOpacity>)}
            </View>
            <View style={{width: wp(90),backgroundColor:"gray",height:hp(0.1),marginLeft:hp(-1),marginTop:hp(2)}}></View>
          </View>
        </ScrollView>
      </View>
      </ScrollView>
    </>
  );
};

export default Notification;

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
    // backgroundColor: '#fff',

    height: hp(18),
    width: wp(90),
    // borderRadius: 5,
    marginHorizontal: hp(2.5),
  },
});

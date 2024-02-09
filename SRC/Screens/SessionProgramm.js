import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MainHeader from '../Components/Headers/MainHeader';
import SessionParagraphText from '../Components/SessionParagraphText';
import Icon from 'react-native-fontawesome-pro';
import {color} from '@rneui/base';
import fontFamily from '../Styles/fontFamily';
import colors from '../Styles/colors';
const SessionProgramm = (props) => {
  const [abstract, setAbstract] = useState(true);
  const [speaker, setSpeaker] = useState(false);
  const [resurces, setResurces] = useState(false);

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
            <View style={{flex: 0.17, justifyContent: 'center'}}>
              <View
                style={{
                  width: hp(5),
                  height: hp(4),
                  backgroundColor: '#2CC2E4',
                  marginHorizontal: hp(1),
                  borderRadius: hp(1),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon type="light" name="bookmark" size={hp(3)} color="#fff" />
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
              style={{color:colors.blackColor, fontSize: hp(3), fontWeight: '600',fontFamily:fontFamily.robotoBold}}
              numberOfLines={2}>
              Mastering Events: A Beginner's Guide
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
                  December 14, 2021
                </Text>
                <Text
                  style={{color:colors.descBlack, fontSize: hp(1.7), fontWeight: '400',fontFamily:fontFamily.robotoMedium}}>
                  Tuesday, 4:00 - 09:00 PM
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
                 DHA, Lahore
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
              <ScrollView>
                <View>
                  <Text
                    style={{
                      color:colors.blackColor,
                      fontSize: hp(2.3),
                      fontWeight: '600',
                      fontFamily:fontFamily.robotoBold
                    }}>
                    About Session
                  </Text>
                  <Text
                    style={{
                      color:colors.longDescColor,
                      fontSize: hp(1.8),
                      fontWeight: '300',
                      lineHeight: hp(2.7),
                      letterSpacing: hp(0.1),
                      fontFamily:fontFamily.robotoLight
                    }}>
                    Lörem ipsum resertad bylåns krosm ångerrösta, eftersom
                    Monica Björk. Mik sobel tektig. Valedes tetran, content
                    provider. Intradäväpp tess, i biospesm meganing. Hånade
                    accelerator idat: i doräbösm inte beböhet. Spertad nången.
                    Georyr koras ifall soft landing transpol. Astrogt
                    tetraronyten har fodokåhet. Euror dekrong utom begorade
                    ultrav göra en labrador. Borade pason betenar augmented
                    reality. Dor autobel diaskop däna väs. Pseudost preren
                    soliga homoskapet och döl. Fad åligt har dår eller brexit.
                    Räbel hypol. Nomofobi kron semifologi ifall semilig. Nepol
                    vibyfoktig ock i stenokongar geod där. Tyl mikadiligen.
                    Nirelig Birgit Ekström som besedir dälingar: dibåsamma
                    parasport. Dor autobel diaskop däna väs. Pseudost preren
                    soliga homoskapet och döl. Lörem ipsum resertad bylåns krosm
                    ångerrösta, eftersom Monica Björk. Mik sobel tektig. Valedes
                    tetran, content provider. Intradäväpp tess, i biospesm
                    meganing. Hånade accelerator idat: i doräbösm inte beböhet.
                    Spertad nången. Georyr koras ifall soft landing transpol.
                    Astrogt tetraronyten har fodokåhet. Euror dekrong utom
                    begorade ultrav göra en labrador. Borade pason betenar
                    augmented reality. Dor autobel diaskop däna väs. Pseudost
                    preren soliga homoskapet och döl. Fad åligt har dår eller
                    brexit. Räbel hypol. Nomofobi kron semifologi ifall semilig.
                    Nepol vibyfoktig ock i stenokongar geod där. Tyl
                    mikadiligen. Nirelig Birgit Ekström som besedir dälingar:
                    dibåsamma parasport. Dor autobel diaskop däna väs. Pseudost
                    preren soliga homoskapet och döl.
                  </Text>
                </View>
              </ScrollView>
            </View>
          )}
          {speaker && (
            <View style={{flex: 0.7}}>
              <ScrollView>
                <View>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: hp(2.3),
                      fontWeight: '600',
                    }}>
                    About Session
                  </Text>
                </View>
                <TouchableOpacity
                onPress={()=>props.navigation.navigate('Profile')}
                  style={{
                    flex: 0.2,
                    flexDirection: 'row',
                    // backgroundColor: 'green',
                    height: hp(7),
                    borderRadius: hp(1),
                    borderWidth: 0.5,
                    borderColor: '#cdcdcd',
                    marginVertical: hp(1.5),
                  }}>
                  <View
                    style={{
                      flex: 0.15,
                      justifyContent: 'center',
                      paddingLeft: hp(1),
                    }}>
                    <Image
                      style={{width: '90%', height: '80%', paddingTop: hp(0)}}
                      source={{uri: 'imgtwo'}}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={{flex: 0.7, justifyContent: 'center'}}>
                    <Text
                      style={{
                        color:colors.blackColor,
                        paddingLeft: hp(1.5),
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
                        paddingLeft: hp(1.5),
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
                      alignItems: 'flex-end',
                      paddingRight: hp(1),
                    }}>
                    <Icon
                      type="light"
                      name="arrow-right"
                      size={hp(3)}
                      color="#2CC2E4"
                    />
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    flex: 0.2,
                    flexDirection: 'row',
                    // backgroundColor: 'green',
                    height: hp(7),
                    borderRadius: hp(1),
                    borderWidth: 0.5,
                    borderColor: '#cdcdcd',
                    marginVertical: hp(1.5),
                  }}>
                  <View
                    style={{
                      flex: 0.15,
                      justifyContent: 'center',
                      paddingLeft: hp(1),
                    }}>
                    <Image
                      style={{width: '90%', height: '80%', paddingTop: hp(0)}}
                      source={{uri: 'imgone'}}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={{flex: 0.7, justifyContent: 'center'}}>
                    <Text
                      style={{
                        color:colors.blackColor,
                        paddingLeft: hp(1.5),
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
                        paddingLeft: hp(1.5),
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
                      alignItems: 'flex-end',
                      paddingRight: hp(1),
                    }}>
                    <Icon
                      type="light"
                      name="arrow-right"
                      size={hp(3)}
                      color="#2CC2E4"
                    />
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.2,
                    flexDirection: 'row',
                    // backgroundColor: 'green',
                    height: hp(7),
                    borderRadius: hp(1),
                    borderWidth: 0.5,
                    borderColor: '#cdcdcd',
                    marginVertical: hp(1.5),
                  }}>
                  <View
                    style={{
                      flex: 0.15,
                      justifyContent: 'center',
                      paddingLeft: hp(1),
                    }}>
                    <Image
                      style={{width: '90%', height: '80%', paddingTop: hp(0)}}
                      source={{uri: 'imgthree'}}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={{flex: 0.7, justifyContent: 'center'}}>
                    <Text
                      style={{
                        color:colors.blackColor,
                        paddingLeft: hp(1.5),
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
                        paddingLeft: hp(1.5),
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
                      alignItems: 'flex-end',
                      paddingRight: hp(1),
                    }}>
                    <Icon
                      type="light"
                      name="arrow-right"
                      size={hp(3)}
                      color="#2CC2E4"
                    />
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.2,
                    flexDirection: 'row',
                    // backgroundColor: 'green',
                    height: hp(7),
                    borderRadius: hp(1),
                    borderWidth: 0.5,
                    borderColor: '#cdcdcd',
                    marginVertical: hp(1.5),
                  }}>
                  <View
                    style={{
                      flex: 0.15,
                      justifyContent: 'center',
                      paddingLeft: hp(1),
                    }}>
                    <Image
                      style={{width: '90%', height: '80%', paddingTop: hp(0)}}
                      source={{uri: 'imgfore'}}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={{flex: 0.7, justifyContent: 'center'}}>
                    <Text
                      style={{
                        color: '#000',
                        paddingLeft: hp(1.5),
                        fontSize: hp(2),
                        fontWeight: '600',
                      }}>
                      TechExplorer
                    </Text>
                    <Text
                      style={{
                        color: 'gray',
                        fontSize: hp(2),
                        paddingLeft: hp(1.5),
                        fontWeight: '300',
                      }}>
                      Chief Executive's, Owner
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.2,
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                      paddingRight: hp(1),
                    }}>
                    <Icon
                      type="light"
                      name="arrow-right"
                      size={hp(3)}
                      color="#2CC2E4"
                    />
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.2,
                    flexDirection: 'row',
                    // backgroundColor: 'green',
                    height: hp(7),
                    borderRadius: hp(1),
                    borderWidth: 0.5,
                    borderColor: '#cdcdcd',
                    marginVertical: hp(1.5),
                  }}>
                  <View
                    style={{
                      flex: 0.15,
                      justifyContent: 'center',
                      paddingLeft: hp(1),
                    }}>
                    <Image
                      style={{width: '90%', height: '80%', paddingTop: hp(0)}}
                      source={{uri: 'imgthree'}}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={{flex: 0.7, justifyContent: 'center'}}>
                    <Text
                      style={{
                        color:colors.blackColor,
                        paddingLeft: hp(1.5),
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
                        paddingLeft: hp(1.5),
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
                      alignItems: 'flex-end',
                      paddingRight: hp(1),
                    }}>
                    <Icon
                      type="light"
                      name="arrow-right"
                      size={hp(3)}
                      color="#2CC2E4"
                    />
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.2,
                    flexDirection: 'row',
                    // backgroundColor: 'green',
                    height: hp(7),
                    borderRadius: hp(1),
                    borderWidth: 0.5,
                    borderColor: '#cdcdcd',
                    marginVertical: hp(1.5),
                  }}>
                  <View
                    style={{
                      flex: 0.15,
                      justifyContent: 'center',
                      paddingLeft: hp(1),
                    }}>
                    <Image
                      style={{width: '90%', height: '80%', paddingTop: hp(0)}}
                      source={{uri: 'imgone'}}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={{flex: 0.7, justifyContent: 'center'}}>
                    <Text
                      style={{
                        color:colors.blackColor,
                        paddingLeft: hp(1.5),
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
                        paddingLeft: hp(1.5),
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
                      alignItems: 'flex-end',
                      paddingRight: hp(1),
                    }}>
                    <Icon
                      type="light"
                      name="arrow-right"
                      size={hp(3)}
                      color="#2CC2E4"
                    />
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.2,
                    flexDirection: 'row',
                    // backgroundColor: 'green',
                    height: hp(7),
                    borderRadius: hp(1),
                    borderWidth: 0.5,
                    borderColor: '#cdcdcd',
                    marginVertical: hp(1.5),
                  }}>
                  <View
                    style={{
                      flex: 0.15,
                      justifyContent: 'center',
                      paddingLeft: hp(1),
                    }}>
                    <Image
                      style={{width: '90%', height: '80%', paddingTop: hp(0)}}
                      source={{uri: 'imgtwo'}}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={{flex: 0.7, justifyContent: 'center'}}>
                    <Text
                      style={{
                        color:colors.blackColor,
                        paddingLeft: hp(1.5),
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
                        paddingLeft: hp(1.5),
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
                      alignItems: 'flex-end',
                      paddingRight: hp(1),
                    }}>
                    <Icon
                      type="light"
                      name="arrow-right"
                      size={hp(3)}
                      color="#2CC2E4"
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
          )}
          {resurces && (
            <View style={{flex: 0.7, height: hp(30)}}>
              <View style={{flex: 0.45, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 0.32,
                    backgroundColor: '#2CC2E4',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: hp(0.5),
                  }}>
                  <Icon
                    type="light"
                    name="file-pdf"
                    size={hp(5.5)}
                    color="#fff"
                  />
                </View>
                <View style={{flex: 0.03, backgroundColor: '#fff'}}></View>
                <View
                  style={{
                    flex: 0.32,
                    backgroundColor: '#FF8B66',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: hp(0.5),
                  }}>
                  <Icon
                    type="light"
                    name="file-word"
                    size={hp(5.5)}
                    color="#fff"
                  />
                </View>
                <View style={{flex: 0.03, backgroundColor: '#fff'}}></View>
                <View
                  style={{
                    flex: 0.32,
                    backgroundColor: '#00B6AA',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: hp(0.5),
                  }}>
                  <Icon type="light" name="image" size={hp(5.5)} color="#fff" />
                </View>
              </View>
              <View style={{flex: 0.04, backgroundColor: '#fff'}}></View>
              <View style={{flex: 0.45, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 0.32,
                    backgroundColor: '#00B6AA',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: hp(0.5),
                  }}>
                  <Icon type="light" name="image" size={hp(5.5)} color="#fff" />
                </View>
                <View style={{flex: 0.03, backgroundColor: '#fff'}}></View>
                <View
                  style={{
                    flex: 0.32,
                    backgroundColor: '#2CC2E4',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: hp(0.5),
                  }}>
                  <Icon
                    type="light"
                    name="file-pdf"
                    size={hp(5.5)}
                    color="#fff"
                  />
                </View>
                <View style={{flex: 0.03, backgroundColor: '#fff'}}></View>
                <View
                  style={{
                    flex: 0.32,
                    backgroundColor: '#FF8B66',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: hp(0.5),
                  }}>
                  <Icon
                    type="light"
                    name="file-word"
                    size={hp(5.5)}
                    color="#fff"
                  />
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default SessionProgramm;

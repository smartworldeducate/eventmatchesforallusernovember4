import {View, Text, ScrollView, Animated, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontFamily from '../Styles/fontFamily';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Image} from 'react-native';

const ChildBss = props => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [toggleColor, setToggleColor] = useState(false);
  const toggleExpansion = () => {
    // setToggleColor(false)
    setExpanded(!expanded);
    // setToggleColor(true)

    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [90, 250], // Change this value to control the expanded height
  });
  return (
    <>
      <View>
        <MainHeader
          text={'Child’s in BSS'}
          iconName={'arrow-left'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <ScrollView style={{flex: 1, marginTop: hp(2)}}>
        <View style={{marginHorizontal: wp('5'), marginBottom: hp(1.5)}}>
          <TouchableOpacity
            onPress={toggleExpansion}
            style={{
              width: wp(90),
              borderRadius: hp(2),
              backgroundColor: '#FFF',
              shadowColor: '#000',
              shadowOpacity: 0.4,
              shadowRadius: 1,
              elevation: 4,
            }}>
            <Animated.View
              style={{
                height,

                overflow: 'hidden',
              }}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View
                  style={{
                    flex: 0.3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: hp(-2),
                  }}>
                  <Image
                    style={{
                      width: wp(18),
                      height: hp(9),
                      marginTop: hp('1.5'),
                      position: 'absolute',
                      top: hp(0),
                    }}
                    source={{uri: 'bss'}}
                    resizeMode="contain"
                  />
                </View>
                <View style={{flex: 0.7, marginLeft: hp(-2.5)}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.childname}>
                        Muhammad Moeez Zeeshan
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.number}>283831</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.dob}>DOB :</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.dobdata}>15 Oct, 2017</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2.5),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.dob}>Class Section:</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.dobdata}>One Violet</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: wp('5'), marginBottom: hp(1.5)}}>
          <TouchableOpacity
            onPress={toggleExpansion}
            style={{
              width: wp(90),
              borderRadius: hp(2),
              backgroundColor: '#FFF',
              shadowColor: '#000',
              shadowOpacity: 0.4,
              shadowRadius: 1,
              elevation: 4,
            }}>
            <Animated.View
              style={{
                height,

                overflow: 'hidden',
              }}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View
                  style={{
                    flex: 0.3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: hp(-2),
                  }}>
                  <Image
                    style={{
                      width: wp(18),
                      height: hp(9),
                      marginTop: hp('1.5'),
                      position: 'absolute',
                      top: hp(0),
                    }}
                    source={{uri: 'bss'}}
                    resizeMode="contain"
                  />
                </View>
                <View style={{flex: 0.7, marginLeft: hp(-2.5)}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.childname}>
                        Muhammad Moeez Zeeshan
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.number}>283831</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.dob}>DOB :</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.dobdata}>15 Oct, 2017</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2.5),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.dob}>Class Section:</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.dobdata}>One Violet</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: wp('5'), marginBottom: hp(1.5)}}>
          <TouchableOpacity
            onPress={toggleExpansion}
            style={{
              width: wp(90),
              borderRadius: hp(2),
              backgroundColor: '#FFF',
              shadowColor: '#000',
              shadowOpacity: 0.4,
              shadowRadius: 1,
              elevation: 4,
            }}>
            <Animated.View
              style={{
                height,

                overflow: 'hidden',
              }}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View
                  style={{
                    flex: 0.3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: hp(-2),
                  }}>
                  <Image
                    style={{
                      width: wp(18),
                      height: hp(9),
                      marginTop: hp('1.5'),
                      position: 'absolute',
                      top: hp(0),
                    }}
                    source={{uri: 'bss'}}
                    resizeMode="contain"
                  />
                </View>
                <View style={{flex: 0.7, marginLeft: hp(-2.5)}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.childname}>
                        Muhammad Moeez Zeeshan
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.number}>283831</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.dob}>DOB :</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.dobdata}>15 Oct, 2017</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2.5),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.dob}>Class Section:</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.dobdata}>One Violet</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: wp('5'), marginBottom: hp(1.5)}}>
          <TouchableOpacity
            onPress={toggleExpansion}
            style={{
              width: wp(90),
              borderRadius: hp(2),
              backgroundColor: '#FFF',
              shadowColor: '#000',
              shadowOpacity: 0.4,
              shadowRadius: 1,
              elevation: 4,
            }}>
            <Animated.View
              style={{
                height,

                overflow: 'hidden',
              }}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View
                  style={{
                    flex: 0.3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: hp(-2),
                  }}>
                  <Image
                    style={{
                      width: wp(18),
                      height: hp(9),
                      marginTop: hp('1.5'),
                      position: 'absolute',
                      top: hp(0),
                    }}
                    source={{uri: 'bss'}}
                    resizeMode="contain"
                  />
                </View>
                <View style={{flex: 0.7, marginLeft: hp(-2.5)}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.childname}>
                        Muhammad Moeez Zeeshan
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.number}>283831</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.dob}>DOB :</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.dobdata}>15 Oct, 2017</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2.5),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.dob}>Class Section:</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.dobdata}>One Violet</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: wp('5'), marginBottom: hp(1.5)}}>
          <TouchableOpacity
            onPress={toggleExpansion}
            style={{
              width: wp(90),
              borderRadius: hp(2),
              backgroundColor: '#FFF',
              shadowColor: '#000',
              shadowOpacity: 0.4,
              shadowRadius: 1,
              elevation: 4,
            }}>
            <Animated.View
              style={{
                height,

                overflow: 'hidden',
              }}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View
                  style={{
                    flex: 0.3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: hp(-2),
                  }}>
                  <Image
                    style={{
                      width: wp(18),
                      height: hp(9),
                      marginTop: hp('1.5'),
                      position: 'absolute',
                      top: hp(0),
                    }}
                    source={{uri: 'bss'}}
                    resizeMode="contain"
                  />
                </View>
                <View style={{flex: 0.7, marginLeft: hp(-2.5)}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.childname}>
                        Muhammad Moeez Zeeshan
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.number}>283831</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.dob}>DOB :</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.dobdata}>15 Oct, 2017</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2.5),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.dob}>Class Section:</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.dobdata}>One Violet</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: wp('5'), marginBottom: hp(1.5)}}>
          <TouchableOpacity
            onPress={toggleExpansion}
            style={{
              width: wp(90),
              borderRadius: hp(2),
              backgroundColor: '#FFF',
              shadowColor: '#000',
              shadowOpacity: 0.4,
              shadowRadius: 1,
              elevation: 4,
            }}>
            <Animated.View
              style={{
                height,

                overflow: 'hidden',
              }}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View
                  style={{
                    flex: 0.3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: hp(-2),
                  }}>
                  <Image
                    style={{
                      width: wp(18),
                      height: hp(9),
                      marginTop: hp('1.5'),
                      position: 'absolute',
                      top: hp(0),
                    }}
                    source={{uri: 'bss'}}
                    resizeMode="contain"
                  />
                </View>
                <View style={{flex: 0.7, marginLeft: hp(-2.5)}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.childname}>
                        Muhammad Moeez Zeeshan
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.number}>283831</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.dob}>DOB :</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.dobdata}>15 Oct, 2017</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2.5),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.dob}>Class Section:</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.dobdata}>One Violet</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: wp('5'), marginBottom: hp(1.5)}}>
          <TouchableOpacity
            onPress={toggleExpansion}
            style={{
              width: wp(90),
              borderRadius: hp(2),
              backgroundColor: '#FFF',
              shadowColor: '#000',
              shadowOpacity: 0.4,
              shadowRadius: 1,
              elevation: 4,
            }}>
            <Animated.View
              style={{
                height,

                overflow: 'hidden',
              }}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View
                  style={{
                    flex: 0.3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: hp(-2),
                  }}>
                  <Image
                    style={{
                      width: wp(18),
                      height: hp(9),
                      marginTop: hp('1.5'),
                      position: 'absolute',
                      top: hp(0),
                    }}
                    source={{uri: 'bss'}}
                    resizeMode="contain"
                  />
                </View>
                <View style={{flex: 0.7, marginLeft: hp(-2.5)}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.childname}>
                        Muhammad Moeez Zeeshan
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.number}>283831</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.dob}>DOB :</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.dobdata}>15 Oct, 2017</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2.5),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.dob}>Class Section:</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.dobdata}>One Violet</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: wp('5'), marginBottom: hp(1.5)}}>
          <TouchableOpacity
            onPress={toggleExpansion}
            style={{
              width: wp(90),
              borderRadius: hp(2),
              backgroundColor: '#FFF',
              shadowColor: '#000',
              shadowOpacity: 0.4,
              shadowRadius: 1,
              elevation: 4,
            }}>
            <Animated.View
              style={{
                height,

                overflow: 'hidden',
              }}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View
                  style={{
                    flex: 0.3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: hp(-2),
                  }}>
                  <Image
                    style={{
                      width: wp(18),
                      height: hp(9),
                      marginTop: hp('1.5'),
                      position: 'absolute',
                      top: hp(0),
                    }}
                    source={{uri: 'bss'}}
                    resizeMode="contain"
                  />
                </View>
                <View style={{flex: 0.7, marginLeft: hp(-2.5)}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.childname}>
                        Muhammad Moeez Zeeshan
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.number}>283831</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.dob}>DOB :</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.dobdata}>15 Oct, 2017</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2.5),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.dob}>Class Section:</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.dobdata}>One Violet</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: wp('5'), marginBottom: hp(1.5)}}>
          <TouchableOpacity
            onPress={toggleExpansion}
            style={{
              width: wp(90),
              borderRadius: hp(2),
              backgroundColor: '#FFF',
              shadowColor: '#000',
              shadowOpacity: 0.4,
              shadowRadius: 1,
              elevation: 4,
            }}>
            <Animated.View
              style={{
                height,

                overflow: 'hidden',
              }}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View
                  style={{
                    flex: 0.3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: hp(-2),
                  }}>
                  <Image
                    style={{
                      width: wp(18),
                      height: hp(9),
                      marginTop: hp('1.5'),
                      position: 'absolute',
                      top: hp(0),
                    }}
                    source={{uri: 'bss'}}
                    resizeMode="contain"
                  />
                </View>
                <View style={{flex: 0.7, marginLeft: hp(-2.5)}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.childname}>
                        Muhammad Moeez Zeeshan
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.number}>283831</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.dob}>DOB :</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.dobdata}>15 Oct, 2017</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2.5),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.dob}>Class Section:</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.dobdata}>One Violet</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: wp('5'), marginBottom: hp(1.5)}}>
          <TouchableOpacity
            onPress={toggleExpansion}
            style={{
              width: wp(90),
              borderRadius: hp(2),
              backgroundColor: '#FFF',
              shadowColor: '#000',
              shadowOpacity: 0.4,
              shadowRadius: 1,
              elevation: 4,
            }}>
            <Animated.View
              style={{
                height,

                overflow: 'hidden',
              }}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View
                  style={{
                    flex: 0.3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: hp(-2),
                  }}>
                  <Image
                    style={{
                      width: wp(18),
                      height: hp(9),
                      marginTop: hp('1.5'),
                      position: 'absolute',
                      top: hp(0),
                    }}
                    source={{uri: 'bss'}}
                    resizeMode="contain"
                  />
                </View>
                <View style={{flex: 0.7, marginLeft: hp(-2.5)}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.childname}>
                        Muhammad Moeez Zeeshan
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.number}>283831</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.dob}>DOB :</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.dobdata}>15 Oct, 2017</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: hp(-2.5),
                    }}>
                    <View style={{marginVertical: hp(1.5)}}>
                      <Text style={styles.dob}>Class Section:</Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: hp(2),
                      }}>
                      <Text style={styles.dobdata}>One Violet</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
        {/* <View style={{marginTop: hp('10')}}></View> */}
      </ScrollView>
    </>
  );
};

export default ChildBss;

const styles = EStyleSheet.create({
  zetext: {
    color: '#363636',
    fontWeight: '700',
    fontSize: '0.9rem',
    fontFamily: fontFamily.ceraBlack,
  },
  zetext1: {
    color: '#363636',
    fontWeight: '500',
    // marginTop: hp(1),
    fontSize: '0.7rem',
    fontFamily: fontFamily.ceraBlack,
  },
  smalltext: {
    fontWeight: '700',
    fontSize: '0.7375rem',
    fontFamily: fontFamily.ceraBlack,
    color: '#353535',
    fontStyle: 'normal',
  },
  smalltext1: {
    fontWeight: '500',
    fontSize: '0.5rem',
    fontFamily: fontFamily.ceraBlack,
    color: '#353535',
    fontStyle: 'normal',
    alignItems: 'center',
  },
  dtext: {
    color: '#353535',
    fontSize: '0.8rem',
    fontWeight: '700',
    fontStyle: 'normal',
    paddingVertical: hp(0.5),
    fontFamily: fontFamily.ceraBlack,
  },
  centertext: {
    fontFamily: fontFamily.ceraBlack,
    fontSize: '0.75rem',
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#363636',
  },
  ststext: {
    fontFamily: fontFamily.ceraBlack,
    paddingHorizontal: hp(2.5),
    paddingVertical: hp(0.5),
    textTransform: 'uppercase',
  },
  childname: {
    color: '#353535',
    fontFamily: fontFamily.ceraBold,
    fontSize: '0.6rem',
    fontWeight: '700',
    fontStyle: 'normal',
  },
  number: {
    color: '#2D8E00',
    backgroundColor: '#D4FFCC',
    borderRadius: hp(50),
    paddingHorizontal: hp(0.8),
    fontFamily: fontFamily.ceraBold,
    fontSize: '0.5rem',
    fontWeight: '700',
    fontStyle: 'normal',
  },
  dob: {
    color: '#363636',
    fontFamily: fontFamily.ceraMedium,
    fontSize: '0.5rem',
    fontWeight: '300',
    fontStyle: 'normal',
  },
  dobdata: {
    color: '#353535',
    // backgroundColor: '#D4FFCC',
    borderRadius: hp(50),
    paddingHorizontal: hp(0.8),
    fontFamily: fontFamily.ceraMedium,
    fontSize: '0.55rem',
    fontWeight: '300',
    fontStyle: 'normal',
  },
});

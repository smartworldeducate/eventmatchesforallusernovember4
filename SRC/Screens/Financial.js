import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import EStyleSheet from 'react-native-extended-stylesheet';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Menu from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-fontawesome-pro';
import {BottomSheet} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Graph from '../Components/Graph';
import fontFamily from '../Styles/fontFamily';
import GraphList from '../Components/GraphList';
const Financial = props => {
  const [visible, setVisible] = useState(false);
  const [pf, setPf] = useState(false);
  const [txt, setTxt] = useState(false);
  const [slip, setSlip] = useState(false);
  const [btColor, setBtColor] = useState(false);
  const [btColor1, setBtColor1] = useState(false);
  const [btColor2, setBtColor2] = useState(false);
  const [btColor3, setBtColor3] = useState(false);
  const pfHandler = () => {
    setPf(true);
    setVisible(true);
    setTxt(false);
    setSlip(false);
  };
  const txtHandler = () => {
    setPf(false);
    setTxt(true);
    setVisible(true);
    setSlip(false);
  };
  const handleReset = () => {
    setVisible(false);
  };
  const slipHandler = () => {
    setPf(false);
    setTxt(false);
    setSlip(true);
    setVisible(true);
  };
  const btColorHandler = () => {
    setBtColor1(false);
    setBtColor2(false);
    setBtColor3(false);
    setBtColor(true);
  };
  const btColorHandler1 = () => {
    setBtColor(false);
    setBtColor1(true);
    setBtColor2(false);
    setBtColor3(false);
  };
  const btColorHandler2 = () => {
    setBtColor(false);
    setBtColor1(false);
    setBtColor2(true);
    setBtColor3(false);
    // setBtColor(true)
  };
  const btColorHandler3 = () => {
    setBtColor(false);
    setBtColor1(false);
    setBtColor2(false);
    setBtColor3(true);
  };
  const [salary, setSalary] = useState(true);
  const [history, setHistory] = useState(false);
  const [defalut, setDefalut] = useState(true);
  const salaryHandler = () => {
    setSalary(true);
    setHistory(false);
  };
  const historyHandler = () => {
    setHistory(true);
    setSalary(false);
  };
  const [clinder, setClinder] = useState(null);
  const clinderHandler = item => {
    setClinder(item);
    setDefalut(false);
    console.log('my item  time out', item);
  };
  const data1 = [
    {id: 1, text: '17-06-2023', number: 'Full Toil', month: 'Jan'},
    {id: 2, text: '08:40:33', number: '08:44:47', month: 'Feb'},
    {id: 3, text: '08:40:33', number: '08:17:03', month: 'Mar'},
    {id: 4, text: '17-06-2023', number: '08:17:03', month: 'Apr'},
    {id: 5, text: '17-06-2023', number: '08:17:03', month: 'May'},
    {id: 6, text: '08:40:33', number: '08:44:47', month: 'Jun'},
    {id: 7, text: '08:40:33', number: '5,000', month: 'Jul'},
    {id: 8, text: '17-06-2023', number: '08:17:03', month: 'Aug'},
    {id: 9, text: '17-06-2023', number: 'Weekend', month: 'Sep'},
    {id: 10, text: '08:40:33', number: 'Full Toil', month: 'Oct'},
    {id: 11, text: '17-06-2023', number: '08:44:47', month: 'Nov'},
    {id: 12, text: '17-06-2023', number: '08:17:03', month: 'Dec'},
  ];
  const years = ['2020', '2021', '2022', '2023', '2024'];

  const data = [
    {text: 'PF Own', number: '5,000'},
    {text: 'EOBI Own', number: '250'},
    {text: 'Income Tax', number: '5,000'},
    {text: 'Absent Deduction (Absent days)', number: '0(0)'},
    {text: 'Other Deduction', number: '840'},
    {text: 'Total Deduction', number: '1190'},
    {text: 'Net Salary', number: '88090'},
  ];
  const renderDot = color => {
    return (
      <View
        style={{
          height: hp(3.7),
          width: wp(2.5),
          borderRadius: 1,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };
  return (
    <>
      <View>
        <MainHeader
          text={'Financials'}
          iconName={'arrow-left'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <View
        style={{
          height: hp(7),
          marginHorizontal: hp(2.5),
          borderRadius: hp(1),
          backgroundColor: '#E7E7E7',
          marginTop: hp(2),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            marginHorizontal: hp(1),
            marginVertical: hp(0.7),
          }}>
          <TouchableOpacity
            onPress={salaryHandler}
            style={{
              height: hp(5.5),
              backgroundColor: salary == true ? '#fff' : '#E7E7E7',
              paddingVertical: hp(1),
              borderRadius: hp(1),
              paddingHorizontal: hp(6),
              justifyContent: 'center',
            }}>
            <Text style={styles.headertext}>Salary Slip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={historyHandler}
            style={{
              height: hp(5.5),
              backgroundColor: history == true ? '#fff' : '#E7E7E7',
              paddingVertical: hp(1),
              borderRadius: hp(1),
              paddingHorizontal: hp(7),
              justifyContent: 'center',
            }}>
            <Text style={styles.headertext}>History</Text>
          </TouchableOpacity>
        </View>
      </View>
      {salary == true && (
        <View style={{flex: 1}}>
          {pf && (
            <BottomSheet
              isVisible={visible}
              style={{
                // width: wp(100),
                marginTop: hp(8),
                backgroundColor: '#fff',
                flex: 1,
              }}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#1C37A5', '#4D69DC']}
                style={styles.mainHeader}>
                <TouchableOpacity
                  onPress={handleReset}
                  style={{
                    width: wp(100),
                    position: 'relative',
                    zIndex: 1,
                    marginBottom: hp(20),
                  }}>
                  <View
                    style={{
                      width: wp(20),
                      height: hp(10),
                      borderRadius: hp(50),
                      justifyContent: 'center',
                      alignItems: 'center',
                      // backgroundColor: 'red',
                      position: 'absolute',
                      top: hp(-1),
                      left: hp(42),
                    }}>
                    <Text style={{color: '#fff', fontSize: hp(2)}}>X</Text>
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </BottomSheet>
          )}
          {txt && (
            <BottomSheet
              isVisible={visible}
              style={{
                // width: wp(100),
                marginTop: hp(8),
                backgroundColor: '#fff',
                flex: 1,
              }}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#1C37A5', '#4D69DC']}
                style={styles.mainHeader}>
                <TouchableOpacity
                  onPress={handleReset}
                  style={{
                    width: wp(100),
                    position: 'relative',
                    zIndex: 1,
                    marginBottom: hp(20),
                  }}>
                  <View
                    style={{
                      width: wp(20),
                      height: hp(10),
                      borderRadius: hp(50),
                      justifyContent: 'center',
                      alignItems: 'center',
                      // backgroundColor: 'red',
                      position: 'absolute',
                      top: hp(-1),
                      left: hp(42),
                    }}>
                    <Text style={{color: '#fff', fontSize: hp(2)}}>X</Text>
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </BottomSheet>
          )}
          {slip && (
            <BottomSheet
              isVisible={visible}
              style={{
                // width: wp(100),
                marginTop: hp(8),
                backgroundColor: '#fff',
                flex: 1,
              }}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#1C37A5', '#4D69DC']}
                style={styles.mainHeader}>
                <TouchableOpacity
                  onPress={handleReset}
                  style={{
                    width: wp(100),
                    position: 'relative',
                    zIndex: 1,
                    marginBottom: hp(20),
                  }}>
                  <View
                    style={{
                      width: wp(20),
                      height: hp(10),
                      borderRadius: hp(50),
                      justifyContent: 'center',
                      alignItems: 'center',
                      // backgroundColor: 'red',
                      position: 'absolute',
                      top: hp(-1),
                      left: hp(42),
                    }}>
                    <Text style={{color: '#fff', fontSize: hp(2)}}>X</Text>
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </BottomSheet>
          )}
          <ScrollView>
            <View style={{flex: 1}}>
              <Graph />
            </View>
            <View
              style={{flex: 1, marginHorizontal: hp(2.5), marginTop: hp(2)}}>
              <View
                style={{
                  height: hp(4.5),
                  backgroundColor: '#E7E7E7',
                  justifyContent: 'center',
                  paddingLeft: hp(1),
                }}>
                <Text style={styles.duction}>Deductions</Text>
              </View>
              {data.map((item, i) => {
                return (
                  <View key={i}>
                    <View
                      style={{
                        height: hp(5),
                        marginHorizontal: hp(1),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View style={{justifyContent: 'center'}}>
                        <Text style={styles.testname}>{item.text}</Text>
                      </View>
                      <View style={{justifyContent: 'center'}}>
                        <Text style={styles.textnum}>{item.number}</Text>
                      </View>
                    </View>
                    <View
                      style={{height: 1, backgroundColor: '#DBDBDB'}}></View>
                  </View>
                );
              })}
            </View>
          </ScrollView>
          <View
            style={{
              height: hp(8),
              backgroundColor: '#1C37A4',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 4,
            }}>
            <TouchableOpacity
              onPress={pfHandler}
              style={{flex: 0.33, alignItems: 'center'}}>
              <Text style={styles.ftbotom}>PF CERTIFICATE</Text>
            </TouchableOpacity>
            <View
              style={{
                width: wp(0.4),
                height: hp(7),
                backgroundColor: '#FFF',
                borderRadius: hp(50),
              }}></View>
            <TouchableOpacity
              onPress={txtHandler}
              style={{
                flex: 0.33,
                paddingTop: hp(0.5),
                alignItems: 'center',
                flexDirection: 'row',
                paddingLeft: hp(1),
              }}>
              <View>
                <Text style={styles.ftbotom}>TEXT CERTIFICATE</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: wp(0.4),
                height: hp(7),
                backgroundColor: '#FFF',
                borderRadius: hp(50),
              }}></View>

            <TouchableOpacity
              style={{flex: 0.33, alignItems: 'center'}}
              onPress={slipHandler}>
              <Text style={styles.ftbotom}>LAST SALLARY SLIP</Text>
            </TouchableOpacity>
          </View>
          {/* <View
          style={{
            // flax:1,
            height: hp(8),
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            position:'relative',
            top:hp(34),bottom:hp(0)
          }}>
          <TouchableOpacity
            onPress={btColorHandler}
            style={{flex: 0.2, alignItems: 'center'}}>
            <Menu name="calendar" size={hp(2.5)} color={btColor ==true ? '#1C37A4':'#979797'}  style={{}} />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={btColorHandler1}
            style={{flex: 0.2, paddingTop: hp(0.5), alignItems: 'center',flexDirection:'row',paddingLeft:hp(1)}}>
           <View>
           <Icon name="paper-plane" size={hp(2.5)} color={btColor1 ==true ? '#1C37A4':'#979797'} />
           </View>
           <View>
           <Text style={[styles.btc,{color:btColor1 ==true ? '#1C37A4':'#979797'}]}>Apply</Text>
           </View>
          
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 0.2, alignItems: 'center'}} onPress={btColorHandler2}>
            <Icon name="chart-simple" size={hp(2.5)} color={btColor2 ==true ? '#1C37A4':'#979797'} />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={btColorHandler3}
            style={{flex: 0.2, alignItems: 'center', paddingTop: hp(0)}}>
            <Icon name="rectangle-history" size={hp(2.5)} color={btColor3 ==true ? '#1C37A4':'#979797'} />
          </TouchableOpacity>
        </View> */}
        </View>
      )}

      {history == true && (
        <>
          {defalut == true && (
            <View
              style={{
                height: hp(7),
                marginTop: hp(2),
                marginHorizontal: hp(2.5),
              }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {data1?.map((item, i) => {
                  return (
                    <TouchableOpacity
                      onPress={() => clinderHandler(item.id)}
                      key={i}>
                      <View
                        style={{
                          height: hp(4),
                          paddingHorizontal: hp(3),
                          borderRadius: hp(20),
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: i == 2 ? '#4D69DC' : ' ',
                          marginHorizontal: hp(0.5),
                        }}>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              color: i == 2 ? '#FFF' : 'gray',
                              fontSize: hp(1.5),
                            }}>
                            {item.month}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          )}

          {defalut !== true && (
            <View>
              <ScrollView
                horizontal={true}
                contentContainerStyle={{
                  height: hp(8),
                  marginTop: hp(2.5),
                  marginHorizontal: hp(2.5),
                  justifyContent: 'center',
                }}
                showsHorizontalScrollIndicator={false}>
                {data1?.map((e, i) => {
                  return (
                    <View key={i}>
                      {clinder == e.id && (
                        <TouchableOpacity
                          onPress={() => clinderHandler(e.id)}
                          key={i}>
                          <View
                            style={{
                              height: hp(4),
                              paddingHorizontal: hp(3.5),
                              marginHorizontal: hp(2),
                              borderRadius: hp(20),
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: '#4D69DC',
                            }}>
                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Text
                                style={{
                                  color: '#FFF',
                                  fontSize: hp(1.5),
                                }}>
                                {e.month}
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      )}
                      {clinder !== e.id && (
                        <TouchableOpacity
                          onPress={() => clinderHandler(e.id)}
                          key={i}>
                          <View
                            style={{
                              height: hp(4),
                              paddingHorizontal: hp(2.7),
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Text
                                style={{
                                  color: 'gray',
                                  fontSize: hp(1.5),
                                }}>
                                {e.month}
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      )}
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          )}

          <View
            style={{
              marginHorizontal: hp(2.5),
              marginTop: defalut == true ? hp(-1) : hp(-3),
            }}>
            <ScrollView>
              {data1.map((item, i) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingHorizontal: hp(2),
                      height: hp(14),
                      borderRadius: hp(2),
                      backgroundColor: '#FFFFFF',
                      marginTop: hp(2),
                      shadowOpacity: 0.5,
                      shadowRadius: 4,
                      elevation: 1,
                    }}
                    key={i}>
                    <View style={{flexDirection: 'row'}}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginTop: hp(1.5),
                        }}>
                        <GraphList />
                        {/* <AnimatedCircularProgress
                        size={86}
                        width={8}
                        fill={50}
                        tintColor="#D4E9FF"
                        onAnimationComplete={() =>
                          console.log('onAnimationComplete')
                        }
                        backgroundColor="#C1B7FD">
                        {fill => (
                          <View style={{justifyContent: 'center'}}>
                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Text style={styles.circularText}>{item.month}</Text>
                            </View>
                           
                          </View>
                        )}
                      </AnimatedCircularProgress> */}
                      </View>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginLeft: hp(2.5),
                          // position:'absolute',left:hp(5)
                        }}>
                        <View style={{flexDirection: 'row'}}>
                          <View style={{marginVertical: hp(0.5)}}>
                            {renderDot('#C1B7FD')}
                          </View>
                          <View>
                            <View>
                              <Text style={styles.numbertext}>25,000</Text>
                            </View>
                            <View>
                              <Text style={styles.basictext}>Gross Salary</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>

                    <View>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginLeft: hp(3),
                        }}>
                        <View style={{flexDirection: 'row'}}>
                          <View style={{marginVertical: hp(0.5)}}>
                            {renderDot('#FEBB5B')}
                          </View>
                          <View>
                            <View>
                              <Text style={styles.numbertext}>25,000</Text>
                            </View>
                            <View>
                              <Text style={styles.basictext}>net Salary</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View>{/* <Text>vfgdfgdf</Text> */}</View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </>
      )}
    </>
  );
};

export default Financial;

const styles = EStyleSheet.create({
  smalltext: {
    fontWeight: '500',
    fontSize: '0.9rem',
    fontFamily: fontFamily.ceraMedium,
    color: '#363636',
    fontStyle: 'normal',
  },
  smalltext1: {
    fontWeight: '500',
    fontSize: '0.5rem',
    fontFamily: fontFamily.ceraMedium,
    color: '#353535',
    fontStyle: 'normal',
    alignItems: 'center',
  },
  iconSty: {
    fontSize: hp(2.5),
    color: '#A6ACAF',
    fontWeight: 100,
  },
  headertext: {
    fontSize: '0.75rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    color: '#363636',
    fontWeight: '500',
  },
  duction: {
    color: '#979797',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  testname: {
    color: '#343434',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  textnum: {
    color: '#343434',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  circularText: {
    fontSize: '0.75rem',
    color: '#646464',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBold,
    fontStyle: 'normal',
  },
  circularText1: {
    fontSize: '0.5rem',
    color: '#979797',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    marginHorizontal: hp(0.9),
    textTransform: 'uppercase',
  },
  numbertext: {
    color: '#353535',
    fontSize: '0.7rem',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBold,
    fontStyle: 'normal',
    textTransform: 'uppercase',
  },
  basictext: {
    color: '#979797',
    fontSize: '0.5rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    textTransform: 'uppercase',
  },
  btc: {
    paddingLeft: hp(0.5),
    fontSize: hp(2),
    fontWeight: '700',
    fontFamily: fontFamily.ceraBlack,
  },
  ftbotom: {
    color: '#FFF',
    fontSize: '0.55rem',
    fontFamily: fontFamily.ceraBold,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  mainHeader: {
    height: hp(8),
    backgroundColor: '#1C37A4',
    borderBottomRightRadius: hp(0),
    borderBottomLeftRadius: hp(0),
  },
});

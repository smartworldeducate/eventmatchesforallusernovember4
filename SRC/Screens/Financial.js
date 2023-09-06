import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  Platform,
  Linking,
} from 'react-native';
import React, { useState } from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Menu from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-fontawesome-pro';
import { BottomSheet } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Pdf from 'react-native-pdf';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Graph from '../Components/Graph';
import fontFamily from '../Styles/fontFamily';
import GraphList from '../Components/GraphList';
import { color } from '@rneui/themed/dist/config';
import CmpTest from '../Components/CmpTest';
const Financial = props => {
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [inheight, setInHeight] = useState(null);
  const toggleExpansion = item => {
    setInHeight(item);
    setExpanded(!expanded);

    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  const expandData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 335], // Change this value to control the expanded height
  });
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Qasim Team', value: 'Y' },
    { label: 'Asad Numan Shahid', value: 'N' },
  ]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [hide, setHide] = useState(true);

  const [dateView, setDateView] = useState(true);
  const [date, setDate] = useState('');
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
    { id: 1, text: '17-06-2023', number: 'Full Toil', month: 'Jan' },
    { id: 2, text: '08:40:33', number: '08:44:47', month: 'Feb' },
    { id: 3, text: '08:40:33', number: '08:17:03', month: 'Mar' },
    { id: 4, text: '17-06-2023', number: '08:17:03', month: 'Apr' },
    { id: 5, text: '17-06-2023', number: '08:17:03', month: 'May' },
    { id: 6, text: '08:40:33', number: '08:44:47', month: 'Jun' },
    { id: 7, text: '08:40:33', number: '5,000', month: 'Jul' },
    { id: 8, text: '17-06-2023', number: '08:17:03', month: 'Aug' },
    { id: 9, text: '17-06-2023', number: 'Weekend', month: 'Sep' },
    { id: 10, text: '08:40:33', number: 'Full Toil', month: 'Oct' },
    { id: 11, text: '17-06-2023', number: '08:44:47', month: 'Nov' },
    { id: 12, text: '17-06-2023', number: '08:17:03', month: 'Dec' },
  ];
  const years = ['2020', '2021', '2022', '2023', '2024'];

  const data = [
    { text: 'PF Own', number: '5,000' },
    { text: 'EOBI Own', number: '250' },
    { text: 'Income Tax', number: '5,000' },
    { text: 'Absent Deduction (Absent days)', number: '0(0)' },
    { text: 'Other Deduction', number: '840' },
    { text: 'Total Deduction', number: '1190' },
    { text: 'Net Salary', number: '88090' },
  ];

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    setDate('');
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    console.log(date);
    const dt =
      date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
    setDate(dt);
    hideDatePicker();
    setDateView(false);
    setHide(false);
  };

  const renderDot = color => {
    return <View style={styles.renderdot} />;
  };
  return (
    <View style={{ flex: 1 }}>
      <View>
        <MainHeader
          text={'Financials'}
          iconName={'arrow-left'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
      <View style={styles.salaryMainView}>
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
        <View style={{ flex: 1 }}>
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
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#1C37A5', '#4D69DC']}
                style={styles.mainHeader}>
                <View
                  style={{
                    marginHorizontal: hp(2.5),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      marginVertical: hp(1.5),
                      height: hp(5),
                    }}>
                    <Text style={{ color: '#fff', paddingBottom: hp(0.1) }}>
                      PF CERTIFICATE
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL(
                          'https://beams.beaconhouse.edu.pk/core/mobile_app/pdf/student_certificate_pdf.php?id=',
                        )
                      }
                      style={{
                        justifyContent: 'center',
                        marginVertical: hp(1.5),
                        height: hp(5),
                        marginRight: hp(3),
                      }}>
                      <Icon
                        type="light"
                        name="download"
                        size={hp(3)}
                        color="#fff"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={handleReset}
                      style={{ justifyContent: 'center', marginTop: hp(0.3) }}>
                      <Icon
                        type="light"
                        name="xmark"
                        size={hp(3)}
                        color="#fff"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </LinearGradient>
              {hide && (
                <View>
                  <TouchableOpacity
                    onPress={showDatePicker}
                    style={{
                      marginHorizontal: hp(2.5),
                      marginTop: hp(2),
                    }}>
                    <View
                      style={{
                        height: hp(6.5),
                        flexDirection: 'row',
                        borderColor: '#E4DFDF',
                        justifyContent: 'space-between',
                        borderWidth: 1,
                        borderRadius: hp(1.2),
                        backgroundColor: '#FFFFFF',
                        paddingLeft: hp(1.5),
                      }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        {date && <Text style={{ color: 'gray' }}>{date}</Text>}
                        {!date && (
                          <Text style={{ color: 'gray' }}>
                            Select Financial year
                          </Text>
                        )}
                      </View>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingRight: hp(1.5),
                        }}>
                        <Icon
                          type="light"
                          name="calendar-days"
                          size={hp(2)}
                          color="#cdcdcd"
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginHorizontal: hp(2.5),
                    }}>
                    <View></View>
                    <TouchableOpacity
                      style={{
                        height: hp(4),
                        marginTop: hp(1),
                        width: wp(20),
                        borderRadius: hp(1),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#4D69DC',
                        elevation: 1,
                      }}>
                      <Text style={{ color: '#FFF' }}>Print</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              {date && (
                <View style={styles.container}>
                  <Pdf
                    trustAllCerts={false}
                    source={{
                      uri: 'https://beams.beaconhouse.edu.pk/core/mobile_app/pdf/student_certificate_pdf.php?id=',
                    }}
                    onLoadComplete={(numberOfPages, filePath) => {
                      console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page, numberOfPages) => {
                      console.log(`Current page: ${page}`);
                    }}
                    onError={error => {
                      console.log(error);
                    }}
                    onPressLink={uri => {
                      console.log(`Link pressed: ${uri}`);
                    }}
                    style={styles.pdf}
                  />
                </View>
              )}
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
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#1C37A5', '#4D69DC']}
                style={styles.mainHeader}>
                <View
                  style={{
                    marginHorizontal: hp(2.5),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      marginVertical: hp(1.5),
                      height: hp(5),
                    }}>
                    <Text style={{ color: '#fff', paddingBottom: hp(0.1) }}>
                      Tax CERTIFICATE
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL(
                          'https://beams.beaconhouse.edu.pk/core/mobile_app/pdf/student_certificate_pdf.php?id=',
                        )
                      }
                      style={{
                        justifyContent: 'center',
                        marginVertical: hp(1.5),
                        height: hp(5),
                        marginRight: hp(3),
                      }}>
                      <Icon
                        type="light"
                        name="download"
                        size={hp(3)}
                        color="#fff"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={handleReset}
                      style={{ justifyContent: 'center', marginTop: hp(0.3) }}>
                      <Icon
                        type="light"
                        name="xmark"
                        size={hp(3)}
                        color="#fff"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </LinearGradient>
              {hide && (
                <View>
                  <TouchableOpacity
                    onPress={showDatePicker}
                    style={{
                      marginHorizontal: hp(2.5),
                      marginTop: hp(2),
                      zIndex: 1,
                    }}>
                    <View
                      style={{
                        height: hp(6.5),

                        borderRadius: hp(1.2),
                        backgroundColor: '#FFFFFF',
                      }}>
                      <DropDownPicker
                        placeholder="Select Tax Certificate"
                        placeholderStyle={{ color: '#cdcdcd' }}
                        style={{
                          borderColor: '#E4DFDF',
                          borderWidth: 1,
                          borderRadius: hp(1.2),
                        }}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                      />
                    </View>
                  </TouchableOpacity>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginHorizontal: hp(2.5),
                    }}>
                    <View></View>
                    <TouchableOpacity
                      style={{
                        height: hp(4),
                        marginTop: hp(1),
                        width: wp(20),
                        borderRadius: hp(1),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#4D69DC',
                      }}>
                      <Text style={{ color: '#FFF' }}>Print</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              {value && (
                <View style={styles.container}>
                  <Pdf
                    trustAllCerts={false}
                    source={{
                      uri: 'https://beams.beaconhouse.edu.pk/core/mobile_app/pdf/student_certificate_pdf.php?id=',
                    }}
                    onLoadComplete={(numberOfPages, filePath) => {
                      console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page, numberOfPages) => {
                      console.log(`Current page: ${page}`);
                    }}
                    onError={error => {
                      console.log(error);
                    }}
                    onPressLink={uri => {
                      console.log(`Link pressed: ${uri}`);
                    }}
                    style={styles.pdf}
                  />
                </View>
              )}
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
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#1C37A5', '#4D69DC']}
                style={styles.mainHeader}>
                <View
                  style={{
                    marginHorizontal: hp(2.5),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      marginVertical: hp(1.5),
                      height: hp(5),
                    }}>
                    <Text style={{ color: '#fff', paddingBottom: hp(0.1) }}>
                      Tax CERTIFICATE
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL(
                          'https://beams.beaconhouse.edu.pk/core/mobile_app/pdf/student_certificate_pdf.php?id=',
                        )
                      }
                      style={{
                        justifyContent: 'center',
                        marginVertical: hp(1.5),
                        height: hp(5),
                        marginRight: hp(3),
                      }}>
                      <Icon
                        type="light"
                        name="download"
                        size={hp(3)}
                        color="#fff"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={handleReset}
                      style={{ justifyContent: 'center', marginTop: hp(0.3) }}>
                      <Icon
                        type="light"
                        name="xmark"
                        size={hp(3)}
                        color="#fff"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </LinearGradient>

              <View style={styles.container}>
                <Pdf
                  trustAllCerts={false}
                  source={{
                    uri: 'https://beams.beaconhouse.edu.pk/core/mobile_app/pdf/student_certificate_pdf.php?id=',
                  }}
                  onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                  }}
                  onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                  }}
                  onError={error => {
                    console.log(error);
                  }}
                  onPressLink={uri => {
                    console.log(`Link pressed: ${uri}`);
                  }}
                  style={styles.pdf}
                />
              </View>
            </BottomSheet>
          )}
          <ScrollView>
            <View style={{ flex: 1 }}>
              <Graph />
            </View>
            <View
              style={{ flex: 1, marginHorizontal: hp(2.5), marginTop: hp(2) }}>
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
                      <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.testname}>{item.text}</Text>
                      </View>
                      <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.textnum}>{item.number}</Text>
                      </View>
                    </View>
                    <View
                      style={{ height: 1, backgroundColor: '#DBDBDB' }}></View>
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
              style={{ flex: 0.33, alignItems: 'center' }}>
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
              <View style={{ alignItems: 'center', marginHorizontal: hp(1.2) }}>
                <Text style={styles.ftbotom}>TAX CERTIFICATE</Text>
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
              style={{ flex: 0.33, alignItems: 'center' }}
              onPress={slipHandler}>
              <Text style={styles.ftbotom}>SALARY SLIP</Text>
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
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                {data1?.map((e, i) => {
                  return (
                    <View key={i}>
                      {clinder == e.id && (
                        <TouchableOpacity
                          onPress={() => clinderHandler(e.id)}
                          key={i}>
                          <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#1C37A5', '#4D69DC']}
                            style={{
                              height: hp(4),
                              paddingHorizontal: hp(3.5),
                              marginHorizontal: hp(2),
                              borderRadius: hp(20),
                              justifyContent: 'center',
                              alignItems: 'center',
                              // backgroundColor: '#4D69DC',
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
                          </LinearGradient>
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

              marginTop: defalut == true ? hp(-1) : hp(-1.5),
            }}>
            <ScrollView>
              {data1.map((item, i) => {
                return (
                  <View style={{ marginBottom: hp(0.5) }} key={i}>
                    {/* <TouchableOpacity
                      onPress={() => toggleExpansion(item.id)}
                      style={{
                        borderRadius: hp(2),
                        backgroundColor: '#FFF',
                        shadowColor: '#000',
                        shadowOpacity: 0.4,
                        shadowRadius: 1,
                        elevation: 1,
                      }}>
                      {inheight == item.id && (
                        <Animated.View
                          style={{
                            height,
                            paddingHorizontal: hp(2.5),
                            overflow: 'hidden',
                            position: 'relative',
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              position: 'absolute',
                              top: 0,
                              left: hp(2.5),
                            }}>
                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: hp(1.5),
                              }}>
                              <GraphList />
                            </View>
                            <View
                              style={{
                                justifyContent: 'center',
                                marginHorizontal: hp(1.5),
                              }}>
                              <View style={{ flexDirection: 'row' }}>
                                <View style={{ marginVertical: hp(0.5) }}>
                                  {renderDot('#C1B7FD')}
                                </View>
                                <View>
                                  <View>
                                    <Text style={styles.numbertext}>
                                      25,000
                                    </Text>
                                  </View>
                                  <View>
                                    <Text style={styles.basictext}>
                                      Gross Salary
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                            <View
                              style={{
                                justifyContent: 'center',
                                marginLeft: hp(2),
                              }}>
                              <View style={{ flexDirection: 'row' }}>
                                <View style={{ marginVertical: hp(0.5) }}>
                                  {renderDot('#FEBB5B')}
                                </View>
                                <View>
                                  <View>
                                    <Text style={styles.numbertext}>
                                      25,000
                                    </Text>
                                  </View>
                                  <View>
                                    <Text style={styles.basictext}>
                                      net Salary
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                          {inheight == item.id && (
                            <View
                              style={{
                                height: hp(0.1),
                                backgroundColor: '#cdcdcd',
                                marginTop: hp(13.5),
                              }}></View>
                          )}
                          {data.map((item, i) => {
                            return (
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  marginVertical: hp(1),
                                }}>
                                <View style={{ justifyContent: 'center' }}>
                                  <Text style={styles.dob}>{item.text}</Text>
                                </View>
                                <View>
                                  <Text style={styles.dob}>{item.number}</Text>
                                </View>
                              </View>
                            );
                          })}
                        </Animated.View>
                      )}
                      {inheight !== item.id && (
                        <Animated.View
                          style={{
                            height: hp(12.8),
                            overflow: 'hidden',
                            paddingHorizontal: hp(2.5),
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              position: 'absolute',
                              top: 0,
                              left: hp(2.5),
                            }}>
                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: hp(1.5),
                              }}>
                              <GraphList />
                            </View>
                            <View
                              style={{
                                justifyContent: 'center',
                                marginHorizontal: hp(1.5),
                              }}>
                              <View style={{ flexDirection: 'row' }}>
                                <View style={{ marginVertical: hp(0.5) }}>
                                  {renderDot('#C1B7FD')}
                                </View>
                                <View>
                                  <View>
                                    <Text style={styles.numbertext}>
                                      25,000
                                    </Text>
                                  </View>
                                  <View>
                                    <Text style={styles.basictext}>
                                      Gross Salary
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                            <View
                              style={{
                                justifyContent: 'center',
                                marginLeft: hp(2),
                              }}>
                              <View style={{ flexDirection: 'row' }}>
                                <View style={{ marginVertical: hp(0.5) }}>
                                  {renderDot('#FEBB5B')}
                                </View>
                                <View>
                                  <View>
                                    <Text style={styles.numbertext}>
                                      25,000
                                    </Text>
                                  </View>
                                  <View>
                                    <Text style={styles.basictext}>
                                      net Salary
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              position: 'absolute',
                              top: hp(13.2),
                              left: hp(2.5),
                            }}>
                            <View style={{ justifyContent: 'center' }}>
                              <Text style={styles.dob}>fgd</Text>
                            </View>
                            <View>
                              <Text style={styles.dob}>fgd</Text>
                            </View>
                          </View>
                        </Animated.View>
                      )}
                    </TouchableOpacity> */}
                    <CmpTest />
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </>
      )}
    </View>
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
  container: {
    flex: 1,
    marginTop: hp(0),
  },
  pdf: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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
    borderRadius: hp(50),
    paddingHorizontal: hp(0.8),
    fontFamily: fontFamily.ceraMedium,
    fontSize: '0.55rem',
    fontWeight: '300',
    fontStyle: 'normal',
  },
  renderdot: {
    height: hp(3.7),
    width: wp(2.5),
    borderRadius: 1,
    backgroundColor: color,
    marginRight: 10,
  },
  salaryMainView: {
    height: hp(7),
    marginHorizontal: hp(2.5),
    borderRadius: hp(1),
    backgroundColor: '#E7E7E7',
    marginTop: hp(2),
  },
});

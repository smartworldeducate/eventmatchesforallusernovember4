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
  FlatList,
} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import React, {useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import LinearGradient from 'react-native-linear-gradient';
import fontFamily from '../Styles/fontFamily';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import FgraphList from './GraphList';
const CmpTest = () => {
  const hsData = useSelector(state => state.selectHistory);
  console.log("history data on comp screen",hsData?.user)
  const [expanded, setExpended] = useState(false);
  const [defalut, setDefalut] = useState(true);
  const [clinder, setClinder] = useState(null);
  const clinderHandler = item => {
    setClinder(item);
    setDefalut(false);
  };
  const onPress = ({item}) => {
    // console.log('onPress item', item);
    // setExpended(!expanded);
  };
  const years = [
    {id: 1, month: 'Jan'},
    {id: 2, month: 'Fab'},
    {id: 3, month: 'Mar'},
    {id: 4, month: 'Apr'},
    {id: 5, month: 'May'},
    {id: 6, month: 'Jun'},
    {id: 7, month: 'Jul'},
    {id: 8, month: 'Aug'},
    {id: 9, month: 'Sep'},
    {id: 10, month: 'Oct'},
    {id: 11, month: 'Nov'},
    {id: 12, month: 'Dec'},
  ];

  const renderDot = color => {
    return (
      <View
        style={{
          height: hp(3.5),
          width: wp(2.5),
          borderRadius: 1,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };

  const renderHistoryItem = ({item,index}) => {
    return (
      <View style={{marginTop: hp(1)}}>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: hp(2),
            marginHorizontal: hp(2.5),
            elevation: 4,
          }}>
          <Collapse isExpanded={expanded} onToggle={() => onPress(item)}>
            <CollapseHeader
              style={{
                height: hp(12),
                marginHorizontal: hp(1),
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{flex: 0.3, marginTop: hp(1)}}>
                <FgraphList item={item}/>
              </View>
              <View style={{flex: 0.3}}>
                <View style={{flexDirection: 'row', marginLeft: hp(1)}}>
                  <View style={{marginVertical: hp(0.5)}}>
                    {renderDot('#C1B7FD')}
                  </View>
                  <View>
                    <View>
                      <Text style={styles.numbertext}>
                        {item?.GROSSSAL}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.basictext}>Gross Salary</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{flex: 0.3}}>
                <View style={{flexDirection: 'row', marginLeft: hp(2)}}>
                  <View style={{marginVertical: hp(0.5)}}>
                    {renderDot('#FEBB5B')}
                  </View>
                  <View>
                    <View>
                      <Text style={styles.numbertext}>
                        {item?.NET_SAL}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.basictext}>net Salary</Text>
                    </View>
                  </View>
                </View>
              </View>
            </CollapseHeader>
            <CollapseBody style={{marginHorizontal: hp(2.5)}}>
              <View
                style={{
                  height: hp(5),
                  marginHorizontal: hp(1),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.testname}>PF Own</Text>
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.textnum}>{item?.PF_OWN}</Text>
                </View>
              </View>
              <View style={{height: 1, backgroundColor: '#DBDBDB'}}></View>

              <View
                style={{
                  height: hp(5),
                  marginHorizontal: hp(1),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.testname}>EOBI Own</Text>
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.textnum}>{item?.EOBI_COMP}</Text>
                </View>
              </View>
              <View style={{height: 1, backgroundColor: '#DBDBDB'}}></View>
              <View
                style={{
                  height: hp(5),
                  marginHorizontal: hp(1),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.testname}>Income Tax</Text>
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.textnum}>{item?.INCOME_TAX}</Text>
                </View>
              </View>
              <View style={{height: 1, backgroundColor: '#DBDBDB'}}></View>

              <View
                style={{
                  height: hp(5),
                  marginHorizontal: hp(1),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.testname}>
                    Absent Deduction (Absent days)
                  </Text>
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.textnum}>{item?.ABSENT_DED}</Text>
                </View>
              </View>
              <View style={{height: 1, backgroundColor: '#DBDBDB'}}></View>

              <View
                style={{
                  height: hp(5),
                  marginHorizontal: hp(1),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.testname}>Other Deduction</Text>
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.textnum}>{item?.OTH_DED}</Text>
                </View>
              </View>
              <View style={{height: 1, backgroundColor: '#DBDBDB'}}></View>

              <View
                style={{
                  height: hp(5),
                  marginHorizontal: hp(1),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.testname}>Total Deduction</Text>
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.textnum}>{item?.TOTAL_DED}</Text>
                </View>
              </View>
              <View style={{height: 1, backgroundColor: '#DBDBDB'}}></View>

              <View
                style={{
                  height: hp(5),
                  marginHorizontal: hp(1),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.testname}>Net Salary</Text>
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.textnum}>{item?.NET_SAL}</Text>
                </View>
              </View>
              <View style={{height: 1, backgroundColor: '#DBDBDB'}}></View>
            </CollapseBody>
          </Collapse>
        </View>
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    console.log('index', index);
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => clinderHandler(item.id)}
        // key={i}
        style={{}}>
        <View
          style={{
            height: hp(4),
            paddingHorizontal: hp(3),
            borderRadius: hp(20),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: index == 2 ? '#4D69DC' : ' ',
            marginHorizontal: hp(0.5),
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: index == 2 ? '#FFF' : 'gray',
                fontSize: hp(1.5),
              }}>
              {item.month}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItemGradient = ({item, index}) => {
    console.log('index', index);
    return (
      <View>
        {clinder == item.id && (
          <TouchableOpacity activeOpacity={0.8}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#1C37A5', '#4D69DC']}
              style={{
                height: hp(3.7),
                paddingHorizontal: hp(3),
                borderRadius: hp(20),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#4D69DC',
                marginHorizontal: hp(2),
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
                    paddingHorizontal: hp(0.5),
                  }}>
                  {item.month}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        )}
        {clinder !== item.id && (
          <TouchableOpacity onPress={() => clinderHandler(item.id)}>
            <View
              style={{
                height: hp(3.7),
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
                  {item.month}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      {defalut == true && (
        <View
          style={{height: hp(7), marginTop: hp(2), marginHorizontal: hp(2.5)}}>
          <FlatList
            data={years}
            renderItem={renderItem}
            horizontal={true}
            // inverted={true}
            keyExtractor={item => item.id}
          />
        </View>
      )}

      {defalut !== true && (
        <View
          style={{height: hp(7), marginTop: hp(2), marginHorizontal: hp(2.5)}}>
          <FlatList
            data={years}
            renderItem={renderItemGradient}
            horizontal={true}
            // inverted={true}
            keyExtractor={item => item.id}
          />
        </View>
      )}
      <View style={{flex: 1}}>
        <FlatList
          data={hsData?.user}
          renderItem={renderHistoryItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default CmpTest;

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

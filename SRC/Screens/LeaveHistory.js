import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet';
import fontFamily from '../Styles/fontFamily';
import MainHeader from '../Components/Headers/MainHeader';
import CmpHistory from '../Components/CmpHistory';
import colors from '../Styles/colors';
const LeaveHistory = props => {
  const [clinder, setClinder] = useState(null);
  const [defalut, setDefalut] = useState(true);
  const clinderHandler = item => {
    setClinder(item);
    setDefalut(false);
    console.log('my item  time out', item);
  };

  // const data = [
  //   {text: 'Late Arrival (Approved)', number: '23,June',title:'June 23',
  //   text: 'Sick Leave (Approved)', number: '5,June',title:'June 22',
  //   text: 'Casual Leave (Approved)', number: '5,June',title:'June 21',
  //   text: 'Attendance Not Marked', number: '5,June',title:'June 20',
  //   text: 'Annual (Leave(Approved))', number: '5,June',title:'June 19',
  //   text: 'Hajj Leave (Approved)', number: '5,June',title:'June 18',}
  // ];
  const data = [
    {
      id: 283831,
      text1: 'Late Arrival (Approved)',
      number1: '23,June',
      title1: 'June 23',
      text2: 'Sick Leave (Approved)',
      number2: '5,June',
      title2: 'June 22',
      text3: 'Casual Leave (Approved)',
      number3: '5,June',
      title3: 'June 21',
      text4: 'Attendance Not Marked',
      number4: '5,June',
      title4: 'June 20',
      text5: 'Annual (Leave(Approved))',
      number5: '5,June',
      title5: 'June 19',
      text6: 'Hajj Leave (Approved)',
      number6: '5,June',
      title6: 'June 18',
    },
    {
      id: 283831,
      text1: 'Late Arrival (Approved)',
      number1: '23,June',
      title1: 'June 22',
      text2: 'Sick Leave (Approved)',
      number2: '5,June',
      title2: 'June 22',
      text3: 'Casual Leave (Approved)',
      number3: '5,June',
      title3: 'June 21',
      text4: 'Attendance Not Marked',
      number4: '5,June',
      title4: 'June 20',
      text5: 'Annual (Leave(Approved))',
      number5: '5,June',
      title5: 'June 19',
      text6: 'Hajj Leave (Approved)',
      number6: '5,June',
      title6: 'June 18',
    },
    {
      id: 283831,
      text1: 'Late Arrival (Approved)',
      number1: '23,June',
      title1: 'June 21',
      text2: 'Sick Leave (Approved)',
      number2: '5,June',
      title2: 'June 22',
      text3: 'Casual Leave (Approved)',
      number3: '5,June',
      title3: 'June 21',
      text4: 'Attendance Not Marked',
      number4: '5,June',
      title4: 'June 20',
      text5: 'Annual (Leave(Approved))',
      number5: '5,June',
      title5: 'June 19',
      text6: 'Hajj Leave (Approved)',
      number6: '5,June',
      title6: 'June 18',
    },
    {
      id: 283831,
      text1: 'Late Arrival (Approved)',
      number1: '23,June',
      title1: 'June 20',
      text2: 'Sick Leave (Approved)',
      number2: '5,June',
      title2: 'June 22',
      text3: 'Casual Leave (Approved)',
      number3: '5,June',
      title3: 'June 21',
      text4: 'Attendance Not Marked',
      number4: '5,June',
      title4: 'June 20',
      text5: 'Annual (Leave(Approved))',
      number5: '5,June',
      title5: 'June 19',
      text6: 'Hajj Leave (Approved)',
      number6: '5,June',
      title6: 'June 18',
    },
    {
      id: 283831,
      text1: 'Late Arrival (Approved)',
      number1: '23,June',
      title1: 'June 19',
      text2: 'Sick Leave (Approved)',
      number2: '5,June',
      title2: 'June 22',
      text3: 'Casual Leave (Approved)',
      number3: '5,June',
      title3: 'June 21',
      text4: 'Attendance Not Marked',
      number4: '5,June',
      title4: 'June 20',
      text5: 'Annual (Leave(Approved))',
      number5: '5,June',
      title5: 'June 19',
      text6: 'Hajj Leave (Approved)',
      number6: '5,June',
      title6: 'June 18',
    },
  ];

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
    <View style={{flex: 1, backgroundColor: colors.appBackGroundColor}}>
      <View>
        <MainHeader
          text={'Leave History'}
          iconName={'arrow-left'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
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
        {data.map((item, i) => {
          return <CmpHistory item={item} key={i} />;
        })}
      </View>
    </View>
  );
};

export default LeaveHistory;

const styles = EStyleSheet.create({
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
    fontSize: '0.6rem',
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

  salaryMainView: {
    height: hp(7),
    marginHorizontal: hp(2.5),
    borderRadius: hp(1),
    backgroundColor: '#E7E7E7',
    marginTop: hp(2),
  },
});

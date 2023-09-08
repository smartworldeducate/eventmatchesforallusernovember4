import React, {useState} from 'react';
import {View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet';
import fontFamily from '../Styles/fontFamily';
import MainHeader from '../Components/Headers/MainHeader';
import Icon from 'react-native-fontawesome-pro';
import CmpHistory from '../Components/CmpHistory';

const LeaveHistory = props => {
  const [expanded, setExpended] = useState(false);
  const [clinder, setClinder] = useState(null);
  const [defalut, setDefalut] = useState(true);
  const clinderHandler = item => {
    setClinder(item);
    setDefalut(false);
    console.log('my item  time out', item);
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
  const onPress = ({}) => {
    setExpended(!expanded);
  };
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
  const data = [
    {text: 'Sick', number: '5,000'},
    {text: 'Casual', number: '250'},
    {text: 'Income Tax', number: '5,000'},
    {text: 'Annual(Leave)', number: '0(0)'},
    {text: 'Hajj', number: '840'},
    // {text: 'Total Deduction', number: '1190'},
    // {text: 'Net Salary', number: '88090'},
  ];
  return (
    <View style={{flex: 1}}>
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
      <View style={{marginTop: hp(1)}}>
        {[1, 2, 3, 4, 5, 6].map((item, i) => {
          return <CmpHistory />;
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

  salaryMainView: {
    height: hp(7),
    marginHorizontal: hp(2.5),
    borderRadius: hp(1),
    backgroundColor: '#E7E7E7',
    marginTop: hp(2),
  },
});

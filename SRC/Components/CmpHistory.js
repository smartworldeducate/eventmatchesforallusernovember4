import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import GraphList from './GraphList';
import fontFamily from '../Styles/fontFamily';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-fontawesome-pro';
export default CmpHistory = () => {
  const [expanded, setExpended] = useState(false);
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
    {text: 'Late Arrival (Approved)', number: '23,June'},
    {text: 'Sick Leave (Approved)', number: '5,June'},
    {text: 'Casual Leave (Approved)', number: '5,June'},
    {text: 'Attendance Not Marked', number: '5,June'},
    {text: 'Annual (Leave(Approved))', number: '5,June'},
    {text: 'Hajj Leave (Approved)', number: '5,June'},
  ];
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
        <Collapse isExpanded={expanded} onToggle={onPress}>
          <CollapseHeader
            style={{
              height: hp(7),
              marginHorizontal: hp(1),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flex: 0.5, justifyContent: 'center'}}>
              <Text style={styles.dobtitle}>June 2023</Text>
            </View>

            <View
              style={{
                flex: 0.5,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Icon
                type="light"
                name="arrow-right"
                size={hp(2)}
                color="#cdcdcd"
                Size={hp(2)}
              />
            </View>
          </CollapseHeader>
          <CollapseBody style={{marginHorizontal: hp(2.5)}}>
            {data.map((item, i) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: hp(1),
                  }}>
                  <View style={{justifyContent: 'center'}}>
                    <Text style={styles.dobdata}>{item.text}</Text>
                  </View>
                  <View>
                    <Text style={styles.dobdata}>{item.number}</Text>
                  </View>
                </View>
              );
            })}
          </CollapseBody>
        </Collapse>
      </View>
    </View>
  );
};

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
  dobtitle: {
    color: '#363636',
    fontFamily: fontFamily.ceraBold,
    fontSize: '0.6rem',
    fontWeight: '700',
    fontStyle: 'normal',
  },
  dob: {
    color: '#363636',
    fontFamily: fontFamily.ceraMedium,
    fontSize: '0.55rem',
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

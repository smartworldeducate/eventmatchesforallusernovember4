import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
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
export default CmpTest = () => {
  const [expanded, setExpended] = useState(false);
  const onPress = ({ }) => {
    setExpended(!expanded);
  };
  const renderDot = color => {
    return <View style={{
      height: hp(3.5),
      width: wp(2.5),
      borderRadius: 1,
      backgroundColor: color,
      marginRight: 10
    }} />;
  };
  const data = [
    { text: 'PF Own', number: '5,000' },
    { text: 'EOBI Own', number: '250' },
    { text: 'Income Tax', number: '5,000' },
    { text: 'Absent Deduction (Absent days)', number: '0(0)' },
    { text: 'Other Deduction', number: '840' },
    { text: 'Total Deduction', number: '1190' },
    { text: 'Net Salary', number: '88090' },
  ];
  return (
    <View style={{ marginTop: hp(1) }}>
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
              height: hp(12),
              marginHorizontal: hp(1),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{ flex: 0.3, marginTop: hp(1), }}>
              <GraphList />
            </View>
            <View style={{ flex: 0.3 }}>
              <View style={{ flexDirection: 'row', marginLeft: hp(1) }}>
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
            <View style={{ flex: 0.3 }}>
              <View style={{ flexDirection: 'row', marginLeft: hp(2) }}>
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
          </CollapseHeader>
          <CollapseBody style={{ marginHorizontal: hp(2.5) }}>
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
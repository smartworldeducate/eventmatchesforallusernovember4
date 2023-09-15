import React, {useState} from 'react';
import {View, Text, Button, Image} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontFamily from '../Styles/fontFamily';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-fontawesome-pro';
export default CmpHistory = ({item}) => {
  const [expanded, setExpended] = useState(false);
  const onPress = ({}) => {
    setExpended(!expanded);
  };

  return (
    <View style={{marginTop: hp(2)}}>
      <View
        style={{
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
            }}>
            <View style={{}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View
                  style={{
                    justifyContent: 'center',
                    marginVertical: hp(2.3),
                  }}>
                  <Text style={styles.name}>{item.title1}</Text>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    marginVertical: hp(2.3),
                  }}>
                  <Icon
                    type="light"
                    name="arrow-right"
                    size={hp(2.5)}
                    color="#cdcdcd"
                  />
                </View>
              </View>
            </View>
          </CollapseHeader>
          <CollapseBody
            style={{marginHorizontal: hp(1.5), paddingVertical: hp(2)}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: hp(1),
              }}>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.dob}>{item.text1}</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.dobdata}>{item.number1}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: hp(1),
                marginTop: hp(1),
              }}>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.dob}>{item.text2}</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.dobdata}>{item.number2}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: hp(1),
                paddingVertical: hp(1),
              }}>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.dob}>{item.text3}</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.dobdata}>{item.number3}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: hp(1),
                paddingVertical: hp(1),
              }}>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.dob}>{item.text4}</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.dobdata}>{item.number4}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: hp(1),
                paddingVertical: hp(1),
              }}>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.dob}>{item.text5}</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.dobdata}>{item.number5}</Text>
              </View>
            </View>
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
    fontSize: '0.6rem',
    fontWeight: '300',
    fontStyle: 'normal',
  },
  name: {
    color: '#363636',
    fontFamily: fontFamily.ceraBold,
    fontSize: '0.7rem',
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

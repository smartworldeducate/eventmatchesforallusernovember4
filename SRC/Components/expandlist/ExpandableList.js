import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-fontawesome-pro';
// import Gte from 'react-native-vector-icons/AntDesign';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontFamily from '../../Styles/fontFamily';
const Accordion = ({IconName, textName,fatherName,religin,date,cnic,gender}) => {
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [toggleColor,setToggleColor]=useState(false)
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
    outputRange: [48, 200], // Change this value to control the expanded height
  });

  return (
    <>
      <TouchableOpacity activeOpacity={0.8} onPress={toggleExpansion} style={{marginBottom: hp(2)}}>
     
        <Animated.View
          style={{
            height,
            width: wp(90),
            backgroundColor:'#FFF',
            overflow: 'hidden',
            borderRadius: hp(1),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection:'row',paddingVertical:hp(1.5)}}>
              <View style={{justifyContent:'center',alignItems:'center',paddingLeft: hp(2)}}>
                <Icon
                  type="light"
                  name={IconName}
                  color="#979797"
                  style={styles.iconSty}
                />
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center',paddingHorizontal:hp(1.5)}}>
                <Text style={styles.smalltext}>{textName}</Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center',marginRight:hp(1.5)}}>
              <Icon
                type="light"
                name="chevron-right"
                size={hp(2)}
                color="gray"
                Size={hp(2)}
              />
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:hp(2.3),paddingVertical:hp(0.5)}}>
            <View>
              <Text style={styles.expandtext}>Father Name</Text>
            </View>
            <View>
              <Text style={styles.expandtext1}>{fatherName}</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:hp(2.3),paddingVertical:hp(0.5)}}>
            <View>
              <Text style={styles.expandtext}>Gender</Text>
            </View>
            <View>
              <Text style={styles.expandtext1}>{gender}</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:hp(2.3),paddingVertical:hp(0.5)}}>
            <View>
              <Text style={styles.expandtext}>Religin</Text>
            </View>
            <View>
              <Text style={styles.expandtext1}>{religin}</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:hp(2.3),paddingVertical:hp(0.5)}}>
            <View>
              <Text style={styles.expandtext}>Date of Birth</Text>
            </View>
            <View>
              <Text style={styles.expandtext1}>{date}</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:hp(2.3),paddingVertical:hp(0.5)}}>
            <View>
              <Text style={styles.expandtext}>CNIC</Text>
            </View>
            <View>
              <Text style={styles.expandtext1}>{cnic}</Text>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </>
  );
};

export default function ExpandableList({IconName, textName,fatherName,religin,date,cnic,gender}) {
  return (
    <View style={{flex: 1}}>
      <Accordion gender={gender} IconName={IconName} textName={textName} fatherName={fatherName} religin={religin} date={date} cnic={cnic}/>
    </View>
  );
}

const styles = EStyleSheet.create({
  smalltext: {
    fontWeight: '500',
    fontSize: '0.7rem',
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
    fontFamily: fontFamily.ceraBlack,
    fontSize: hp(2),
    color: '#A6ACAF',
    fontWeight: 100,
  },
  expandtext: {
    fontWeight: '500',
    fontSize: '0.7rem',
    fontFamily: fontFamily.ceraMedium,
    color: '#363636',
    fontStyle: 'normal',
  },
  expandtext1: {
    fontWeight: '100',
    fontSize: '0.6rem',
    fontFamily: fontFamily.ceraMedium,
    color: '#363636',
    fontStyle: 'normal',
  },
});

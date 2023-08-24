import {View, Text} from 'react-native';
import React from 'react';
import {PieChart} from 'react-native-gifted-charts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet';
import fontFamily from '../Styles/fontFamily';
const GraphList = () => {
  const pieData = [
    {value: 25, color: '#FFB243', gradientCenterColor: '#FFB243'},
    {value: 25, color: '#D4E9FF', gradientCenterColor: '#8F80F3'},
    {value: 25, color: '#76FFBD', gradientCenterColor: '#FF7F97'},
    {
      value: 25,
      color: '#C1B7FD',
      gradientCenterColor: '#C1B7FD',
      focused: true,
    },
  ];

  

  return (
    
      <View style={{justifyContent: 'center'}}>
        <View style={{justifyContent:'center', alignItems: 'center'}}>
          <PieChart
            data={pieData}
            donut
            showGradient
            sectionAutoFocus
            radius={38}
            innerRadius={25}
            innerCircleColor={'#fff'}
            centerLabelComponent={() => {
              return (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={styles.tousandlakh}>
                    25,000
                  </Text>
                 
                </View>
              );
            }}
          />
        </View>
      </View>

     
     
   
  );
};

export default GraphList;

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
  iconSty:{
    fontSize:hp(2.5),
    color:"#A6ACAF",
    fontWeight:100
  },
  headertext:{
    fontSize: '0.75rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    color: '#363636',
    fontWeight: '500',
    
  },
  tousandlakh:{
    fontSize: '0.5rem',
    color: '#646464',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBold,
    fontStyle: 'normal',
  },
  gross:{
    fontSize: '0.4rem',
    color: '#979797',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    textTransform:'uppercase'
  },
  numbertext:{
  color: '#353535',
  fontSize: '0.7rem',
  fontWeight: '700',
  fontFamily: fontFamily.ceraBold,
  fontStyle: 'normal',
  textTransform:'uppercase'
},
basictext:{color: '#979797',
  fontSize: '0.5rem',
  fontWeight: '500',
  fontFamily: fontFamily.ceraMedium,
  fontStyle: 'normal',
  textTransform:'uppercase'

}
});

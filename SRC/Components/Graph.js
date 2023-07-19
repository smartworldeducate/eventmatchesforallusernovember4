import {View, Text} from 'react-native';
import React from 'react';
import {PieChart} from 'react-native-gifted-charts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Graph = () => {
  const pieData = [
    {
      value: 47,
      color: '#009FFF',
      gradientCenterColor: '#006DFF',
      focused: true,
    },
    {value: 40, color: '#93FCF8', gradientCenterColor: '#3BE9DE'},
    {value: 16, color: '#BDB2FA', gradientCenterColor: '#8F80F3'},
    {value: 3, color: '#FFA5BA', gradientCenterColor: '#FF7F97'},
  ];

  const renderLegendComponent = () => {
    return (
      <>
        <View>
          {renderDot('#006DFF')}
          <Text style={{color: 'white'}}>Excellent: 47%</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
          {renderDot('#006DFF')}
          <Text style={{color: 'white'}}>Okay: 16%</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 120,
              marginRight: 20,
            }}>
            {renderDot('#3BE9DE')}
            <Text style={{color: 'white'}}>Good: 40%</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
            {renderDot('#FF7F97')}
            <Text style={{color: 'white'}}>Poor: 3%</Text>
          </View>
        </View>
      </>
    );
  };
  const renderDot = color => {
    return (
      <View
        style={{
          height:hp(5),
          width:wp(5),
          borderRadius: 1,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };

  return (
    <View
      style={{
        width: wp(90),
        height: hp(40),
        marginHorizontal: hp(2.5),
        borderRadius: hp(2),
        // backgroundColor: '#34448B',
      }}>
      <View
        style={{ }}>
        <View style={{padding: 20, alignItems: 'center'}}>
          <PieChart
            data={pieData}
            donut
            showGradient
            sectionAutoFocus
            radius={90}
            innerRadius={60}
            innerCircleColor={'#232B5D'}
            centerLabelComponent={() => {
              return (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
                    47%
                  </Text>
                  <Text style={{fontSize: 14, color: 'white'}}>Excellent</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
      <View
        style={{
         height: hp(15),
          width: wp(90),
          // backgroundColor: 'blue',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: wp(90),
            justifyContent: 'space-between',
          }}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginVertical:hp(0.5)}}>{renderDot('#006DFF')}</View>
              <View>
                <Text style={{color: 'white'}}>Excellent: 47%</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginVertical:hp(0.5)}}>{renderDot('#006DFF')}</View>
              <View>
                <Text style={{color: 'white'}}>Excellent: 47%</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: wp(90),
            justifyContent: 'space-between',
          }}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginVertical:hp(0.5)}}>{renderDot('#006DFF')}</View>
              <View>
                <Text style={{color: 'white'}}>Excellent: 47%</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginVertical:hp(0.5)}}>{renderDot('#006DFF')}</View>
              <View>
               <View><Text style={{color: 'white'}}>Excellent: 47%</Text></View>
               <View>
                <Text style={{color: 'white'}}>fdgfdhdf</Text>
               </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      
    </View>
  );
};

export default Graph;

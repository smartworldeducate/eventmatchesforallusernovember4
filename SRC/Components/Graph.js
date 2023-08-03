import {View, Text} from 'react-native';
import React from 'react';
import {PieChart} from 'react-native-gifted-charts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Graph = () => {
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

  const renderDot = color => {
    return (
      <View
        style={{
          height: hp(5),
          width: wp(3.5),
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
        width: wp(80),
        marginHorizontal: hp(5),
      }}>
      <View style={{justifyContent: 'center'}}>
        <View style={{padding: 20, alignItems: 'center'}}>
          <PieChart
            data={pieData}
            donut
            showGradient
            sectionAutoFocus
            radius={90}
            innerRadius={60}
            innerCircleColor={'#fff'}
            centerLabelComponent={() => {
              return (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 22,
                      color: '#232B5D',
                      fontWeight: 'bold',
                    }}>
                    100,000
                  </Text>
                  <Text style={{fontSize: 14, color: '#232B5D'}}>
                    gross salary
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: hp(-3),
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginVertical: hp(0.5)}}>{renderDot('#C1B7FD')}</View>
          <View>
            <View>
              <Text style={{color: '#353535'}}>25,000</Text>
            </View>
            <View>
              <Text style={{color: '#979797'}}>Basic Salary</Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{marginVertical: hp(0.5)}}>{renderDot('#D4E9FF')}</View>
          <View>
            <View>
              <Text style={{color: '#353535'}}>25,000</Text>
            </View>
            <View>
              <Text style={{color: '#979797'}}>House Rent</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginVertical: hp(0.5)}}>{renderDot('#FEBB5B')}</View>
          <View>
            <View>
              <Text style={{color: '#353535'}}>25,000</Text>
            </View>
            <View>
              <Text style={{color: '#979797'}}>Allowances</Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{marginVertical: hp(0.5)}}>{renderDot('#76FFBD')}</View>
          <View>
            <View>
              <Text style={{color: '#353535'}}>25,000</Text>
            </View>
            <View>
              <Text style={{color: '#979797'}}>Utilities       </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Graph;

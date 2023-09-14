import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {BarChart} from 'react-native-gifted-charts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const GraphChart = () => {
  const barData = [
    {value: 230, label: '2019', frontColor: '#4ABFF4'},
    {value: 180, label: '2020', frontColor: '#79C3DB'},
    {value: 195, label: '2021', frontColor: '#28B2B3'},
    {value: 250, label: '2022', frontColor: '#4ADDBA'},
    {value: 320, label: '2023', frontColor: '#91E3E3'},
  ];

  return (
    <>
      <View style={{}}>
        <BarChart
          showFractionalValue
          showYAxisIndices
          noOfSections={4}
          hideYAxisText
          hideAxesAndRules={true}
          isThreeD
          initialSpacing={hp(4.5)}
          barMarginBottom={hp(1)}
          showGradient
          gradientColor={'#1C37A4'}
          yAxisThickness={0}
          xAxisThickness={0}
          frontColor={'transparent'}
          sideColor={'#1C37A4'}
          topColor={'#1C37A4'}
          maxValue={400}
          data={barData}
          isAnimated
          xAxisLabelTextStyle={{color: '#cdcdcd', textAlign: 'center'}}
          renderTooltip={(item, index) => {
            return (
              <View
                style={{
                  backgroundColor: '#7BAAEF',
                  borderRadius: 4,
                  color: '#fff',
                }}>
                <Text>{item.value}</Text>
              </View>
            );
          }}
        />
      </View>
    </>
  );
};

export default GraphChart;

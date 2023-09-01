import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
const TestScreen = () => {
  return (
    <View style={{flex:1}}>
     <LottieView  style={{
                width: 400,
                height: 800,
                backgroundColor: '#eee',
              }} source={require('../assets/animation_lm0h8lv3.json')} autoPlay />
    </View>
  )
}

export default TestScreen
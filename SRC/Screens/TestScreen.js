import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CalendarStrip from 'react-native-calendar-strip';
const TestScreen = () => {
  const dateWhiteList=[

  ]
  return (
    <View>
    <CalendarStrip
      calendarAnimation={{ type: 'sequence', duration: 30 }}
      daySelectionAnimation={{ type: 'background', duration: 300, highlightColor: 'blue',padding:50 }}
      style={{ height: 100, paddingTop: 30, paddingBottom: 10 }}
      calendarHeaderStyle={{ color: 'white',width:400 }}
      calendarColor={'#7743CE'}
      dateNumberStyle={{ color: 'white' }}
      dateNameStyle={{ color: 'white' }}
      iconLeft={false}
      iconRight={false}
      disabledDateNameStyle={false}
      showMonth={true}
      // iconContainer={{ flex: 0.1 }}
    />
  </View>
  )
}

export default TestScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
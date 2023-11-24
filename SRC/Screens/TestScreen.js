import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  UIManager,
} from 'react-native';
import {AccordionList} from 'react-native-accordion-list-view';

const TestScreen = () => {
  const [active,setActive]=useState(false)
  const data = [
    {
      id: 0,
      title: 'Lorem Ipsum is simply dummy',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 1,
      title: 'Lorem Ipsum is simply dummy',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    
  ];
  
  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  },[active]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AccordionList
          data={data}
          customTitle={item => <Text style={{color:'red'}}>{item.title}</Text>}
          customBody={item => <Text style={{color:'#000'}}>{item.body}</Text>}
          animationDuration={400}
          expandMultiple={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    height: '100%',
    backgroundColor: '#e7e7e7',
    elevation:1
  },
});

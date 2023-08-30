import {View, Text,StyleSheet,Animated,TouchableOpacity} from 'react-native';
import React, {useState,useRef} from 'react';
import {ListItem} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-fontawesome-pro';
const Accordion = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);
  const contentHeight = useRef(new Animated.Value(0)).current;

  const toggleAccordion = () => {
    const initialValue = expanded ? contentHeight : 0;
    const finalValue = expanded ? 0 : contentHeight;

    setExpanded(!expanded);
    
    Animated.spring(contentHeight, {
      toValue: finalValue,
      tension: 30,
      friction: 7,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={{marginTop:100}}>
      <TouchableOpacity onPress={toggleAccordion}>
        <Text>{title}</Text>
      </TouchableOpacity>
      <Animated.View style={{ height: contentHeight }}>
        <Text>{content}</Text>
      </Animated.View>
    </View>
  );
};


const TestScreen = props => {
return (
    <View style={styles.container}>
      <Accordion
        title="Accordion Title 1"
        content="This is the content for Accordion 1."
      />
      <Accordion
        title="Accordion Title 2"
        content="This is the content for Accordion 2."
      />
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

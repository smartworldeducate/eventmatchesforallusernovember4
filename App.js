import React from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import Routes from './Routes';
import EStyleSheet from 'react-native-extended-stylesheet';
const { width } = Dimensions.get('window');
const rem = width > 767 ? 16 : 20;
import { configureFontAwesomePro } from "react-native-fontawesome-pro";
configureFontAwesomePro();
// calc styles
EStyleSheet.build({
  $rem: rem,
});
const App = () => {

  return (
   
    <Routes/>
  
  );
};

export default App;
const styles = StyleSheet.create({});

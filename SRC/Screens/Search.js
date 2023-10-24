import {
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import fontFamily from '../Styles/fontFamily';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchEmp from '../Components/SearchEmp';
const Search = props => {
  return (
      <View style={{flex: 1, marginTop: hp(2)}}>
        <SearchEmp/>
      </View>
  );
};

export default Search;


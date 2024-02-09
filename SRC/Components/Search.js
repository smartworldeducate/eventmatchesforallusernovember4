import {View, Text, TouchableOpacity, TextInput,KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-fontawesome-pro';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet';
import fontFamily from '../Styles/fontFamily';
import colors from '../Styles/colors';

const Search = () => {
  const [searchData, setSearchData] = useState('');
  return (
    <View
      style={{flex: 1, marginHorizontal: hp(2.5), justifyContent: 'center'}}>
      <TouchableOpacity activeOpacity={0.8} style={styles.homeSearch}>
        <TextInput
          multiline={true}
          style={{marginHorizontal: hp(1.5), color: '#000'}}
          value={searchData}
          onChangeText={text => setSearchData(text)}
          returnKeyType={'done'}
          iconName={'user'}
          placeholder={'Search Employee'}
          placeholderColor={'gray'}
          iconColor={colors.loginIconColor}
          placeholderTextColor="#000"
          placeholderStyle={styles.plaseholderStyle}></TextInput>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.searchicon}
          onPress={() => {}}>
          <Icon
            type="light"
            name="magnifying-glass"
            size={hp(3)}
            color="#292D32"
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = EStyleSheet.create({
  homeSearch: {
    flexDirection: 'row',
    backgroundColor: '#F4F6F9',
    justifyContent: 'space-between',
    borderRadius: hp(5),
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },

  homesearchView: {
    flexDirection: 'row',
    backgroundColor: 'green',
  },

  searchicon: {marginTop: hp(1.5), marginRight: hp(2)},
  placeholderStyle: {
    fontSize: hp(3),
    fontWeight: '300',
    fontFamily: fontFamily.ceraLight,
    fontStyle: 'normal',
  },
});

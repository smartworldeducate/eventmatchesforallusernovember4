import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import Check from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import React, {useCallback, useEffect, useState} from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MainHeader from '../Components/Headers/MainHeader';

const Index = props => {
  const [animodal, setAnimodal] = useState(false);
  const [animation, setAnimation] = useState(true);
  useEffect(() => {
    setAnimodal(true);
    setInterval(() => {
      setAnimodal(false);
    }, 4000);
  }, []);
  return (
    <>
     <View>
        <MainHeader
          text={'Index'}
          iconName={'arrow-left'}
          onpressBtn={() => props.navigation.goBack()}
          yearText={'2023'}
        />
      </View>
      {animation && (
        <View>
          <Modal isVisible={animodal}>
            <View
              style={{
                width: wp(30),
                height: hp(15),
                backgroundColor: '#EAFAF1',
                borderRadius: hp(2),
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: hp(15),
              }}>
              <View style={{}}>
                <ActivityIndicator animating={animation} size={'large'} />
              </View>
            </View>
          </Modal>
        </View>
      )}

      <WebView
        source={{
          uri: 'https://index.beaconhouse.net/',
        }}
        style={{marginTop: 20}}
      />
    </>
  );
};

export default Index;

import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import MainHeader from '../Components/Headers/MainHeader';
const Scanner = (props) => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        scan: true,
        ScanResult: false,
        result: '',
      });
      const {scan, ScanResult, result} = state;
    const scanner = useRef(null);
    const onSuccess = async e => {
      const check = e.data.substring(0, 4);
      setState({
        result: e,
        scan: false,
        ScanResult: true,
      });
      if (check === 'http') {
        Linking.openURL(e.data).catch(err =>
          console.error('An error occured', err),
        );
      } else {
        // await dispatch(
        //   handleScaneer({
        //     tag_id: e.data,
        //     employeeId: localData?.EMPLOYEE_ID,
        //   }),
        // );
  
        setState({
          result: e.data,
          scan: false,
          ScanResult: true,
        });
        // const catData = await dispatch(
        //   getSingleTag({employee_id: localData?.EMPLOYEE_ID}),
        // );
        // await setTagData(catData?.payload?.data);
        // setVisible(false);
        console.log('scan data', e.data);
        // setModalState(true);
      }
    };
  
    const activeQR = e => {
      setState({
        scan: true,
      });
    };
  
    const handleQrcode = () => {
      // setShow(true)
      setVisible(true);
      activeQR('active qr');
    };
  
    const handleReset = () => {
      setState({scan: false});
      setVisible(false);
    };
  return (
    <View style={{flex:1}}>
      <View style={{flex:0.1}}>
     <MainHeader text={'Scanner'} onpressBtn={() => props.navigation.goBack()}/>
     </View>
      <View style={{flex:0.9}}>
      {scan && (
          <QRCodeScanner
            cameraStyl={{height: hp(120)}}
            reactivate={true}
            showMarker={true}
            ref={scanner}
            onRead={onSuccess}
            bottomContent={
              <View
                style={{
                  paddingTop: hp(8),
                  flexDirection: 'row',
                  marginTop: hp(8),
                }}></View>
            }
          />
        )}
      </View>
    </View>
  )
}

export default Scanner
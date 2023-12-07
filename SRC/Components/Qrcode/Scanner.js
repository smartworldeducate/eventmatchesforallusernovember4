import React, {useEffect, useState, useRef, useCallback} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Modal from 'react-native-modal';
import {Toast} from 'galio-framework';
import {BottomSheet} from '@rneui/themed';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../Styles/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
const HomeScreen = props => {
  const dispatch = useDispatch();
  const [localData, setLocalData] = useState(null);
  const [tagData, setTagData] = useState([]);
  const [animodal, setAnimodal] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [animation, setAnimation] = useState(true);
  const [isShow, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState({
    scan: false,
    ScanResult: false,
    result: '',
  });
  const {scan, ScanResult, result} = state;
  const userData = useSelector(state => state.userLogin);
  async function getData(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const parsedData = JSON.parse(value);
        setLocalData(parsedData);
       
      } else {
        console.log('No data found for key:', key);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      onRefresh();
      setIndexState(false);
      setTagState(false);
      setProfileState(false);
    }, []),
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData('loginData');
    setData(userData);
    setRefreshing(false);
  }, []);

  useEffect(() => {
    getData('loginData');
    setData(userData);
    // getcatHandle();
  }, []);

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
      await dispatch(
        handleScaneer({
          tag_id: e.data,
          employeeId: localData?.EMPLOYEE_ID,
        }),
      );

      setState({
        result: e.data,
        scan: false,
        ScanResult: true,
      });
      const catData = await dispatch(
        getSingleTag({employee_id: localData?.EMPLOYEE_ID}),
      );
      await setTagData(catData?.payload?.data);
      setVisible(false);
      // console.log('scan data', e.data);
      setModalState(true);
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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          Platform.OS === 'android'
            ? colors.appBackGroundColor
            : colors.appBackGroundColor,
      }}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#1C37A5', '#4D69DC']}
        style={{height: hp('5')}}>
        <StatusBar translucent backgroundColor="transparent" />
      </LinearGradient>
      <View>
        <HeaderTop
          onPressIcon={() => navigation.openDrawer()}
          iconName={'arrowleft'}
          // text={'Change Password'}
        />
      </View>
      <Toast isShow={isShow} positionIndicator="top" style={styles.tost}>
        <Text style={{color: '#fff'}}>please enter valid Qrcode</Text>
      </Toast>

      {modalState && (
        <View>
          <Modal isVisible={modalState}>
            {tagData &&
              tagData?.map((item, i) => {
                return (
                  <View style={styles.modalstateView} key={i}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View></View>
                      <TouchableOpacity
                        onPress={() => setModalState(false)}
                        style={styles.tgDataView}>
                        <Text style={{color: '#fff'}}>X</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'center', marginTop: hp(2)}}>
                      <Text style={styles.tgdsuccess}>
                        Tag Scan successfully
                      </Text>
                    </View>
                    <View style={{marginLeft: hp(5), marginTop: hp(1)}}>
                      <Text style={styles.modalText}>
                        Tag ID : {item?.tag_id}
                      </Text>
                      <Text style={styles.modalText}>
                        Employee ID : {item?.employee_id}
                      </Text>
                      <Text style={styles.modalText}>
                        IN TIME : {item?.scan_time}
                      </Text>
                      <Text style={styles.modalText}>
                        OUT TIME : {item?.scan_time2}
                      </Text>
                    </View>
                  </View>
                );
              })}
          </Modal>
        </View>
      )}

      {animation && (
        <View>
          <Modal isVisible={animodal}>
            <View style={styles.actiindicator}>
              <View style={{}}>
                <ActivityIndicator animating={animation} size={'large'} />
              </View>
            </View>
          </Modal>
        </View>
      )}
      <BottomSheet
        isVisible={visible}
        style={{
          width: wp(100),
          height: hp(100),
          backgroundColor: '#fff',
          flex: 1,
        }}>
        <View
          style={{
            width: wp(100),
            position: 'relative',
            zIndex: 1,
            marginBottom: hp(20),
          }}>
          <TouchableOpacity
            onPress={handleReset}
            style={{
              width: wp(10),
              height: hp(5),
              // borderRadius: hp(50),
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 20,
              left: hp(45),
            }}>
            <Text style={{color: 'gray', fontSize: hp(2)}}>X</Text>
          </TouchableOpacity>
        </View>

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
      </BottomSheet>

    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  scanView: {
    height: hp('6'),
    alignItems: 'center',
    width: wp(12),
    borderWidth: hp(0.5),
    borderColor: 'gray',
    borderRadius: hp(50),
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  tgdsuccess: {
    color: '#186A3B',
    alignContent: 'center',
    paddingLeft: hp(2),
    fontSize: hp(3),
  },
  tgDataView: {
    width: wp(8),
    height: hp(4),
    backgroundColor: 'red',
    borderRadius: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(-2),
    marginRight: hp(-2),
  },
  modalstateView: {
    width: wp(80),
    height: hp(20),
    backgroundColor: '#cdcdcd',
    marginHorizontal: hp(2.3),
    borderRadius: hp(2),
  },
  modalText: {color: '#363636', paddingLeft: hp(2)},
  textInputView: {
    justifyContent: 'center',
    backgroundColor: colors.whiteColor,
    alignItems: 'center',
    flexDirection: 'row',
    height: hp('7'),
    borderRadius: wp('10'),
    borderColor: colors.grey,
    borderWidth: wp('0.1'),
    marginBottom: hp('2'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: wp('10'),
    shadowRadius: wp('10'),
    elevation: 10,
  },
 
  
});

export default HomeScreen;

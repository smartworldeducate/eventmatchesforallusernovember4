import React, {useState} from 'react';
import {View, Text, Button, Image} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import GraphList from './GraphList';
import fontFamily from '../Styles/fontFamily';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useSelector } from 'react-redux';
export default SearchEmp = ({item}) => {
  const allemployeeData=useSelector(state => state.allEmployee);
  
  console.log("search data item k sath",allemployeeData)
  const {BR_NAME,EMP_NAME,DESIGNATION,HIRE_DATE,EMPLOYEE_ID,DEPT_NAME,EMP_STATUS,SERVICE_LENGTH}=item?.item
  const [expanded, setExpended] = useState(false);
  const onPress = ({}) => {
    setExpended(!expanded);
  };

 

  return (
   
      <View
        style={{
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          borderRadius: hp(2),
          marginHorizontal: hp(2.5),
          elevation: 4,
          marginTop:hp(1)
          
        }}>
        <Collapse isExpanded={expanded} onToggle={onPress}>
          <CollapseHeader
            style={{
              height: hp(12),
              marginHorizontal: hp(1),
            }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View
                style={{
                  flex: 0.3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: hp(-2),
                  marginVertical: hp(0.3),
                }}>
                <Image
                  style={{
                    width: wp(16),
                    height: hp(8),
                    marginTop: hp('1.5'),
                    position: 'absolute',
                    top: hp(0),
                    borderRadius: hp(1),
                  }}
                  source={{uri: 'ayaz'}}
                  resizeMode="contain"
                />
              </View>
              <View style={{flex: 0.7}}>
                <View
                  style={{flex: 1, flexDirection: 'row', marginTop: hp(1.7)}}>
                  <View style={{flex: 0.8, marginLeft: hp(-2)}}>
                    <Text style={styles.childname}>{EMP_NAME}</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.2,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: hp(2),
                      height: hp(2.5),
                    }}>
                    <Text style={styles.number}>{EMPLOYEE_ID}</Text>
                  </View>
                </View>
                <View
                  style={{flex: 1, flexDirection: 'row', marginTop: hp(0.5)}}>
                  <View style={{flex: 0.5, marginLeft: hp(-1)}}>
                    <Text style={styles.dob}>Designation:</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,

                      alignItems: 'flex-end',
                      marginRight: hp(2),
                    }}>
                    <Text style={styles.dobdata}>{DESIGNATION}</Text>
                  </View>
                </View>
                <View
                  style={{flex: 1, flexDirection: 'row', marginTop: hp(-1.7)}}>
                  <View style={{flex: 0.5, marginLeft: hp(-1)}}>
                    <Text style={styles.dob}>Date:</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'flex-end',
                      marginRight: hp(2),
                    }}>
                    <Text style={styles.dobdata}>{HIRE_DATE}</Text>
                  </View>
                </View>
              </View>
            </View>
          </CollapseHeader>
          <CollapseBody style={{marginTop: hp(-1.5)}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View
                style={{
                  flex: 0.3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: hp(-2),
                  marginVertical: hp(0.3),
                }}></View>
              <View style={{flex: 0.7}}>
                <View
                  style={{flex: 1, flexDirection: 'row', paddingBottom: hp(1)}}>
                  <View style={{flex: 0.5, marginLeft: hp(-1)}}>
                    <Text style={styles.dob}>Branch:</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,

                      alignItems: 'flex-end',
                      marginRight: hp(2),
                    }}>
                    <Text style={styles.dobdata}>{BR_NAME}</Text>
                  </View>
                </View>
                <View
                  style={{flex: 1, flexDirection: 'row', paddingBottom: hp(1)}}>
                  <View style={{flex: 0.5, marginLeft: hp(-1)}}>
                    <Text style={styles.dob}>Department:</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,

                      alignItems: 'flex-end',
                      marginRight: hp(2),
                    }}>
                    <Text style={styles.dobdata}>{DEPT_NAME}</Text>
                  </View>
                </View>
                <View
                  style={{flex: 1, flexDirection: 'row', paddingBottom: hp(1)}}>
                  <View style={{flex: 0.5, marginLeft: hp(-1)}}>
                    <Text style={styles.dob}>Status:</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,

                      alignItems: 'flex-end',
                      marginRight: hp(2),
                    }}>
                    <Text style={styles.dobdata}>{EMP_STATUS}</Text>
                  </View>
                </View>
                <View
                  style={{flex: 1, flexDirection: 'row', paddingBottom: hp(1)}}>
                  <View style={{flex: 0.5, marginLeft: hp(-1)}}>
                    <Text style={styles.dob}>Service Length:</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,

                      alignItems: 'flex-end',
                      marginRight: hp(2),
                    }}>
                    <Text style={styles.dobdata}>{SERVICE_LENGTH}</Text>
                  </View>
                </View>
              </View>
            </View>
          </CollapseBody>
        </Collapse>
      </View>
    
  );
};

const styles = EStyleSheet.create({
  numbertext: {
    color: '#353535',
    fontSize: '0.7rem',
    fontWeight: '700',
    fontFamily: fontFamily.ceraBold,
    fontStyle: 'normal',
    textTransform: 'uppercase',
  },
  basictext: {
    color: '#979797',
    fontSize: '0.5rem',
    fontWeight: '500',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    textTransform: 'uppercase',
  },
  btc: {
    paddingLeft: hp(0.5),
    fontSize: hp(2),
    fontWeight: '700',
    fontFamily: fontFamily.ceraBlack,
  },
  ftbotom: {
    color: '#FFF',
    fontSize: '0.55rem',
    fontFamily: fontFamily.ceraBold,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  mainHeader: {
    height: hp(8),
    backgroundColor: '#1C37A4',
    borderBottomRightRadius: hp(0),
    borderBottomLeftRadius: hp(0),
  },
  container: {
    flex: 1,
    marginTop: hp(0),
  },

  number: {
    color: '#2D8E00',
    backgroundColor: '#D4FFCC',
    borderRadius: hp(50),
    paddingHorizontal: hp(0.8),
    fontFamily: fontFamily.ceraBold,
    fontSize: '0.5rem',
    fontWeight: '700',
    fontStyle: 'normal',
  },
  dob: {
    color: '#363636',
    fontFamily: fontFamily.ceraMedium,
    fontSize: '0.5rem',
    fontWeight: '300',
    fontStyle: 'normal',
  },
  dobdata: {
    color: '#353535',
    borderRadius: hp(50),
    paddingHorizontal: hp(0.8),
    fontFamily: fontFamily.ceraMedium,
    fontSize: '0.55rem',
    fontWeight: '300',
    fontStyle: 'normal',
  },
  childname: {
    color: '#353535',
    borderRadius: hp(50),
    paddingHorizontal: hp(0.8),
    fontFamily: fontFamily.ceraMedium,
    fontSize: '0.7rem',
    fontWeight: '300',
    fontStyle: 'normal',
  },

  salaryMainView: {
    height: hp(7),
    marginHorizontal: hp(2.5),
    borderRadius: hp(1),
    backgroundColor: '#E7E7E7',
    marginTop: hp(2),
  },
});

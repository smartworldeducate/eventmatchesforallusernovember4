import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import {Rating} from 'react-native-ratings';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontFamily from '../Styles/fontFamily';
import EStyleSheet from 'react-native-extended-stylesheet';
const FeedBack = props => {
  const [salary, setSalary] = useState(true);
  const [history, setHistory] = useState(false);
  const salaryHandler = () => {
    setSalary(true);
    setHistory(false);
  };
  const historyHandler = () => {
    setHistory(true);
    setSalary(false);
  };

  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };
  return (
    <>
      <View>
        <MainHeader
          text={'Feedback'}
          iconName={'arrow-left'}
          onpressBtn={() => props.navigation.goBack()}
        />
      </View>
   
      <View
            style={{
              height: hp(7),
              marginHorizontal: hp(2.5),
              borderRadius: hp(1),
              backgroundColor: '#E7E7E7',
              marginTop: hp(2),
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                marginHorizontal: hp(1),
                marginVertical: hp(0.7),
              }}>
              <TouchableOpacity
              activeOpacity={0.8}
                onPress={salaryHandler}
                style={{
                  height: hp(5.5),
                  backgroundColor: salary == true ? '#fff' : '#E7E7E7',
                  paddingVertical: hp(1),
                  borderRadius: hp(1),
                  paddingHorizontal: hp(6),
                  justifyContent: 'center',
                }}>
                <Text
                  style={styles.headertext}>
                 Feedback
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
              activeOpacity={0.8}
                onPress={historyHandler}
                style={{
                  height: hp(5.5),
                  backgroundColor: history == true ? '#fff' : '#E7E7E7',
                  paddingVertical: hp(1),
                  borderRadius: hp(1),
                  paddingHorizontal: hp(5.5),
                  justifyContent: 'center',
                }}>
                <Text
                  style={styles.headertext}>
                 Suggestion
                </Text>
              </TouchableOpacity>
            </View>
          </View>
     {salary == true && (<>
       
      <View
        style={{
          marginHorizontal: hp(2.5),
          height: hp(7),
          borderRadius: hp(2),
          marginTop: hp(2),
          backgroundColor: '#ffffff',
          shadowColor: '#000',
          shadowOpacity: 0.5,
          shadowRadius: 4,
          elevation: 4,
        }}>
        <TextInput
          //   value={employeeId}
          //   onChangeText={onChangeEmpId}
          returnKeyType={'done'}
          iconName={'user'}
          placeholder={'Title'}
          placeholderColor={'gray'}
          //   iconColor={colors.loginIconColor}
          placeholderTextColor="gray"
          style={[styles.textInputCustomStyle,{marginTop:hp(1.2)}]}></TextInput>
      </View>

      <View
        style={{
          marginHorizontal: hp(2.5),
         
          borderRadius: hp(2),
          marginTop: hp(2),
          backgroundColor: '#ffffff',
          shadowColor: '#000',
          shadowOpacity: 0.5,
          shadowRadius: 4,
          elevation: 4,
        }}>
        <TextInput
          //   value={employeeId}
          //   onChangeText={onChangeEmpId}
          returnKeyType={'done'}
          iconName={'user'}
          placeholder={'Feedback'}
          placeholderColor={'gray'}
          //   iconColor={colors.loginIconColor}
          placeholderTextColor="gray"
          style={styles.textInputCustomStyle}></TextInput>
      </View>
      <View style={{marginHorizontal: hp(2.5), marginTop: hp(3)}}>
        <Rating
          type="custom"
          onFinishRating={ratingCompleted}
          tintColor={'#f2f2f2'}
          startingValue={0}
          ratingBackgroundColor={'#d9d9d9'}
        />
      </View>
      <TouchableOpacity
      activeOpacity={0.8}
        style={{
          marginHorizontal: hp(2.5),
          height: hp(7),
          borderRadius: hp(5),
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: hp(3),
          backgroundColor: '#1C37A4',
          shadowColor: '#000',
          shadowOpacity: 0.5,
          shadowRadius: 4,
          elevation: 4,
        }}>
        <Text style={styles.submittext}>SUBMIT</Text>
      </TouchableOpacity>
     </>)}
     {history == true && (<>
       

      <View
        style={{
          marginHorizontal: hp(2.5),
          height: hp(50),
          borderRadius: hp(2),
          marginTop: hp(2),
          backgroundColor: '#ffffff',
          shadowColor: '#000',
          shadowOpacity: 0.5,
          shadowRadius: 4,
          elevation: 4,
        }}>
        <TextInput
          
          returnKeyType={'done'}
          iconName={'user'}
          placeholder={'Suggestion'}
          placeholderColor={'gray'}
          //   iconColor={colors.loginIconColor}
          placeholderTextColor="gray"
          style={styles.textInputCustomStyle}></TextInput>
      </View>
      
      <TouchableOpacity
      activeOpacity={0.8}
        style={{
          marginHorizontal: hp(2.5),
          height: hp(7),
          borderRadius: hp(5),
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: hp(5),
          backgroundColor: '#1C37A4',
          shadowColor: '#000',
          shadowOpacity: 0.5,
          shadowRadius: 4,
          elevation: 4,
        }}>
        <Text style={styles.submittext}>SUBMIT</Text>
      </TouchableOpacity>
     </>)}
    </>
  );
};

export default FeedBack;

const styles = EStyleSheet.create({
  textInputCustomStyle: {
    fontSize: hp('1.65'),
    height: hp(32),
    letterSpacing: -0.05,
    paddingLeft: wp('5'),
    marginRight: hp(2),
    color: 'black',
    textAlignVertical: 'top',
  },
  headertext:{
    fontSize: '0.75rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    color: '#363636',
    fontWeight: '500',
    
  },
  submittext:{
    color: '#fff',
    fontFamily:fontFamily.ceraMedium,
    fontSize: '0.8rem',
    // color:'#363636',
      fontWait:'500',
  }
});

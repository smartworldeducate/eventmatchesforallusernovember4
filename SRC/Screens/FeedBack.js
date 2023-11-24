import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ToastAndroid
} from 'react-native';
import React, { useEffect, useState } from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import { Rating } from 'react-native-ratings';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontFamily from '../Styles/fontFamily';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useDispatch, useSelector } from 'react-redux';
import { feedBackHandler } from '../features/feeback/createSlice';
import { ratingHandler } from '../features/rating/createSlice';
import { updateRatingHandler } from '../features/updaterating/createSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
const FeedBack = props => {
  const dispatch = useDispatch();
  const getAllRating = useSelector((state) => state.getallRating)
  // console.log("rating data===", getAllRating?.user);
  const [salary, setSalary] = useState(true);
  const [history, setHistory] = useState(false);
  const [feedTitle, setFeedTitle] = useState('')
  const [feedDesc, setFeedDesc] = useState('')
  const [suggestionTitle, setSuggestionTitle] = useState('')
  const [suggestionDesc, setSuggestionDesc] = useState('')
  const [rating, setRating] = useState(null)
  const [localData, setLocalData] = useState(null);
  const [rData, setRdata] = useState('')
  const salaryHandler = () => {
    setSalary(true);
    setHistory(false);
  };
  const historyHandler = () => {
    setHistory(true);
    setSalary(false);
  };

  async function getData(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const parsedData = JSON.parse(value);
        setLocalData(parsedData);
        const ratData = await dispatch(
          ratingHandler({
            employee_id: parsedData?.EMPLOYEE_ID,
          }),
        );
        const rObj = Object.assign({}, ...ratData?.payload?.data)

        setRdata(rObj?.RATING_ID)
      } else {
        console.log('No data found for key:', key);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  }

  useEffect(() => {
    getData('loginData');
  }, []);

  // const feedHandler = async () => {
  //   if (rating == '') {
  //     ToastAndroid.showWithGravity(
  //       "rating is required",
  //       ToastAndroid.LONG,
  //       ToastAndroid.CENTER
  //     );
  //   } else {
  //     try {
  //       await dispatch(feedBackHandler({ employee_id: localData?.EMPLOYEE_ID, type_id: 1, title: feedTitle, feedback_desc: feedDesc, rating_id: rating }));
  //       ToastAndroid.showWithGravity(
  //         "Thank You For FeedBack",
  //         ToastAndroid.LONG,
  //         ToastAndroid.CENTER
  //       );
  //       setFeedDesc('');
  //       setFeedTitle('');
  //     } catch (error) {
  //       console.error('Error in reporteeHandler:', error);
  //       throw error;
  //     }
  //   }

  // };

  const suggetionHandler = async () => {
    if (suggestionTitle == '') {
      ToastAndroid.showWithGravity(
        "All fields are required",
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
    }
    else if (suggestionDesc == '') {
      ToastAndroid.showWithGravity(
        "All field are required",
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
    } else {
      try {
        await dispatch(feedBackHandler({ employee_id: localData?.EMPLOYEE_ID, type_id: 2, title: suggestionTitle, feedback_desc: suggestionDesc,rating_id:rating })); setFeedDesc('');
        ToastAndroid.showWithGravity(
          "Thank You For Suggestion",
          ToastAndroid.LONG,
          ToastAndroid.CENTER
        );
        setSuggestionDesc('');
        setSuggestionTitle('');
      } catch (error) {
        console.error('Error in reporteeHandler:', error);
        throw error;
      }
    }

  };


  const upRatingHandler = async () => {
    if (rating == '') {
      ToastAndroid.showWithGravity(
        "rating is required",
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
    } else {
      try {
        await dispatch(updateRatingHandler({ employee_id: localData?.EMPLOYEE_ID,rating_id: rating }));
        ToastAndroid.showWithGravity(
          "Thank You For FeedBack",
          ToastAndroid.LONG,
          ToastAndroid.CENTER
        );
        setFeedDesc('');
        setFeedTitle('');
      } catch (error) {
        console.error('Error in reporteeHandler:', error);
        throw error;
      }
    }

  };

  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
    setRating(rating)
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

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp(3) }}>
          <Text style={{ color: '#000', fontSize: hp(2.5) }}>How Do You Rate to This App?</Text>
        </View>
        <View style={{ marginHorizontal: hp(2.5), marginTop: hp(2) }}>
          <Rating
            type="custom"
            // showRating
            reviews={["Terrible", "Bad", "Meh", "OK", "good"]}
            onFinishRating={ratingCompleted}
            tintColor={'#f2f2f2'}
            startingValue={rating}
            ratingBackgroundColor={'#d9d9d9'}
          />
          {getAllRating && getAllRating?.user?.map((item, i) => {

            return (
             <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              {rating == item.rating_id && (
                <Text style={{ color: '#212F3D', fontSize: hp(2.5),paddingVertical:hp(2)}}>{item.rating_desc}</Text>
              )}
            </View>)
              
           
          })}
         
        </View>
        {!rData && (  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: hp(2.5), marginVertical: hp(2) }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("HomeScreen")}
            activeOpacity={0.8}
            style={{
              width: wp(30),
              height: hp(5),
              borderRadius: hp(5),
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#212F3D',
              shadowColor: '#000',
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 4,
            }}>
            <Text style={styles.submittext}>Not Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={upRatingHandler}
            activeOpacity={0.8}
            style={{
              width: wp(30),
              height: hp(5),
              borderRadius: hp(5),
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#1C37A4',
              shadowColor: '#000',
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 4,
            }}>
            <Text style={styles.submittext}>SUBMIT</Text>
          </TouchableOpacity>
        </View>)}
      

      </>)}
      {history == true && (<>

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
            value={suggestionTitle}
            onChangeText={(text) => setSuggestionTitle(text)}
            returnKeyType={'done'}
            iconName={'user'}
            placeholder={'Title'}
            placeholderColor={'gray'}
            //   iconColor={colors.loginIconColor}
            placeholderTextColor="gray"
            style={[styles.textInputCustomStyle, { marginTop: hp(1.2) }]}></TextInput>
        </View>
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
            value={suggestionDesc}
            onChangeText={(text) => setSuggestionDesc(text)}
            returnKeyType={'done'}
            iconName={'user'}
            placeholder={'Suggestion'}
            placeholderColor={'gray'}
            //   iconColor={colors.loginIconColor}
            placeholderTextColor="gray"
            style={styles.textInputCustomStyle}></TextInput>
        </View>

        <TouchableOpacity
          onPress={suggetionHandler}
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
  headertext: {
    fontSize: '0.75rem',
    fontFamily: fontFamily.ceraMedium,
    fontStyle: 'normal',
    color: '#363636',
    fontWeight: '500',

  },
  submittext: {
    color: '#fff',
    fontFamily: fontFamily.ceraMedium,
    fontSize: '0.8rem',
    // color:'#363636',
    fontWait: '500',
  }
});

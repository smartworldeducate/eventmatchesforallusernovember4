import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    ImageBackground,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Checkbox } from 'galio-framework';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ficon from 'react-native-fontawesome-pro';
import React, { useState } from 'react'
import ViewInput from '../Components/Headers/ViewInput';
import fontFamily from '../Styles/fontFamily';
import colors from '../Styles/colors';

const RegisterScreen = (props) => {
    const [firstName, setFirstName] = useState(null)
    const [lasttName, setLastName] = useState(null)
    const [gender, setGender] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [attendee, setAttendee] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPass, setConfirmPass] = useState(null)
    const [checkBox, setCheckBox] = useState(null)
    return (
        <View
            style={{
                flex: 1,

            }}>
            <StatusBar
                barStyle={'default'}
                translucent
                backgroundColor="transparent"
            />
            <View style={{ flex: 1, zIndex: 1 }}>
                <View style={{ flex: 0.2, marginTop: hp(-2.7) }}>
                    <Image
                        source={{ uri: 'vectortop' }}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode={'contain'} />
                </View>

                <ScrollView style={{ flex: 0.5, marginTop: hp(0), zIndex: 1, marginBottom: hp(5) }}>

                    <View style={{ marginHorizontal: hp(3.5), marginTop: hp(0) }}>
                        <View style={{ height: hp(6), zIndex: 1 }}>
                            <Text style={{ color: '#cdcdcd', fontWeight: '400', fontSize: hp(2.5),fontFamily:fontFamily.robotoMedium }}>
                                To continue, we’ll need some more information for your accoun
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: hp(3.5), marginTop: hp(0.3), marginBottom: hp(5) }}>
                        <Text style={{ color:colors.blackColor, fontWeight: '600', fontSize: hp(2.5),fontFamily:fontFamily.robotoBold }}>abc.def@gmail.com</Text>
                    </View>
                    {/* firstname */}
                    <ViewInput name={'First Name'} value={firstName} />
                    {/* lastname */}
                    <ViewInput name={'Last Name'} value={lasttName} />

                    {/* gender */}
                    {/* <ViewInput name={'Gender'} value={gender} /> */}


                    {/* email address */}
                    <ViewInput name={'Email Address'} value={email} />

                    {/* phone */}

                    <ViewInput name={'Phone'} value={phone} />

                    {/* attendance type */}
                    {/* <ViewInput name={'Attendee Type'} value={attendee} /> */}

                    {/* password */}
                    <ViewInput name={'Password'} value={password} />

                    {/* confirm pass */}
                    <ViewInput name={'Confirn Password'} value={confirmPass} />

                    {/* check box */}
                    <View style={{ marginHorizontal: hp(5), marginTop: hp(2.5) }}>
                        <Checkbox checkboxStyle={{ size: hp(50) }} iconSize={50} color="#fff" label="Subscribe for future updates" />
                    </View>
                    {/* button continue */}

                </ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: hp(3.5), marginBottom: hp(-20),zIndex:1}}>
                    <View></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', justifyContent: 'center', alignItems: 'center' }}>
                        <View style=
                            {{ paddingRight: 10 }}>
                            <Text style={{ color: '#262626ed', fontSize: hp(2.5), fontWeight: '600',fontFamily:fontFamily.robotoBold }}>Continue</Text>
                        </View>
                        <TouchableOpacity onPress={() => props.navigation.navigate("HomeScreen")} style={{ width: wp(13.5), height: hp(4.5), backgroundColor: '#2CC2E4', borderRadius: hp(1.5), justifyContent: 'center', alignItems: 'center' }}>
                            <Ficon type="light" name="arrow-right" color="#FFFFFF" size={25} />
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ flex: 0.3, marginLeft: hp(-25.5), marginTop: hp(4) }}>
                    <Image
                        source={{ uri: 'vectorbottom' }}
                        style={{ height: hp(32) }}
                        resizeMode={'contain'} />
                </View>
            </View>
        </View>
    )
}

export default RegisterScreen
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './SRC/Screens/Splash';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './SRC/Drawer/CustomDrawer';
import Icon from 'react-native-fontawesome-pro';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HomeScreen from './SRC/Screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NextScreen from './SRC/Screens/NextScreen';
import SigninScreen from './SRC/Screens/SigninScreen';
import SigninPassword from './SRC/Screens/SigninPassword';
import RegisterScreen from './SRC/Screens/RegisterScreen';
import AllEvents from './SRC/Screens/AllEvents';
import Exibitor from './SRC/Screens/Exibitor';
import PrevEvents from './SRC/Screens/PrevEvents';
import SessionProgramm from './SRC/Screens/SessionProgramm';
import Profile from './SRC/Screens/Profile';
import SpeakerList from './SRC/Screens/SpeakerList';
import Attendees from './SRC/Screens/Attendees';
import ExibitoeDetail from './SRC/Screens/ExibitoeDetail';
import Sponsor from './SRC/Screens/Sponsor';
import Scanner from './SRC/Screens/Scanner';
import MapScreen from './SRC/Screens/MapScreen';
import FeedBack from './SRC/Screens/FeedBack';
import { View } from 'react-native';
import Admins from './SRC/Screens/Admin';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
function DrawerStack() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: {width: wp('100'), backgroundColor: '#E6E6E6'},
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="HomeScreenDrawer" component={BottomTabApplication} />
      <Drawer.Screen name="SpeakerList" component={SpeakerList} />
      <Drawer.Screen name="Attendees" component={Attendees} />
    </Drawer.Navigator>
  );
}

// bottomvtab

const BottomTabApplication = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: 'flex',
          position: 'absolute',
          elevation: 5,
          backgroundColor: '#fff',
          height: 55,
        },
        tabBarActiveTintColor: '#2CC2E4', 
        tabBarInactiveTintColor: '#000000',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon type='light' name="person-chalkboard" size={hp(3)} color={color} />
          ),
          tabBarLabel: 'Exibitor',
          tabBarLabelStyle: {
            fontSize: hp(1.8),
          },
        }}
      />
      <Tab.Screen
        name="Speaker"
        component={SpeakerList}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon type='light' name="user-tie" size={hp(3)} color={color} />
          ),
          tabBarLabel: 'Speaker',
          tabBarLabelStyle: {
            fontSize: hp(1.8),
          },
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={Scanner}
        options={{
          tabBarIcon: ({color, size}) => (
           <View style={{backgroundColor:'#2CC2E4',width:wp(16),height:hp(8),justifyContent:'center',alignItems:'center',borderRadius:hp(50)}}>
             <Icon type='light' name="qrcode" size={hp(3.5)} color={'#fff'} />
           </View>
          ),
          tabBarLabel: 'Scanner',
          tabBarLabelStyle: {
            fontSize: hp(1.8),
            color:'#fff'
          },
        }}
      />
       <Tab.Screen
        name="Attendees"
        component={Attendees}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon type='light' name="clipboard-list-check" size={hp(3)} color={color} />
          ),
          tabBarLabel: 'Attendees',
          tabBarLabelStyle: {
            fontSize: hp(1.8),
          },
        }}
      />
        <Tab.Screen
        name="FeedBack"
        component={FeedBack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon type='light' name="message-smile" size={hp(3)} color={color} />
          ),
          tabBarLabel: 'FeedBack',
          tabBarLabelStyle: {
            fontSize: hp(1.8),
          },
        }}
      />
    </Tab.Navigator>
  );
};


const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Splash'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="Home">
        {props => (
          <React.Fragment>
            <HomeScreen {...props} />
            <DrawerStack {...props} />
          </React.Fragment>
        )}
      </Stack.Screen> */}
        <Stack.Screen name="NextScreen" component={NextScreen} />
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
        <Stack.Screen name="SigninPassword" component={SigninPassword} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={DrawerStack} />
        <Stack.Screen name="Exibitor" component={Exibitor} />
        <Stack.Screen name="PrevEvents" component={PrevEvents} />
        <Stack.Screen name="Session" component={SessionProgramm} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ExibitoeDetail" component={ExibitoeDetail} />
        <Stack.Screen name="Sponsor" component={Sponsor} />
        <Stack.Screen name="AllEvents" component={AllEvents} />
        <Stack.Screen name="FeedBack" component={FeedBack} />
        <Stack.Screen name="Admins" component={Admins} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

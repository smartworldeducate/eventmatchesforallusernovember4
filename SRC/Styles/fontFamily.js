import { Platform } from 'react-native';

const fontFamily = {


    // ceraBlack:
    // Platform.OS === 'android' ? 'CeraProBlack' : 'CeraProBlack',

    // ceraBold:
    // Platform.OS === 'android' ? 'CeraProBold' : 'CeraProBold',
    
    // ceraLight:
    // Platform.OS === 'android' ? 'CeraProLight' : 'CeraProLight',

    // ceraMedium:
    // Platform.OS === 'android' ? 'CeraProMedium' : 'CeraProMedium',

    ceraBlack:
    Platform.OS === 'android' ? 'CeraProBlack' : 'CeraProBlack',

    ceraBold:
    Platform.OS === 'android' ? 'Roboto-Bold' : 'Roboto-Bold',

    
    ceraLight:
    Platform.OS === 'android' ? 'Roboto-Light' : 'Roboto-Light',

    ceraMedium:
    Platform.OS === 'android' ? 'Roboto-Medium' : 'Roboto-Medium',




    // robotoLight:
    // Platform.OS === 'android' ? 'Roboto-Light' : 'Roboto-Light',

    // robotoMedium:
    // Platform.OS === 'android' ? 'Roboto-Medium' : 'Roboto-Medium',

    // robotoBold:
    // Platform.OS === 'android' ? 'Roboto-Bold' : 'Roboto-Bold',

    // robotoThin:
    // Platform.OS === 'android' ? 'Roboto-Thin' : 'Roboto-Thin',


    // robotoRegular:
    // Platform.OS === 'android' ? 'Roboto-Regular' : 'Roboto-Regular',

    
  

};

export default fontFamily;

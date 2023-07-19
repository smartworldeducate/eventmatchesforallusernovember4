import { Platform } from 'react-native';

const fontFamily = {


  ceraBlack:
    Platform.OS === 'android' ? 'CeraBlack' : 'CeraBlack',
    ceraBold:
    Platform.OS === 'android' ? 'CeraBold' : 'CeraBold',
    
    ceraLight:
    Platform.OS === 'android' ? 'CeraLight' : 'CeraLight',

    ceraMedium:
    Platform.OS === 'android' ? 'CeraMedium' : 'CeraMedium',

  

};

export default fontFamily;

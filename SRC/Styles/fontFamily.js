import { Platform } from 'react-native';

const fontFamily = {


    ceraBlack:
    Platform.OS === 'android' ? 'CeraProBlack' : 'CeraProBlack',

    ceraBold:
    Platform.OS === 'android' ? 'CeraProBold' : 'CeraProBold',
    
    ceraLight:
    Platform.OS === 'android' ? 'CeraProLight' : 'CeraProLight',

    ceraMedium:
    Platform.OS === 'android' ? 'CeraProMedium' : 'CeraProMedium',

    
  

};

export default fontFamily;

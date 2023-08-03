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

    fontSomePro:
    Platform.OS === 'android' ? 'FontSomePro' : 'FontSomePro',

    fontLight:
    Platform.OS === 'android' ? 'FontLight' : 'FontLight',

  

};

export default fontFamily;

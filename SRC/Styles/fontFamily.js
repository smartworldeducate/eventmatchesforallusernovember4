import { Platform } from 'react-native';

const fontFamily = {
  // bold: Platform.OS === 'android' ? 'OpenSans-Bold' : 'OpenSans-Bold',
  // semiBold:
  //   Platform.OS === 'android' ? 'OpenSans-Semibold' : 'OpenSans-Semibold',
  // extraBold:
  //   Platform.OS === 'android' ? 'OpenSans-Extrabold' : 'OpenSans-Extrabold',
  // regular: Platform.OS === 'android' ? 'OpenSans-Regular' : 'OpenSans-Regular',
  // boldItalic:
  //   Platform.OS === 'android' ? 'OpenSans-BoldItalic' : 'OpenSans-BoldItalic',
  // regularAlatsi:
  //   Platform.OS === 'android' ? 'Alatsi-Regular' : 'Alatsi-Regular',
  // helveticaLight: Platform.OS === 'android' ? 'helvetica-light-Regular' : 'helvetica-light-Regular',
  // helveticaLight: Platform.OS === 'android' ? 'Helvetica' : 'Helvetica',
  // helveticaLight: Platform.OS === "android" ? "helvetica-light" : "helvetica-light",
  // helveticaBold:
  //   Platform.OS === 'android' ? 'Helvetica-Bold' : 'Helvetica-Bold',
  // helveticaLight:
  //   Platform.OS === 'android'
  //     ? 'helvetica-light-Regular'
  //     : 'helvetica-light-Regular',
  // helveticaRegular:
  //   Platform.OS === 'android' ? 'NewHelvetica-Regular' : 'NewHelvetica-Regular',


  helveticaLight:
    Platform.OS === 'android' ? 'Helvettica-Light' : 'Helvettica-Light',
  helveticaBold:
    Platform.OS === 'android' ? 'Helvetica-Bold' : 'Helvetica-Bold',



  interExtraLight:
    Platform.OS === 'android' ? 'Inter-ExtraLight' : 'Inter-ExtraLight',

  interRegular: Platform.OS === 'android' ? 'Inter-Regular' : 'Inter-Regular',

  interLight: Platform.OS === 'android' ? 'Inter-Light' : 'Inter-Light',

  interSemiBold:
    Platform.OS === 'android' ? 'Inter-SemiBold' : 'Inter-SemiBold',

  innerBold: Platform.OS === 'android' ? 'Inter-Bold' : 'Inter-Bold',

};

export default fontFamily;

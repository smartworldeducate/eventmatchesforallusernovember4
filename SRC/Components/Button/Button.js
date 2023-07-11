import React from 'react';
import {Text, StyleSheet, Image, View, TouchableOpacity} from 'react-native';

const Button = ({
  disabled,
  onPress,
  borderRadius,
  bgColor,
  borderColor,
  borderWidth,
  shadowColor,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  elevation,
  btnOpacity,
  height,
  width,
  text,
  textColor,
  textSize,
  fontFamily,
  textMargin,
  textWeight,
  textAlign,
  letterSpacing,
}) => {
  return (
    <View style={{opacity: btnOpacity}}>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={{
          borderRadius: borderRadius,
          justifyContent: 'center',
          alignItems: 'center',
          height: height,
          width: width,
          backgroundColor: bgColor,
          flexDirection: 'row',
          borderColor: borderColor,
          borderWidth: borderWidth,
          shadowColor: shadowColor,
          shadowOffset: shadowOffset,
          shadowOpacity: shadowOpacity,
          shadowRadius: shadowRadius,
          elevation: elevation,
          opacity: 1,
        }}>
        <Text
          style={{
            color: textColor,
            fontSize: textSize,
            fontFamily: fontFamily,
            margin: textMargin,
            fontWeight: textWeight,
            textAlign: textAlign,
            letterSpacing: letterSpacing,
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
});
export default Button;

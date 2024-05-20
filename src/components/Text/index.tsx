import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { colors } from '../../theme';

export interface TextProps extends RNTextProps {}

const Text: React.FC<TextProps> = props => {
  const defaultColor = colors.white;

  return <RNText {...props} style={[{ color: defaultColor }, props.style]} />;
};

export default Text;

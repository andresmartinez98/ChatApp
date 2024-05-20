import {
  StyleSheet,
  TextInput,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Text from '../Text';
import { colors } from '../../theme';

export interface InputProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
  titleColor?: string;
  inputStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
  placeholderColor?: string;
  value?: string;
  onChangeText?: (text: string) => any;
  inputType?: 'text' | 'password';
}
const Input = ({
  title,
  style,
  titleColor = colors.softWhite,
  inputStyle,
  placeholder,
  placeholderColor = colors.softWhite,
  value = '',
  onChangeText,
  inputType,
}: InputProps) => {
  return (
    <View style={[style]}>
      {title && (
        <Text style={{ fontWeight: 600, color: titleColor }}>{title}</Text>
      )}
      <TextInput
        style={[styles.textInput, inputStyle]}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        value={value}
        secureTextEntry={inputType === 'password'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    color: colors.white,
  },
});

export default Input;

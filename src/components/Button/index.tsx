import { View, StyleProp, StyleSheet, TextStyle } from 'react-native';
import Pressable, { PressableProps } from '../Pressable';
import Text from '../Text';
import { colors } from '../../theme';

export interface ButtonProps extends PressableProps {
  title: string;
  color?: string;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = props => {
  return (
    <Pressable onPress={props.onPress}>
      <View
        style={[
          { backgroundColor: props?.color ?? colors.white },
          styles.container,
        ]}>
        <Text
          style={[
            styles.textContainer,
            props.textStyle,
            { color: colors.black },
          ]}>
          {props.title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 9,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  textContainer: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Button;

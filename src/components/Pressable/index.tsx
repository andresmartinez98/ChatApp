import React from 'react';
import {
  Pressable as RNPressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';

export interface PressableProps {
  children?: any;
  onPress?: () => any;
  style?: StyleProp<ViewStyle>;
}

const Pressable: React.FC<PressableProps> = props => {
  return (
    <RNPressable
      style={({ pressed }) => [
        props?.style,
        styles.container,
        { opacity: pressed ? 0.7 : 1 },
      ]}
      onPress={props?.onPress}>
      {props?.children}
    </RNPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
  },
});

export default Pressable;

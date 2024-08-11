import React from 'react';
import { StyleSheet, GestureResponderEvent, TextStyle } from 'react-native';
import { Button } from 'react-native-paper';
import  { translator } from '@utils/translator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ButtonType = {
  Text: 'text' as 'text',
  Outlined: 'outlined' as 'outlined',
  Contained: 'contained' as 'contained',
  Elevated: 'elevated' as 'elevated',
  ContainedTonal: 'contained-tonal' as 'contained-tonal',
} as const;

export type ButtonType = typeof ButtonType[keyof typeof ButtonType];

interface IProps {
  buttonType: ButtonType;
  labelTranslationId: string;
  onPressHandler: (e: GestureResponderEvent) => void;
  disabled?: boolean;
  customStyle?: object;
  icon?: string;
  putIconOnLeft?: boolean;
  iconColor?: string;
  upperCase?: boolean;
  textColor?: string;
  backgroundColor?: string;
  compact?: boolean;
  displayStyle?: TextStyle;
  loading?: boolean;
  testId?: string
}


const AppButton: React.FC<IProps> = ({
  labelTranslationId,
  icon,
  disabled = false,
  onPressHandler,
  customStyle,
  buttonType,
  putIconOnLeft = true, // Default to true
  iconColor = "black",
  upperCase = false,
  textColor = "black",
  backgroundColor = "",
  compact = false,
  displayStyle = {},
  loading=false,
  testId="appButton"
}) => {
  return (

    <Button
      onPress={onPressHandler}
      mode={buttonType}
      disabled={disabled}
      style={[styles.button, customStyle]}
      uppercase={upperCase}
      textColor={textColor}
      buttonColor={backgroundColor}
      compact={compact}
      labelStyle={displayStyle}
      loading={loading}
      testID={testId}
    >
      {icon && putIconOnLeft && (<Icon name={icon} size={20} color={iconColor} style={styles.icon} />)}
      {translator({ translationId: labelTranslationId })}
      {icon && !putIconOnLeft && (<Icon name={icon} size={20} color={iconColor} style={styles.icon} />)}
    </Button>

  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 1, 
    paddingHorizontal: 1,
    borderRadius: 6,
    justifyContent: "center"
  },

  icon: {
    marginHorizontal: 2, // Space between icon and text
  },
});

export default AppButton;

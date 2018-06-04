import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../utils/colors'

function Button({onPress, disabled, text, additionalStyles=[]}) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled ? styles.disabledButton : styles.enabledButton, ...additionalStyles]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={disabled ? styles.disabledText : styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  disabled: false,
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 1,
  },
  enabledButton: {
    borderColor: colors.blue,
  },
  disabledButton: {
    borderColor: colors.darkGray,
  },
  text: {
    fontSize: 24,
    color: colors.blue,
  },
  disabledText: {
    fontSize: 24,
    color: colors.darkGray,
  },
})

export default Button

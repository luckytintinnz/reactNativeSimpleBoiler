import React, { PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
};

export default function Input({ label, placeholder, value, onChangeText, passwordInput }) {
  const { containerStyle, inputStyle, labelStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        secureTextEntry={passwordInput}
        autoCapitalize="none"
      />
    </View>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  passwordInput: PropTypes.bool,
};

Input.defaultProps = {
  label: '',
  placeholder: '',
  value: null,
  onChangeText: () => {},
  passwordInput: false,
};


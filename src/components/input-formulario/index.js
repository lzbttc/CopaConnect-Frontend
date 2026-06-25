import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './style';

export function InputFormulario({
  Icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  RightComponent,
}) {
  return (
    <View style={styles.container}>
      <Icon
        size={26}
        color="rgba(255, 255, 255, 0.38)"
        weight="regular"
      />

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="rgba(255, 255, 255, 0.38)"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />

      {RightComponent}
    </View>
  );
}
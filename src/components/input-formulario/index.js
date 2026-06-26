import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { Eye, EyeSlash } from 'phosphor-react-native';

import { styles } from './style';

export function InputFormulario({
  Icon,
  placeholder,
  value,
  onChangeText,
  isPassword = false,
  keyboardType = 'default',
  RightComponent,
}) {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (Platform.OS === 'android' && inputRef.current) {
      inputRef.current.setNativeProps({
        style: StyleSheet.flatten([styles.input]),
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <Icon
        size={26}
        color="rgba(255, 255, 255, 0.38)"
        weight="regular"
      />

      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="rgba(255, 255, 255, 0.38)"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword && !senhaVisivel}
        keyboardType={keyboardType}
      />

      {isPassword ? (
        <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
          {senhaVisivel ? (
            <EyeSlash size={26} color="rgba(255, 255, 255, 0.38)" weight="regular" />
          ) : (
            <Eye size={26} color="rgba(255, 255, 255, 0.38)" weight="regular" />
          )}
        </TouchableOpacity>
      ) : (
        RightComponent
      )}
    </View>
  );
}
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './style';

export function TextoLink({
  texto,
  onPress,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.texto}>
        {texto}
      </Text>
    </TouchableOpacity>
  );
}
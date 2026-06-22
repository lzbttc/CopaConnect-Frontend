import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { styles } from './style';

export function Botao({ titulo, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.botao}>
        <Text style={styles.texto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
}
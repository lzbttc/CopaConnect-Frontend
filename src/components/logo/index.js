import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './style';

// logo principal utilizada nas telas iniciais da aplicação
export function Logo() {
  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <Text style={styles.texto}>Copa</Text>

        <Image
          source={require('../../assets/imagens/simbolo-logo.png')}
          style={styles.simbolo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.texto}>Connect</Text>
    </View>
  );
}
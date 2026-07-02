import React from 'react';
import { View } from 'react-native';
import { User } from 'phosphor-react-native';

import { styles } from './style';

// componente reutilizável para exibir o avatar padrão do usuário
export function Avatar({ tamanho = 48 }) {
  // calcula as dimensões do avatar de acordo com o tamanho informado
  const raio = tamanho / 2;
  const tamanhoIcone = tamanho * 0.55;

  return (
    <View
      style={[
        styles.container,
        {
          width: tamanho,
          height: tamanho,
          borderRadius: raio,
        },
      ]}
    >
      <User
        size={tamanhoIcone}
        color="#DFFF2B"
        weight="bold"
      />
    </View>
  );
}
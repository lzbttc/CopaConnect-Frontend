import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CaretLeft } from 'phosphor-react-native';

import { styles } from './style';

// botão padrão utilizado para retornar à tela anterior
export function Voltar({
  onPress,
  size = 36,
  color = '#DFFF2B',
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      <CaretLeft
        size={size}
        weight="regular"
        color={color}
      />
    </TouchableOpacity>
  );
}
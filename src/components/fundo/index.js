import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style';

// mantém o mesmo plano de fundo gradiente em todas as telas do aplicativo
export function Fundo({ children }) {
  return (
    <LinearGradient
      colors={['#00223A', '#005DA0']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
}
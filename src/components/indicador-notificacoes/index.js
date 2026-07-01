import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Bell } from 'phosphor-react-native';

import { styles } from './style';

export function IndicadorNotificacoes({
  quantidade = 0,
  size = 26,
  color = '#DFFF2B',
  onPress,
}) {
  const quantidadeSegura = Number.isFinite(quantidade)
    ? Math.max(0, Math.min(Number(quantidade), 99))
    : 0;
  const mostrarBadge = quantidadeSegura > 0;
  const textoBadge = quantidadeSegura > 99 ? '99+' : String(quantidadeSegura);

  const conteudo = (
    <View style={styles.container}>
      <Bell size={size} color={color} weight="regular" />

      {mostrarBadge && (
        <View style={styles.badge}>
          <Text style={styles.badgeTexto}>{textoBadge}</Text>
        </View>
      )}
    </View>
  );

  if (!onPress) {
    return conteudo;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      accessibilityLabel="Notificações"
      accessibilityRole="button"
    >
      {conteudo}
    </TouchableOpacity>
  );
}

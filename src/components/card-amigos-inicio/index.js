import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Avatar } from '../avatar';

import { styles } from './style';

const MAX_AVATARES = 4;

export function CardAmigosInicio({ amigos, onPress }) {
  const amigosVisiveis = amigos.slice(0, MAX_AVATARES);
  const restantes = amigos.length - MAX_AVATARES;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      {amigosVisiveis.map((amigo) => (
        <View key={amigo.id} style={styles.amigoContainer}>
          <View>
            <Avatar tamanho={48} />
            {amigo.online && <View style={styles.indicadorOnline} />}
          </View>
          <Text style={styles.amigoNome} numberOfLines={1}>
            {amigo.nome}
          </Text>
        </View>
      ))}

      {restantes > 0 && (
        <Text style={styles.restantes}>+ {restantes}</Text>
      )}
    </TouchableOpacity>
  );
}
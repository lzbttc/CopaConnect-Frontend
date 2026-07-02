import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Avatar } from '../avatar';

import { styles } from './style';

// limita a quantidade de amigos exibidos na tela inicial
const MAX_AMIGOS_ONLINE = 4;

// exibe um resumo dos amigos que estão online
export function CardAmigosOnline({ amigosOnline = [], onPress }) {
  // exibe apenas parte da lista para manter o card compacto
  const amigosVisiveis = amigosOnline.slice(0, MAX_AMIGOS_ONLINE);
  // calcula quantos amigos ficaram fora da visualização
  const restantes = Math.max( amigosOnline.length - MAX_AMIGOS_ONLINE, 0);

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
            <View style={styles.indicadorOnline} />
          </View>
          <Text style={styles.amigoNome} numberOfLines={1}>
            {amigo.nome}
          </Text>
        </View>
      ))}

      {/* informa que existem mais amigos online além dos exibidos */}
      {restantes > 0 && <Text style={styles.restantes}>+ {restantes}</Text>}
    </TouchableOpacity>
  );
}
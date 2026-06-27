import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  House,
  Calendar,
  Users,
  Trophy,
  ChartBar,
} from 'phosphor-react-native';

import { NomesRotas } from '../../routes/nomes-rotas';

import { styles } from './style';

export function BarraNavegacao() {
  const navigation = useNavigation();
  const { name: rotaAtual } = useRoute();

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom + 14 }]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate(NomesRotas.INICIO)}
        style={rotaAtual === NomesRotas.INICIO ? styles.itemAtivo : styles.item}
      >
        <House
          size={26}
          weight={rotaAtual === NomesRotas.INICIO ? 'fill' : 'regular'}
          color="#00223A"
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {}}
        style={rotaAtual === NomesRotas.AGENDA_PARTIDAS ? styles.itemAtivo : styles.item}
      >
        <Calendar
          size={26}
          weight={rotaAtual === NomesRotas.AGENDA_PARTIDAS ? 'fill' : 'regular'}
          color="#00223A"
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {}}
        style={rotaAtual === NomesRotas.AMIGOS ? styles.itemAtivo : styles.item}
      >
        <Users
          size={26}
          weight={rotaAtual === NomesRotas.AMIGOS ? 'fill' : 'regular'}
          color="#00223A"
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {}}
        style={rotaAtual === NomesRotas.BOLAO ? styles.itemAtivo : styles.item}
      >
        <Trophy
          size={26}
          weight={rotaAtual === NomesRotas.BOLAO ? 'fill' : 'regular'}
          color="#00223A"
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {}}
        style={rotaAtual === NomesRotas.ESTATISTICAS ? styles.itemAtivo : styles.item}
      >
        <ChartBar
          size={26}
          weight={rotaAtual === NomesRotas.ESTATISTICAS ? 'fill' : 'regular'}
          color="#00223A"
        />
      </TouchableOpacity>
    </View>
  );
}
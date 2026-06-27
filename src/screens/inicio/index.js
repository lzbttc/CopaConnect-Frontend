import React from 'react';
import { StatusBar, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Bell } from 'phosphor-react-native';

import { Fundo } from '../../components/fundo';
import { BarraNavegacao } from '../../components/barra-navegacao';
import { CardPartidaInicio } from '../../components/card-partida-inicio';
import { CardBoloesInicio } from '../../components/card-bolaos-inicio';
import { CardAmigosInicio } from '../../components/card-amigos-inicio';
import { Avatar } from '../../components/avatar';

import { styles } from './style';

const partidas = [
  {
    id: 1,
    status: 'AO_VIVO',
    fase: 'Fase de Grupos',
    grupo: 'D',
    minuto: 67,
    data: '2026-06-18',
    horario: '16:00',
    estadio: 'Lusail Stadium',
    selecaoA: { nome: 'Brasil', codigo: 'BR', gols: 2 },
    selecaoB: { nome: 'Alemanha', codigo: 'DE', gols: 1 },
  },
  {
    id: 2,
    status: 'AGENDADA',
    fase: 'Fase de Grupos',
    grupo: 'A',
    minuto: null,
    data: '2026-06-19',
    horario: '13:00',
    estadio: 'MetLife Stadium',
    selecaoA: { nome: 'França', codigo: 'FR', gols: null },
    selecaoB: { nome: 'Argentina', codigo: 'AR', gols: null },
  },
  {
    id: 3,
    status: 'FINALIZADA',
    fase: 'Fase de Grupos',
    grupo: 'B',
    minuto: 90,
    data: '2026-06-17',
    horario: '10:00',
    estadio: 'Rose Bowl',
    selecaoA: { nome: 'Espanha', codigo: 'ES', gols: 3 },
    selecaoB: { nome: 'Portugal', codigo: 'PT', gols: 2 },
  },
];

const bolaos = [
  {
    id: 1,
    nome: 'Família',
    posicao: 1,
    totalParticipantes: 8,
    pontuacao: 67,
    palpite: { golsSelecaoA: 9, golsSelecaoB: 4 },
  },
  {
    id: 2,
    nome: 'Trampo',
    posicao: 7,
    totalParticipantes: 12,
    pontuacao: 30,
    palpite: { golsSelecaoA: 5, golsSelecaoB: 2 },
  },
];

const amigos = [
  { id: 1, nome: 'Marta G.', online: true },
  { id: 2, nome: 'Matheus N.', online: true },
  { id: 3, nome: 'Tiago C.', online: true },
  { id: 4, nome: 'Carla S.', online: false },
  { id: 5, nome: 'Bruno L.', online: false },
  { id: 6, nome: 'Fernanda R.', online: true },
  { id: 7, nome: 'Ricardo M.', online: false },
];

const PRIORIDADE_STATUS = {
  AO_VIVO: 0,
  AGENDADA: 1,
  FINALIZADA: 2,
};

const TITULO_POR_STATUS = {
  AO_VIVO: 'Partida Ao Vivo',
  AGENDADA: 'Próxima Partida',
  FINALIZADA: 'Última Partida',
};

function selecionarPartidaDestaque(lista) {
  return lista.reduce((destaque, atual) => {
    if (!destaque) return atual;
    return PRIORIDADE_STATUS[atual.status] < PRIORIDADE_STATUS[destaque.status]
      ? atual
      : destaque;
  }, null);
}

export default function Inicio() {
  const partidaDestaque = selecionarPartidaDestaque(partidas);

  return (
    <Fundo>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.logoTexto}>CopaConnect</Text>

          <View style={styles.headerIcones}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
              <Bell size={26} color="#DFFF2B" weight="regular" />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
              <Avatar tamanho={32} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollConteudo}
          showsVerticalScrollIndicator={false}
        >
          {partidaDestaque && (
            <View style={styles.secao}>
              <Text style={styles.tituloSecao}>
                {TITULO_POR_STATUS[partidaDestaque.status]}
              </Text>
              <CardPartidaInicio
                partida={partidaDestaque}
                onPress={() => {}}
              />
            </View>
          )}

          {partidaDestaque && bolaos.length > 0 && (
            <View style={styles.secao}>
              <Text style={styles.tituloSecao}>Meus Bolões</Text>
              <CardBoloesInicio
                bolaos={bolaos}
                partida={partidaDestaque}
                onPressBolao={(bolao) => {}}
              />
            </View>
          )}

          {amigos.length > 0 && (
            <View style={styles.secao}>
              <Text style={styles.tituloSecao}>Amigos</Text>
              <CardAmigosInicio
                amigos={amigos}
                onPress={() => {}}
              />
            </View>
          )}
        </ScrollView>

        <BarraNavegacao />
      </View>
    </Fundo>
  );
}
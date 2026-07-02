import React from 'react';
import { StatusBar, View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { Fundo } from '../../components/fundo';
import { BarraNavegacao } from '../../components/barra-navegacao';
import { CardPartidaInicio } from '../../components/card-partida-inicio';
import { CardBoloesInicio } from '../../components/card-bolaos-inicio';
import { CardAmigosOnline } from '../../components/card-amigos-online-inicio';
import { Avatar } from '../../components/avatar';
import { IndicadorNotificacoes } from '../../components/indicador-notificacoes';

import { styles } from './style';
import { dadosMock } from '../../utils/dados-mock';

const { partidas, boloes, amigos: amigosOnline } = dadosMock;

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

const TITULOS_SECOES = {
  BOLOES: 'Meus Bolões',
  AMIGOS: 'Amigos Online',
};

const TAMANHO_AVATAR = 32;
const QUANTIDADE_NOTIFICACOES_INICIAL = 3;

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
  const [quantidadeNotificacoes] = React.useState(QUANTIDADE_NOTIFICACOES_INICIAL);

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
            <IndicadorNotificacoes
              quantidade={quantidadeNotificacoes}
              onPress={() => {}}
            />

            <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
              <Avatar tamanho={TAMANHO_AVATAR} />
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

          {partidaDestaque && boloes.length > 0 && (
            <View style={styles.secao}>
              <Text style={styles.tituloSecao}>{TITULOS_SECOES.BOLOES}</Text>
              <CardBoloesInicio
                boloes={boloes}
                partida={partidaDestaque}
                onPressBolao={(bolao) => {}}
              />
            </View>
          )}

          {amigosOnline.length > 0 && (
            <View style={styles.secao}>
              <Text style={styles.tituloSecao}>{TITULOS_SECOES.AMIGOS}</Text>
              <CardAmigosOnline
                amigosOnline={amigosOnline}
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
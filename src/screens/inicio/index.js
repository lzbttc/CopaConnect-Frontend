import React from 'react';
import { StatusBar, View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { Fundo } from '../../components/fundo';
import { BarraNavegacao } from '../../components/barra-navegacao';
import { CardPartida } from '../../components/card-partida';
import { CardBoloesInicio } from '../../components/card-boloes-inicio';
import { CardAmigosOnline } from '../../components/card-amigos-online-inicio';
import { Avatar } from '../../components/avatar';
import { IndicadorNotificacoes } from '../../components/indicador-notificacoes';

import { styles } from './style';
import { dadosMock } from '../../utils/dados-mock';

// dados temporários utilizados até a integração com o backend
const { partidas, boloes, amigos: amigosOnline } = dadosMock;

// define a prioridade da partida exibida na tela inicial
const PRIORIDADE_STATUS = {
  AO_VIVO: 0,
  AGENDADA: 1,
  FINALIZADA: 2,
};

// define o título exibido conforme o status da partida
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
// valor inicial utilizado até receber as notificações da API
const QUANTIDADE_NOTIFICACOES_INICIAL = 3;

// busca a partida mais importante para exibição na tela inicial
function selecionarPartidaDestaque(lista) {
  return lista.reduce((destaque, atual) => {
    // a primeira partida da lista inicia a comparação
    if (!destaque) return atual;
    return PRIORIDADE_STATUS[atual.status] < PRIORIDADE_STATUS[destaque.status]
      ? atual
      : destaque;
  }, null);
}

// tela principal exibida após o login
export default function Inicio() {
  // seleciona automaticamente a partida que ficará em destaque
  const partidaDestaque = selecionarPartidaDestaque(partidas);
  // preparado para receber a quantidade de notificações do backend
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
              // futuramente abrirá a tela de notificações
              onPress={() => {}}
            />

            <TouchableOpacity activeOpacity={0.8}
              // futuramente abrirá a tela de perfil do usuário
              onPress={() => {}}>
              <Avatar tamanho={TAMANHO_AVATAR} />
            </TouchableOpacity>
          </View>
        </View>

        {/* exibe apenas uma partida como destaque na tela inicial */}
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
              <CardPartida
                partida={partidaDestaque}
                // Futuramente navegará para os detalhes da partida
                onPress={() => {}}
              />
            </View>
          )}

          {/* exibe os bolões relacionados à partida destacada */}
          {partidaDestaque && boloes.length > 0 && (
            <View style={styles.secao}>
              <Text style={styles.tituloSecao}>{TITULOS_SECOES.BOLOES}</Text>
              <CardBoloesInicio
                boloes={boloes}
                partida={partidaDestaque}
                // futuramente abrirá os detalhes do bolão selecionado
                onPressBolao={(bolao) => {}}
              />
            </View>
          )}

          {/* Lista resumida dos amigos online */}
          {amigosOnline.length > 0 && (
            <View style={styles.secao}>
              <Text style={styles.tituloSecao}>{TITULOS_SECOES.AMIGOS}</Text>
              <CardAmigosOnline
                amigosOnline={amigosOnline}
                // futuramente abrirá a lista completa de amigos
                onPress={() => {}}
              />
            </View>
          )}
        </ScrollView>
        {/* barra compartilhada entre as telas principais */}
        <BarraNavegacao />
      </View>
    </Fundo>
  );
}
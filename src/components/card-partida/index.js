import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CountryFlag from 'react-native-country-flag';

import { styles } from './style';

// centraliza os status utilizados nas partidas
const STATUS = {
  AO_VIVO: 'AO_VIVO',
  AGENDADA: 'AGENDADA',
  FINALIZADA: 'FINALIZADA',
};

// exibe a bandeira da seleção
function Bandeira({ codigo, tamanho = 42 }) {
  return (
    <CountryFlag
      isoCode={codigo}
      size={tamanho}
      style={styles.bandeira}
    />
  );
}

// formata a data para exibição
function formatarDataPartida(dataString) {
  if (!dataString) {
    return '';
  }

  const data = new Date(`${dataString}T00:00:00`);

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const diferencaDias = Math.round(
    (data.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24)
  );

  switch (diferencaDias) {
    case -1:
      return 'Ontem';

    case 0:
      return 'Hoje';

    case 1:
      return 'Amanhã';

    default: {
      const mesmoAno = data.getFullYear() === hoje.getFullYear();

      return data.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        ...(mesmoAno ? {} : { year: 'numeric' }),
      });
    }
  }
}

// exibe o indicador conforme o status da partida
function IndicadorStatus({ partida }) {
  const {
    status,
    minuto,
    data,
    horario,
  } = partida;

  switch (status) {
    case STATUS.AO_VIVO:
      return (
        <View style={styles.aoVivoContainer}>
          <View style={styles.aoVivoPonto} />

          <Text style={styles.aoVivoTexto}>
            {minuto}'
          </Text>
        </View>
      );

    case STATUS.AGENDADA:
    case STATUS.FINALIZADA:
      return (
        <Text style={styles.dataPartida}>
          {formatarDataPartida(data)} | {horario}
        </Text>
      );

    default:
      return null;
  }
}

// exibe as informações da fase
function InfoFase({ partida }) {
  const descricaoFase = partida.grupo
    ? `${partida.fase} | Grupo ${partida.grupo}`
    : partida.fase;

  return (
    <View style={styles.faseContainer}>
      <Text style={styles.faseTexto}>
        {descricaoFase}
      </Text>

      <IndicadorStatus partida={partida} />
    </View>
  );
}

// exibe o placar da partida
function Placar({ partida }) {
  const {
    selecaoA,
    selecaoB,
    status,
  } = partida;

  const placar =
    status === STATUS.AGENDADA
      ? '—'
      : `${selecaoA.gols} — ${selecaoB.gols}`;

  return (
    <View style={styles.placarContainer}>
      <View style={styles.selecaoContainer}>
        <Bandeira codigo={selecaoA.codigo} />

        <Text style={styles.selecaoNome}>
          {selecaoA.nome}
        </Text>
      </View>

      <View style={styles.golsContainer}>
        <Text style={styles.golsTexto}>
          {placar}
        </Text>
      </View>

      <View style={styles.selecaoContainer}>
        <Bandeira codigo={selecaoB.codigo} />

        <Text style={styles.selecaoNome}>
          {selecaoB.nome}
        </Text>
      </View>
    </View>
  );
}

// exibe a partida em destaque da tela inicial
export function CardPartida({ partida, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      <InfoFase partida={partida} />

      <Placar partida={partida} />
    </TouchableOpacity>
  );
}
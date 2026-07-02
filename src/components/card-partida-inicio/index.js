import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CountryFlag from 'react-native-country-flag';

import { styles } from './style';

// centraliza os possíveis status utilizados nas partidas
const STATUS = {
  AO_VIVO: 'AO_VIVO',
  AGENDADA: 'AGENDADA',
  FINALIZADA: 'FINALIZADA',
};

// componente responsável por exibir a bandeira de cada seleção
function Bandeira({ codigo, tamanho = 42 }) {
  return (
    <CountryFlag
      isoCode={codigo}
      size={tamanho}
      style={styles.bandeira}
    />
  );
}

// indica visualmente quando a partida está acontecendo
function IndicadorAoVivo() {
  return (
    <View style={styles.aoVivoContainer}>
      <View style={styles.aoVivoPonto} />
      <Text style={styles.aoVivoTexto}>Ao Vivo</Text>
    </View>
  );
}

// exibe as informações da fase da competição
function InfoFase({ fase, grupo, status }) {
  return (
    <View style={styles.faseContainer}>
      <Text style={styles.faseTexto}>
        {fase}{grupo ? ` | Grupo ${grupo}` : ''}
      </Text>
      {/* o indicador só aparece quando a partida está em andamento */}
      {status === STATUS.AO_VIVO && (
        <IndicadorAoVivo />
      )}
    </View>
  );
}

// exibe as informações principais da partida
function Placar({ partida }) {
  const { selecaoA, selecaoB, status, minuto } = partida;

  return (
    <View style={styles.placarContainer}>
      <View style={styles.selecaoContainer}>
        <Bandeira codigo={selecaoA.codigo} />
        <Text style={styles.selecaoNome}>{selecaoA.nome}</Text>
      </View>

      <View style={styles.golsContainer}>
        <Text style={styles.golsTexto}>
          {selecaoA.gols} — {selecaoB.gols}
        </Text>

        {status === STATUS.AO_VIVO && (
          <Text style={styles.minutoTexto}>{minuto}'</Text>
        )}
      </View>

      <View style={styles.selecaoContainer}>
        <Bandeira codigo={selecaoB.codigo} />
        <Text style={styles.selecaoNome}>{selecaoB.nome}</Text>
      </View>
    </View>
  );
}

// card responsável por exibir a partida em destaque da tela inicial
export function CardPartidaInicio({ partida, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      <InfoFase
        fase={partida.fase}
        grupo={partida.grupo}
        status={partida.status}
      />

      <Placar partida={partida} />
    </TouchableOpacity>
  );
}
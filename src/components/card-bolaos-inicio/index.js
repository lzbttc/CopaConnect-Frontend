import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CountryFlag from 'react-native-country-flag';

import { TextoLink } from '../texto-link';

import { styles } from './style';

function ItemBolao({ bolao, partida, onPress }) {
  const { selecaoA, selecaoB, status } = partida;
  const temBolao = Boolean(bolao?.id);
  const nomeBolao = bolao?.nome || 'Bolão';
  const palpite = bolao?.palpite;
  const temPalpite = palpite != null;
  const golsA = palpite?.golsSelecaoA;
  const golsB = palpite?.golsSelecaoB;
  const totalParticipantes = bolao?.totalParticipantes;
  const resultadoDescricao = bolao?.resultado?.descricao;

  const renderPalpite = () => (
    <View style={styles.palpiteContainer}>
      <Text style={styles.itemPalpite}>Palpite:</Text>

      <CountryFlag isoCode={selecaoA.codigo} size={13} style={styles.bandeira} />
      <Text style={styles.itemPalpite}>{golsA}</Text>

      <Text style={styles.itemPalpite}>-</Text>

      <Text style={styles.itemPalpite}>{golsB}</Text>
      <CountryFlag isoCode={selecaoB.codigo} size={13} style={styles.bandeira} />
    </View>
  );

  const renderColunaDireita = () => {
    if (status === 'AO_VIVO') {
      const classificacao = bolao?.posicaoParcial != null && totalParticipantes != null
        ? `${bolao.posicaoParcial}º/${totalParticipantes}`
        : null;
      const pontuacao = bolao?.pontuacaoParcial;

      return (
        <View style={styles.itemDireita}>
          {classificacao ? <Text style={styles.itemPosicao}>{classificacao}</Text> : null}
          {pontuacao != null ? <Text style={styles.itemPontuacao}>{pontuacao} pts</Text> : null}
        </View>
      );
    }

    if (status === 'FINALIZADA') {
      const classificacao = bolao?.posicaoFinal != null && totalParticipantes != null
        ? `${bolao.posicaoFinal}º/${totalParticipantes}`
        : null;
      const pontuacao = bolao?.pontuacaoFinal;

      return (
        <View style={styles.itemDireita}>
          {classificacao ? <Text style={styles.itemPosicao}>{classificacao}</Text> : null}
          {pontuacao != null ? <Text style={styles.itemPontuacao}>{pontuacao} pts</Text> : null}
        </View>
      );
    }

    return <View style={styles.itemDireita} />;
  };

  if (!temBolao) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.itemContainer}
      >
        <View style={styles.itemEsquerda}>
          <Text style={styles.itemNome}>{nomeBolao}</Text>
          <TextoLink
            texto="Criar bolão para esta partida"
            onPress={onPress}
          />
        </View>

        {renderColunaDireita()}
      </TouchableOpacity>
    );
  }

  if (status === 'AGENDADA') {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.itemContainer}
      >
        <View style={styles.itemEsquerda}>
          <Text style={styles.itemNome}>{nomeBolao}</Text>

          {temPalpite ? (
            renderPalpite()
          ) : (
            <View style={styles.palpiteContainer}>
              <Text style={styles.itemPalpite}>Você ainda não fez seu palpite</Text>
            </View>
          )}

          <TextoLink
            texto={temPalpite ? 'Editar palpite' : 'Fazer palpite'}
            onPress={onPress}
          />
        </View>

        {renderColunaDireita()}
      </TouchableOpacity>
    );
  }

  if (status === 'AO_VIVO') {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.itemContainer}
      >
        <View style={styles.itemEsquerda}>
          <Text style={styles.itemNome}>{nomeBolao}</Text>
          {renderPalpite()}
        </View>

        {renderColunaDireita()}
      </TouchableOpacity>
    );
  }

  if (status === 'FINALIZADA') {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.itemContainer}
      >
        <View style={styles.itemEsquerda}>
          <Text style={styles.itemNome}>{nomeBolao}</Text>

          {resultadoDescricao ? (
            <View style={styles.palpiteContainer}>
              <Text style={styles.itemPalpite}>{resultadoDescricao}</Text>
            </View>
          ) : null}
        </View>

        {renderColunaDireita()}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.itemContainer}
    >
      <View style={styles.itemEsquerda}>
        <Text style={styles.itemNome}>{nomeBolao}</Text>
      </View>

      {renderColunaDireita()}
    </TouchableOpacity>
  );
}

export function CardBoloesInicio({ bolaos, partida, onPressBolao }) {
  return (
    <View style={styles.container}>
      {bolaos.map((bolao, index) => (
        <View key={bolao.id}>
          {index > 0 && <View style={styles.divisor} />}
          <ItemBolao
            bolao={bolao}
            partida={partida}
            onPress={() => onPressBolao(bolao)}
          />
        </View>
      ))}
    </View>
  );
}
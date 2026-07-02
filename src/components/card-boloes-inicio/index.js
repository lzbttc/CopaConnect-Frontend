import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CountryFlag from 'react-native-country-flag';

import { TextoLink } from '../texto-link';

import { styles } from './style';

// renderiza cada bolão relacionado à partida selecionada
function ItemBolao({ bolao, partida, onPress }) {
  const { selecaoA, selecaoB, status } = partida;
  // identifica se já existe um bolão criado para a partida
  const temBolao = Boolean(bolao?.id);
  const nomeBolao = bolao?.nome || 'Bolão';
  const palpite = bolao?.palpite;
  // verifica se o usuário já registrou um palpite
  const temPalpite = palpite != null;
  const golsA = palpite?.golsSelecaoA;
  const golsB = palpite?.golsSelecaoB;
  const totalParticipantes = bolao?.totalParticipantes;
  const resultadoDescricao = bolao?.resultado?.descricao;

  // exibe o placar apostado pelo usuário
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

  // exibe a posição e pontuação conforme o andamento da partida
  const renderColunaDireita = () => {
    // durante a partida são exibidas informações parciais
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

    // após o encerramento são exibidos os resultados finais
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

  // exibe a opção para criar um bolão quando ainda não existir
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

  // permite criar ou editar o palpite antes do início da partida
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

  // durante a partida o usuário apenas acompanha sua pontuação parcial
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

  // após o encerramento exibe o desempenho final no bolão
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

  // mantido como segurança para possíveis novos status vindos da API
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

// lista todos os bolões relacionados à partida em destaque
export function CardBoloesInicio({ boloes, partida, onPressBolao }) {
  return (
    <View style={styles.container}>
      {boloes.map((bolao, index) => (
        <View key={bolao.id}>
          {/* adiciona uma divisão entre os bolões exibidos */}
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
import React from 'react';
import { StatusBar, View } from 'react-native';

import { Fundo } from '../../components/fundo';
import { Logo } from '../../components/logo';
import { Botao } from '../../components/botao';

import { styles } from './style';

export default function BoasVindas({ navigation }) {
  return (
    <Fundo>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>

        <View style={styles.botoesContainer}>
          <Botao
            titulo="Entre"
            onPress={() => navigation.navigate('Login')}
          />

          <View style={styles.espacamento} />

          <Botao
            titulo="Cadastre-se"
            onPress={() => navigation.navigate('Cadastro')}
          />
        </View>
      </View>
    </Fundo>
  );
}

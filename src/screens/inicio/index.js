import React from 'react';
import { StatusBar, View, Text } from 'react-native';

import { Fundo } from '../../components/fundo';
import { BarraNavegacao } from '../../components/barra-navegacao';

import { styles } from './style';

export default function Inicio({ navigation }) {
  return (
    <Fundo>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.logoTexto}>
            CopaConnect
          </Text>
        </View>

        <BarraNavegacao />
      </View>
    </Fundo>
  );
}
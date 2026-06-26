import React, { useState } from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  Envelope,
  Lock,
} from 'phosphor-react-native';

import { Fundo } from '../../components/fundo';
import { Voltar } from '../../components/voltar';
import { CardFormulario } from '../../components/card-formulario';
import { InputFormulario } from '../../components/input-formulario';
import { TextoLink } from '../../components/texto-link';
import { Botao } from '../../components/botao';

import { styles } from './style';

export default function Login({ navigation }) {

  return (
    <Fundo>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <View style={styles.container}>
        <View style={styles.voltarContainer}>
          <Voltar
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={styles.cardContainer}>
          <CardFormulario>
            <View style={styles.tituloContainer}>
              <Text style={styles.titulo}>
                Login
              </Text>
            </View>

            <View style={styles.inputsContainer}>
              <InputFormulario
                Icon={Envelope}
                placeholder="E-mail"
                keyboardType="email-address"
              />

            <InputFormulario
              Icon={Lock}
              placeholder="Senha"
              isPassword
            />
        </View>

            <View style={styles.linkContainer}>
              <TextoLink
                texto="Esqueceu a senha?"
                onPress={() => {}}
              />
            </View>

            <View style={styles.botaoContainer}>
              <Botao
                titulo="Entrar"
                onPress={() => {}}
              />
            </View>
          </CardFormulario>
        </View>
      </View>
    </Fundo>
  );
}
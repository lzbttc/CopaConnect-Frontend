import React from 'react';
import {
  StatusBar,
  View,
  Text,
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

import { NomesRotas } from '../../routes/nomes-rotas';

import { styles } from './style';

// tela responsável pela autenticação do usuário
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
            // navega de volta para a tela de boas vindas
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
                // preparado para implementar a recuperação de senha
                texto="Esqueceu a senha?"
                onPress={() => {}}
              />
            </View>

            <View style={styles.botaoContainer}>
              <Botao
                titulo="Entrar"
                // futuramente fará a autenticação junto ao backend
                onPress={() => navigation.navigate(NomesRotas.INICIO)}
              />
            </View>
          </CardFormulario>
        </View>
      </View>
    </Fundo>
  );
}
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
  Eye,
  EyeSlash,
  User,
  Phone,
} from 'phosphor-react-native';

import { Fundo } from '../../components/fundo';
import { Voltar } from '../../components/voltar';
import { CardFormulario } from '../../components/card-formulario';
import { InputFormulario } from '../../components/input-formulario';
import { TextoLink } from '../../components/texto-link';
import { Botao } from '../../components/botao';

import { styles } from './style';

export default function Cadastro({ navigation }) {
  const [senhaVisivel, setSenhaVisivel] = useState(false);

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
                Cadastro
              </Text>
            </View>

            <View style={styles.inputsContainer}>
              <InputFormulario
                Icon={User}
                placeholder="Nome"
                keyboardType="default"
              />

             <InputFormulario
                Icon={Phone}
                placeholder="Telefone"
                keyboardType="phone-pad"
              />

              <InputFormulario
                Icon={Envelope}
                placeholder="E-mail"
                keyboardType="email-address"
              />

              <InputFormulario
                Icon={Lock}
                placeholder="Senha"
                secureTextEntry={!senhaVisivel}
                RightComponent={
                  <TouchableOpacity
                    onPress={() =>
                      setSenhaVisivel(!senhaVisivel)
                    }
                  >
                    {senhaVisivel ? (
                      <EyeSlash
                        size={26}
                        color="rgba(255, 255, 255, 0.38)"
                        weight="regular"
                      />
                    ) : (
                      <Eye
                        size={26}
                        color="rgba(255, 255, 255, 0.38)"
                        weight="regular"
                      />
                    )}
                  </TouchableOpacity>
                }
              />
            </View>

            <View style={styles.botaoContainer}>
              <Botao
                titulo="Cadastrar"
                onPress={() => {}}
              />
            </View>
          </CardFormulario>
        </View>
      </View>
    </Fundo>
  );
}
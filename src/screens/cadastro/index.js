import { useTeclado } from '../../hooks/use-teclado';
import {
  StatusBar,
  View,
  Text,
} from 'react-native';

import {
  Envelope,
  Lock,
  User,
  Phone,
} from 'phosphor-react-native';

import { Fundo } from '../../components/fundo';
import { Voltar } from '../../components/voltar';
import { CardFormulario } from '../../components/card-formulario';
import { InputFormulario } from '../../components/input-formulario';
import { Botao } from '../../components/botao';

import { styles } from './style';

// tela responsável pelo cadastro de novos usuários
export default function Cadastro({ navigation }) {
  // controla os ajustes do layout enquanto o teclado estiver aberto
  const { tecladoAberto } = useTeclado();

  return (
    <Fundo>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <View style={styles.container}>
        <View
          style={[
            styles.voltarContainer,
            tecladoAberto && styles.voltarContainerTeclado,
          ]}
        >
          <Voltar
            // navega de volta para a tela de boas vindas
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={styles.cardContainer}>
          <CardFormulario>
            {/* Oculta o título para aumentar o espaço disponível ao digitar */}
            {!tecladoAberto && (
              <View style={styles.tituloContainer}>
                <Text style={styles.titulo}>
                  Cadastro
                </Text>
              </View>
            )}

            <View
              style={[
                styles.inputsContainer,
                tecladoAberto && styles.inputsContainerTeclado,
              ]}
            >
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
                isPassword
              />
            </View>

            <View
              style={[
                styles.botaoContainer,
                tecladoAberto && styles.botaoContainerTeclado,
              ]}
            >
              <Botao
                titulo="Cadastrar"
                // preparado para enviar os dados do usuário ao backend
                onPress={() => {}}
              />
            </View>
          </CardFormulario>
        </View>
      </View>
    </Fundo>
  );
}
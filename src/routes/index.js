import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BoasVindas from '../screens/boas-vindas';
import Login from '../screens/login';
import Cadastro from '../screens/cadastro';
import Inicio from '../screens/inicio';

import { NomesRotas } from './nomes-rotas';

const Stack = createNativeStackNavigator();

export function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={NomesRotas.BOAS_VINDAS}
        screenOptions={{  headerShown: false }}
      >
        <Stack.Screen name={NomesRotas.BOAS_VINDAS} component={BoasVindas} />
        <Stack.Screen name={NomesRotas.LOGIN} component={Login} />
        <Stack.Screen name={NomesRotas.CADASTRO} component={Cadastro} />
        <Stack.Screen name={NomesRotas.INICIO} component={Inicio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
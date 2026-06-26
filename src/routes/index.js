import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BoasVindas from '../screens/boas-vindas';
import Login from '../screens/login';
import Cadastro from '../screens/cadastro';

const Stack = createNativeStackNavigator();

export function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BoasVindas"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="BoasVindas" component={BoasVindas} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
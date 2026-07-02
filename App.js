import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Rotas } from './src/routes';

export default function App() {
    // carrega as fontes utilizadas em toda a aplicação
  const [fontsLoaded] = useFonts({
    Bostoncaps: require('./src/assets/fontes/bostoncaps.ttf'),
    Changa: require('./src/assets/fontes/changa.ttf'),
  });

  // aguarda o carregamento das fontes antes de renderizar a interface
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Rotas />
    </SafeAreaProvider>
  );
}
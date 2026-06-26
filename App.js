import { useFonts } from 'expo-font';

import { Rotas } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Bostoncaps: require('./src/assets/fontes/bostoncaps.ttf'),
    Changa: require('./src/assets/fontes/changa.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Rotas />;
}
import { useFonts } from 'expo-font';
import BoasVindas from './src/screens/boas-vindas';

export default function App() {
  const [fontsLoaded] = useFonts({
    Bostoncaps: require('./src/assets/fontes/bostoncaps.ttf'),
    Changa: require('./src/assets/fontes/changa.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <BoasVindas />;
}
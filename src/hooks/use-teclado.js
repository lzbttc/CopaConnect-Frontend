import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

export function useTeclado() {
  const [tecladoAberto, setTecladoAberto] = useState(false);

  useEffect(() => {
    const mostrar = Keyboard.addListener('keyboardDidShow', () => {
      setTecladoAberto(true);
    });

    const esconder = Keyboard.addListener('keyboardDidHide', () => {
      setTecladoAberto(false);
    });

    return () => {
      mostrar.remove();
      esconder.remove();
    };
  }, []);

  return { tecladoAberto };
}
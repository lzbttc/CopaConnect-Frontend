import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

export function useTeclado() {
  // controla quando o teclado está aberto para ajustar o layout das telas
  const [tecladoAberto, setTecladoAberto] = useState(false);

  useEffect(() => {
    // atualiza o estado sempre que o teclado for exibido
    const mostrar = Keyboard.addListener('keyboardDidShow', () => {
      setTecladoAberto(true);
    });

    // atualiza o estado quando o teclado for fechado
    const esconder = Keyboard.addListener('keyboardDidHide', () => {
      setTecladoAberto(false);
    });

    // remove os listeners ao desmontar o componente
    return () => {
      mostrar.remove();
      esconder.remove();
    };
  }, []);

  return { tecladoAberto };
}
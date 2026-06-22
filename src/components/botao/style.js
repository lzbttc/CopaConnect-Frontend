import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },

  botao: {
    width: '100%',
    maxWidth: 350,

    height: 60,

    backgroundColor: '#D8FF1F',

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 5,

    transform: [{ skewX: '-20deg' }],
  },

  texto: {
    fontFamily: 'Changa',
    fontSize: 18,
    fontWeight: '700',

    color: '#0A1E4D',

    transform: [{ skewX: '20deg' }],
  },
});
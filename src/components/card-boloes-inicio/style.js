import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',

    backgroundColor: 'rgba(255, 255, 255, 0.12)',

    borderRadius: 12,

    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',

    overflow: 'hidden',
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  itemEsquerda: {
    gap: 6,
  },

  itemNome: {
    fontFamily: 'Changa',
    fontSize: 20,
    color: '#FFFFFF',
  },

  palpiteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  bandeira: {
    borderRadius: 2,
  },

  itemPalpite: {
    fontFamily: 'Changa',
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.6)',
  },

  linkTexto: {
    color: '#DFFF2B',
    textDecorationLine: 'underline',
  },

  itemDireita: {
    alignItems: 'flex-end',
    gap: 2,
  },

  itemPosicao: {
    fontFamily: 'Changa',
    fontSize: 15,
    color: '#FFFFFF',
  },

  itemPontuacao: {
    fontFamily: 'Changa',
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.6)',
  },

  divisor: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    marginHorizontal: 16,
  },
});
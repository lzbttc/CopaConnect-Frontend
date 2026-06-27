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

  faseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 16,
    paddingVertical: 10,

    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },

  faseTexto: {
    fontFamily: 'Changa',
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.75)',
  },

  aoVivoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  aoVivoPonto: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#DFFF2B',
  },

  aoVivoTexto: {
    fontFamily: 'Changa',
    fontSize: 13,
    color: '#DFFF2B',
  },

  placarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  selecaoContainer: {
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },

  bandeira: {
    borderRadius: 4,
  },

  selecaoNome: {
    fontFamily: 'Changa',
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },

  golsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },

  golsTexto: {
    fontFamily: 'Changa',
    fontSize: 32,
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 2,
  },

  minutoTexto: {
    fontFamily: 'Changa',
    fontSize: 15,
    color: '#DFFF2B',
    textAlign: 'center',
  },
});
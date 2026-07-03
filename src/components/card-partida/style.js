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

    backgroundColor: 'rgba(0, 0, 0, 0.18)',

    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  faseTexto: {
    flex: 1,

    fontFamily: 'Changa',
    fontSize: 13,

    color: 'rgba(255, 255, 255, 0.75)',

    marginRight: 12,
  },

  aoVivoContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 6,
  },

  aoVivoPonto: {
    width: 8,
    height: 8,

    borderRadius: 4,

    backgroundColor: '#DFFF2B',
  },

  aoVivoTexto: {
    fontFamily: 'Changa',
    fontSize: 13,

    color: '#DFFF2B',
  },

  dataPartida: {
    fontFamily: 'Changa',
    fontSize: 13,

    color: 'rgba(255, 255, 255, 0.75)',

    textAlign: 'right',
  },

  placarContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 20,
    paddingVertical: 22,
  },

  selecaoContainer: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',

    gap: 6,
  },

  bandeira: {
    borderRadius: 4,
  },

  selecaoNome: {
    width: '100%',

    fontFamily: 'Changa',
    fontSize: 15,

    color: '#FFFFFF',

    textAlign: 'center',
  },

  golsContainer: {
    width: 90,

    justifyContent: 'center',
    alignItems: 'center',
  },

  golsTexto: {
    fontFamily: 'Changa',
    fontSize: 34,

    color: '#FFFFFF',

    textAlign: 'center',

    letterSpacing: 2,
  },
});
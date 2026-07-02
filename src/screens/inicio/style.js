import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 25,
    marginTop: 60,
  },

  logoTexto: {
    fontFamily: 'Bostoncaps',
    fontSize: 35,
    color: '#DFFF2B',
  },

  headerIcones: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  scroll: {
    flex: 1,
    marginTop: 28,
  },

  scrollConteudo: {
    paddingHorizontal: 25,
    paddingBottom: 140,
    gap: 32,
  },

  secao: {
    gap: 12,
  },

  tituloSecao: {
    fontFamily: 'Bostoncaps',
    fontSize: 20,
    color: '#FFFFFF',
  },
});
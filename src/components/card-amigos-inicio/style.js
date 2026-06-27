import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,

    backgroundColor: 'rgba(255, 255, 255, 0.12)',

    borderRadius: 12,

    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',

    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  amigoContainer: {
    alignItems: 'center',
    gap: 6,
    flex: 1,
  },

  indicadorOnline: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4CAF50',

    position: 'absolute',
    bottom: 0,
    right: 0,

  },

  amigoNome: {
    fontFamily: 'Changa',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.75)',
    textAlign: 'center',
  },

  restantes: {
    fontFamily: 'Changa',
    fontSize: 18,
    color: '#DFFF2B',
    paddingHorizontal: 4,
  },
});
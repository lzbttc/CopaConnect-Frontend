import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    paddingHorizontal: 30,
    paddingVertical: 14,

    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  item: {
    width: 32,
    height: 32,

    justifyContent: 'center',
    alignItems: 'center',
  },

  itemAtivo: {
    width: 56,
    height: 48,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 12,

    backgroundColor: '#DFFF2B',
  },
});
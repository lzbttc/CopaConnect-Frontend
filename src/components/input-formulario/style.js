import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,

    flexDirection: 'row',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.38)',

    borderRadius: 5,

    paddingHorizontal: 15,
  },

  input: {
    flex: 1,

    marginLeft: 10,

    color: '#FFFFFF',

    fontFamily: 'Changa',
    fontSize: 18,
  },
});
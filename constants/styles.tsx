import { StyleSheet } from 'react-native';

export const Colors = {
  dark: '#3D5467',
  light: '#F1EDEE',
  primary: '#8AA29E',
  background: '#FFDCCC',
  warning: '#DB5461'
};

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenWrapper: {
    backgroundColor: Colors.background,
    paddingHorizontal: 12
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
  },
  expenseHeader: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.primary,
    borderBottomColor: Colors.dark,
    borderBottomWidth: 2,
  },

});

export default GlobalStyles;

import { StyleSheet } from 'react-native';

export const Colors = {
  dark: '#3D5467',
  light: '#F1EDEE',
  primary: '#8AA29E',
  background: '#FFDCCC',
  warning: '#DB5461'
};

export const Borders = {
  radiusDefault: 10,
  radiusButton: 4,
  radiusInput: 6,
  widthDefault: 4,
  widthInput: 3,
  widthExpenseItem: 2,
};

export const Typography = {
  bodySize: 14,
  headerSize: 18,
  titleSize: 24,
};

const GlobalStyles = StyleSheet.create({
  body: {
    fontSize: Typography.bodySize,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  fullScreenContainer: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingBottom: 40,
  },
  header: {
    fontSize: Typography.headerSize,
    fontWeight: 'bold',
  },
  innerScreenWrapper: {
    backgroundColor: Colors.light,
    margin: 10,
    padding: 4,
    borderRadius: Borders.radiusDefault,
    borderWidth: Borders.widthDefault,
    borderColor: Colors.dark,
  },
  title: {
    fontSize: Typography.titleSize,
    fontWeight: 'bold',
  },
});

export default GlobalStyles;

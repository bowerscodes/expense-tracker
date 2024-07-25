// Global imports
import { StyleSheet, Text, View } from 'react-native';

// Local imports
import { ExpensesSummaryProps } from '../../types';
import GlobalStyles, { Colors, Typography } from '../../constants/styles';


const ExpensesSummary = ({ expenses, periodName }: ExpensesSummaryProps) => {

  const getPeriod = (periodName: string) => {
    if (periodName === 'all') {
      return 'All expenses';
    }
    if (periodName === 'recent') {
      return 'Last 7 days';
    }
  };

  const expensesSum = expenses.reduce((sum, expense) => {
    return (sum + expense.amount);
  }, 0);

  return (
    <View style={GlobalStyles.expenseHeader}>
      <Text style={styles.period}>{getPeriod(periodName)}</Text>
      <Text style={styles.sum}>£{expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  period: {
    fontSize: Typography.headerSize,
    fontWeight: 'bold',
    color: Colors.light,
  },
  sum: {
    fontSize: Typography.titleSize,
    fontWeight: 'bold',
    color: Colors.light,
  },
});

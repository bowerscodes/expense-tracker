// Global imports
import { StyleSheet, Text, View } from 'react-native';

// Local imports
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { Expense } from '../../types';
import { Colors } from '../../constants/styles';

interface ExpensesOutputProps {
  expenses: Array<Expense>;
  expensesPeriod: string;
  fallbackText: string;
};

const ExpensesOutput = ({ expenses, expensesPeriod, fallbackText }: ExpensesOutputProps) => {

  let content = <Text style={styles.fallbackText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View>
      <ExpensesSummary 
        expenses={expenses} 
        periodName={expensesPeriod} 
      />
      {content}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  fallbackText: {
    color: Colors.dark,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 32,
  },
});
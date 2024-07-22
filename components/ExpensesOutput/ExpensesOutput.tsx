// Global imports
import { View } from 'react-native';

// Local imports
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { Expense } from '../../types';
import { DUMMY_EXPENSES } from '../../data/dummy-expenses';
import GlobalStyles from '../../constants/styles';

interface ExpensesOutputProps {
  expenses: Array<Expense>;
  expensesPeriod: string;
};

const ExpensesOutput = ({ expenses, expensesPeriod }: ExpensesOutputProps) => {
  return (
    <View >
      <ExpensesSummary 
        expenses={expenses} 
        periodName={expensesPeriod} 
      />
      <ExpensesList
        expenses={expenses}
      />
    </View>
  );
};

export default ExpensesOutput;

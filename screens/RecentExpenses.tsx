// Global imports
import { useContext } from 'react';
import { Text, View } from 'react-native';

// Local imports
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { Expense } from '../types';
import { getDateMinusDays } from '../utils/date';
import GlobalStyles from '../constants/styles';

const RecentExpenses = () => {

  const expensesContext = useContext(ExpensesContext);

  const today = new Date();
  const date7DaysAgo = getDateMinusDays(today, 7);

  const recentExpenses = expensesContext.expenses.filter((expense: Expense) => {
    const expenseDate = new Date(expense.date);
    return (expenseDate >= date7DaysAgo) && (expenseDate <= today);
  });

  return (
    <View 
      style={GlobalStyles.fullScreenContainer}
    >
      <ExpensesOutput 
        expenses={recentExpenses} 
        expensesPeriod={'recent'}
        fallbackText={'No recent expenses to display'}
      />
    </View>
  )
};

export default RecentExpenses;

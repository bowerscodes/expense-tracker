// Global imports
import { useContext, useEffect } from 'react';
import { View } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

// Local imports
import { fetchExpenses } from '../utils/http';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { Expense } from '../types';
import { getDateMinusDays } from '../utils/date';
import GlobalStyles from '../constants/styles';

const RecentExpenses = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const expensesContext = useContext(ExpensesContext);

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      expensesContext.setExpenses(expenses);
    };

    getExpenses();
  }, []);

  const today = new Date();
  const date7DaysAgo = getDateMinusDays(today, 7);

  const recentExpenses = expensesContext.expenses.filter((expense: Expense) => {
    const expenseDate = new Date(expense.date);
    return (expenseDate >= date7DaysAgo) && (expenseDate <= today);
  });

  return (
    <View style={[GlobalStyles.fullScreenContainer, { paddingTop: 0, paddingBottom: tabBarHeight + 20 }]}>
      <ExpensesOutput 
        expenses={recentExpenses} 
        expensesPeriod={'recent'}
        fallbackText={'No recent expenses to display'}
      />
    </View>
  );
};

export default RecentExpenses;

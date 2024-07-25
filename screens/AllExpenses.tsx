// Global imports
import { useContext } from 'react';
import { View } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

// Local imports
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import GlobalStyles from '../constants/styles';

const AllExpenses = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const expensesContext = useContext(ExpensesContext);

  return (
    <View style={[GlobalStyles.fullScreenContainer, { paddingTop: 0, paddingBottom: tabBarHeight + 20 }]}>
      <ExpensesOutput
        expenses={expensesContext.expenses}
        expensesPeriod={'all'}
        fallbackText={'No expenses to display'}
      />
    </View>
  )
};

export default AllExpenses;

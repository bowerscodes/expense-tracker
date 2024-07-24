// Global imports
import { useContext } from 'react';
import { View } from 'react-native';

// Local imports
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import GlobalStyles from '../constants/styles';

const AllExpenses = () => {

  const expensesContext = useContext(ExpensesContext);

  return (
    <View style={GlobalStyles.fullScreenContainer}>
      <ExpensesOutput
        expenses={expensesContext.expenses}
        expensesPeriod={'all'}
        fallbackText={'No expenses to display'}
      />
    </View>
  )
};

export default AllExpenses;

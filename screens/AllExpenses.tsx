// Global imports
import { View } from 'react-native';

// Local imports
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { DUMMY_EXPENSES } from '../data/dummy-expenses';

const AllExpenses = () => {
  return (
    <View>
      <ExpensesOutput
        expenses={DUMMY_EXPENSES}
        expensesPeriod={'all'}
      />
    </View>
  )
};

export default AllExpenses;

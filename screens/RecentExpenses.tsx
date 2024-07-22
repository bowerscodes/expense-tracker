import { Text, View } from 'react-native';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { DUMMY_EXPENSES } from '../data/dummy-expenses';

const RecentExpenses = () => {
  return (
    <View>
      <ExpensesOutput 
        expenses={DUMMY_EXPENSES} 
        expensesPeriod={'recent'}
      />
    </View>
  )
};

export default RecentExpenses;

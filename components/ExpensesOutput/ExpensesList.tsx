// Global imports
import { FlatList, View } from 'react-native';

// Local imports
import { Expense } from '../../types';
import ExpenseItem from './ExpenseItem';
import GlobalStyles, { Colors } from '../../constants/styles';

interface ExpensesListProps {
  expenses: Array<Expense>;
};

const renderExpenseItem = (itemData: any) => {
  return (
    <ExpenseItem {...itemData.item} />
  );
};

const ExpensesList: React.FC<ExpensesListProps> = ({ expenses }) => {
  return (
    <View style={GlobalStyles.innerScreenWrapper}>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExpensesList;

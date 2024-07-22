// Global imports
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

// Local imports
import { DUMMY_EXPENSES } from '../../data/dummy-expenses';
import { Expense } from '../../types';
import ExpenseItem from './ExpenseItem';
import GlobalStyles, { Colors } from '../../constants/styles';


const renderExpenseItem = (itemData: any) => {
  return (
    <ExpenseItem {...itemData.item} />
  );
};

const ExpensesList = ({expenses}: any) => {
  return (
    <View style={GlobalStyles.screenWrapper}>
      <FlatList
        data={DUMMY_EXPENSES}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExpensesList;


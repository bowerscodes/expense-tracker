// Global imports
import { Pressable, StyleSheet, Text, View } from 'react-native';

// Local imports
import GlobalStyles, { Colors } from '../../constants/styles';
import { Expense } from '../../types';
import { getFormattedDate } from '../../utils/date';

const ExpenseItem = ({ description, amount, date}: Expense) => {
  return (
    <Pressable>
      <View style={[styles.expenseCard]}>
        <View style={styles.detailsContainer}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.date}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>£{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    padding: 5,
  },
  expenseCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderBottomColor: Colors.dark,
    borderRightColor: Colors.dark,
    borderLeftColor: Colors.light,
    borderTopColor: Colors.light,
    borderWidth: 2,
    borderRadius: 10,
    maxHeight: 80,
    padding: 5,
    margin: 6,
  },
  description: {
    fontSize: 16,
    fontWeight: '500', 
    color: Colors.dark,
  },
  date: {
    fontSize: 12,
    color: Colors.dark,
    fontWeight: '600', 
  },
  amountContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.light,
    // padding: 5,
    height: '90%',
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderBottomColor: Colors.dark,
    borderRightColor: Colors.dark,
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
  amount: {
    fontSize: 16,
    fontWeight: '900',
    color: Colors.dark,
  },
});

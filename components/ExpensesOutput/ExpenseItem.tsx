// Global imports
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Local imports
import { Borders, Colors, Typography } from '../../constants/styles';
import { Expense } from '../../types';
import { getFormattedDate } from '../../utils/date';
import { ManageExpenseNavigationProp } from '../../types';


const ExpenseItem = ({ id, description, amount, date }: Expense) => {

  const navigation = useNavigation<ManageExpenseNavigationProp>();

  const expensePressHandler = () => {
    navigation.navigate('ManageExpense', {
      expenseId: id
    });
  };

  return (
    <Pressable 
      onPress={expensePressHandler} 
      style={({ pressed }) => pressed && styles.pressed}
    >
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
  pressed: {
    opacity: 0.75,
  },
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
    borderWidth: Borders.widthExpenseItem,
    borderRadius: Borders.radiusDefault,
    maxHeight: 80,
    padding: 5,
    margin: 6,
  },
  description: {
    fontSize: Typography.headerSize,
    fontWeight: '600', 
    color: Colors.light,
  },
  date: {
    fontSize: Typography.bodySize,
    color: Colors.light,
    fontWeight: '600', 
  },
  amountContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.light,
    height: '90%',
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Borders.radiusDefault,
    borderBottomColor: Colors.dark,
    borderRightColor: Colors.dark,
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
  amount: {
    fontSize: Typography.headerSize,
    fontWeight: '900',
    color: Colors.dark,
  },
});

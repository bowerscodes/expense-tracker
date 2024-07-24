// Global imports
import { StyleSheet, View } from 'react-native';
import { useContext, useLayoutEffect } from 'react';

// Local imports
import { 
  ManageExpenseRouteProp, 
  ManageExpenseNavigationProp 
} from '../types';
import GlobalStyles, { Colors } from '../constants/styles';
import IconButton from '../components/ui/IconButton';
import Button from '../components/ui/Button';
import { ExpensesContext } from '../store/expenses-context';


const ManageExpense = ({ 
  route, 
  navigation 
}: {
  route: ManageExpenseRouteProp, 
  navigation: ManageExpenseNavigationProp
}) => {

  const expensesContext = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  }, [navigation, isEditing]);


  const deleteExpenseHandler = (id: string) => {
    expensesContext.deleteExpense(id);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    if (isEditing) {
      expensesContext.updateExpense(editedExpenseId,{
        id: editedExpenseId,
        description: 'test!!!!',
        amount: 1000,
        date: new Date(2024, 1, 1),
      });
    }
    else {
      expensesContext.addExpense({
        id:'testId', 
        description: 'test', 
        amount: 100, 
        date: new Date(2024, 1, 1)
      });
    }
    navigation.goBack();
  };


  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode='flat' onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon='trash-outline'
            color={Colors.warning}
            size={36}
            onPress={() => deleteExpenseHandler(editedExpenseId)}
          />
        </View>
      )}
    </View>
  )
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.light,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.primary,
    alignItems: 'center',
  },
});

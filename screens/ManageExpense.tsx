// Global imports
import { StyleSheet, View } from 'react-native';
import { useContext, useLayoutEffect } from 'react';

// Local imports
import { 
  ExpenseData,
  ManageExpenseRouteProp, 
  ManageExpenseNavigationProp 
} from '../types';
import GlobalStyles, { Borders, Colors } from '../constants/styles';
import IconButton from '../components/ui/IconButton';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
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

  const confirmHandler = (expenseData: ExpenseData) => {
    if (isEditing) {
      expensesContext.updateExpense(editedExpenseId, expenseData);
    }
    else {
      expensesContext.addExpense(expenseData);
    }
    navigation.goBack();
  };


  return (
    <View style={GlobalStyles.fullScreenContainer}>
      <View style={styles.container}>
        <ExpenseForm 
          submitButtonLabel={isEditing ? 'Update' : 'Add'} 
          onSubmit={confirmHandler}
          onCancel={cancelHandler} 
        />
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
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    margin: 12,
    padding: 24,
    backgroundColor: Colors.light,
    borderRadius: Borders.radiusDefault,
    borderWidth: Borders.widthDefault,
    borderColor: Colors.dark,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.primary,
    alignItems: 'center',
  },
});

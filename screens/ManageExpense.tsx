// Global imports
import { StyleSheet, View } from 'react-native';
import { useContext, useState, useLayoutEffect } from 'react';

// Local imports
import { 
  Expense, 
  ExpenseData,
  ManageExpenseRouteProp, 
  ManageExpenseNavigationProp 
} from '../types';
import GlobalStyles, { Borders, Colors } from '../constants/styles';
import IconButton from '../components/ui/IconButton';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import { ExpensesContext } from '../store/expenses-context';
import { storeExpense, updateExpense, deleteExpense } from '../utils/http';
import ErrorOverlay from '../components/ui/ErrorOverlay';
import LoadingOverlay from '../components/ui/LoadingOverlay';


const ManageExpense = ({ 
  route, 
  navigation 
}: {
  route: ManageExpenseRouteProp, 
  navigation: ManageExpenseNavigationProp
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const expensesContext = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesContext.expenses.find(
    expense => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  }, [navigation, isEditing]);


  const deleteExpenseHandler = async (editedExpenseId: string) => {
    setIsSubmitting(true);
    try {
      await deleteExpense(editedExpenseId);
      expensesContext.deleteExpense(editedExpenseId);
      navigation.goBack();
    }
    catch (error) {
      setError('Could not delete expense');
      setIsSubmitting(false);
    }
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (expenseData: ExpenseData) => {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        expensesContext.updateExpense(editedExpenseId, expenseData);
        await updateExpense(editedExpenseId, expenseData);
      }
      else {
        const id = await storeExpense(expenseData);
        expensesContext.addExpense({...expenseData, id: id});
      }
      navigation.goBack();
    }
    catch (error) {
      setError('Could not save expense');
      setIsSubmitting(false);
    }
  };

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  };

  if (isSubmitting) {
    return <LoadingOverlay />;
  };


  return (
    <View style={GlobalStyles.fullScreenContainer}>
      <View style={styles.container}>
        <ExpenseForm 
          submitButtonLabel={isEditing ? 'Update' : 'Add'} 
          onSubmit={confirmHandler}
          onCancel={cancelHandler} 
          defaultValues={selectedExpense}
        />
        {isEditing && (
          <View style={styles.deleteContainer}>
            <IconButton
              icon='trash-outline'
              color={Colors.alert}
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

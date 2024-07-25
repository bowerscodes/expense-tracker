// Global imports
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Local imports
import Input from './Input';
import Button from '../../components/ui/Button';
import { ExpenseData } from '../../types';
import { Colors, Typography } from '../../constants/styles';

interface ExpenseFormProps {
  submitButtonLabel: string;
  onCancel: () => void;
  onSubmit: (expenseData: ExpenseData) => void;
};

const ExpenseForm = ({ submitButtonLabel, onCancel, onSubmit }: ExpenseFormProps) => {
  
  const [ inputValues, setInputValues ] = useState({
    amount: '',
    date: '',
    description: '',
  });
  
  const inputChangedHandler = (inputIdentifier: string, enteredValue: string) => {
    setInputValues((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  };


  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description
    };

    onSubmit(expenseData);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Expense Details</Text>
      <View style={styles.inputsrow}>
        <Input 
          label='Amount' 
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputValues.amount,
          }}
        />
        <Input 
          label='Date' 
          style={styles.rowInput}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputValues.date,
          }}
        />
      </View>
      <Input 
        label='Description' 
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputValues.description,
        }}
      />
        <View style={styles.buttonContainer}>
          <Button style={styles.button} mode='flat' onPress={onCancel}>
            Cancel
          </Button>
          <Button style={styles.button} onPress={submitHandler}>
            {submitButtonLabel}
          </Button>
        </View>
    </View>
  )
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 20,
  },
  title: {
    fontSize: Typography.titleSize,
    fontWeight: 'bold',
    color: Colors.dark,
    textAlign: 'center',
    marginVertical: 24,
  },
  inputsrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});

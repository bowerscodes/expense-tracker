// Global imports
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Local imports
import Input from './Input';
import Button from '../../components/ui/Button';
import { ExpenseData } from '../../types';
import { Colors, Typography } from '../../constants/styles';
import { getFormattedDate } from '@/utils/date';

interface ExpenseFormProps {
  submitButtonLabel: string;
  onCancel: () => void;
  onSubmit: (expenseData: ExpenseData) => void;
  defaultValues?: ExpenseData;
};

const ExpenseForm = ({ submitButtonLabel, onCancel, onSubmit, defaultValues }: ExpenseFormProps) => {
  
  const [ inputs, setInputs ] = useState({
    amount: { 
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true,
    },
    date: { 
      value: defaultValues ? getFormattedDate(defaultValues.date) : '',
      isValid: true,
    },
    description: { 
      value: defaultValues ? defaultValues.description : '', 
      isValid: true,
    },
  });
  
  const inputChangedHandler = (inputIdentifier: string, enteredValue: string) => {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true},
      };
    });
  };

  const submitHandler = () => {
    console.log('Submit handler called');
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value
    };

    console.log('Expense Data:', expenseData);

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    console.log('Validation:', { amountIsValid, dateIsValid, descriptionIsValid });

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((currentInputs) => {
        return {
          amount: { value: currentInputs.amount.value, isValid: amountIsValid },
          date: { value: currentInputs.date.value, isValid: dateIsValid },
          description: { value: currentInputs.description.value, isValid: descriptionIsValid },
        }
      })
      return;
    };

    onSubmit(expenseData);
  };

  const formIsInvalid = 
    !inputs.amount.isValid || 
    !inputs.date.isValid || 
    !inputs.description.isValid;


  return (
    <View style={styles.form}>
      <Text style={styles.title}>Expense Details</Text>
      <View style={styles.inputsrow}>
        <Input 
          label='Amount'
          isValid={inputs.amount.isValid} 
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputs.amount.value,
          }}
        />
        <Input 
          label='Date' 
          isValid={inputs.date.isValid} 
          style={styles.rowInput}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input 
        label='Description' 
        isValid={inputs.description.isValid} 
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputs.description.value,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid value entered - please check and try again.
        </Text>
      )}
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
  errorText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.alert,
    margin: 8
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

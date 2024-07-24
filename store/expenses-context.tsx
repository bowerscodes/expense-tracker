// Global imports
import { createContext, useReducer, ReactNode } from 'react';

// Local imports
import { Expense } from '../types';
import { DUMMY_EXPENSES } from '../data/dummy-expenses';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: (expense: Expense) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (id: string, expense: Expense) => {},
});

const expensesReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

    case 'UPDATE':
      const updatedExpenseIndex = state.findIndex(
        (expense: Expense) => expense.id === action.payload.id
      );
      const expenseToUpdate = state[updatedExpenseIndex];
      const updatedExpense = { ...expenseToUpdate, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatedExpenseIndex] = updatedExpense;
      return updatedExpenses;

    case 'DELETE':
      return state.filter((expense: Expense) => expense.id !== action.payload);

    default:
      return state;
  }
};

interface ExpensesContextProviderProps {
  children: ReactNode;
};


const ExpensesContextProvider: React.FC<ExpensesContextProviderProps> = ({ children }) => {
  const [ expensesState, dispatch ] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expense: Expense) => {
    dispatch({ type: 'ADD', payload: expense }); 
  };

  const deleteExpense = (id: string) => {
    dispatch({ type: 'DELETE', payload: id }); 
  };

  const updateExpense = (id: string, expense: Expense) => {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expense } }); 
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  )
};

export default ExpensesContextProvider;
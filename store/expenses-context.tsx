// Global imports
import { createContext, useReducer, ReactNode } from 'react';

// Local imports
import { Expense, ExpenseData } from '../types';
import { DUMMY_EXPENSES } from '../data/dummy-expenses';

interface ExpensesContextType {
  expenses: Array<Expense>;
  addExpense: (expense: Expense | ExpenseData) => void;
  setExpenses: (expenses: Array<Expense>) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, expense: ExpenseData) => void;
};

export const ExpensesContext = createContext<ExpensesContextType>({
  expenses: [],
  addExpense: (expense: ExpenseData) => {},
  setExpenses: (expenses: Array<Expense>) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (id: string, expense: ExpenseData) => {},
});

const expensesReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD':
    return [{ ...action.payload }, ...state];

    case 'SET':
      const inverted = action.payload.reverse();
      return inverted;

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
  const [ expensesState, dispatch ] = useReducer(expensesReducer, []);

  const addExpense = (expense: ExpenseData) => {
    dispatch({ type: 'ADD', payload: expense }); 
  };

  const setExpenses = (expenses: Array<Expense>) => {
    dispatch({ type: 'SET', payload: expenses });
  }

  const deleteExpense = (id: string) => {
    dispatch({ type: 'DELETE', payload: id }); 
  };

  const updateExpense = (id: string, expense: ExpenseData) => {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expense } }); 
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    setExpenses: setExpenses,
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

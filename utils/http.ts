// Global imports
import axios from 'axios';

// Local imports
import { ExpenseData } from '../types';

const BACKEND_URL = 'https://expenses-app-react-nativ-1703d-default-rtdb.europe-west1.firebasedatabase.app';

export const storeExpense = async (expenseData: ExpenseData) => {
  const response = await axios.post(BACKEND_URL + '/expenses.json', expenseData);
  const id = response.data.name;

  return id;
};

export const fetchExpenses = async () => {
  const response = await axios.get(BACKEND_URL + '/expenses.json');

  const expenses = [];

  for (const key in response.data) {
    const expenseObject = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObject);
  };

  return expenses;
};

export const updateExpense = (id: string, expenseData: ExpenseData) => {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
};

export const deleteExpense = (id: string) => {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
};

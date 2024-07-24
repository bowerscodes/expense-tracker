import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
export interface Expense {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

export interface ExpensesSummaryProps {
  expenses: Array<Expense>;
  periodName: string;
};


// Navigation

export type RootStackParamList = {
  ExpensesOverview: undefined;
  ManageExpense: { 
    expenseId?: string; 
  };
};

export type ManageExpenseNavigationProp = StackNavigationProp<RootStackParamList, 'ManageExpense'>;

export type ManageExpenseRouteProp = RouteProp<RootStackParamList, 'ManageExpense'>;

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

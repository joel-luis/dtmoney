/* eslint-disable no-undef */
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react';
import { api } from '../components/services/api';

interface Transactions {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>;

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transactions[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTrasactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api
      .get('/transactions')
      .then(response => setTrasactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;
    setTrasactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}

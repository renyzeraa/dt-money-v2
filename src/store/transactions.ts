import type { Transaction } from '@/@types/global'
import { create } from 'zustand'

interface TransactionStore {
  transactions: Transaction[]
  setTransactions: (transactions: Transaction[]) => void
  fetchTransactions: (query?: string) => Promise<void>
}

export const useTransactionStore = create<TransactionStore>((set, get) => ({
  transactions: [],
  setTransactions: (transactions) => {
    set({ transactions })
  },
  fetchTransactions: async (query) => {
    const { setTransactions } = get()

    const url = new URL('http://localhost:3333/transactions');

    if (query) {
      url.searchParams.append('q', query);
    }

    await fetch(url)
      .then(response => response.json())
      .then(data => setTransactions(data))
  }
}))
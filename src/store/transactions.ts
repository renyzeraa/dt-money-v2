import type { Transaction } from '@/@types/global'
import { api } from '@/lib/api'
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

    const response = await api.get('transactions', {
      params: {
        q: query,
      }
    })

    setTransactions(response.data)
  }
}))
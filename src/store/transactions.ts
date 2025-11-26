import type { Transaction } from '@/@types/global'
import { api } from '@/lib/api'
import { create } from 'zustand'

type CreateTransactionsInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionStore {
  transactions: Transaction[]
  setTransactions: (transactions: Transaction[]) => void
  fetchTransactions: (query?: string) => Promise<void>
  createTransactions: (data: CreateTransactionsInput) => Promise<void>
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
        _sort: 'createdAt',
        _order: 'desc'
      }
    })

    setTransactions(response.data)
  },

  createTransactions: async (data) => {
    const { setTransactions } = get()
    const { category, description, price, type } = data

    const response = await api.post('transactions', {
      category,
      description,
      price,
      type,
      createdAt: (new Date()).toISOString()
    })

    setTransactions(response.data)
  }
}))
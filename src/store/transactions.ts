import type { Transaction } from '@/@types/global'
import { create } from 'zustand'

interface TransactionStore {
  transactions: Transaction[]
  setTransactions: (transactions: Transaction[]) => void
}

export const useTransactionStore = create<TransactionStore>((set) => ({
  transactions: [],
  setTransactions: (transactions) => {
    set({ transactions })
  }
}))
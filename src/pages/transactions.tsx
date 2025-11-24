import { useEffect } from "react";
import { Header } from "../components/header";
import { SearchForm } from "../components/search-form";
import { Summary } from "../components/summary";
import { cn } from "@/lib/utils";
import { useTransactionStore } from "@/state/transactions";
import { useShallow } from "zustand/shallow";

export function Transactions() {
    const { transactions, setTransactions } = useTransactionStore(useShallow(state => ({
        setTransactions: state.setTransactions,
        transactions: state.transactions
    })))

    useEffect(() => {
        if (!transactions.length) {
            fetch('http://localhost:3333/transactions')
                .then(response => response.json())
                .then(data => setTransactions(data))
        }

    }, [transactions, setTransactions])

    return (
        <div>
            <Header />
            <Summary />
            <main className="max-w-container w-full mx-auto mt-16 px-6">
                <SearchForm />

                <table className="w-full border-separate border-spacing-y-2 mt-6">
                    <tbody>
                        {transactions.map(({ category, createdAt, description, price, type }) => (
                            <tr key={createdAt}>
                                <td className="py-5 px-8 bg-gray-700 border-solid rounded-tl-md rounded-bl-md" width="50%">{description}</td>
                                <td className={cn("py-5 px-8 bg-gray-700 border-solid", type === 'income' ? 'text-green-300' : 'text-red-300')}>{price}</td>
                                <td className="py-5 px-8 bg-gray-700 border-solid">{category}</td>
                                <td className="py-5 px-8 bg-gray-700 border-solid rounded-tr-md rounded-br-md">{createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    )
}
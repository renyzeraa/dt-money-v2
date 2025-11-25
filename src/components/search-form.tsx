import { MagnifyingGlass } from "phosphor-react"
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransactionStore } from "@/store/transactions";
import { useShallow } from "zustand/shallow";

const searchFormSchema = z.object({
    query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
    const { fetchTransactions } = useTransactionStore(useShallow(state => ({
        fetchTransactions: state.fetchTransactions,
    })))

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    });

    async function handleSearchTransactions(data: SearchFormInputs) {
        await fetchTransactions(data.query)
    }

    return (
        <form className="flex gap-4" onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder="Busque por transações"
                className="flex-1 rounded-md border-none bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
                {...register('query')}
            />
            <button
                type="submit"
                className="flex items-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-transparent disabled:hover:border-green-300 disabled:hover:text-green-300 gap-3 p-4 bg-transparent border border-solid border-green-300 text-green-300 font-bold rounded-md hover:bg-green-500 hover:border-green-500 hover:text-white hover:transition-colors"
                disabled={isSubmitting}
            >
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </form>
    )
}
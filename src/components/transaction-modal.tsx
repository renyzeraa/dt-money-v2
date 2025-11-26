import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useTransactionStore } from '@/store/transactions'
import { useShallow } from 'zustand/shallow'

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function TransactionModal() {
    const { createTransactions } = useTransactionStore(useShallow(state => ({
        createTransactions: state.createTransactions
    })))

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
        control,
        reset
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income'
        }
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        createTransactions(data)
        reset()
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    type='button'
                    className='h-[50px] border-none bg-green-500 text-white font-bold px-5 rounded-md cursor-pointer hover:bg-green-700 transition-colors'
                >
                    Nova transação
                </button>
            </DialogTrigger>
            <DialogContent className='bg-gray-800 border-gray-800 shadow-none min-w-[32rem]'>
                <DialogHeader>
                    <DialogTitle>Nova transação</DialogTitle>
                </DialogHeader>

                <form className='mt-8 flex flex-col gap-4' onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        type="text"
                        className='rounded-md border-none bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500'
                        placeholder='Descrição'
                        required
                        {...register('description')}
                    />

                    <input
                        type="number"
                        className='rounded-md border-none bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500'
                        placeholder='Preço'
                        required
                        {...register('price', { valueAsNumber: true })}
                    />

                    <input
                        type="text"
                        className='rounded-md border-none bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500'
                        placeholder='Categoria'
                        required
                        {...register('category')}
                    />

                    <Controller
                        control={control}
                        name='type'
                        render={({ field }) => {
                            return (
                                <ToggleGroup type="single" className='gap-4' onValueChange={field.onChange} value={field.value}>
                                    <ToggleGroupItem value="income" asChild className='bg-gray-700 group hover:text-gray-100 hover:bg-gray-600 data-[state="on"]:!bg-green-500 data-[state="on"]:!text-gray-100'>
                                        <button className='flex items-center w-full justify-center gap-2 h-[58px] border-none group-data-[state="on"]:text-white font-bold p-4 transition-colors cursor-pointer rounded-md mt-6'>
                                            <ArrowCircleUp size={24} className='text-green-300 group-data-[state="on"]:text-white' /> Entrada
                                        </button>
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="outcome" asChild className='bg-gray-700 group hover:text-gray-100 hover:bg-gray-600 data-[state="on"]:!bg-red-500 data-[state="on"]:!text-gray-100'>
                                        <button className='flex items-center w-full justify-center gap-2 group-data-[state="on"]:text-white h-[58px] border-none font-bold p-4 transition-colors cursor-pointer rounded-md mt-6'>
                                            <ArrowCircleDown size={24} className='text-red-300 group-data-[state="on"]:text-white' /> Saída
                                        </button>
                                    </ToggleGroupItem>
                                </ToggleGroup>
                            )
                        }}
                    />

                    <button type='submit' disabled={isSubmitting} className='disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-green-500 h-[58px] border-none bg-green-500 text-white font-bold px-5 hover:bg-green-700 transition-colors cursor-pointer rounded-md mt-6'>Cadastrar</button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
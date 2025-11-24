import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group'

export function TransactionModal() {
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

                <form action="" className='mt-8 flex flex-col gap-4'>
                    <input type="text" className='rounded-md border-none bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500' placeholder='Descrição' required />
                    <input type="number" className='rounded-md border-none bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500' placeholder='Preço' required />
                    <input type="text" className='rounded-md border-none bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500' placeholder='Categoria' required />

                    <ToggleGroup type="single" className='gap-4'>
                        <ToggleGroupItem value="income" asChild className='bg-gray-700 group hover:text-gray-100 hover:bg-gray-600 data-[state="on"]:bg-green-500 data-[state="on"]:text-gray-100'>
                            <button className='flex items-center w-full justify-center gap-2 h-[58px] border-none font-bold p-4 transition-colors cursor-pointer rounded-md mt-6'>
                                <ArrowCircleUp size={24} className='text-green-300 group-data-[state="on"]:text-white' /> Entrada
                            </button>
                        </ToggleGroupItem>
                        <ToggleGroupItem value="outcome" asChild className='bg-gray-700 group hover:text-gray-100 hover:bg-gray-600 data-[state="on"]:bg-red-500 data-[state="on"]:text-gray-100'>
                            <button className='flex items-center w-full justify-center gap-2 h-[58px] border-none font-bold p-4 transition-colors cursor-pointer rounded-md mt-6'>
                                <ArrowCircleDown size={24} className='text-red-300 group-data-[state="on"]:text-white' /> Saída
                            </button>
                        </ToggleGroupItem>
                    </ToggleGroup>

                    <button className='h-[58px] border-none bg-green-500 text-white font-bold px-5 hover:bg-green-700 transition-colors cursor-pointer rounded-md mt-6' type='submit'>Cadastrar</button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
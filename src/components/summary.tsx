import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

export function Summary() {
    return (
        <section className="max-w-container w-full mx-auto px-6 grid grid-cols-3 gap-8 mt-[-5rem] [&>div:last-child]:bg-green-700">
            <div className="bg-gray-600 rounded-md p-8">
                <header className="flex justify-between text-gray-300 items-center">
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} className="text-green-500" />
                </header>
                <strong className="block mt-4 text-[2rem]">R$ 17.400,00</strong>
            </div>
            <div className="bg-gray-600 rounded-md p-8">
                <header className="flex justify-between text-gray-300 items-center">
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} className="text-red-500" />
                </header>
                <strong className="block mt-4 text-[2rem]">R$ 2.400,00</strong>
            </div>
            <div className="bg-gray-600 rounded-md p-8">
                <header className="flex justify-between text-gray-300 items-center">
                    <span>Total</span>
                    <CurrencyDollar size={32} className="text-white" />
                </header>
                <strong className="mt-4 text-[2rem] block">R$ 17.400,00</strong>
            </div>
        </section>
    )
}
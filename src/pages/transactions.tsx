import { Header } from "../components/header";
import { Summary } from "../components/summary";

export function Transactions() {

    return (
        <div>
            <Header />
            <Summary />
            <main className="max-w-container w-full mx-auto mt-16 px-6">
                <table className="w-full border-separate border-spacing-y-2 mt-6">
                    <tbody>
                        <tr>
                            <td className="py-5 px-8 bg-gray-700 border-solid rounded-tl-md rounded-bl-md" width="50%">Desenvolvimento de site</td>
                            <td className="py-5 px-8 bg-gray-700 border-solid text-green-300">R$ 12.000,00</td>
                            <td className="py-5 px-8 bg-gray-700 border-solid">Venda</td>
                            <td className="py-5 px-8 bg-gray-700 border-solid rounded-tr-md rounded-br-md">13/04/2022</td>
                        </tr>
                        <tr>
                            <td className="py-5 px-8 bg-gray-700 border-solid rounded-tl-md rounded-bl-md" width="50%">Cadeira de escritório</td>
                            <td className="py-5 px-8 bg-gray-700 border-solid text-red-300">- R$ 1.000,00</td>
                            <td className="py-5 px-8 bg-gray-700 border-solid">Equipamentos</td>
                            <td className="py-5 px-8 bg-gray-700 border-solid rounded-tr-md rounded-br-md">10/04/2022</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    )
}
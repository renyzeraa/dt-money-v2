import logoImg from '../assets/logo.svg'
import { TransactionModal } from './transaction-modal'


export function Header() {
    return (
        <header className="bg-gray-900 pt-10 pb-[7.5rem]">
            <div className="max-w-container mx-auto w-full px-6 flex justify-between items-center">
                <img src={logoImg} alt="imagem de triangulo verde com nome ao lado dt money v2" />
                <TransactionModal />
            </div>
        </header>
    )
}
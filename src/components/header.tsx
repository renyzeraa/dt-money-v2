import logoImg from '../assets/logo.svg'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'

export function Header() {
    return (
        <header className="bg-gray-900 pt-10 pb-[7.5rem]">
            <div className="max-w-container mx-auto w-full px-6 flex justify-between items-center">
                <img src={logoImg} alt="imagem de triangulo verde com nome ao lado dt money v2" />
                <Dialog>
                    <DialogTrigger asChild><button type='button' className='h-[50px] border-none bg-green-500 text-white font-bold px-5 rounded-md cursor-pointer hover:bg-green-700 transition-colors'>Nova transação</button></DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </header>
    )
}
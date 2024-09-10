'use client'

import { useState } from 'react'
import { Button } from '@repo/ui/components/ui/button'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { RestrictedAccessModal } from '../RestrictedAccessModal/RestrictedAccessModal'


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isModalOpen, setModalOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <header className="bg-brandAccent shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Link href={'/'}>
                        <Image
                            src={'/logo-no-background.png'}
                            alt="logo"
                            priority
                            width={200}
                            height={200}
                        />
                    </Link>
                </div>
                <nav className="hidden md:flex space-x-12 text-2xl">
                    <Link href="/" className="hover:text-brandSecondary">
                        Home
                    </Link>
                        <Link href="" className="hover:text-brandSecondary" onClick={() => setModalOpen(true)}>
                            Chat
                        </Link>
                    <Link href="/profiles" className="hover:text-brandSecondary">
                        Profile
                    </Link>
                    <Link href="" className="hover:text-brandSecondary" onClick={() => setModalOpen(true)}>
                        Kontakt
                    </Link>
                </nav>
                <div className="md:hidden">
                    <Button onClick={toggleMenu} variant="ghost" size="icon">
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>
                </div>
                <div className="hidden md:flex space-x-2">
                <Link href="https://deal-on.eu/p/ZReg/e7Da/nj7f">
                            <Button className="text-xl bg-brandBackground hover:text-brandSecondary">
                                Rejestracja
                            </Button>
                            </Link>
                    <Link href="https://deal-on.eu/p/ZReg/e7Da/nj7f">
                                <Button className="text-xl bg-brandBackground hover:text-brandSecondary">
                                    Logowanie
                                </Button>
                            </Link>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <nav className="flex flex-col items-center space-y-4 py-4 text-3xl">
                        <Link href="/" className="hover:text-brandSecondary">
                            Home
                        </Link>
                        <Link href="/chat" className="hover:text-brandSecondary">
                            Chat
                        </Link>
                        <Link href="/profiles" className="hover:text-brandSecondary">
                            Profile
                        </Link>
                        <Link href="/contact" className="hover:text-brandSecondary">
                            Kontakt
                        </Link>
                        <div className="flex space-x-2 mt-4">
                        <Link href="https://deal-on.eu/p/ZReg/e7Da/nj7f">
                            <Button className="text-xl bg-brandBackground hover:text-brandSecondary">
                                Rejestracja
                            </Button>
                            </Link>
                            <Link href="https://deal-on.eu/p/ZReg/e7Da/nj7f">
                                <Button className="text-xl bg-brandBackground hover:text-brandSecondary">
                                    Logowanie
                                </Button>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
            <RestrictedAccessModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>
        </header>
    )
}

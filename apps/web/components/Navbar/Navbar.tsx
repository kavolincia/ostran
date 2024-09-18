'use client'

import { useState } from 'react'
import { Button } from '@repo/ui/components/ui/button'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { RestrictedAccessModal } from '../RestrictedAccessModal/RestrictedAccessModal'
import { MAIN_LEAD_URL } from '~/constants/urls'
import { cn } from '@repo/ui/lib/utils'

interface INavLink {
    href: string
    label: string
    modal?: boolean
    className?: string
}

const navLinks: INavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/profiles', label: 'Profile' },
    // { href: '/blog', label: 'Blog' },
    { href: '', label: 'Kamerki', modal: true },
    { href: '', label: 'Chat', modal: true },
    {
        href: '',
        label: 'AI-Finder',
        modal: true,
        className: 'text-xl text-brandSecondary hover:text-brandBackground',
    },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isModalOpen, setModalOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)

    const renderLinks = () =>
        navLinks.map(({ href, label, modal, className }) => (
            <Link
                key={label}
                href={href}
                className={cn(
                    'hover:text-brandSecondary transition duration-300',
                    className
                )}
                onClick={modal ? () => setModalOpen(true) : undefined}
            >
                {label}
            </Link>
        ))

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
                <nav className="hidden md:flex space-x-12 text-xl">
                    {renderLinks()}
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
                    <Link href={MAIN_LEAD_URL}>
                        <Button className="text-xl bg-brandBackground hover:text-brandSecondary">
                            Rejestracja
                        </Button>
                    </Link>
                    <Link href={MAIN_LEAD_URL}>
                        <Button className="text-xl bg-brandBackground hover:text-brandSecondary">
                            Logowanie
                        </Button>
                    </Link>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <nav className="flex flex-col items-center space-y-4 py-4 text-3xl">
                        {renderLinks()}
                        <div className="flex space-x-2 mt-4">
                            <Link href={MAIN_LEAD_URL}>
                                <Button className="text-xl bg-brandBackground hover:text-brandSecondary">
                                    Rejestracja
                                </Button>
                            </Link>
                            <Link href={MAIN_LEAD_URL}>
                                <Button className="text-xl bg-brandBackground hover:text-brandSecondary">
                                    Logowanie
                                </Button>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
            <RestrictedAccessModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
        </header>
    )
}

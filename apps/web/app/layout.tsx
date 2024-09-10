import '@repo/ui/globals.css'
import type { Metadata } from 'next'
import { Amatic_SC, Caveat_Brush, Inter, Quicksand } from 'next/font/google'
import { cn } from '@repo/ui/lib/utils'
import Navbar from '~/components/Navbar/Navbar'

const font = Caveat_Brush({ weight: '400', subsets: ['latin-ext'] })
// const inter = Inter({ subsets: ['latin'] })
const amaticSC = Amatic_SC({
    subsets: ['latin'],
    weight: ['400', '700'],
  })

  const quicksand = Quicksand({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
  })

export const metadata: Metadata = {
    title: 'Ostre-Randki.pl',
    description: 'Odkryj magię prawdziwej miłości w świecie pełnym możliwości. Twoja wyjątkowa historia czeka, by ją napisać.',
    keywords: ["dating", "randki", "druga połówka", "seks", "chatting", "randkowanie"]
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}): JSX.Element {
    return (
        <html lang="en">
            <body className={cn(quicksand.className)}>
                <div className="min-h-screen bg-brandAccent text-brandPrimary">
                    <Navbar />
                    <main className="mx-auto">{children}</main>
                    <footer className="py-16 bg-gradient-to-r from-brandBackground to-brandSecondary">
                        <div className="container mx-auto px-4 text-center">
                            © 2024 Ostre-Randki.pl - All rights reserved.
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    )
}

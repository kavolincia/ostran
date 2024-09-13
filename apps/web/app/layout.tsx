import '@repo/ui/globals.css'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import { cn } from '@repo/ui/lib/utils'
import Navbar from '~/components/Navbar/Navbar'
import { Toaster } from '@repo/ui/components/ui/toaster'
import GoogleAnalytics from '~/components/GA4/GA4'

const quicksand = Quicksand({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
    title: 'Ostre-Randki.pl',
    description:
        'Odkryj magię prawdziwej miłości w świecie pełnym możliwości. Twoja wyjątkowa historia czeka, by ją napisać.',
    keywords: [
        'dating',
        'randki',
        'druga połówka',
        'seks',
        'chatting',
        'randkowanie',
        'randki online'
    ],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}): JSX.Element {
    return (
        <html lang="en">
            <GoogleAnalytics />
            <body className={cn(quicksand.className)}>
                <div className="min-h-screen bg-brandAccent text-brandPrimary">
                    <Navbar />
                    <main className="mx-auto">{children}</main>
                </div>
                <Toaster />
            </body>
        </html>
    )
}

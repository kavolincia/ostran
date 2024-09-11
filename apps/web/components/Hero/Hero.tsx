import { Button } from '@repo/ui/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { LEAD_URL_001 } from '~/constants/urls'

export default function HeroSection() {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            <Image
                src="/randka.jpg"
                alt="Couple at sunset"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
                className="absolute z-0"
            />
            <div className="absolute inset-0 bg-purple-900 opacity-60 z-10"></div>
            <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-down">
                    Znajdź swoją drugą połówkę
                </h1>
                <p className="text-2xl lg:text-3xl text-purple-200 mb-10 max-w-3xl mx-auto animate-fade-in-up">
                Odkryj magię prawdziwej miłości w świecie pełnym możliwości. Twoja wyjątkowa historia czeka, by ją napisać.
                </p>
                <Link href={LEAD_URL_001}>
                <Button
                    size="lg"
                    className="bg-pink-400 text-2xl hover:bg-pink-600 text-white transform transition duration-900 ease-in-out hover:scale-110 animate-pulse"
                >
                    Dołącz do nas ❤️
                </Button>
                            </Link>
            </div>
        </div>
    )
}

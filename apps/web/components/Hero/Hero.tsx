import { Button } from '@repo/ui/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { FANPAGE_URL, MAIN_LEAD_URL } from '~/constants/urls'

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
                    Odkryj magię prawdziwej miłości w świecie pełnym możliwości.
                    Twoja wyjątkowa historia czeka, by ją napisać.
                </p>
                <div className='flex w-full justify-center items-center gap-x-4'>
                <Link href={MAIN_LEAD_URL} target='_blank'>
                    <Button
                        size="lg"
                        className="bg-pink-400 text-2xl hover:bg-pink-600 text-white transform transition duration-900 ease-in-out hover:scale-110 animate-pulse"
                    >
                        Dołącz do nas ❤️
                    </Button>
                </Link>
                <Link href={FANPAGE_URL} target='_blank'>
                    <Button
                        size="lg"
                        className="bg-brandSecondary flex items-center text-2xl hover:bg-blue-400 text-white transition duration-300 hover:scale-110"
                    >
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
                        <span>Fanpage</span>
                    </Button>
                </Link>
                </div>
            </div>
        </div>
    )
}

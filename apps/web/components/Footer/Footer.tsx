import Link from 'next/link'
import { Heart, Sparkles, Clock, Shield } from 'lucide-react'
import { Button } from '@repo/ui/components/ui/button'
import { LEAD_URL_001 } from '~/constants/urls'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
          <div className="lg:w-full mb-8 lg:mb-0 px-12">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
              Twoja Historia Miłosna Czeka!
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              Wyobraź sobie, że za kilka tygodni możesz siedzieć w przytulnej kawiarni, patrząc w oczy osobie, 
              która sprawia, że Twoje serce bije szybciej. Brzmi jak marzenie? Z nami to możliwe!
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-8 space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <Sparkles className="w-6 h-6 mr-2 text-yellow-300" />
                <span className="text-yellow-300 font-semibold">Ponad 10,000 udanych par!</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-2 text-green-300" />
                <span className="text-green-300 font-semibold">2-minutowa rejestracja</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-6 h-6 mr-2 text-blue-300" />
                <span className="text-blue-300 font-semibold">100% bezpieczne</span>
              </div>
            </div>
            <Link href={LEAD_URL_001}>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Rozpocznij Swoją Historię <Heart className="ml-2 w-5 h-5 animate-pulse" />
            </Button>
            </Link>
          </div>
        </div>
        <div className="border-t border-purple-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0 text-purple-300">
            © 2024 Ostre-Randki.pl | Tworzymy szczęśliwe związki!
          </p>
        </div>
      </div>
    </footer>
  )
}
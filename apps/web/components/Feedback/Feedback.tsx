import Image from 'next/image'
import { Star } from 'lucide-react'
import { RestrictedAccessModal } from '../RestrictedAccessModal/RestrictedAccessModal'
import { useState } from 'react'

interface Testimonial {
    id: number
    name: string
    rating: number
    comment: string
    username: string
    imageSrc: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Tomasz',
        rating: 5,
        comment:
            'Po latach samotności, wreszcie znalazłem swoją drugą połówkę dzięki tej stronie. Algorytm dopasowania jest niesamowity - Ania i ja mamy tak wiele wspólnego! Jesteśmy razem już rok i planujemy wspólną przyszłość. Dziękuję za odmienienie mojego życia!',
        username: '@tomobomo',
        imageSrc: '/feedback/el1.png',
    },
    {
        id: 2,
        name: 'Michał',
        rating: 4,
        comment:
            'Jako introwertyk, zawsze miałem trudności z poznawaniem nowych osób. Ta platforma dała mi możliwość nawiązania kontaktu w komfortowy dla mnie sposób. Poznałem kilka wspaniałych kobiet i nawet jeśli nie wszystkie randki kończyły się sukcesem, to każde doświadczenie było wartościowe.',
        username: '@michu1337',
        imageSrc: '/feedback/el2.png',
    },
    {
        id: 3,
        name: 'Krzysztof',
        rating: 5,
        comment:
            'Wróciłem na rynek randkowy po rozwodzie i byłem przerażony perspektywą zaczynania od nowa. Ta strona nie tylko ułatwiła mi powrót do randkowania, ale też pomogła odbudować pewność siebie. Poznałem Magdę, która rozumie moją sytuację, i powoli budujemy coś pięknego.',
        username: '@krisu1233',
        imageSrc: '/feedback/el3.png',
    },
    {
        id: 4,
        name: 'Piotr',
        rating: 4,
        comment:
            'Jako osoba często podróżująca służbowo, doceniam możliwość poznawania ludzi z różnych miast. Funkcja wyszukiwania według lokalizacji jest świetna! Chociaż jeszcze nie znalazłem tej jedynej, poznałem wiele interesujących osób i nawet kilku nowych przyjaciół.',
        username: '@romanticoclassico',
        imageSrc: '/feedback/el4.png',
    },
    {
        id: 5,
        name: 'Adam',
        rating: 5,
        comment:
            'Nigdy nie wierzyłem w miłość od pierwszego wejrzenia, aż do momentu, gdy zobaczyłem profil Karoliny. Nasza pierwsza randka była jak z filmu - od razu wiedzieliśmy, że to coś wyjątkowego. Pół roku później się zaręczyliśmy. Ta strona naprawdę łączy ludzi w magiczny sposób!',
        username: '@adson1',
        imageSrc: '/feedback/el5.png',
    },
]

function TestimonialCard({
    testimonial,
    isEven,
}: {
    testimonial: Testimonial
    isEven: boolean
}) {
    const [isModalOpen, setModalOpen] = useState(false)

    return (
        <div
            className={`flex ${isEven ? 'justify-end' : 'justify-start'} mb-8`}
        >
            <div
                className={`bg-white rounded-lg shadow-md p-6 max-w-2xl ${isEven ? 'mr-4' : 'ml-4'}`}
            >
                <div
                    className="flex items-center cursor-pointer mb-4"
                    onClick={() => setModalOpen(true)}
                >
                    <Image
                        src={testimonial.imageSrc}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        objectFit="cover"
                        className="rounded-full mr-4"
                    />
                    <div>
                        <h3
                            className="font-bold text-lg text-brandBackground cursor-pointer "
                            onClick={() => setModalOpen(true)}
                        >
                            {testimonial.name}
                        </h3>
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    onClick={() => setModalOpen(true)}
                                    key={i}
                                    className={`cursor-pointer w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                />
                            ))}
                        </div>
                        <p
                            onClick={() => setModalOpen(true)}
                            className="text-sm text-gray-500 cursor-pointer "
                        >
                            {testimonial.username}
                        </p>
                    </div>
                </div>
                <p className="text-gray-700">{testimonial.comment}</p>
            </div>
            <RestrictedAccessModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
        </div>
    )
}

export default function FeedbackSection() {
    return (
        <section className="py-16 bg-gradient-to-b from-brandBackground to-brandSecondary">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-brandPrimary mb-12">
                    Opinie Użytkowników
                </h2>
                <div className="space-y-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            isEven={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

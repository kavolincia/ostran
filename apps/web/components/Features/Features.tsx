import { Heart, Zap, Lock } from 'lucide-react'

const features = [
    {
        icon: Heart,
        title: 'Inteligentne Dopasowania',
        description:
            'Nasz zaawansowany algorytm analizuje Twoje preferencje i osobowość, aby znaleźć najbardziej kompatybilne osoby. Zwiększ swoje szanse na znalezienie prawdziwej miłości!',
    },
    {
        icon: Zap,
        title: 'Błyskawiczne Połączenia',
        description:
            'Dzięki naszemu systemowi szybkich randek online, możesz nawiązać kontakt z potencjalnymi partnerami w mgnieniu oka. Oszczędzaj czas i poznawaj nowe osoby efektywnie!',
    },
    {
        icon: Lock,
        title: 'Bezpieczeństwo Przede Wszystkim',
        description:
            'Twoje bezpieczeństwo jest naszym priorytetem. Oferujemy zaawansowane funkcje weryfikacji profili i szyfrowania wiadomości, abyś mógł skupić się na budowaniu relacji bez obaw.',
    },
]

export default function FeaturesSection() {
    return (
<section className="py-16 bg-gradient-to-r from-brandBackground to-brandSecondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-brandPrimary rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <feature.icon className="w-16 h-16 text-brandAccent mb-4 mx-auto" />
              <h2 className="text-2xl lg:text-3xl font-bold text-brandBackground mb-4 text-center">
                {feature.title}
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}

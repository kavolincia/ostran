'use client'

import { getRandomIntegerInclusive } from '@repo/ui/lib/utils'
import ReactVisibilitySensor from 'react-visibility-sensor'
import { Users, Coffee, MessageCircle } from 'lucide-react'
import CountUp from 'react-countup'

const stats = [
    {
        icon: Coffee,
        value: getRandomIntegerInclusive(32575, 32600),
        label: 'Pierwszych randek',
        prefix: 'Ponad',
    },
    {
        icon: MessageCircle,
        value: getRandomIntegerInclusive(821400, 821500),
        label: 'Wysłanych wiadomości',
        prefix: 'Ponad',
    },
    {
        icon: Users,
        value: getRandomIntegerInclusive(11675, 11700),
        label: 'Szczęśliwych par',
        prefix: 'Ponad',
    },
]

export default function StatisticsSection() {
    return (
        <section className="py-16 bg-gradient-to-r from-brandBackground to-brandSecondary">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-white text-center mb-12">
                    Nasze Osiągnięcia
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white bg-opacity-10 rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:bg-opacity-20"
                        >
                            <stat.icon className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                            <p className="text-sm text-pink-300 uppercase mb-2">
                                {stat.prefix}
                            </p>
                            <h3 className="text-4xl font-bold text-white mb-2">
                                <CountUp
                                    end={stat.value}
                                    duration={2.5}
                                    separator="."
                                >
                                    {({ countUpRef, start }) => (
                                        <ReactVisibilitySensor
                                            onChange={start}
                                            delayedCall
                                        >
                                            <span ref={countUpRef} />
                                        </ReactVisibilitySensor>
                                    )}
                                </CountUp>
                            </h3>
                            <p className="text-lg text-purple-200">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

import Image from 'next/image'
import { CheckCircle2, Heart, MessageCircle, User } from 'lucide-react'
import profilesData from '~/data/profiles.json'
import { Button } from '@repo/ui/components/ui/button'
import { Badge } from '@repo/ui/components/ui/badge'
import Link from 'next/link'
import { Card, CardContent } from '@repo/ui/components/ui/card'

export default function AvailableProfiles() {
    return (
        <section className="py-16 bg-gradient-to-r from-brandBackground to-brandSecondary">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-brandPrimary text-center mb-12">
                    Dostępne Profile
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {profilesData.slice(0, 8).map((profile) => (
                        <Card
                            key={profile.id}
                            className="bg-brandPrimary shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <CardContent className="p-0">
                                <div className="relative h-64">
                                    <Link href={`/profile/${profile.id}`}>
                                        {profile.verified && (
                                            <div className="absolute bottom-3 left-3 flex items-center bg-green-500 text-white px-2 py-1 rounded-full z-10">
                                                <CheckCircle2 className="w-4 h-4 mr-1" />
                                                <span className="text-sm font-medium">
                                                    Zweryfikowana
                                                </span>
                                            </div>
                                        )}
                                        <Image
                                            src={profile.image}
                                            alt={`${profile.name}'s profile`}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-t-lg"
                                        />
                                    </Link>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-brandBackground mb-1">
                                        {profile.name}, {profile.age}
                                    </h3>
                                    <p className="text-gray-600 mb-2">
                                        {profile.location}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {profile.interests
                                            .slice(0, 3)
                                            .map((interest, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="secondary"
                                                    className="bg-brandAccent text-brandPrimary hover:bg-brandBackground"
                                                >
                                                    {interest}
                                                </Badge>
                                            ))}
                                    </div>
                                    <div className="flex justify-between">
                                        <Link href={`/profile/${profile.id}`}>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="flex items-center hover:bg-brandBackground hover:text-brandPrimary"
                                            >
                                                <User className="mr-2 h-4 w-4" />{' '}
                                                Profil
                                            </Button>
                                        </Link>
                                        <Link href={`/profile/${profile.id}`}>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="flex items-center hover:bg-brandBackground hover:text-brandPrimary"
                                            >
                                                <Heart className="mr-2 h-4 w-4" />{' '}
                                                Polub
                                            </Button>
                                        </Link>
                                        <Link href={`/profile/${profile.id}`}>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="flex items-center hover:bg-brandBackground hover:text-brandPrimary"
                                            >
                                                <MessageCircle className="mr-2 h-4 w-4" />{' '}
                                                Czatuj
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="w-full flex justify-center text-center items-center py-12">
                    <Link href="/profiles">
                        <Button className="bg-brandAccent hover:bg-opacity-90 text-brandPrimary text-2xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                            Zobacz więcej profili ...
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

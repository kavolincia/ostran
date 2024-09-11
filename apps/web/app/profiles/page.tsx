'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@repo/ui/components/ui/card"
import { CheckCircle2, Heart, MessageCircle, Search, User } from 'lucide-react'

// Assuming you have a profiles.json file with your profiles data
import profilesData from '~/data/profiles.json'
import { Button } from '@repo/ui/components/ui/button'
import { Badge } from '@repo/ui/components/ui/badge'
import { Input } from '@repo/ui/components/ui/input'
import { useNewUserNotifications } from '~/hooks/useNewUserToast'
import { RestrictedAccessModal } from '~/components/RestrictedAccessModal/RestrictedAccessModal'

export default function ProfilesPage() {
  useNewUserNotifications();
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalOpen, setModalOpen] = useState(false);

  const filteredProfiles = profilesData.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.interests.some(interest => interest.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-brandBackground to-brandSecondary">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-brandPrimary text-center mb-8">
          Odkryj Nowe Profile
        </h1>
        
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <Input
              type="text"
              placeholder="Szukaj po imieniu, lokalizacji lub zainteresowaniach..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full bg-brandPrimary text-brandBackground rounded-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProfiles.map((profile) => (
            <Card key={profile.id} className="bg-brandPrimary shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative h-64">
            <Link href={`/profile/${profile.id}`}>
              {profile.verified && (
              <div className="absolute bottom-3 left-3 flex items-center bg-green-500 text-white px-2 py-1 rounded-full z-10">
                <CheckCircle2 className="w-4 h-4 mr-1" />
                <span className="text-sm font-medium">Zweryfikowana</span>
              </div>
            )}
                <Image
                  src={profile.image}
                  alt={`${profile.name}'s profile`}
                fill
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                </Link>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-brandBackground mb-1">{profile.name}, {profile.age}</h3>
                <p className="text-gray-600 mb-2">{profile.location}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {profile.interests.slice(0, 3).map((interest, index) => (
                    <Badge key={index} variant="secondary" className="bg-brandAccent text-brandPrimary hover:bg-brandBackground">
                      {interest}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between">
                <Link href={`/profile/${profile.id}`}>
                  <Button variant="outline" size="sm" className="flex items-center hover:bg-brandBackground hover:text-brandPrimary">
                    <User className="mr-2 h-4 w-4" /> Profil
                  </Button>
                  </Link>
                <Link href={`/profile/${profile.id}`}>
                  <Button variant="outline" size="sm" className="flex items-center hover:bg-brandBackground hover:text-brandPrimary">
                    <Heart className="mr-2 h-4 w-4" /> Polub
                  </Button>
                  </Link>
                  <Link href={`/profile/${profile.id}`}>
                  <Button variant="outline" size="sm" className="flex items-center hover:bg-brandBackground hover:text-brandPrimary">
                    <MessageCircle className="mr-2 h-4 w-4" /> Czatuj
                  </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
          ))}
        </div>

        {filteredProfiles.length === 0 && (
          <p className="text-center text-brandPrimary text-xl mt-8">
            Nie znaleziono profili pasujących do wyszukiwania.
          </p>
        )}
      </div>
      <div className='flex justify-center w-full h-auto'>
            <Button onClick={() => setModalOpen(true)} className="bg-brandAccent hover:bg-opacity-90 text-brandPrimary text-2xl px-8 py-4 mb-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Zobacz więcej profili ...
            </Button>
      </div>
      <RestrictedAccessModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>
    </div>
  )
}
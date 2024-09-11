'use client';

import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@repo/ui/components/ui/card"
import { Input } from "@repo/ui/components/ui/input"
import { Heart, MessageCircle, Phone, ChevronLeft, ChevronRight, CheckCircle2, ThumbsUp, MessageSquare, Fullscreen } from 'lucide-react'
import { Badge } from '@repo/ui/components/ui/badge'
import { Button } from '@repo/ui/components/ui/button'
import { Separator } from '@repo/ui/components/ui/separator'
import profilesData from '~/data/profiles.json'
import Link from 'next/link';
import { useState } from 'react';
import { RestrictedAccessModal } from '~/components/RestrictedAccessModal/RestrictedAccessModal';
import { useNewUserNotifications } from '~/hooks/useNewUserToast';

export default function ProfilePage({ params }: { params: { id: string } }) {
  useNewUserNotifications();
  const [isModalOpen, setModalOpen] = useState(false);
  const profile = profilesData.find(p => p.id === parseInt(params.id, 10));
  const similarProfiles = profilesData.filter(p => p.id !== profile?.id).slice(0, 4);

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="overflow-hidden">
            <div className='flex justify-center items-center'>
            <div className="relative h-[400px] w-full bg-red-100">
              {/* <Image
                src={profile.image}
                alt={`${profile.name}'s profile picture`}
                fill
              /> */}
        <Image
                src={profile.image}
                alt={`${profile.name}'s profile picture`}
          objectFit="cover"
          fill
          priority
          quality={100}
          className="w-full h-auto object-cover"
        />
              {profile.verified && (
                <div className="absolute top-4 left-4 flex items-center bg-green-500 text-white px-2 py-1 rounded-full">
                  <CheckCircle2 className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">Zweryfikowana</span>
                </div>
              )}
                              <div className="cursor-pointer absolute top-4 right-4 flex items-center bg-brandBackground text-white p-4 rounded-full" onClick={() => setModalOpen(true)}>
                  <Fullscreen className="w-4 h-4 mr-1" />
                  <span className="text-md font-medium">Pełny ekran</span>
                </div>
              <Button variant="outline" size="icon" className="absolute top-1/2 left-4 transform -translate-y-1/2" onClick={() => setModalOpen(true)}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="absolute top-1/2 right-4 transform -translate-y-1/2" onClick={() => setModalOpen(true)}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold">{`${profile.name}, ${profile.age}`}</h1>
                <Badge variant="secondary">Aktywna {profile.lastActive}</Badge>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Zawód</p>
                  <p className="font-medium">{profile.job}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Lokalizacja</p>
                  <p className="font-medium">{profile.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Szukam</p>
                  <p className="font-medium">{profile.lookingFor}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-medium">{profile.status}</p>
                </div>
              </div>
              <Separator className="my-6" />
              <h2 className="text-xl font-semibold mb-4">O mnie</h2>
              <p className="text-gray-700">{profile.bio}</p>
            </CardContent>
            <CardFooter className="flex justify-between p-6">

              <div className='flex flex-col md:flex-row md:gap-x-4 gap-y-4 items-center w-full'>
              <div className='flex flex-row gap-x-4'>
              <Button className="flex-1" onClick={() => setModalOpen(true)}>
                <Heart className="mr-2 h-4 w-4" /> Polub
              </Button>
              <Button className="flex-1" variant="outline" onClick={() => setModalOpen(true)}>
                <MessageCircle className="mr-2 h-4 w-4" /> Wyślij wiadomość
              </Button>
              </div>
              <Button className="flex-1" variant="secondary" onClick={() => setModalOpen(true)}>
                <Phone className="mr-2 h-4 w-4" /> Poproś o numer
              </Button>
              </div>
            </CardFooter>
          <div className="mt-6 m-8 flex items-center justify-between">
            <div className="flex items-center">
              <ThumbsUp className="text-blue-500 mr-2 cursor-pointer" onClick={() => setModalOpen(true)}/>
              <Heart className="text-red-500 mr-2 cursor-pointer" onClick={() => setModalOpen(true)}/>
              <span className="text-gray-600">{profile.likes} osób lubi to</span>
            </div>
            <Button variant="ghost" onClick={() => setModalOpen(true)}>
              <MessageSquare className="mr-2 h-4 w-4" /> {profile.comments} komentarze
            </Button>
          </div>
          </Card>
        </div>
        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Zainteresowania</h2>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest, index) => (
                  <Badge key={index} className="bg-brandAccent text-brandPrimary hover:bg-brandBackground">{interest}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="mt-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Otrzymuj aktualizacje</h2>
              <p className="text-gray-600 mb-4">Bądź na bieżąco z aktywnością {profile.name}</p>
              <Input type="email" placeholder="Twój adres e-mail" />
              <Button className="w-full mt-4" onClick={() => setModalOpen(true)}>Subskrybuj</Button>
            </CardContent>
          </Card>
          <Card className="mt-6">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Podobne profile</h2>
        <div className="grid grid-cols-2 gap-4">
        {similarProfiles.map((similarProfile) => (
            <Link key={similarProfile.id} href={`/profile/${similarProfile.id}`}>
              <div className="relative w-full pt-[100%] overflow-hidden rounded-lg">
              <div className="absolute bottom-3 left-3 flex items-center bg-brandAccent text-white px-2 rounded-full py-1 z-10">
                  <span className="text-sm font-medium">{similarProfile.name}, {similarProfile.age}</span>
                </div>
                <Image
                  src={similarProfile.image}
                  alt={`${similarProfile.name}'s profile`}
                  fill
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
            </Link>
          ))}
        </div>
        <Link href="/profiles">
          <Button variant="link" className="w-full mt-4">Zobacz więcej</Button>
        </Link>
      </CardContent>
    </Card>
        </div>
      </div>
      <RestrictedAccessModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>
    </div>
  )
}
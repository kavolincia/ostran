'use client';

import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@repo/ui/components/ui/card"
import { Input } from "@repo/ui/components/ui/input"
import { Heart, MessageCircle, Phone, ChevronLeft, ChevronRight, CheckCircle2, ThumbsUp, MessageSquare, Fullscreen, Globe } from 'lucide-react'
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
                  {profile.facebook && (
                <Link href={profile.facebook} className='my-4 underline hover:text-brandBackground duration-150 transition flex items-center gap-x-4'>
                <svg className='w-8 h-8' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
                  <p className="font-medium">{profile.facebook}</p>
                  </Link>
                  )}
                  {profile.instagram && (
                <Link href={profile.instagram} className='my-4 underline hover:text-brandBackground duration-150 transition flex items-center gap-x-4'>
                <svg className='w-8 h-8' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
                  <p className="font-medium">{profile.instagram}</p>
                  </Link>
                  )}
                  {profile.telegram && (
                <Link href={profile.telegram} className='my-4 underline hover:text-brandBackground duration-150 transition flex items-center gap-x-4'>
                <svg className='w-8 h-8' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  <p className="font-medium">{profile.telegram}</p>
                  </Link>
                  )}
                  {profile.snapchat && (
                <Link href={profile.snapchat} className='my-4 underline hover:text-brandBackground duration-150 transition flex items-center gap-x-4'>
                <svg className='w-8 h-8' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Snapchat</title><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/></svg>
                  <p className="font-medium">{profile.snapchat}</p>
                  </Link>
                  )}
                  {profile.website && (
                <Link href={profile.website} className='my-4 underline hover:text-brandBackground duration-150 transition flex items-center gap-x-4'>
                <Globe className='w-8 h-8'/>
                  <p className="font-medium">{profile.website}</p>
                  </Link>
                  )}
              <Separator className="my-6" />
              <h2 className="text-xl font-semibold mb-4">O mnie</h2>
              <div className="text-gray-700" dangerouslySetInnerHTML={{__html: profile.bio}}></div>
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
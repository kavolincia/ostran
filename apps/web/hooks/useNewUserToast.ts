'use client'
import { useToast } from '@repo/ui/hooks/use-toast'
import { useState, useEffect } from 'react'

const users = [
    { name: 'Anna', age: 28, city: 'Warszawa' },
    { name: 'Piotr', age: 32, city: 'Kraków' },
    { name: 'Magda', age: 25, city: 'Wrocław' },
    { name: 'Tomek', age: 30, city: 'Gdańsk' },
    { name: 'Kasia', age: 27, city: 'Poznań' },
    { name: 'Marek', age: 29, city: 'Łódź' },
    { name: 'Zofia', age: 24, city: 'Szczecin' },
    { name: 'Jakub', age: 31, city: 'Bydgoszcz' },
    { name: 'Ola', age: 26, city: 'Lublin' },
    { name: 'Krzysztof', age: 35, city: 'Katowice' },
    { name: 'Natalia', age: 22, city: 'Białystok' },
    { name: 'Wojtek', age: 33, city: 'Toruń' },
    { name: 'Ewa', age: 27, city: 'Rzeszów' },
    { name: 'Szymon', age: 30, city: 'Opole' },
    { name: 'Agnieszka', age: 29, city: 'Gorzów Wielkopolski' },
    { name: 'Michał', age: 34, city: 'Zielona Góra' },
    { name: 'Julia', age: 23, city: 'Kielce' },
    { name: 'Tomasz', age: 36, city: 'Częstochowa' },
    { name: 'Patryk', age: 28, city: 'Płock' },
    { name: 'Monika', age: 25, city: 'Tarnów' },
    { name: 'Bartek', age: 31, city: 'Legnica' },
    { name: 'Karolina', age: 27, city: 'Słupsk' },
    { name: 'Adam', age: 29, city: 'Nowy Sącz' },
    { name: 'Ania', age: 24, city: 'Olsztyn' },
    { name: 'Filip', age: 32, city: 'Elbląg' },
    { name: 'Klaudia', age: 26, city: 'Gniezno' },
    { name: 'Rafał', age: 30, city: 'Bielsko-Biała' },
    { name: 'Iwona', age: 28, city: 'Chorzów' },
    { name: 'Darek', age: 35, city: 'Jaworzno' },
    { name: 'Lena', age: 22, city: 'Mysłowice' },
    { name: 'Olek', age: 33, city: 'Siedlce' },
    { name: 'Nadia', age: 29, city: 'Stalowa Wola' },
    { name: 'Marta', age: 26, city: 'Zamość' },
    { name: 'Grzegorz', age: 31, city: 'Kalisz' },
    { name: 'Ewelina', age: 27, city: 'Tychy' },
]

export function useNewUserNotifications() {
    const { toast } = useToast()

    useEffect(() => {
        const interval = setInterval(() => {
            const randomUser = users[Math.floor(Math.random() * users.length)]
            toast({
                variant: 'default',
                title: 'Nowy użytkownik dołączył!',
                description: `${randomUser?.name}, ${randomUser?.age} z miasta ${randomUser?.city}`,
                duration: 5000,
            })
        }, 20000)

        return () => clearInterval(interval)
    }, [toast])
}

import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@repo/ui/components/ui/card'
import {
    CheckCircle2Icon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from 'lucide-react'
import { Button } from '@repo/ui/components/ui/button'

export default function UserProfile() {
    // This would typically come from an API or database
    const user = {
        name: 'Sarah',
        age: 28,
        location: 'New York, USA',
        hairColor: 'Blonde',
        seeking: 'Men',
        status: 'Single',
        bio: "Adventure seeker, coffee enthusiast, and aspiring chef. Looking for someone who can make me laugh and explore the world with me. If you enjoy spontaneous road trips and trying new cuisines, we'll get along just fine!",
        lastActive: '5 minutes ago',
    }

    return (
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
                <Card>
                    <CardHeader className="relative">
                        <CardTitle className="flex items-center space-x-2">
                            <span>
                                {user.name}, {user.age}
                            </span>
                            <CheckCircle2Icon className="h-5 w-5 text-green-500" />
                        </CardTitle>
                        <span className="absolute top-4 right-4 text-sm text-gray-500">
                            {user.lastActive}
                        </span>
                    </CardHeader>
                    <CardContent>
                        <div className="relative mb-4">
                            <img
                                src="/placeholder.svg?height=400&width=600"
                                alt={user.name}
                                className="rounded-lg w-full"
                            />
                            <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                                <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
                            </button>
                            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                                <ChevronRightIcon className="h-6 w-6 text-gray-600" />
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="md:w-1/3">
                <Card>
                    <CardHeader>
                        <CardTitle>About Me</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <dl className="space-y-2">
                            <div>
                                <dt className="font-semibold">Location:</dt>
                                <dd>{user.location}</dd>
                            </div>
                            <div>
                                <dt className="font-semibold">Hair Color:</dt>
                                <dd>{user.hairColor}</dd>
                            </div>
                            <div>
                                <dt className="font-semibold">Seeking:</dt>
                                <dd>{user.seeking}</dd>
                            </div>
                            <div>
                                <dt className="font-semibold">Status:</dt>
                                <dd>{user.status}</dd>
                            </div>
                        </dl>
                        <div className="mt-4">
                            <h4 className="font-semibold mb-2">Bio</h4>
                            <p className="text-sm">{user.bio}</p>
                        </div>
                        <Button className="w-full mt-4">Send Message</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

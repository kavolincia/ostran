'use client'
import { Separator } from '@repo/ui/components/ui/separator'
import FeaturesSection from '~/components/Features/Features'
import FeedbackSection from '~/components/Feedback/Feedback'
import Footer from '~/components/Footer/Footer'
import HeroSection from '~/components/Hero/Hero'
import AvailableProfiles from '~/components/Profiles/Profiles'
import StatisticsSection from '~/components/Statistics/Statistics'
import { useNewUserNotifications } from '~/hooks/useNewUserToast'

export default function HomePage() {
    useNewUserNotifications()
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <Separator className="bg-brandPrimary" />
            <AvailableProfiles />
            <Separator className="bg-brandPrimary" />
            <StatisticsSection />
            <Separator className="bg-brandPrimary" />
            <FeedbackSection />
            <Separator className="bg-brandPrimary" />
            <Footer />
        </>
    )
}

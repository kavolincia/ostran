import { Separator } from '@repo/ui/components/ui/separator'
import FeaturesSection from '~/components/Features/Features'
import HeroSection from '~/components/Hero/Hero'
import AvailableProfiles from '~/components/Profiles/Profiles'
import StatisticsSection from '~/components/Statistics/Statistics'

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <Separator className='bg-brandPrimary'/>
            <AvailableProfiles />
            <Separator className='bg-brandPrimary'/>
            <StatisticsSection />
        </>
    )
}

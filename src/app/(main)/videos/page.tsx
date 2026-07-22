import React from 'react'
import InfiniteLiveFeed from '../../components/InfiniteLiveFeed'
import HeroSection from '../../components/hero'
import LiveFactoryFeed from '../../components/LiveFactoryFeed'
import LiveStreamCommandCenter from '../../components/LiveStreamCommandCenter'
import BusinessSolutions from '../../components/busineesSolution'
import LiveStreamLayout from '../../components/LiveStreamLayout'
import { CanadaStories } from '../../components/canada-stories'

const videos = () => {
    return (
        <div>
            <LiveStreamCommandCenter />
            <HeroSection />
            <InfiniteLiveFeed />
            <CanadaStories />
            <LiveFactoryFeed />
            <BusinessSolutions />
            <LiveStreamLayout />
        </div>
    )
}

export default videos
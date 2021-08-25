import React from 'react'
import DownloadSection from '../components/download-section'
import FoodBloggerSection from '../components/food-blogger-section'
import Footer from '../components/footer'
import LandingSection from '../components/landing'
import DownloadPopup from '../components/landing/download-popup'
import SamenPlantSection from '../components/samen-plant'
import SectionOne from '../components/section-1'

export default function Home() {
    return (
        <div>
            <DownloadPopup />
            <LandingSection />
            <SectionOne />
            <SamenPlantSection />
            <DownloadSection />
            <FoodBloggerSection />
            <Footer />
        </div>
    )
}

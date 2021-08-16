const { default: DownloadSection } = require('./components/download-section')
const {
    default: FoodBloggerSection,
} = require('./components/food-blogger-section')
const { default: Footer } = require('./components/footer')
const { default: LandingSection } = require('./components/landing')
const { default: SamenPlantSection } = require('./components/samen-plant')
const { default: SectionOne } = require('./components/section-1')

function App() {
    return (
        <div>
            <LandingSection />
            <SectionOne />
            <SamenPlantSection />
            <DownloadSection />
            <FoodBloggerSection />
            <Footer />
        </div>
    )
}

export default App

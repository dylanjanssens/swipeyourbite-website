import SamenPlantImage from '../../assets/samen-plant.webp'

export default function SamenPlantSection() {
    return (
        <section className="m-auto mb-32">
            <div className="container px-5 py-5 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                    <img
                        alt="feature"
                        className="object-cover object-center h-full w-full"
                        src={SamenPlantImage}
                    />
                </div>
                <div className="flex flex-col flex-wrap justify-center items-center  lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                    <h2 className="font-jost font-semibold text-4.5xl text-black mb-6 ">
                        Samen (plant)aardig zijn voor de wereld
                    </h2>
                    <p className="font-jost text-lg text-black mb-2">
                        Een groen voedingspatroon voelt goed. Je draagt je
                        steentje bij aan een beter milieu, dieren zijn je
                        dankbaar en je voelt je lekker fit in je lijf. Hoeveel
                        invloed jouw vega keuzes hebben? Met een duurzamer
                        voedingspatroon verlaag je de milieu-impact van je
                        voedsel uiteindelijk tot wel 50 procent.
                    </p>
                    <p className="font-jost text-lg text-black">
                        Dat begint al bij een boterham met hummus in plaats van
                        kipfilet. Of een vegetarisch recept van Swipe Your Bite.
                    </p>
                </div>
            </div>
        </section>
    )
}

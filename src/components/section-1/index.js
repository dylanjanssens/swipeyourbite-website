import CardOneImage from '../../assets/card-1.webp'
import CardTwoImage from '../../assets/card-2.webp'
import CardThreeImage from '../../assets/card-3.webp'

export default function SectionOne() {
    return (
        <section className="md:max-w-6xl m-auto">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="font-jost font-semibold text-5xl title-font mb-4 text-black">
                        It was love at first bite
                    </h1>
                    <p className="font-jost lg:max-w-4xl w-full leading-relaxed text-lg text-black">
                        Of je nu alweer een nieuwe liefde hebt? Jep. En morgen
                        weer. En overmorgen weer. Dankzij Swipe Your Bite zit
                        jij nooit met hetzelfde gerecht aan tafel. Door te
                        swipen vis je snel jouw favoriete smaakbommetjes uit het
                        enorme aanbod gezonde recepten. Swipe Your Bite en{' '}
                        <span className="font-jost font-bold">
                            {' '}
                            zet je tanden erin!{' '}
                        </span>
                    </p>
                </div>
                <h1 className="font-jost font-semibold text-3xl title-font mb-6 text-black text-center">
                    Jouw snelle vega receptenmachine
                </h1>
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 md:w-1/2 p-4">
                        <div className="shadow-card p-6 rounded-lg">
                            <img
                                className="md:w-64 m-auto mb-5"
                                src={CardOneImage}
                                alt="card-1"
                            />
                            <h2 className="font-jost font-semibold text-2xl text-center mb-2">
                                Alle recepten op één plek
                            </h2>
                            <p className="font-jost text-lg text-center">
                                We werken samen met nieuwe en bekende foodblogs.
                                Samen creëren we één groot platform vol
                                kookinspiratie.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 p-4">
                        <div className="shadow-card p-6 rounded-lg">
                            <img
                                className="md:w-64 m-auto mb-5"
                                src={CardTwoImage}
                                alt="card-2"
                            />
                            <h2 className="font-jost font-semibold text-2xl text-center mb-2">
                                Ontdek nieuwe gerechten
                            </h2>
                            <p className="font-jost text-lg text-center">
                                Verras je smaakpapillen eens met een nieuw
                                recept. Daar hoef je alleen maar even kort voor
                                te swipen. Simpel.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 p-4  md:mx-auto">
                        <div className="shadow-card p-6 rounded-lg">
                            <img
                                className="md:w-64 m-auto mb-5"
                                src={CardThreeImage}
                                alt="card-3"
                            />
                            <h2 className="font-jost font-semibold text-2xl text-center mb-2">
                                1, 2, 3, aan tafel!
                            </h2>
                            <p className="font-jost text-lg text-center lg:pb-8 xl:pb-0">
                                Uitdagingen in de keuken? No thanks. Liever
                                simpel, snel en supersmakelijk. Minder koken,
                                meer tafelen!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

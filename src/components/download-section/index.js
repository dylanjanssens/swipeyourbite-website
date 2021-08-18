import DownloadSectionMobile from '../../assets/download-section-mobile.webp'
import GooglePlayIcon from '../../assets/GooglePlay.webp'
import AppStoreIcon from '../../assets/AppStore.webp'
import MashroomImage from '../../assets/download-section-mashroom.webp'

export default function DownloadSection() {
    return (
        <section id="download-section" className="m-auto mb-32">
            <div className="container px-5 py-5 mx-auto flex flex-wrap">
                <div className="flex flex-col flex-wrap justify-center items-start mx-auto lg:py-6 -mb-10 lg:w-7/12 lg:pl-12 lg:text-left text-center">
                    <div className="w-full flex flex-row  items-center">
                        <h2 className="font-jost font-semibold text-4.5xl lg:text-3xl xl:text-4.5xl text-black mb-6 text-center sm:text-left">
                            Download{<br />} de SwipeYourBite app
                        </h2>
                        <img
                            src={MashroomImage}
                            width="100%"
                            height="100%"
                            alt="mashroom-icon"
                            className="object-contain object-center w-max ml-2 -mt-14 hidden sm:block"
                        />
                    </div>
                    <p className="font-jost text-lg text-black mb-2 max-w-xl text-left">
                        Er ligt verse kookinspiratie op je te wachten! Download,
                        swipe en vind een lekkere match. Wij verzekeren je dat
                        je een recept vindt waar je hart sneller van gaat
                        kloppen. Smakelijk, kort van stof en makkelijk in de
                        omgang. De ideale partner aan tafel.
                    </p>
                    <div className="self-center lg:self-start shadow-card p-5 rounded-lg  mt-5 mb-14 ">
                        <span className="block font-jost font-semibold text-xl mb-3">
                            Raak geïnspireerd
                        </span>
                        <div className="flex flex-row">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://play.google.com/store/apps/details?id=com.SwipeYourBite.application"
                            >
                                <img
                                    src={GooglePlayIcon}
                                    alt="google-play-icon"
                                    className="mr-3"
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://apps.apple.com/nl/app/swipeyourbite/id1532039668"
                            >
                                <img src={AppStoreIcon} alt="app-store-icon" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-5/12  mb-10 lg:mb-0 rounded-lg overflow-hidden">
                    <img
                        alt="feature"
                        className="object-cover object-center m-auto"
                        src={DownloadSectionMobile}
                    />
                </div>
            </div>
        </section>
    )
}

import Popup from './download-popup'
import LandingImage from '../../assets/landing-page-cover.png'
import Logo from '../../assets/logo.png'

export default function LandingSection() {
    return (
        <div
            className="bg-cover bg-center w-screen h-screen relative"
            style={{ backgroundImage: `url(${LandingImage})` }}
        >
            <img src={Logo} alt="logo" className="mx-auto pt-2 sm:pt-14" />
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="font-jost text-5xl sm:text-6xl text-black text-center font-semibold leading-extra-loose">
                    Swipe voor een{' '}
                    <span className="font-jost font-extrabold"> verse</span>{' '}
                    {<br />} portie{' '}
                    <span className="font-patrick" style={{ color: '#f2b012' }}>
                        kookinspiratie
                    </span>
                    !
                </h1>
                <div className="mt-7">
                    <p className="font-jost text-lg text-center">
                        Swipe Your Bite bundelt de lekkerste vega recepten van
                        het web in één app.
                    </p>
                    <p className="font-jost text-lg text-center">
                        Van kleurrijke curry tot smakelijke stoofpot. Simpel,
                        gezond en razendsnel op tafel.
                    </p>
                    <p className="font-jost text-lg text-center">
                        We like!
                        <span className="font-jost font-bold text-lg">
                            {' '}
                            Download de app en laat je verrassen.
                        </span>
                    </p>
                </div>
                <div className="mb-5 sm:mb-0 mt-7 bg-button rounded-full py-4 px-6  font-jost font-semibold text-xl text-white">
                    Download de app
                </div>
            </div>
            <Popup />
        </div>
    )
}

import LandingImage from '../../assets/landing-page-cover.webp'
import Logo from '../../assets/logo.webp'
import DownArrowIcon from '../../assets/down-arrow.webp'

export default function LandingSection() {
    const onClick = () => {
        document.getElementById('download-section').scrollIntoView({
            behavior: 'smooth',
        })
    }
    return (
        <div
            id="landing-section"
            className="w-full h-full min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${LandingImage})` }}
        >
            <img
                src={Logo}
                alt="logo"
                className="mx-auto pt-2 sm:pt-14 cursor-pointer"
            />
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
                <button
                    className="mb-5 sm:mb-0 mt-7 bg-button
                     rounded-full py-4 px-6  font-jost 
                     font-semibold text-xl text-white 
                     flex flex-row justify-between items-center outline-none focus:ring-1"
                    onClick={onClick}
                >
                    Download de app
                    <img
                        className="ml-10"
                        alt="down-arrow-icon"
                        src={DownArrowIcon}
                    />
                </button>
            </div>
        </div>
    )
}

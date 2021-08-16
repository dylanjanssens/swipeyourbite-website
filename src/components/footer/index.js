import Logo from '../../assets/logo.png'
import GooglePlayIcon from '../../assets/GooglePlay.png'
import AppStoreIcon from '../../assets/AppStore.png'
import Phone from '../../assets/phone.png'
import Email from '../../assets/email.png'
import LinkedInIcon from '../../assets/linkedin.png'
import FacebookIcon from '../../assets/facebook.png'
import InstagramIcon from '../../assets/instagram.png'

export default function Footer() {
    return (
        <footer className="bg-footer">
            <div className="container pt-12 pb-10 m-auto flex  md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="flex-1">
                    <img src={Logo} alt="logo" className="mx-auto sm:mx-0" />
                    <p className="max-w-sm mt-2 font-jost text-lg text-black text-center sm:text-left">
                        Swipe Your Bite bundelt de lekkerste vega recepten van
                        het web in één app. Swipe en creëer je persoonlijke
                        receptenboek.
                    </p>
                    <div className="flex flex-row items-end justify-center sm:justify-start my-4">
                        <p className="font-jost font-bold text-base mt-3 mr-3">
                            Volg je ons al?
                        </p>
                        <img
                            src={LinkedInIcon}
                            alt="linkedin-icon"
                            className="object-contain mr-2"
                        />
                        <img
                            src={FacebookIcon}
                            alt="facebook-icon"
                            className="object-contain mr-2"
                        />
                        <img
                            src={InstagramIcon}
                            alt="instagram-icon"
                            className="object-contain mr-2"
                        />
                    </div>
                </div>
                <div className="flex-1 mx-auto mb-4">
                    <h2 className="font-jost font-semibold text-xl mb-5">
                        Contact
                    </h2>
                    <div className="flex flex-row">
                        <img
                            src={Email}
                            alt="email-icon"
                            className="object-contain mr-2"
                        />
                        <p>info@swipeyourbite.nl</p>
                    </div>
                    <div className="flex flex-row">
                        <img
                            src={Phone}
                            alt="email-icon"
                            className="object-contain mr-2"
                        />
                        <p>06-12 34 56 78</p>
                    </div>
                </div>
                <div className="flex-1 mx-auto">
                    <h2 className="font-jost font-semibold text-xl">
                        Download SwipeYourBite op
                    </h2>
                    <div className="flex flex-row flex-wrap justify-start items-center mt-4">
                        <img
                            className="mr-2"
                            src={GooglePlayIcon}
                            alt="google-play-icon"
                        />
                        <img src={AppStoreIcon} alt="app-store-icon" />
                    </div>
                </div>
            </div>
            <p className="font-jost font-bold text-sm text-center pb-4">
                © Copyright 2021. SwipeYourBite Limited. Alle rechten
                voorbehouden. Privacy Policy & Algemene voorwaarden.
            </p>
        </footer>
    )
}

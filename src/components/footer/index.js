/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '../../assets/logo.webp'
import GooglePlayIcon from '../../assets/GooglePlay.webp'
import AppStoreIcon from '../../assets/AppStore.webp'
import Phone from '../../assets/phone.webp'
import Email from '../../assets/email.webp'
import FacebookIcon from '../../assets/facebook.webp'
import InstagramIcon from '../../assets/instagram.webp'

export default function Footer() {
    const onClick = () => {
        document.getElementById('landing-section').scrollIntoView({
            behavior: 'smooth',
        })
    }
    return (
        <footer id="footer" className="bg-footer">
            <div className="container pt-12 mx-auto pb-10 px-8 sm:px-0 flex items-start md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="flex-2">
                    <img
                        src={Logo}
                        alt="logo"
                        className="mx-auto sm:mx-0 cursor-pointer"
                        onClick={onClick}
                    />
                    <p className="max-w-sm mt-2 font-jost text-lg text-black text-center sm:text-left">
                        Swipe Your Bite bundelt de lekkerste vega recepten van
                        het web in één app. Swipe en creëer je persoonlijke
                        receptenboek.
                    </p>
                    <div className="flex flex-row items-end justify-center sm:justify-start my-4">
                        <p className="font-jost font-bold text-base mt-3 mr-3">
                            Volg je ons al?
                        </p>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.facebook.com/pages/category/Food---Beverage/Swipeyourbite-100910614905544/"
                        >
                            <img
                                src={FacebookIcon}
                                alt="facebook-icon"
                                className="object-contain mr-2"
                            />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.instagram.com/swipeyourbite/"
                        >
                            <img
                                src={InstagramIcon}
                                alt="instagram-icon"
                                className="object-contain mr-2"
                            />
                        </a>
                    </div>
                </div>
                <div className="flex-1  mb-4">
                    <h2 className="font-jost font-semibold text-xl mb-5">
                        Contact
                    </h2>
                    <div className="flex flex-row items-center my-2">
                        <img
                            src={Email}
                            alt="email-icon"
                            className="object-contain mr-2"
                        />
                        <a href="mailto:info@swipeyourbite.nl">
                            <p className="my-auto">info@swipeyourbite.nl</p>
                        </a>
                    </div>
                    <div className="flex flex-row my-2">
                        <img
                            src={Phone}
                            alt="email-icon"
                            className="object-contain mr-2"
                        />
                        <a href="tel:06-83 56 28 69">
                            <p>06-83 56 28 69</p>
                        </a>
                    </div>
                </div>
                <div className="flex-1   mb-4">
                    <h2 className="font-jost font-semibold text-xl mb-5">
                        Links
                    </h2>

                    <div className="flex flex-row my-2 hover:underline">
                        <a href="/terms-of-service" target="_blank">
                            <p className="my-auto">Terms of Use</p>
                        </a>
                    </div>
                    <div className="flex flex-row items-center my-2 hover:underline">
                        <a href="/privacy-policy" target="_blank">
                            <p className="my-auto">Privacy Policy</p>
                        </a>
                    </div>
                    <div className="flex flex-row my-2 hover:underline">
                        <a href="/cookie-policy" target="_blank">
                            <p className="my-auto">Cookies Policy</p>
                        </a>
                    </div>
                </div>
                <div className="flex-1">
                    <h2 className="font-jost font-semibold text-xl">
                        Download SwipeYourBite op
                    </h2>
                    <div className="flex flex-row flex-wrap justify-start items-center mt-4">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://play.google.com/store/apps/details?id=com.SwipeYourBite.application"
                        >
                            <img
                                className="mr-2"
                                src={GooglePlayIcon}
                                alt="google-play-icon"
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
            <p className="font-jost font-bold text-sm text-center pb-4 mb-0">
                © Copyright 2021. Swipe Your Bite. Alle rechten voorbehouden.
                Privacy Policy & Algemene voorwaarden.
            </p>
        </footer>
    )
}

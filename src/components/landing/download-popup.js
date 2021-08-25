import React from 'react'
import GooglePlayIcon from '../../assets/GooglePlay.webp'
import AppStoreIcon from '../../assets/AppStore.webp'
import CharactorIcon from '../../assets/charactor.webp'
import SpeechBubble from '../../assets/speech-bubble.webp'

export default function DownloadPopup() {
    const [bottomReached, setBottomReached] = React.useState(false)
    const scrollCheck = (event) => {
        if (
            window.innerHeight + window.scrollY - 500 ===
            document.body.offsetHeight - 500
        ) {
            setBottomReached(true)
        } else {
            setBottomReached(false)
        }
    }
    React.useEffect(() => {
        window.addEventListener('scroll', (e) => scrollCheck(e))

        return () => {
            // return a cleanup function to unregister our function since its gonna run multiple times
            window.removeEventListener('scroll', (e) => scrollCheck(e))
        }
    }, [])
    return (
        <>
            <div
                className={`${
                    bottomReached ? 'md:invisible' : 'md:visible'
                } fixed z-50 bottom-0 right-20 max-w-max invisible md:visible shadow-popup  bg-white py-5 px-8 rounded-xl`}
            >
                <div className="flex flex-row ">
                    <div>
                        <p className="font-jost text-base text-black">
                            Swipe, cook & feel good!
                        </p>
                        <p className="font-jost font-semibold text-2xl text-black">
                            Here you go! Download {<br />}gratis kookinspiratie.
                        </p>
                        <div className="flex flex-row my-2">
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
                    <img
                        src={CharactorIcon}
                        alt="charactor-icon"
                        className="h-32 w-auto self-center"
                    />
                    <img
                        src={SpeechBubble}
                        alt="speech-bubble"
                        className="absolute -right-10 -top-10"
                    />
                    <div className="absolute -right-4 -top-6">
                        <div className="relative transform rotate-12">
                            <p className="font-jost text-xs font-semibold text-black wr ">
                                Brocoolie!{<br />} Gerechten{<br />} met{<br />}{' '}
                                bloemkool!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`${
                    bottomReached ? 'invisible' : 'visible'
                } fixed z-50 bottom-0 left-0 max-w-max visible md:invisible shadow-popup  bg-white py-3 px-4 rounded-xl`}
            >
                <div className="flex flex-col ">
                    <div>
                        <p className="font-jost font-bold text-sm text-black">
                            Swipe, cook & feel good!
                        </p>
                        <p className="font-jost text-sm text-black">
                            Here you go! Download {<br />}gratis kookinspiratie.
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col my-2">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://play.google.com/store/apps/details?id=com.SwipeYourBite.application"
                            >
                                <img
                                    src={GooglePlayIcon}
                                    alt="google-play-icon"
                                    className="mr-3 w-24 h-auto object-cover"
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://apps.apple.com/nl/app/swipeyourbite/id1532039668"
                            >
                                <img
                                    src={AppStoreIcon}
                                    alt="app-store-icon"
                                    className="w-24 h-auto object-cover"
                                />
                            </a>
                        </div>
                        <img
                            src={CharactorIcon}
                            alt="charactor-icon"
                            className="h-16 w-auto object-cover self-center"
                        />
                        <img
                            src={SpeechBubble}
                            alt="speech-bubble"
                            className="absolute -right-16 top-10 w-28 h-auto"
                        />
                        <div className="absolute -right-10 top-14">
                            <div className="relative transform rotate-12">
                                <p className="font-jost text-xs font-semibold text-black wr ">
                                    Brocoolie!{<br />} Gerechten{<br />} met
                                    {<br />} bloemkool!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

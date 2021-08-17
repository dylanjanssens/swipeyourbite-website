import GooglePlayIcon from '../../assets/GooglePlay.webp'
import AppStoreIcon from '../../assets/AppStore.webp'
import CharactorIcon from '../../assets/charactor.webp'
import SpeechBubble from '../../assets/speech-bubble.webp'

export default function DownloadPopup() {
    return (
        <div className="invisible md:visible absolute shadow-popup -bottom-20 right-36 bg-white py-5 px-8 rounded-xl ">
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
    )
}

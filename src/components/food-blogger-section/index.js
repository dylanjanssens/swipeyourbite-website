import FoodBloggerSectionImage from '../../assets/food-blogger-section.webp'
import Form from './form'

export default function FoodBloggerSection() {
    return (
        <section className=" m-auto mb-32">
            <div className="container px-5 py-5 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 mb-10 lg:mb-0 rounded-lg overflow-hidden relative">
                    <img
                        alt="feature"
                        width="100%"
                        height="100%"
                        className="object-contain object-center h-full w-full"
                        src={FoodBloggerSectionImage}
                    />
                </div>
                <div className="flex flex-col flex-wrap justify-start items-start  lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                    <h2 className="font-jost font-semibold text-4.5xl text-black mb-6 ">
                        Foodbloggers unite!
                    </h2>
                    <p className="font-jost text-lg text-black mb-2">
                        Samen staan we sterker. Wij helpen jouw positieve bijdrage aan de planeet te vergroten. 
                        Doe je mee?
                    </p>
                    <Form />
                </div>
            </div>
        </section>
    )
}

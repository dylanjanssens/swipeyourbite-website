import React from 'react'
import RightArrowIcon from '../../assets/right-arrow.webp'

export default function NameField() {
    return (
        <form
            className="mb-4 w-4/5 mx-auto sm:mx-0"
            name="food-blogger-contact-form"
            method="post"
        >
            <input
                type="hidden"
                name="form-name"
                value="food-blogger-contact-form"
            />
            <div className="flex flex-col mb-4">
                <label className="font-jost text-lg text-left" htmlFor="name">
                    Je voor & achternaam
                </label>
                <input
                    className="border py-3 sm:py-6 px-5 rounded-full font-jost font-bold text-lg text-black mt-4 outline-none focus:ring-1"
                    type="text"
                    name="name"
                    id="name"
                />
            </div>
            <div className="flex flex-col mb-4">
                <label className="font-jost text-lg text-left" htmlFor="email">
                    Je e-mailadres
                </label>
                <input
                    className="border py-3 sm:py-6 px-5 rounded-full font-jost font-bold text-lg text-black mt-4 outline-none focus:ring-1"
                    type="email"
                    name="email"
                    id="email"
                />
            </div>
            <div className="flex flex-col mb-4">
                <label className="font-jost text-lg text-left" htmlFor="phone">
                    Je telefoonnummer (optioneel)
                </label>
                <input
                    className="border py-3 sm:py-6 px-5 rounded-full font-jost font-bold text-lg text-black mt-4 outline-none focus:ring-1"
                    type="text"
                    name="phone"
                    id="phone"
                />
            </div>
            <div className="flex flex-col mb-6">
                <label className="font-jost text-lg text-left" htmlFor="url">
                    URL van je blog{' '}
                </label>
                <input
                    className="border py-3 sm:py-6 px-5 rounded-full font-jost font-bold text-lg text-black mt-4 outline-none focus:ring-1"
                    type="text"
                    name="website"
                    id="url"
                />
            </div>

            <button
                className="w-full mb-5 sm:mb-0 mt-10 bg-button
                 rounded-full py-3 sm:py-6  px-5 font-jost font-semibold text-xl
                  text-white flex flex-row justify-between  items-center outline-none focus:ring-1"
                type="submit"
            >
                Neem contact op
                <img
                    className="ml-10 mr-5"
                    alt="down-arrow-icon"
                    src={RightArrowIcon}
                />
            </button>
        </form>
    )
}

import React from 'react'

export default function NameField() {
    return (
        <form className="mb-4 w-full" action="/" method="post">
            <div className="flex flex-col mb-4">
                <label className="font-jost text-lg" htmlFor="name">
                    Je voor & achternaam
                </label>
                <input
                    className="border py-6 px-5 rounded-full font-jost font-bold text-lg text-black mt-4 outline-none focus:ring-1"
                    type="text"
                    name="name"
                    id="name"
                />
            </div>
            <div className="flex flex-col mb-4">
                <label className="font-jost text-lg" htmlFor="email">
                    Je e-mailadres
                </label>
                <input
                    className="border py-6 px-5 rounded-full font-jost font-bold text-lg text-black mt-4 outline-none focus:ring-1"
                    type="email"
                    name="email"
                    id="email"
                />
            </div>
            <div className="flex flex-col mb-4">
                <label className="font-jost text-lg" htmlFor="phone">
                    Je telefoonnummer (optioneel)
                </label>
                <input
                    className="border py-6 px-5 rounded-full font-jost font-bold text-lg text-black mt-4 outline-none focus:ring-1"
                    type="text"
                    name="phone"
                    id="phone"
                />
            </div>
            <div className="flex flex-col mb-6">
                <label className="font-jost text-lg" htmlFor="url">
                    URL van je blog{' '}
                </label>
                <input
                    className="border py-6 px-5 rounded-full font-jost font-bold text-lg text-black mt-4 outline-none focus:ring-1"
                    type="text"
                    name="url"
                    id="url"
                />
            </div>
            <button
                className="w-full mb-5 sm:mb-0 mt-10 bg-button
                 rounded-full py-6 px-5 font-jost font-semibold text-xl
                  text-white flex flex-row justify-between outline-none focus:ring-1"
                type="submit"
            >
                Neem contact op
            </button>
        </form>
    )
}

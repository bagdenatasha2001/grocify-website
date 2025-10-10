import React from 'react'
import Banner from '../components/Banner/Banner'

import Bgcontact from '../assets/images/contact-banner.jpg'


export default function Contact() {
    return (
        <div>
            <Banner title=" Contact Us " bgImage={Bgcontact} />


            <div>
                <div className="py-12 px-6 text-center">
                    <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                        Have any questions or feedback? We’d love to hear from you! Reach out using the form below or via email.
                    </p>

                    <form className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        ></textarea>
                        <button
                            type="submit"
                            className=" bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 md:text-lg text-md rounded-lg 
                             hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

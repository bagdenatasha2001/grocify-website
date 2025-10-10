import React, { useState } from 'react'
import Banner from '../components/Banner/Banner'
import BgFaq from '../assets/images/faq-banner.jpg'

export default function Faq(){

     const [openIndex, setOpenIndex] = useState(null);

        const toggleFAQ = (index) => {
            if (openIndex === index) {
                setOpenIndex(null);
            } else {
                setOpenIndex(index);
            }
        };


    const faqs = [
        {
            question: "How can I order products on Grocify?",
            answer:
                "You can order products by selecting the items and adding them to your cart, then proceed to checkout.",
        },
        {
            question: "What payment methods are available?",
            answer: "We accept credit/debit cards, UPI, and net banking for payments.",
        },
        {
            question: "How long does delivery take?",
            answer: "Delivery usually takes 2-5 business days depending on your location.",
        },
        {
            question: "Can I return a product?",
            answer: "Yes, you can return products within 7 days of delivery if they are unopened.",
        },
    ];

    

        return (
            <div>
                <Banner title= "FAQ's"   bgImage={BgFaq } />


                <div className="min-h-screen bg-gray-50 py-10 px-5 md:px-20">
                    <h1 className="text-4xl font-bold text-center mb-10 text-orange-500">Frequently Asked Questions</h1>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border rounded-lg bg-white shadow">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                                >
                                    <span className="font-medium text-gray-800">{faq.question}</span>
                                    <span className="text-orange-500 text-xl">{openIndex === index ? "-" : "+"}</span>
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 py-4 border-t text-gray-600">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        )
    }

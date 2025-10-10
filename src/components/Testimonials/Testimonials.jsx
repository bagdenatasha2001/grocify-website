// import React from 'react'

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Heading from '../Heading/Heading.jsx'
import { IoIosArrowBack, IoIosArrowForward, } from "react-icons/io";
import customer1 from '../../assets/images/customer1.jpg'
import customer2 from '../../assets/images/customer2.jpg'
import customer3 from '../../assets/images/customer3.jpg'
import customer4 from '../../assets/images/customer4.jpg'
import customer5 from '../../assets/images/customer5.jpg'
import { FaStar } from 'react-icons/fa';


export default function Testimonials() {

    const review = [
        {
            id: 1,
            name: 'Emily Johnson',
            profession: 'Food Blogger',
            rating: 3,
            para: 'FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!',
            image: customer1,
        },
        {
            id: 2,
            name: 'David Smith',
            profession: 'Chef',
            rating: 4,
            para: 'As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!',
            image: customer2,
        },
        {
            id: 3,
            name: 'Alya Zahra',
            profession: 'Model',
            rating: 3,
            para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
            image: customer3,
        },
        {
            id: 4,
            name: 'Carlos Mendes',
            profession: 'Fitness Coach',
            rating: 5,
            para: 'I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!',
            image: customer4,
        },
        {
            id: 5,
            name: 'Natcha Phongchai',
            profession: 'Nutritionist',
            rating: 3,
            para: 'FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.',
            image: customer5,
        },
    ]



    return (
        <section>
            <div className=' max-w-[1400px] mx-auto px-10 py-20'>
                <Heading highlight="Customers" heading="Saying" />

                <div className=' flex justify-end  mt-5 py-5 gap-x-3'>

                    <button className=' custom-prev w-11 h-11 rounded-lg text-2xl bg-zinc-100 flex justify-center items-center text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer '>
                        <IoIosArrowBack />
                    </button>

                    <button className=' custom-next w-11 h-11 rounded-lg text-2xl bg-zinc-100 flex justify-center items-center text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>
                        <IoIosArrowForward />
                    </button>

                </div>


                <Swiper navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev"
                }}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 20 }
                    }}
                    modules={[Navigation]} className="mySwiper">
                    {
                        review.map(item => {
                            return (
                                <SwiperSlide className='bg-zinc-100 rounded-xl p-8'>

                                    <div className='flex gap-5 items-center'>
                                        <div className=' w-16 h-16 rounded-full bg-red-500 outline-2  outline-orange-500 outline-offset-4 overflow-hidden'>
                                            <img src={item.image} className='w-full h-full' />
                                        </div>
                                        <div>
                                            <h5 className='text-xl font-bold'>{item.name}</h5>
                                            <p className='text-zinc-600'>{item.profession}</p>
                                            <span className='flex text-yellow-400 mt-3 text-xl gap-1'>
                                                {Array.from({ length: item.rating }).map((_, i) => (
                                                    <FaStar key={i} />
                                                ))}
                                            </span>
                                        </div>


                                    </div>

                                    <div className='mt-10 min-h-[15vh]'>
                                        <p className='text-zinc-600'>{item.para}</p>
                                    </div>

                                </SwiperSlide>

                            )
                        })
                    }
                </Swiper>




            </div>
        </section>
    )
}

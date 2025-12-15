import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Swiper from 'swiper'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';


export default function NavCategoryCarousel() {

    const categories = [
        {
            name: 'Make Up',
            href: '/makeup',
            icon: '💄',
            bg: 'bg-gradient-to-br from-pink-50 to-primary/10',
        },
        {
            name: 'Skin Care',
            href: '/skincare',
            icon: '✨',
            bg: 'bg-gradient-to-br from-blue-50 to-primary/10',
        },
        {
            name: 'Personal Care',
            href: '/personal-care',
            icon: '🧴',
            bg: 'bg-gradient-to-br from-green-50 to-primary/10',
        },
        {
            name: 'Bags',
            href: '/bags',
            icon: '👜',
            bg: 'bg-gradient-to-br from-amber-50 to-primary/10',
        },
        {
            name: 'Jewelry',
            href: '/jewelry',
            icon: '💍',
            bg: 'bg-gradient-to-br from-purple-50 to-primary/10',
        },
        {
            name: 'Shoes',
            href: '/shoes',
            icon: '👠',
            bg: 'bg-gradient-to-br from-red-50 to-primary/10',
        },
        {
            name: 'Watch',
            href: '/watch',
            icon: '⌚',
            bg: 'bg-gradient-to-br from-gray-50 to-primary/10',
        },
        {
            name: 'Basket',
            href: '/basket',
            icon: '🧺',
            bg: 'bg-gradient-to-br from-yellow-50 to-primary/10',
        },
        {
            name: 'Serum',
            href: '/serum',
            icon: '🧪',
            bg: 'bg-gradient-to-br from-indigo-50 to-primary/10',
        },
        {
            name: 'Toner',
            href: '/toner',
            icon: '💦',
            bg: 'bg-gradient-to-br from-cyan-50 to-primary/10',
        },
    ];
    return (
        <div className="border-t border-gray-100 py-2">
            <div className="container mx-auto px-4 relative">
                <div className="flex items-center justify-between">
                    <div className="relative w-full container mx-auto">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={16}
                            slidesPerView={'auto'}
                            navigation={{
                                nextEl: '.category-swiper-next',
                                prevEl: '.category-swiper-prev',
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 5,
                                },
                                768: {
                                    slidesPerView: 6,
                                },
                                1024: {
                                    slidesPerView: 8,
                                },
                            }}
                            className="!px-10"
                        >
                            {categories.map((category, index) => (
                                <SwiperSlide key={index} className="!w-auto">
                                    <Link
                                        href={category.href}
                                        className="flex gap-2 items-center px-2 py-1 group"
                                    >
                                        <div className={`w-5 lg:w-9 h-5 lg:h-9 rounded-full flex items-center justify-center text-2xl ${category.bg} group-hover:scale-110 transition-transform`}>
                                            {category.icon}
                                        </div>
                                        <span className="text-xs lg:text-sm mt-1 text-gray-600 group-hover:text-primary">
                                            {category.name}
                                        </span>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation Buttons */}
                        <button className="category-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-50">
                            <ChevronLeft className="h-5 w-5 text-gray-600" />
                        </button>
                        <button className="category-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-50">
                            <ChevronRight className="h-5 w-5 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const STATS = [
    { label: "Average Rating", value: "4.9 / 5" },
    { label: "Customer Reviews", value: "2,500+" },
    { label: "Satisfaction Rate", value: "98%" },
];

const REVIEWS = [
    {
        id: 1,
        text: "The entire process was incredibly smooth. I found my dream car at a great price, and the inspection report gave me complete confidence. Customer service was outstanding!",
        author: "Ahmed Hassan",
        role: "Bought Honda Civic 2020",
        avatar: "/images/avatars/avatar-1.png", // specific placeholder or generic
        initials: "AH"
    },
    {
        id: 2,
        text: "I sold my car in just 3 days! The platform made it so easy to list, and I got multiple serious bids. Payment was quick and secure. Highly recommend to anyone selling!",
        author: "Sarah Jenkins",
        role: "Sold Toyota Corolla 2019",
        avatar: "/images/avatars/avatar-2.png",
        initials: "SJ"
    },
    {
        id: 3,
        text: "As a first-time buyer, I was nervous about buying online. But Car Mandi's detailed inspection reports and transparent process made me feel completely secure.",
        author: "Michael Chen",
        role: "Bought Kia Sportage 2021",
        avatar: "/images/avatars/avatar-3.png",
        initials: "MC"
    },
    {
        id: 4,
        text: "Best car buying experience ever! The live auction was exciting, and I got an amazing deal. The delivery was on time, and the car was exactly as described.",
        author: "Fatima Ali",
        role: "Bought Honda City 2022",
        avatar: "/images/avatars/avatar-4.png",
        initials: "FA"
    },
    {
        id: 5,
        text: "Professional service from start to finish. The free inspection added value to my listing, and I got more bids than expected. Great platform for sellers!",
        author: "Omar Farooq",
        role: "Sold Suzuki Swift 2020",
        avatar: "/images/avatars/avatar-5.png",
        initials: "OF"
    },
    {
        id: 6,
        text: "The transparency is what sold me. Every detail was documented, from the auction sheet to the inspection report. No surprises, just a perfect car!",
        author: "Zainab Khan",
        role: "Bought Hyundai Tucson 2021",
        avatar: "/images/avatars/avatar-6.png",
        initials: "ZK"
    },
];

export function InspectionTestimonials() {
    return (
        <section className="w-full py-8 sm:py-12 md:py-16 bg-white overflow-hidden">
            <div className="w-full mx-auto px-5 sm:px-4 md:px-6" style={{ maxWidth: "1360px" }}>

                {/* Header */}
                <div className="mb-6 sm:mb-8 md:mb-10">
                    <h2 className="text-[22px] xs:text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#1F1F1F] mb-2 sm:mb-3">
                        Testimonials
                    </h2>
                    <p className="text-[13px] sm:text-[14px] text-[#757575]">
                        Read what our customers have to say about their experience with Car Mandi
                    </p>
                </div>

                {/* Stats Cards - Updated to match the uploaded image exactly */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10">
                    {STATS.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-[#F8FBFF] rounded-[8px] sm:rounded-[12px] border border-[#E9ECEF]/50 flex flex-col items-start justify-center px-2 sm:px-5 md:px-6 shadow-sm h-[68px] sm:h-[80px]"
                        >
                            <span className="text-[10px] xs:text-[11px] sm:text-[13px] md:text-[14px] text-[#495057] mb-0.5 leading-none">{stat.label}</span>
                            <span className="text-[15px] xs:text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#212529] leading-none">{stat.value}</span>
                        </div>
                    ))}
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                    {REVIEWS.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white rounded-[12px] sm:rounded-[14px] md:rounded-[16px] p-3.5 sm:p-5 md:p-6 border border-[#E0E0E0] hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Stars */}
                            <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} size={14} fill="#F27D28" color="#F27D28" className="sm:w-[16px] sm:h-[16px]" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-[12px] sm:text-[13px] text-[#495057] leading-relaxed mb-4 sm:mb-5 md:mb-6 min-h-[70px] sm:min-h-[80px]">
                                {review.text}
                            </p>

                            {/* Divider */}
                            <div className="border-t border-dashed border-[#DEE2E6] mb-3 sm:mb-4" />

                            {/* User Profile */}
                            <div className="flex items-center gap-2.5 sm:gap-3">
                                {/* Avatar Placeholder */}
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E9ECEF] overflow-hidden flex items-center justify-center flex-shrink-0">
                                    <span className="text-[10px] sm:text-xs font-bold text-[#495057]">{review.initials}</span>
                                    {/* Ideally we would use Image component here if real images existed */}
                                    {/* <Image src={review.avatar} alt={review.author} width={40} height={40} /> */}
                                </div>

                                <div>
                                    <h4 className="text-[13px] sm:text-[14px] font-semibold text-[#212529]">
                                        {review.author}
                                    </h4>
                                    <p className="text-[11px] sm:text-[12px] text-[#868E96]">
                                        {review.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default InspectionTestimonials;

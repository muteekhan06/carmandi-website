"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

/**
 * Steps for booking a car inspection
 */
const INSPECTION_STEPS = [
    {
        number: "01",
        title: "Schedule Appointment",
        description: "Choose a convenient date and time for your inspection"
    },
    {
        number: "02",
        title: "Prepare Vehicle",
        description: "Ensure the vehicle is clean and accessible for inspection"
    },
    {
        number: "03",
        title: "Address Recommendations",
        description: "Follow up on any repairs or services suggested in the report"
    },
    {
        number: "04",
        title: "Receive Inspection Report",
        description: "Get a detailed report of the findings after the inspection"
    }
];

// Video thumbnail - mechanic inspecting car
const VIDEO_THUMBNAIL = "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&auto=format&fit=crop&q=80";

/**
 * HowWeInspectSection - Video section with inspection steps
 */
export function HowWeInspectSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="w-full py-8 sm:py-12 md:py-16 bg-[#0A1128] overflow-hidden">
            <div className="w-full mx-auto px-5 sm:px-4 md:px-6" style={{ maxWidth: "1360px" }}>

                {/* Section Header */}
                <div className="mb-6 sm:mb-7 md:mb-8">
                    <h2 className="text-[22px] xs:text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white mb-2 sm:mb-3">
                        How we Inspect Cars
                    </h2>
                    <p className="text-[13px] sm:text-[14px] text-white/70 line-clamp-2 sm:line-clamp-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                </div>

                {/* Premium Video Player Section - Height Doubled for mobile (8/9 ratio) */}
                <div className="w-full aspect-[8/9] sm:aspect-video max-h-[600px] xs:max-h-[700px] sm:max-h-[800px] md:max-h-[850px] lg:max-h-[900px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden relative mb-8 sm:mb-10 md:mb-12 shadow-xl bg-black">
                    {!isPlaying ? (
                        /* Thumbnail Overlay */
                        <div
                            className="absolute inset-0 cursor-pointer group touch-manipulation"
                            onClick={() => setIsPlaying(true)}
                        >
                            {/* Video Thumbnail */}
                            <Image
                                src={VIDEO_THUMBNAIL}
                                alt="How we inspect cars"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105 group-active:scale-105 opacity-60"
                                priority
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1360px"
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/60" />

                            {/* Play Button - Center */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-active:scale-110 group-hover:bg-white">
                                    <Play fill="#1F1F1F" color="#1F1F1F" size={20} className="relative left-0.5 xs:w-[24px] xs:h-[24px] sm:w-[28px] sm:h-[28px]" />
                                </div>
                            </div>

                            {/* Bottom Content */}
                            <div className="absolute bottom-0 left-0 w-full p-4 xs:p-5 sm:p-6 md:p-8">
                                <div className="max-w-xl">
                                    <h3 className="text-[18px] xs:text-[20px] sm:text-[22px] md:text-[26px] font-semibold text-white mb-1.5 sm:mb-2">
                                        Watch: How we inspect cars
                                    </h3>
                                    <p className="text-white/70 text-[12px] xs:text-[13px] md:text-[14px] mb-3 sm:mb-4 md:mb-5 leading-relaxed line-clamp-2 sm:line-clamp-none">
                                        See how to register, place bids, and win your next car in just 2 minutes. Watch now and start bidding today!
                                    </p>
                                    <button className="bg-white text-[#1F1F1F] px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 rounded-full text-[12px] xs:text-[13px] font-semibold hover:bg-[#F5F5F5] active:bg-[#EBEBEB] transition-all duration-300 shadow-lg touch-manipulation">
                                        Watch now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* YouTube Player */
                        <iframe
                            src={`https://www.youtube.com/embed/2E6v68X2Ysc?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                            title="How we inspect cars"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0"
                        />
                    )}
                </div>

                {/* Steps Section */}
                <div className="mt-8 sm:mt-10 md:mt-12">
                    {/* Steps Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
                        <h3 className="text-[17px] xs:text-[18px] sm:text-[19px] md:text-[20px] font-semibold text-white">
                            Steps to book a car inspection
                        </h3>
                        <Link
                            href="/search"
                            className="hidden sm:flex items-center justify-center px-5 sm:px-6 py-2.5 bg-[#4285f4] text-white rounded-lg font-medium text-[13px] hover:bg-[#3367d6] active:bg-[#2858c4] transition-colors w-fit touch-manipulation"
                        >
                            Book Inspection
                        </Link>
                    </div>

                    {/* Step Cards */}
                    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        {INSPECTION_STEPS.map((step, index) => (
                            <div
                                key={index}
                                className="flex flex-col bg-[rgba(3,9,24,0.2)] rounded-[12px] sm:rounded-[14px] md:rounded-[16px] py-[16px] sm:py-[18px] md:py-[20px] px-[14px] sm:px-[15px] md:px-[16px] shadow-[0px_1px_3px_0px_rgba(160,160,160,0.23)] min-h-[160px] xs:min-h-[170px] sm:min-h-[181px]"
                            >
                                {/* Step Number */}
                                <span className="text-[12px] sm:text-[13px] font-bold text-[#EB722E] mb-3 sm:mb-4 block">
                                    {step.number}
                                </span>

                                {/* Step Title */}
                                <h4 className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-white mb-1.5 sm:mb-2">
                                    {step.title}
                                </h4>

                                {/* Step Description */}
                                <p className="text-[12px] sm:text-[13px] text-white/70 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HowWeInspectSection;

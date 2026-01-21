"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { INSPECTION_HERO_CONTENT } from "@/constants/inspectionData";

export function InspectionHeroSection() {
    return (
        <section className="relative w-full sm:w-[99%] h-[280px] xs:h-[320px] sm:h-[350px] md:h-[370px] lg:h-[400px] mx-auto max-w-[1800px]">
            {/* Container with rounded corners and overflow hidden */}
            <div className="relative w-full h-full overflow-hidden rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] bg-[#050B17]">

                {/* Main Background - Black with Dual Images */}
                <div className="absolute inset-0 bg-black">
                    {/* Left Image - Positioned at Start - Hidden on Mobile */}
                    <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-1/2 h-full z-0">
                        <Image
                            src={INSPECTION_HERO_CONTENT.images.left}
                            alt="Inspection Tools"
                            fill
                            className="object-cover object-left"
                            priority={true}
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 50vw"
                        />
                        {/* Seamless Fade to Center Black */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black" />
                    </div>

                    {/* Right Image - Positioned at End */}
                    <div className="absolute right-0 top-0 bottom-0 w-1/2 h-full z-0">
                        <Image
                            src={INSPECTION_HERO_CONTENT.images.right}
                            alt="Inspected Car"
                            fill
                            className="object-cover object-right"
                            priority={true}
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 50vw"
                        />
                        {/* Seamless Fade to Center Black */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black" />
                    </div>
                </div>

                {/* Content Layer */}
                <div className="relative z-20 h-full flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 font-outfit">

                    {/* Header Group */}
                    <div className="mb-4 sm:mb-6 md:mb-8 animate-fade-in text-center">
                        <h1 className="text-[32px] xs:text-[38px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-bold tracking-tight mb-1 sm:mb-2 leading-none drop-shadow-xl">
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#1CB5E0]"
                                style={{ WebkitBackgroundClip: 'text' }}
                            >
                                {INSPECTION_HERO_CONTENT.heading.highlight}
                            </span>
                        </h1>
                        <p className="text-[13px] xs:text-[14px] sm:text-[16px] md:text-[18px] text-gray-100 font-light tracking-wide drop-shadow-md px-2 sm:px-4">
                            {INSPECTION_HERO_CONTENT.heading.sub}
                        </p>
                    </div>

                    {/* Search Pill Container - Fully Responsive */}
                    <div
                        className="w-full max-w-[320px] xs:max-w-[380px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[640px] h-[60px] xs:h-[68px] sm:h-[74px] md:h-[80px] rounded-[12px] sm:rounded-[14px] md:rounded-[16px] flex items-center justify-center px-2 sm:px-3 shadow-lg backdrop-blur-md animate-slide-up"
                        style={{
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                    >
                        {/* Action Button - Centered Orange Gradient Pill */}
                        <Link href="/search" className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px]">
                            <button
                                className="w-full h-[44px] xs:h-[48px] sm:h-[52px] rounded-[48px] flex items-center justify-center gap-2 sm:gap-3 hover:opacity-95 active:scale-[0.98] transition-all shadow-lg touch-manipulation"
                                style={{
                                    background: 'linear-gradient(94.14deg, #F5AF19 -25.56%, #EB722E 83.76%)'
                                }}
                            >
                                <Search size={18} className="text-white sm:hidden" strokeWidth={2.5} />
                                <Search size={20} className="text-white hidden sm:block md:hidden" strokeWidth={2.5} />
                                <Search size={22} className="text-white hidden md:block" strokeWidth={2.5} />
                                <span className="text-white text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] font-medium">{INSPECTION_HERO_CONTENT.search.buttonLabel}</span>
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import Link from "next/link";
import { HERO_CONTENT } from "@/constants/heroData";

export function HeroSection() {
    const [activeTab, setActiveTab] = useState(HERO_CONTENT.tabs[0].name);

    return (
        <section className="relative w-[99%] h-[370px] mx-auto max-w-[1800px]">
            {/* Container with rounded corners and overflow hidden */}
            <div className="relative w-full h-full overflow-hidden rounded-[24px] bg-[#050B17]">

                {/* Main Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={HERO_CONTENT.images.background}
                        alt="Car Mandi Hero Background"
                        fill
                        className="object-cover"
                        priority={true} // High priority for LCP
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
                        quality={100}
                    />

                    {/* Center Gradient Blur Overlay matching Figma - Vital for text readability */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-[675px] h-full z-10"
                        style={{
                            background: 'linear-gradient(271.62deg, rgba(0, 0, 0, 0) 2.97%, rgba(0,0,0,0.8) 37.29%, rgba(0, 0, 0, 0) 71.61%)',
                        }}
                    />

                    {/* Overall Dark Overlay from Figma to unify contrast */}
                    <div className="absolute inset-0 bg-black/10 z-10 rounded-[24px]" />

                    {/* Bottom Gradient overlay from Figma for smooth fade */}
                    <div
                        className="absolute inset-0 z-10"
                        style={{
                            background: 'linear-gradient(354.69deg, #000000 33.25%, rgba(0, 0, 0, 0) 91.33%)',
                            opacity: 0.34
                        }}
                    />
                </div>

                {/* Content Layer */}
                <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 font-outfit">

                    {/* Headings */}
                    <div className="flex flex-col items-center gap-1 mb-[22px] text-white">
                        <h2 className="text-[14px] sm:text-[16px] tracking-[0.16em] uppercase font-normal text-center drop-shadow-md mb-1">
                            {HERO_CONTENT.heading.prefix}
                        </h2>
                        <h1 className="text-[24px] sm:text-[30px] font-semibold text-center leading-[145%] drop-shadow-md px-2">
                            {HERO_CONTENT.heading.main}
                        </h1>
                    </div>

                    {/* Center Search/Tabs Container - Precise Figma implementation */}
                    <div
                        className="w-full max-w-[640px] min-h-[132px] sm:h-[132px] rounded-2xl flex flex-col items-center shadow-[0px_1px_3px_rgba(160,160,160,0.23)] relative px-2 sm:px-0 pb-4 sm:pb-0"
                        style={{
                            background: 'linear-gradient(90deg, rgba(3, 9, 24, 0.6) 0%, rgba(0, 0, 0, 0.6) 52.76%, rgba(5, 4, 8, 0.6) 100%)',
                        }}
                    >

                        {/* Tabs */}
                        <div role="tablist" className="w-full flex flex-wrap justify-center items-start pt-[16px] gap-x-[24px] gap-y-2 relative mb-[16px]">
                            {HERO_CONTENT.tabs.map((tab) => (
                                <button
                                    key={tab.name}
                                    role="tab"
                                    aria-selected={activeTab === tab.name}
                                    onClick={() => setActiveTab(tab.name)}
                                    className={`text-[13px] sm:text-[14px] leading-[145%] pb-2 transition-colors relative px-2 ${activeTab === tab.name
                                        ? "text-white font-bold"
                                        : "text-[#D1D1D1] font-medium hover:text-white"
                                        }`}
                                >
                                    {tab.label}
                                    {activeTab === tab.name && (
                                        <div className="absolute bottom-[1px] left-0 right-0 h-[2px] bg-white rounded-full" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Tab Panel / Search Input Area */}
                        <div className="w-full flex justify-center items-center">
                            {activeTab === "Browse Live Auctions" ? (
                                <div className="w-full max-w-[592px] h-[54px] bg-white rounded-[48px] flex items-center justify-between pl-[16px] sm:pl-[24px] pr-[4px] py-[4px]">

                                    {/* Input Label/Field */}
                                    <div className="flex flex-col items-start justify-center h-full flex-1 min-w-0 mr-2">
                                        <input
                                            type="text"
                                            aria-label="Search car make or model"
                                            placeholder={HERO_CONTENT.search.placeholder}
                                            className="w-full text-[#383838] text-[15px] sm:text-[18px] font-normal outline-none placeholder:text-[#383838] bg-transparent truncate"
                                        />
                                    </div>

                                    {/* Search Button */}
                                    <Link
                                        href="/search"
                                        aria-label="Search"
                                        className="flex-shrink-0 h-[46px] w-[46px] sm:w-[104px] rounded-[40px] flex items-center justify-center sm:gap-[8px] hover:opacity-90 transition-opacity"
                                        style={{
                                            background: 'linear-gradient(94.14deg, #F5AF19 -25.56%, #EB722E 83.76%)'
                                        }}
                                    >
                                        <Search size={18} className="text-white" strokeWidth={3} />
                                        <span className="hidden sm:inline text-white text-[16px] font-normal leading-[140%]">{HERO_CONTENT.search.buttonLabel}</span>
                                    </Link>

                                </div>
                            ) : (
                                <Link
                                    href="/search"
                                    className="w-full max-w-[400px] h-[54px] rounded-[48px] flex items-center justify-center gap-3 hover:opacity-95 transition-opacity shadow-lg"
                                    style={{
                                        background: 'linear-gradient(94.14deg, #F5AF19 -25.56%, #EB722E 83.76%)'
                                    }}
                                >
                                    <Search size={22} className="text-white" strokeWidth={2.5} />
                                    <span className="text-white text-[16px] sm:text-[20px] font-medium">{HERO_CONTENT.search.selectCarLabel}</span>
                                </Link>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;

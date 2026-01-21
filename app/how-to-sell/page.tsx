"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header, Footer } from "@/components";
import { layout } from "@/constants/theme";
import { AboutGradient } from "@/components/about";
import { Play } from "lucide-react";

// ----------------------------------------------------------------------
// DATA
// ----------------------------------------------------------------------

const SELLING_STEPS = [
    {
        number: "01",
        title: "Registration",
        description: "Create your account in minutes. Simple sign-up process with email and phone verification. Start exploring quality cars immediately after verification.",
        imagePosition: "left" as const,
        image: "/images/steps/step-1.svg",
        badgeColor: "#153481" // Navy blue
    },
    {
        number: "02",
        title: "Select Product",
        description: "Browse our curated selection with detailed photos, inspection reports, and complete vehicle history. Filter by make, model, year, and price.",
        imagePosition: "right" as const,
        image: "/images/steps/step-2.svg",
        badgeColor: "#EB722E" // Orange
    },
    {
        number: "03",
        title: "Go to Bidding",
        description: "Join live auctions with real-time bidding. Transparent system ensures fair competition for your dream car at the best market price.",
        imagePosition: "left" as const,
        image: "/images/steps/step-3.svg",
        badgeColor: "#153481" // Navy blue
    },
    {
        number: "04",
        title: "Closing the Auction",
        description: "Win your car and we handle the rest. Complete paperwork, secure payment processing, and delivery arrangement all managed for you.",
        imagePosition: "right" as const,
        image: "/images/steps/step-4.svg",
        badgeColor: "#EB722E" // Orange
    }
];

// Video thumbnail - car headlight image matching the design
const VIDEO_THUMBNAIL = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&auto=format&fit=crop&q=80";

// ----------------------------------------------------------------------
// PAGE COMPONENT
// ----------------------------------------------------------------------

export default function HowToSellPage() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <>
            <main className="relative w-full overflow-hidden bg-white min-h-screen font-outfit">
                <AboutGradient />
                <Header transparent={true} />

                {/* Content Container */}
                <div
                    className="mx-auto w-full px-6 pt-4 pb-20 relative z-10"
                    style={{ maxWidth: layout.container["2xl"] }}
                >
                    {/* Page Header */}
                    <div className="mb-6">
                        <h1 className="text-[44px] font-semibold text-[#1F1F1F] mb-4 leading-tight">
                            How to Sell
                        </h1>
                        <p className="text-[#666666] text-[15px] leading-relaxed">
                            Selling your car has never been easier. List your vehicle on Car Mandi and reach thousands of verified buyers through our transparent auction system. Get the best market price with zero hassle, complete documentation support, and secure payment processing.
                        </p>
                    </div>

                    {/* Premium Video Player Section */}
                    <div className="w-full aspect-video max-h-[500px] rounded-[24px] overflow-hidden relative mb-20 shadow-xl bg-[#0a0a0a]">
                        {!isPlaying ? (
                            /* Thumbnail Overlay */
                            <div
                                className="absolute inset-0 cursor-pointer group"
                                onClick={() => setIsPlaying(true)}
                            >
                                {/* Video Thumbnail - Car Headlight */}
                                <Image
                                    src={VIDEO_THUMBNAIL}
                                    alt="How to Sell Video Thumbnail"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    priority
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                                        <Play fill="#EB722E" color="#EB722E" size={36} className="relative left-1" />
                                    </div>
                                </div>

                                {/* Bottom Content */}
                                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                                    <div className="max-w-2xl">
                                        <h2 className="text-[28px] md:text-[32px] font-semibold text-white mb-2 drop-shadow-lg">
                                            Watch: How to Sell in 2 Minutes
                                        </h2>
                                        <p className="text-white/80 text-[14px] md:text-[15px] mb-6 leading-relaxed max-w-lg">
                                            See how to list your car, schedule inspection, and get the best price. Watch now and start selling today!
                                        </p>
                                        <button className="bg-white text-[#1F1F1F] px-7 py-3 rounded-full text-[14px] font-semibold hover:bg-[#EB722E] hover:text-white transition-all duration-300 shadow-lg">
                                            Watch now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* YouTube Player */
                            <iframe
                                src={`https://www.youtube.com/embed/2E6v68X2Ysc?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                                title="How to Sell on Car Mandi"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="absolute inset-0"
                            />
                        )}
                    </div>

                    {/* Your Selling Journey Section */}
                    <div>
                        <div className="mb-10">
                            <h2 className="text-[24px] font-semibold text-[#1F1F1F] mb-2">
                                Your Selling Journey
                            </h2>
                            <p className="text-[#666666] text-[14px]">
                                Expert advice to help you win auctions and get the best deals
                            </p>
                        </div>

                        {/* Steps */}
                        <div className="flex flex-col gap-8">
                            {SELLING_STEPS.map((step, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${step.imagePosition === "right" ? "lg:flex-row" : ""
                                        }`}
                                >
                                    {/* Image with Number Badge - Conditionally Rendered First or Second */}
                                    {step.imagePosition === "left" && (
                                        <div className="w-full lg:w-[320px] flex-shrink-0 relative">
                                            <div className="w-full h-[220px] rounded-[20px] overflow-hidden relative">
                                                <Image
                                                    src={step.image}
                                                    alt={step.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            {/* Number Badge - Bottom Right */}
                                            <div
                                                className="absolute bottom-4 right-4 w-[56px] h-[56px] rounded-[12px] flex items-center justify-center shadow-lg"
                                                style={{ backgroundColor: step.badgeColor }}
                                            >
                                                <span className="text-white text-[20px] font-bold">
                                                    {step.number}
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Text Content */}
                                    <div className={`flex-1 ${step.imagePosition === "left" ? "lg:pl-6" : "lg:pl-10 lg:pr-8"}`}>
                                        <h3 className="text-[22px] font-semibold text-[#1F1F1F] mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-[15px] text-[#666666] leading-relaxed pr-4">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Image with Number Badge - Rendered After Text for Right Position */}
                                    {step.imagePosition === "right" && (
                                        <div className="w-full lg:w-[320px] flex-shrink-0 relative">
                                            <div className="w-full h-[220px] rounded-[20px] overflow-hidden relative">
                                                <Image
                                                    src={step.image}
                                                    alt={step.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            {/* Number Badge - Bottom Right */}
                                            <div
                                                className="absolute bottom-4 right-4 w-[56px] h-[56px] rounded-[12px] flex items-center justify-center shadow-lg"
                                                style={{ backgroundColor: step.badgeColor }}
                                            >
                                                <span className="text-white text-[20px] font-bold">
                                                    {step.number}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}

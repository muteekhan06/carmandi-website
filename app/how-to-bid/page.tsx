"use strict";
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

// Car auction related YouTube video
const VIDEO_ID = "EngW7tLk6R8"; // Car auction walkthrough video

// ----------------------------------------------------------------------
// PAGE COMPONENT
// ----------------------------------------------------------------------

export default function HowToBidPage() {
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
                            How to Bid
                        </h1>
                        <p className="text-[#666666] text-[15px] leading-relaxed w-full">
                            Learn the ropes of our auction platform to secure your dream car. From registering your account to placing that winning bid, we guide you through every step of the process. Follow our easy tutorial and expert tips to become a pro bidder in no time.
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
                                {/* Video Thumbnail - Same as How to Sell */}
                                <Image
                                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&auto=format&fit=crop&q=80"
                                    alt="How to Bid Video Thumbnail"
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
                                            Watch: How to Bid in 2 Minutes
                                        </h2>
                                        <p className="text-white/80 text-[14px] md:text-[15px] mb-6 leading-relaxed max-w-lg">
                                            See how to register, place bids, and win your next car in just 2 minutes. Watch now and start bidding today!
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
                                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                                title="How to Bid on Car Mandi"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="absolute inset-0"
                            />
                        )}
                    </div>


                    {/* Bidding Tips & Best Practices Section */}
                    <div className="mt-20">
                        <div className="mb-8">
                            <h2 className="text-[28px] font-semibold text-[#1F1F1F] mb-2">
                                Bidding Tips & Best Practices
                            </h2>
                            <p className="text-[#666666] text-[15px]">
                                Expert advice to help you win auctions and get the best deals
                            </p>
                        </div>

                        {/* Tips Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Tip 1 - Set a Budget */}
                            <div className="bg-white border border-[#F0F0F0] rounded-[12px] p-6">
                                <div className="w-[40px] h-[40px] mb-5">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 4C15.582 4 12 7.582 12 12C12 14.474 13.09 16.694 14.808 18.236C15.524 18.886 16 19.798 16 20.8V22C16 22.552 16.448 23 17 23H23C23.552 23 24 22.552 24 22V20.8C24 19.798 24.476 18.886 25.192 18.236C26.91 16.694 28 14.474 28 12C28 7.582 24.418 4 20 4Z" fill="#F4D03F" />
                                        <path d="M17 26H23V28C23 29.105 22.105 30 21 30H19C17.895 30 17 29.105 17 28V26Z" fill="#F4D03F" />
                                        <path d="M18 33H22" stroke="#F4D03F" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h3 className="text-[16px] font-bold text-[#1F1F1F] mb-2">Set a Budget</h3>
                                <p className="text-[14px] text-[#666666] leading-relaxed">
                                    Decide your maximum price before bidding and stick to it. Don't get caught up in the excitement.
                                </p>
                            </div>

                            {/* Tip 2 - Research Market Value */}
                            <div className="bg-white border border-[#F0F0F0] rounded-[12px] p-6">
                                <div className="w-[40px] h-[40px] mb-5">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="6" y="24" width="8" height="12" rx="1" fill="#3498DB" />
                                        <rect x="16" y="16" width="8" height="20" rx="1" fill="#E74C3C" />
                                        <rect x="26" y="8" width="8" height="28" rx="1" fill="#2ECC71" />
                                    </svg>
                                </div>
                                <h3 className="text-[16px] font-bold text-[#1F1F1F] mb-2">Research Market Value</h3>
                                <p className="text-[14px] text-[#666666] leading-relaxed">
                                    Check the market value of similar cars to ensure you're bidding a fair price.
                                </p>
                            </div>

                            {/* Tip 3 - Bid Strategically */}
                            <div className="bg-white border border-[#F0F0F0] rounded-[12px] p-6">
                                <div className="w-[40px] h-[40px] mb-5">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="22" r="14" stroke="#E74C3C" strokeWidth="2.5" fill="none" />
                                        <path d="M20 12V22L26 26" stroke="#E74C3C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20 4V8" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M26 6L24 9" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h3 className="text-[16px] font-bold text-[#1F1F1F] mb-2">Bid Strategically</h3>
                                <p className="text-[14px] text-[#666666] leading-relaxed">
                                    Consider bidding in the final moments or use auto-bid to stay competitive without constant monitoring.
                                </p>
                            </div>

                            {/* Tip 4 - Review Inspection Reports */}
                            <div className="bg-white border border-[#F0F0F0] rounded-[12px] p-6">
                                <div className="w-[40px] h-[40px] mb-5">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="10" stroke="#1F1F1F" strokeWidth="2.5" fill="none" />
                                        <path d="M25 25L34 34" stroke="#1F1F1F" strokeWidth="2.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h3 className="text-[16px] font-bold text-[#1F1F1F] mb-2">Review Inspection Reports</h3>
                                <p className="text-[14px] text-[#666666] leading-relaxed">
                                    Always check the detailed inspection report before placing your bid to avoid surprises.
                                </p>
                            </div>

                            {/* Tip 5 - Enable Notifications */}
                            <div className="bg-white border border-[#F0F0F0] rounded-[12px] p-6">
                                <div className="w-[40px] h-[40px] mb-5">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="10" y="4" width="20" height="32" rx="3" stroke="#1F1F1F" strokeWidth="2" fill="none" />
                                        <circle cx="20" cy="32" r="2" fill="#1F1F1F" />
                                        <circle cx="15" cy="14" r="2" fill="#E74C3C" />
                                        <circle cx="20" cy="14" r="2" fill="#2ECC71" />
                                        <circle cx="25" cy="14" r="2" fill="#3498DB" />
                                        <circle cx="15" cy="20" r="2" fill="#F4D03F" />
                                        <circle cx="20" cy="20" r="2" fill="#9B59B6" />
                                        <circle cx="25" cy="20" r="2" fill="#1ABC9C" />
                                    </svg>
                                </div>
                                <h3 className="text-[16px] font-bold text-[#1F1F1F] mb-2">Enable Notifications</h3>
                                <p className="text-[14px] text-[#666666] leading-relaxed">
                                    Turn on push notifications to get instant alerts when you're outbid or when an auction is ending.
                                </p>
                            </div>

                            {/* Tip 6 - Verify Everything */}
                            <div className="bg-white border border-[#F0F0F0] rounded-[12px] p-6">
                                <div className="w-[40px] h-[40px] mb-5">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 4L6 10V18C6 27.94 12.04 37.16 20 40C27.96 37.16 34 27.94 34 18V10L20 4Z" fill="#FDEDEE" stroke="#E74C3C" strokeWidth="2" />
                                        <path d="M14 20L18 24L26 16" stroke="#E74C3C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3 className="text-[16px] font-bold text-[#1F1F1F] mb-2">Verify Everything</h3>
                                <p className="text-[14px] text-[#666666] leading-relaxed">
                                    Double-check vehicle history, ownership documents, and auction sheet authenticity.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}


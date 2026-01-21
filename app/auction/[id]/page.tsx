"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Header, Footer } from "@/components";
import { AuctionGallery } from "@/components/auction/AuctionGallery";
import { BidCard } from "@/components/auction/BidCard";
import { InspectionSummary } from "@/components/auction/InspectionSummary";
import { BidHistory } from "@/components/auction/BidHistory";
import { ALL_AUCTIONS } from "@/constants/auctionData";
import { layout } from "@/constants/theme";
import { Heart, ChevronDown } from "lucide-react";

// Lazy load below-the-fold components to optimize initial render speed
const QuestionsAndComments = dynamic(() => import("@/components/auction/QuestionsAndComments").then(mod => mod.QuestionsAndComments), {
    loading: () => <div className="h-64 animate-pulse bg-gray-50 rounded-xl" />,
    ssr: false // Optimization: Don't block server render for comments
});

const InspectionPromo = dynamic(() => import("@/components").then(mod => mod.InspectionPromo), {
    ssr: true // Keep this SEO relevant
});

const FeaturedAuctions = dynamic(() => import("@/components").then(mod => mod.FeaturedAuctions), {
    loading: () => <div className="h-96 animate-pulse bg-gray-50 rounded-xl" />,
    ssr: true
});

export default function AuctionDetailPage({ params }: { params: { id: string } }) {
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const [isAmenitiesExpanded, setIsAmenitiesExpanded] = useState(false);

    // Fetch data based on the ID from URL params
    const auction = ALL_AUCTIONS.find((item) => item.id === params.id);

    // Handle invalid ID
    if (!auction) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-2xl font-bold mb-4">Auction Not Found</h1>
                <p>The car you are looking for does not exist or has expired.</p>
            </div>
        );
    }



    // Truncate description for collapsed state
    const truncateText = (text: string, maxLength: number = 200) => {
        if (text.length <= maxLength) return text;
        const truncated = text.substring(0, maxLength);
        const lastSpace = truncated.lastIndexOf(' ');
        return truncated.substring(0, lastSpace) + '...';
    };

    return (
        <>
            <Header />
            <main className="bg-white min-h-screen pb-12">
                <div
                    className="w-full mx-auto px-6 py-8 font-outfit"
                    style={{ maxWidth: layout.container["2xl"] }}
                >
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-[13px] text-[#707070] mb-6 font-light">
                        <Link href="/" className="hover:text-[#153481] transition-colors">
                            Home
                        </Link>
                        <span className="text-[#E0E0E0]">/</span>
                        <Link href="/auctions" className="hover:text-[#153481] transition-colors">
                            Auctions
                        </Link>
                        <span className="text-[#E0E0E0]">/</span>
                        <span className="text-[#383838] font-normal truncate">{auction.title}</span>
                    </div>

                    {/* Top Header Section */}
                    <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                        <div>
                            <h1 className="text-[28px] font-bold text-[#1F1F1F] mb-2 leading-tight">
                                {auction.title}
                            </h1>
                            <div className="flex items-center gap-3 text-[15px] text-[#9A9A9A] font-normal">
                                <span>{auction.year}</span>
                                <div className="h-4 w-[1px] bg-[#E0E0E0]"></div>
                                <span>{auction.mileage}</span>
                                <div className="h-4 w-[1px] bg-[#E0E0E0]"></div>
                                <span>{auction.transmission}</span>
                                <div className="h-4 w-[1px] bg-[#E0E0E0]"></div>
                                <span>{auction.fuelType}</span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 px-5 py-2.5 border border-[#EBEBEB] rounded-lg text-[14px] font-medium text-[#383838] hover:bg-[#F9FAFB] transition-colors">
                                {/* Custom Share Icon from SVG */}
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.02 5.40926L7.4 4.02753V9.79474C7.4 10.1552 7.64 10.3955 8 10.3955C8.36 10.3955 8.6 10.1552 8.6 9.79474V4.02753L9.98 5.40926C10.22 5.64956 10.58 5.64956 10.82 5.40926C11.06 5.16896 11.06 4.80851 10.82 4.56821L8.42 2.16521C8.36 2.10513 8.3 2.04506 8.24 2.04506C8.12 1.98498 7.94 1.98498 7.76 2.04506C7.7 2.04506 7.64 2.10513 7.58 2.16521L5.18 4.56821C4.94 4.80851 4.94 5.16896 5.18 5.40926C5.42 5.64956 5.78 5.64956 6.02 5.40926ZM13.4 9.19399C13.04 9.19399 12.8 9.43429 12.8 9.79474V12.1977C12.8 12.5582 12.56 12.7985 12.2 12.7985H3.8C3.44 12.7985 3.2 12.5582 3.2 12.1977V9.79474C3.2 9.43429 2.96 9.19399 2.6 9.19399C2.24 9.19399 2 9.43429 2 9.79474V12.1977C2 13.219 2.78 14 3.8 14H12.2C13.22 14 14 13.219 14 12.1977V9.79474C14 9.43429 13.76 9.19399 13.4 9.19399Z" fill="#383838" />
                                </svg>
                                Share
                            </button>
                            <button className="flex items-center gap-2 px-5 py-2.5 border border-[#EBEBEB] rounded-lg text-[14px] font-medium text-[#383838] hover:bg-[#F9FAFB] transition-colors">
                                <Heart size={18} className="text-[#383838]" />
                                Favorite
                            </button>
                        </div>
                    </div>

                    {/* Main Layout Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 mb-12">

                        {/* Left Column (Gallery & Details) */}
                        <div className="">
                            <AuctionGallery images={auction.images} />

                            <InspectionSummary
                                overallScore={auction.inspection.overallScore}
                                breakdown={auction.inspection.breakdown}
                            />

                            {/* Description */}
                            <div className="mt-8">
                                <h3 className="text-[24px] font-semibold text-[#1F1F1F] mb-4">Car Description</h3>
                                <p className="text-[15px] text-[#505050] leading-relaxed whitespace-pre-line">
                                    {isDescriptionExpanded ? auction.description : truncateText(auction.description)}{' '}
                                    <button
                                        onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                                        className="text-[#136BCF] font-normal hover:underline inline-flex items-center gap-1 ml-1 cursor-pointer"
                                    >
                                        {isDescriptionExpanded ? 'Read Less' : 'Read More'}
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-200 ${isDescriptionExpanded ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                </p>
                            </div>

                            <BidHistory history={auction.bidHistory} />

                            {/* Amenities */}
                            <div className="mt-8">
                                <h3 className="text-[24px] font-semibold text-[#1F1F1F] mb-4">Amenities you'll enjoy</h3>
                                <div className="flex flex-wrap gap-3 items-center">
                                    {(isAmenitiesExpanded ? auction.amenities : auction.amenities.slice(0, 7)).map(amenity => (
                                        <span key={amenity} className="px-5 py-2.5 bg-[#F9FAFB] border border-[#EBEBEB] rounded-lg text-[14px] text-[#383838] font-normal">
                                            {amenity}
                                        </span>
                                    ))}
                                    {auction.amenities.length > 7 && (
                                        <button
                                            onClick={() => setIsAmenitiesExpanded(!isAmenitiesExpanded)}
                                            className="text-[#136BCF] text-[15px] font-normal flex items-center gap-1 hover:underline ml-1 cursor-pointer"
                                        >
                                            {isAmenitiesExpanded ? 'Show Less' : `Show All ${auction.amenities.length} Amenities`}
                                            <ChevronDown
                                                size={18}
                                                className={`transition-transform duration-200 ${isAmenitiesExpanded ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                    )}
                                </div>
                            </div>

                            <QuestionsAndComments />


                        </div>

                        {/* Right Column (Bid Card) */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <BidCard auction={auction} />

                                {/* Similar Options (Moved here vertically or keep at bottom?) - User image shows Similar Options at bottom full width. */}
                            </div>
                        </div>
                    </div>

                    {/* Inspection Banner Promo - Same as Homepage */}
                    <div className="mt-12 mb-16">
                        <InspectionPromo />
                    </div>

                    {/* Similar Options */}
                    <div className="mt-16">
                        <h2 className="text-[24px] font-semibold text-[#1F1F1F] mb-6">Similar Options</h2>
                        <FeaturedAuctions hideTitle priority={false} />
                    </div>
                </div>
            </main >
            <Footer />
        </>
    );
}

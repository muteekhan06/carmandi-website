"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AuctionCard } from "@/components/AuctionCard";
import { ALL_AUCTIONS } from "@/constants/auctionData";
import { layout } from "@/constants/theme";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { ProfileBanner } from "@/components/dashboard/ProfileBanner";
import { Footer } from "@/components/Footer";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { BidCard } from "@/components/BidCard";
import { InspectionCard } from "@/components/InspectionCard";
import dynamic from "next/dynamic";

const PaymentMethods = dynamic(() => import("@/components/dashboard/PaymentMethods").then(mod => mod.PaymentMethods));
const SettingsTab = dynamic(() => import("@/components/dashboard/SettingsTab").then(mod => mod.SettingsTab));
const ChangePasswordTab = dynamic(() => import("@/components/dashboard/ChangePasswordTab").then(mod => mod.ChangePasswordTab));

// Tab options
const TABS = [
    { id: "my-auctions", label: "My Auctions", icon: "/icons/hammer.svg" },
    { id: "my-bids", label: "My Bids", icon: "/icons/bid.svg" },
    { id: "my-inspections", label: "My Inspections", icon: "/icons/inspection.svg" },
    { id: "payment", label: "Payment", icon: "/icons/payment.svg" },
    { id: "settings", label: "Settings", icon: "/icons/settings.svg" },
    { id: "change-password", label: "Changed Password", icon: "/icons/password.svg" },
];

// Mock user data
const USER_DATA = {
    name: "Saad Sheikh",
    email: "saadsheikh@gmail.com",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60",
    currentPlan: "Awami",
};

// Stats data
const STATS = [
    { id: "credits", label: "Credits Remaining", value: "150", icon: "/icons/credits.svg", color: "#EB722E" },
    { id: "plan", label: "Current Plan", value: "Awami", icon: "/icons/plan.svg", color: "#EB722E" },
    { id: "live", label: "Total Live Auctions", value: "42", icon: "/icons/live-auction.svg", color: "#EB722E" },
    { id: "inspections", label: "My Inspections", value: "0", icon: "/icons/my-inspection.svg", color: "#EB722E" },
    { id: "all", label: "All Auctions", value: "44", icon: "/icons/all-auctions.svg", color: "#EB722E" },
    { id: "bids", label: "My Bids", value: "24", icon: "/icons/my-bids.svg", color: "#EB722E" },
];

const UserProvidedIcon = () => (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter_stats_inner)">
            <path d="M0 10C0 4.47715 4.47715 0 10 0H36C41.5228 0 46 4.47715 46 10V36C46 41.5228 41.5228 46 36 46H10C4.47715 46 0 41.5228 0 36V10Z" fill="#EB722E" fillOpacity="0.05" />
            <path d="M25.292 23.457L17.958 30.7904C17.594 31.155 17.099 31.3599 16.583 31.3599C16.067 31.3599 15.573 31.155 15.208 30.7904C14.844 30.4257 14.639 29.9311 14.639 29.4154C14.639 28.8996 14.844 28.405 15.208 28.0404L22.542 20.707" stroke="#EB722E" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26.667 26.668L32.167 21.168" stroke="#EB722E" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.333 19.332L24.833 13.832" stroke="#EB722E" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.25 18.418L27.583 25.7513" stroke="#EB722E" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M31.25 22.0833L23.917 14.75" stroke="#EB722E" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <filter id="filter_stats_inner" x="0" y="0" width="46" height="46" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
        </defs>
    </svg>
);

const GenericStatIcon = ({ path }: { path: React.ReactNode }) => (
    <div className="w-[46px] h-[46px] rounded-[12px] bg-[rgba(235,114,46,0.05)] flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EB722E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {path}
        </svg>
    </div>
);

const getStatIcon = (id: string) => {
    switch (id) {
        case "credits":
            return <GenericStatIcon path={<><circle cx="12" cy="12" r="10" /><path d="M12 6v12M8 10h8M8 14h8" /></>} />;
        case "plan":
            return <GenericStatIcon path={<><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>} />;
        case "live":
            return <GenericStatIcon path={<><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>} />;
        case "inspections":
            return <GenericStatIcon path={<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></>} />;
        case "all":
            return <UserProvidedIcon />;
        case "bids":
            return <GenericStatIcon path={<><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>} />;
        default:
            return <GenericStatIcon path={<circle cx="12" cy="12" r="10" />} />;
    }
};

// Auction statuses for demo
const AUCTION_STATUSES: Record<string, "expired" | "active" | "sold"> = {
    "1": "expired",
    "2": "active",
    "3": "sold",
    "4": "active",
    "5": "expired",
    "6": "sold",
};

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState("my-auctions");

    // Get user's auctions (mock - using first 6 auctions)
    const userAuctions = ALL_AUCTIONS.slice(0, 6);

    return (
        <>
            <DashboardHeader user={USER_DATA} />

            <main className="bg-[#F5F7FA] min-h-screen pb-16">
                <div
                    className="w-full mx-auto px-6 font-outfit"
                    style={{ maxWidth: layout.container["2xl"] }}
                >
                    {/* Profile Banner */}
                    <div className="mt-6">
                        <ProfileBanner user={USER_DATA} />
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-6">
                        {STATS.map((stat) => (
                            <StatsCard
                                key={stat.id}
                                label={stat.label}
                                value={stat.value}
                                icon={getStatIcon(stat.id)}
                            />
                        ))}
                    </div>

                    {/* Tabs Navigation */}
                    <div className="flex items-center w-full mt-8 border-b border-[#E5E7EB]">
                        {TABS.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex flex-1 justify-center items-center gap-2 py-3 text-[14px] font-medium transition-all relative ${activeTab === tab.id
                                    ? "text-[#136BCF]"
                                    : "text-[#6B7280] hover:text-[#1F1F1F]"
                                    }`}
                            >
                                {/* Tab Icon */}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {tab.id === "my-auctions" && <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>}
                                    {tab.id === "my-bids" && <><path d="M12 2v20M2 12h20" /></>}
                                    {tab.id === "my-inspections" && <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>}
                                    {tab.id === "payment" && <><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></>}
                                    {tab.id === "settings" && <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></>}
                                    {tab.id === "change-password" && <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>}
                                </svg>
                                {tab.label}

                                {/* Active Indicator */}
                                {activeTab === tab.id && (
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#136BCF] rounded-t-full" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="mt-8">
                        {activeTab === "my-auctions" && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {userAuctions.map((auction, index) => (
                                    <AuctionCard
                                        key={auction.id}
                                        data={{
                                            ...auction,
                                            isFeatured: true,
                                        }}
                                        status={AUCTION_STATUSES[auction.id] || "active"}
                                        showStatus={true}
                                    />
                                ))}
                            </div>
                        )}

                        {activeTab === "my-bids" && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {userAuctions.slice(0, 2).map((auction) => (
                                    <BidCard
                                        key={auction.id}
                                        data={auction}
                                        currentBid="Pkr 20,970,000"
                                        yourBid="Pkr 20,000,000"
                                    />
                                ))}
                            </div>
                        )}

                        {activeTab === "my-inspections" && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {userAuctions.slice(0, 3).map((auction) => (
                                    <InspectionCard
                                        key={auction.id}
                                        data={auction}
                                    />
                                ))}
                            </div>
                        )}

                        {activeTab === "payment" && (
                            <PaymentMethods />
                        )}

                        {activeTab === "settings" && (
                            <SettingsTab />
                        )}

                        {activeTab === "change-password" && (
                            <ChangePasswordTab />
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}

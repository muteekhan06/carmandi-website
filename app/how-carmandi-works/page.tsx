
import React from "react";
import Image from "next/image";
import { Header, Footer } from "@/components";
import { layout } from "@/constants/theme";
import { AboutGradient } from "@/components/about";

// ----------------------------------------------------------------------
// DATA
// ----------------------------------------------------------------------

const STEPS = [
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

// ----------------------------------------------------------------------
// PAGE COMPONENT
// ----------------------------------------------------------------------

export default function HowCarMandiWorksPage() {
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
                    <div className="mb-10">
                        <h1 className="text-[32px] font-semibold text-[#1F1F1F] leading-tight">
                            How Car Mandi Works
                        </h1>
                    </div>

                    {/* Steps Section */}
                    <div className="flex flex-col gap-8">
                        {STEPS.map((step, index) => (
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
                                                priority={index === 0}
                                                sizes="(max-width: 768px) 100vw, 320px"
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
                                                priority={index === 0}
                                                sizes="(max-width: 768px) 100vw, 320px"
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
            </main>

            {/* Inspection Process Section - Dark Navy Background */}
            <section className="w-full bg-[#0A1128] py-16 lg:py-20 relative overflow-hidden">
                {/* Orange gradient blur in top left */}
                <div
                    className="absolute -left-[150px] top-0 w-[400px] h-[400px] rounded-full opacity-20 blur-[100px]"
                    style={{ backgroundColor: '#EB722E' }}
                />

                <div
                    className="mx-auto w-full px-6 relative z-10"
                    style={{ maxWidth: layout.container["2xl"] }}
                >
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
                        {/* Left - Image with decorative border */}
                        <div className="relative flex-shrink-0">
                            {/* Decorative border box */}
                            <div
                                className="absolute -top-[40px] -left-[40px] border border-[#EB722E] rounded-[32px] pointer-events-none"
                                style={{
                                    width: '391px',
                                    height: '520px',
                                    opacity: 0.6
                                }}
                            />

                            <div
                                className="relative overflow-hidden shadow-2xl"
                                style={{
                                    width: '391px',
                                    height: '520px',
                                    borderRadius: '24px',
                                    opacity: 1
                                }}
                            >
                                <Image
                                    src="/images/steps/how-it-works-illustration.svg"
                                    alt="Car Inspection Process"
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, 391px"
                                />
                            </div>
                        </div>

                        {/* Right - Content */}
                        <div className="w-full lg:w-auto lg:pt-4">
                            <h2 className="text-[28px] lg:text-[32px] font-semibold text-white mb-8 lg:mb-10">
                                Inspection Process
                            </h2>

                            <div className="space-y-6 lg:space-y-7">
                                {/* 150-Point Check */}
                                <div className="flex gap-3">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#EB722E] mt-[10px] flex-shrink-0" />
                                    <div className="max-w-[400px]">
                                        <h3 className="text-[16px] font-semibold text-white mb-1.5">
                                            150-Point Check
                                        </h3>
                                        <p className="text-[13px] text-[#8B8B8B] leading-[1.6]">
                                            Comprehensive inspection covering all major components and systems with advanced diagnostics.
                                        </p>
                                    </div>
                                </div>

                                {/* Certified Inspectors */}
                                <div className="flex gap-3">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#EB722E] mt-[10px] flex-shrink-0" />
                                    <div className="max-w-[400px]">
                                        <h3 className="text-[16px] font-semibold text-white mb-1.5">
                                            Certified Inspectors
                                        </h3>
                                        <p className="text-[13px] text-[#8B8B8B] leading-[1.6]">
                                            Expert team with years of experience ensuring accuracy and detailed reporting.
                                        </p>
                                    </div>
                                </div>

                                {/* Photo Documentation */}
                                <div className="flex gap-3">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#EB722E] mt-[10px] flex-shrink-0" />
                                    <div className="max-w-[400px]">
                                        <h3 className="text-[16px] font-semibold text-white mb-1.5">
                                            Photo Documentation
                                        </h3>
                                        <p className="text-[13px] text-[#8B8B8B] leading-[1.6]">
                                            High-quality images and detailed notes about every aspect of the vehicle.
                                        </p>
                                    </div>
                                </div>

                                {/* Transparent Grading */}
                                <div className="flex gap-3">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#EB722E] mt-[10px] flex-shrink-0" />
                                    <div className="max-w-[400px]">
                                        <h3 className="text-[16px] font-semibold text-white mb-1.5">
                                            Transparent Grading
                                        </h3>
                                        <p className="text-[13px] text-[#8B8B8B] leading-[1.6]">
                                            Clear condition rating system helping you make confident decisions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Auction Sheet Verification Section - White Background */}
            <section className="w-full bg-white py-16 lg:py-24 relative overflow-hidden">
                <div
                    className="mx-auto w-full px-6 relative z-10"
                    style={{ maxWidth: layout.container["2xl"] }}
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
                        {/* Left - Content */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-[28px] lg:text-[32px] font-semibold text-[#1F1F1F] mb-3">
                                Auction Sheet Verification
                            </h2>
                            <p className="text-[#666666] text-[15px] mb-10 lg:mb-12">
                                Comprehensive verification for imported vehicles to ensure authenticity
                            </p>

                            <div className="space-y-8">
                                {[
                                    {
                                        number: "1",
                                        title: "Upload Auction Sheet",
                                        desc: "Submit your Japanese auction sheet through our secure portal from major auction houses."
                                    },
                                    {
                                        number: "2",
                                        title: "Expert Review",
                                        desc: "Our specialists review auction grade, inspection points, and complete vehicle history."
                                    },
                                    {
                                        number: "3",
                                        title: "Grade Verification",
                                        desc: "Cross-reference auction grade with physical vehicle condition for accuracy."
                                    },
                                    {
                                        number: "4",
                                        title: "Certified Report",
                                        desc: "Receive comprehensive verification report confirming authenticity and condition."
                                    }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex gap-5">
                                        <div className="flex-shrink-0 w-[48px] h-[48px] rounded-[12px] bg-[#F5F8FF] flex items-center justify-center">
                                            <span className="text-[#153481] text-[20px] font-bold font-outfit">
                                                {step.number}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-[17px] font-medium text-[#1F1F1F] mb-1.5">
                                                {step.title}
                                            </h3>
                                            <p className="text-[14px] text-[#666666] leading-relaxed max-w-[480px]">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Image */}
                        <div className="w-full lg:w-[45%] flex-shrink-0">
                            <div className="relative w-full aspect-square max-w-[500px] lg:max-w-none ml-auto">
                                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80"
                                        alt="Auction Sheet Verification Process"
                                        fill
                                        className="object-cover object-center opacity-95 hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                        sizes="(max-width: 768px) 100vw, 500px"
                                    />
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Car Mandi Section */}
            <section className="w-full bg-white pb-20 lg:pb-28 pt-8">
                <div
                    className="mx-auto w-full px-6 relative z-10"
                    style={{ maxWidth: layout.container["2xl"] }}
                >
                    <div className="mb-12">
                        <h2 className="text-[28px] lg:text-[32px] font-semibold text-[#1F1F1F] mb-3">
                            Why Choose Car Mandi
                        </h2>
                        <p className="text-[#666666] text-[15px]">
                            We're committed to transforming the car buying experience with transparency, quality, and exceptional service.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                id: "01",
                                title: "Verified & Inspected",
                                desc: "Every vehicle thoroughly checked and certified"
                            },
                            {
                                id: "02",
                                title: "Best Market Prices",
                                desc: "Competitive auction pricing for true value"
                            },
                            {
                                id: "03",
                                title: "Trusted Platform",
                                desc: "Thousands of satisfied customers"
                            },
                            {
                                id: "04",
                                title: "Complete Documentation",
                                desc: "All paperwork verified and ready"
                            },
                            {
                                id: "05",
                                title: "No Hidden Costs",
                                desc: "Transparent and straightforward pricing"
                            },
                            {
                                id: "06",
                                title: "Post-Sale Support",
                                desc: "Ongoing assistance after purchase"
                            }
                        ].map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-[#F8F9FA] rounded-[20px] p-8 hover:shadow-md transition-shadow duration-300"
                            >
                                <span className="block text-[#EB722E] text-[14px] font-bold mb-4 font-outfit">
                                    {feature.id}
                                </span>
                                <h3 className="text-[18px] font-medium text-[#1F1F1F] mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-[#666666] text-[14px] leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

"use client";

import React from "react";
import Image from "next/image";

/**
 * InspectionPricingSection - Pricing showcase with car images
 * Displays the standard inspection price with a row of car images
 */
export function InspectionPricingSection() {
    return (
        <section className="w-full py-6 sm:py-7 md:py-8 bg-white overflow-hidden">
            <div className="relative">
                {/* Container wrapper for alignment */}
                <div className="w-full mx-auto px-5 sm:px-4 md:px-6" style={{ maxWidth: "1360px" }}>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
                        {/* Heading & Subtitle Group - Centered on Mobile */}
                        <div className="text-center lg:text-left">
                            {/* Price Heading */}
                            <h2 className="text-[32px] xs:text-[36px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-bold text-[#1F1F1F] leading-tight mb-1">
                                Pkr 3500
                            </h2>

                            {/* Subtitle */}
                            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-[#1F1F1F] mb-1">
                                Standard price for all cars
                            </p>
                        </div>

                        {/* Mobile/Tablet Image - Moves here on mobile, placed between subtitle and description */}
                        {/* Note: Added -mx-10 to bleed out of boundaries as requested */}
                        <div className="lg:hidden relative w-full h-[140px] xs:h-[160px] sm:h-[180px] md:h-[200px] -mx-10 w-[calc(100%+5rem)]">
                            <Image
                                src="/images/inspection/pricing-cars.svg"
                                alt="Cars available for inspection"
                                fill
                                className="object-contain object-center scale-110"
                                priority={false}
                                sizes="100vw"
                            />
                        </div>

                        {/* Description - Moves below image on mobile */}
                        <div className="max-w-full lg:max-w-[520px] z-10 relative">
                            <p className="text-[13px] sm:text-[14px] text-[#757575] leading-relaxed text-center lg:text-left">
                                Get a comprehensive 200+ point inspection for any car at a flat rate of PKR 3,500.
                                Our certified inspectors thoroughly examine every aspect of the vehicle — from engine
                                performance and transmission health to electrical systems, suspension, brakes, and body
                                condition. Whether you&apos;re buying a hatchback, sedan, SUV, or luxury vehicle, the price
                                remains the same. No hidden charges, no surprises — just complete transparency and peace
                                of mind before you make your purchase decision.
                            </p>
                        </div>

                        {/* Desktop Image - Hidden on mobile */}
                        <div className="hidden lg:block relative w-full lg:w-[55%] h-[200px] sm:h-[240px] md:h-[280px] flex-shrink-0">
                            {/* Bottom gradient fade for seamless blend */}
                            <div className="absolute bottom-0 left-0 right-0 h-[30px] sm:h-[40px] bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

                            <Image
                                src="/images/inspection/pricing-cars.svg"
                                alt="Cars available for inspection"
                                fill
                                className="object-contain object-right"
                                priority={false}
                                sizes="(max-width: 1024px) 100vw, 55vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InspectionPricingSection;

"use client";

import React from "react";
import { Header, Footer } from "@/components";
import { InspectionHeroSection } from "@/components/InspectionHeroSection";
import { InspectionAssuranceSection } from "@/components/InspectionAssuranceSection";
import { InspectionPricingSection } from "@/components/InspectionPricingSection";
import { WhatWeCheckSection } from "@/components/WhatWeCheckSection";
import { HowWeInspectSection } from "@/components/HowWeInspectSection";
import { InspectionTestimonials } from "@/components/InspectionTestimonials";
import { InspectionFAQ } from "@/components/InspectionFAQ";





export default function CarInspectionPage() {
    return (
        <>
            <Header />

            <main className="bg-white min-h-screen font-outfit">
                {/* =========================================================
            HERO SECTION
            ========================================================= */}
                <div className="pb-8 sm:pb-12 md:pb-16 px-3 sm:px-4 md:px-6">
                    <InspectionHeroSection />
                </div>

                {/* =========================================================
            ASSURANCE / FEATURES SECTION
            ========================================================= */}
                <InspectionAssuranceSection />

                {/* =========================================================
            PRICING SECTION
            ========================================================= */}
                <InspectionPricingSection />

                {/* =========================================================
            WHAT WE CHECK SECTION
            ========================================================= */}
                <WhatWeCheckSection />

                {/* =========================================================
            HOW WE INSPECT SECTION
            ========================================================= */}
                <HowWeInspectSection />

                {/* =========================================================
            TESTIMONIALS SECTION
            ========================================================= */}
                <InspectionTestimonials />

                {/* =========================================================
            FAQ SECTION
            ========================================================= */}
                <InspectionFAQ />

            </main>

            <Footer />
        </>
    );
}

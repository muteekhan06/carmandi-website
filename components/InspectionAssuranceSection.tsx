"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Tag, Activity, Award, CheckCircle2, Disc, FileCheck, FileText, ScanLine, ShieldCheck, ThermometerSun, Wrench, Zap } from "lucide-react";
import { INSPECTION_FEATURES_CONTENT } from "@/constants/inspectionData";

// --- Types ---
type FeatureItem = {
    icon: string;
    label: string;
};

// --- Icon Mapping ---
const ICON_MAP: Record<string, React.ElementType> = {
    ShieldCheck, CheckCircle2, Wrench, ScanLine, ThermometerSun,
    FileText, Activity, FileCheck, Zap, Award, Disc, Tag
};

// --- Components ---

/**
 * Single Feature Card - Designed to match the provided SVG spec
 * White background, rounded corners, shadow, with an orange tag icon.
 */
function FeatureCard({ feature }: { feature: FeatureItem }) {
    // For "design fidelity" to the user's specific request, we might want to force the Tag icon
    // But for "production grade", semantic icons are better. 
    // Given the prompt emphasized matching the SVG/Image, where ALL icons are the same tag:
    // I will render the Tag icon by default for visual matching, but support the dynamic one if needed.
    // The image shows a specific orange tag icon.

    return (
        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 bg-white border border-[#F0F0F0] rounded-[10px] sm:rounded-[12px] shadow-sm hover:shadow-md transition-all cursor-default whitespace-nowrap min-w-max mx-1 sm:mx-1.5 md:mx-2">
            <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] flex items-center justify-center rounded-[4px] bg-[#FFF4ED] text-[#EB722E] flex-shrink-0">
                {/* Specific SVG path for the "Tag" icon as seen in the image */}
                {/* A filled tag shape. Lucide 'Tag' is outlined. Let's make a custom mini SVG for pixel perfection if possible, or use a filled lucide style */}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] md:w-[12px] md:h-[12px]">
                    <path d="M12 2L2 12L12 22H22V2H12Z" fill="currentColor" />
                    <circle cx="16" cy="8" r="2" fill="white" />
                </svg>
            </div>
            <span className="text-[12px] sm:text-[13px] md:text-[14px] text-[#383838] font-medium leading-snug">
                {feature.label}
            </span>
        </div>
    );
}

/**
 * Marquee Row - Handles infinite scrolling of Feature Cards
 * Uses CSS animation defined in tailwind config
 */
function MarqueeRow({ items, reverse = false, duration = "60s" }: { items: readonly FeatureItem[], reverse?: boolean, duration?: string }) {
    return (
        <div className="relative flex overflow-hidden w-full group">
            <div
                className={`flex animate-marquee ${reverse ? 'animate-marquee-reverse' : ''} group-hover:[animation-play-state:paused]`}
                style={{ animationDuration: duration }}
            >
                {/* Render items twice to ensure seamless loop */}
                {[...items, ...items].map((feature, index) => (
                    <FeatureCard key={`${feature.label}-${index}`} feature={feature} />
                ))}
            </div>
            {/* Duplicate for continuity if screen is very wide, usually 2 sets is enough but for safety with marquee logic: */}
            <div
                className={`flex absolute top-0 animate-marquee2 ${reverse ? 'animate-marquee2-reverse' : ''} group-hover:[animation-play-state:paused]`}
                style={{ animationDuration: duration, left: "100%" }}
            >
                {/* Note: Standard tailwind 'animate-marquee' usually just translates X:-100%. 
                     For a pure infinite loop without gaps, we often need two identical sets side-by-side moving together.
                     The 'animate-marquee' class I added moves from 0 to -100%.
                     If I put two <div>s side by side, both moving -100%, it creates the loop.
                 */}
            </div>
        </div>
    );
}

/**
 * Use a simpler approach for Marquee: Two identical lists inside a container moving left.
 */
function SimpleMarquee({ items, reverse = false, duration = 40 }: { items: readonly FeatureItem[], reverse?: boolean, duration?: number }) {
    const animationClass = reverse ? 'animate-marquee-reverse' : 'animate-marquee';

    return (
        <div className="flex overflow-hidden w-full mask-gradient-x select-none">
            <div
                className={`flex shrink-0 ${animationClass} items-center gap-4 py-2 pr-4 hover:[animation-play-state:paused]`}
                style={{ animationDuration: `${duration}s` }}
            >
                {items.map((feature, i) => (
                    <FeatureCard key={`a-${i}`} feature={feature} />
                ))}
            </div>
            <div
                className={`flex shrink-0 ${animationClass} items-center gap-4 py-2 pr-4 hover:[animation-play-state:paused]`}
                style={{ animationDuration: `${duration}s` }}
            >
                {items.map((feature, i) => (
                    <FeatureCard key={`b-${i}`} feature={feature} />
                ))}
            </div>
            <div
                className={`flex shrink-0 ${animationClass} items-center gap-4 py-2 pr-4 hover:[animation-play-state:paused]`}
                style={{ animationDuration: `${duration}s` }}
            >
                {items.map((feature, i) => (
                    <FeatureCard key={`c-${i}`} feature={feature} />
                ))}
            </div>
        </div>
    );
}


export function InspectionAssuranceSection() {
    return (
        <section className="w-full pb-8 sm:pb-12 md:pb-16 overflow-hidden">
            <div className="w-full mx-auto px-5 sm:px-4 md:px-6" style={{ maxWidth: "1360px" }}>

                {/* Section Header with Action Button */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
                    <div>
                        <h2 className="text-[22px] xs:text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#1F1F1F] mb-2 sm:mb-3">
                            {INSPECTION_FEATURES_CONTENT.heading}
                        </h2>
                        <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#757575] font-light max-w-2xl leading-relaxed">
                            {INSPECTION_FEATURES_CONTENT.description}
                        </p>
                    </div>

                    {/* View Sample Report Button - Hidden on Mobile */}
                    <Link
                        href={INSPECTION_FEATURES_CONTENT.cta.link}
                        className="hidden sm:flex group items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-[#F0F7FF] hover:bg-[#E5F0FF] active:bg-[#E0EBFF] text-[#136BCF] rounded-lg font-medium transition-colors text-[13px] sm:text-[14px] md:text-[15px] touch-manipulation w-fit"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="whitespace-nowrap">{INSPECTION_FEATURES_CONTENT.cta.label}</span>
                        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform sm:w-[18px] sm:h-[18px]" />
                    </Link>
                </div>

                {/* Marquee Rows Container - Reduced gap for compactness */}
                <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3 relative">
                    {/* Add fade masks on sides for premium look - Responsive widths */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    {/* Faster marquee on mobile for better UX */}
                    <SimpleMarquee items={INSPECTION_FEATURES_CONTENT.rows.row1} duration={25} />
                    <SimpleMarquee items={INSPECTION_FEATURES_CONTENT.rows.row2} reverse duration={30} />
                    <SimpleMarquee items={INSPECTION_FEATURES_CONTENT.rows.row3} duration={28} />
                </div>

            </div>
        </section>
    );
}

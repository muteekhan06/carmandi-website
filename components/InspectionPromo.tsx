"use client";

import React from "react";
import Image from "next/image";
import { FileText, Car, ArrowUpRight } from "lucide-react";
import { INSPECTION_PROMO_CONTENT } from "@/constants/inspectionData";
import { layout, colors, typography } from "@/constants/theme";

// Icon mapping for dynamic rendering
const iconMap = {
    FileText: FileText,
    Car: Car,
} as const;

export const InspectionPromo = () => {
    const content = INSPECTION_PROMO_CONTENT;

    return (
        <section
            className="w-full mx-auto px-6 font-outfit"
            style={{
                maxWidth: layout.container["2xl"]
            }}
        >
            <div
                className="relative w-full rounded-[24px] overflow-hidden"
                style={{
                    height: layout.sectionHeight.inspectionPromo,
                    backgroundColor: colors.neutral.darkAlt
                }}
            >
                {/* Background Image - Only covers right portion */}
                <div className="absolute right-0 top-0 bottom-0 w-[75%] z-0">
                    <Image
                        src={content.backgroundImage}
                        alt="Car Inspection"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                {/* Gradient Overlay - Matches Figma gradient exactly */}
                <div
                    className="absolute inset-0 z-[1]"
                    style={{
                        background: `linear-gradient(100deg, rgba(0,0,0,1) 15%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.2) 70%)`
                    }}
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center pl-12 pr-12 max-w-[750px]">
                    {/* Heading */}
                    <h2 className="text-white mb-2 font-outfit font-bold text-[30px] leading-[130%] tracking-normal">
                        {content.heading.line1} <br />
                        {content.heading.line2}
                    </h2>

                    {/* Subtitle */}
                    <p className="mb-6 font-outfit font-light text-[14px] leading-[135%] tracking-normal text-[#EBEBEB]">
                        {content.subtitle}
                        <span className="mx-2 text-[#EBEBEB]">-</span>
                        <button className="inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity group font-outfit font-light text-[14px] leading-[135%] tracking-normal text-white no-underline">
                            View Sample Report
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </p>

                    <div className="flex items-center gap-10 mb-6">
                        {content.features.map((feature) => {
                            if (feature.id === "engine-check") {
                                return (
                                    <div key={feature.id} className="flex items-center gap-2">
                                        <Image
                                            src="/images/ui-icons/engine.svg"
                                            alt="Engine"
                                            width={20}
                                            height={20}
                                            className="w-5 h-5 object-contain opacity-80"
                                            style={{ filter: "brightness(0) invert(1)" }}
                                        />
                                        <span className="font-outfit font-light text-[14px] leading-[135%] tracking-normal text-[#EBEBEB]">
                                            {feature.text}
                                        </span>
                                    </div>
                                );
                            }

                            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
                            return (
                                <div key={feature.id} className="flex items-center gap-2">
                                    <IconComponent
                                        className="w-4 h-4"
                                        style={{ color: `${colors.neutral.white}CC` }}
                                    />
                                    <span className="font-outfit font-light text-[14px] leading-[135%] tracking-normal text-[#EBEBEB]">
                                        {feature.text}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom Row: Price & CTA */}
                    <div className="flex flex-row items-center gap-12 mt-4">
                        {/* Price */}
                        <div className="flex items-baseline gap-2">
                            <span className="font-outfit font-light text-[14px] leading-[135%] tracking-normal text-[#F0F0F0]">
                                {content.pricing.label}
                            </span>
                            <span
                                className="font-bold text-white"
                                style={{ fontSize: typography.fontSize["4xl"] }}
                            >
                                {content.pricing.currency} {content.pricing.amount}
                            </span>
                        </div>

                        {/* CTA Button */}
                        <button
                            className="px-24 font-bold transition-all hover:shadow-lg active:scale-95"
                            style={{
                                height: "44px",
                                backgroundColor: colors.accent.orange,
                                color: colors.neutral.white,
                                fontSize: typography.fontSize.base,
                                borderRadius: layout.borderRadius.md,
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.accent.orangeHover}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.accent.orange}
                        >
                            {content.cta.text}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

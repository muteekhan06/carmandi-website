"use client";

import React from "react";
import Image from "next/image";
import { colors, typography, layout, shadows } from "@/constants/theme";

const features = [
    {
        title: "Built for Pakistan's Car Market",
        description: "Car Mandi is Pakistan's first purpose-built online car auction platform that empowers individuals and dealers to trade used cars with full transparency and trust.",
        icon: "/images/about/feature-1.svg",
    },
    {
        title: "Verified Listings, Every Time",
        description: "Each car goes through a detailed inspection by our expert team. We verify condition, documents, and provide a complete report so buyers know exactly what they're bidding on.",
        icon: "/images/about/feature-2.svg",
    },
    {
        title: "Auction-First, Not Classifieds",
        description: "Unlike traditional classified websites, Car Mandi lets buyers compete fairly through time-bound, credit-based auctions — giving sellers better offers and buyers better deals.",
        icon: "/images/about/feature-3.svg",
    },
];

export const AboutFeatures: React.FC = () => {
    return (
        <section
            className="mx-auto w-full px-6 pb-20"
            style={{ maxWidth: layout.container["2xl"] }}
        >

            {/* Section Header */}
            <div className="mb-12 max-w-3xl">
                <h2
                    style={{
                        fontWeight: 600,
                        fontSize: "24px",
                        lineHeight: "135%",
                        letterSpacing: "0%",
                        verticalAlign: "middle",
                        marginBottom: "16px",
                        color: colors.neutral.black
                    }}
                >
                    Who We Are
                </h2>
                <p
                    style={{
                        fontSize: typography.fontSize.base,
                        color: colors.neutral.gray600,
                        lineHeight: 1.6
                    }}
                >
                    We are a team of automotive enthusiasts and tech innovators dedicated to modernizing Pakistan's used car market. CarMandi was born from a simple idea: that buying a car should be as reliable as buying a certified product, free from hidden faults and manipulated prices.
                </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        // COMPACT UPDATE: px-8 (keep width), py-6 (reduce height), gap-3 (reduce internal space)
                        className="px-8 py-6 flex flex-col items-start gap-3 transition-all hover:-translate-y-1"
                        style={{
                            backgroundColor: colors.neutral.white,
                            border: `1px solid ${colors.neutral.border}`,
                            borderRadius: layout.borderRadius.xl,
                            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.02)",
                        }}
                    >
                        {/* Icon Container - reduced margin */}
                        <div className="relative w-12 h-12 mb-1">
                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                fill
                                className="object-contain"
                            />
                        </div>

                        <h3
                            className="font-bold"
                            style={{
                                fontSize: "20px",
                                color: colors.neutral.dark
                            }}
                        >
                            {feature.title}
                        </h3>

                        <p
                            style={{
                                fontSize: typography.fontSize.sm,
                                color: colors.neutral.gray600,
                                lineHeight: 1.7
                            }}
                        >
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Additional Text Content */}
            <div
                className="mt-16 flex flex-col gap-6"
                style={{
                    fontSize: typography.fontSize.base,
                    color: colors.neutral.gray600,
                    lineHeight: 1.7
                }}
            >
                <p>
                    For decades, the Pakistani used car market has been plagued by information asymmetry. Buyers often face clocked odometers, hidden accident repairs, and unclear documentation. Sellers, on the other hand, struggle with time-wasters and low-ball offers. CarMandi solves this by acting as the neutral, trusted intermediary that standardizes quality and facilitates fair trade.
                </p>
                <p>
                    Our "Autofy" inspection technology provides a forensic-level analysis of every listed vehicle, generating a comprehensive report that serves as the visual truth. Coupled with our transparent bidding system, this ensures that every transaction is efficient, secure, and satisfactory. Whether you are upgrading your family ride or selling your fleet, CarMandi delivers a seamless, premium experience.
                </p>
            </div>

        </section>
    );
};

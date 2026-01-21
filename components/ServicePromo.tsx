"use client";

import React from "react";
import Image from "next/image";
import { SERVICE_CARDS } from "@/constants/serviceData";
import { layout, typography, colors } from "@/constants/theme";

export const ServicePromo = () => {
    return (
        <section
            className="w-full mx-auto px-6 pb-16 font-outfit"
            style={{ maxWidth: layout.container["2xl"] }}
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {SERVICE_CARDS.map((card) => (
                    <div
                        key={card.id}
                        className="relative rounded-2xl overflow-hidden flex flex-col"
                        style={{ backgroundColor: card.backgroundColor }}
                    >
                        {/* Image Section */}
                        <div className="relative h-64 w-full bg-gray-200">
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>

                        {/* Curved Divider */}
                        <div className="relative w-full h-8 -mt-8 z-10">
                            <svg
                                viewBox="0 0 100 20"
                                preserveAspectRatio="none"
                                className="w-full h-full block"
                                style={{ fill: card.backgroundColor }}
                            >
                                <path d="M0,20 L0,0 Q50,20 100,0 L100,20 Z" />
                            </svg>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 pt-4 flex flex-col flex-grow text-white z-10">
                            <h3
                                className="font-bold mb-3"
                                style={{ fontSize: typography.fontSize["2xl"] }}
                            >
                                {card.title}
                            </h3>
                            <p
                                className="mb-8 opacity-90 leading-relaxed"
                                style={{ fontSize: typography.fontSize.base }}
                            >
                                {card.description}
                            </p>

                            <div className="mt-auto">
                                <button
                                    className="w-full py-3 rounded-lg font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                                    style={{
                                        backgroundColor: colors.neutral.white,
                                        color: card.buttonTextColor,
                                        fontSize: typography.fontSize.lg,
                                    }}
                                >
                                    {card.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

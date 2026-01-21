"use client";

import React from "react";
import Image from "next/image";
import { BODY_TYPES } from "@/constants/bodyTypeData";
import { layout, colors, typography, shadows } from "@/constants/theme";

export const BodyTypeSelector = () => {
    return (
        <section
            className="w-full mx-auto px-6 py-8 font-outfit"
            style={{ maxWidth: layout.container["2xl"] }}
        >
            <h2
                className="font-semibold mb-6"
                style={{
                    fontSize: typography.fontSize["5xl"],
                    color: colors.neutral.dark
                }}
            >
                Looking for a Specific Size
            </h2>

            <div className="flex flex-wrap items-center justify-between gap-4">
                {BODY_TYPES.map((type) => (
                    <button
                        key={type.id}
                        className="flex flex-col items-center group transition-transform hover:-translate-y-1 flex-1"
                        style={{ minWidth: "180px" }}
                    >
                        {/* Image Container */}
                        <div
                            className="relative w-full aspect-[2/1] mb-2 flex items-center justify-center"
                            style={{ height: "100px" }}
                        >
                            <Image
                                src={type.image}
                                alt={type.label}
                                width={200}
                                height={100}
                                className="object-contain"
                            />
                        </div>

                        <span
                            className="font-medium mt-2"
                            style={{
                                fontSize: typography.fontSize.lg,
                                color: colors.neutral.dark
                            }}
                        >
                            {type.label}
                        </span>

                        {/* Active/Hover Indicator Line (optional, seen in some designs) */}
                        <div
                            className="h-0.5 w-0 bg-primary mt-3 transition-all group-hover:w-full"
                            style={{ backgroundColor: colors.primary.main }}
                        />
                    </button>
                ))}
            </div>
        </section>
    );
};

"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { colors } from "@/constants/theme";

export const SidebarInspectionPromo = () => {
    return (
        <div
            className="w-full rounded-[16px] overflow-hidden relative mt-6"
            style={{
                background: "linear-gradient(180deg, #1A1A1A 0%, #000000 100%)",
                minHeight: "380px",
                padding: "24px 20px"
            }}
        >
            {/* Background Pattern/Image */}
            <div className="absolute inset-0 opacity-20">
                <Image
                    src="/images/hero/hero-bg.webp"
                    alt="bg"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="relative z-10 flex flex-col h-full items-center text-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                    <Image
                        src="/images/ui-icons/inspection-badge.svg"
                        alt="Shield"
                        width={24}
                        height={24}
                        className="opacity-80 invert"
                    />
                </div>

                <h3 className="text-[22px] font-bold text-white mb-2 leading-tight">
                    Get your Car <br /> Inspected at Home!
                </h3>

                <p className="text-[13px] text-gray-300 mb-6 leading-relaxed">
                    Detailed 200+ points inspection report with high quality images per point.
                </p>

                <ul className="text-left w-full mb-6 space-y-3">
                    {["Engine", "Suspension", "Exterior", "Interior"].map(item => (
                        <li key={item} className="flex items-center text-[13px] text-gray-300">
                            <span className="w-1.5 h-1.5 bg-[#00A651] rounded-full mr-2"></span>
                            {item} Check
                        </li>
                    ))}
                </ul>

                <div className="mt-auto w-full">
                    <div className="text-white text-center mb-3">
                        <span className="text-[12px] opacity-70">Only </span>
                        <span className="text-[20px] font-bold">PKR 3,500</span>
                    </div>

                    <button
                        className="w-full py-3 rounded-lg font-bold text-[14px] hover:shadow-lg transition-transform active:scale-95"
                        style={{
                            backgroundColor: colors.accent.orange,
                            color: "white"
                        }}
                    >
                        Book Inspection
                    </button>

                    <button className="flex items-center justify-center gap-1 text-[12px] text-white/70 mt-3 hover:text-white transition-colors">
                        View Sample Report
                        <ArrowUpRight size={12} />
                    </button>
                </div>
            </div>
        </div>
    );
};

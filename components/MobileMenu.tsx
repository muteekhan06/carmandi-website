"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react"; // Assuming lucide-react is available as per package.json
import { NAV_LINKS, ACTION_BUTTONS } from "@/constants/headerData";
import { colors, layout, typography } from "@/constants/theme";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const [isVisible, setIsVisible] = useState(false);

    // Handle animation timing
    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            // Lock body scroll
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300); // Match transition duration
            // Unlock body scroll
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isVisible && !isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 lg:hidden font-outfit">
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
                    }`}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Drawer */}
            <div
                className={`absolute right-0 top-0 bottom-0 w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                style={{
                    backgroundColor: colors.background?.primary || "#FFFFFF",
                }}
            >
                <div className="flex flex-col h-full p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-lg font-bold text-[#153481]">Menu</span>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Close menu"
                        >
                            <X className="w-6 h-6 text-gray-900" />
                        </button>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex-1 overflow-y-auto">
                        <ul className="flex flex-col gap-6">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className={`text-lg block transition-colors ${link.isActive
                                            ? "font-semibold text-[#153481]"
                                            : "font-medium text-[#1F1F1F]"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-gray-100">
                        <Link
                            href={ACTION_BUTTONS.sell.href}
                            onClick={onClose}
                            className="w-full flex items-center justify-center h-[48px] bg-[#EB722E] rounded-lg text-white font-semibold text-lg hover:bg-[#d66526] transition-colors"
                        >
                            {ACTION_BUTTONS.sell.label}
                        </Link>
                        <Link
                            href={ACTION_BUTTONS.login.href}
                            onClick={onClose}
                            className="w-full flex items-center justify-center h-[48px] border border-[#EBEBEB] rounded-lg text-[#1F1F1F] font-medium text-lg hover:border-[#153481] hover:text-[#153481] transition-colors"
                        >
                            {ACTION_BUTTONS.login.label}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

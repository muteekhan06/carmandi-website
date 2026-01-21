"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

import { NAV_LINKS, ACTION_BUTTONS } from "@/constants/headerData";
import { layout } from "@/constants/theme";

interface HeaderProps {
    transparent?: boolean;
}

export function Header({ transparent = false }: HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className={`w-full ${transparent ? "bg-transparent border-none" : "border-b border-[#F0F0F0] bg-white"}`}>
            {/* Main Container */}
            <div
                className="mx-auto w-full h-[88px] px-6 flex flex-row justify-between items-center gap-4 lg:gap-[31px]"
                style={{ maxWidth: layout.container["2xl"] }}
            >

                {/* Logo */}
                <Link
                    href="/"
                    className="flex flex-row items-center flex-none order-0 flex-grow-0 shrink-0"
                >
                    <div className="w-[200px] sm:w-[280px] lg:w-[325.76px]">
                        <Logo width="100%" height="100%" />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex flex-row items-center gap-[30px] flex-none order-1 flex-grow-0">
                    {/* Nav links */}
                    <ul className="flex flex-row items-center gap-[24px] list-none">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href} className="flex-none">
                                <Link
                                    href={link.href}
                                    className={`text-[16px] leading-[135%] flex items-center transition-colors duration-200 hover:text-[#153481] ${link.isActive
                                        ? "font-semibold text-[#153481]"
                                        : "font-light text-[#1F1F1F]"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Action buttons */}
                    <div className="flex flex-row items-center gap-[8px]">
                        <Link
                            href={ACTION_BUTTONS.sell.href}
                            className="box-border flex items-center justify-center w-[129px] h-[35px] bg-white border border-[#EB722E] rounded-[7.5px] text-[16px] font-medium text-[#EB722E] transition-all duration-200 hover:bg-[#EB722E] hover:text-white"
                        >
                            {ACTION_BUTTONS.sell.label}
                        </Link>

                        <Link
                            href={ACTION_BUTTONS.login.href}
                            className={`box-border flex items-center justify-center w-[60px] h-[35px] border ${transparent ? "border-current" : "border-[#EBEBEB]"} rounded-[7.5px] text-[16px] font-normal text-[#1F1F1F] text-center transition-all duration-200 hover:border-[#153481] hover:text-[#153481]`}
                        >
                            {ACTION_BUTTONS.login.label}
                        </Link>
                    </div>
                </nav>

                {/* Mobile Menu Button (Hamburger) - Visible only on small screens */}
                <div className="lg:hidden flex items-center">
                    <button
                        className="p-2 text-[#1F1F1F]"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                    <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
                </div>
            </div>
        </header>
    );
}

export default Header;

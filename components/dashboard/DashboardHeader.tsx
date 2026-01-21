"use client";

import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/Logo";
import { ChevronDown } from "lucide-react";

interface DashboardHeaderProps {
    user: {
        name: string;
        email: string;
        avatar: string;
        currentPlan: string;
    };
}

const NAV_LINKS = [
    { href: "/", label: "Home", isActive: false },
    { href: "/auctions", label: "Live Auctions", isActive: false },
    { href: "/car-inspection", label: "Car Inspection", isActive: false },
    { href: "/about", label: "About", isActive: false },
    { href: "/contact", label: "Contact", isActive: false },
];

export default function DashboardHeader({ user }: DashboardHeaderProps) {
    return (
        <header className="w-full border-b border-[#F0F0F0] bg-white sticky top-0 z-50">
            <div className="mx-auto max-w-[1440px] h-[88px] px-[120px] py-[26px] flex flex-row justify-between items-center gap-[31px]">

                {/* Logo with tagline */}
                <Link
                    href="/"
                    className="flex flex-row items-center p-0 w-[325.76px] h-[35px] flex-none order-0 flex-grow-0"
                >
                    <Logo width={325.76} height={35} />
                </Link>

                {/* Navigation */}
                <nav className="flex flex-row items-center p-0 gap-[30px] flex-none order-1 flex-grow-0">

                    {/* Nav links */}
                    <ul className="flex flex-row items-center p-0 gap-[24px] flex-none order-0 flex-grow-0 list-none">
                        {NAV_LINKS.map((link, index) => (
                            <li key={link.href} className="flex-none flex-grow-0" style={{ order: index }}>
                                <Link
                                    href={link.href}
                                    className={`h-[22px] text-[16px] leading-[135%] flex items-center transition-colors duration-200 hover:text-[#153481] ${link.isActive
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
                    <div className="flex flex-row items-center p-0 gap-[12px] flex-none order-1 flex-grow-0">

                        {/* Sell Your Car button */}
                        <Link
                            href="/sell-your-car"
                            className="box-border flex flex-row items-center justify-center w-[129px] h-[35px] bg-white border border-[#EB722E] rounded-[7.5px] text-[16px] font-medium leading-[152%] text-[#EB722E] flex-none order-0 flex-grow-0 transition-all duration-200 hover:bg-[#EB722E] hover:text-white"
                        >
                            Sell Your Car
                        </Link>

                        {/* User Profile Dropdown */}
                        {/* User Profile Dropdown */}
                        <div className="flex items-center gap-2 px-3 h-[35px] rounded-[7.5px] border border-[#EBEBEB] bg-white">
                            <div className="w-[24px] h-[24px] rounded-[6px] overflow-hidden bg-[#E2E8F0]">
                                <Image
                                    src={user.avatar}
                                    alt={user.name}
                                    width={24}
                                    height={24}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <span className="text-[16px] font-normal text-[#1F1F1F] leading-none">
                                {user.name.split(' ')[0]}
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

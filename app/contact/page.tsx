"use strict";
"use client";

import React from "react";
import Image from "next/image";
import { Header, Footer } from "@/components";
import { layout } from "@/constants/theme";
import { Phone, Mail, MapPin } from "lucide-react";
import { AboutGradient } from "@/components/about";

export default function ContactUsPage() {
    return (
        <>
            <main className="relative w-full overflow-hidden bg-white min-h-screen font-outfit">
                <AboutGradient />
                <Header transparent={true} />

                <div
                    className="w-full mx-auto px-6 pt-4 pb-12 relative z-10"
                    style={{ maxWidth: layout.container["2xl"] }}
                >
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* LEFT COLUMN */}
                        <div className="flex-1">
                            {/* Contact Info Header */}
                            <div className="mb-8">
                                <h1 className="text-[32px] font-bold text-[#1F1F1F] mb-3">
                                    Contact Info
                                </h1>
                                <p className="text-[#666666] text-[15px] leading-relaxed">
                                    Got a question or need assistance?
                                    <br />
                                    Call, email, or visit us — our team is always ready to guide you.
                                </p>
                            </div>

                            {/* Contact Details Grid */}
                            <div className="bg-white rounded-[20px] p-8 border border-[#EBEBEB] mb-12 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 mb-8">
                                    {/* Phone */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-[52px] h-[52px] rounded-[14px] bg-[#EEEEEE] flex items-center justify-center flex-shrink-0">
                                            <Phone size={24} className="text-[#555555]" />
                                        </div>
                                        <div>
                                            <h3 className="text-[13px] text-[#555555] mb-1">Phone Number</h3>
                                            <div className="flex items-center gap-2">
                                                <p className="text-[16px] font-semibold text-[#1F1F1F]">
                                                    +990 737 621 432
                                                </p>
                                                <button
                                                    onClick={() => navigator.clipboard.writeText("+990 737 621 432")}
                                                    className="w-6 h-6 flex items-center justify-center rounded hover:bg-blue-50 transition-colors group"
                                                    title="Copy Phone Number"
                                                >
                                                    <Image src="/images/ui-icons/copy.svg" alt="Copy" width={14} height={14} className="cursor-pointer" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-[52px] h-[52px] rounded-[14px] bg-[#EEEEEE] flex items-center justify-center flex-shrink-0">
                                            <Mail size={24} className="text-[#555555]" />
                                        </div>
                                        <div>
                                            <h3 className="text-[13px] text-[#555555] mb-1">Email Address</h3>
                                            <div className="flex items-center gap-2">
                                                <p className="text-[16px] font-semibold text-[#1F1F1F]">
                                                    carmandi.help@gmail.com
                                                </p>
                                                <button
                                                    onClick={() => navigator.clipboard.writeText("carmandi.help@gmail.com")}
                                                    className="w-6 h-6 flex items-center justify-center rounded hover:bg-blue-50 transition-colors group"
                                                    title="Copy Email"
                                                >
                                                    <Image src="/images/ui-icons/copy.svg" alt="Copy" width={14} height={14} className="cursor-pointer" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="w-[52px] h-[52px] rounded-[14px] bg-[#EEEEEE] flex items-center justify-center flex-shrink-0">
                                        <MapPin size={24} className="text-[#555555]" />
                                    </div>
                                    <div>
                                        <h3 className="text-[13px] text-[#555555] mb-1">Email Address</h3>
                                        <div className="flex items-center gap-2">
                                            <p className="text-[16px] font-semibold text-[#1F1F1F]">
                                                Bank Square Market, Model Town, Lahore
                                            </p>
                                            <button
                                                onClick={() => navigator.clipboard.writeText("Bank Square Market, Model Town, Lahore")}
                                                className="w-6 h-6 flex items-center justify-center rounded hover:bg-blue-50 transition-colors group"
                                                title="Copy Address"
                                            >
                                                <Image src="/images/ui-icons/copy.svg" alt="Copy" width={14} height={14} className="cursor-pointer" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Location */}
                            <div>
                                <h2 className="text-[20px] font-bold text-[#1F1F1F] mb-2">
                                    Map Location
                                </h2>
                                <p className="text-[#666666] text-[14px] mb-6">
                                    Here's where you can find us. Drop by for a visit or use the map to get directions right to our office.
                                </p>
                                <div className="w-full h-[300px] bg-[#E1EAF5] rounded-[24px] overflow-hidden relative border border-[#EBEBEB]">
                                    <iframe
                                        src="https://maps.google.com/maps?q=Bank%20Square%20Market%20Model%20Town%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: "grayscale(20%) opacity(0.9)" }}
                                        allowFullScreen={false}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                    {/* Overlay to simulate the custom map look if needed, but iframe is better for real usage */}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN (Form) */}
                        <div className="w-full lg:w-[480px] flex-shrink-0">
                            <div className="bg-white rounded-[24px] p-8 shadow-lg border border-[#EBEBEB]/60 sticky top-8">
                                <h2 className="text-[20px] font-bold text-[#1F1F1F] mb-3">
                                    Contact Form
                                </h2>
                                <p className="text-[#666666] text-[13px] leading-relaxed mb-8">
                                    Send us a message and we'll get back to you as soon as possible. Your queries and feedback matter to us.
                                </p>

                                <form className="space-y-5">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-[14px] font-medium text-[#383838] mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="w-full px-4 py-3 bg-white border border-[#EDEDED] rounded-xl text-[14px] text-[#1F1F1F] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#136BCF] focus:ring-1 focus:ring-[#136BCF] transition-all"
                                        />
                                    </div>

                                    {/* Mobile */}
                                    <div>
                                        <label className="block text-[14px] font-medium text-[#383838] mb-2">
                                            Mobile Number
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="Enter your mobile number"
                                            className="w-full px-4 py-3 bg-white border border-[#EDEDED] rounded-xl text-[14px] text-[#1F1F1F] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#136BCF] focus:ring-1 focus:ring-[#136BCF] transition-all"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-[14px] font-medium text-[#383838] mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="w-full px-4 py-3 bg-white border border-[#EDEDED] rounded-xl text-[14px] text-[#1F1F1F] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#136BCF] focus:ring-1 focus:ring-[#136BCF] transition-all"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-[14px] font-medium text-[#383838] mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            placeholder="Enter your message"
                                            rows={4}
                                            className="w-full px-4 py-3 bg-white border border-[#EDEDED] rounded-xl text-[14px] text-[#1F1F1F] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#136BCF] focus:ring-1 focus:ring-[#136BCF] transition-all resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="button"
                                        className="w-full py-3.5 bg-[#0F285F] text-white font-medium rounded-xl hover:bg-[#0A1E4A] transition-colors shadow-md mt-2"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

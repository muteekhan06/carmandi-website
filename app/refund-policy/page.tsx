"use client";

import React from "react";
import { Header, Footer } from "@/components";
import { AboutGradient } from "@/components/about";
import { layout } from "@/constants/theme";

export default function RefundPolicyPage() {
    return (
        <>
            <main className="relative w-full overflow-hidden bg-[#F8F9FA] min-h-screen font-outfit">
                <AboutGradient />
                <Header transparent={true} />

                <div
                    className="mx-auto w-full px-6 pt-12 pb-24 relative z-10"
                    style={{ maxWidth: "1000px" }}
                >
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFF4EC] text-[#EB722E] text-[13px] font-semibold mb-6">
                            Last Updated: January 15, 2026
                        </span>
                        <h1 className="text-[40px] md:text-[52px] font-bold text-[#1F1F1F] mb-6 tracking-tight">
                            Refund Policy
                        </h1>
                        <p className="text-[#666666] text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto">
                            We believe in fair and transparent transactions. Understanding our refund process ensures a smooth experience for all users.
                        </p>
                    </div>

                    {/* Content Card */}
                    <div className="bg-white rounded-[24px] shadow-sm border border-[#EBEBEB] p-8 md:p-12">
                        <div className="space-y-12">

                            {/* Security Deposits */}
                            <section className="relative pl-8 md:pl-0">
                                <div className="hidden md:flex absolute -left-[52px] top-1 w-10 h-10 rounded-full bg-[#E8F1FA] text-[#136BCF] items-center justify-center font-bold">
                                    $
                                </div>
                                <h2 className="text-[22px] font-bold text-[#1F1F1F] mb-4">Security Deposits</h2>
                                <p className="text-[#555] text-[15px] leading-7 mb-4">
                                    Your security deposit is your commitment to bid. We treat this fund with the utmost care.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-5 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7]">
                                        <h3 className="text-[#166534] font-semibold text-[15px] mb-2">100% Refundable</h3>
                                        <p className="text-[#15803D] text-[13px]">
                                            If you do not win an auction, your deposit remains yours. You can withdraw it at any time instantly.
                                        </p>
                                    </div>
                                    <div className="p-5 rounded-xl bg-[#FEF2F2] border border-[#FEE2E2]">
                                        <h3 className="text-[#991B1B] font-semibold text-[15px] mb-2">Non-Refundable Cases</h3>
                                        <p className="text-[#B91C1C] text-[13px]">
                                            If you win an auction but fail to complete the payment within 48 hours, the deposit may be forfeited.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <div className="border-t border-[#F0F0F0]" />

                            {/* Service Fees */}
                            <section className="relative pl-8 md:pl-0">
                                <div className="hidden md:flex absolute -left-[52px] top-1 w-10 h-10 rounded-full bg-[#E8F1FA] text-[#136BCF] items-center justify-center font-bold">
                                    %
                                </div>
                                <h2 className="text-[22px] font-bold text-[#1F1F1F] mb-4">Services & Inspection Fees</h2>
                                <p className="text-[#555] text-[15px] leading-7">
                                    Fees paid for services that have already been rendered (such as premium inspection reports, featured listing upgrades, or transfer services) are generally non-refundable. However, if a service was not delivered due to a technical error on our part, a full refund will be processed immediately.
                                </p>
                            </section>

                            <div className="border-t border-[#F0F0F0]" />

                            {/* Processing Time */}
                            <section className="relative pl-8 md:pl-0">
                                <div className="hidden md:flex absolute -left-[52px] top-1 w-10 h-10 rounded-full bg-[#E8F1FA] text-[#136BCF] items-center justify-center font-bold">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                </div>
                                <h2 className="text-[22px] font-bold text-[#1F1F1F] mb-4">Refund Processing Timeline</h2>
                                <p className="text-[#555] text-[15px] leading-7 mb-6">
                                    We aim to process all refund requests as quickly as possible.
                                </p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center justify-between p-4 bg-[#FAFAFA] rounded-lg">
                                        <span className="text-[#444] font-medium text-[14px]">Wallet Refunds (CarMandi Balance)</span>
                                        <span className="text-[#136BCF] font-bold text-[14px]">Instant</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-[#FAFAFA] rounded-lg">
                                        <span className="text-[#444] font-medium text-[14px]">Bank Transfer Reversals</span>
                                        <span className="text-[#136BCF] font-bold text-[14px]">3-5 Business Days</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-[#FAFAFA] rounded-lg">
                                        <span className="text-[#444] font-medium text-[14px]">Credit/Debit Card Reversals</span>
                                        <span className="text-[#136BCF] font-bold text-[14px]">7-14 Business Days</span>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

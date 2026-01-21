"use client";

import React from "react";
import { Header, Footer } from "@/components";
import { AboutGradient } from "@/components/about";
import { layout } from "@/constants/theme";

export default function TermsConditionPage() {
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
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8F1FA] text-[#136BCF] text-[13px] font-semibold mb-6">
                            Effective Date: January 1, 2026
                        </span>
                        <h1 className="text-[40px] md:text-[52px] font-bold text-[#1F1F1F] mb-6 tracking-tight">
                            Terms & Conditions
                        </h1>
                        <p className="text-[#666666] text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto">
                            Please read these terms carefully. By accessing Car Mandi, you agree to be bound by these conditions.
                        </p>
                    </div>

                    {/* Content Card */}
                    <div className="bg-white rounded-[24px] shadow-sm border border-[#EBEBEB] p-8 md:p-12">
                        <div className="prose prose-lg max-w-none text-[#555]">

                            <p className="text-[15px] leading-7 mb-8">
                                These Terms constitute a legally binding agreement between you ("User") and Car Mandi ("Platform"). If you do not agree to these terms, you must not use our services.
                            </p>

                            <div className="space-y-10">
                                {/* Rule 1 */}
                                <div className="group">
                                    <h3 className="text-[20px] font-bold text-[#1F1F1F] mb-3 group-hover:text-[#136BCF] transition-colors">
                                        1. Account Registration & Eligibility
                                    </h3>
                                    <p className="text-[15px] leading-7">
                                        To use our services, you must be 18 years or older and possess a valid CNIC. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                                    </p>
                                </div>

                                {/* Rule 2 */}
                                <div className="group">
                                    <h3 className="text-[20px] font-bold text-[#1F1F1F] mb-3 group-hover:text-[#136BCF] transition-colors">
                                        2. Bidding & Buying
                                    </h3>
                                    <ul className="list-disc pl-5 space-y-2 text-[15px] leading-7">
                                        <li>All bids are final and binding contracts.</li>
                                        <li>You must have sufficient funds/limits in your wallet to place a bid.</li>
                                        <li>Winning bidders must complete the payment within 48 hours of auction close.</li>
                                    </ul>
                                </div>

                                {/* Rule 3 */}
                                <div className="group">
                                    <h3 className="text-[20px] font-bold text-[#1F1F1F] mb-3 group-hover:text-[#136BCF] transition-colors">
                                        3. Fees & Payments
                                    </h3>
                                    <p className="text-[15px] leading-7">
                                        Car Mandi charges a success fee on finalized transactions. All fees are disclosed prior to bidding. We reserve the right to change our fee structure with notice.
                                    </p>
                                </div>

                                {/* Rule 4 */}
                                <div className="group">
                                    <h3 className="text-[20px] font-bold text-[#1F1F1F] mb-3 group-hover:text-[#136BCF] transition-colors">
                                        4. Limitation of Liability
                                    </h3>
                                    <p className="text-[15px] leading-7">
                                        Car Mandi is not a party to the actual transaction between buyers and sellers. We do not guarantee the quality, safety, or legality of the cars advertised.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Agreement Footer */}
                    <div className="mt-8 text-center">
                        <p className="text-[#888] text-[13px]">
                            By continuing to use this site, you acknowledge that you have read and understood these Terms.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

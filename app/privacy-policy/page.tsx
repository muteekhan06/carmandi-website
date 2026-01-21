"use client";

import React from "react";
import { Header, Footer } from "@/components";
import { AboutGradient } from "@/components/about";
import { layout } from "@/constants/theme";

export default function PrivacyPolicyPage() {
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
                            Last Updated: January 15, 2026
                        </span>
                        <h1 className="text-[40px] md:text-[52px] font-bold text-[#1F1F1F] mb-6 tracking-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-[#666666] text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto">
                            We value your trust and are committed to protecting your personal information. Transparency is at the core of everything we do.
                        </p>
                    </div>

                    {/* Content Card */}
                    <div className="bg-white rounded-[24px] shadow-sm border border-[#EBEBEB] p-8 md:p-12">
                        <div className="prose prose-lg max-w-none">
                            <div className="space-y-12">
                                {/* Section 1 */}
                                <section>
                                    <h2 className="text-[24px] font-bold text-[#1F1F1F] mb-4 flex items-center gap-3">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FFF4EC] text-[#EB722E] text-[14px]">1</span>
                                        Information We Collect
                                    </h2>
                                    <p className="text-[#555] text-[15px] leading-7 mb-4">
                                        When you use Car Mandi, we collect information that helps us provide you with the best possible experience. This includes:
                                    </p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            "Personal identification (Name, CNIC, Contact)",
                                            "Vehicle details & registration documents",
                                            "Bidding history & transaction records",
                                            "Device & usage analytics for improvement"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 bg-[#FAFAFA] p-4 rounded-xl">
                                                <div className="h-1.5 w-1.5 rounded-full bg-[#136BCF] mt-2 shrink-0" />
                                                <span className="text-[#444] text-[14px]">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                {/* Section 2 */}
                                <section>
                                    <h2 className="text-[24px] font-bold text-[#1F1F1F] mb-4 flex items-center gap-3">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FFF4EC] text-[#EB722E] text-[14px]">2</span>
                                        How We Use Your Data
                                    </h2>
                                    <p className="text-[#555] text-[15px] leading-7">
                                        Your data powers our secure marketplace. We use it to verify identities, process auction transactions, and ensure the safety of our community. We strictly <strong>never sell your personal data</strong> to third-party advertisers. All data sharing is limited to essential partners (e.g., payment processors, verification agencies) required to complete your service.
                                    </p>
                                </section>

                                {/* Section 3 */}
                                <section>
                                    <h2 className="text-[24px] font-bold text-[#1F1F1F] mb-4 flex items-center gap-3">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FFF4EC] text-[#EB722E] text-[14px]">3</span>
                                        Data Security & Protection
                                    </h2>
                                    <p className="text-[#555] text-[15px] leading-7 mb-4">
                                        We employ industry-standard encryption and security protocols to safeguard your information. Our dedicated security team regular monitors our systems for potential vulnerabilities to ensure your data remains safe.
                                    </p>
                                    <div className="bg-[#F0F7FF] rounded-xl p-6 border border-[#D0E6FF]">
                                        <p className="text-[#136BCF] text-[14px] font-medium">
                                            Tip: Enable Two-Factor Authentication (2FA) in your account settings for an extra layer of security.
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>

                    {/* Contact Footer */}
                    <div className="text-center mt-12">
                        <p className="text-[#888] text-[14px]">
                            Questions about your data? Contact our Data Privacy Team at <a href="mailto:privacy@carmandi.pk" className="text-[#136BCF] hover:underline">privacy@carmandi.pk</a>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

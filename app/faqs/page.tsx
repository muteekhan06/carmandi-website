"use strict";
"use client";

import React, { useState } from "react";
import { Header, Footer } from "@/components";
import { layout, colors } from "@/constants/theme";
import { AboutGradient } from "@/components/about";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

// ----------------------------------------------------------------------
// DATA
// ----------------------------------------------------------------------

const QUICK_ANSWERS = [
    {
        title: "What is Car Mandi?",
        content: "Car Mandi is Pakistan's first digital auction platform for used cars, providing a transparent, secure, and efficient buying and selling experience through verified listings.",
    },
    {
        title: "What payment methods are accepted?",
        content: "We accept bank transfers, online banking, mobile wallets, and certified checks for car purchases. All payments are processed through secure channels.",
    },
    {
        title: "Can I cancel my bid?",
        content: "No, all bids are final and legally binding. Please bid carefully and only on vehicles you're serious about purchasing.",
    },
    {
        title: "How does bidding work?",
        content: "Place your bid on any active auction. If you're the highest bidder when the auction ends, you win the car. You'll strictly have 48 hours to complete payment.",
    },
];

const FAQS_BY_CATEGORY = {
    General: [
        {
            question: "How do I register on Car Mandi?",
            answer: "Click on the 'Login/Register' button at the top right. Enter your mobile number to receive an OTP. Once verified, simply fill in your basic profile details to complete the registration.",
        },
        {
            question: "Is there a fee for registration?",
            answer: "No, creating an account on Car Mandi is completely free. You can browse auctions and view inspection reports without any charges. Fees usually apply only when you successfully purchase a vehicle.",
        },
        {
            question: "Are the inspection reports reliable?",
            answer: "Yes, our 'Autofy' inspection reports are conducted by certified automotive engineers. We check over 200+ points including engine health, body condition, suspension, and documentation availability.",
        },
        {
            question: "Can I inspect the car physically?",
            answer: "For selected auctions, we organize physical viewing days at our dedicated yards. Please check the specific auction listing for details on viewing time and location.",
        },
        {
            question: "What cities does Car Mandi operate in?",
            answer: "Currently, we operate extensively in Lahore, Karachi, and Islamabad. We are rapidly expanding our network to other major cities across Pakistan.",
        },
    ],
    Payment: [
        {
            question: "What payment methods do you accept?",
            answer: "We primarily accept Pay Orders (PO), Demand Drafts (DD), and secure online bank transfers. For security and transparency reasons, we generally do not deal in cash transactions for vehicle purchases.",
        },
        {
            question: "Is there a security deposit required to bid?",
            answer: "Yes, to ensure serious bidding, a refundable security deposit is required. This amount stays in your wallet and is fully refundable if you do not win any auction.",
        },
        {
            question: "How long do I have to pay after winning?",
            answer: "Once you win an auction, you must complete the payment within 48 hours. Failure to do so may result in the forfeiture of your security deposit and cancellation of the deal.",
        },
        {
            question: "Are there any hidden charges?",
            answer: "We believe in full transparency. The final bid price and our standard service fee (calculated as a percentage or fixed amount) are the only costs. All applicable taxes are clearly stated before you confirm payment.",
        },
    ],
    Bidding: [
        {
            question: "How do I place a bid?",
            answer: "Navigate to the car you like, check the 'Current Bid', and enter an amount higher than the current price. Confirm your bid, and you're in the race! Ensure your wallet has necessary limits before bidding.",
        },
        {
            question: "What is the minimum bid increment?",
            answer: "The minimum increment amount varies depending on the vehicle's price range, but generally, it is set to PKR 5,000 or PKR 10,000 to keep the bidding competitive.",
        },
        {
            question: "Can I cancel my bid once placed?",
            answer: "No, bids on Car Mandi are legally binding. Once you place a bid, you are committing to buy the vehicle at that price if you win. Please review all details carefully before bidding.",
        },
        {
            question: "What is 'Popcorn Bidding' or Time Extension?",
            answer: "To prevent last-second sniping, if a bid is placed in the final 2 minutes of an auction, the timer automatically extends by another 2 minutes. This ensures all interested buyers have a fair chance to respond.",
        },
        {
            question: "What happens if I win an auction?",
            answer: "Congratulations! You will receive an instant notification and an email/SMS with the 'Winning Bidder' confirmation. Our team will contact you to guide you through the payment and vehicle transfer process.",
        },
    ],
};

// ----------------------------------------------------------------------
// COMPONENTS
// ----------------------------------------------------------------------

type Tab = "General" | "Payment" | "Bidding";

export default function FaqsPage() {
    const [activeTab, setActiveTab] = useState<Tab>("General");
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <>
            <main className="relative w-full overflow-hidden bg-white min-h-screen font-outfit">
                <AboutGradient />
                <Header transparent={true} />

                {/* Content Container - Matching Alignment of Header/Contact Page */}
                <div
                    className="mx-auto w-full px-6 pt-4 pb-20 relative z-10"
                    style={{ maxWidth: layout.container["2xl"] }}
                >
                    {/* Header Text */}
                    <div className="mb-16">
                        <h1 className="text-[44px] font-semibold text-[#1F1F1F] mb-4 leading-tight">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-[#666666] text-[15px] leading-relaxed w-full">
                            Find answers to common questions about buying and selling on CarMandi. Whether you're a new bidder or an experienced seller, we're here to help you navigate our platform with confidence and ease. Browse our quick answers below or explore specific categories to get the information you need.
                        </p>
                    </div>

                    {/* Quick Answers Section */}
                    <div className="mb-16">
                        <div className="mb-8">
                            <h2 className="text-[24px] font-bold text-[#1F1F1F] mb-1">
                                Quick Answers
                            </h2>
                            <p className="text-[#666666] text-[15px]">
                                Most commonly asked questions by our users
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {QUICK_ANSWERS.map((qa, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#FCFCFC] border border-[#F0F0F0] rounded-[20px] p-8 flex flex-col gap-4 hover:shadow-sm transition-shadow"
                                >
                                    <div className="w-10 h-10 bg-[#E8F1FA] rounded-full flex items-center justify-center text-[#136BCF]">
                                        <HelpCircle size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-[16px] font-semibold text-[#1F1F1F] mb-2">
                                            {qa.title}
                                        </h3>
                                        <p className="text-[14px] text-[#666666] leading-relaxed">
                                            {qa.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Accordion Section */}
                    <div>
                        {/* Tabs */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            {(["General", "Payment", "Bidding"] as Tab[]).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => {
                                        setActiveTab(tab);
                                        setOpenAccordion(null); // Reset accordion on tab change
                                    }}
                                    className={`
                                        px-8 py-2.5 rounded-full text-[14px] font-medium transition-all border
                                        ${activeTab === tab
                                            ? "bg-[#E8F1FA] border-[#136BCF] text-[#136BCF]"
                                            : "bg-white border-[#F0F0F0] text-[#666666] hover:bg-gray-50"
                                        }
                                    `}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Accordion Items */}
                        <div className="flex flex-col gap-4">
                            {FAQS_BY_CATEGORY[activeTab].map((item, index) => {
                                const isOpen = openAccordion === index;
                                return (
                                    <div
                                        key={index}
                                        className={`
                                            border rounded-[16px] overflow-hidden transition-all duration-300
                                            ${isOpen ? "bg-[#F8FBFF] border-[#136BCF]" : "bg-white border-[#F0F0F0] hover:border-[#E0E0E0]"}
                                        `}
                                    >
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full px-6 py-5 flex items-center justify-between text-left"
                                        >
                                            <span className={`text-[16px] font-semibold ${isOpen ? "text-[#1F1F1F]" : "text-[#383838]"}`}>
                                                {item.question}
                                            </span>
                                            {isOpen ? (
                                                <ChevronUp size={20} className="text-[#136BCF]" />
                                            ) : (
                                                <ChevronDown size={20} className="text-[#666666]" />
                                            )}
                                        </button>

                                        {/* Content */}
                                        <div
                                            className={`
                                                px-6 overflow-hidden transition-all duration-300 ease-in-out
                                                ${isOpen ? "max-h-[200px] mb-6 opacity-100" : "max-h-0 opacity-0"}
                                            `}
                                        >
                                            <p className="text-[14px] text-[#666666] leading-relaxed pt-2 border-t border-[#E5E5E5]/50">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

/**
 * FAQ Categories matching the image
 */
const CATEGORIES = ["General", "Payment", "Bidding"];

/**
 * Inspection FAQ Data with categories
 */
const FAQ_ITEMS = [
    {
        category: "General",
        question: "What is Car Mandi?",
        answer: "Anyone above 18 years with valid CNIC and driving license can use Car Mandi to buy or sell vehicles.",
    },
    {
        category: "General",
        question: "Is registration free?",
        answer: "Yes, you can register and browse all our listings for free. We only charge a small success fee when you successfully buy or sell a car through our platform.",
    },
    {
        category: "General",
        question: "How long does user verification take?",
        answer: "User verification is typically completed within 24 hours. You will receive an SMS and email notification once your account is verified and ready for bidding.",
    },
    {
        category: "General",
        question: "What cities does Car Mandi operate in?",
        answer: "Currently, we operate extensively in Lahore, Karachi, and Islamabad. We are rapidly expanding our network to other major cities across Pakistan.",
    },
    {
        category: "Payment",
        question: "How do I pay for my purchase?",
        answer: "You can pay through bank transfer, credit/debit card, or our secure online payment portal. Detailed instructions will be provided once your bid is successful.",
    },
    {
        category: "Payment",
        question: "What is the success fee?",
        answer: "The success fee is a small percentage of the final sale price, payable only when a transaction is successfully completed.",
    },
    {
        category: "Bidding",
        question: "How do I place a bid?",
        answer: "Once your account is verified, you can browse listings and enter your bid amount on the car detail page. Each bid must be higher than the current highest bid.",
    },
    {
        category: "Bidding",
        question: "How long do auctions last?",
        answer: "Most auctions on Car Mandi last between 24 to 72 hours, though this can vary depending on the seller's preference.",
    }
];

export function InspectionFAQ() {
    const [activeCategory, setActiveCategory] = useState("General");
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    const filteredItems = FAQ_ITEMS.filter(item => item.category === activeCategory);

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setOpenAccordion(0); // Reset accordion to first item open for the new category
    };

    return (
        <section className="w-full py-8 sm:py-12 md:py-16 bg-white overflow-hidden">
            <div className="w-full mx-auto px-5 sm:px-4 md:px-6" style={{ maxWidth: "1360px" }}>

                {/* Header */}
                <h2 className="text-[22px] xs:text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#1F1F1F] mb-6">
                    FAQ&apos;s
                </h2>

                {/* Categories - Matching UI exactly */}
                <div className="flex flex-wrap gap-3 mb-8">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`
                                px-6 py-2.5 rounded-full text-[14px] sm:text-[15px] font-medium transition-all duration-300 border
                                ${activeCategory === category
                                    ? "bg-[#F8FBFF] border-[#136BCF] text-[#136BCF] shadow-sm"
                                    : "bg-white border-[#E0E0E0] text-[#757575] hover:border-[#136BCF]/30 hover:text-[#136BCF]/70"}
                            `}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Accordion Items */}
                <div className="flex flex-col gap-3 sm:gap-4">
                    {filteredItems.map((item, index) => {
                        const isOpen = openAccordion === index;
                        return (
                            <div
                                key={index}
                                className={`
                                    border rounded-[12px] sm:rounded-[14px] md:rounded-[16px] overflow-hidden transition-all duration-300
                                    ${isOpen ? "bg-[#F8FBFF] border-[#136BCF]" : "bg-white border-[#F0F0F0] hover:border-[#E0E0E0]"}
                                `}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full px-4 sm:px-5 md:px-6 py-3.5 sm:py-4 md:py-5 flex items-center justify-between text-left touch-manipulation"
                                >
                                    <span className={`text-[14px] sm:text-[15px] md:text-[16px] font-semibold ${isOpen ? "text-[#1F1F1F]" : "text-[#383838]"} pr-3`}>
                                        {item.question}
                                    </span>
                                    {isOpen ? (
                                        <ChevronUp size={18} className="text-[#136BCF] flex-shrink-0 sm:w-[20px] sm:h-[20px]" />
                                    ) : (
                                        <ChevronDown size={18} className="text-[#666666] flex-shrink-0 sm:w-[20px] sm:h-[20px]" />
                                    )}
                                </button>

                                {/* Content */}
                                <div
                                    className={`
                                        px-4 sm:px-5 md:px-6 overflow-hidden transition-all duration-300 ease-in-out
                                        ${isOpen ? "max-h-[250px] mb-4 sm:mb-5 md:mb-6 opacity-100" : "max-h-0 opacity-0"}
                                    `}
                                >
                                    <p className="text-[13px] sm:text-[14px] text-[#666666] leading-relaxed pt-2 border-t border-[#E5E5E5]/50">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

export default InspectionFAQ;

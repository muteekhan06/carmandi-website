"use client";

import React, { useState } from "react";
import Image from "next/image";
import { colors } from "@/constants/theme";
import { SavedCards } from "./payment/SavedCards";
import { PaymentJazzCash } from "./payment/PaymentJazzCash";
import { PaymentCard } from "./payment/PaymentCard";
import { PaymentBank } from "./payment/PaymentBank";

export const PaymentMethods = () => {
    const [activeTab, setActiveTab] = useState("card");

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Col: Saved Cards */}
            <SavedCards />

            {/* Right Col: Add Payment Method */}
            <div className="flex-1 bg-white rounded-[16px] p-8" style={{ border: `1px solid ${colors.neutral.border}` }}>
                <h3 className="text-[18px] font-bold text-[#1F1F1F] mb-6">Add Another Payment Method</h3>

                {/* Tabs */}
                <div className="flex gap-4 mb-8 overflow-x-auto pb-2 no-scrollbar">
                    <button
                        onClick={() => setActiveTab("jazzcash")}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all whitespace-nowrap ${activeTab === "jazzcash"
                            ? "border-[#136BCF] bg-[#F5FAFF] text-[#136BCF]"
                            : "border-[#F0F0F0] bg-white text-[#757575]"
                            }`}
                    >
                        <Image src="/images/payment/jazzcash.svg" alt="JazzCash" width={80} height={20} className="h-5 w-auto object-contain" />
                        <span className={`font-normal text-[14px] ${activeTab === 'jazzcash' ? 'text-[#136BCF]' : 'text-[#757575]'}`}>Jazzcash Wallet</span>
                    </button>

                    <button
                        onClick={() => setActiveTab("card")}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all whitespace-nowrap ${activeTab === "card"
                            ? "border-[#136BCF] bg-[#F5FAFF] text-[#136BCF]"
                            : "border-[#F0F0F0] bg-white text-[#757575]"
                            }`}
                    >
                        <Image src="/images/payment/credit-card.svg" alt="Card" width={24} height={24} className="h-5 w-auto object-contain" />
                        <span className="font-normal text-[14px]">Credit / Debit Card</span>
                    </button>

                    <button
                        onClick={() => setActiveTab("bank")}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all whitespace-nowrap ${activeTab === "bank"
                            ? "border-[#136BCF] bg-[#F5FAFF] text-[#136BCF]"
                            : "border-[#F0F0F0] bg-white text-[#757575]"
                            }`}
                    >
                        <Image src="/images/payment/bank-transfer.svg" alt="Bank" width={24} height={24} className="h-5 w-auto object-contain" />
                        <span className="font-normal text-[14px]">Bank Transfer (Manual)</span>
                    </button>
                </div>

                {/* Content */}
                {activeTab === 'jazzcash' && <PaymentJazzCash />}
                {activeTab === 'card' && <PaymentCard />}
                {activeTab === 'bank' && <PaymentBank />}
            </div>
        </div>
    );
}


"use client";

import React, { useState } from "react";
import Image from "next/image";

export const PaymentJazzCash = () => {
    const [mobileNumber, setMobileNumber] = useState("");
    const [cnicNumber, setCnicNumber] = useState("");

    return (
        <div className="space-y-6">
            <div className="border border-dashed border-[#136BCF]/35 rounded-[8px] p-6">
                <label className="block text-[14px] font-normal text-[#383838] mb-2">Jazzcash Mobile Number</label>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="0300 1234567"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-full h-[48px] pl-4 pr-12 bg-[#F5FAFF] border border-transparent rounded-[8px] text-[16px] text-[#1F1F1F] placeholder:text-[#BDBDBD] focus:outline-none focus:border-[#136BCF] shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)]"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Image src="/images/payment/jazzcash.svg" alt="JazzCash" width={60} height={16} className="h-4 w-auto opacity-80" />
                    </div>
                </div>
            </div>
            <div>
                <label className="block text-[14px] font-normal text-[#383838] mb-2">Cnic Number</label>
                <input
                    type="text"
                    placeholder="Enter last 6 Digits only"
                    value={cnicNumber}
                    onChange={(e) => setCnicNumber(e.target.value)}
                    className="w-full h-[52px] px-4 border border-[#F0F0F0] rounded-[8px] text-[16px] placeholder:text-[#BDBDBD] focus:outline-none focus:border-[#136BCF]"
                />
            </div>
            <div className="flex justify-end pt-4">
                <button className="w-[180px] h-[52px] bg-[#153481] text-white rounded-[12px] text-[16px] font-medium hover:bg-[#0E2356] transition-colors">Add</button>
            </div>
        </div>
    );
};

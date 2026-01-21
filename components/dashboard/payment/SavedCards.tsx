"use client";

import React from "react";

// Visa Logo - Exact from Footer
const VisaLogo = ({ className = "h-3 w-auto" }: { className?: string }) => (
    <svg viewBox="6 3 34 10" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M20.9993 12.4198H18.3374L20.0011 3.58751H22.6632L20.9993 12.4198ZM16.0981 3.58751L13.5604 9.66246L13.2601 8.35427L13.2604 8.35474L12.3647 4.38276C12.3647 4.38276 12.2564 3.58751 11.102 3.58751H6.90665L6.85742 3.73706C6.85742 3.73706 8.14036 3.96765 9.64182 4.7466L11.9545 12.4201H14.7279L18.9629 3.58751H16.0981ZM37.0351 12.4198H39.4793L37.3482 3.58727H35.2084C34.2203 3.58727 33.9797 4.24549 33.9797 4.24549L30.0097 12.4198H32.7845L33.3394 11.1079H36.7233L37.0351 12.4198ZM34.106 9.29553L35.5046 5.99027L36.2915 9.29553H34.106ZM30.2178 5.71148L30.5977 3.81479C30.5977 3.81479 29.4255 3.42969 28.2035 3.42969C26.8826 3.42969 23.7457 3.92843 23.7457 6.35364C23.7457 8.63543 27.4274 8.66377 27.4274 9.86234C27.4274 11.0609 24.125 10.8461 23.0352 10.0903L22.6394 12.0735C22.6394 12.0735 23.828 12.5722 25.644 12.5722C27.4605 12.5722 30.2008 11.7597 30.2008 9.54835C30.2008 7.2519 26.4861 7.03808 26.4861 6.03965C26.4863 5.04098 29.0787 5.16927 30.2178 5.71148Z" fill="#2566AF" />
    </svg>
);

// Simple Mastercard Logo - Two overlapping circles
const MastercardLogo = ({ className = "h-5 w-auto" }: { className?: string }) => (
    <svg viewBox="0 0 32 20" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#EB001B" />
        <circle cx="22" cy="10" r="10" fill="#F79E1B" />
        <path d="M16 3a9.95 9.95 0 0 0-3.5 7c0 2.8 1.2 5.3 3.5 7a9.95 9.95 0 0 0 3.5-7c0-2.8-1.2-5.3-3.5-7z" fill="#FF5F00" />
    </svg>
);

const MOCK_SAVED_CARDS = [
    { id: 1, type: "visa", holder: "Saad Hassan", last4: "242", expiry: "08/25" },
    { id: 2, type: "mastercard", holder: "Ahmed Khan", last4: "242", expiry: "08/25" },
];

export const SavedCards = () => {
    return (
        <div className="w-full lg:w-[320px] bg-white rounded-[16px] p-5 h-fit" style={{ boxShadow: "0 0 10px rgba(0,0,0,0.02)" }}>
            <h3 className="text-[16px] font-bold text-[#1F1F1F] mb-4">Saved Cards</h3>
            <div className="flex flex-col gap-3">
                {MOCK_SAVED_CARDS.map((card) => (
                    <div key={card.id} className="bg-[#F9FAFB] rounded-[10px] px-4 py-3 border border-transparent hover:border-[#136BCF] transition-colors cursor-pointer">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-[13px] font-medium text-[#1F1F1F] mb-0.5">{card.holder}</p>
                                <p className="text-[12px] text-[#757575] font-normal">
                                    1248 **** **** *{card.last4} <span className="mx-1">|</span> Expiry: {card.expiry}
                                </p>
                            </div>
                            <div className="ml-3 flex-shrink-0">
                                {card.type === 'visa' ? <VisaLogo className="h-3 w-auto" /> : <MastercardLogo className="h-4 w-auto" />}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

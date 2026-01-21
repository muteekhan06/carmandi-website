"use client";

import React, { useState } from "react";

// Exact SVG from Figma design for the empty state character
const EmptyStateIcon = () => (
    <svg width="56" height="80" viewBox="0 0 56 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_empty)">
            <path d="M44.76 68.7652C44.76 68.7652 47.055 77.999 53.738 77.685" stroke="#136BCF" strokeWidth="1.23077" strokeMiterlimit="10" />
            <path d="M52.061 66.6079C52.191 67.5494 51.532 68.4232 50.584 68.5525L30.923 71.254L18.529 72.959C17.588 73.088 16.714 72.429 16.584 71.482L10.148 24.6756C10.018 23.734 10.677 22.8602 11.624 22.7309L43.686 18.3248C44.634 18.1956 45.501 18.854 45.631 19.8017L52.061 66.6079Z" fill="#136BCF" fillOpacity="0.07" stroke="#136BCF" strokeWidth="1.23077" strokeMiterlimit="10" />
            <path d="M20.462 36.9459L23.52 30.7305" stroke="#136BCF" strokeWidth="1.23077" strokeMiterlimit="10" />
            <path d="M24.24 36.3906L19.742 31.2891" stroke="#136BCF" strokeWidth="1.23077" strokeMiterlimit="10" />
            <path d="M36.701 34.5474L39.76 28.332" stroke="#136BCF" strokeWidth="1.23077" strokeMiterlimit="10" />
            <path d="M40.48 33.986L35.981 28.8906" stroke="#136BCF" strokeWidth="1.23077" strokeMiterlimit="10" />
            <path d="M27.336 43.8586C28.019 42.2463 29.434 41.0279 31.188 40.7694C32.893 40.5171 34.511 41.2248 35.576 42.5048" stroke="#136BCF" strokeWidth="1.23077" strokeMiterlimit="10" />
            <path d="M12.591 42.4375C12.591 42.4375 6.493 45.576 7.853 53.4037" stroke="#136BCF" strokeWidth="1.23077" strokeMiterlimit="10" />
            <path d="M48.216 38.6329C48.216 38.6329 53.527 36.9529 52.351 26.8359" stroke="#136BCF" strokeWidth="1.23077" strokeMiterlimit="10" />
            <path d="M29.521 80.072C34.321 75.383 30.924 71.254 30.924 71.254L29.521 80.072Z" fill="white" />
            <path d="M29.521 80.072C34.321 75.383 30.924 71.254 30.924 71.254" stroke="#136BCF" strokeWidth="1.23077" strokeMiterlimit="10" />
            <path d="M9.81 18.5039C9.81 18.5039 4.376 19.5747 6.327 26.8301" stroke="#136BCF" strokeWidth="1.23077" strokeMiterlimit="10" />
            <path d="M5.557 17.3516C5.557 17.3516 1.157 18.3054 2.573 24.3977" stroke="#136BCF" strokeWidth="1.23077" strokeMiterlimit="10" />
            <path d="M14.899 73.672C14.899 73.672 15.693 76.601 19.588 75.26" stroke="#136BCF" strokeWidth="1.23077" strokeMiterlimit="10" />
            <path d="M14.438 76.043C14.438 76.043 15.127 78.412 18.401 77.403" stroke="#136BCF" strokeWidth="1.23077" strokeMiterlimit="10" />
            <path d="M50.93 45.5742L51.76 52.4111" stroke="#136BCF" strokeWidth="0.215385" strokeMiterlimit="10" />
            <path d="M52.357 46.1836L52.935 50.959" stroke="#136BCF" strokeWidth="0.215385" strokeMiterlimit="10" />
            <path d="M49.816 19.6359C49.816 19.6359 50.486 14.1405 42.985 13.7344" stroke="#136BCF" strokeWidth="1.23077" strokeMiterlimit="10" />
            <path d="M52.234 15.9551C52.234 15.9551 52.695 11.4751 46.468 10.9336" stroke="#136BCF" strokeWidth="1.23077" strokeMiterlimit="10" />
        </g>
        <defs>
            <clipPath id="clip0_empty">
                <rect width="55.3846" height="80" fill="white" transform="translate(0.308)" />
            </clipPath>
        </defs>
    </svg>
);

export const QuestionsAndComments = () => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted:", message);
        setMessage("");
    };

    return (
        <div className="mt-12 font-outfit">
            <h3 className="text-[24px] font-semibold text-[#1F1F1F] mb-8">Question & Comments</h3>

            {/* Empty State - Horizontal layout matching design */}
            <div className="flex items-center justify-center gap-6 mb-10 py-8">
                <EmptyStateIcon />
                <div className="text-[#707070] text-[16px] leading-relaxed">
                    No questions or<br />comments yet
                </div>
            </div>

            {/* Input Section */}
            <div className="bg-[#F5FAFF] rounded-[12px] p-6 border border-[#EBEBEB]">
                <h4 className="text-[16px] font-medium text-[#1F1F1F] mb-4">Ask a Question / Write a Comment</h4>

                <form onSubmit={handleSubmit} className="relative">
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write a message ..."
                        className="w-full h-[140px] p-4 bg-white border border-[#EBEBEB] rounded-[8px] text-[#383838] placeholder:text-[#A0A0A0] text-[14px] focus:outline-none focus:border-[#136BCF] resize-none shadow-sm"
                    />

                    <div className="absolute bottom-4 right-4">
                        <button
                            type="submit"
                            className="bg-[#F58220] hover:bg-[#E0721B] text-white text-[14px] font-medium px-6 py-1.5 rounded-[6px] transition-colors"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

"use client";

import React from "react";

export const SettingsTab = () => {
    return (
        <div className="bg-white rounded-[16px] p-8">
            <h3 className="text-[18px] font-bold text-[#1F1F1F] mb-8">Edit your Information</h3>

            {/* Two Column Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                {/* Name */}
                <div>
                    <label className="block text-[14px] text-[#1F1F1F] mb-2">Name</label>
                    <input
                        type="text"
                        defaultValue="Sheikh Muhammad Saad"
                        className="w-full h-[48px] px-4 border border-[#E5E7EB] rounded-[8px] text-[14px] text-[#1F1F1F] focus:border-[#136BCF] focus:outline-none"
                    />
                </div>

                {/* Your Address */}
                <div>
                    <label className="block text-[14px] text-[#1F1F1F] mb-2">Your Address</label>
                    <input
                        type="text"
                        placeholder="Add your address"
                        className="w-full h-[48px] px-4 border border-[#E5E7EB] rounded-[8px] text-[14px] text-[#1F1F1F] placeholder:text-[#BDBDBD] focus:border-[#136BCF] focus:outline-none"
                    />
                </div>

                {/* Email Address */}
                <div>
                    <label className="block text-[14px] text-[#1F1F1F] mb-2">Email Address</label>
                    <div className="relative">
                        <input
                            type="email"
                            defaultValue="Sheikhhhhhhhhhh@gmail.com"
                            className="w-full h-[48px] px-4 pr-24 border border-[#E5E7EB] rounded-[8px] text-[14px] text-[#1F1F1F] focus:border-[#136BCF] focus:outline-none"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-[#136BCF]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                            </svg>
                            <span className="text-[14px] font-normal">Verified</span>
                        </div>
                    </div>
                </div>

                {/* Phone Number */}
                <div>
                    <label className="block text-[14px] text-[#1F1F1F] mb-2">Phone Number</label>
                    <div className="relative">
                        <input
                            type="tel"
                            defaultValue="+92 325 5824521"
                            className="w-full h-[48px] px-4 pr-40 border border-[#E5E7EB] rounded-[8px] text-[14px] text-[#1F1F1F] focus:border-[#136BCF] focus:outline-none"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 text-[13px] font-medium text-[#136BCF] bg-[#E8F4FD] rounded-[8px] hover:bg-[#D6EBFA] transition-colors">
                            Verify Phone Number
                        </button>
                    </div>
                </div>
            </div>

            {/* Upload Image + Save Button Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
                {/* Upload your image - Left Half */}
                <div className="flex items-center gap-5">
                    <div className="flex-1">
                        <p className="text-[14px] text-[#1F1F1F] mb-1">Upload your image</p>
                        <p className="text-[12px] text-[#9CA3AF] leading-relaxed">
                            Add a profile photo to personalize your account
                        </p>
                    </div>
                    <div className="relative flex-shrink-0">
                        <div className="w-[80px] h-[80px] rounded-[16px] bg-[#E8F4FD] flex items-center justify-center">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="#136BCF">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </div>
                        <button className="absolute -bottom-2 -right-2 w-[28px] h-[28px] bg-[#153481] rounded-full flex items-center justify-center shadow-lg">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Save Changes Button - Right Half */}
                <div className="flex items-end justify-end">
                    <button className="px-8 py-3 bg-[#153481] text-white rounded-[8px] text-[14px] font-medium hover:bg-[#0E2356] transition-colors">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

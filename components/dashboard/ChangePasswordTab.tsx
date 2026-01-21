"use client";

import React from "react";

export const ChangePasswordTab = () => {
    return (
        <div className="bg-white rounded-[16px] p-8">
            <h3 className="text-[18px] font-bold text-[#1F1F1F] mb-8">Change Password</h3>

            {/* Three Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Old Password */}
                <div>
                    <label className="block text-[14px] text-[#1F1F1F] mb-2">Old Password</label>
                    <input
                        type="password"
                        placeholder="Enter old password"
                        className="w-full h-[48px] px-4 border border-[#E5E7EB] rounded-[8px] text-[14px] text-[#1F1F1F] placeholder:text-[#BDBDBD] focus:border-[#136BCF] focus:outline-none"
                    />
                </div>

                {/* New Password */}
                <div>
                    <label className="block text-[14px] text-[#1F1F1F] mb-2">New Password</label>
                    <input
                        type="password"
                        placeholder="Enter new password"
                        className="w-full h-[48px] px-4 border border-[#E5E7EB] rounded-[8px] text-[14px] text-[#1F1F1F] placeholder:text-[#BDBDBD] focus:border-[#136BCF] focus:outline-none"
                    />
                </div>

                {/* Verify New Password */}
                <div>
                    <label className="block text-[14px] text-[#1F1F1F] mb-2">Verify New Password</label>
                    <input
                        type="password"
                        placeholder="Enter password again"
                        className="w-full h-[48px] px-4 border border-[#E5E7EB] rounded-[8px] text-[14px] text-[#1F1F1F] placeholder:text-[#BDBDBD] focus:border-[#136BCF] focus:outline-none"
                    />
                </div>
            </div>

            {/* Update Password Button - Right Aligned */}
            <div className="flex justify-end">
                <button className="px-8 py-3 bg-[#153481] text-white rounded-[8px] text-[14px] font-medium hover:bg-[#0E2356] transition-colors">
                    Update Password
                </button>
            </div>
        </div>
    );
};

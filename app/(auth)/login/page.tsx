"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import AuthSocialButtons from "@/components/auth/AuthSocialButtons";
import AuthFooterLinks from "@/components/auth/AuthFooterLinks";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Example validation - remove in production
        if (email && password) {
            // Simulating login
            console.log("Login with:", email, password);
            setError("");
        } else {
            setError("Your email and password did not match");
        }
    };

    return (
        <div className="w-full h-full flex flex-col justify-center px-4 sm:px-8 lg:px-12 relative overflow-y-auto overflow-x-hidden">
            <div className="w-full max-w-[520px] mx-auto py-8 lg:py-0">
                {/* Heading */}
                <div className="mb-6 text-center sm:text-left">
                    <h1 className="text-[24px] sm:text-[26px] font-bold text-[#1F1F1F] mb-1">
                        Log in & Gari Le Jaoô
                    </h1>
                    <p className="text-[13px] sm:text-[14px] text-[#757575]">
                        Log in to continue your car bidding journey
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-2">
                    {/* Email or Phone */}
                    <div>
                        <label className="block text-[13px] font-medium text-[#1F1F1F] mb-1.5">
                            Email or Phone
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your email or phone number"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setError(""); }}
                            className={`w-full h-[44px] sm:h-[48px] px-4 border-2 rounded-[8px] text-[14px] sm:text-[15px] placeholder:text-[#BDBDBD] focus:outline-none transition-all bg-white ${error
                                ? 'border-[#F73131] bg-[#FFF5F5]'
                                : email
                                    ? 'border-[#153481]'
                                    : 'border-[#E0E0E0] focus:border-[#153481]'
                                }`}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <div className="flex justify-between items-center mb-1.5">
                            <label className="block text-[13px] font-medium text-[#1F1F1F]">
                                Password
                            </label>
                            <Link
                                href="/forgot-password"
                                className="text-[12px] sm:text-[13px] text-[#136BCF] hover:underline font-medium"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                                className={`w-full h-[44px] sm:h-[48px] px-4 pr-12 border-2 rounded-[8px] text-[14px] sm:text-[15px] placeholder:text-[#BDBDBD] focus:outline-none transition-all bg-white ${error
                                    ? 'border-[#F73131] bg-[#FFF5F5]'
                                    : password
                                        ? 'border-[#153481]'
                                        : 'border-[#E0E0E0] focus:border-[#153481]'
                                    }`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9E9E9E] hover:text-[#757575] transition-colors"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Error Message Banner */}
                    {error && (
                        <div className="w-full h-[39px] flex items-center justify-center gap-2 rounded-[8px]" style={{ backgroundColor: 'rgba(247, 49, 49, 0.05)' }}>
                            {/* Error Icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="6" fill="#F73131" />
                                <path d="M12 9.5V12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                <circle cx="12" cy="14.5" r="0.75" fill="white" />
                            </svg>
                            <span className="text-[#F73131] text-[14px] font-medium">{error}</span>
                        </div>
                    )}

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full h-[44px] sm:h-[48px] bg-[#102B6D] hover:bg-[#0D245B] text-white rounded-[8px] font-semibold text-[14px] sm:text-[15px] transition-colors"
                    >
                        Log in to your account
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-3 my-5">
                    <div className="flex-1 h-px bg-[#E0E0E0]" />
                    <span className="text-[12px] sm:text-[13px] text-[#757575]">Or Continue With</span>
                    <div className="flex-1 h-px bg-[#E0E0E0]" />
                </div>

                {/* Social Login Buttons */}
                <AuthSocialButtons />

                {/* Register Link */}
                <p className="text-center text-[12px] sm:text-[13px] text-[#757575] mt-4">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="text-[#136BCF] font-semibold hover:underline">
                        Register Now
                    </Link>
                </p>

                {/* Shared Footer Links */}
                <AuthFooterLinks />
            </div>
        </div>
    );
}

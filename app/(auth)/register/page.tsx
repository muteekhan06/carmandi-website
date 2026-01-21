"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2, User, Plus } from "lucide-react";
import AuthSocialButtons from "@/components/auth/AuthSocialButtons";
import AuthFooterLinks from "@/components/auth/AuthFooterLinks";

export default function RegisterPage() {
    const router = useRouter();

    // --- STATE MANAGEMENT ---
    const [step, setStep] = useState(1); // 1: Register, 2: OTP, 3: Profile, 4: Business Logo/Info

    // Step 1: Register State
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [registerError, setRegisterError] = useState("");

    // Step 2: OTP State
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [timeLeft, setTimeLeft] = useState(59);
    const [isVerifying, setIsVerifying] = useState(false);
    const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Step 3: Profile Upload State
    const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);
    const [customImage, setCustomImage] = useState<string | null>(null);

    // Step 4: Business Info State
    const [businessLogo, setBusinessLogo] = useState<string | null>(null);
    const [businessName, setBusinessName] = useState("");
    const [businessAddress, setBusinessAddress] = useState("");

    // --- LOGIC HANDLERS ---

    // STEP 1: REGISTER
    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (!fullName || !email || !phone || !password || !confirmPassword) {
            setRegisterError("Please fill in all fields");
            return;
        }
        if (password !== confirmPassword) {
            setRegisterError("Passwords do not match");
            return;
        }
        // Instant transition - no simulated delay
        setRegisterError("");
        setStep(2); // Move to OTP
    };

    // STEP 2: OTP
    useEffect(() => {
        if (step === 2 && timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [step, timeLeft]);

    useEffect(() => {
        if (step === 2) {
            otpInputRefs.current[0]?.focus();
        }
    }, [step]);

    const handleOtpChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);
        if (value && index < 3) otpInputRefs.current[index + 1]?.focus();
    };

    const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            otpInputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        const code = otp.join("");
        if (code.length < 4) return;

        setIsVerifying(true);
        // LIGHTNING FAST - No delay
        setStep(3); // Move to Profile
        setIsVerifying(false);
    };

    const handleResendOtp = () => {
        setTimeLeft(59);
        setOtp(["", "", "", ""]);
        otpInputRefs.current[0]?.focus();
    };

    // STEP 3: PROFILE
    const avatars = [
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=400&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=400&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&auto=format&fit=crop&q=60"
    ];

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCustomImage(reader.result as string);
                setSelectedAvatar(null);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveProfile = () => {
        if (customImage) localStorage.setItem('userAvatar', customImage);
        else if (selectedAvatar !== null) localStorage.setItem('userAvatar', avatars[selectedAvatar]);
        setStep(4); // Move to Business Info
    };

    const handleSkipProfile = () => {
        setStep(4); // Move to Business Info
    };

    // STEP 4: BUSINESS INFO
    const handleBusinessLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBusinessLogo(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveBusiness = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate Save
        console.log("Business Info Saved:", { businessName, businessAddress, businessLogo });
        // Redirect to Auctions - The Final Destination
        router.push('/auctions');
    };

    // --- RENDER ---
    return (
        <div className="w-full h-full flex flex-col justify-center px-4 sm:px-8 lg:px-12 relative overflow-y-auto overflow-x-hidden font-outfit">

            {/* STEP 1: REGISTER FORM */}
            {step === 1 && (
                <div className="w-full max-w-[520px] mx-auto py-12 lg:py-0 animate-fade-in">
                    <div className="mb-4 text-center sm:text-left">
                        <h1 className="text-[24px] sm:text-[26px] font-bold text-[#1F1F1F] mb-1">
                            Register Now & Gari Le Jaoô
                        </h1>
                        <p className="text-[13px] sm:text-[14px] text-[#757575]">
                            Register to continue your car bidding journey
                        </p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-3">
                        {/* Name */}
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full h-[44px] sm:h-[48px] px-4 border-2 border-[#E0E0E0] rounded-[8px] text-[14px] focus:border-[#153481] focus:outline-none transition-all"
                        />
                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-[44px] sm:h-[48px] px-4 border-2 border-[#E0E0E0] rounded-[8px] text-[14px] focus:border-[#153481] focus:outline-none transition-all"
                        />
                        {/* Phone */}
                        <div className="flex items-center h-[44px] sm:h-[48px] border-2 border-[#E0E0E0] rounded-[8px] overflow-hidden focus-within:border-[#153481] transition-all bg-white">
                            <div className="flex items-center gap-2 pl-3 pr-4 h-full border-r border-[#E0E0E0] shrink-0">
                                <div className="w-[24px] h-[16px] relative shadow-sm border border-gray-100">
                                    <Image src="/images/flags/pakistan.svg" alt="PK" fill className="object-cover" />
                                </div>
                                <span className="text-[14px] text-[#1F1F1F] font-medium">+92</span>
                            </div>
                            <input
                                type="tel"
                                placeholder="3123456789"
                                value={phone}
                                onChange={(e) => {
                                    const val = e.target.value.replace(/\D/g, '');
                                    if (val.length <= 10) setPhone(val);
                                }}
                                className="flex-1 h-full px-4 text-[14px] focus:outline-none bg-transparent"
                            />
                        </div>
                        {/* Passwords */}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full h-[44px] sm:h-[48px] px-4 pr-12 border-2 border-[#E0E0E0] rounded-[8px] text-[14px] focus:border-[#153481] focus:outline-none transition-all"
                            />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9E9E9E]">
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full h-[44px] sm:h-[48px] px-4 pr-12 border-2 border-[#E0E0E0] rounded-[8px] text-[14px] focus:border-[#153481] focus:outline-none transition-all"
                            />
                            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9E9E9E]">
                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        {registerError && <p className="text-red-500 text-sm text-center">{registerError}</p>}

                        <button type="submit" className="w-full h-[44px] sm:h-[48px] bg-[#102B6D] hover:bg-[#0D245B] text-white rounded-[8px] font-semibold text-[14px] transition-colors">
                            Sign Up Now
                        </button>
                    </form>

                    <div className="flex items-center gap-3 my-4">
                        <div className="flex-1 h-px bg-[#E0E0E0]" />
                        <span className="text-[12px] text-[#757575]">Or Continue With</span>
                        <div className="flex-1 h-px bg-[#E0E0E0]" />
                    </div>
                    <AuthSocialButtons />
                    <p className="text-center text-[12px] text-[#757575] mt-4">
                        Have an account? <Link href="/login" className="text-[#136BCF] font-semibold hover:underline">Login Now</Link>
                    </p>
                    <AuthFooterLinks />
                </div>
            )}

            {/* STEP 2: OTP VERIFICATION */}
            {step === 2 && (
                <div className="w-full max-w-[520px] mx-auto py-8 lg:py-0 animate-fade-in">
                    <div className="mb-8 text-center sm:text-left">
                        <h1 className="text-[24px] sm:text-[26px] font-bold text-[#1F1F1F] mb-2">Enter Confirmation Code</h1>
                        <p className="text-[13px] sm:text-[14px] text-[#757575]">Enter the 4 digit code we sent to +92 {phone}</p>
                    </div>
                    <form onSubmit={handleVerifyOtp} className="space-y-8">
                        <div className="flex gap-3 sm:gap-4 justify-between sm:justify-start">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => { otpInputRefs.current[index] = el; }}
                                    type="tel"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleOtpChange(index, e.target.value)}
                                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                    className={`w-full sm:w-[87px] h-[50px] sm:h-[60px] border border-[#E0E0E0] rounded-[8px] text-center text-[20px] sm:text-[24px] font-medium focus:outline-none focus:border-[#153481] focus:ring-1 focus:ring-[#153481] transition-all ${digit ? 'border-[#153481]' : ''}`}
                                />
                            ))}
                        </div>
                        <button type="submit" disabled={isVerifying || otp.some(d => !d)} className="w-full h-[44px] sm:h-[48px] bg-[#153481] hover:bg-[#0D245B] text-white rounded-[8px] font-semibold text-[14px] transition-all flex items-center justify-center gap-2">
                            Verify Now
                        </button>
                    </form>
                    <div className="flex items-center justify-center gap-2 mt-6 text-[#757575]">
                        <div className="relative w-[18px] h-[18px]">
                            <Image src="/images/ui-icons/resend.svg" alt="Resend" fill className="object-contain" />
                        </div>
                        <span className="text-[13px] font-medium">
                            {timeLeft > 0 ? `Resend Code After ${timeLeft} Seconds` : <button onClick={handleResendOtp} className="text-[#153481] hover:underline font-semibold">Resend Code</button>}
                        </span>
                    </div>
                </div>
            )}

            {/* STEP 3: PROFILE UPLOAD */}
            {step === 3 && (
                <div className="w-full max-w-[480px] mx-auto py-16 animate-fade-in relative">

                    <div className="text-center mb-8">
                        <h1 className="text-[26px] font-bold text-[#1F1F1F] mb-2">Upload your Profile Picture</h1>
                        <p className="text-[#757575] text-[14px]">Choose a picture that represents you best.</p>
                    </div>

                    <div className="flex justify-center mb-8">
                        <div className="relative group cursor-pointer">
                            <label className="block w-[124px] h-[124px] rounded-[32px] bg-[#EEF4FF] hover:bg-[#E6F0FF] transition-colors flex items-center justify-center overflow-hidden">
                                {customImage ? (
                                    <Image src={customImage} alt="Custom upload" fill className="object-cover" />
                                ) : (
                                    <User size={52} className="text-[#153481]" strokeWidth={2.5} />
                                )}
                                <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                            </label>
                            <div className="absolute bottom-[-6px] right-[-6px] w-[34px] h-[34px] rounded-full bg-[#153481] border-[4px] border-white flex items-center justify-center text-white shadow-md">
                                <Plus size={16} strokeWidth={3} />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-[#E0E0E0]"></div>
                        <span className="text-[13px] text-[#9E9E9E] font-medium">Or Continue With</span>
                        <div className="h-[1px] flex-1 bg-[#E0E0E0]"></div>
                    </div>

                    <div className="grid grid-cols-5 gap-3 mb-8 px-2">
                        {avatars.map((src, index) => (
                            <button
                                key={index}
                                onClick={() => { setSelectedAvatar(index); setCustomImage(null); }}
                                className={`relative aspect-square rounded-[12px] overflow-hidden transition-all duration-200 group ${selectedAvatar === index ? "ring-2 ring-[#153481] ring-offset-2" : "hover:ring-2 hover:ring-[#153481]/20 hover:ring-offset-1"}`}
                            >
                                <Image src={src} alt={`Avatar ${index + 1}`} fill className="object-cover" />
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button onClick={handleSkipProfile} className="w-[40%] h-[54px] rounded-[10px] bg-[#F5FAFF] text-[#136BCF] font-medium text-[16px] hover:bg-[#EEF6FF] transition-all shadow-sm border border-[#E0F0FF]">
                            Skip
                        </button>
                        <button onClick={handleSaveProfile} className="w-[60%] h-[54px] rounded-[10px] bg-[#153481] text-white font-medium text-[16px] hover:bg-[#0D245B] transition-all shadow-md shadow-[#153481]/20">
                            Save Profile Picture
                        </button>
                    </div>
                </div>
            )}

            {/* STEP 4: BUSINESS LOGO & INFO - MATCH CUSTOM DESIGN */}
            {step === 4 && (
                <div className="w-full max-w-[480px] mx-auto py-16 animate-fade-in">
                    <div className="mb-10 text-left">
                        <h1 className="text-[36px] font-bold text-[#1F1F1F] leading-[145%] mb-2 font-outfit">
                            Upload your Business Logo
                        </h1>
                        <p className="text-[14px] text-[#757575]">
                            Upload your official business logo to establish trust with sellers.
                        </p>
                    </div>

                    {/* Logo Uploader */}
                    <div className="flex justify-center mb-10">
                        <div className="relative group cursor-pointer">
                            <label className="block w-[100px] h-[100px] rounded-[24px] bg-[#F5FAFF] hover:bg-[#EEF6FF] transition-colors flex items-center justify-center overflow-hidden">
                                {businessLogo ? (
                                    <Image src={businessLogo} alt="Business Logo" fill className="object-cover" />
                                ) : (
                                    /* Increased inner SVG size as requested */
                                    <div className="relative w-[60px] h-[60px]">
                                        <Image
                                            src="/images/auth/business-logo-placeholder.svg"
                                            alt="Default Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                )}
                                <input type="file" className="hidden" accept="image/*" onChange={handleBusinessLogoChange} />
                            </label>
                            {/* Plus Badge */}
                            <div className="absolute bottom-[-10px] right-[-10px] w-[28px] h-[28px] rounded-full bg-[#153481] flex items-center justify-center text-white shadow-md border-[3px] border-white">
                                <Plus size={14} strokeWidth={3} />
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSaveBusiness} className="space-y-4">
                        {/* Input 1 - Placeholder Match: "Enter your full name" */}
                        <div>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                value={businessName}
                                onChange={(e) => setBusinessName(e.target.value)}
                                className="w-full h-[52px] px-5 border border-[#E0E0E0] rounded-[12px] text-[14px] text-[#1F1F1F] placeholder:text-[#9E9E9E] focus:border-[#153481] focus:outline-none transition-all bg-white"
                            />
                        </div>

                        {/* Input 2 - Placeholder Match: "Enter your email address" */}
                        <div>
                            <input
                                type="text"
                                placeholder="Enter your email address"
                                value={businessAddress}
                                onChange={(e) => setBusinessAddress(e.target.value)}
                                className="w-full h-[52px] px-5 border border-[#E0E0E0] rounded-[12px] text-[14px] text-[#1F1F1F] placeholder:text-[#9E9E9E] focus:border-[#153481] focus:outline-none transition-all bg-white"
                            />
                        </div>

                        {/* Buttons Actions */}
                        <div className="flex items-center gap-4 pt-4">
                            <button
                                type="button"
                                onClick={() => router.push('/auctions')}
                                className="w-[40%] h-[54px] rounded-[10px] bg-[#F5FAFF] text-[#136BCF] font-medium text-[15px] hover:bg-[#EEF6FF] transition-all"
                            >
                                Skip
                            </button>
                            <button
                                type="submit"
                                disabled={isVerifying}
                                className="w-[60%] h-[54px] rounded-[10px] bg-[#153481] text-white font-medium text-[15px] hover:bg-[#0D245B] transition-all shadow-md shadow-[#153481]/20 flex items-center justify-center gap-2"
                            >
                                {isVerifying ? (
                                    <>
                                        <Loader2 className="animate-spin" size={18} />
                                        Saving...
                                    </>
                                ) : (
                                    "Save"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

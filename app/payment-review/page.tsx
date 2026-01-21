"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Home, LayoutDashboard } from "lucide-react";

import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PaymentReviewPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
            <Header />
            <main className="flex-1 flex items-center justify-center px-4 py-16 pb-32">
                <div className="w-full max-w-[600px] text-center">
                    {/* Illustration */}
                    <div className="flex justify-center mb-8">
                        <Image
                            src="/images/payment/review-clock.svg"
                            alt="Payment Under Review"
                            width={120}
                            height={120}
                            className="w-[120px] h-auto"
                        />
                    </div>

                    {/* Heading */}
                    <h1 className="text-[32px] font-bold text-[#1F1F1F] mb-3">
                        Payment Under Review
                    </h1>

                    {/* Subtitle */}
                    <p className="text-[18px] font-normal text-[#1F1F1F] mb-4">
                        We've received your booking request
                    </p>

                    {/* Description */}
                    <div className="text-[16px] text-[#757575] leading-relaxed mb-10 max-w-[500px] mx-auto space-y-1">
                        <p>Your booking will be confirmed once we verify your bank transfer.</p>
                        <p>This usually takes up to 24 hours.</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => router.push('/')}
                            className="w-full sm:w-auto min-w-[180px] h-[52px] px-8 bg-white border border-[#E0E0E0] hover:border-[#136BCF] text-[#136BCF] rounded-[10px] font-medium text-[15px] flex items-center justify-center gap-2 transition-colors"
                        >
                            <Home size={18} />
                            Go to Home
                        </button>
                        <button
                            onClick={() => router.push('/dashboard')}
                            className="w-full sm:w-auto min-w-[200px] h-[52px] px-8 bg-[#F5FAFF] border border-[#136BCF]/20 hover:bg-[#EBF5FF] text-[#136BCF] rounded-[10px] font-medium text-[15px] flex items-center justify-center gap-2 transition-colors"
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.7837 1.39844H2.21705C1.76672 1.39844 1.40039 1.76477 1.40039 2.2151V3.38176C1.40039 3.8321 1.76672 4.19843 2.21705 4.19843H11.7837C12.234 4.19843 12.6004 3.8321 12.6004 3.38176V2.2151C12.6004 1.76477 12.234 1.39844 11.7837 1.39844Z" fill="#136BCF" />
                                <path d="M2.21705 12.5995H5.71704C6.16737 12.5995 6.53371 12.2331 6.53371 11.7828V5.94948C6.53371 5.49914 6.16737 5.13281 5.71704 5.13281H2.21705C1.76672 5.13281 1.40039 5.49914 1.40039 5.94948V11.7828C1.40039 12.2331 1.76672 12.5995 2.21705 12.5995Z" fill="#136BCF" />
                                <path d="M11.7834 5.13281H8.28346C7.83313 5.13281 7.4668 5.49914 7.4668 5.94948V7.5828C7.4668 8.03314 7.83313 8.39947 8.28346 8.39947H11.7834C12.2338 8.39947 12.6001 8.03314 12.6001 7.5828V5.94948C12.6001 5.49914 12.2338 5.13281 11.7834 5.13281Z" fill="#136BCF" />
                                <path d="M11.7834 9.33203H8.28346C7.83313 9.33203 7.4668 9.69836 7.4668 10.1487V11.782C7.4668 12.2324 7.83313 12.5987 8.28346 12.5987H11.7834C12.2338 12.5987 12.6001 12.2324 12.6001 11.782V10.1487C12.6001 9.69836 12.2338 9.33203 11.7834 9.33203Z" fill="#136BCF" />
                            </svg>
                            Go to Your Dashboard
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

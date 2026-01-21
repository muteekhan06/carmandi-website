import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-[#F0F2F5]">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-[120px] font-bold text-[#153481] leading-none mb-4">404</h1>
                <h2 className="text-[24px] font-semibold text-[#1F1F1F] mb-6">Page Not Found</h2>
                <p className="text-[#757575] max-w-[400px] mb-8">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link
                    href="/"
                    className="h-[48px] px-8 rounded-full bg-[#EB722E] text-white font-medium text-[16px] flex items-center justify-center hover:bg-[#D9611D] transition-colors"
                >
                    Back to Home
                </Link>
            </main>
            <Footer />
        </div>
    );
}

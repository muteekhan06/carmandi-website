import Image from "next/image";
import AuthCloseButton from "@/components/auth/AuthCloseButton";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen flex overflow-hidden font-outfit">
            {/* Left Side - OC 5.svg Image - 50% width */}
            <div className="hidden lg:block relative h-screen w-[50%] overflow-hidden">
                {/* Placeholder gradient shown while image loads */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0]" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#153481]/5 via-transparent to-[#EB722E]/5" />

                <Image
                    src="/images/auth/auth-illustration.svg"
                    alt="CarMandi - Boli Lagao, Gari Ly Jao"
                    fill
                    className="object-cover animate-fade-in"
                    priority
                    loading="eager"
                    sizes="50vw"
                />
            </div>

            {/* Right Side - Content Wrapper - 50% width */}
            <div className="w-full lg:w-[50%] h-screen bg-white relative overflow-hidden">
                <AuthCloseButton />
                {children}
            </div>
        </div>
    );
}

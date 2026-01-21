import Link from "next/link";

export default function AuthFooterLinks() {
    return (
        <p className="text-center text-[10px] sm:text-[11px] text-[#9E9E9E] mt-3">
            By continuing, you agree to our{" "}
            <Link href="/terms-and-conditions" className="text-[#757575] underline hover:text-[#1F1F1F]">Terms</Link>
            {" "}and{" "}
            <Link href="/privacy-policy" className="text-[#757575] underline hover:text-[#1F1F1F]">Privacy Policy</Link>
        </p>
    );
}

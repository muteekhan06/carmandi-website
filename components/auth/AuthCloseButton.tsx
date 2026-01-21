"use client";

import { useRouter } from "next/navigation";

export default function AuthCloseButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 hover:opacity-80 transition-opacity z-20"
            aria-label="Close"
        >
            <svg width="32" height="32" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="40.5" y="40.5" width="40" height="40" rx="6" transform="rotate(-180 40.5 40.5)" fill="white" />
                <rect x="40.5" y="40.5" width="40" height="40" rx="6" transform="rotate(-180 40.5 40.5)" stroke="#EBEBEB" />
                <g clipPath="url(#clip0_close_btn_shared)">
                    <path d="M22.2357 19.8558C21.8843 20.2073 21.8843 20.7771 22.2358 21.1286L26.2719 25.1649C26.576 25.4689 26.576 25.9603 26.2719 26.2642C25.968 26.5682 25.4766 26.5682 25.1726 26.2642L21.1363 22.2279C20.7849 21.8765 20.215 21.8765 19.8635 22.2279L15.8274 26.2642C15.5233 26.5682 15.032 26.5682 14.7281 26.2642C14.424 25.9603 14.424 25.4689 14.7281 25.1649L18.7643 21.1286C19.1157 20.7771 19.1157 20.2073 18.7643 19.8558L14.7281 15.8195C14.424 15.5156 14.424 15.0241 14.7281 14.7202C14.8795 14.5686 15.0787 14.4924 15.2777 14.4924C15.4767 14.4924 15.6758 14.5686 15.8274 14.7202L19.8635 18.7565C20.215 19.108 20.7849 19.108 21.1363 18.7565L25.1726 14.7202C25.3243 14.5686 25.5233 14.4924 25.7223 14.4924C25.9213 14.4924 26.1203 14.5686 26.2719 14.7202C26.576 15.0241 26.576 15.5156 26.2719 15.8195L22.2357 19.8558Z" fill="#9D9D9D" stroke="#9D9D9D" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_close_btn_shared">
                        <rect width="12" height="12" fill="white" transform="matrix(1 0 0 -1 14.5 26.5)" />
                    </clipPath>
                </defs>
            </svg>
        </button>
    );
}

"use client";

import Image from "next/image";
import Link from "next/link";

interface ProfileBannerProps {
    user: {
        name: string;
        email: string;
        avatar: string;
        currentPlan: string;
    };
}

export const ProfileBanner = ({ user }: ProfileBannerProps) => {
    return (
        <div
            className="w-full h-[127px] rounded-[12px] flex items-center justify-between px-[38px] relative overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #2D4B96 0%, #131F3F 100%)"
            }}
        >
            {/* Left Section: Avatar & Info */}
            <div className="flex items-center gap-[24px] z-10">
                {/* Avatar matching height of plan card */}
                <div className="w-[71px] h-[71px]">
                    <Image
                        src={user.avatar}
                        alt={user.name}
                        width={71}
                        height={71}
                        className="rounded-[18px] object-cover border-[3px] border-white/20 shadow-xl"
                    />
                </div>

                {/* Text Info */}
                <div className="flex flex-col gap-1">
                    <h1 className="text-[28px] font-bold text-white leading-none tracking-tight">
                        {user.name}
                    </h1>
                    <p className="text-[14px] text-[#BDBDBD] font-normal">
                        {user.email}
                    </p>
                </div>
            </div>

            {/* Right Section: Plan Card */}
            <div className="z-10">
                <div
                    className="w-[290px] h-[71px] rounded-[12px] flex items-center justify-between px-5 relative"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        boxShadow: "0px 1px 3px rgba(160, 160, 160, 0.23)",
                        backdropFilter: "blur(4px)"
                    }}
                >
                    {/* Crown Icon */}
                    <div className="flex items-center gap-4">
                        <div className="w-[32px] h-[32px] flex items-center justify-center">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_i_2920_11675)">
                                    <path d="M0 12.4565C0 8.61454 3.11454 5.5 6.95652 5.5H25.0435C28.8855 5.5 32 8.61454 32 12.4565V30.5435C32 34.3855 28.8855 37.5 25.0435 37.5H6.95652C3.11454 37.5 0 34.3855 0 30.5435V12.4565Z" fill="black" fillOpacity="0.55" />
                                    <g clipPath="url(#clip0_2920_11675)">
                                        <path d="M15.7209 15.9307C15.7484 15.8807 15.7889 15.839 15.838 15.81C15.8871 15.7809 15.9431 15.7656 16.0002 15.7656C16.0573 15.7656 16.1133 15.7809 16.1624 15.81C16.2116 15.839 16.252 15.8807 16.2795 15.9307L18.162 19.5043C18.2068 19.587 18.2695 19.6588 18.3454 19.7144C18.4213 19.7701 18.5086 19.8083 18.6011 19.8262C18.6935 19.8441 18.7887 19.8414 18.8799 19.8181C18.9712 19.7949 19.0561 19.7517 19.1287 19.6917L21.856 17.3553C21.9084 17.3127 21.9729 17.2878 22.0403 17.2842C22.1077 17.2806 22.1745 17.2985 22.2311 17.3353C22.2876 17.3721 22.3311 17.4259 22.3551 17.489C22.3792 17.552 22.3826 17.6211 22.3649 17.6862L20.5577 24.2199C20.5208 24.3536 20.4414 24.4716 20.3313 24.5561C20.2213 24.6406 20.0868 24.6869 19.9481 24.688H12.053C11.9142 24.687 11.7795 24.6408 11.6693 24.5563C11.5592 24.4718 11.4796 24.3537 11.4427 24.2199L9.63616 17.6869C9.61846 17.6217 9.62189 17.5527 9.64594 17.4896C9.66999 17.4266 9.71343 17.3728 9.77001 17.336C9.82658 17.2992 9.89337 17.2813 9.96076 17.2849C10.0282 17.2884 10.0927 17.3133 10.145 17.3559L12.8717 19.6924C12.9443 19.7523 13.0293 19.7955 13.1205 19.8187C13.2117 19.842 13.3069 19.8448 13.3994 19.8268C13.4918 19.8089 13.5791 19.7707 13.655 19.7151C13.7309 19.6594 13.7936 19.5876 13.8385 19.5049L15.7209 15.9307Z" stroke="#EB722E" strokeWidth="1.27536" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.5352 27.2383H20.4627" stroke="#EB722E" strokeWidth="1.27536" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_i_2920_11675" x="0" y="5.5" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation="0.347826" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2920_11675" />
                                    </filter>
                                    <clipPath id="clip0_2920_11675">
                                        <rect width="15.3043" height="15.3043" fill="white" transform="translate(8.34766 13.8477)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-[13px] text-[#9CA3AF] font-medium leading-none mb-1">
                                Current Plan
                            </span>
                            <span className="text-[20px] font-bold text-white leading-none">
                                {user.currentPlan}
                            </span>
                        </div>
                    </div>

                    <Link
                        href="/upgrade"
                        className="text-[14px] font-medium text-white hover:text-[#EB722E] transition-colors absolute right-5 top-1/2 -translate-y-1/2"
                    >
                        Upgrade?
                    </Link>
                </div>
            </div>
        </div>
    );
};

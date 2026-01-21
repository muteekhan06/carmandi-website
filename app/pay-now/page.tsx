"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Edit2, Copy, Upload } from "lucide-react";
import { useState } from "react";

import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PayNowPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Default values if params are missing (for dev/preview)
    const brand = searchParams.get("brand") || "Honda";
    const model = searchParams.get("model") || "Civic";
    const variant = searchParams.get("variant") || "Type R 2025";
    const date = searchParams.get("date") || "Thu, 8 Feb";
    const time = searchParams.get("time") || "11:30 AM";
    const price = "3500"; // Fixed as per image request

    const [activeTab, setActiveTab] = useState("jazzcash");
    const [mobileNumber, setMobileNumber] = useState("");
    const [cnicNumber, setCnicNumber] = useState("");
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setUploadedFile(file);
        }
    };

    const handlePayNow = () => {
        if (activeTab === "bank") {
            router.push('/payment-review');
        } else {
            router.push('/payment-confirmed');
        }
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
            <Header />
            <main className="flex-1 pt-8 pb-32 px-4 flex justify-center">
                <div className="w-full max-w-[1100px]">
                    {/* Header */}
                    <div className="mb-6">
                        <button
                            onClick={handleBack}
                            className="text-[#136BCF] text-[14px] font-medium flex items-center gap-1 mb-2 hover:underline"
                        >
                            <ArrowLeft size={16} /> Back to Sell your Car
                        </button>
                        <h1 className="text-[32px] font-bold text-[#1F1F1F]">Pay Now</h1>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left Column: Payment Method */}
                        <div className="flex-1 bg-white rounded-[16px] border border-[#E0E0E0] p-8 h-fit">
                            <h2 className="text-[20px] font-bold text-[#1F1F1F] mb-6">Payment Method</h2>

                            {/* Tabs */}
                            <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                                <button
                                    onClick={() => setActiveTab("jazzcash")}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-[8px] border transition-all whitespace-nowrap ${activeTab === "jazzcash"
                                        ? "border-[#136BCF] bg-[#F5FAFF] text-[#136BCF]"
                                        : "border-[#F0F0F0] bg-white text-[#757575]"
                                        }`}
                                >
                                    <Image
                                        src="/images/payment/jazzcash.svg"
                                        alt="JazzCash"
                                        width={80}
                                        height={20}
                                        className="h-5 w-auto object-contain"
                                    />
                                    <span className={`font-normal text-[14px] ${activeTab === 'jazzcash' ? 'text-[#136BCF]' : 'text-[#757575]'}`}>Jazzcash Wallet</span>
                                </button>

                                <button
                                    onClick={() => setActiveTab("card")}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-[8px] border transition-all whitespace-nowrap ${activeTab === "card"
                                        ? "border-[#136BCF] bg-[#F5FAFF] text-[#136BCF]"
                                        : "border-[#F0F0F0] bg-white text-[#757575]"
                                        }`}
                                >
                                    <Image
                                        src="/images/payment/credit-card.svg"
                                        alt="Card"
                                        width={24}
                                        height={24}
                                        className="h-5 w-auto object-contain"
                                    />
                                    <span className="font-normal text-[14px]">Credit / Debit Card</span>
                                </button>

                                <button
                                    onClick={() => setActiveTab("bank")}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-[8px] border transition-all whitespace-nowrap ${activeTab === "bank"
                                        ? "border-[#136BCF] bg-[#F5FAFF] text-[#136BCF]"
                                        : "border-[#F0F0F0] bg-white text-[#757575]"
                                        }`}
                                >
                                    <Image
                                        src="/images/payment/bank-transfer.svg"
                                        alt="Bank"
                                        width={24}
                                        height={24}
                                        className="h-5 w-auto object-contain"
                                    />
                                    <span className="font-normal text-[14px]">Bank Transfer (Manual)</span>
                                </button>
                            </div>

                            {/* Inputs */}
                            <div className="space-y-6 mb-8">
                                {activeTab === "jazzcash" && (
                                    <>
                                        {/* New Jazzcash Design: Dashed Border Container for Mobile Account */}
                                        <div className="border border-dashed border-[#136BCF]/35 rounded-[8px] p-6 mb-6">
                                            <div className="mb-1">
                                                <label className="block text-[14px] font-normal text-[#383838] mb-2">
                                                    Jazzcash Mobile Number
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        placeholder="0300 1234567"
                                                        value={mobileNumber}
                                                        onChange={(e) => setMobileNumber(e.target.value)}
                                                        className="w-full h-[48px] pl-4 pr-12 bg-[#F5FAFF] border border-transparent rounded-[8px] text-[16px] text-[#1F1F1F] placeholder:text-[#BDBDBD] focus:outline-none focus:border-[#136BCF] shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)]"
                                                    />
                                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                                        <Image
                                                            src="/images/payment/jazzcash.svg"
                                                            alt="JazzCash"
                                                            width={60}
                                                            height={16}
                                                            className="h-4 w-auto opacity-80"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CNIC Input (Kept for functionality, styled simply below) */}
                                        <div>
                                            <label className="block text-[14px] font-normal text-[#383838] mb-2">
                                                Cnic Number
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter last 6 Digits only"
                                                value={cnicNumber}
                                                onChange={(e) => setCnicNumber(e.target.value)}
                                                className="w-full h-[52px] px-4 border border-[#F0F0F0] rounded-[8px] text-[16px] placeholder:text-[#BDBDBD] focus:outline-none focus:border-[#136BCF]"
                                            />
                                        </div>
                                    </>
                                )}

                                {activeTab === "card" && (
                                    <>
                                        <div>
                                            <label className="block text-[14px] font-normal text-[#383838] mb-2">
                                                Card Number
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="Enter your card Number"
                                                    className="w-full h-[52px] px-4 border border-[#F0F0F0] rounded-[8px] text-[16px] placeholder:text-[#BDBDBD] focus:outline-none focus:border-[#136BCF] pr-24"
                                                />
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-90">
                                                    {/* Payment Icons from Footer */}
                                                    <svg width="87" height="16" viewBox="0 0 87 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 2.28571C0 1.02335 1.02335 0 2.28571 0H84.7009C85.9633 0 86.9866 1.02335 86.9866 2.28571V13.7143C86.9866 14.9767 85.9633 16 84.7009 16H2.28572C1.02335 16 0 14.9767 0 13.7143V2.28571Z" fill="white" fillOpacity="0.1" />
                                                        <g clipPath="url(#clip0_pay_icons)">
                                                            <path d="M20.9993 12.4198H18.3374L20.0011 3.58751H22.6632L20.9993 12.4198ZM16.0981 3.58751L13.5604 9.66246L13.2601 8.35427L13.2604 8.35474L12.3647 4.38276C12.3647 4.38276 12.2564 3.58751 11.102 3.58751H6.90665L6.85742 3.73706C6.85742 3.73706 8.14036 3.96765 9.64182 4.7466L11.9545 12.4201H14.7279L18.9629 3.58751H16.0981ZM37.0351 12.4198H39.4793L37.3482 3.58727H35.2084C34.2203 3.58727 33.9797 4.24549 33.9797 4.24549L30.0097 12.4198H32.7845L33.3394 11.1079H36.7233L37.0351 12.4198ZM34.106 9.29553L35.5046 5.99027L36.2915 9.29553H34.106ZM30.2178 5.71148L30.5977 3.81479C30.5977 3.81479 29.4255 3.42969 28.2035 3.42969C26.8826 3.42969 23.7457 3.92843 23.7457 6.35364C23.7457 8.63543 27.4274 8.66377 27.4274 9.86234C27.4274 11.0609 24.125 10.8461 23.0352 10.0903L22.6394 12.0735C22.6394 12.0735 23.828 12.5722 25.644 12.5722C27.4605 12.5722 30.2008 11.7597 30.2008 9.54835C30.2008 7.2519 26.4861 7.03808 26.4861 6.03965C26.4863 5.04098 29.0787 5.16927 30.2178 5.71148Z" fill="#2566AF" />
                                                        </g>
                                                        <g clipPath="url(#clip1_pay_icons)">
                                                            <path d="M52.0807 11.3865C52.9051 12.124 54.0122 12.5714 55.2163 12.5714C57.8024 12.5714 59.8955 10.5234 59.8955 8.00442C59.8955 5.47781 57.8024 3.42969 55.2163 3.42969C54.0122 3.42969 52.9051 3.87696 52.0807 4.61458C51.1352 5.45417 50.5371 6.66261 50.5371 8.00442C50.5372 9.34623 51.1352 10.5547 52.0807 11.3865Z" fill="#E9B040" />
                                                            <path d="M59.2764 10.5436C59.2764 10.4651 59.3411 10.4023 59.4218 10.4023C59.5107 10.4023 59.5752 10.4652 59.5752 10.5436C59.5752 10.63 59.5106 10.6927 59.4218 10.6927C59.3411 10.6927 59.2764 10.63 59.2764 10.5436ZM59.4218 10.6614C59.4865 10.6614 59.5429 10.6063 59.5429 10.5437C59.5429 10.481 59.4864 10.4339 59.4218 10.4339C59.3651 10.4339 59.3087 10.481 59.3087 10.5437C59.3087 10.6063 59.3652 10.6614 59.4218 10.6614ZM59.4057 10.6143H59.3733V10.4808H59.4298C59.438 10.4808 59.4542 10.4808 59.4621 10.4888C59.4783 10.4965 59.4783 10.5045 59.4783 10.5202C59.4783 10.5359 59.4703 10.5516 59.4542 10.5516L59.4865 10.6144H59.446L59.4298 10.5594H59.4057V10.6143V10.5358H59.438C59.446 10.5358 59.446 10.5278 59.446 10.5201C59.446 10.5122 59.446 10.5122 59.438 10.5044H59.4057V10.6143Z" fill="#E9B040" />
                                                            <path d="M53.5939 7.51799C53.5778 7.35324 53.5454 7.19633 53.5131 7.03148H50.6522C50.6845 6.86672 50.733 6.70981 50.7815 6.55281H53.3757C53.3194 6.38762 53.2547 6.22524 53.1818 6.06629H50.9836C51.0644 5.90007 51.1534 5.73772 51.2503 5.57977H52.9071C52.8005 5.41219 52.6817 5.25222 52.5516 5.1011H51.6059C51.7522 4.92766 51.9116 4.76503 52.0827 4.61458C51.2504 3.88481 50.1512 3.42969 48.939 3.42969C46.361 3.42969 44.2598 5.47781 44.2598 8.00442C44.2598 10.5234 46.361 12.5714 48.939 12.5714C50.1512 12.5714 51.2503 12.124 52.0827 11.3865C52.2513 11.2387 52.408 11.0786 52.5516 10.9078H51.6059C51.4766 10.7508 51.3635 10.5939 51.2503 10.4212H52.9071C53.0113 10.266 53.1031 10.1034 53.1819 9.93471H50.9836C50.9108 9.77777 50.8382 9.62088 50.7815 9.45594H53.3757C53.4322 9.29904 53.4728 9.13436 53.513 8.96941C53.5453 8.81252 53.5777 8.64784 53.5938 8.48289C53.6102 8.32382 53.6183 8.16401 53.6182 8.00416C53.6182 7.83965 53.6101 7.6749 53.5939 7.51799Z" fill="#CC2131" />
                                                        </g>
                                                        <g clipPath="url(#clip2_pay_icons)">
                                                            <path d="M65.4717 12.4354H65.425C65.425 12.4128 65.4133 12.3788 65.4133 12.3674C65.4133 12.3561 65.4133 12.3335 65.3782 12.3335H65.3081V12.4354H65.273V12.1975H65.3782C65.425 12.1975 65.46 12.2089 65.46 12.2541C65.46 12.2881 65.4483 12.2995 65.4367 12.3107C65.4484 12.3221 65.46 12.3335 65.46 12.3561V12.4014C65.46 12.4128 65.46 12.4128 65.4717 12.4128V12.4354ZM65.425 12.2655C65.425 12.2315 65.4016 12.2315 65.3899 12.2315H65.3081V12.2995H65.3782C65.4016 12.2995 65.425 12.2881 65.425 12.2655ZM65.6237 12.3108C65.6237 12.1749 65.5069 12.0615 65.3548 12.0615C65.2146 12.0615 65.0977 12.1749 65.0977 12.3108C65.0977 12.458 65.2146 12.5715 65.3548 12.5715C65.5068 12.5714 65.6237 12.458 65.6237 12.3108ZM65.5886 12.3108C65.5886 12.4355 65.4835 12.526 65.3548 12.526C65.2262 12.526 65.1327 12.4354 65.1327 12.3108C65.1327 12.1975 65.2263 12.0955 65.3548 12.0955C65.4834 12.0955 65.5886 12.1975 65.5886 12.3108ZM79.9908 9.72829C79.9908 10.0682 79.7687 10.2267 79.3712 10.2267H78.6115V9.88671H79.3712C79.4413 9.88671 79.4998 9.87548 79.5233 9.85288C79.5466 9.83012 79.5699 9.79612 79.5699 9.75089C79.5699 9.70548 79.5466 9.66021 79.5233 9.63761C79.4998 9.61489 79.4531 9.60361 79.3829 9.60361C79.0207 9.59221 78.5647 9.61489 78.5647 9.11643C78.5647 8.88975 78.7166 8.64048 79.1257 8.64048H79.9089V8.98043H79.1841C79.1141 8.98043 79.0673 8.98043 79.0322 9.00303C78.9971 9.03703 78.9738 9.07103 78.9738 9.12771C78.9738 9.18434 79.0089 9.21834 79.0556 9.24111C79.1024 9.25234 79.1492 9.26371 79.2077 9.26371H79.418C79.6401 9.26371 79.7805 9.30894 79.874 9.38834C79.944 9.46762 79.9908 9.5697 79.9908 9.72829ZM78.3425 9.38834C78.2489 9.30894 78.1086 9.26371 77.8865 9.26371H77.6762C77.6178 9.26371 77.5709 9.25226 77.5242 9.24111C77.4773 9.21834 77.4424 9.18434 77.4424 9.12771C77.4424 9.07103 77.4541 9.03703 77.5009 9.00303C77.5359 8.98043 77.5826 8.98043 77.6528 8.98043H78.3776V8.64048H77.5944C77.1735 8.64048 77.0331 8.88975 77.0331 9.11643C77.0331 9.6148 77.4891 9.59221 77.8516 9.60361C77.9216 9.60361 77.9684 9.61489 77.9917 9.63761C78.015 9.66021 78.0386 9.70548 78.0386 9.75089C78.0386 9.79612 78.0151 9.83012 77.9917 9.85288C77.9566 9.87548 77.91 9.88671 77.8398 9.88671H77.0799V10.2267H77.8398C78.2371 10.2267 78.4593 10.0682 78.4593 9.72829C78.4593 9.5697 78.4127 9.46762 78.3425 9.38834ZM76.8461 9.8982H75.9228V9.58093H76.8228V9.26384H75.9228V8.96916H76.8461V8.64066H75.5369V10.2267H76.8461V9.8982ZM75.1161 8.72002C74.9874 8.65202 74.8354 8.64057 74.6368 8.64057H73.7367V10.2267H74.134V9.64889H74.555C74.6951 9.64889 74.7771 9.66029 74.8355 9.71689C74.9057 9.79612 74.9057 9.93211 74.9057 10.0342V10.2267H75.2914V9.92071C75.2914 9.77348 75.2797 9.70548 75.233 9.62621C75.1979 9.5808 75.1279 9.52421 75.0343 9.49021C75.1394 9.45638 75.3149 9.32034 75.3149 9.07103C75.3148 8.88984 75.2447 8.78784 75.1161 8.72002ZM72.8949 8.64057H71.6441L71.1414 9.16175L70.6621 8.64057H69.084V10.2267H70.6388L71.1415 9.70544L71.6208 10.2267H72.3807V9.69429H72.8717C73.2106 9.69429 73.5498 9.60361 73.5498 9.16175C73.5497 8.73125 73.1989 8.64057 72.8949 8.64057ZM74.8004 9.29779C74.742 9.32034 74.6835 9.32034 74.6133 9.32034L74.134 9.33179V8.96912H74.6133C74.6835 8.96912 74.7537 8.96912 74.8004 9.00312C74.8472 9.02584 74.8822 9.07111 74.8822 9.13911C74.8822 9.20711 74.8472 9.26379 74.8004 9.29779ZM72.8949 9.37702H72.3806V8.96912H72.8949C73.0353 8.96912 73.1288 9.02584 73.1288 9.16175C73.1288 9.29779 73.0352 9.37702 72.8949 9.37702ZM71.3869 9.43362L71.9948 8.81061V10.0908L71.3869 9.43362ZM70.44 9.8982H69.4697V9.58093H70.3348V9.26384H69.4697V8.96916H70.4517L70.8842 9.4337L70.44 9.8982ZM78.9035 7.4963H78.3425L77.606 6.30667V7.4963H76.8112L76.6591 7.14503H75.8408L75.6889 7.4963H75.2329C75.0459 7.4963 74.8004 7.45096 74.6602 7.31495C74.5316 7.17903 74.4614 6.99778 74.4614 6.71452C74.4614 6.47659 74.4965 6.26133 74.6718 6.09141C74.7886 5.96674 74.9991 5.91015 75.2679 5.91015H75.6419V6.25008H75.2679C75.1277 6.25008 75.0458 6.27275 74.964 6.34075C74.8939 6.40875 74.8588 6.53334 74.8588 6.70326C74.8588 6.87319 74.8939 6.99786 74.964 7.07719C75.0224 7.13378 75.1277 7.15645 75.2328 7.15645H75.4082L75.9693 5.91024H76.5538L77.2085 7.40571V5.91015H77.8164L78.5061 7.00911V5.91015H78.9035L78.9035 7.4963ZM74.2627 5.91015H73.8653V7.4963H74.2627V5.91015ZM73.4327 5.97815C73.304 5.91015 73.1639 5.91015 72.9651 5.91015H72.0649V7.4963H72.4506V6.91844H72.8715C73.0118 6.91844 73.1054 6.92978 73.1638 6.98644C73.2339 7.06578 73.2221 7.20178 73.2221 7.29237V7.4963H73.6195V7.17903C73.6195 7.04311 73.6079 6.97511 73.5495 6.89577C73.5144 6.85044 73.4443 6.79377 73.3625 6.75985C73.4676 6.71452 73.6431 6.58993 73.6431 6.34067C73.6432 6.15941 73.5612 6.05741 73.4327 5.97815ZM71.7843 7.16778H70.8725V6.85052H71.7727V6.52201H70.8725V6.23875H71.7843V5.91024H70.4751V7.49637H71.7843V7.16778ZM70.1828 5.91015H69.5399L69.0606 6.98644L68.5462 5.91015H67.915V7.40562L67.2486 5.91015H66.6642L65.9628 7.4963H66.3836L66.5355 7.14503H67.3538L67.5058 7.4963H68.3007V6.25008L68.8735 7.4963H69.2124L69.7853 6.25008V7.4963H70.1827L70.1828 5.91015ZM76.5189 6.80518L76.25 6.18208L75.9811 6.80518H76.5189ZM73.1288 6.55601C73.0704 6.59001 73.0119 6.59001 72.93 6.59001H72.4506V6.23883H72.9299C73.0001 6.23883 73.0818 6.23883 73.1287 6.2615C73.1754 6.2955 73.1989 6.34083 73.1989 6.40875C73.1989 6.47667 73.1755 6.53326 73.1288 6.55601ZM66.6758 6.80518L66.9447 6.18208L67.2136 6.80518H66.6758ZM79.874 3.42969H65.9277L65.951 6.6466L66.4303 5.59298H67.4473L67.5876 5.85357V5.59298H68.78L69.0489 6.15941L69.3061 5.59298H73.1054C73.2806 5.59298 73.4326 5.62697 73.5496 5.71756V5.59298H74.59V5.71756C74.7652 5.62689 74.9873 5.59298 75.2446 5.59298H76.7526L76.8929 5.85357V5.59298H78.0034L78.1672 5.85357V5.59298H79.2542V7.81357H78.1555L77.9452 7.47371V7.81357H76.5773L76.4254 7.45104H76.0862L75.9343 7.81357H75.2213C74.9407 7.81357 74.7302 7.74555 74.59 7.67763V7.81357H72.8949V7.3037C72.8949 7.2357 72.8833 7.22437 72.8365 7.22437H72.7781V7.81348H69.5048V7.53021L69.388 7.81348H68.6982L68.5814 7.54155V7.81348H67.2603L67.1201 7.45096H66.781L66.6291 7.81348H65.951V12.239H79.8973V10.4419C79.7454 10.5099 79.5349 10.5439 79.3245 10.5439H78.3074V10.4079C78.1905 10.4987 77.9801 10.5439 77.7814 10.5439H74.5783V10.0342C74.5783 9.96611 74.5667 9.96611 74.5081 9.96611H74.4497V10.5439H73.3976V9.94348C73.2223 10.0227 73.0235 10.0227 72.8482 10.0227H72.7313V10.5439H71.4454L71.1415 10.204L70.8025 10.5439H68.7332V8.32339H70.8374L71.1414 8.66316L71.4688 8.32339H72.8833C73.0468 8.32339 73.3158 8.34598 73.4327 8.45926V8.32339H74.6951C74.8238 8.32339 75.0693 8.34598 75.2329 8.45926V8.32339H77.1384V8.45934C77.2437 8.36866 77.4424 8.32347 77.6177 8.32347H78.6814V8.45934C78.7985 8.38007 78.962 8.32347 79.1725 8.32347H79.8973L79.874 3.42969Z" fill="#0077A6" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_pay_icons">
                                                                <rect width="32.7857" height="9.14286" fill="white" transform="translate(6.85742 3.42969)" />
                                                            </clipPath>
                                                            <clipPath id="clip1_pay_icons">
                                                                <rect width="16.1071" height="9.14286" fill="white" transform="translate(44.2139 3.42969)" />
                                                            </clipPath>
                                                            <clipPath id="clip2_pay_icons">
                                                                <rect width="15.2366" height="9.14286" fill="white" transform="translate(64.8926 3.42969)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-[14px] font-normal text-[#383838] mb-2">
                                                Card Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your card Name"
                                                className="w-full h-[52px] px-4 border border-[#F0F0F0] rounded-[8px] text-[16px] placeholder:text-[#BDBDBD] focus:outline-none focus:border-[#136BCF]"
                                            />
                                        </div>
                                        <div className="flex gap-6">
                                            <div className="flex-1">
                                                <label className="block text-[14px] font-normal text-[#383838] mb-2">
                                                    Expiration Date
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="MM/YY"
                                                    className="w-full h-[52px] px-4 border border-[#F0F0F0] rounded-[8px] text-[16px] placeholder:text-[#BDBDBD] focus:outline-none focus:border-[#136BCF]"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <label className="block text-[14px] font-normal text-[#383838] mb-2">
                                                    CVV
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="...."
                                                    className="w-full h-[52px] px-4 border border-[#F0F0F0] rounded-[8px] text-[16px] placeholder:text-[#BDBDBD] focus:outline-none focus:border-[#136BCF]"
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}

                                {activeTab === "bank" && (
                                    <>
                                        <h3 className="text-[16px] font-normal text-[#1F1F1F] mb-4">Bank Account Details</h3>
                                        <div className="bg-[#F9FAFB] rounded-[12px] p-6 mb-8">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
                                                {/* Row 1 */}
                                                <div>
                                                    <p className="text-[12px] text-[#757575] font-normal mb-1">Bank Name</p>
                                                    <p className="text-[16px] text-[#1F1F1F] font-semibold">Carmandi Bank Ltd.</p>
                                                </div>
                                                <div>
                                                    <p className="text-[12px] text-[#757575] font-normal mb-1">Account Name</p>
                                                    <div className="flex items-center gap-2">
                                                        <p className="text-[16px] text-[#1F1F1F] font-semibold">12483940924242</p>
                                                        <button
                                                            onClick={() => {
                                                                navigator.clipboard.writeText("12483940924242");
                                                                // You could add a toast notification here
                                                            }}
                                                            className="flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
                                                        >
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.4" d="M4.86722 9.74997C3.69571 9.74997 2.74219 8.79645 2.74219 7.62494V2.5H1.86722C1.1087 2.5 0.492188 3.11642 0.492188 3.87494V10.6249C0.492188 11.3835 1.1087 12 1.86722 12H8.11716C8.87567 12 9.49219 11.3835 9.49219 10.6249V9.74997H4.86722Z" fill="#136BCF" />
                                                                <path d="M11.4922 1.37503C11.4922 0.615509 10.8766 0 10.1172 0H4.86722C4.1077 0 3.49219 0.615509 3.49219 1.37503V7.62497C3.49219 8.38449 4.1077 9 4.86722 9H10.1172C10.8766 9 11.4922 8.38449 11.4922 7.62497V1.37503Z" fill="#136BCF" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Row 2 */}
                                                <div>
                                                    <p className="text-[12px] text-[#757575] font-normal mb-1">Account Title</p>
                                                    <p className="text-[16px] text-[#1F1F1F] font-semibold">Carmandi Pvt Ltd.</p>
                                                </div>
                                                <div>
                                                    <p className="text-[12px] text-[#757575] font-normal mb-1">IBAN</p>
                                                    <div className="flex items-center gap-2">
                                                        <p className="text-[16px] text-[#1F1F1F] font-semibold">PK12CARM1234567890001</p>
                                                        <button
                                                            onClick={() => {
                                                                navigator.clipboard.writeText("PK12CARM1234567890001");
                                                                // You could add a toast notification here
                                                            }}
                                                            className="flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
                                                        >
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.4" d="M4.86722 9.74997C3.69571 9.74997 2.74219 8.79645 2.74219 7.62494V2.5H1.86722C1.1087 2.5 0.492188 3.11642 0.492188 3.87494V10.6249C0.492188 11.3835 1.1087 12 1.86722 12H8.11716C8.87567 12 9.49219 11.3835 9.49219 10.6249V9.74997H4.86722Z" fill="#136BCF" />
                                                                <path d="M11.4922 1.37503C11.4922 0.615509 10.8766 0 10.1172 0H4.86722C4.1077 0 3.49219 0.615509 3.49219 1.37503V7.62497C3.49219 8.38449 4.1077 9 4.86722 9H10.1172C10.8766 9 11.4922 8.38449 11.4922 7.62497V1.37503Z" fill="#136BCF" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <div className="border border-dashed border-[#8EBFF0] rounded-[12px] p-6 mb-2">
                                                <h3 className="text-[16px] font-normal text-[#383838] mb-4">Upload Proof of Bank Transfer</h3>
                                                <input
                                                    type="file"
                                                    id="receipt-upload"
                                                    accept="image/*,.pdf"
                                                    onChange={handleFileUpload}
                                                    className="hidden"
                                                />
                                                <label
                                                    htmlFor="receipt-upload"
                                                    className="w-full h-[52px] bg-[#F5FAFF] hover:bg-[#EBF5FF] text-[#136BCF] rounded-[10px] font-medium text-[14px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                                                >
                                                    <Upload size={20} />
                                                    {uploadedFile ? uploadedFile.name : "Upload Receipt"}
                                                </label>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Footer Note */}
                            <div className="flex items-start gap-2 text-[#757575] text-[13px] bg-[#F9FAFB] p-4 rounded-[8px]">
                                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                <p className="whitespace-normal leading-relaxed">
                                    {activeTab === "bank"
                                        ? "Please transfer the amount using the details above and share your proof of payment to confirm."
                                        : "You'll be redirected to a secure page to complete your payment. On success you'll return to your orders."
                                    }
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Summary */}
                        <div className="w-full lg:w-[400px]">
                            {/* Sticky positioning works because this is a flex item. 'top-6' sets the distance from top when stuck. */}
                            <div className="bg-[#F2F9FF] rounded-[16px] border border-[#DCEEFE] p-6 h-fit sticky top-6">
                                <h2 className="text-[18px] font-medium text-[#1F1F1F] mb-6">Summary</h2>

                                {/* Car Info */}
                                <div className="flex justify-between mb-6 relative">
                                    <div className="flex-1 pr-2">
                                        <h3 className="text-[16px] font-bold text-[#1F1F1F] mb-0.5 leading-tight">
                                            {brand} {model} {variant}
                                        </h3>
                                        <p className="text-[14px] text-[#757575] mb-2 font-normal">
                                            {date} <span className="mx-1 text-[#DCEEFE]">|</span> {time}
                                        </p>
                                        <button
                                            onClick={() => router.push('/sell-your-car')}
                                            className="text-[13px] text-[#136BCF] flex items-center gap-1 font-medium hover:underline"
                                        >
                                            <Edit2 size={12} /> Change Car
                                        </button>
                                    </div>
                                    {/* Car Image - Sized to match visual prominence */}
                                    <div className="w-[180px] h-[100px] relative flex-shrink-0 -mr-4">
                                        <Image
                                            src="/images/cars/car-model.svg"
                                            alt="Car"
                                            layout="fill"
                                            objectFit="contain"
                                            className="object-right"
                                        />
                                    </div>
                                </div>

                                <hr className="border-[#DCEEFE] mb-6" />

                                <div className="flex justify-between items-end mb-8">
                                    <div>
                                        <p className="text-[14px] font-normal text-[#1F1F1F]">Pay for Car</p>
                                        <p className="text-[14px] font-normal text-[#1F1F1F]">Inspection Charges</p>
                                    </div>
                                    <p className="text-[28px] font-semibold text-[#1F1F1F] leading-none">
                                        Pkr {price}
                                    </p>
                                </div>

                                <button
                                    onClick={handlePayNow}
                                    className="w-full h-[52px] bg-[#102B6D] hover:bg-[#0D245B] text-white rounded-[10px] font-semibold text-[16px] transition-colors shadow-md"
                                >
                                    Pay Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

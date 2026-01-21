"use client";

import React, { useState } from "react";
import Image from "next/image";

interface AuctionGalleryProps {
    images: string[];
}

export const AuctionGallery: React.FC<AuctionGalleryProps> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextImage = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // We'll show up to 8 thumbnails. If there are more, the 8th one shows "+N"
    const MAX_THUMBNAILS = 8;
    const moreCount = images.length > MAX_THUMBNAILS ? images.length - MAX_THUMBNAILS + 1 : 0;
    const visibleThumbnails = images.slice(0, MAX_THUMBNAILS);

    return (
        <div className="w-full">
            {/* Main Image */}
            <div className="relative w-full aspect-[711/384] bg-gray-100 rounded-lg overflow-hidden mb-3 group">
                <Image
                    src={images[activeIndex]}
                    alt={`Auction image ${activeIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                />

                {/* Left Arrow */}
                <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 hover:opacity-100 transition-opacity"
                    aria-label="Previous image"
                >
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="36" height="36" rx="6" fill="black" fillOpacity="0.64" />
                        <path d="M13.1115 16.765C12.3299 17.405 12.3299 18.6 13.1115 19.24L20.3512 25.17C20.9408 25.653 21.7892 25.653 22.3788 25.17L22.8693 24.768C23.6509 24.128 23.6509 22.932 22.8693 22.292L19.1495 19.246C18.3679 18.606 18.3679 17.41 19.1495 16.77L22.8887 13.708C23.6703 13.068 23.6703 11.872 22.8887 11.232L22.3982 10.83C21.8086 10.347 20.9602 10.347 20.3706 10.83L14.6258 15.535C14.6239 15.537 14.6211 15.537 14.6191 15.535C14.6172 15.534 14.6144 15.534 14.6124 15.535L13.1115 16.765Z" fill="white" />
                    </svg>
                </button>

                {/* Right Arrow */}
                <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 hover:opacity-100 transition-opacity"
                    aria-label="Next image"
                >
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g transform="rotate(-180 18 18)">
                            <rect width="36" height="36" rx="6" fill="black" fillOpacity="0.64" />
                            <path d="M13.1115 16.765C12.3299 17.405 12.3299 18.6 13.1115 19.24L20.3512 25.17C20.9408 25.653 21.7892 25.653 22.3788 25.17L22.8693 24.768C23.6509 24.128 23.6509 22.932 22.8693 22.292L19.1495 19.246C18.3679 18.606 18.3679 17.41 19.1495 16.77L22.8887 13.708C23.6703 13.068 23.6703 11.872 22.8887 11.232L22.3982 10.83C21.8086 10.347 20.9602 10.347 20.3706 10.83L14.6258 15.535C14.6239 15.537 14.6211 15.537 14.6191 15.535C14.6172 15.534 14.6144 15.534 14.6124 15.535L13.1115 16.765Z" fill="white" />
                        </g>
                    </svg>
                </button>

                {/* Counter Pill */}
                <div className="absolute bottom-4 left-4 h-[27px] px-3 bg-black/35 backdrop-blur-sm rounded-md flex items-center gap-2 text-white overflow-hidden">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.99951 9.25C8.03505 9.25 8.87451 8.41053 8.87451 7.375C8.87451 6.33947 8.03505 5.5 6.99951 5.5C5.96398 5.5 5.12451 6.33947 5.12451 7.375C5.12451 8.41053 5.96398 9.25 6.99951 9.25Z" fill="white" />
                        <path d="M11.1245 4.00001H10.088C10.0183 4.00023 9.94999 3.98092 9.89073 3.94426C9.83147 3.90761 9.78367 3.85508 9.75276 3.79263L9.41714 3.12176C9.32428 2.93446 9.1808 2.77693 9.00297 2.66704C8.82513 2.55714 8.62006 2.49928 8.41101 2.50001H5.58801C5.37896 2.49928 5.17389 2.55714 4.99606 2.66704C4.81822 2.77693 4.67474 2.93446 4.58189 3.12176L4.24439 3.79263C4.21361 3.85479 4.16611 3.90713 4.10721 3.94377C4.04832 3.9804 3.98037 3.99988 3.91101 4.00001H2.87451C2.57614 4.00001 2.29 4.11853 2.07902 4.32951C1.86804 4.54049 1.74951 4.82664 1.74951 5.12501V10.375C1.74951 10.6734 1.86804 10.9595 2.07902 11.1705C2.29 11.3815 2.57614 11.5 2.87451 11.5H11.1245C11.4229 11.5 11.709 11.3815 11.92 11.1705C12.131 10.9595 12.2495 10.6734 12.2495 10.375V5.12501C12.2495 4.82664 12.131 4.54049 11.92 4.32951C11.709 4.11853 11.4229 4.00001 11.1245 4.00001ZM6.99951 10C6.48034 10 5.97282 9.84605 5.54114 9.55762C5.10946 9.26918 4.77301 8.85921 4.57433 8.37955C4.37565 7.8999 4.32366 7.3721 4.42495 6.8629C4.52624 6.35369 4.77624 5.88596 5.14336 5.51885C5.51047 5.15174 5.9782 4.90173 6.4874 4.80045C6.9966 4.69916 7.5244 4.75114 8.00406 4.94982C8.48371 5.1485 8.89368 5.48496 9.18212 5.91664C9.47056 6.34831 9.62451 6.85583 9.62451 7.37501C9.62372 8.07096 9.3469 8.73817 8.85479 9.23029C8.36268 9.7224 7.69546 9.99921 6.99951 10ZM10.7495 5.87501C10.6753 5.87501 10.6028 5.85301 10.5412 5.81181C10.4795 5.7706 10.4314 5.71204 10.4031 5.64351C10.3747 5.57499 10.3672 5.49959 10.3817 5.42685C10.3962 5.35411 10.4319 5.28729 10.4843 5.23484C10.5368 5.1824 10.6036 5.14668 10.6764 5.13221C10.7491 5.11774 10.8245 5.12517 10.893 5.15355C10.9615 5.18194 11.0201 5.23 11.0613 5.29167C11.1025 5.35334 11.1245 5.42584 11.1245 5.50001C11.1245 5.59946 11.085 5.69485 11.0147 5.76517C10.9444 5.8355 10.849 5.87501 10.7495 5.87501Z" fill="white" />
                    </svg>
                    <span className="text-[12px] font-medium tracking-wide">
                        {activeIndex + 1} / {images.length}
                    </span>
                </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-8 gap-2">
                {visibleThumbnails.map((img, idx) => {
                    const isLast = idx === MAX_THUMBNAILS - 1;
                    const showOverlay = isLast && moreCount > 1;

                    return (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`relative aspect-square rounded-md overflow-hidden transition-all ${activeIndex === idx
                                ? "border-2 border-[#EB722E]"
                                : "border border-transparent"
                                }`}
                        >
                            <Image
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                fill
                                className="object-cover"
                            />
                            {showOverlay && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                    <span className="text-white text-lg font-bold">+{moreCount - 1}</span>
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

import React from "react";
import Image from "next/image";

export const FooterLogo = () => {
    return (
        <div className="relative w-full h-auto aspect-[247/80]">
            <Image
                src="/images/ui/footer-logo.svg"
                alt="CarMandi Footer Logo"
                fill
                className="object-contain"
                priority
            />
        </div>
    );
};

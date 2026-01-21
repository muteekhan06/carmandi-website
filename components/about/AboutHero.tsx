"use client";

import React from "react";
import Image from "next/image";

import { layout } from "@/constants/theme";

export const AboutHero: React.FC = () => {
    return (
        <section
            className="mx-auto w-full px-6 bg-transparent"
            style={{ maxWidth: layout.container["2xl"] }}
        >
            {/* Main Container - Frame 2147224634 */}
            <div
                className="flex flex-col lg:flex-row justify-between items-center"
                style={{
                    width: "100%",
                    marginTop: "54px",
                    marginBottom: "50px",
                    gap: "20px",
                }}
            >
                {/* Text Content - Frame 2147224633 */}
                <div
                    className="flex flex-col items-start flex-none order-0 flex-grow-0"
                    style={{
                        width: "100%",
                        maxWidth: "760px",
                        gap: "24px",
                    }}
                >
                    <h1
                        style={{
                            fontStyle: "normal",
                            fontWeight: 600,
                            fontSize: "44px",
                            lineHeight: "135%",
                            color: "#1F1F1F",
                            margin: 0,
                        }}
                    >
                        About Us
                    </h1>

                    <p
                        style={{
                            fontStyle: "normal",
                            fontWeight: 300,
                            fontSize: "14px",
                            lineHeight: "145%",
                            color: "#383838",
                            margin: 0,
                        }}
                    >
                        CarMandi is Pakistan's first digital ecosystem designed to replace the uncertainty of traditional car buying with absolute transparency. We are not just a classifieds site; we are a managed marketplace where every vehicle is inspected, verified, and sold through a fair, competitive bidding process.
                    </p>

                    <p
                        style={{
                            fontStyle: "normal",
                            fontWeight: 300,
                            fontSize: "14px",
                            lineHeight: "145%",
                            color: "#383838",
                            margin: 0,
                        }}
                    >
                        Our mission is to bridge the trust deficit in the local automotive market. By combining strict 200+ point inspections with a secure, real-time auction engine, we empower both buyers and sellers to trade with confidence, knowing that the price reflects the true value of the machine.
                    </p>
                </div>

                {/* Image Group - Group 1686557807 */}
                <div
                    className="relative flex-none order-1 flex-grow-0"
                    style={{
                        width: "566px",
                        height: "362px",
                        maxWidth: "100%",
                    }}
                >
                    <Image
                        src="/images/about/hero-illustration.svg"
                        alt="CarMandi Experience"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

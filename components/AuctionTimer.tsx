"use client";

import React, { useState, useEffect, memo } from "react";
import Image from "next/image";
import { colors, typography, layout } from "@/constants/theme";

const LABELS = {
    timer: {
        days: "Days",
        hours: "Hrs",
        minutes: "Mins",
        seconds: "Sec",
    },
} as const;

const calculateTimeLeft = (endTime: string) => {
    const difference = new Date(endTime).getTime() - Date.now();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
    };
};

interface AuctionTimerProps {
    endTime: string;
    width?: string;
    height?: string;
}

export const AuctionTimer = memo(({ endTime, width = "90%", height = "27px" }: AuctionTimerProps) => {
    const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

    useEffect(() => {
        setTimeLeft(calculateTimeLeft(endTime));
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(endTime));
        }, 1000);
        return () => clearInterval(timer);
    }, [endTime]);

    const displayTime = timeLeft || { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return (
        <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 z-10"
            style={{
                width: width,
                height: height,
                backgroundColor: colors.background.overlay,
                backdropFilter: "blur(7px)",
                borderRadius: layout.borderRadius.pill,
            }}
        >
            <Image
                src="/images/ui-icons/clock.svg"
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
            />
            <div
                className="flex items-center gap-1 font-medium tracking-wide"
                style={{
                    color: colors.neutral.white,
                    fontSize: typography.fontSize.xs
                }}
            >
                <span className="font-bold">{displayTime.days}</span> {LABELS.timer.days}
                <span className="font-bold">{displayTime.hours}</span> {LABELS.timer.hours}
                <span className="font-bold">{displayTime.minutes}</span> {LABELS.timer.minutes}
                <span className="font-bold">{displayTime.seconds}</span> {LABELS.timer.seconds}
            </div>
        </div>
    );
});
AuctionTimer.displayName = "AuctionTimer";

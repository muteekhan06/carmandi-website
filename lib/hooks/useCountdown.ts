"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export interface CountdownTime {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isExpired: boolean;
    totalSeconds: number;
}

interface UseCountdownOptions {
    /** Callback when countdown expires */
    onExpire?: () => void;
    /** Update interval in ms (default: 1000) */
    interval?: number;
    /** Whether to start immediately (default: true) */
    autoStart?: boolean;
}

/**
 * Production-grade countdown hook for auction timers
 * 
 * Features:
 * - Optimized with refs to prevent unnecessary re-renders
 * - Proper cleanup on unmount
 * - Callback on expiration
 * - Pause/resume functionality
 * 
 * @example
 * const { time, isRunning, pause, resume } = useCountdown("2024-12-31T23:59:59Z");
 */
export function useCountdown(
    endTime: string | Date,
    options: UseCountdownOptions = {}
): CountdownTime & { isRunning: boolean; pause: () => void; resume: () => void } {
    const { onExpire, interval = 1000, autoStart = true } = options;
    const endTimeMs = useRef<number>(
        typeof endTime === "string" ? new Date(endTime).getTime() : endTime.getTime()
    );
    const [isRunning, setIsRunning] = useState(autoStart);
    const hasExpired = useRef(false);

    const calculateTimeLeft = useCallback((): CountdownTime => {
        const difference = endTimeMs.current - Date.now();

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                isExpired: true,
                totalSeconds: 0,
            };
        }

        const totalSeconds = Math.floor(difference / 1000);
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
            isExpired: false,
            totalSeconds,
        };
    }, []);

    const [time, setTime] = useState<CountdownTime>(calculateTimeLeft);

    // Update end time ref if prop changes
    useEffect(() => {
        endTimeMs.current =
            typeof endTime === "string" ? new Date(endTime).getTime() : endTime.getTime();
        hasExpired.current = false;
        setTime(calculateTimeLeft());
    }, [endTime, calculateTimeLeft]);

    // Main countdown effect
    useEffect(() => {
        if (!isRunning) return;

        const tick = () => {
            const newTime = calculateTimeLeft();
            setTime(newTime);

            // Fire onExpire callback once
            if (newTime.isExpired && !hasExpired.current) {
                hasExpired.current = true;
                onExpire?.();
            }
        };

        // Initial tick
        tick();

        const timer = setInterval(tick, interval);
        return () => clearInterval(timer);
    }, [isRunning, interval, calculateTimeLeft, onExpire]);

    const pause = useCallback(() => setIsRunning(false), []);
    const resume = useCallback(() => setIsRunning(true), []);

    return { ...time, isRunning, pause, resume };
}

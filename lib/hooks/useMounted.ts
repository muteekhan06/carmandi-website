"use client";

import { useState, useEffect } from "react";

/**
 * Check if component has mounted (SSR hydration guard)
 * 
 * Use this to prevent hydration mismatches when rendering
 * client-only content.
 * 
 * @example
 * const isMounted = useMounted();
 * 
 * if (!isMounted) return <Skeleton />;
 * return <ClientOnlyComponent />;
 */
export function useMounted(): boolean {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted;
}

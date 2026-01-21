import React from "react";

interface InspectionGaugeProps {
    score: number;
    width?: number;
    height?: number;
    strokeWidth?: number;
    color?: string;
    className?: string;
}

export const InspectionGauge: React.FC<InspectionGaugeProps> = ({
    score,
    width = 196,
    height = 100,
    strokeWidth = 20,
    color = "#009F2B",
    className = ""
}) => {
    // Internal coordinate system (based on default 196x100 aspect)
    // We render into a fixed viewBox, allowing the svg to scale via CSS/width props.
    const viewBoxWidth = 196;
    const viewBoxHeight = 100;

    // Geometry calculations
    const cx = viewBoxWidth / 2; // 98
    // Adjust cy to ensure the top stroke isn't clipped. 
    // Top edge = cy - radius - strokeWidth/2. 
    // We want Top edge >= 0.
    // Margin for stroke: strokeWidth / 2 = 10.
    // Max width available: 196 - 20 = 176. Max radius = 88.
    // Let's use radius 87.5 as before.
    // Top extent: 87.5 + 10 = 97.5 from cy.
    // So cy must be >= 97.5. Let's set cy = 98 to be safe and bottom-aligned.
    const cy = 98;
    const r = 87.5;

    const startAngle = -180;
    const endAngle = 0;

    const scoreClamped = Math.min(Math.max(score, 0), 10);
    const percentage = scoreClamped / 10;
    const currentAngle = startAngle + (endAngle - startAngle) * percentage;

    const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
        const angleInRadians = (angleInDegrees * Math.PI) / 180.0;
        return {
            x: centerX + radius * Math.cos(angleInRadians),
            y: centerY + radius * Math.sin(angleInRadians),
        };
    };

    const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
        const start = polarToCartesian(x, y, radius, endAngle);
        const end = polarToCartesian(x, y, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        return [
            "M", start.x, start.y,
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(" ");
    };

    const bgPath = describeArc(cx, cy, r, startAngle, endAngle);
    const fgPath = describeArc(cx, cy, r, startAngle, currentAngle);

    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <filter id="gauge-inner-shadow" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1.47" />
                    <feGaussianBlur stdDeviation="2.94" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.11 0 0 0 0 0.11 0 0 0 0.11 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                </filter>
            </defs>

            {/* Background Track */}
            <path
                d={bgPath}
                fill="none"
                stroke={color}
                strokeOpacity="0.05"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                filter="url(#gauge-inner-shadow)"
            />

            {/* Foreground Progress */}
            <path
                d={fgPath}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                filter="url(#gauge-inner-shadow)"
                style={{ transition: "stroke-dasharray 0.5s ease-in-out" }}
            />
        </svg>
    );
};

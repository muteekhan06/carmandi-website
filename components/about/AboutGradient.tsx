import React from 'react';

export const AboutGradient = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden md:block">
            {/* Left Box Gradient */}
            <div
                className="absolute"
                style={{
                    width: '537.14px',
                    height: '537.14px',
                    left: '-229.43px',
                    top: '158.43px',
                    transform: 'rotate(0deg)',
                    opacity: 0.5,
                    borderRadius: '50%',
                    background: 'linear-gradient(180deg, rgba(235, 114, 46, 0.2) 0%, rgba(26, 41, 66, 0.1) 100%)',
                    filter: 'blur(64px)',
                }}
            />

            {/* Right Box Gradient */}
            <div
                className="absolute"
                style={{
                    width: '598.68px',
                    height: '598.68px',
                    left: '926.58px',
                    top: '-187.34px',
                    transform: 'rotate(-46.2deg)',
                    opacity: 1,
                    borderRadius: '50%',
                    background: 'linear-gradient(180deg, rgba(235, 114, 46, 0.2) 0%, rgba(26, 41, 66, 0.1) 100%)',
                    filter: 'blur(64px)',
                }}
            />
        </div>
    );
};

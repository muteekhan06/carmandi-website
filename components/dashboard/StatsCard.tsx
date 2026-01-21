import { ReactNode } from "react";

interface StatsCardProps {
    label: string;
    value: string;
    icon: ReactNode;
}

export const StatsCard = ({ label, value, icon }: StatsCardProps) => {
    return (
        <div className="w-full h-[95px] bg-white rounded-[14px] border border-[#F0F0F0] flex items-center justify-between px-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col justify-center gap-1">
                <span className="text-[#707070] text-[13px] font-medium leading-[140%]">
                    {label}
                </span>
                <span className="text-[#1F1F1F] text-[24px] font-bold leading-none tracking-tight">
                    {value}
                </span>
            </div>

            <div className="flex-shrink-0">
                {icon}
            </div>
        </div>
    );
};

"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SidebarFilterState, DropdownOption, MAKES, MODELS, VARIANTS, COLORS, FILTER_BODY_TYPES, TRANSMISSIONS, PRICE_CHART_DATA } from "@/constants/searchData";

// ============================================================================
// TYPES
// ============================================================================

interface RangeSliderProps {
    min: number;
    max: number;
    minValue: number;
    maxValue: number;
    onMinChange: (value: number) => void;
    onMaxChange: (value: number) => void;
    formatLabel?: (value: number) => string;
    showChart?: boolean;
}

interface SidebarFiltersProps {
    filters: SidebarFilterState;
    onChange: <K extends keyof SidebarFilterState>(key: K, value: SidebarFilterState[K]) => void;
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

// Dropdown Component
const FilterDropdown = ({
    label,
    options,
    value,
    onChange,
    placeholder = "Select..."
}: {
    label: string;
    options: DropdownOption[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div className="py-[12px]">
            <label className="block text-[14px] font-medium text-[#383838] mb-2">
                {label}
            </label>
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[#F0F0F0] rounded-lg text-left hover:border-[#E0E0E0] transition-colors"
                >
                    <span className={`text-[14px] ${selectedOption ? "text-[#1F1F1F]" : "text-[#9A9A9A]"}`}>
                        {selectedOption?.label || placeholder}
                    </span>
                    <ChevronDown
                        size={18}
                        className={`text-[#8A8A8A] transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                </button>
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#F0F0F0] rounded-lg shadow-lg z-50 max-h-[200px] overflow-y-auto">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
                                className={`w-full px-4 py-2.5 text-left text-[14px] hover:bg-[#F5F5F5] transition-colors ${value === option.value ? "bg-[#F5FAFF] text-[#136BCF]" : "text-[#383838]"
                                    }`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

// Range Slider with Dual Handles
const RangeSlider = ({
    min,
    max,
    minValue,
    maxValue,
    onMinChange,
    onMaxChange,
    formatLabel = (v) => String(v),
    showChart = false
}: RangeSliderProps) => {
    const sliderRef = React.useRef<HTMLDivElement>(null);
    const [isDraggingMin, setIsDraggingMin] = React.useState(false);
    const [isDraggingMax, setIsDraggingMax] = React.useState(false);

    // Calculate percentages for positioning
    const getPercent = (value: number) => {
        return Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
    };

    const minPercent = getPercent(minValue);
    const maxPercent = getPercent(maxValue);

    // Common logic to calculate value from clientX and update state
    const updateFromPosition = (clientX: number, onlyMoveStart: boolean = false) => {
        if (!sliderRef.current) return;
        const rect = sliderRef.current.getBoundingClientRect();
        const pxValue = Math.min(Math.max(0, clientX - rect.left), rect.width);
        const percent = pxValue / rect.width;
        const rawValue = min + percent * (max - min);
        const value = Math.round(rawValue);

        // If starting a move (click on track), decide which handle to grab
        if (onlyMoveStart) {
            const distMin = Math.abs(minValue - value);
            const distMax = Math.abs(maxValue - value);

            if (distMin < distMax) {
                // Closer to min
                const newVal = Math.min(value, maxValue - 1);
                if (newVal >= min) {
                    onMinChange(newVal);
                    setIsDraggingMin(true);
                }
            } else {
                // Closer to max
                const newVal = Math.max(value, minValue + 1);
                if (newVal <= max) {
                    onMaxChange(newVal);
                    setIsDraggingMax(true);
                }
            }
        } else {
            // Dragging behavior
            if (isDraggingMin) {
                const newVal = Math.min(value, maxValue - 1);
                if (newVal >= min) onMinChange(newVal);
            } else if (isDraggingMax) {
                const newVal = Math.max(value, minValue + 1);
                if (newVal <= max) onMaxChange(newVal);
            }
        }
    };

    const handleTrackStart = (e: React.MouseEvent | React.TouchEvent) => {
        // Prevent default to avoid selection/scrolling
        if (e.type === 'mousedown') {
            e.preventDefault();
        }
        // If it's a touch event, getting the first touch
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        updateFromPosition(clientX, true); // true = start interaction
    };

    const handleHandleStartMin = (e: React.MouseEvent | React.TouchEvent) => {
        e.stopPropagation(); // Prevent track click
        if (e.type === 'mousedown') e.preventDefault();
        setIsDraggingMin(true);
    };

    const handleHandleStartMax = (e: React.MouseEvent | React.TouchEvent) => {
        e.stopPropagation(); // Prevent track click
        if (e.type === 'mousedown') e.preventDefault();
        setIsDraggingMax(true);
    };

    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDraggingMin && !isDraggingMax) return;
            updateFromPosition(e.clientX);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isDraggingMin && !isDraggingMax) return;
            if (e.cancelable) e.preventDefault();
            updateFromPosition(e.touches[0].clientX);
        };

        const handleEnd = () => {
            setIsDraggingMin(false);
            setIsDraggingMax(false);
        };

        if (isDraggingMin || isDraggingMax) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleEnd);
            window.addEventListener("touchmove", handleTouchMove, { passive: false });
            window.addEventListener("touchend", handleEnd);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleEnd);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleEnd);
        };
    }, [isDraggingMin, isDraggingMax, min, max, minValue, maxValue, onMinChange, onMaxChange]);

    return (
        <div className="relative select-none touch-none">
            {/* Chart Visualization */}
            {showChart && (
                <div className="flex items-end gap-[3px] h-[52px] mb-[-2px] px-[2px]">
                    {PRICE_CHART_DATA.map((height, index) => {
                        const barPercent = (index / (PRICE_CHART_DATA.length - 1)) * 100;
                        const isActive = barPercent >= minPercent && barPercent <= maxPercent;
                        return (
                            <div
                                key={index}
                                className="flex-1 rounded-t-[3px] transition-colors duration-200"
                                style={{
                                    height: `${height * 100}%`,
                                    backgroundColor: isActive ? "#82B4EE" : "#EAEEF4",
                                }}
                            />
                        );
                    })}
                </div>
            )}

            {/* Slider Track Container */}
            <div
                ref={sliderRef}
                className="relative h-[24px] flex items-center cursor-pointer group"
                onMouseDown={handleTrackStart}
                onTouchStart={handleTrackStart}
            >
                {/* Background Track */}
                <div className="absolute w-full h-[3px] bg-[#D9E7FA] rounded-full group-hover:h-[4px] transition-all duration-200" />

                {/* Active Range */}
                <div
                    className="absolute h-[3px] bg-[#136BCF] rounded-full z-10 group-hover:h-[4px] transition-all duration-200"
                    style={{
                        left: `${minPercent}%`,
                        width: `${maxPercent - minPercent}%`
                    }}
                />

                {/* Min Handle */}
                <div
                    className="absolute w-[20px] h-[20px] bg-white border-[3px] border-[#136BCF] rounded-full shadow-md z-20 hover:scale-110 active:scale-95 transition-transform"
                    style={{ left: `calc(${minPercent}% - 10px)` }}
                    onMouseDown={handleHandleStartMin}
                    onTouchStart={handleHandleStartMin}
                />

                {/* Max Handle */}
                <div
                    className="absolute w-[20px] h-[20px] bg-white border-[3px] border-[#136BCF] rounded-full shadow-md z-20 hover:scale-110 active:scale-95 transition-transform"
                    style={{ left: `calc(${maxPercent}% - 10px)` }}
                    onMouseDown={handleHandleStartMax}
                    onTouchStart={handleHandleStartMax}
                />
            </div>


            {/* Range Inputs (for accessibility) */}
            <div className="flex justify-between mt-4 gap-4">
                <div className="flex-1">
                    <input
                        type="number"
                        min={min}
                        max={maxValue}
                        value={minValue}
                        onChange={(e) => {
                            const val = Number(e.target.value);
                            if (val >= min && val < maxValue) onMinChange(val);
                        }}
                        className="w-full px-3 py-2 border border-[#F0F0F0] rounded-lg text-[14px] text-[#1F1F1F] focus:outline-none focus:border-[#136BCF]"
                    />
                    <span className="block text-[10px] text-[#707070] mt-1 truncate">
                        {formatLabel(minValue)}
                    </span>
                </div>
                <div className="flex-1">
                    <input
                        type="number"
                        min={minValue}
                        max={max}
                        value={maxValue}
                        onChange={(e) => {
                            const val = Number(e.target.value);
                            if (val > minValue && val <= max) onMaxChange(val);
                        }}
                        className="w-full px-3 py-2 border border-[#F0F0F0] rounded-lg text-[14px] text-[#1F1F1F] focus:outline-none focus:border-[#136BCF]"
                    />
                    <span className="block text-[10px] text-[#707070] mt-1 truncate">
                        {formatLabel(maxValue)}
                    </span>
                </div>
            </div>
        </div>
    );
};

// Pill Button Group
const PillGroup = ({
    options,
    selected,
    onChange,
    multiple = false
}: {
    options: string[];
    selected: string | string[];
    onChange: (value: string | string[]) => void;
    multiple?: boolean;
}) => {
    const handleClick = (option: string) => {
        if (multiple) {
            const selectedArray = selected as string[];
            if (selectedArray.includes(option)) {
                onChange(selectedArray.filter(s => s !== option));
            } else {
                onChange([...selectedArray, option]);
            }
        } else {
            onChange(option);
        }
    };

    const isSelected = (option: string) => {
        if (multiple) {
            return (selected as string[]).includes(option);
        }
        return selected === option;
    };

    return (
        <div className="flex flex-wrap gap-2">
            {options.map((option) => (
                <button
                    key={option}
                    type="button"
                    onClick={() => handleClick(option)}
                    className={`px-4 py-2 rounded-full text-[13px] font-normal border transition-all ${isSelected(option)
                        ? "bg-[#F5FAFF] border-[#136BCF] text-[#136BCF]"
                        : "bg-white border-[#F0F0F0] text-[#383838] hover:border-[#E0E0E0]"
                        }`}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const SidebarFilters = ({ filters, onChange }: SidebarFiltersProps) => {

    const updateFilter = <K extends keyof SidebarFilterState>(key: K, value: SidebarFilterState[K]) => {
        onChange(key, value);
    };

    const formatPrice = (value: number) => {
        if (value >= 1000000) {
            return `${(value / 1000000).toFixed(1)}M`;
        }
        if (value >= 1000) {
            return `${(value / 1000).toFixed(0)}K`;
        }
        return value.toString();
    };

    return (
        <div className="w-full bg-white border border-[#EBEBEB] rounded-xl overflow-hidden font-outfit">
            <div className="py-[20px] px-[14px]">
                {/* Make Dropdown */}
                <FilterDropdown
                    label="Make"
                    options={MAKES}
                    value={filters.make}
                    onChange={(v) => updateFilter("make", v)}
                    placeholder="Select make"
                />

                {/* Model Dropdown */}
                <FilterDropdown
                    label="Model"
                    options={MODELS}
                    value={filters.model}
                    onChange={(v) => updateFilter("model", v)}
                    placeholder="Select model"
                />

                {/* Variant Dropdown */}
                <FilterDropdown
                    label="Variant"
                    options={VARIANTS}
                    value={filters.variant}
                    onChange={(v) => updateFilter("variant", v)}
                    placeholder="Select variant"
                />

                {/* Year Range */}
                <div className="py-[12px]">
                    <label className="block text-[14px] font-medium text-[#383838] mb-4">
                        Year
                    </label>
                    <RangeSlider
                        min={2000}
                        max={2024}
                        minValue={filters.yearMin}
                        maxValue={filters.yearMax}
                        onMinChange={(v) => updateFilter("yearMin", v)}
                        onMaxChange={(v) => updateFilter("yearMax", v)}
                        formatLabel={(v) => String(v)}
                    />
                </div>

                {/* Mileage Range */}
                <div className="py-[12px]">
                    <div className="flex items-center justify-between mb-3">
                        <label className="text-[14px] font-medium text-[#383838]">
                            Mileage Range
                        </label>
                        <span className="text-[12px] text-[#8A8A8A]">KM's</span>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Minimum"
                                value={filters.mileageMin}
                                onChange={(e) => updateFilter("mileageMin", e.target.value)}
                                className="w-full px-4 py-3 border border-[#F0F0F0] rounded-lg text-[14px] text-[#1F1F1F] placeholder:text-[#707070] focus:outline-none focus:border-[#136BCF]"
                            />
                        </div>
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Maximum"
                                value={filters.mileageMax}
                                onChange={(e) => updateFilter("mileageMax", e.target.value)}
                                className="w-full px-4 py-3 border border-[#F0F0F0] rounded-lg text-[14px] text-[#1F1F1F] placeholder:text-[#707070] focus:outline-none focus:border-[#136BCF]"
                            />
                        </div>
                    </div>
                </div>

                {/* Current Bid / Price Range */}
                <div className="py-[12px]">
                    <div className="flex items-center justify-between mb-3">
                        <label className="text-[14px] font-medium text-[#383838]">
                            Current Bid
                        </label>
                        <span className="text-[12px] text-[#8A8A8A]">Pkr</span>
                    </div>
                    <RangeSlider
                        min={0}
                        max={15000000}
                        minValue={filters.priceMin}
                        maxValue={filters.priceMax}
                        onMinChange={(v) => updateFilter("priceMin", v)}
                        onMaxChange={(v) => updateFilter("priceMax", v)}
                        formatLabel={(v) => formatPrice(v)}
                        showChart={true}
                    />
                </div>

                {/* Color Dropdown */}
                <FilterDropdown
                    label="Color"
                    options={COLORS}
                    value={filters.color}
                    onChange={(v) => updateFilter("color", v)}
                    placeholder="Select color"
                />

                {/* Transmission Type */}
                <div className="py-[12px]">
                    <label className="block text-[14px] font-medium text-[#383838] mb-3">
                        Transmission Type
                    </label>
                    <PillGroup
                        options={TRANSMISSIONS}
                        selected={filters.transmission}
                        onChange={(v) => updateFilter("transmission", v as string)}
                    />
                </div>

                {/* Body Type */}
                <div className="py-[12px]">
                    <label className="block text-[14px] font-medium text-[#383838] mb-3">
                        Body Type
                    </label>
                    <PillGroup
                        options={FILTER_BODY_TYPES}
                        selected={filters.bodyTypes}
                        onChange={(v) => updateFilter("bodyTypes", v as string[])}
                        multiple={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default SidebarFilters;

"use client";

import { useRouter } from "next/navigation";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, Search, ChevronDown, Check } from "lucide-react";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
    BRANDS,
    TOP_CITIES,
    OTHER_CITIES,
    INSPECTION_CENTERS,
    MOCK_MODELS,
    MOCK_VARIANTS,
    type Brand,
    type City
} from "../lib/mockData";

// Helper functions (moved outside component or keep if simple)
const numberToWords = (num: number | string): string => {
    if (!num) return "";
    const n = typeof num === 'string' ? parseInt(num.replace(/,/g, '')) : num;
    if (isNaN(n)) return "";

    if (n >= 10000000) return `${(n / 10000000).toFixed(2)} Crore`;
    if (n >= 100000) return `${(n / 100000).toFixed(2)} Lac`;
    if (n >= 1000) return `${(n / 1000).toFixed(1)} Thousand`;
    return n.toString();
};

const formatCompactPrice = (value: string): string => {
    // Remove non-numeric characters except maybe decimal points if we supported them, 
    // but here we just want int parsing
    const cleaned = value.replace(/[^0-9]/g, "");
    const num = parseInt(cleaned);
    if (isNaN(num)) return "";

    return new Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
    }).format(num);
};

// Generate next 7 days dynamically
const getNextDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        // Format: "Tue, 13 Jan"
        const formatted = date.toLocaleDateString('en-GB', {
            weekday: 'short',
            day: 'numeric',
            month: 'short'
        }).replace(/(\w+) (\d+) (\w+)/, "$1 `$2 $3").replace('`', ',');
        // Force the comma manually or use string manipulation if locale doesn't perfectly match "Tue, 13 Jan"
        // en-GB usually gives "Tue, 13 Jan" or "Tue 13 Jan". 
        // Let's construct it manually to be safe for "Tue, 13 Jan"
        const dayName = date.toLocaleDateString('en-GB', { weekday: 'short' });
        const dayNum = date.getDate();
        const monthName = date.toLocaleDateString('en-GB', { month: 'short' });
        days.push(`${dayName}, ${dayNum} ${monthName}`);
    }
    return days;
};

// Standard Time Slots (10 am - 8 pm)
const STANDARD_TIMES = [
    "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm",
    "4 pm", "5 pm", "6 pm", "7 pm", "8 pm"
];

export default function SellYourCarPage() {
    const router = useRouter(); // Initialize router
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 7; // Updated to 7

    // --- Dynamic Data States ---
    const [brands, setBrands] = useState<Brand[]>(BRANDS);
    const [allCities, setAllCities] = useState<City[]>([...TOP_CITIES, ...OTHER_CITIES]);
    const [availableModels, setAvailableModels] = useState<Array<{ id: string, name: string, icon?: string }>>([]);
    const [availableVariants, setAvailableVariants] = useState<Array<{ id: string, name: string }>>([]);
    const [availableCenters, setAvailableCenters] = useState<string[]>([]);

    // --- Selection States ---
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedBrandName, setSelectedBrandName] = useState("");

    const [selectedModel, setSelectedModel] = useState("");
    const [selectedModelName, setSelectedModelName] = useState("");

    const [selectedVariant, setSelectedVariant] = useState("");
    const [selectedVariantName, setSelectedVariantName] = useState("");

    const [selectedCity, setSelectedCity] = useState("");
    const [selectedCityName, setSelectedCityName] = useState("");

    // --- Step 4 States ---
    const [demandPrice, setDemandPrice] = useState("");
    const [reservedPrice, setReservedPrice] = useState("");

    // --- Step 6 States ---
    const [inspectionDates] = useState(getNextDays());
    const [selectedDate, setSelectedDate] = useState(inspectionDates[0]);
    const [selectedTime, setSelectedTime] = useState("");

    // --- Step 7 States ---
    const [inspectionAddress, setInspectionAddress] = useState("");
    const [isAddressDropdownOpen, setIsAddressDropdownOpen] = useState(false);
    const [contactPhone, setContactPhone] = useState("");

    // Common search for Steps 1, 2, 3, 5
    const [searchQuery, setSearchQuery] = useState("");

    // --- Effects for Dynamic Data ---

    // Fetch models when brand changes
    useEffect(() => {
        if (selectedBrand) {
            // Simulate API fetch
            const models = MOCK_MODELS[selectedBrand] || [];
            // If no mock data, provide generic placeholders so flow isn't broken
            if (models.length === 0) {
                const genericModels = Array.from({ length: 10 }).map((_, i) => ({
                    id: `${selectedBrand}-model-${i}`,
                    name: `${selectedBrandName} Model ${i + 1}`
                }));
                setAvailableModels(genericModels);
            } else {
                setAvailableModels(models);
            }
        } else {
            setAvailableModels([]);
        }
    }, [selectedBrand, selectedBrandName]);

    // Fetch variants when model changes
    useEffect(() => {
        if (selectedModel) {
            const variants = MOCK_VARIANTS[selectedModel] || [];
            if (variants.length === 0) {
                const genericVariants = Array.from({ length: 5 }).map((_, i) => ({
                    id: `${selectedModel}-var-${i}`,
                    name: `${selectedModelName} Variant ${i + 1}`
                }));
                setAvailableVariants(genericVariants);
            } else {
                setAvailableVariants(variants);
            }
        } else {
            setAvailableVariants([]);
        }
    }, [selectedModel, selectedModelName]);

    // Fetch inspection centers when city changes
    useEffect(() => {
        if (selectedCity) {
            const centers = INSPECTION_CENTERS[selectedCity] || INSPECTION_CENTERS['default'];
            setAvailableCenters(centers);
            // Auto-select first center default
            if (centers.length > 0) {
                setInspectionAddress(centers[0]);
            }
        }
    }, [selectedCity]);


    // --- Filtering Logic ---
    const filteredBrands = useMemo(() => {
        return brands.filter(b => b.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [brands, searchQuery]);

    const filteredModels = useMemo(() => {
        return availableModels.filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [availableModels, searchQuery]);

    const filteredVariants = useMemo(() => {
        return availableVariants.filter(v => v.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [availableVariants, searchQuery]);

    const filteredCities = useMemo(() => {
        return allCities.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [allCities, searchQuery]);

    const topCitiesList = useMemo(() => {
        // Just reusing the specific 4 top cities for the grid from `allCities` if they exist
        return allCities.filter(c => ['lahore', 'karachi', 'islamabad', 'rawalpindi'].includes(c.id));
    }, [allCities]);


    // --- Handlers ---

    const handleBack = () => {
        if (currentStep > 1) {
            const prevStep = currentStep - 1;
            setCurrentStep(prevStep);

            // Clear selections for the step we just left (and potentially forward ones)
            // ensuring the "chip" disappears as we go back.
            if (currentStep === 2) {
                setSelectedBrand(""); setSelectedBrandName("");
                setAvailableModels([]); // Clear models
            }
            if (currentStep === 3) {
                setSelectedModel(""); setSelectedModelName("");
                setAvailableVariants([]);
            }
            if (currentStep === 4) {
                setSelectedVariant(""); setSelectedVariantName("");
            }
            if (currentStep === 5) {
                setDemandPrice(""); setReservedPrice("");
            }
            if (currentStep === 6) {
                setSelectedCity(""); setSelectedCityName("");
                setAvailableCenters([]);
            }
            if (currentStep === 7) {
                setSelectedDate(inspectionDates[0]); setSelectedTime("");
                // Don't necessarily clear date if we just want to re-select time, 
                // but user said "undoes the selected thing". 
                // Let's clear time to be safe.
                setSelectedTime("");
            }

            setSearchQuery("");
        }
    };

    const handleBrandSelect = (id: string, name: string) => {
        setSelectedBrand(id);
        setSelectedBrandName(name);
        setSearchQuery("");
        setCurrentStep(2);
    };

    const handleModelSelect = (id: string, name: string) => {
        setSelectedModel(id);
        setSelectedModelName(name);
        setSearchQuery("");
        setCurrentStep(3);
    };

    const handleVariantSelect = (id: string, name: string) => {
        setSelectedVariant(id);
        setSelectedVariantName(name);
        setSearchQuery("");
        setCurrentStep(4);
    };

    const handlePriceChange = (value: string, setter: (val: string) => void) => {
        // Allow numbers only
        const cleaned = value.replace(/[^0-9]/g, "");
        setter(cleaned);
    };

    const handlePricingNext = () => {
        if (demandPrice && reservedPrice) {
            setSearchQuery("");
            setCurrentStep(5);
        }
    };

    const handleCitySelect = (id: string, name: string) => {
        setSelectedCity(id);
        setSelectedCityName(name);
        setSearchQuery("");
        setCurrentStep(6);
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
        setTimeout(() => {
            setCurrentStep(7);
        }, 300); // Small delay for visual feedback
    };

    const handleFinalSubmit = () => {
        const query = new URLSearchParams({
            brand: selectedBrandName,
            model: selectedModelName,
            variant: selectedVariantName,
            demandPrice,
            reservedPrice,
            city: selectedCityName,
            date: selectedDate,
            time: selectedTime,
            // phone: contactPhone, // Optional to pass
        }).toString();

        router.push(`/pay-now?${query}`);
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#F0F2F5]">
            <Header />
            <main className="flex-1 py-8 pb-48 flex justify-center items-start">
                <div className="w-full max-w-[736px] flex flex-col items-center">

                    {/* Header Title */}
                    <h1 className="text-[32px] font-bold text-[#1F1F1F] mb-6 self-start w-full max-w-[736px]">
                        Sell Your Car
                    </h1>

                    {/* Summary Breadcrumbs */}
                    <div className="w-full mb-6">
                        {(selectedBrandName || selectedModelName || selectedVariantName || demandPrice || selectedCityName) && (
                            <div className="flex flex-wrap gap-1">
                                {/* Dynamic Brand Chip */}
                                {selectedBrandName && (
                                    selectedBrandName === 'Honda' ? (
                                        <div className="relative w-[70px] h-[36px]">
                                            <Image
                                                src="/images/ui-icons/helper-chip.svg"
                                                alt="Honda"
                                                layout="fill"
                                                objectFit="contain"
                                            />
                                        </div>
                                    ) : (
                                        <span
                                            className="px-3 bg-white border border-[#EBEBEB] text-[14px] text-[#383838] flex items-center justify-center"
                                            style={{ height: '36px', borderRadius: '18px' }}
                                        >
                                            {selectedBrandName}
                                        </span>
                                    )
                                )}
                                {selectedModelName && (
                                    <span
                                        className="px-3 bg-white border border-[#EBEBEB] text-[14px] text-[#383838] flex items-center justify-center"
                                        style={{ height: '36px', borderRadius: '18px' }}
                                    >
                                        {selectedModelName}
                                    </span>
                                )}
                                {selectedVariantName && (
                                    <span
                                        className="px-3 bg-white border border-[#EBEBEB] text-[14px] text-[#383838] flex items-center justify-center"
                                        style={{ height: '36px', borderRadius: '18px' }}
                                    >
                                        {selectedVariantName}
                                    </span>
                                )}
                                {demandPrice && reservedPrice && (
                                    <span
                                        className="px-3 bg-white border border-[#EBEBEB] text-[14px] text-[#383838] flex items-center justify-center"
                                        style={{ height: '36px', borderRadius: '18px' }}
                                    >
                                        {formatCompactPrice(demandPrice)} / {formatCompactPrice(reservedPrice)}
                                    </span>
                                )}
                                {selectedCityName && (
                                    <span
                                        className="px-3 bg-white border border-[#EBEBEB] text-[14px] text-[#383838] flex items-center justify-center"
                                        style={{ height: '36px', borderRadius: '18px' }}
                                    >
                                        {selectedCityName}
                                    </span>
                                )}
                                {selectedDate && selectedTime && (
                                    <span
                                        className="px-3 bg-white border border-[#EBEBEB] text-[14px] text-[#383838] flex items-center justify-center"
                                        style={{ height: '36px', borderRadius: '18px' }}
                                    >
                                        {selectedDate} ({selectedTime})
                                    </span>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Main Wizard Card */}
                    <div className="bg-white rounded-[16px] shadow-lg p-8 w-full max-w-[736px] mt-6 relative">
                        {/* Step Header */}
                        <div className="relative flex items-center justify-between mb-6">
                            <button
                                className="relative z-10 w-10 h-10 flex items-center justify-center hover:bg-[#F5F5F5] rounded-full transition-colors"
                                onClick={handleBack}
                            >
                                <ArrowLeft size={20} className="text-[#8A8A8A]" />
                            </button>

                            <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[20px] font-semibold text-[#1F1F1F] text-center whitespace-nowrap">
                                {currentStep === 1 ? "Select Brand" :
                                    currentStep === 2 ? "Select Model" :
                                        currentStep === 3 ? "Select Variant" :
                                            currentStep === 4 ? "What's your Demand Price?" :
                                                currentStep === 5 ? "Select car registered city" :
                                                    currentStep === 6 ? "Select Inspection Slot" :
                                                        "Your Personal Details"}
                            </h2>

                            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[14px] text-[#707070]">
                                <span className="text-[#1F1F1F] font-medium">{currentStep}</span>/{totalSteps}
                            </span>
                        </div>

                        {/* Search Input (Steps 1, 2, 3, 5) */}
                        {currentStep !== 4 && currentStep < 6 && (
                            <div className="relative mb-8">
                                <input
                                    type="text"
                                    placeholder={
                                        currentStep === 1 ? "Search brand" :
                                            currentStep === 2 ? `Search ${selectedBrandName.toLowerCase()} model` :
                                                currentStep === 3 ? "Search variant or class" :
                                                    "Search city"
                                    }
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full h-[44px] pl-4 pr-12 border border-[#F0F0F0] rounded-[8px] text-[14px] text-[#383838] placeholder:text-[#9A9A9A] focus:outline-none focus:border-[#136BCF] transition-colors"
                                />
                                <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9A9A9A]" />
                            </div>
                        )}

                        {/* Step 1: Brands */}
                        {currentStep === 1 && (
                            <>
                                <div className="mb-8">
                                    <h3 className="text-[14px] font-semibold text-[#383838] mb-4">Top Brands</h3>
                                    <div className="grid grid-cols-8 gap-3">
                                        {filteredBrands.slice(0, 16).map((brand) => (
                                            <button
                                                key={brand.id}
                                                onClick={() => handleBrandSelect(brand.id, brand.name)}
                                                className={`flex flex-col items-center justify-center p-3 rounded-[8px] border transition-all hover:border-[#136BCF] hover:bg-[#F5FAFF] ${selectedBrand === brand.id ? 'border-[#136BCF] bg-[#F5FAFF]' : 'border-[#F0F0F0] bg-white'}`}
                                            >
                                                <div className="w-8 h-8 flex items-center justify-center mb-1">
                                                    <Image src={brand.icon} alt={brand.name} width={32} height={32} className="object-contain" />
                                                </div>
                                                <span className="text-[11px] text-[#505050] text-center leading-tight">{brand.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[14px] font-semibold text-[#383838] mb-4">All Brands</h3>
                                    <div className="flex flex-col max-h-[250px] overflow-y-auto custom-scrollbar">
                                        {filteredBrands.map((brand) => (
                                            <button
                                                key={brand.id}
                                                onClick={() => handleBrandSelect(brand.id, brand.name)}
                                                className="flex items-center gap-3 py-3 px-2 hover:bg-[#F9FAFB] rounded-[8px] transition-colors border-b border-[#F5F5F5] last:border-b-0"
                                            >
                                                <div className="w-6 h-6 flex items-center justify-center">
                                                    <Image src={brand.icon} alt={brand.name} width={24} height={24} className="object-contain" />
                                                </div>
                                                <span className="text-[14px] text-[#4F4F4F]">{brand.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Step 2: Models */}
                        {currentStep === 2 && (
                            <>
                                {/* Only show top models if we actually have distinct top vs all logic, otherwise generic grid */}
                                <div className="mb-8">
                                    <h3 className="text-[14px] font-semibold text-[#383838] mb-4">Top {selectedBrandName} Models</h3>
                                    <div className="grid grid-cols-6 gap-3">
                                        {filteredModels.slice(0, 12).map((model) => (
                                            <button
                                                key={model.id}
                                                onClick={() => handleModelSelect(model.id, model.name)}
                                                className={`flex flex-col items-center justify-center p-3 rounded-[8px] border transition-all hover:border-[#136BCF] hover:bg-[#F5FAFF] ${selectedModel === model.id ? 'border-[#136BCF] bg-[#F5FAFF]' : 'border-[#F0F0F0] bg-white'}`}
                                            >
                                                <div className="w-[80px] h-[55px] flex items-center justify-center mb-2 bg-[#F7F9FA] rounded-[8px]">
                                                    <Image
                                                        src={model.icon || "/images/cars/model-placeholder.svg"}
                                                        alt={model.name}
                                                        width={60}
                                                        height={40}
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <span className="text-[12px] text-[#505050] text-center">{model.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                {filteredModels.length > 12 && (
                                    <div>
                                        <h3 className="text-[14px] font-semibold text-[#383838] mb-4">All {selectedBrandName} Models</h3>
                                        <div className="flex flex-col max-h-[250px] overflow-y-auto custom-scrollbar">
                                            {filteredModels.map((model) => (
                                                <button
                                                    key={model.id}
                                                    onClick={() => handleModelSelect(model.id, model.name)}
                                                    className="flex items-center gap-3 py-3 px-2 hover:bg-[#F9FAFB] rounded-[8px] transition-colors border-b border-[#F5F5F5] last:border-b-0"
                                                >
                                                    <span className="text-[14px] text-[#4F4F4F]">{model.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </>
                        )}

                        {/* Step 3: Variants */}
                        {currentStep === 3 && (
                            <div>
                                <h3 className="text-[14px] font-semibold text-[#383838] mb-4">All {selectedBrandName} Variant</h3>
                                <div className="flex flex-col max-h-[350px] overflow-y-auto custom-scrollbar">
                                    {filteredVariants.length > 0 ? (
                                        filteredVariants.map((variant) => (
                                            <button
                                                key={variant.id}
                                                onClick={() => handleVariantSelect(variant.id, variant.name)}
                                                className="flex items-center gap-3 py-3 px-2 hover:bg-[#F9FAFB] rounded-[8px] transition-colors border-b border-[#F5F5F5] last:border-b-0"
                                            >
                                                <span className="text-[14px] text-[#4F4F4F]">{variant.name}</span>
                                            </button>
                                        ))
                                    ) : (
                                        <div className="py-4 text-center text-[#9A9A9A]">No variants found</div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Step 4: Pricing */}
                        {currentStep === 4 && (
                            <div className="space-y-8">
                                <div>
                                    <label className="block text-[14px] font-medium text-[#383838] mb-3">What's your Demand Price?</label>
                                    <div className="relative">
                                        <input type="text" value={demandPrice} onChange={(e) => handlePriceChange(e.target.value, setDemandPrice)} placeholder="0" className="w-full h-[52px] pl-4 pr-16 border border-[#F0F0F0] rounded-[8px] text-[18px] font-medium text-[#1F1F1F] placeholder:text-[#BDBDBD] focus:outline-none focus:border-[#136BCF] transition-colors" />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[14px] text-[#9A9A9A]">Pkr</span>
                                    </div>
                                    {demandPrice && <p className="mt-2 text-[13px] text-[#9A9A9A]">{numberToWords(demandPrice)} only</p>}
                                </div>
                                <div>
                                    <label className="block text-[14px] font-medium text-[#383838] mb-3">What's your Reserved Price?</label>
                                    <div className="relative">
                                        <input type="text" value={reservedPrice} onChange={(e) => handlePriceChange(e.target.value, setReservedPrice)} placeholder="0" className="w-full h-[52px] pl-4 pr-16 border border-[#F0F0F0] rounded-[8px] text-[18px] font-medium text-[#1F1F1F] placeholder:text-[#BDBDBD] focus:outline-none focus:border-[#136BCF] transition-colors" />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[14px] text-[#9A9A9A]">Pkr</span>
                                    </div>
                                    {reservedPrice && <p className="mt-2 text-[13px] text-[#9A9A9A]">{numberToWords(reservedPrice)} only</p>}
                                </div>
                                <button onClick={handlePricingNext} disabled={!demandPrice || !reservedPrice} className={`w-full py-4 rounded-[8px] text-[16px] font-semibold text-white transition-colors ${demandPrice && reservedPrice ? 'bg-[#136BCF] hover:bg-[#0F56A6]' : 'bg-[#E0E0E0] cursor-not-allowed'}`}>Next</button>
                            </div>
                        )}

                        {/* Step 5: City */}
                        {currentStep === 5 && (
                            <>
                                <div className="mb-8">
                                    <h3 className="text-[14px] font-semibold text-[#383838] mb-4">Top Cities</h3>
                                    <div className="grid grid-cols-4 gap-3">
                                        {topCitiesList.map((city) => (
                                            <button
                                                key={city.id}
                                                onClick={() => handleCitySelect(city.id, city.name)}
                                                className={`flex flex-col items-center justify-center p-3 rounded-[8px] border transition-all hover:border-[#136BCF] hover:bg-[#F5FAFF] ${selectedCity === city.id ? 'border-[#136BCF] bg-[#F5FAFF]' : 'border-[#F0F0F0] bg-[#F9FAFB]'}`}
                                            >
                                                <div className={`flex items-center justify-center mb-2 ${city.id === 'lahore' ? 'w-[110px] h-[55px]' : 'w-[80px] h-[55px]'}`}>
                                                    {city.icon && (
                                                        <Image src={city.icon} alt={city.name} width={city.id === 'lahore' ? 110 : 60} height={city.id === 'lahore' ? 55 : 40} className="object-contain" />
                                                    )}
                                                </div>
                                                <span className="text-[12px] text-[#505050] text-center font-medium">{city.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[14px] font-semibold text-[#383838] mb-4">All Cities</h3>
                                    <div className="flex flex-col max-h-[250px] overflow-y-auto custom-scrollbar">
                                        {filteredCities.map((city) => (
                                            <button
                                                key={city.id}
                                                onClick={() => handleCitySelect(city.id, city.name)}
                                                className="flex items-center gap-3 py-3 px-2 hover:bg-[#F9FAFB] rounded-[8px] transition-colors border-b border-[#F5F5F5] last:border-b-0"
                                            >
                                                <span className="text-[14px] text-[#4F4F4F]">{city.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Step 6: Inspection Slot */}
                        {currentStep === 6 && (
                            <div className="flex flex-col">
                                <div className="flex items-center overflow-x-auto custom-scrollbar border-b border-[#F0F0F0] mb-8">
                                    {inspectionDates.map((date) => (
                                        <button
                                            key={date}
                                            onClick={() => setSelectedDate(date)}
                                            className={`flex-shrink-0 px-4 py-3 text-[14px] transition-colors relative ${selectedDate === date ? 'text-[#136BCF] font-bold' : 'text-[#707070] font-medium hover:text-[#383838]'}`}
                                        >
                                            {date}
                                            {selectedDate === date && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#136BCF] rounded-t-sm" />}
                                        </button>
                                    ))}
                                </div>
                                <div className="grid grid-cols-6 gap-3">
                                    {STANDARD_TIMES.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => handleTimeSelect(time)}
                                            className={`py-3 px-1 rounded-full text-[13px] border transition-all whitespace-nowrap ${selectedTime === time ? 'border-[#136BCF] bg-[#F5FAFF] text-[#136BCF] font-bold' : 'border-[#EEE] bg-white text-[#9A9A9A] hover:border-[#136BCF] hover:text-[#136BCF]'}`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 7: Personal Details */}
                        {currentStep === 7 && (
                            <div className="space-y-8">
                                {/* Dynamic Inspection Center Dropdown */}
                                <div className="relative">
                                    <label className="block text-[14px] text-[#383838] mb-3">
                                        Inspection Address
                                    </label>
                                    <button
                                        onClick={() => setIsAddressDropdownOpen(!isAddressDropdownOpen)}
                                        className="w-full h-[52px] px-4 border border-[#F0F0F0] rounded-[8px] text-[16px] text-[#1F1F1F] bg-white flex items-center justify-between focus:outline-none"
                                    >
                                        <span className="truncate">{inspectionAddress || "Select Center"}</span>
                                        <ChevronDown size={20} className="text-[#757575]" />
                                    </button>

                                    {isAddressDropdownOpen && (
                                        <div className="absolute top-[110%] left-0 w-full bg-white border border-[#F0F0F0] rounded-[8px] shadow-lg z-50 max-h-[200px] overflow-y-auto">
                                            {availableCenters.map((center) => (
                                                <button
                                                    key={center}
                                                    onClick={() => {
                                                        setInspectionAddress(center);
                                                        setIsAddressDropdownOpen(false);
                                                    }}
                                                    className="w-full text-left px-4 py-3 text-[14px] text-[#383838] hover:bg-[#F5FAFF] transition-colors flex items-center justify-between"
                                                >
                                                    <span>{center}</span>
                                                    {inspectionAddress === center && <Check size={16} className="text-[#136BCF]" />}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Phone Input */}
                                <div>
                                    <label className="block text-[14px] text-[#383838] mb-3">
                                        Phone Number
                                    </label>
                                    <div className="relative w-full h-[52px] border border-[#F0F0F0] rounded-[8px] flex items-center px-4">
                                        <div className="flex items-center gap-2 pr-3 h-[24px] border-r border-[#E0E0E0]">
                                            <div className="w-6 h-4 relative overflow-hidden rounded-[2px]">
                                                <Image src="/images/flags/pakistan-circle.svg" alt="Pakistan Flag" layout="fill" objectFit="cover" />
                                            </div>
                                            <span className="text-[16px] text-[#757575]">+92</span>
                                        </div>
                                        <input
                                            type="text"
                                            value={contactPhone}
                                            onChange={(e) => {
                                                const val = e.target.value.replace(/[^0-9]/g, '');
                                                setContactPhone(val);
                                            }}
                                            placeholder="3123456789"
                                            className="flex-1 h-full pl-3 text-[16px] text-[#1F1F1F] placeholder:text-[#BDBDBD] focus:outline-none"
                                        />
                                        <button className="text-[14px] text-[#136BCF]">Verify</button>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-8 pt-4">
                                    <button className="flex-1 h-[52px] rounded-[8px] bg-[#F5FAFF] text-[#136BCF] text-[16px]">Save As Draft</button>
                                    <button onClick={handleFinalSubmit} disabled={contactPhone.length < 10} className={`flex-1 h-[52px] rounded-[8px] text-[16px] text-white transition-colors ${contactPhone.length >= 10 ? 'bg-[#102B6D] hover:bg-[#0D245B]' : 'bg-[#E0E0E0] cursor-not-allowed'}`}>Pay Now</button>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Inspection Charges Banner */}
                    {(currentStep === 6 || currentStep === 7) && (
                        <div className="w-full max-w-[736px] mt-6 relative overflow-hidden rounded-[16px] h-[140px]" style={{ backgroundColor: '#DDF2F5' }}>
                            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                                <Image src="/images/banners/inspection-banner.svg" alt="Inspection Banner" layout="fill" objectFit="cover" objectPosition="center" />
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}

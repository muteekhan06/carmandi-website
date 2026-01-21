export interface Brand {
    id: string;
    name: string;
    icon: string;
}

export interface City {
    id: string;
    name: string;
    icon?: string;
}

export const BRANDS: Brand[] = [
    { id: 'honda', name: 'Honda', icon: '/images/brands/honda.svg' },
    { id: 'toyota', name: 'Toyota', icon: '/images/brands/toyota.svg' },
    { id: 'suzuki', name: 'Suzuki', icon: '/images/brands/suzuki.svg' },
    { id: 'kia', name: 'KIA', icon: '/images/brands/kia.svg' },
    { id: 'hyundai', name: 'Hyundai', icon: '/images/brands/hyundai.svg' },
    { id: 'changan', name: 'Changan', icon: '/images/brands/changan.svg' },
    { id: 'mg', name: 'MG', icon: '/images/brands/mg.svg' },
    { id: 'audi', name: 'Audi', icon: '/images/brands/audi.svg' },
    { id: 'bmw', name: 'BMW', icon: '/images/brands/bmw.svg' },
    { id: 'mercedes', name: 'Mercedes', icon: '/images/brands/mercedes.svg' },
    { id: 'nissan', name: 'Nissan', icon: '/images/brands/nissan.svg' },
    { id: 'mitsubishi', name: 'Mitsubishi', icon: '/images/brands/mitsubishi.svg' }
];

export const TOP_CITIES: City[] = [
    { id: 'lahore', name: 'Lahore', icon: '/images/cities/lahore-landmark.svg' },
    { id: 'karachi', name: 'Karachi', icon: '/images/cities/karachi-landmark.svg' },
    { id: 'islamabad', name: 'Islamabad', icon: '/images/cities/islamabad-landmark.svg' },
    { id: 'rawalpindi', name: 'Rawalpindi', icon: '/images/cities/islamabad-landmark.svg' },
];

export const OTHER_CITIES: City[] = [
    { id: 'faisalabad', name: 'Faisalabad' },
    { id: 'multan', name: 'Multan' },
    { id: 'peshawar', name: 'Peshawar' },
    { id: 'quetta', name: 'Quetta' },
    { id: 'sialkot', name: 'Sialkot' },
    { id: 'gujranwala', name: 'Gujranwala' },
];

export const INSPECTION_CENTERS: Record<string, string[]> = {
    'lahore': ['Gulberg Main Boulevard, Lahore', 'DHA Phase 5, Lahore', 'Johar Town, Lahore'],
    'karachi': ['Clifton Center, Karachi', 'Gulshan-e-Iqbal, Karachi', 'North Nazimabad, Karachi'],
    'islamabad': ['Blue Area, Islamabad', 'F-10 Markaz, Islamabad', 'I-8 Markaz, Islamabad'],
    'rawalpindi': ['Satellite Town, Rawalpindi', 'Saddar, Rawalpindi'],
    'default': ['Main Highway Branch', 'City Center Branch']
};


export const MOCK_MODELS: Record<string, Array<{ id: string; name: string; icon?: string }>> = {
    'honda': [
        { id: 'civic', name: 'Civic', icon: '/images/cars/car-model.svg' },
        { id: 'city', name: 'City', icon: '/images/cars/car-model.svg' },
        { id: 'accord', name: 'Accord', icon: '/images/cars/car-model.svg' },
        { id: 'brv', name: 'BR-V', icon: '/images/cars/car-model.svg' },
        { id: 'hrv', name: 'HR-V', icon: '/images/cars/car-model.svg' },
        { id: 'vezel', name: 'Vezel', icon: '/images/cars/car-model.svg' },
    ],
    'toyota': [
        { id: 'corolla', name: 'Corolla' },
        { id: 'yaris', name: 'Yaris' },
        { id: 'camry', name: 'Camry' },
        { id: 'fortuner', name: 'Fortuner' },
        { id: 'hilux', name: 'Hilux' },
        { id: 'landcruiser', name: 'Land Cruiser' },
    ],
    'suzuki': [
        { id: 'alto', name: 'Alto' },
        { id: 'cultus', name: 'Cultus' },
        { id: 'wagonr', name: 'Wagon R' },
        { id: 'swift', name: 'Swift' },
        { id: 'bolan', name: 'Bolan' },
        { id: 'ravi', name: 'Ravi' },
    ],
};

export const MOCK_VARIANTS: Record<string, Array<{ id: string; name: string }>> = {
    'civic': [
        { id: 'oriel', name: 'Oriel 1.8 i-VTEC CVT' },
        { id: 'rs', name: 'RS Turbo 1.5 CVT' },
        { id: 'vl', name: 'VTi 1.8 i-VTEC' },
        { id: 'type-r', name: 'Type R Sport' },
    ],
    'city': [
        { id: 'aspire', name: 'Aspire 1.5 LAS CVT' },
        { id: 'gli', name: '1.2L CVT' },
        { id: 'gli-mt', name: '1.2L MT' },
    ],
    'corolla': [
        { id: 'altis', name: 'Altis Grande 1.8' },
        { id: 'gli', name: 'GLi 1.3 Automatic' },
        { id: 'xli', name: 'XLi 1.3 VVTi' },
    ],
};

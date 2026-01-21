import { AuctionListing } from "@/types";

export interface BidHistoryItem {
    id: string;
    user: string;
    amount: number;
    time: string;
    date: string;
}

export interface InspectionScore {
    category: string;
    score: number;
    total: number;
}

export interface DetailedAuction extends AuctionListing {
    description: string;
    images: string[];
    bidHistory: BidHistoryItem[];
    inspection: {
        overallScore: number;
        breakdown: InspectionScore[];
    };
    amenities: string[];
    sellerNotes: string;
    tags: string[];
    location: string;
    reviews: number;
}

const COMMON_AMENITIES = ["Power Steering", "Power Windows", "ABS", "Air Bags", "Air Conditioning"];

export const ALL_AUCTIONS: DetailedAuction[] = [
    // 1. Suzuki Cultus 2016
    {
        id: "1",
        title: "Suzuki Cultus 2016 Limited Edition",
        price: 1660000,
        mileage: "5,452 KM",
        year: 2016,
        fuelType: "Petrol",
        transmission: "Manual",
        location: "Lahore",
        rating: 7.2,
        reviews: 12,
        endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
        isLive: true,
        isFeatured: true,
        image: "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-11-17/req_498/619bbcf7-adf0-432e-8e19-7888fa947fed.jpg",
        images: [
            "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-11-17/req_498/619bbcf7-adf0-432e-8e19-7888fa947fed.jpg",
            "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-11-17/req_498/619bbcf7-adf0-432e-8e19-7888fa947fed.jpg",
            "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-11-17/req_498/619bbcf7-adf0-432e-8e19-7888fa947fed.jpg",
            "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-11-17/req_498/619bbcf7-adf0-432e-8e19-7888fa947fed.jpg",
            "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-11-17/req_498/619bbcf7-adf0-432e-8e19-7888fa947fed.jpg",
            "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-11-17/req_498/619bbcf7-adf0-432e-8e19-7888fa947fed.jpg",
            "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-11-17/req_498/619bbcf7-adf0-432e-8e19-7888fa947fed.jpg",
            "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-11-17/req_498/619bbcf7-adf0-432e-8e19-7888fa947fed.jpg",
            "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-11-17/req_498/619bbcf7-adf0-432e-8e19-7888fa947fed.jpg",
            "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-11-17/req_498/619bbcf7-adf0-432e-8e19-7888fa947fed.jpg",
            "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-11-17/req_498/619bbcf7-adf0-432e-8e19-7888fa947fed.jpg",
            "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-11-17/req_498/619bbcf7-adf0-432e-8e19-7888fa947fed.jpg"
        ],
        description: "Experience unmatched performance and iconic German engineering with this stunning 2024 BMW M3 Sports Package. Finished with a sleek design and equipped with a powerful manual transmission, this beast delivers pure driving pleasure for enthusiasts who crave control and power on every turn.\n\nFinished with a sleek design and equipped with a powerful manual transmission, this beast delivers\n\nExperience unmatched performance and iconic German engineering with this stunning 2024 BMW M3 Sports Package. Finished with a sleek ...",
        sellerNotes: "Please contact during office hours. Price is slightly negotiable.",
        tags: ["2016", "5,452 KM", "Petrol", "Manual", "Lahore"],
        inspection: {
            overallScore: 10,
            breakdown: [
                { category: "Interior", score: 9.4, total: 10 },
                { category: "Engine", score: 9.7, total: 10 },
                { category: "Electrical", score: 10, total: 10 },
                { category: "Exterior", score: 5.6, total: 10 },
                { category: "Brakes", score: 7.3, total: 10 },
                { category: "AC/Heater", score: 2.9, total: 10 },
                { category: "Suspension", score: 9.3, total: 10 },
                { category: "Tyres", score: 5.8, total: 10 },
            ]
        },
        bidHistory: [
            { id: "1", user: "Bmm", amount: 89200000, time: "4:15:22 pm", date: "17/09/2025" },
            { id: "2", user: "Cmm", amount: 75500000, time: "3:30:45 pm", date: "18/09/2025" },
            { id: "3", user: "Dmm", amount: 67000000, time: "2:10:11 pm", date: "19/09/2025" },
            { id: "4", user: "Emm", amount: 50300000, time: "1:00:05 pm", date: "20/09/2025" },
            { id: "5", user: "Fmm", amount: 42700000, time: "12:45:30 pm", date: "21/09/2025" },
        ],
        amenities: [
            "Heated & ventilated seats", "Keyless entry", "Cupholders", "Blind-spot monitoring",
            "360 camera", "Adaptive cruise control", "Panoramic sunroof",
            "Leather seats", "Navigation system", "Bluetooth", "Backup camera", "Parking sensors"
        ]
    },
    // 2. Suzuki Mehran 2014
    {
        id: "2",
        title: "Suzuki Mehran 2014 VXR Euro II",
        price: 1025000,
        mileage: "23,803 KM",
        year: 2014,
        fuelType: "Petrol",
        transmission: "Manual",
        location: "Lahore",
        rating: 5.8,
        reviews: 8,
        endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
        isLive: true,
        isFeatured: false,
        image: "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-12-08/req_676/1ba8ab97-383c-4c29-8f50-d55cbc9c1d79.jpg",
        images: ["https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-12-08/req_676/1ba8ab97-383c-4c29-8f50-d55cbc9c1d79.jpg"],
        description: "Registered in Multan. 796cc. Grey Color. Reliable daily runner. Needs some AC work.",
        sellerNotes: "Sold as is.",
        tags: ["2014", "23k KM", "Petrol", "Manual"],
        inspection: {
            overallScore: 5.8,
            breakdown: [
                { category: "Interior", score: 7.9, total: 10 },
                { category: "Engine", score: 8.8, total: 10 },
                { category: "Electrical", score: 9.9, total: 10 },
                { category: "Exterior", score: 4.1, total: 10 },
                { category: "Brakes", score: 10, total: 10 },
                { category: "AC/Heater", score: 10, total: 10 },
                { category: "Suspension", score: 9.7, total: 10 },
                { category: "Tyres", score: 7.3, total: 10 },
            ]
        },
        bidHistory: [],
        amenities: ["Radio", "Heater"]
    },
    // 3. Honda Civic 2021
    {
        id: "3",
        title: "Honda Civic 2021 Oriel 1.8 i-VTEC CVT",
        price: 5730000,
        mileage: "80,393 KM",
        year: 2021,
        fuelType: "Petrol",
        transmission: "Automatic",
        location: "Islamabad",
        rating: 8.3,
        reviews: 45,
        endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
        isLive: true,
        isFeatured: true,
        image: "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-12-08/req_677/22ddee15-1e32-469b-b20e-9ad4dbb3d98e.jpg",
        images: ["https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-12-08/req_677/22ddee15-1e32-469b-b20e-9ad4dbb3d98e.jpg"],
        description: "Registered in Islamabad. 1798cc. White. Top of the line Oriel. Very well maintained.",
        sellerNotes: "Authorized dealer maintained.",
        tags: ["2021", "80k KM", "Petrol", "Automatic"],
        inspection: {
            overallScore: 8.3,
            breakdown: [
                { category: "Interior", score: 9.3, total: 10 },
                { category: "Engine", score: 8.9, total: 10 },
                { category: "Electrical", score: 10, total: 10 },
                { category: "Exterior", score: 6.4, total: 10 },
                { category: "AC/Heater", score: 10, total: 10 },
                { category: "Suspension", score: 9.0, total: 10 },
            ]
        },
        bidHistory: [
            { id: "1", user: "Saad M.", amount: 5730000, time: "11:00 am", date: "Today" }
        ],
        amenities: [...COMMON_AMENITIES, "Sunroof", "Navigation", "Cruise Control"]
    },
    // Variations to make 12
    {
        id: "4",
        title: "Toyota Corolla 2020 Grande 1.8",
        price: 4500000,
        mileage: "45,000 KM",
        year: 2020,
        fuelType: "Petrol",
        transmission: "Automatic",
        location: "Karachi",
        rating: 9.1,
        reviews: 30,
        endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
        isLive: true,
        isFeatured: true,
        image: "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-12-08/req_677/22ddee15-1e32-469b-b20e-9ad4dbb3d98e.jpg", // Reusing Civic image as placeholder/similar
        images: ["https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-12-08/req_677/22ddee15-1e32-469b-b20e-9ad4dbb3d98e.jpg"],
        description: "Pristine white Corolla Grande. First owner.",
        sellerNotes: "No work required.",
        tags: ["2020", "Grande", "Automatic"],
        inspection: { overallScore: 9, breakdown: [] },
        bidHistory: [],
        amenities: COMMON_AMENITIES
    },
    {
        id: "5",
        title: "Suzuki Alto 2022 VXL AGS",
        price: 2800000,
        mileage: "12,000 KM",
        year: 2022,
        fuelType: "Petrol",
        transmission: "Automatic",
        location: "Lahore",
        rating: 9.5,
        reviews: 5,
        endTime: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString(),
        isLive: true,
        isFeatured: true,
        image: "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-12-08/req_676/1ba8ab97-383c-4c29-8f50-d55cbc9c1d79.jpg", // Reusing Mehran/Hatchback image
        images: ["https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-12-08/req_676/1ba8ab97-383c-4c29-8f50-d55cbc9c1d79.jpg"],
        description: "Like new Alto VXL. AGS Transmission.",
        sellerNotes: "Urgent sale.",
        tags: ["2022", "660cc", "AGS"],
        inspection: { overallScore: 9.5, breakdown: [] },
        bidHistory: [],
        amenities: COMMON_AMENITIES
    },
    {
        id: "6",
        title: "Honda City 2018 1.5 Aspire",
        price: 3200000,
        mileage: "65,000 KM",
        year: 2018,
        fuelType: "Petrol",
        transmission: "Manual",
        location: "Rawalpindi",
        rating: 8.0,
        reviews: 18,
        endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
        isLive: true,
        isFeatured: false,
        image: "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-12-08/req_677/22ddee15-1e32-469b-b20e-9ad4dbb3d98e.jpg",
        images: ["https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-12-08/req_677/22ddee15-1e32-469b-b20e-9ad4dbb3d98e.jpg"],
        description: "Manual 1.5 Aspire. Good fuel average.",
        sellerNotes: "",
        tags: ["2018", "Manual", "City"],
        inspection: { overallScore: 8.0, breakdown: [] },
        bidHistory: [],
        amenities: COMMON_AMENITIES
    },
    {
        id: "7",
        title: "Kia Sportage 2021 FWD",
        price: 6500000,
        mileage: "40,000 KM",
        year: 2021,
        fuelType: "Petrol",
        transmission: "Automatic",
        location: "Lahore",
        rating: 8.8,
        reviews: 22,
        endTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(),
        isLive: true,
        isFeatured: true,
        image: "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-12-08/req_677/22ddee15-1e32-469b-b20e-9ad4dbb3d98e.jpg", // Placeholder
        images: ["https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-12-08/req_677/22ddee15-1e32-469b-b20e-9ad4dbb3d98e.jpg"],
        description: "White Sportage FWD. Clean interior.",
        sellerNotes: "",
        tags: ["2021", "SUV", "FWD"],
        inspection: { overallScore: 8.8, breakdown: [] },
        bidHistory: [],
        amenities: [...COMMON_AMENITIES, "Sunroof", "Cruise"]
    },
    {
        id: "8",
        title: "Toyota Fortuner 2018 Sigma 4",
        price: 11500000,
        mileage: "90,000 KM",
        year: 2018,
        fuelType: "Diesel",
        transmission: "Automatic",
        location: "Islamabad",
        rating: 8.5,
        reviews: 14,
        endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
        isLive: true,
        isFeatured: true,
        image: "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-12-08/req_677/22ddee15-1e32-469b-b20e-9ad4dbb3d98e.jpg", // Placeholder
        images: ["https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-12-08/req_677/22ddee15-1e32-469b-b20e-9ad4dbb3d98e.jpg"],
        description: "Diesel 2.8 Sigma 4. Powerful engine.",
        sellerNotes: "",
        tags: ["2018", "4x4", "Diesel"],
        inspection: { overallScore: 8.5, breakdown: [] },
        bidHistory: [],
        amenities: [...COMMON_AMENITIES, "4x4", "Leather Seats"]
    },
    {
        id: "9",
        title: "Suzuki Wagon R 2019 VXL",
        price: 2100000,
        mileage: "55,000 KM",
        year: 2019,
        fuelType: "Petrol",
        transmission: "Manual",
        location: "Faisalabad",
        rating: 7.8,
        reviews: 9,
        endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
        isLive: true,
        isFeatured: false,
        image: "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-11-17/req_498/619bbcf7-adf0-432e-8e19-7888fa947fed.jpg", // Using Cultus placeholder
        images: ["https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-11-17/req_498/619bbcf7-adf0-432e-8e19-7888fa947fed.jpg"],
        description: "White Wagon R. First owner.",
        sellerNotes: "",
        tags: ["2019", "Hatchback", "VXL"],
        inspection: { overallScore: 7.8, breakdown: [] },
        bidHistory: [],
        amenities: COMMON_AMENITIES
    },
    {
        id: "10",
        title: "Daihatsu Mira 2017 ES",
        price: 2400000,
        mileage: "35,000 KM",
        year: 2017,
        fuelType: "Petrol",
        transmission: "Automatic",
        location: "Karachi",
        rating: 9.0,
        reviews: 4,
        endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
        isLive: true,
        isFeatured: false,
        image: "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-12-08/req_676/1ba8ab97-383c-4c29-8f50-d55cbc9c1d79.jpg",
        images: ["https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-12-08/req_676/1ba8ab97-383c-4c29-8f50-d55cbc9c1d79.jpg"],
        description: "Japanese Mira, Import 2021.",
        sellerNotes: "",
        tags: ["2017", "660cc", "JDM"],
        inspection: { overallScore: 9.0, breakdown: [] },
        bidHistory: [],
        amenities: COMMON_AMENITIES
    },
    {
        id: "11",
        title: "Hyundai Tucson 2021 FWD",
        price: 6800000,
        mileage: "32,000 KM",
        year: 2021,
        fuelType: "Petrol",
        transmission: "Automatic",
        location: "Lahore",
        rating: 9.3,
        reviews: 15,
        endTime: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString(),
        isLive: true,
        isFeatured: true,
        image: "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-12-08/req_677/22ddee15-1e32-469b-b20e-9ad4dbb3d98e.jpg",
        images: ["https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-12-08/req_677/22ddee15-1e32-469b-b20e-9ad4dbb3d98e.jpg"],
        description: "Tucson FWD. Extended warranty.",
        sellerNotes: "",
        tags: ["2021", "SUV", "Hyundai"],
        inspection: { overallScore: 9.3, breakdown: [] },
        bidHistory: [],
        amenities: [...COMMON_AMENITIES, "Panoramic Roof"]
    },
    {
        id: "12",
        title: "Toyota Yaris 2021 ATIV X",
        price: 3800000,
        mileage: "48,000 KM",
        year: 2021,
        fuelType: "Petrol",
        transmission: "Automatic",
        location: "Multan",
        rating: 8.6,
        reviews: 20,
        endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
        isLive: true,
        isFeatured: false,
        image: "https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-12-08/req_677/22ddee15-1e32-469b-b20e-9ad4dbb3d98e.jpg", // Using Civic/Sedan placeholder
        images: ["https://car-mandi.s3.ap-south-1.amazonaws.com/inspections/2025-12-08/req_677/22ddee15-1e32-469b-b20e-9ad4dbb3d98e.jpg"],
        description: "Yaris ATIV X 1.5 CVT. Beige interior.",
        sellerNotes: "",
        tags: ["2021", "Yaris", "Sedan"],
        inspection: { overallScore: 8.6, breakdown: [] },
        bidHistory: [],
        amenities: COMMON_AMENITIES
    }
];

export const MOCK_AUCTION_DETAIL = ALL_AUCTIONS[0];

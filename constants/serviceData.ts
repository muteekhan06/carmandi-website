
import { colors } from "@/constants/theme";

export const SERVICE_CARDS = [
    {
        id: "inspect",
        title: "Inspect Your Car",
        description: "Get a comprehensive 200+ point inspection report from our certified mechanics before you buy. Peace of mind guaranteed.",
        buttonText: "Book Now",
        image: "/images/ui-icons/service-inspect.svg",
        backgroundColor: colors.accent.orange,
        buttonTextColor: colors.neutral.black,
    },
    {
        id: "verified",
        title: "Verified Cars, Real Deals,",
        description: "Sell your car quickly and safely to verified buyers. We handle the paperwork and ensure you get the best market price.",
        buttonText: "List Your Car",
        image: "/images/ui-icons/service-verified.svg",
        backgroundColor: colors.primary.light,
        buttonTextColor: colors.neutral.black,
    },
    {
        id: "auction",
        title: "Auction Sheet Verification",
        description: "Get auction sheet verification. Ensure your vehicle's history is genuine before purchase.",
        buttonText: "Verify Now",
        image: "/images/ui-icons/service-auction.svg",
        backgroundColor: "#0B1221", // Custom dark color based on image
        buttonTextColor: colors.neutral.black,
    },
] as const;

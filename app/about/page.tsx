import { Header, Footer } from "@/components";
import { AboutHero, AboutFeatures, AboutGradient } from "@/components/about";

export const metadata = {
    title: "About Us | CarMandi",
    description: "Learn about CarMandi's mission to revolutionize the car buying and selling experience in Pakistan through trust, transparency, and auctions.",
};

export default function AboutPage() {
    return (
        <>
            <main className="relative w-full overflow-hidden bg-white min-h-screen selection:bg-brand-secondary selection:text-white">
                {/* Top Right Gradient Effect - Now spans the whole main container */}
                <AboutGradient />

                <Header transparent={true} />
                <AboutHero />
                <AboutFeatures />
            </main>
            <Footer />
        </>
    );
}

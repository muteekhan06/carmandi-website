import { Header, HeroSection, Footer, BrowseBy } from "@/components";
import { HOME_PAGE_SCHEMA } from "@/constants/seoData";
import dynamic from "next/dynamic";

const FeaturedAuctions = dynamic(() => import("@/components").then(mod => mod.FeaturedAuctions));
const InspectionPromo = dynamic(() => import("@/components").then(mod => mod.InspectionPromo));
const BodyTypeSelector = dynamic(() => import("@/components").then(mod => mod.BodyTypeSelector));
const ServicePromo = dynamic(() => import("@/components").then(mod => mod.ServicePromo));
const ExploreCategories = dynamic(() => import("@/components").then(mod => mod.ExploreCategories));

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-white min-h-[60vh]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(HOME_PAGE_SCHEMA)
          }}
        />

        {/* Hero Section */}
        <div className="pb-4 px-6">
          <HeroSection />
        </div>

        {/* Browse By Section */}
        <div className="px-6">
          <BrowseBy />
        </div>

        {/* Featured Auctions */}
        <div className="pt-4 pb-2 px-6">
          <FeaturedAuctions />
        </div>

        {/* Inspection Promo */}
        <div className="pb-4 px-6">
          <InspectionPromo />
        </div>

        {/* Body Type Selector */}
        <div className="pb-4 px-6">
          <BodyTypeSelector />
        </div>

        {/* Service Promo Cards */}
        <div className="pb-8 px-6">
          <ServicePromo />
        </div>

        {/* Explore Categories */}
        <div className="pb-4 px-6">
          <ExploreCategories />
        </div>
      </main>
      <Footer />
    </>
  );
}

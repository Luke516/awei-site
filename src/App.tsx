import React from "react";
import { FloatingAction } from "./components/FloatingAction";
import { NavBar } from "./components/NavBar";
// import { HeroSection } from './components/HeroSection';
import { HeroSection2 } from "./components/HeroSection2";
import { StatsSection } from "./components/StatsSection";
import { ServicesSection } from "./components/ServicesSection";
// import { RegionGuideSection } from "./components/RegionGuideSection";
import { RegionGuideSectionGold } from "./components/RegionGuideSectionGold";
import { PostSection } from "./components/PostSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream font-sans-tc">
      <NavBar />
      <main className="flex-grow w-full relative">
        {/* <HeroSection /> */}
        <HeroSection2 />
        <StatsSection />
        <ServicesSection />
        {/* <RegionGuideSection /> */}
        <RegionGuideSectionGold />
        <PostSection />
      </main>
      <Footer />
      {/* <FloatingAction /> */}
    </div>
  );
}

export default App;

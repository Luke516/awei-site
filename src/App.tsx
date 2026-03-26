import { NavBar } from "./components/NavBar";
import { HeroSection2 } from "./components/HeroSection2";
import { StatsSection } from "./components/StatsSection";
import { ServicesSection } from "./components/ServicesSection";
import { RegionGuideSectionGold } from "./components/RegionGuideSectionGold";
import { PostSection } from "./components/PostSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col bg-cream font-sans-tc">
      <NavBar />
      <main className="flex-grow w-full relative">
        <HeroSection2 />
        <StatsSection />
        <ServicesSection />
        {/* <RegionGuideSection /> */}
        <RegionGuideSectionGold />
        <PostSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { SectionHeader } from "./SectionHeader";

interface Location {
  id: number;
  label: string;
  x: number; // percentage
  y: number; // percentage
  info: string;
}

const locations: Location[] = [
  {
    id: 1,
    label: "內湖科技園區",
    x: 40,
    y: 30,
    info: "匯聚眾多知名科技企業，就業人口帶動周邊住宅強勁需求，是內湖房市的重點熱區。",
  },
  {
    id: 2,
    label: "內湖五期重劃區",
    x: 60,
    y: 55,
    info: "街廓整齊、綠覆率高，採「住商分離」規劃。擁有極佳的生活品質，深受企業主及高階主管青睞。",
  },
  {
    id: 3,
    label: "南港軟體園區",
    x: 80,
    y: 70,
    info: "三鐵共構交通優勢，加上大型商場進駐，發展潛力無窮，近年來房價屢創新高。",
  },
  {
    id: 4,
    label: "大湖公園",
    x: 35,
    y: 15,
    info: "依山傍水，環境清幽。周邊多為高級住宅與別墅區，是重視休閒生活品質的首選。",
  },
  {
    id: 5,
    label: "四期重劃區",
    x: 50,
    y: 45,
    info: "鄰近三軍總醫院及內湖行政中心，生活機能發展成熟，商圈完善。",
  },
];

export const RegionGuideSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>(locations[0].id);

  const selectedLocation =
    locations.find((loc) => loc.id === selectedId) || locations[0];

  return (
    <section className="new-landing py-20 bg-navy px-6 lg:px-12 relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="new-landing absolute inset-0 bg-pattern-dark pointer-events-none opacity-50"></div>

      <div className="new-landing max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="REGION GUIDE"
          title="內湖・南港 商圈解析"
          subtitle="深入了解各區特色，找到最適合您的生活樣貌"
          centered={true}
          theme="dark"
        />

        <div className="new-landing mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Column: Map */}
          <div className="new-landing w-full lg:w-2/3 relative rounded-sm">
            <div className="new-landing relative w-full bg-transparent">
              <img
                src="/images/region-map.png"
                alt="內湖/南港 地圖"
                className="new-landing w-full object-contain"
              />

              {/* Overlay Dots */}
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedId(loc.id)}
                  className={`new-landing absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group transition-all`}
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                >
                  <div className="new-landing relative">
                    {/* Ping Animation for Active Dot */}
                    {selectedId === loc.id && (
                      <div className="new-landing absolute inset-0 rounded-full bg-gold animate-ping opacity-75"></div>
                    )}
                    <div
                      className={`new-landing relative w-6 h-6 md:w-8 md:h-8 rounded-full border-2 md:border-4 border-white shadow-lg transition-transform duration-300 ${
                        selectedId === loc.id
                          ? "bg-gold scale-110"
                          : "bg-navy hover:bg-gold/80 hover:scale-110"
                      }`}
                    />
                  </div>
                  <div
                    className={`new-landing mt-2 px-3 py-1.5 text-xs md:text-sm font-bold whitespace-nowrap bg-white/95 backdrop-blur-sm shadow-lg rounded-sm transition-opacity duration-300 ${
                      selectedId === loc.id
                        ? "text-navy opacity-100"
                        : "text-muted opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {loc.label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Info Card */}
          <div className="new-landing w-full lg:w-1/3 bg-white/10 backdrop-blur-md p-8 md:p-10 border-t-4 border-gold shadow-xl">
            <h3 className="new-landing text-2xl font-serif-tc text-white font-bold tracking-widest mb-4">
              {selectedLocation.label}
            </h3>
            <div className="new-landing w-12 h-[2px] bg-gold mb-6"></div>
            <p className="new-landing text-gray-300 tracking-widest leading-relaxed text-sm md:text-base">
              {selectedLocation.info}
            </p>
            <div className="new-landing mt-10">
              <button className="new-landing text-white font-bold text-sm tracking-widest border border-white px-6 py-2 hover:bg-gold hover:border-gold transition-colors">
                查看該區物件
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

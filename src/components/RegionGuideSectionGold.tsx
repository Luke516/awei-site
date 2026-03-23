import React, { useState } from "react";
import { SectionHeader } from "./SectionHeader";

interface Location {
  id: number;
  label: string;
  x: number; // percentage
  y: number; // percentage
  info: string;
  videoId?: string; // YouTube video ID
}

const locations: Location[] = [
  {
    id: 1,
    label: "內湖科技園區",
    x: 40,
    y: 30,
    info: "匯聚眾多知名科技企業，就業人口帶動周邊住宅強勁需求，是內湖房市的重點熱區。",
    videoId: "dQw4w9WgXcQ", // Placeholder YouTube ID
  },
  {
    id: 2,
    label: "內湖五期重劃區",
    x: 60,
    y: 55,
    info: "街廓整齊、綠覆率高，採「住商分離」規劃。擁有極佳的生活品質，深受企業主及高階主管青睞。",
    videoId: "LXb3EKWsInQ",
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

export const RegionGuideSectionGold: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>(locations[0].id);

  const selectedLocation =
    locations.find((loc) => loc.id === selectedId) || locations[0];

  return (
    <section className="pt-20 bg-[#F0EBE1] relative overflow-hidden shadow-lg">
      {/* Light Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-light pointer-events-none opacity-50"></div>

      {/* Note: Removed max-w-7xl here to allow full width, added constraints below */}
      <div className="w-full relative z-10 flex flex-col items-center ">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 ">
          <SectionHeader
            eyebrow="REGION GUIDE"
            title="內湖生活圈導覽"
            subtitle="深入了解各區特色，找到最適合您的生活樣貌"
            centered={true}
            theme="light" // Changed to light theme
          />
        </div>

        {/* 
          Container has no max-width, allowing it to stretch, 
          but we constrain the internal components using max-w settings
        */}
        <div className="w-full flex flex-row gap-8 lg:gap-12 items-start justify-center px-4 xl:px-0">
          {/* Left Column: Map - constrained to a reasonable max width */}
          <div className="w-full max-w-7xl relative">
            <div className="relative w-full">
              <img
                src="/images/region-map.png"
                alt="內湖 地圖"
                className="w-full object-contain"
                style={{
                  filter: "drop-shadow(0 0 16px rgba(0, 0, 0, 0.25))",
                }}
              />

              {/* Overlay Dots */}
              {/* {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedId(loc.id)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group transition-all`}
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                >
                  <div className="relative">
                    {selectedId === loc.id && (
                      <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-75"></div>
                    )}
                    <div
                      className={`relative w-6 h-6 md:w-8 md:h-8 rounded-full border-2 md:border-4 border-white shadow-lg transition-transform duration-300 ${
                        selectedId === loc.id
                          ? "bg-gold scale-110"
                          : "bg-navy hover:bg-gold/80 hover:scale-110"
                      }`}
                    />
                  </div>
                  <div
                    className={`mt-2 px-3 py-1.5 text-xs md:text-sm font-bold whitespace-nowrap bg-white/95 backdrop-blur-sm shadow-lg border border-gold/20 rounded-sm transition-opacity duration-300 ${
                      selectedId === loc.id
                        ? "text-navy opacity-100"
                        : "text-muted opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {loc.label}
                  </div>
                </button>
              ))} */}
            </div>
          </div>

          {/* Right Column: Info Card - constrained width */}
          <div className="w-[400px] bg-white p-8 md:p-10 border-t-0 border-navy shadow-xl hidden lg:flex flex-col">
            <h3 className="text-2xl font-serif-tc text-navy font-bold tracking-widest mb-4">
              {selectedLocation.label}
            </h3>
            <div className="w-12 h-[2px] bg-gold mb-6"></div>

            <p className="text-muted tracking-widest leading-relaxed text-sm md:text-base mb-8 flex-grow">
              {selectedLocation.info}
            </p>

            {/* Video Section */}
            {selectedLocation.videoId && (
              <div className="mb-12 w-full max-w-xl">
                <p className="text-xs font-bold text-navy tracking-widest mb-3 border-l-2 border-gold pl-2">
                  區域影音介紹
                </p>
                <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-gray-100">
                  {/* <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedLocation.videoId}?rel=0&modestbranding=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe> */}
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/H9Irf4UVJng?si=ok0pcn3Llu_z3jPf?rel=0&modestbranding=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            <div className="mt-auto">
              <button className="w-full text-white bg-navy font-bold text-sm tracking-widest px-6 py-4 hover:bg-gold transition-colors">
                查看更多資訊
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Video Introduction */}
        <div className="bg-navy pb-20 w-full mx-auto mt-24 flex flex-col md:flex-row gap-8 lg:gap-16 items-center p-8 md:p-12 shadow-sm border border-gold/10">
          <div className="w-full max-w-7xl mx-auto flex flex-row gap-8 lg:gap-16 items-center">
            {/* Video Container */}
            <div className="w-full md:w-1/2 relative aspect-video rounded-sm overflow-hidden bg-gray-100 shadow-md">
              {/* <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/LXb3EKWsInQ?rel=0&modestbranding=1"
                title="內湖區生活環境介紹"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe> */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/qb8knI-rHJg?si=9N3gd4bEIqGNtKiU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <h3 className="text-gold font-bold tracking-widest text-sm mb-3 border-l-2 border-gold pl-3">
                精華影片
              </h3>
              <h4 className="text-2xl md:text-3xl font-serif-tc text-white font-bold tracking-widest leading-relaxed mb-6">
                內湖影片介紹
              </h4>
              <p className="text-white/70 tracking-widest leading-relaxed text-sm md:text-base mb-8">
                我們不只賣房子，更希望帶您認識這片土地。透過實地走訪與影像紀錄，帶您探索內湖的大街小巷，從優質學區、便捷交通到綠意盎然的公園環境，為您呈現最真實的在地生活視角。
              </p>
              <button className="bg-gold border border-navy text-navy font-bold text-sm tracking-widest px-8 py-3 transition-colors">
                觀看更多影片
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

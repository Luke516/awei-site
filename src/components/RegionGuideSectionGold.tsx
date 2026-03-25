import React, { useState, useEffect, useRef } from "react";
import { SectionHeader } from "./SectionHeader";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GridPattern } from "@/components/ui/grid-pattern";
import { XIcon } from "lucide-react";

interface Location {
  id: number;
  label: string;
  x: number; // percentage
  y: number; // percentage
  info: string;
  videoId?: string; // YouTube video ID
  content: LocationContent;
}

interface LocationContent {
  videoUrl: string;
  imageUrl: string;
  description: string;
}

const locations: Location[] = [
  {
    id: 1,
    label: "西湖生活圈",
    x: 21.77,
    y: 14.2,
    info: "西湖生活圈擁有捷運、科技園區、生活機能的便捷。 生活機能有西湖市場、285巷美食街、近大直美麗華、金面山親山步道、仙樹公園、西湖公園",
    videoId: "dQw4w9WgXcQ",
    content: {
      videoUrl: "/videos/placeholder.mp4",
      imageUrl: "/images/placeholder.jpg",
      description:
        "西湖擁有捷運、科技園區、生活機能的便捷。 生活機能有西湖市場、285巷美食街、近大直美麗華、金面山親山步道、仙樹公園、西湖公園",
    },
  },
  {
    id: 2,
    label: "文德港墘生活圈",
    x: 37.6,
    y: 35.6,
    info: "文德港墘生活圈擁有書香氣息濃厚的市容、升學率優良的滿額名校、水景公園。生活機能則有文德市場、 737巷、江南街美食生活圈",
    videoId: "dQw4w9WgXcQ",
    content: {
      videoUrl: "/videos/placeholder.mp4",
      imageUrl: "/images/placeholder.jpg",
      description:
        "市容書香氣息濃厚、麗山為升學率優良的滿額名校，碧湖公園也是台北市唯二有大湖泊的水景公園。生活機能則有文德市場、 737巷、江南街美食生活圈",
    },
  },
  {
    id: 3,
    label: "內湖捷運站",
    x: 52.15,
    y: 21.15,
    info: "內湖捷運站生活發展最為成熟。捷運、綠帶環境、親山步道應有盡有。超過57年歷史的湖光市場與內湖唯一百貨Citylink",
    videoId: "dQw4w9WgXcQ",
    content: {
      videoUrl: "/videos/placeholder.mp4",
      imageUrl: "/images/placeholder.jpg",
      description:
        "生活發展最為成熟。捷運、綠帶環境、親山步道應有盡有。超過57年歷史的湖光市場與內湖唯一百貨Citylink",
    },
  },
  {
    id: 4,
    label: "大湖公園",
    x: 64.15,
    y: 12.1,
    info: "大湖公園最有名的就是它豐富的自然生態，錦帶橋、落雨松、白鷺鷥、蓮花池、大溝溪親水步道等等。錦帶橋曾被票選為全球最美仙景橋之一",
    videoId: "dQw4w9WgXcQ",
    content: {
      videoUrl: "/videos/placeholder.mp4",
      imageUrl: "/images/placeholder.jpg",
      description:
        "大湖公園最有名的就是它豐富的自然生態，錦帶橋、落雨松、白鷺鷥、蓮花池、大溝溪親水步道等等。錦帶橋曾被票選為全球最美仙景橋之一",
    },
  },
  {
    id: 5,
    label: "第八期重劃區",
    x: 88.25,
    y: 30.3,
    info: "生活機能仰賴公車與汽機車，尚無捷運線規劃。有內溝山步道與柿子山、七星生態花園、五分生態濕地。娛樂則有高爾夫、漆彈樂園..",
    videoId: "dQw4w9WgXcQ",
    content: {
      videoUrl: "/videos/placeholder.mp4",
      imageUrl: "/images/placeholder.jpg",
      description:
        "生活機能仰賴公車與汽機車，尚無捷運線規劃。有內溝山步道與柿子山、七星生態花園、五分生態濕地。娛樂則有高爾夫、漆彈樂園..",
    },
  },
  {
    id: 6,
    label: "內湖科技園區",
    x: 27.85,
    y: 47.4,
    info: "在科技園區裡面 只有少數的純住宅，個別分布在瑞光路與陽光街的門牌中。環境給人濃濃的科技感與AI智慧為鄰。",
    videoId: "dQw4w9WgXcQ",
    content: {
      videoUrl: "/videos/placeholder.mp4",
      imageUrl: "/images/placeholder.jpg",
      description:
        "在科技園區裡面 只有少數的純住宅，個別分布在瑞光路與陽光街的門牌中。環境給人濃濃的科技感與AI智慧為鄰。",
    },
  },
  {
    id: 7,
    label: "葫洲第二期重劃區",
    x: 75.8,
    y: 40.4,
    info: "單價因為有南湖、明湖雙明星學區加持所以保值性高。生活機能則有哈拉影城 捷運 康寧醫院 各大銀行。市容給人幽靜又不失機能的感覺",
    videoId: "dQw4w9WgXcQ",
    content: {
      videoUrl: "/videos/placeholder.mp4",
      imageUrl: "/images/placeholder.jpg",
      description:
        "單價因為有南湖、明湖雙明星學區加持所以保值性高。生活機能則有哈拉影城 捷運 康寧醫院 各大銀行。市容給人幽靜又不失機能的感覺",
    },
  },
  {
    id: 8,
    label: "東湖第一期重劃區",
    x: 87.44,
    y: 50.5,
    info: "生活機能則有哈拉影城 五分市場 東湖路113巷美食街，與南港僅一橋之隔也能吃到該區未來利多。像是威秀、微風、lalaport百貨..等",
    videoId: "dQw4w9WgXcQ",
    content: {
      videoUrl: "/videos/placeholder.mp4",
      imageUrl: "/images/placeholder.jpg",
      description:
        "生活機能則有哈拉影城 五分市場 東湖路113巷美食街，與南港僅一橋之隔也能吃到該區未來利多。像是威秀、微風、lalaport百貨..等",
    },
  },
  {
    id: 9,
    label: "第五期重劃區",
    x: 35.3,
    y: 73.7,
    info: "五期為美式生活圈，周邊有COSTCO好市多、大潤發、特力屋及家樂福大賣場與大內科計畫2.0相鄰，台塑、緯創BOT、萬海航運、星宇航空..等利多。",
    videoId: "dQw4w9WgXcQ",
    content: {
      videoUrl: "/videos/placeholder.mp4",
      imageUrl: "/images/placeholder.jpg",
      description:
        "五期為美式生活圈，周邊有COSTCO好市多、大潤發、特力屋及家樂福大賣場與大內科計畫2.0相鄰，台塑、緯創BOT、萬海航運、星宇航空..等利多。",
    },
  },
  {
    id: 10,
    label: "第四期重劃區",
    x: 53.7,
    y: 60.4,
    info: "第四期重劃區為靠近科學園區與三軍總醫院的行政中心區塊，民權東路六段往民權大橋可直達松山機場。交通則仰賴公車、汽機車、未來民生汐止雙軌捷運線還需15年以上的時程。",
    videoId: "dQw4w9WgXcQ",
    content: {
      videoUrl: "/videos/placeholder.mp4",
      imageUrl: "/images/placeholder.jpg",
      description:
        "第四期重劃區為靠近科學園區與三軍總醫院的行政中心區塊，民權東路六段往民權大橋可直達松山機場。交通則仰賴公車、汽機車、未來民生汐止雙軌捷運線還需15年以上的時程。",
    },
  },
  {
    id: 11,
    label: "葫洲第三期重劃區",
    x: 69.3,
    y: 57.6,
    info: "單價因為有南湖、明湖雙明星學區加持所以保值性高。生活機能則有哈拉影城 捷運 康寧醫院 各大銀行。市容給人幽靜又不失機能的感覺",
    videoId: "dQw4w9WgXcQ",
    content: {
      videoUrl: "/videos/placeholder.mp4",
      imageUrl: "/images/placeholder.jpg",
      description:
        "單價因為有南湖、明湖雙明星學區加持所以保值性高。生活機能則有哈拉影城 捷運 康寧醫院 各大銀行。市容給人幽靜又不失機能的感覺",
    },
  },
];

// Sub-component: renders the content block shared by info card and dialog
const LocationContentCard: React.FC<{ location: Location }> = ({
  location,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Video placeholder */}
      <div className="w-full aspect-video bg-gray-100 rounded-sm overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center bg-navy/5">
          <span className="text-muted text-xs tracking-widest">
            影片預留位置
          </span>
        </div>
        <video
          src={location.content.videoUrl}
          className="relative w-full h-full object-cover"
          controls
          playsInline
        />
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-cream rounded-sm overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-muted text-xs tracking-widest">
            區域照片預留位置
          </span>
        </div>
        <img
          src={location.content.imageUrl}
          alt={location.label}
          className="relative w-full h-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      {/* Short description */}
      <p className="text-muted tracking-widest leading-relaxed text-sm">
        {location.content.description}
      </p>
    </div>
  );
};

export const RegionGuideSectionGold: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  // On lg+ screens, auto-select the first location for the inline info card
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        setSelectedId((prev) => prev ?? locations[0].id);
      }
    };
    handleChange(mq);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // Reveal secondary video section on scroll
  useEffect(() => {
    const el = videoSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVideoVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const selectedLocation =
    locations.find((loc) => loc.id === selectedId) ?? null;

  const handleDotClick = (id: number, isDesktop: boolean) => {
    setSelectedId(id);
    if (!isDesktop) {
      setDialogOpen(true);
    }
  };

  return (
    <section className="pt-20 bg-cream relative overflow-hidden shadow-lg">
      {/* Grid pattern background */}
      <GridPattern
        width={48}
        height={48}
        strokeDasharray={"16 8"}
        className="fill-gold/10 stroke-gold/20 [mask-image:linear-gradient(to_right,white_0%,transparent_50%,white_100%)]"
      />
      {/* Light dot overlay on top of grid */}
      <div className="absolute inset-0 bg-pattern-light pointer-events-none opacity-50"></div>

      <div className="w-full relative z-10 flex flex-col items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="REGION GUIDE"
            title="內湖生活圈導覽"
            subtitle="深入了解各區特色，找到最適合您的生活樣貌"
            centered={true}
            theme="light"
          />
        </div>

        {/* ── Mobile layout (< md): simplified map + button list ── */}
        <div className="md:hidden w-full px-4 mb-8">
          <div className="relative w-full mb-6">
            <img
              src="/images/simplified-map.png"
              alt="內湖 簡易地圖"
              className="w-full object-contain rounded-sm"
              style={{ filter: "drop-shadow(0 0 12px rgba(0, 0, 0, 0.2))" }}
            />

            {/* Numbered overlay dots on the simplified map */}
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => handleDotClick(loc.id, false)}
                style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold transition-colors duration-200 ${
                  selectedId === loc.id ? "bg-navy" : "bg-gold"
                }`}
              >
                {loc.id}
              </button>
            ))}
          </div>

          {/* Button grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => handleDotClick(loc.id, false)}
                className={`px-2 py-2 flex items-center gap-3 text-xs font-bold tracking-widest border transition-colors text-left ${
                  selectedId === loc.id
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-navy border-gold/30 hover:border-navy hover:bg-navy/5"
                }`}
              >
                <div
                  className={`w-9 h-9 m-0 flex items-center justify-center text-md pb-0.5 pl-0.5 ${
                    selectedId === loc.id
                      ? "bg-navy text-white"
                      : "bg-gold text-white"
                  }`}
                >
                  {loc.id}
                </div>
                <span className="m-0 p-0 text-sm">{loc.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Desktop/Tablet layout (md+): full map with dots + info card ── */}
        <div className="hidden md:flex w-full flex-row gap-2 lg:gap-2 items-start justify-center px-4 lg:px-0">
          {/* Left Column: Map */}
          <div className="w-full lg:w-[75%] max-w-7xl relative">
            <div className="relative w-full">
              <img
                src="/images/region-map.png"
                alt="內湖 地圖"
                className="w-full object-contain"
                style={{ filter: "drop-shadow(0 0 16px rgba(0, 0, 0, 0.25))" }}
              />

              {/* Overlay Dots */}
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => {
                    // On lg+, just update selected inline; below lg, open dialog
                    const isDesktop = window.matchMedia(
                      "(min-width: 1024px)"
                    ).matches;
                    handleDotClick(loc.id, isDesktop);
                  }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group transition-all"
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                >
                  <div
                    className={`mb-2 px-3 py-1.5 text-xs md:text-sm font-bold whitespace-nowrap bg-white/95 backdrop-blur-sm shadow-lg border border-gold/20 rounded-sm transition-opacity duration-300 ${
                      selectedId === loc.id
                        ? "text-navy opacity-100"
                        : "text-muted opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {loc.label}
                  </div>
                  <div className="relative w-17 h-17">
                    {/* Ping / ripple effect */}
                    {selectedId === loc.id && (
                      <div className="absolute inset-0 w-17 h-17 rounded-full bg-gold/40 animate-ping opacity-75"></div>
                    )}
                    <div
                      className={`relative w-full h-full rounded-full border-2 md:border-4 border-white shadow-lg transition-transform duration-300 ${
                        selectedId === loc.id
                          ? "bg-navy scale-110"
                          : "bg-gold hover:bg-white hover:scale-110"
                      }`}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xs p-2">
                      {loc.label}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Info Card — desktop only (lg+) */}
          <div className="hidden lg:flex flex flex-row items-center justify-end relative max-w-[26%]">
            <div
              className={`bg-white border-t-0 border-navy shadow-xl hidden lg:flex flex-col overflow-hidden transition-all duration-500 ease-in-out ${
                selectedId !== null
                  ? "w-[400px] opacity-100 p-6"
                  : "w-0 opacity-0 p-0"
              }`}
            >
              {selectedLocation ? (
                <div
                  key={selectedId}
                  className="animate-in slide-in-from-right-4 fade-in-0 duration-300 flex flex-col relative"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-0 right-0 p-1 text-muted hover:text-navy transition-colors"
                    aria-label="關閉"
                  >
                    <XIcon size={16} />
                  </button>

                  <h3 className="text-2xl font-serif-tc text-navy font-bold tracking-widest mb-4 pr-6">
                    {selectedLocation.label}
                  </h3>
                  <div className="w-12 h-[2px] bg-gold mb-6"></div>

                  {/* <p className="text-muted tracking-widest leading-relaxed text-sm md:text-base mb-6">
                  {selectedLocation.info}
                </p> */}

                  <LocationContentCard location={selectedLocation} />

                  {/* <div className="mt-6">
                  <button className="w-full text-white bg-navy font-bold text-sm tracking-widest px-6 py-4 hover:bg-gold transition-colors">
                    查看更多資訊
                  </button>
                </div> */}
                </div>
              ) : (
                <div className="flex items-center justify-center h-40 text-muted text-sm tracking-widest">
                  請選擇一個生活圈
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Dialog — shown on < lg (tablet and mobile) ── */}
        <div className="lg:hidden">
          <Dialog
            open={dialogOpen}
            onOpenChange={(open) => {
              setDialogOpen(open);
              if (!open) setSelectedId(null);
            }}
          >
            <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto data-[state=open]:slide-in-from-bottom-4 bg-white">
              {selectedLocation && (
                <>
                  <DialogHeader>
                    <DialogTitle className="font-serif-tc text-navy tracking-widest text-xl">
                      {selectedLocation.label}
                    </DialogTitle>
                    <div className="w-10 h-[2px] bg-gold mt-1"></div>
                  </DialogHeader>

                  <p className="text-muted tracking-widest leading-relaxed text-sm">
                    {selectedLocation.info}
                  </p>

                  <LocationContentCard location={selectedLocation} />

                  {/* <button className="w-full text-white bg-navy font-bold text-sm tracking-widest px-6 py-3 hover:bg-gold transition-colors mt-2">
                    查看更多資訊
                  </button> */}
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>

        {/* Secondary Video Introduction */}
        <div className="bg-navy pb-20 w-full mx-auto mt-24 flex flex-col md:flex-row gap-8 lg:gap-16 items-center p-8 md:p-12 shadow-sm border border-gold/10">
          <div
            ref={videoSectionRef}
            className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-16 items-center"
          >
            {/* Video Container — slides in from the left */}
            <div
              className={`w-full md:w-1/2 relative aspect-video rounded-sm overflow-hidden bg-gray-100 shadow-md transition-all duration-700 ease-out ${
                isVideoVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
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

            {/* Text Content — slides in from the right, staggered */}
            <div
              className={`w-full md:w-1/2 flex flex-col items-start text-left transition-all duration-700 ease-out delay-200 ${
                isVideoVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <h3 className="text-gold font-bold tracking-widest text-sm mb-3 border-l-2 border-gold pl-3">
                精華影片
              </h3>
              <h4 className="text-2xl md:text-3xl font-serif-tc text-white font-bold tracking-widest leading-relaxed mb-6">
                內湖影片介紹
              </h4>
              <p className="text-white/70 tracking-widest leading-relaxed text-sm md:text-base mb-8">
                我親自走訪每個大內湖區塊， 這裡的生活步調不像是信義區如此緊湊，
                但綠意滿載和湖景宜人的內湖，讓人介紹時會湧出滿滿的榮譽感。
                <br />
                因為我們內湖有的優點，別的地段可不一定會有~
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

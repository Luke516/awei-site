import React, { useState } from "react";
import { SectionHeader } from "./SectionHeader";

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "專業堅持",
      title: "專任委託服務計畫",
      description:
        "一般委託最常見的問題是：不同仲介互相砍價、資訊混亂，最後守不住你的價格。專任委託能確保阿偉作為您的唯一對外窗口，守護您的價格門檻，並讓阿偉投入 100% 的行銷資源，將您的物件打造成市場上的唯一焦點。",
      image:
        "https://twa0987817916916.admin.metabiz.tw/storage/twa0987817916916/2024/02/LINE_ALBUM_240219_29-e1709004651415.jpg",
      primaryAction: {
        label: "了解更多",
        href: "/#",
      },
      secondaryAction: {
        label: "賣方成交案例",
        href: "/#",
      },
    },
    {
      id: 1,
      label: "深耕內湖",
      title: "在地專家 精準眼光",
      description:
        "在內湖區長期深耕所累積的經驗與眼光，讓阿偉幫助你了解各個區域與生活圈的特色。並且即時掌握市場行情，為你找到最適合的物件與房產規劃。",
      image:
        "https://twa0987817916916.admin.metabiz.tw/storage/twa0987817916916/2024/03/327912_0.jpg",
      primaryAction: {
        label: "買方成交案例",
        href: "/#",
      },
      secondaryAction: {
        label: "了解內湖生活圈",
        href: "/#",
      },
    },
    {
      id: 2,
      label: "地產知識",
      title: "買賣知識與法規解析",
      description:
        "買賣房屋涉及繁雜的流程與稅務問題。我們提供完整的地產知識分享，從履約保證、稅務規劃到合約審閱，全程為您的交易安全把關。",
      image:
        "https://twa0987817916916.admin.metabiz.tw/storage/twa0987817916916/2025/07/HOU01.jpg",
      primaryAction: {
        label: "了解更多",
        href: "/#",
      },
      secondaryAction: {
        label: "文章列表",
        href: "/#",
      },
    },
  ];

  const nextTab = () => setActiveTab((prev) => (prev + 1) % tabs.length);
  const prevTab = () =>
    setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);

  return (
    <section className="new-landing py-20 bg-cream relative overflow-hidden">
      {/* Radial gradient ripple background */}
      <div
        className="new-landing absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 600px 600px at 50% 20%, rgba(248,246,240,1) 0%,  rgba(248,246,240,1) 70%, rgba(240,235,225,1) 100%)",
            "radial-gradient(ellipse 800px 800px at 50% 20%, rgba(248,246,240,1) 0%,  rgba(248,246,240,1) 85%, rgba(240,235,225,1) 100%)",
          ].join(", "),
        }}
      />
      {/* Pattern Overlay */}
      <div className="new-landing absolute inset-0 bg-pattern-light pointer-events-none opacity-50"></div>

      <div className="new-landing max-w-7xl mx-auto px-6 lg:px-12 relative z-20 mb-8 lg:mb-12">
        <SectionHeader
          eyebrow="OUR SERVICES"
          title="服務特色"
          subtitle="在房地產領域的多年經驗，讓阿偉能為您提供最專業的服務"
          centered={true}
        />
      </div>

      {/* Mobile Layout (< lg) */}
      <div className="new-landing lg:hidden max-w-7xl mx-auto px-6 relative z-10">
        <div className="new-landing bg-white shadow-sm flex flex-col overflow-hidden">
          {/* Image */}
          <div className="new-landing w-full h-64 relative h-[280px] md:h-[420px]">
            <div
              className="new-landing absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${tabs[activeTab].image})`,
              }}
            />
            {/* Gradient Mask Overlay to blend with text section below */}
            <div className="new-landing absolute inset-0 bg-gradient-to-b from-transparent to-white/90"></div>
          </div>

          {/* Text Content and Tabs */}
          <div className="new-landing w-full p-6 flex flex-col z-10 bg-white relative -mt-8">
            {/* Tab Navigation */}
            <div className="new-landing flex mb-6 border-b border-gold/20 overflow-x-auto whitespace-nowrap scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`new-landing px-4 py-3 text-sm font-bold tracking-widest transition-colors ${
                    activeTab === tab.id
                      ? "text-navy border-b-2 border-navy"
                      : "text-muted hover:text-navy"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="new-landing flex flex-col items-start text-left min-h-[200px]">
              <h3 className="new-landing text-xl font-serif-tc text-navy font-bold tracking-widest mb-4">
                {tabs[activeTab].title}
              </h3>
              <p className="new-landing text-muted tracking-widest leading-relaxed text-sm mb-6">
                {tabs[activeTab].description}
              </p>
              <div className="new-landing flex flex-row gap-3">
                {tabs[activeTab].primaryAction && (
                  <button className="new-landing mt-auto bg-navy text-white px-6 py-2 text-sm tracking-widest font-bold hover:bg-navy/90 transition-colors">
                    {tabs[activeTab].primaryAction.label}
                  </button>
                )}
                {tabs[activeTab].secondaryAction && (
                  <button className="new-landing mt-auto text-navy border border-navy px-6 py-2 text-sm tracking-widest font-bold hover:bg-navy hover:text-white transition-colors">
                    {tabs[activeTab].secondaryAction.label}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout (>= lg) */}
      <div className="new-landing hidden lg:flex relative w-full h-[550px] items-center justify-center z-10">
        {/* Left Toggle Button */}
        <button
          onClick={prevTab}
          className="new-landing absolute left-8 xl:left-16 z-30 w-14 h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-white text-navy transition-all hover:scale-110 border border-gold/20"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* Carousel Track */}
        <div className="new-landing relative w-full max-w-7xl h-full flex items-center justify-center">
          {tabs.map((tab, index) => {
            const isActive = index === activeTab;
            const isPrev =
              index === (activeTab - 1 + tabs.length) % tabs.length;
            const isNext = index === (activeTab + 1) % tabs.length;

            let translate = "translate-x-0";
            let scale = "scale-100";
            let zIndex = "z-20";
            let opacity = "opacity-100";
            let mask = "none";
            let pointerEvents = "pointer-events-auto";

            if (isPrev) {
              translate = "-translate-x-[70%] xl:-translate-x-[80%]";
              scale = "scale-[0.85]";
              zIndex = "z-10";
              opacity = "opacity-30";
              // Fade out the left edge of the prev card
              mask =
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%)";
              pointerEvents = "pointer-events-none";
            } else if (isNext) {
              translate = "translate-x-[70%] xl:translate-x-[80%]";
              scale = "scale-[0.85]";
              zIndex = "z-10";
              opacity = "opacity-30";
              // Fade out the right edge of the next card
              mask =
                "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%)";
              pointerEvents = "pointer-events-none";
            } else if (!isActive) {
              opacity = "opacity-0";
              pointerEvents = "pointer-events-none";
            }

            return (
              <div
                key={tab.id}
                className={`new-landing absolute w-full max-w-[80%] transition-all duration-700 ease-in-out ${translate} ${scale} ${zIndex} ${opacity} ${pointerEvents}`}
                style={{ WebkitMaskImage: mask, maskImage: mask }}
              >
                <div className="new-landing bg-white shadow-2xl flex min-h-[450px] overflow-hidden">
                  {/* Image Area */}
                  <div className="new-landing w-[45%] relative">
                    <div
                      className="new-landing absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${tab.image})`,
                        WebkitMaskImage:
                          "linear-gradient(to right, black 20%, transparent 100%)",
                        maskImage:
                          "linear-gradient(to right, black 20%, transparent 100%)",
                      }}
                    />
                  </div>
                  {/* Text Content Area */}
                  <div className="new-landing w-[55%] p-10 xl:p-14 flex flex-col items-start text-left bg-white relative">
                    <div className="new-landing text-gold font-bold tracking-widest text-sm mb-4 border-b border-gold/30 pb-2">
                      {tab.label}
                    </div>
                    <h3 className="new-landing text-2xl xl:text-3xl font-serif-tc text-navy font-bold tracking-widest mb-6 leading-relaxed">
                      {tab.title}
                    </h3>
                    <p className="new-landing text-muted tracking-widest leading-relaxed text-sm xl:text-base mb-8">
                      {tab.description}
                    </p>
                    <div className="new-landing flex grow" />
                    <div className="new-landing flex flex-row gap-3">
                      {tab.primaryAction && (
                        <button className="new-landing mt-auto bg-navy text-white px-8 py-3 text-sm tracking-widest font-bold hover:bg-navy/90 transition-colors shadow-md">
                          {tab.primaryAction.label}
                        </button>
                      )}
                      {tab.secondaryAction && (
                        <button className="new-landing mt-auto text-navy border border-navy px-8 py-3 text-sm tracking-widest font-bold hover:bg-navy hover:text-white transition-colors">
                          {tab.secondaryAction.label}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Toggle Button */}
        <button
          onClick={nextTab}
          className="new-landing absolute right-8 xl:right-16 z-30 w-14 h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-white text-navy transition-all hover:scale-110 border border-gold/20"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

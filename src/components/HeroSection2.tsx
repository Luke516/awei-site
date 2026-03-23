import React from "react";
import { ParallelogramBlock } from "./ParallelogramBlock";

export const HeroSection2: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex bg-[#F8F6F0] overflow-hidden pt-20 pb-0">
      {/* 1. Background Pattern / Subtle Base */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
        style={{ backgroundImage: 'url("/images/landing-bg-large.jpg")' }}
      ></div>
      {/* Grid Pattern overlay (optional to match reference abstract lines) */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          transform:
            "perspective(500px) rotateX(60deg) scale(2) translateY(-100px)",
        }}
      ></div>

      {/* 2. Parallelogram Decorative Elements (Right Side Background) */}
      <div className="absolute left-[10vw] top-0 w-[88vw] lg:min-w-[1150px] max-w-[2080px] h-full z-10 hidden md:flex flex-row items-end justify-end gap-4">
        {/* Block 1: Far right building image */}
        <ParallelogramBlock
          imgSrc="/images/landing-bg-large.jpg"
          // className="relative w-[320px] h-[85%] -right-[10%] top-[5%] opacity-90 z-10"
          className="relative w-[14vw] h-[75%] mb-12 hidden lg:flex"
        />

        {/* Block 2: Middle Solid Color (Brand Gold) */}
        <ParallelogramBlock
          bgColor="bg-gold"
          // className="relative w-[280px] h-[110%] right-[10%] top-[10%] shadow-2xl z-20"
          className="relative w-[20vw] min-w-[360px] h-[90%]"
        >
          {/* Vertical Text inside the block */}
          {/* <div className="absolute right-8 top-1/2 -translate-y-1/2 origin-center -rotate-90">
            <span className="text-white font-en-sans font-bold tracking-[0.4em] text-sm uppercase whitespace-nowrap drop-shadow-md">
              Patrick Huang
            </span>
          </div> */}
        </ParallelogramBlock>

        {/* Block 3: Left building image (Smaller) */}
        <ParallelogramBlock
          // imgSrc="/images/15-dc3ab990-5b3d-4268-ba3a-e3dcceff3424.png"
          bgColor="bg-navy/30"
          // className="relative w-[260px] h-[70%] right-[32%] top-[15%] opacity-100 z-10"
          className="relative w-[16vw] h-[80%] mb-20 hidden lg:flex"
        />
      </div>

      {/* 3. Foreground Content */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between flex-1">
        {/* Left Column: Text Block */}
        <div className="flex flex-col text-charcoal w-full md:w-[45%] pt-10 md:pt-0 pb-32">
          <div className="mb-6 animate-fade-in-up">
            <h3 className="text-gold font-en-serif tracking-[0.3em] text-sm md:text-base mb-2">
              R E A L &nbsp; E S T A T E
            </h3>
            <p className="font-serif-tc font-bold text-xl md:text-3xl tracking-widest text-navy">
              內湖五期超新星
            </p>
          </div>

          <div className="mb-8 relative animate-fade-in-up delay-100">
            <h4 className="text-muted font-en-serif tracking-[0.2em] text-xs md:text-sm mb-3">
              P R O J E C T &nbsp; M A N A G E R
            </h4>
            <h1 className="font-serif-tc font-black text-5xl md:text-7xl tracking-widest mb-4 text-navy">
              黃阿偉
            </h1>
            <p className="text-muted font-sans-tc text-sm md:text-base tracking-widest">
              內湖五期店 專案經理
            </p>

            {/* Divider line */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-[2px] h-[80%] bg-gold/50 hidden md:block"></div>
          </div>

          <div className="mb-8 animate-fade-in-up delay-200">
            <p className="text-navy font-en-serif italic tracking-widest text-sm md:text-lg mb-6">
              深耕內湖多年，掌握最即時的市場脈動與成交行情。不論是買屋還是賣屋，阿偉都能為您提供最專業的在地分析，讓您的決策更有保障。
            </p>
          </div>

          {/* CTA & Contact Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-fade-in-up delay-300 relative z-40">
            {/* Call to Action Button */}
            <button className="bg-navy text-white px-8 py-4 font-sans-tc font-medium tracking-widest hover:bg-navy/90 transition-colors shadow-lg flex items-center gap-2 group cursor-pointer">
              立即預約
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>

            {/* Phone Number */}
            <div className="flex items-center gap-3 text-navy">
              <div className="w-10 h-10 rounded-full border border-navy flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <span className="font-en-sans font-bold text-lg tracking-wider">
                0987-817-916
              </span>
            </div>
          </div>

          <div className="mt-8 animate-fade-in-up delay-200">
            <p className="text-gold font-en-serif italic tracking-widest text-sm md:text-lg mb-6">
              Your Vision. Our Expertise.
            </p>
          </div>
        </div>

        {/* Right Column: Portrait */}
        <div className="absolute right-[5%] bottom-0 w-full md:w-[45%] h-[85%] md:h-[95%] max-h-[900px] flex items-end justify-center md:justify-end z-40 animate-fade-in-up delay-400">
          <img
            src="/images/awei-portrait.png"
            alt="黃阿偉 Portrait"
            className="h-full object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] pointer-events-none"
          />
        </div>
      </div>

      {/* Bottom Dark Bar with Custom User Styled Skew Elements */}
      <div className="absolute bottom-0 left-0 w-full z-50">
        {/* User's custom skewed info box */}
        <div
          className="absolute bottom-8 min-h-15 left-[-10%] w-[50%] bg-navy flex items-center justify-end px-6 lg:px-12 gap-4 py-3"
          style={{ transform: "skewX(30deg)" }}
        >
          <div
            className="text-gold font-serif-tc font-medium tracking-[0.2em] text-sm md:text-lg border-r-2 border-gold/50 pr-4"
            style={{ transform: "skewX(-30deg)" }}
          >
            專營項目
          </div>
          <div
            className="text-gold font-serif-tc font-medium tracking-[0.2em] text-sm md:text-lg p-0 m-0"
            style={{ transform: "skewX(-30deg)" }}
          >
            店面•商辦•豪宅•廠房
          </div>
        </div>

        {/* The thin bottom bar */}
        <div className="w-full h-8 bg-navy flex items-center justify-end px-6 lg:px-12 relative z-50">
          <div className="text-gold font-sans-tc font-medium tracking-[0.2em] text-sm md:text-base hidden">
            專營：店面 / 商辦 / 豪宅 / 廠房
          </div>
        </div>
      </div>
    </section>
  );
};

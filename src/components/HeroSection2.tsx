import React from "react";
import { ParallelogramBlock } from "./ParallelogramBlock";
import { DotPattern } from "./ui/dot-pattern";

export const HeroSection2: React.FC = () => {
  return (
    <section className="new-landing relative w-full lg:min-h-screen flex bg-[#F8F6F0] overflow-hidden pt-20 pb-0">
      {/* 1. Background Pattern / Subtle Base */}
      <div
        className="new-landing absolute inset-0 bg-cover bg-center z-0 opacity-40"
        style={{
          backgroundImage:
            'url("https://twa0987817916916.admin.metabiz.tw/storage/twa0987817916916/2026/03/Generated-Image-March-23-2026-6_02AM-scaled.jpg")',
        }}
      ></div>
      {/* Grid Pattern overlay (optional to match reference abstract lines) */}
      <div
        className="new-landing absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(9, 8, 8, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          transform:
            "perspective(500px) rotateX(60deg) scale(2) translateY(-100px)",
        }}
      ></div>

      {/* 2. Parallelogram Decorative Elements (Right Side Background) */}
      <div className="new-landing absolute left-[240px] md:left-[10vw] top-0 w-[75vw] lg:w-[88vw] lg:min-w-[1080px] max-w-[2080px] h-full z-10 flex sm:flex flex-row items-end justify-end gap-6">
        {/* Block 1: Far right building image */}
        <ParallelogramBlock
          imgSrcs={[
            "https://twa0987817916916.admin.metabiz.tw/storage/twa0987817916916/2026/03/629317310_122161097768716733_4558949553130919170_n.jpg",
            // "https://twa0987817916916.admin.metabiz.tw/storage/twa0987817916916/2026/03/songshan-minshengyanga-buyerdeal-101-2.png",
            // "https://twa0987817916916.admin.metabiz.tw/storage/twa0987817916916/2026/03/516874619_122138737058716733_64206572609991295_n-e1774571806431.jpg",
            // "https://twa0987817916916.admin.metabiz.tw/storage/twa0987817916916/2026/03/帶看房子-e1774576269129.jpg",
          ]}
          imageTexts={[
            <div className="new-landing absolute top-2 left-[1%] hidden md:block w-full flex flex-col items-start justify-start">
              {/* <p className="new-landing text-right text-gold font-en-sans font-bold tracking-[0.4em] text-lg md:text-xl uppercase whitespace-nowrap drop-shadow-md">
                熱心公益
              </p>
              <p className="new-landing text-right text-gold font-en-sans font-bold tracking-[0.4em] text-lg md:text-xl uppercase whitespace-nowrap drop-shadow-md pr-3">
                回饋社區
              </p> */}
            </div>,
            <div className="new-landing absolute top-2 left-[1%] hidden md:block w-full flex flex-col items-start justify-start">
              {/* <p className="new-landing text-right text-gold font-en-sans font-bold tracking-[0.4em] text-lg md:text-xl uppercase whitespace-nowrap drop-shadow-md">
                專業服務
              </p>
              <p className="new-landing text-right text-gold font-en-sans font-bold tracking-[0.4em] text-lg md:text-xl uppercase whitespace-nowrap drop-shadow-md pr-3">
                值得信賴
              </p> */}
            </div>,
            <div className="new-landing absolute top-2 left-[1%] hidden md:block w-full flex flex-col items-start justify-start">
              {/* <p className="new-landing text-right text-gold font-en-sans font-bold tracking-[0.4em] text-lg md:text-xl uppercase whitespace-nowrap drop-shadow-md">
                專業服務
              </p>
              <p className="new-landing text-right text-gold font-en-sans font-bold tracking-[0.4em] text-lg md:text-xl uppercase whitespace-nowrap drop-shadow-md pr-3">
                熱心公益
              </p> */}
            </div>,
          ]}
          slideFrom="bottom"
          className="new-landing relative w-[14vw] h-[75%] max-w-[320px] mb-12 hidden lg:flex"
        ></ParallelogramBlock>

        {/* Block 2: Middle Solid Color (Brand Gold) */}
        <ParallelogramBlock
          imgSrc="/images/landing-bg-large.jpg"
          bgColor="bg-gradient-to-b from-gray-100 to-gold"
          className="new-landing relative w-[12vw] md:w-[20vw] min-w-[300px] md:min-w-[360px] h-[90%]"
        >
          {/* Vertical Text inside the block */}

          <p className="new-landing absolute hidden md:block top-4 left-[42%] lg:left-[48%] text-gold font-en-sans font-bold tracking-[0.4em] text-lg md:text-xl uppercase whitespace-nowrap drop-shadow-md">
            Patrick Huang
          </p>
          <DotPattern
            className="new-landing absolute inset-0 opacity-50 transform-[skewX(-18deg)] bg-gold/40"
            style={{
              color: "rgba(0,0,0,0.3)",
            }}
          ></DotPattern>
        </ParallelogramBlock>

        {/* Block 3: Left building image (Smaller) */}
        <ParallelogramBlock
          imgSrcs={[
            "https://twa0987817916916.admin.metabiz.tw/storage/twa0987817916916/2026/03/nangang-musongu-ceiling-effect-2.png",
            // "https://twa0987817916916.admin.metabiz.tw/storage/twa0987817916916/2026/03/忠泰恆美.jpg",
          ]}
          slideFrom="top"
          bgColor="bg-navy/20"
          className="new-landing relative w-[16vw] h-[80%] mb-15 ml-2 hidden lg:flex"
        />
      </div>

      {/* 3. Foreground Content */}
      <div className="new-landing relative z-30 w-full max-w-xl md:max-w-4xl lg:max-w-[1320px] mx-auto lg:px-6 flex flex-row items-center justify-between flex-1 md:mt-0">
        {/* Left Column: Text Block */}
        <div className="new-landing flex flex-col text-charcoal w-full md:w-[45%] pt-10 xl:pt-12 pb-24 md:pb-32 pl-4 md:pl-6">
          <div className="new-landing mb-6 animate-fade-in-up">
            <h3 className="new-landing text-gold font-en-serif tracking-[0.3em] text-sm md:text-base mb-2">
              R E A L &nbsp; E S T A T E
            </h3>
            <p className="new-landing font-serif-tc font-bold text-xl md:text-3xl tracking-widest text-navy">
              內湖五期超新星
            </p>
          </div>

          <div className="new-landing mb-8 relative animate-fade-in-up delay-100">
            <h4 className="new-landing text-muted font-en-serif tracking-[0.2em] text-xs md:text-sm mb-3">
              P R O J E C T &nbsp; M A N A G E R
            </h4>
            <h1 className="new-landing font-serif-tc font-black text-6xl md:text-7xl xl:text-[80px] tracking-widest mb-4 text-navy">
              黃阿偉
            </h1>
            <p className="new-landing text-muted font-sans-tc text-sm md:text-base tracking-widest">
              內湖五期店 專案經理
            </p>

            {/* Divider line */}
            <div className="new-landing absolute -left-6 top-1/2 -translate-y-1/2 w-[2px] h-[80%] bg-gold/50 hidden md:block"></div>
          </div>

          <div className="new-landing mb-8 animate-fade-in-up delay-200 max-w-md hidden xl:block">
            <p className="new-landing text-navy font-en-serif italic tracking-widest text-sm md:text-lg mb-6">
              深耕內湖多年，掌握最即時的市場脈動與成交行情。不論是買屋還是賣屋，阿偉都能為您提供最專業的在地分析，讓您的決策更有保障。
            </p>
          </div>

          {/* CTA & Contact Section */}
          <div className="new-landing flex flex-row gap-5">
            <div className="new-landing flex flex-col lg:flex-col xl:flex-col items-start lg:items-center gap-6 animate-fade-in-up delay-300 relative z-40">
              {/* Call to Action Button */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://line.me/ti/p/nW4QI48Udq"
                className="new-landing bg-navy text-white w-full justify-center px-8 py-4 font-sans-tc font-medium tracking-widest hover:bg-navy/90 transition-colors shadow-lg flex items-center gap-2 group cursor-pointer"
              >
                立即預約
                <svg
                  className="new-landing w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </a>

              {/* Phone Number */}
              <div className="new-landing flex items-center gap-3 text-navy">
                {/* <div className="new-landing w-6 md:w-10 h-6 md:h-10 rounded-full border-0 md:border border-navy flex items-center justify-center">
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
                </div> */}
                <div className="new-landing w-8 md:w-12 h-8 md:h-12 rounded-full border-0 md:border border-navy flex items-center justify-center">
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span className="new-landing font-en-sans font-bold text-lg xl:text-[1.5rem] tracking-wider">
                  0987-817-916
                </span>
              </div>
            </div>

            {/* QR code */}
            <div className="new-landing flex items-start hidden lg:flex">
              {/* <h5>掃描LINE ID加入好友</h5> */}
              <img
                src="https://twa0987817916916.admin.metabiz.tw/storage/twa0987817916916/2026/03/LINEID2.png"
                alt="QR code"
                className="new-landing w-32 h-32 xl:w-36 xl:h-36"
              />
            </div>
          </div>

          <div className="new-landing mt-8 xl:mt-12 animate-fade-in-up delay-200 flex flex-col md:flex-row gap-2  mb-6">
            <p className="new-landing text-gold font-en-serif italic tracking-widest text-sm md:text-lg">
              Your Vision.
            </p>
            <p className="new-landing text-gold font-en-serif italic tracking-widest text-sm md:text-lg">
              Our Expertise.
            </p>
          </div>
        </div>

        {/* Right Column: Portrait */}
        <div className="new-landing absolute right-0 md:right-[5%] bottom-0 w-full md:w-[45%] h-[85%] md:h-[95%] max-w-[50vw] max-h-[500px] md:max-h-[1100px] flex items-end justify-end z-40 animate-fade-in-up delay-400">
          <img
            src="https://twa0987817916916.admin.metabiz.tw/storage/twa0987817916916/2026/03/awei-hero-portrait-2.png"
            alt="黃阿偉 Portrait"
            className="new-landing h-[90%] object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] pointer-events-none mr-0 md:mr-24 lg:mr-20 xl:mr-0"
            style={{
              height: "90%",
            }}
          />
        </div>
      </div>

      {/* Bottom Dark Bar with Custom User Styled Skew Elements */}
      <div className="new-landing absolute bottom-0 left-0 w-full z-50">
        {/* User's custom skewed info box */}
        <div
          className="new-landing absolute bg-navy bottom-4 md:bottom-8 min-h-15 left-[-32px] lg:left-[-10%] min-w-[400px] md:w-[500px] lg:w-[50%] px-6 lg:px-12 gap-3 md:gap-4 py-3 flex items-center justify-center md:justify-end"
          style={{ transform: "skewX(30deg)" }}
        >
          <div
            className="new-landing hidden md:block text-gold font-serif-tc font-medium tracking-[0.2em] text-sm md:text-lg border-r-2 border-gold/50 pr-3 md:pr-4"
            style={{ transform: "skewX(-30deg)" }}
          >
            專營項目
          </div>
          <div
            className="new-landing block md:hidden text-gold font-serif-tc font-medium tracking-[0.2em] text-sm md:text-lg border-r-2 border-gold/50 pr-3 md:pr-4"
            style={{ transform: "skewX(-30deg)" }}
          >
            專營
          </div>
          <div
            className="new-landing text-gold font-serif-tc font-medium tracking-[0.2em] text-sm md:text-lg p-0 m-0"
            style={{ transform: "skewX(-30deg)" }}
          >
            店面•商辦•豪宅•廠房
          </div>
        </div>

        {/* The thin bottom bar */}
        <div className="new-landing w-ful h-4 md:h-8 bg-navy flex items-center justify-end px-6 lg:px-12 relative z-50">
          <div className="new-landing text-gold font-sans-tc font-medium tracking-[0.2em] text-sm md:text-base hidden"></div>
        </div>
      </div>
    </section>
  );
};

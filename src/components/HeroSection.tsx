import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      {/* 1. Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("/images/landing-bg-large.jpg")' }}
      ></div>

      {/* 2. Overlay with Navy color + 70% opacity and repeating diagonal lines */}
      <div
        className="absolute inset-0 z-10 opacity-80"
        style={{
          backgroundColor: "#1D263B",
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 2px, transparent 2px, transparent 8px)",
        }}
      ></div>

      {/* 3. Foreground Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between h-full">
        {/* Left Column: Text Block */}
        <div className="flex flex-col text-white w-full md:w-1/2 pt-20 md:pt-0">
          <div className="mb-6">
            <h3 className="text-gold font-en-serif tracking-[0.3em] text-sm md:text-base mb-2">
              R E A L &nbsp; E S T A T E
            </h3>
            <p className="font-serif-tc font-bold text-xl md:text-3xl tracking-widest text-cream">
              內湖五期超新星
            </p>
          </div>

          <div className="mb-10 relative">
            <h4 className="text-gray-300 font-en-serif tracking-[0.2em] text-xs md:text-sm mb-3">
              P R O J E C T &nbsp; M A N A G E R
            </h4>
            <h1 className="font-serif-tc font-black text-5xl md:text-7xl tracking-widest mb-4 text-white">
              黃阿偉
            </h1>
            <p className="text-gray-300 font-sans-tc text-sm md:text-base tracking-widest">
              內湖五期店 專案經理
            </p>

            {/* Divider line */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-[2px] h-full bg-gold/50 hidden md:block"></div>
          </div>

          <div className="mb-8">
            <p className="text-gold font-en-serif italic tracking-widest text-sm md:text-lg">
              Your Vision. Our Expertise.
            </p>
          </div>

          <div className="flex items-center gap-4 text-cream">
            <span className="font-en-sans font-bold text-lg md:text-xl tracking-wider">
              0987-817-916
            </span>
            <div className="w-8 h-8 rounded-full border border-cream flex items-center justify-center">
              <svg
                width="14"
                height="14"
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
          </div>
        </div>

        {/* Right Column: Portrait */}
        <div className="w-full md:w-1/2 h-full flex items-end justify-center md:justify-end relative mt-10 md:mt-0">
          <img
            src="/images/awei-portrait.png"
            alt="黃阿偉 Portrait"
            className="h-3/4 md:h-[90%] object-contain object-bottom drop-shadow-2xl z-20"
          />
          {/* Decorative element behind portrait */}
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-gold/30 z-10 hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

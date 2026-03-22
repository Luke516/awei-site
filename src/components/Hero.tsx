import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] lg:h-[80vh] flex items-center bg-cream overflow-hidden">
      {/* Background Image with Gradient Mask */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover bg-left lg:bg-center opacity-80"
          style={{ 
            backgroundImage: 'url("/images/banner-visual.jpg")',
            // If the image already has text, using it as a background might show double text.
            // Ideally we'd have separate assets, but we'll use a mask to fade out the right side where text goes if possible,
            // or just use it as a full cover if it's the exact banner.
            // Assuming we are recreating the text in HTML, we will mask the right side.
            maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0))',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0))'
          }}
        />
      </div>

      {/* Decorative Gold Elements */}
      <div className="absolute top-8 left-8 w-24 h-24 border-t border-l border-gold/40 z-10 hidden md:block"></div>
      <div className="absolute bottom-8 right-8 w-24 h-24 border-b border-r border-gold/40 z-10 hidden md:block"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 flex justify-end">
        <div className="text-right flex flex-col items-end">
          
          <div className="mb-8">
            <h3 className="text-gold font-en-serif tracking-[0.3em] text-sm md:text-base mb-2">R E A L &nbsp; E S T A T E</h3>
            <p className="text-navy font-serif-tc font-bold text-xl md:text-3xl tracking-widest">內湖五期超新星</p>
          </div>

          <div className="mb-12 relative">
            <h4 className="text-muted font-en-serif tracking-[0.2em] text-xs md:text-sm mb-3">P R O J E C T &nbsp; M A N A G E R</h4>
            <h1 className="text-navy font-serif-tc font-black text-5xl md:text-7xl tracking-widest mb-4">黃阿偉</h1>
            <p className="text-muted font-sans-tc text-sm md:text-base tracking-widest">內湖五期店 專案經理</p>
            
            {/* Divider line */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-[2px] h-full bg-gold/50 hidden md:block"></div>
          </div>

          <div>
            <p className="text-gold font-en-serif italic tracking-widest text-sm md:text-lg">Your Vision. Our Expertise.</p>
          </div>

          <div className="mt-8 flex items-center gap-4 text-navy">
            <span className="font-en-sans font-bold text-lg md:text-xl tracking-wider">0987-817-916</span>
            <div className="w-8 h-8 rounded-full border border-navy flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

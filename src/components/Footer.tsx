import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="new-landing bg-navy text-white py-12 border-t border-gold/20">
      <div className="new-landing max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo or Name */}
        <div className="new-landing flex items-center gap-3">
          <div className="new-landing w-10 h-10 rounded-full bg-white flex items-center justify-center text-navy font-serif-tc font-bold text-xl">
            偉
          </div>
          <span className="new-landing text-xl font-bold tracking-widest font-serif-tc">
            內湖黃阿偉
          </span>
        </div>

        {/* Center: Copyright */}
        <div className="new-landing text-gray-400 text-xs tracking-widest text-center">
          <p>
            &copy; {new Date().getFullYear()} 黃阿偉 房產專業服務. All rights
            reserved.
          </p>
        </div>

        {/* Right: Contact */}
        <div className="new-landing flex flex-col items-center md:items-end text-sm text-gray-300 tracking-widest">
          <p className="new-landing mb-1">內湖五期店 專案經理</p>
          <a
            href="tel:0987817916"
            className="new-landing text-gold font-en-sans font-bold hover:text-white transition-colors text-lg"
          >
            0987-817-916
          </a>
        </div>
      </div>
    </footer>
  );
};

import React from "react";

export const NavBar: React.FC = () => {
  return (
    <header className="new-landing absolute top-0 w-full z-50 bg-transparent">
      <div className="new-landing max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="new-landing flex-shrink-0">
          <a
            href="#"
            className="relative xl:absolute xl:top-4 new-landing block md:hidden lg:block"
          >
            <img
              // src="/images/logo.png"
              src="https://twa0987817916916.admin.metabiz.tw/storage/twa0987817916916/2024/04/-27-e1713322381335.png"
              alt="黃阿偉 Logo"
              className="new-landing h-16 xl:h-[15vh] xl:min-h-24 xl:max-h-[140px] w-auto drop-shadow-md block md:block"
            />
          </a>
        </div>

        {/* Right: Navigation Links */}
        <nav className="new-landing hidden md:flex items-center gap-8">
          {/* <a
            href="#"
            className="new-landing text-sm font-medium text-navy hover:text-gold transition-colors drop-shadow-sm"
          >
            Home
          </a> */}
          <a
            href="#"
            className="new-landing text-xs lg:text-sm font-medium text-navy hover:text-gold transition-colors drop-shadow-sm"
          >
            阿偉簡介
          </a>
          <a
            href="#"
            className="new-landing text-xs lg:text-sm font-medium text-navy hover:text-gold transition-colors drop-shadow-sm"
          >
            專任委託服務
          </a>
          <a
            href="#"
            className="new-landing text-xs lg:text-sm font-medium text-navy hover:text-gold transition-colors drop-shadow-sm"
          >
            阿偉私房指南
          </a>
          <a
            href="#"
            className="new-landing text-xs lg:text-sm font-medium text-navy hover:text-gold transition-colors drop-shadow-sm"
          >
            全部待售房屋
          </a>
          <a
            href="#"
            className="new-landing text-xs lg:text-sm font-medium text-navy hover:text-gold transition-colors drop-shadow-sm"
          >
            成交案例
          </a>
          {/* <a
            href="#"
            className="new-landing text-xs lg:text-sm font-medium text-navy hover:text-gold transition-colors drop-shadow-sm"
          >
            房產資訊
          </a> */}
          <a
            href="#"
            className="new-landing text-sm font-medium text-navy border border-navy px-4 py-2 hover:bg-navy hover:text-white transition-colors bg-white/50 backdrop-blur-sm"
          >
            聯絡我
          </a>
        </nav>

        {/* Mobile menu button (placeholder) */}
        <div className="new-landing md:hidden flex items-center">
          <button className="new-landing text-navy">
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
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

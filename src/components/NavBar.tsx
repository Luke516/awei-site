import React from 'react';

export const NavBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-gold/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <a href="#">
            <img src="/images/logo.png" alt="黃阿偉 Logo" className="h-10 w-auto" />
          </a>
        </div>

        {/* Right: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-charcoal hover:text-navy transition-colors">Home</a>
          <a href="#" className="text-sm font-medium text-charcoal hover:text-navy transition-colors">專任委託服務</a>
          <a href="#" className="text-sm font-medium text-charcoal hover:text-navy transition-colors">成交案例</a>
          <a href="#" className="text-sm font-medium text-navy border border-navy px-4 py-2 hover:bg-navy hover:text-white transition-colors">聯絡我</a>
        </nav>

        {/* Mobile menu button (placeholder) */}
        <div className="md:hidden flex items-center">
          <button className="text-navy">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

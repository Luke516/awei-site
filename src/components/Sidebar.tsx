import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 flex-shrink-0 sticky top-0 h-screen overflow-y-auto hidden lg:flex flex-col border-r border-gold/20 p-6 bg-cream">
      {/* Logo / Header */}
      <div className="flex items-center gap-3 mb-12">
        <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-serif-tc font-bold text-xl">
          偉
        </div>
        <h1 className="text-xl font-bold tracking-widest text-navy">內湖黃阿偉</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-6 flex-grow">
        <div className="mb-6">
          <h2 className="text-sm font-bold text-gold border-l-2 border-gold pl-3 mb-4">選單導覽</h2>
          <ul className="space-y-3 pl-3 text-muted text-sm">
            <li><a href="#" className="hover:text-navy transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-navy transition-colors">團隊簡介</a></li>
            <li><a href="#" className="text-navy font-bold">專任委託服務</a></li>
            <li><a href="#" className="hover:text-navy transition-colors">全部待售房屋</a></li>
            <li><a href="#" className="hover:text-navy transition-colors">成交案例</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-gold border-l-2 border-gold pl-3 mb-4">文章分類</h2>
          <ul className="space-y-3 pl-3 text-muted text-sm">
            <li><a href="#" className="hover:text-navy transition-colors">房產新聞</a></li>
            <li><a href="#" className="hover:text-navy transition-colors">買賣法規</a></li>
            <li><a href="#" className="hover:text-navy transition-colors">必讀知識</a></li>
            <li><a href="#" className="hover:text-navy transition-colors">買方成交案例</a></li>
            <li><a href="#" className="hover:text-navy transition-colors">賣方成交案例</a></li>
          </ul>
        </div>
      </nav>

      {/* Agent Photo (Bottom) */}
      <div className="mt-auto pt-8 flex flex-col items-center text-center">
        <p className="text-xs text-muted mb-2 font-en-serif tracking-widest">YOUR VISION. OUR EXPERTISE.</p>
        <div className="font-serif-tc text-navy">
          <p className="font-bold text-lg tracking-widest">黃阿偉</p>
          <p className="text-xs text-muted mt-1">內湖五期店 專案經理</p>
        </div>
      </div>
    </aside>
  );
};

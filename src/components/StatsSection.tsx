import React from 'react';
import { SectionHeader } from './SectionHeader';

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-navy py-20 px-6 lg:px-12 border-t border-gold/20 relative">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-dark pointer-events-none opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <SectionHeader 
          eyebrow="PERFORMANCE"
          title="專業實績證明"
          subtitle="用數據說話，選擇阿偉，就是選擇最有效率的成交保證。"
          centered={true}
          theme="dark"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x md:divide-gold/20 mt-12">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-4xl md:text-5xl font-serif-tc font-bold text-gold mb-2">3億+</span>
            <span className="text-white text-sm md:text-base tracking-widest">年度</span>
            <span className="text-white text-sm md:text-base tracking-widest">總銷額</span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-4xl md:text-5xl font-serif-tc font-bold text-gold mb-2">44.46%</span>
            <span className="text-white text-sm md:text-base tracking-widest">寬悅團隊 591</span>
            <span className="text-white text-sm md:text-base tracking-widest">行銷覆蓋率（內湖區）</span>
            <span className="text-gray-400 text-xs mt-2">截至 2026 年 2 月</span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-4xl md:text-5xl font-serif-tc font-bold text-gold mb-2">6,888萬</span>
            <span className="text-white text-sm md:text-base tracking-widest">個人指標</span>
            <span className="text-white text-sm md:text-base tracking-widest">操盤案例</span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-4xl md:text-5xl font-serif-tc font-bold text-gold mb-2">4年</span>
            <span className="text-white text-sm md:text-base tracking-widest">連續獲獎</span>
            <span className="text-white text-sm md:text-base tracking-widest">成交實績</span>
          </div>

        </div>
      </div>
    </section>
  );
};

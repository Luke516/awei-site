import React from 'react';
import { SectionHeader } from './SectionHeader';

export const PostSection: React.FC = () => {
  const posts = [
    {
      id: 1,
      category: '房產新聞',
      title: '2026 內湖房市展望：捷運東環段動工帶來的利多',
      excerpt: '隨著捷運東環段的正式動工，內湖交通壅塞問題有望迎來解方，周邊房市也開始出現新一波的買氣...',
      date: '2026.03.15',
    },
    {
      id: 2,
      category: '買賣法規',
      title: '房地合一稅2.0 賣屋節稅必看指南',
      excerpt: '賣屋到底要繳多少稅？如何善用重購退稅優惠？阿偉為您整理了最完整的房地合一稅節稅攻略...',
      date: '2026.02.28',
    },
    {
      id: 3,
      category: '成交案例',
      title: '【專任委託】內湖五期遠雄賦邑，上市一週火速成交！',
      excerpt: '透過精準的定價策略與全方位的行銷曝光，成功在短短一週內為屋主媒合到合適的買方...',
      date: '2026.02.10',
    },
    {
      id: 4,
      category: '必讀知識',
      title: '買房第一步：如何評估自己的購屋預算？',
      excerpt: '從自備款、房貸成數到裝潢費用，帶您一步步試算，避免買房後被沉重的財務壓力壓得喘不過氣...',
      date: '2026.01.25',
    },
    {
      id: 5,
      category: '區域解析',
      title: '南港經貿園區：下一個信義計畫區？',
      excerpt: '各大金控、科技業總部紛紛進駐南港，帶動商辦與住宅雙雙起飛。南港的房市潛力究竟在哪裡？',
      date: '2026.01.12',
    },
    {
      id: 6,
      category: '成交案例',
      title: '圓夢首購族：協助年輕夫妻買下內湖三房美廈',
      excerpt: '看房看了半年都找不到喜歡的？阿偉透過獨家開發物件，為這對年輕夫妻找到理想的家...',
      date: '2025.12.30',
    },
  ];

  return (
    <section className="py-20 bg-cream px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          eyebrow="LATEST INSIGHTS"
          title="房產知識與最新動態"
          subtitle="掌握市場先機，做出最明智的房產決策"
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white border border-gold/10 shadow-sm hover:shadow-md transition-shadow group flex flex-col"
            >
              {/* Placeholder Image Block */}
              <div className="w-full h-48 bg-gray-200 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-muted text-sm">
                  [ Image Placeholder ]
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gold tracking-widest border border-gold px-2 py-1">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted font-en-sans">
                    {post.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-serif-tc font-bold text-navy mb-3 group-hover:text-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-sm text-muted tracking-widest leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <a href="#" className="inline-flex items-center text-sm font-bold text-navy group-hover:text-gold transition-colors">
                    閱讀全文
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-transparent text-navy font-bold text-sm tracking-widest border-2 border-navy px-8 py-3 hover:bg-navy hover:text-white transition-colors">
            查看更多文章
          </button>
        </div>
      </div>
    </section>
  );
};

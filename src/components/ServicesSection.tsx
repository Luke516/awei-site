import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: '專業堅持',
      title: '專任委託服務計畫',
      description: '一般委託最常見的問題是：不同仲介互相砍價、資訊混亂，最後守不住你的價格。專任委託能確保阿偉作為您的唯一對外窗口，守護您的價格門檻，並讓阿偉投入 100% 的行銷資源，將您的物件打造成市場上的唯一焦點。',
    },
    {
      id: 1,
      label: '深耕內湖',
      title: '在地專家 精準眼光',
      description: '深耕內湖、南港區多年，掌握最即時的市場脈動與成交行情。不論是買屋還是賣屋，阿偉都能為您提供最專業的在地分析，讓您的決策更有保障。',
    },
    {
      id: 2,
      label: '地產知識',
      title: '買賣知識與法規解析',
      description: '買賣房屋涉及繁雜的流程與稅務問題。我們提供完整的地產知識分享，從履約保證、稅務規劃到合約審閱，全程為您的交易安全把關。',
    }
  ];

  return (
    <section className="py-20 bg-cream px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          eyebrow="OUR SERVICES"
          title="為您打造專屬的房產服務"
          centered={true}
        />

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border-b border-gold/20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm md:text-base font-bold tracking-widest transition-colors ${
                  activeTab === tab.id 
                    ? 'text-navy border-b-2 border-navy' 
                    : 'text-muted hover:text-navy'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Panel */}
        <div className="bg-white p-8 md:p-12 shadow-sm border border-gold/10 flex flex-col md:flex-row gap-8 items-center min-h-[400px]">
          {/* Image Placeholder */}
          <div className="w-full md:w-1/2 h-64 md:h-80 bg-gray-200 flex items-center justify-center text-muted">
            [ Placeholder Image for {tabs[activeTab].label} ]
          </div>
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <h3 className="text-2xl md:text-3xl font-serif-tc text-navy font-bold tracking-widest mb-6">
              {tabs[activeTab].title}
            </h3>
            <p className="text-muted tracking-widest leading-relaxed text-sm md:text-base mb-8">
              {tabs[activeTab].description}
            </p>
            <button className="bg-navy text-white px-8 py-3 text-sm tracking-widest font-bold hover:bg-navy/90 transition-colors">
              了解更多
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

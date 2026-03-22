import React from 'react';

export const Services: React.FC = () => {
  const steps = [
    { num: 1, title: "委託售屋", desc: "只要走好第一步" },
    { num: 2, title: "團隊推廣", desc: "五大聯賣啟動" },
    { num: 3, title: "買方出現", desc: "精準媒合" },
    { num: 4, title: "恭賀成交", desc: "價格守住" },
    { num: 5, title: "交屋完成", desc: "代書全程陪同" },
  ];

  return (
    <section className="flex flex-col">
      {/* Top Navy Section */}
      <div className="bg-navy text-white px-6 py-16 lg:px-24 lg:py-24 text-center lg:text-left flex flex-col items-center lg:items-start relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-gold text-sm tracking-widest mb-4">內湖・南港房產專家・黃阿偉</p>
          <h2 className="text-4xl lg:text-5xl font-serif-tc font-bold tracking-widest mb-8 text-white">
            專任委託服務計畫
          </h2>
          <p className="text-gray-300 tracking-widest leading-relaxed text-sm lg:text-base border-l-2 border-gold pl-4 max-w-2xl text-left">
            「用行銷視野與AI科技，為您的愛屋策劃一場完美的成交。」
          </p>
        </div>
      </div>

      {/* Bottom Light Section with Timeline */}
      <div className="bg-cream px-6 py-12 lg:px-24">
        <h3 className="text-navy font-bold tracking-widest text-sm mb-8 border-l-2 border-navy pl-3">服務流程</h3>
        
        {/* Timeline Container */}
        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-5xl mx-auto gap-8 md:gap-0">
          
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-6 left-10 right-10 h-[1px] bg-gold/30 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-row md:flex-col items-center gap-4 md:gap-3 w-full md:w-auto">
              
              {/* Step Circle */}
              <div className="w-12 h-12 rounded-full bg-navy text-gold flex items-center justify-center font-en-serif font-bold text-lg border-4 border-cream shadow-sm">
                {step.num}
              </div>
              
              {/* Vertical line for mobile */}
              {index !== steps.length - 1 && (
                <div className="absolute top-12 left-6 bottom-[-2rem] w-[1px] bg-gold/30 md:hidden z-0"></div>
              )}

              {/* Step Text */}
              <div className="flex flex-col md:items-center text-left md:text-center mt-1 md:mt-0">
                <h4 className="text-navy font-bold tracking-widest">{step.title}</h4>
                <p className="text-muted text-xs tracking-wider mt-1">{step.desc}</p>
              </div>

            </div>
          ))}
        </div>

        {/* Content Box below timeline */}
        <div className="max-w-4xl mx-auto mt-20 bg-white p-8 md:p-12 shadow-sm border border-gold/10">
          <h3 className="text-gold text-sm tracking-widest mb-4 border-b border-gold/20 pb-2 inline-block">核心價值</h3>
          <h2 className="text-2xl md:text-3xl font-serif-tc text-navy font-bold tracking-widest leading-relaxed mb-6">
            為何「專任委託」<br className="md:hidden" />
            是資產價值最大化的唯一途徑？
          </h2>
          <p className="text-muted tracking-widest leading-relaxed text-sm md:text-base mb-6">
            一般委託最常見的問題是：不同仲介互相砍價、資訊混亂，最後守不住你的價格。
          </p>
          <div className="bg-cream/50 p-6 border-l-4 border-gold">
            <p className="text-navy tracking-widest leading-relaxed text-sm md:text-base font-medium">
              「專任委託能確保阿偉作為您的唯一對外窗口，守護您的價格門檻，並讓阿偉投入 100% 的行銷資源，將您的物件打造成市場上的唯一焦點。」
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

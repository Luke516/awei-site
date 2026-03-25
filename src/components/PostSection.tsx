import React from "react";
import { SectionHeader } from "./SectionHeader";

export const PostSection: React.FC = () => {
  const posts = [
    {
      id: 1,
      category: "房產資訊",
      title: "央行給糖吃？看懂 2026 第二戶 6 成房貸微解封",
      excerpt:
        "央行在 2026 年第一季理監事會議上正式宣布，自 3 月 20 日起，將自然人第二戶購屋貸款成數從 5 成微幅放寬到 6 成。這個政策一落地，我手機裡的客戶群組瞬間炸鍋。買方心驚膽戰，怕現在進場是接最後一棒，滿腦子想著「房市是不是要崩盤了」；賣方群組則是歡聲雷動，覺得「政策終於鬆綁，我的房子可以繼續死守甚至加價賣」。",
      date: "2026.03.20",
      image:
        "https://www.0987817916.tw/storage/twa0987817916916/2026/03/central-bank-2026-second-home-loan-60-percent-3.png",
    },
    {
      id: 2,
      category: "買方知識",
      title: "台北市買小宅指南：破解 15 坪空間迷思，拒當買房小白",
      excerpt:
        "得房率、公設比、銀行核貸潛規則、老屋翻新陷阱——第一線顧問帶你看清小宅市場最真實的底層邏輯。",
      date: "2026.03.12",
      image:
        "https://twa0987817916916.admin.metabiz.tw/storage/twa0987817916916/2026/03/taipei-small-apartment-guide-15ping-1.png",
    },
    {
      id: 3,
      category: "買方成交案例",
      title: "【筑丰美涵】一個環節沒顧好，賠掉的就是幾百萬的重購退稅",
      excerpt:
        "看了 5 年房、遇到限貸荒、對決 KPMG 老前輩從貸款、稅務、議價到換屋——一場五千萬的資產保衛戰",
      date: "2026.03.12",
      image:
        "https://twa0987817916916.admin.metabiz.tw/storage/twa0987817916916/2026/03/nangang-zhufeng-meihan-buyerdeal-1.png",
    },
    {
      id: 4,
      category: "買方成交案例",
      title:
        "【民生漾】屋主裝病不簽約？戳破房市最瞎謊言，這10萬斡旋賠償我們拿得理直氣壯",
      excerpt:
        "從內湖綠之苑的違約風波、討回10萬違約金到松山民生漾每坪101萬的世紀撿漏——一場從被坑到贏家的完整實戰",
      date: "2026.03.09",
      image:
        "https://twa0987817916916.admin.metabiz.tw/storage/twa0987817916916/2026/03/songshan-minshengyanga-buyerdeal-101-3.jpg",
    },
    {
      id: 5,
      category: "賣方成交案例",
      title: "【華固I-PARK】拒絕千萬交易的勇氣：當買方開始情緒勒索，我選擇掀桌",
      excerpt:
        "帶看超過40組、歷經9個月的消磨戰，遇上無底線的買方——我當場退斡旋，反而換來屋主的信任與更好的成交",
      date: "2026.03.08",
      image:
        "https://twa0987817916916.admin.metabiz.tw/storage/twa0987817916916/2026/03/nangang-huagu-ipark-refuse-deal-2.png",
    },
    {
      id: 6,
      category: "賣方成交案例",
      title: "【擎天森林】沒上架就賣掉！48小時內成功出售的千萬獲利公式",
      excerpt:
        "限貸令風暴中，零廣告、只給兩天、單價要破120萬——這場不可能的任務，我們做到了",
      date: "2026.03.07",
      image:
        "https://twa0987817916916.admin.metabiz.tw/storage/twa0987817916916/2026/03/nangang-qingtian-48hr-sold-3.jpg",
    },
  ];

  return (
    <section
      className="py-20 bg-cream px-6 lg:px-12 relative"
      style={{
        backgroundImage: "url('/images/main-bg.jpg')",
        backgroundSize: "cover",
      }}
    >
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-light pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
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
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
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
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-bold text-navy group-hover:text-gold transition-colors"
                  >
                    閱讀全文
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
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

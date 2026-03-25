import React, { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";

const stats = [
  {
    value: "3億+",
    labels: ["年度", "總銷額"],
  },
  {
    value: "44.46%",
    labels: ["寬悅團隊 591", "行銷覆蓋率（內湖區）"],
    footnote: "截至 2026 年 2 月",
  },
  {
    value: "6,888萬",
    labels: ["個人指標", "操盤案例"],
  },
  {
    value: "4年",
    labels: ["連續獲獎", "成交實績"],
  },
];

export const StatsSection: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(stats.length).fill(false)
  );
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          stats.forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 200);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-navy py-20 px-6 lg:px-12 border-t border-gold/20 relative">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-dark pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10" ref={sectionRef}>
        <SectionHeader
          eyebrow="PERFORMANCE"
          title="專業實績證明"
          subtitle="用數據說話，選擇阿偉，就是選擇最有效率的成交保證"
          centered={true}
          theme="dark"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x md:divide-gold/20 mt-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center px-4 transition-all duration-700 ease-out"
              style={{
                opacity: visibleItems[i] ? 1 : 0,
                transform: visibleItems[i]
                  ? "translateY(0)"
                  : "translateY(24px)",
              }}
            >
              <span className="text-4xl lg:text-5xl font-serif-tc font-bold text-gold mb-2">
                {stat.value}
              </span>
              {stat.labels.map((label, j) => (
                <span
                  key={j}
                  className="text-white text-sm md:text-base tracking-widest"
                >
                  {label}
                </span>
              ))}
              {stat.footnote && (
                <span className="text-gray-400 text-xs mt-2">
                  {stat.footnote}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

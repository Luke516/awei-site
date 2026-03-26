import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme?: "light" | "dark";
}

// const DecorativeLine: React.FC = () => {
//   return <div className="new-landing w-full h-[1px] bg-gold mb-4 opacity-50"></div>;
// };

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = false,
  theme = "light",
}) => {
  const isDark = theme === "dark";

  return (
    <div
      className={`new-landing mb-12 ${
        centered ? "text-center flex flex-col items-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <div className="new-landing flex flex-row items-center justify-center w-[60%] mx-auto gap-5">
          <h3
            className={`new-landing text-gold text-md tracking-widest mb-4 w-auto whitespace-nowrap ${
              !centered && "border-l-2 border-gold pl-3 inline-block"
            }`}
          >
            {eyebrow}
          </h3>
        </div>
      )}
      <h2
        className={`new-landing text-3xl md:text-4xl lg:text-5xl font-serif-tc font-bold tracking-widest leading-relaxed mb-6 ${
          isDark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`new-landing tracking-widest leading-relaxed text-sm md:text-base max-w-2xl ${
            isDark ? "text-gray-300" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

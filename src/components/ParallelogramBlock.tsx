import React from "react";

interface ParallelogramBlockProps {
  /** Optional background image URL */
  imgSrc?: string;
  /** Background color if no image is provided */
  bgColor?: string;
  /** Additional Tailwind classes for positioning and sizing */
  className?: string;
  /** Children elements inside the block */
  children?: React.ReactNode;
}

export const ParallelogramBlock: React.FC<ParallelogramBlockProps> = ({
  imgSrc,
  bgColor = "bg-cream",
  className = "",
  children,
}) => {
  return (
    <div
      className={`absolute shadow-xl ${className}`}
      style={{
        // Using skew to perfectly match the reference image's true parallelogram shape
        transform: "skewX(-18deg)",
        backgroundColor: "#fff", // White border base
        padding: "6px", // Thickness of the white border
      }}
    >
      <div
        className={`w-full h-full overflow-hidden ${
          imgSrc ? "bg-cover bg-center" : bgColor
        }`}
        style={imgSrc ? { backgroundImage: `url(${imgSrc})` } : undefined}
      >
        {/* Un-skew the inner content so text/images don't look distorted */}
        <div
          className="w-full h-full relative"
          style={{ transform: "skewX(18deg)" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

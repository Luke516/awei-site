import React, { useState, useEffect } from "react";

interface ParallelogramBlockProps {
  /** Optional background image URL */
  imgSrc?: string;
  /** Optional list of background image URLs for a slideshow */
  imgSrcs?: string[];
  /** Direction to slide from when entering */
  slideFrom?: "top" | "bottom";
  /** Background color if no image is provided */
  bgColor?: string;
  /** Additional Tailwind classes for positioning and sizing */
  className?: string;
  /** Children elements inside the block */
  children?: React.ReactNode;
}

export const ParallelogramBlock: React.FC<ParallelogramBlockProps> = ({
  imgSrc,
  imgSrcs,
  slideFrom,
  bgColor = "bg-cream",
  className = "",
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use imgSrcs if provided, fallback to array with single imgSrc if provided
  const images =
    imgSrcs && imgSrcs.length > 0 ? imgSrcs : imgSrc ? [imgSrc] : [];

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000); // Change image every 4 seconds
      return () => clearInterval(interval);
    }
  }, [images.length]);

  const animationClass =
    slideFrom === "bottom"
      ? "animate-parallelogram-slide-in-bottom delay-2000"
      : slideFrom === "top"
      ? "animate-parallelogram-slide-in-top delay-2000"
      : "";

  const blockContent = (
    <div
      className={`${className} ${animationClass}`}
      style={{
        // Using skew to perfectly match the reference image's true parallelogram shape
        transform: "skewX(-18deg)",
        backgroundColor: "#fff", // White border base
        padding: "6px", // Thickness of the white border
      }}
    >
      <div
        className={`w-full h-full overflow-hidden relative flex items-center justify-center ${bgColor}`}
        style={{}}
      >
        {/* Render all images for crossfade effect */}
        {images.map((src, index) => (
          // <div
          //   key={src}
          //   className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          //   style={{
          //     backgroundImage: `url(${src})`,
          //     opacity: index === currentIndex ? 1 : 0,
          //   }}
          // />
          <img
            key={src}
            src={src}
            alt="Parallelogram Block"
            className="absolute min-w-[50vw] margin-auto h-full object-cover transition-opacity duration-1500 ease-in-out"
            style={{
              transform: "skewX(18deg)",
              opacity: index === currentIndex ? 0.25 : 0,
            }}
          />
        ))}

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

  return blockContent;
};

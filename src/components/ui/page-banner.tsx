import { ReactNode } from "react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  children?: ReactNode;
  height?: "sm" | "md" | "lg";
}

export function PageBanner({ 
  title, 
  subtitle, 
  backgroundImage, 
  children,
  height = "md" 
}: PageBannerProps) {
  const heightClasses = {
    sm: "h-64",
    md: "h-80 lg:h-96",
    lg: "h-96 lg:h-[28rem]"
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl opacity-90 mb-6 text-shadow">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
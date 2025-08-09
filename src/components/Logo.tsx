import { Brain } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10", 
    lg: "w-12 h-12"
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeClasses[size]} bg-gradient-primary rounded-lg flex items-center justify-center`}>
        <Brain className={`${iconSizes[size]} text-white`} />
      </div>
      {showText && (
        <div>
          <h1 className={`font-bold ${textSizes[size]} text-foreground`}>Vijnaana</h1>
          <p className="text-xs text-muted-foreground -mt-1">Innovations</p>
        </div>
      )}
    </div>
  );
};

export default Logo;
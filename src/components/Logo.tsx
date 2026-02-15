import React from "react";

const USER_LOGO_URL = "OTH.png";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => (
  <img
    src={USER_LOGO_URL}
    alt="Optima Tech Hub"
    className={`${className} object-contain`}
  />
);

export default Logo;

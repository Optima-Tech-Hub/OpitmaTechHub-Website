import React from "react";
import logo from "../assets/OTH.png"; // adjust path if needed

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => (
  <img
    src={logo}
    alt="Optima Tech Hub"
    className={`${className} object-contain`}
  />
);

export default Logo;

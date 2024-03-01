import React from "react";
// import styles from "@/app/ui/home.module.css";
import { ArrowIcon } from "./icons/arrowIcon";

interface ButtonProps {
    children: React.ReactNode;
    type: 'primary' | 'ghost' | 'transparent';
}
  
const Button: React.FC<ButtonProps> = ({ children, type }) => {
    const baseClasses = "font-500 py-3 px-6"; // Customize base styles

    const typeClass = {
      primary: `bg-black text-white`,
      ghost: "bg-transparent text-black border border-black",
      transparent: "text-black",
    }[type] || "";

    const iconColor = type === "primary" ? "white" : "black";

    const combinedClasses = `${baseClasses} ${typeClass}`;

    return (
        <button className={`${combinedClasses} flex items-center`} type="button">
            {children}
            <ArrowIcon color={iconColor} className="ml-2"/>
        </button>
    )
}

export default Button;
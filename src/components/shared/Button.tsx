import React from "react";
// import styles from "@/app/ui/home.module.css";
import { ArrowIcon } from "./icons/arrowIcon";

interface ButtonProps {
    children: React.ReactNode;
    type: 'primary' | 'ghost' | 'transparent';
    noArrow?: boolean;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
  
const Button: React.FC<ButtonProps> = ({ children, type, noArrow = true, className, onClick }) => {
    const baseClasses = "font-500 py-3 px-6"; // Customize base styles

    const typeClass = {
      primary: `bg-black text-white hover:text-white hover:bg-primary`,
      ghost: "bg-transparent text-black border border-black",
      transparent: "",
    }[type] || "";

    const iconColor = type === "primary" ? "white" : "black";

    const combinedClasses = `${baseClasses} ${typeClass}`;

    return (
        <button onClick={onClick} className={`${combinedClasses} ${className} duration-300 ease-in-out flex items-center text-16px ${type === "transparent" ? "group hover:text-primary hover:transition duration-200 ease-in-out" : ""}`} type="button">
            {children}
            {noArrow && <ArrowIcon color={iconColor} className={`${type === "transparent" ? "group-hover:fill-primary ml-2 duration-200 ease-in-out" : "ml-2"}`}/>}
        </button>
    )
}

export default Button;
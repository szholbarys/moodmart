"use client"
import Image from "next/image";
import styles from "@/app/ui/home.module.css";
import logo from "../../../public/moodmart.svg";
import { SearchIcon } from "@/components/shared/icons/searchIcon";
import { FavoriteIcon } from "@/components/shared/icons/favoriteIcon";
import { ProfileIcon } from "@/components/shared/icons/profileIcon";
import { CartIcon } from "@/components/shared/icons/cartIcon";
import { useState, useEffect } from "react";

export default function Header() {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsTransparent(scrollTop === 0); // Update state based on scroll position
    };

    // Add event listener on component mount
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <header
      className={`fixed top-0 left-0 w-full md:w-90 flex justify-between items-center py-4 px-20 z-50 transition duration-500 ease-in-out ${
        isTransparent ? "bg-transparent" : "bg-white"
      }`}
    >
      {/* Rest of your header content */}
      <Image
        src={logo}
        alt="MoodMart Logo"
        width={100}
        height={53}
      />
      <nav className={`${styles.navbar} flex justify-center ml-10 font-semi-bold`}>
        <a href="#">каталог</a>
        <a href="#">бренды</a>
        <a href="#">новинки</a>
        <a href="#">акции</a>
        <a href="#">подарочные карты</a>
      </nav>
      <ul className={`${styles.controls} flex items-center`}>
                <li>
                    <a href="#">
                        <SearchIcon color="black"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FavoriteIcon color="black"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ProfileIcon color="black"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <CartIcon color="black"/>
                    </a>
                </li>
            </ul>
    </header>
  );
}

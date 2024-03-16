"use client"
import Image from "next/image";
import styles from "@/app/ui/home.module.css";
import logo from "../../../public/moodmart.svg";
import { SearchIcon } from "@/components/shared/icons/searchIcon";
import { FavoriteIcon } from "@/components/shared/icons/favoriteIcon";
import { ProfileIcon } from "@/components/shared/icons/profileIcon";
import { CartIcon } from "@/components/shared/icons/cartIcon";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { SearchArea } from "./SearchArea";

export default function Header() {
  const [isTransparent, setIsTransparent] = useState(true);
  const [showSearch, setShowSearch] = useState(false);

  // Toggles the search dropdown and ensures the header is not transparent when the search is open
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    // Ensure header becomes non-transparent when search is activated
    if (!showSearch) {
      setIsTransparent(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Only update transparency based on scroll position if search is not shown
      if (!showSearch) {
        setIsTransparent(scrollTop === 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showSearch]); // Add showSearch to the dependency array to re-bind the scroll event when it changes

  return (
    <header
      className={`w-full fixed top-0 left-0 pt-4 pb-1 px-20 z-50 transition duration-500 ease-in-out ${
        isTransparent ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className=" flex justify-between items-center">
      <Image
        src={logo}
        alt="MoodMart Logo"
        width={100}
        height={53}
        />
      <nav className={`${styles.navbar} flex justify-center ml-10 font-meduim`}>
      <a href="#" className={`transition-colors ${isTransparent ? 'hover:text-white' : 'hover:text-primary'}`}>каталог</a>
        <a href="#" className={`transition-colors ${isTransparent ? 'hover:text-white' : 'hover:text-primary'}`}>бренды</a>
        <a href="#" className={`transition-colors ${isTransparent ? 'hover:text-white' : 'hover:text-primary'}`}>новинки</a>
        <a href="#" className={`transition-colors ${isTransparent ? 'hover:text-white' : 'hover:text-primary'}`}>акции</a>
        <a href="#" className={`transition-colors ${isTransparent ? 'hover:text-white' : 'hover:text-primary'}`}>подарочные карты</a>
      </nav>
      <ul className={`${styles.controls} flex items-center`}>
                <li>
                    <button className="group" onClick={toggleSearch}>
                        <SearchIcon color="black" className={`transition-colors ${isTransparent ? "group-hover:fill-white" : "group-hover:fill-primary"}`}/>
                    </button>
                </li>
                <li>
                    <button className="group">
                        <FavoriteIcon color="black" className={`transition-colors ${isTransparent ? "group-hover:fill-white" : "group-hover:fill-primary"}`}/>
                    </button>
                </li>
                <li>
                    <button className="group">
                        <ProfileIcon color="black" className={`transition-colors ${isTransparent ? "group-hover:stroke-white" : "group-hover:stroke-primary"}`}/>
                    </button>
                </li>
                <li>
                    <button className="group">
                        <CartIcon color="black" className={`transition-colors ${isTransparent ? "group-hover:fill-white" : "group-hover:fill-primary"}`}/>
                    </button>
                </li>
            </ul>
            </div>
            <motion.div
              className={`mt-4 flex justify-center items-center transition-all duration-500 ease-out ${showSearch ? "pb-4" : ""}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              {showSearch && <SearchArea />}
            </motion.div>
    </header>
  );
}

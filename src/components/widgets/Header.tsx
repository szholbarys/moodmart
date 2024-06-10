'use client'
import Image from 'next/image'
import styles from '@/app/ui/home.module.css'
import logo from '../../../public/moodmart.svg'
import { SearchIcon } from '@/components/shared/icons/searchIcon'
import { FavoriteIcon } from '@/components/shared/icons/favoriteIcon'
import { ProfileIcon } from '@/components/shared/icons/profileIcon'
import { CartIcon } from '@/components/shared/icons/cartIcon'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SearchArea } from './SearchArea'
import { usePathname, useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [isTransparent, setIsTransparent] = useState(true)
  const [showSearch, setShowSearch] = useState(false)

  // Toggles the search dropdown and ensures the header is not transparent when the search is open
  const toggleSearch = () => {
    setShowSearch(!showSearch)
    // Ensure header becomes non-transparent when search is activated
    if (!showSearch) {
      setIsTransparent(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      // Only update transparency based on scroll position if search is not shown
      if (
        !showSearch &&
        (pathname.length === 1 ||
          pathname.startsWith('/catalog') ||
          pathname.startsWith('/#'))
      ) {
        setIsTransparent(scrollTop === 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Cleanup function to remove the event listener
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showSearch, pathname]) // Add showSearch to the dependency array to re-bind the scroll event when it changes

  useEffect(() => {
    // Check if the current page is the home page ("/")
    setIsTransparent(
      (pathname.length === 1 ||
        pathname.startsWith('/catalog') ||
        pathname.startsWith('/#')) &&
        !showSearch,
    )
    if (showSearch) {
      toggleSearch()
    }
    // console.log(showSearch);
  }, [pathname])

  return (
    <header
      className={`w-full fixed top-0 left-0 pt-4 pb-4 px-20 z-50 transition duration-300 ease-in-out ${
        isTransparent ? 'bg-transparent' : 'bg-white'
      }`}
    >
      <div className=" flex justify-between items-center">
        <Image
          src={logo}
          alt="MoodMart Logo"
          width={100}
          height={53}
          onClick={() => {
            router.push('/')
          }}
          className="cursor-pointer"
        />
        <nav
          className={`${styles.navbar} flex justify-center ml-10 font-meduim`}
        >
          <a
            href="#"
            className={`transition-colors ${isTransparent ? 'hover:text-white' : 'hover:text-primary'}`}
            onClick={() => {
              router.push('/catalog')
            }}
          >
            каталог
          </a>
          <a
            href="#"
            className={`transition-colors ${isTransparent ? 'hover:text-white' : 'hover:text-primary'}`}
            onClick={() => {
              router.push('/')
            }}
          >
            бренды
          </a>
          <a
            href="#"
            className={`transition-colors ${isTransparent ? 'hover:text-white' : 'hover:text-primary'}`}
            onClick={() => {
              router.push('/')
            }}
          >
            новинки
          </a>
          <a
            href="#"
            className={`transition-colors ${isTransparent ? 'hover:text-white' : 'hover:text-primary'}`}
            onClick={() => {
              router.push('/')
            }}
          >
            акции
          </a>
          <a
            href="#"
            className={`transition-colors ${isTransparent ? 'hover:text-white' : 'hover:text-primary'}`}
            onClick={() => {
              router.push('/')
            }}
          >
            подарочные карты
          </a>
        </nav>
        <ul className={`${styles.controls} flex items-center`}>
          <li>
            <button className="group" onClick={toggleSearch}>
              <SearchIcon
                color="black"
                className={`transition-colors ${isTransparent ? 'group-hover:fill-white' : 'group-hover:fill-primary'}`}
              />
            </button>
          </li>
          <li>
            <button 
            className="group"
            onClick={() => {
              router.push('/favorite')
            }}
            >
              <FavoriteIcon
                color="black"
                className={`transition-colors ${isTransparent ? 'group-hover:fill-white' : 'group-hover:fill-primary'}`}
              />
            </button>
          </li>
          <li>
            <button className="group">
              <ProfileIcon
                color="black"
                className={`transition-colors ${isTransparent ? 'group-hover:stroke-white' : 'group-hover:stroke-primary'}`}
              />
            </button>
          </li>
          <li>
            <button className="group">
              <CartIcon
                color="black"
                className={`transition-colors ${isTransparent ? 'group-hover:fill-white' : 'group-hover:fill-primary'}`}
              />
            </button>
          </li>
        </ul>
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: showSearch ? 'auto' : 0 }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
        style={{ overflow: 'hidden' }}
      >
        <div className={`mt-4 flex justify-center items-center pb-3`}>
          <SearchArea />
        </div>
      </motion.div>
    </header>
  )
}

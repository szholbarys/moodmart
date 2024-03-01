import Image from "next/image";
import styles from "@/app/ui/home.module.css";
import logo from "../../../public/moodmart.svg";
import { SearchIcon } from "@/components/shared/searchIcon";
import ic_profile from "../../public/icons/ic_profile.svg";
import ic_shopping_bag from "../../public/icons/ic_shopping bag.svg";
import { FavoriteIcon } from "@/components/shared/favoriteIcon";
import { ProfileIcon } from "@/components/shared/profileIcon";
import { CartIcon } from "@/components/shared/cartIcon";
// import Icon from "@/shared/Icon";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full md:w-90 flex justify-between items-center py-4 px-20 z-50">
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
    )
}

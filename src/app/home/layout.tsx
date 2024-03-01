import type { Metadata } from "next";
import Header from "@/components/widgets/Header";
import styles from "../ui/home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
    title: "MoodMart",
    description: "Выбирайте подарок близким"
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className={styles.main}>
            <Header />
            {children}
        </main>
    )
}

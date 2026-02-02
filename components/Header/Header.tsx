'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./Header.module.css";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className={css.header}>
            <div className={css.container}>
                <Link className={css.logo} href="/">
                    Rental<span className={css.span}>Car</span>
                </Link>
                <nav className={css.nav}>
                    <Link href="/" className={pathname === "/" ? css.active : css.link}>
                        Home
                    </Link>
                    <Link href="/catalog" className={pathname === "/catalog" ? css.active : css.link}>
                        Catalog
                    </Link>
                </nav>
            </div>
        </header>
    );
}
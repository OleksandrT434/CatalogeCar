"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import css from "./Header.module.css";

export default function Header() {
    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState<string | null>(null);

    useEffect(() => {
        setActiveLink(pathname);
    }, [pathname]);

    return (
        <header className={css.header}>
            <Link className={css.logo} href="/">Rental<span className={css.span}>Car</span></Link>
            <nav className={css.nav}>
                <Link href="/" className={activeLink === "/" ? css.active : ""}>Home</Link>
                <Link href="/catalog" className={activeLink === "/catalog" ? css.active : ""}>Catalog</Link>
            </nav>
        </header>
    );
}
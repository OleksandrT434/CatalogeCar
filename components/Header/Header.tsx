import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
    return (
        <header className={css.header}>
            <Link className={css.logo} href="/">Rental<span className={css.span}>Car</span></Link>
            <nav className={css.nav}>
            <Link href="/">Home</Link>
            <Link href="/catalog">Catalog</Link>
            </nav>
        </header>
    );
}

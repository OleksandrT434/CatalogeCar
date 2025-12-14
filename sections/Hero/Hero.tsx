import Link from "next/link";
import Image from "next/image";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.heroimage}>
        <Image
          src="/Picture.jpg"
          alt="Car"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className={css.heroContent}>
        <h1>Find your perfect rental car</h1>
        <p>Reliable and budget-friendly rentals for any journey</p>
        <Link href="/catalog" className={css.btnPrimary}>
          View Catalog
        </Link>
      </div>
    </section>
  );
}

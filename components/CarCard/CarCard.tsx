import Link from 'next/link';
import css from './CarCard.module.css';

export default function CarCard({ car }) {
  if (!car) return null;
  
const maskedAddress = `${car.address.slice(3)}`;
const addressParts = maskedAddress.split(', ').join(' | ');
const detailsLine = `${car.type} | ${car.mileage} km`;

  return (
    <div className={css.card}>
      <img
        src={car.img}
        alt={`${car.make} ${car.model}`}
        className={css.image}
      />
      <main className={css.content}>
        <div className={css.headerRow}>
          <p className={css.brand}>
                {car.brand} <span className={css.title}>{car.model}</span>, {car.year}
           </p>
          <p className={css.price}>{car.rentalPrice}$</p>
         </div>
        <div className={css.meta}>
            <p className={css.metaLine}>{addressParts}</p>
            <p className={css.metaLine}>{detailsLine}</p>
        </div>
        <Link href="#" className={css.buttonMore}>Read more</Link>
      </main>
    </div>
  );
}

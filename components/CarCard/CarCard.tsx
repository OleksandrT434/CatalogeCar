import Link from 'next/link';
import css from './CarCard.module.css';
import { useFavoritesStore } from '@/store/useStore';
import { motion } from 'framer-motion';
import { Car } from '@/lib/types';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const toggleFavorite = useFavoritesStore(state => state.toggleFavorite);
  const isFavorite = useFavoritesStore(state =>
  state.favorites.includes(car?.id)
);


  if (!car) return null;
  
const maskedAddress = `${car.address.slice(3)}`;
const addressParts = maskedAddress.split(', ').join(' | ');
const detailsLine = `${car.type} | ${car.mileage} km`;


  return (
    <motion.div 
      className={css.card}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
    <div className={css.card}>
      <div className={css.imageWrapper}>
  <img
    src={car.img}
    alt={`${car.make} ${car.model}`}
    className={css.image}
  />

 <button
  className={css.favoriteBtn}
  onClick={() => toggleFavorite(car.id)}
>
  <svg
    className={`${css.icon} ${isFavorite ? css.filled : css.outline}`}
  >
    <use
      href={`/icons/sprite1.svg#${isFavorite ? 'icon-heart-true' : 'icon-heart'}`}
    />
  </svg>
</button>

</div>
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
        <Link href={`catalog/${car.id}`} className={css.buttonMore}>Read more</Link>
      </main>
    </div>
    </motion.div>
  );
}

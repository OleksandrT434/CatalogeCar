import css from './CarList.module.css';
import CarCard from '@/components/CarCard/CarCard';
import { Car } from '@/lib/types';

interface CarListProps {
  cars: Car[];
}

export default function CarList({ cars }: CarListProps) {
  if (!Array.isArray(cars)) 
    return <p>No cars found for selected filters</p>;
  return (
    <div className={css.container}>
    <div className={css.list}>
      {cars.filter(Boolean).map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
    </div>
  );
}
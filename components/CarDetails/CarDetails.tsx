'use client'

import css from './CarDetails.module.css';
import { Car } from '@/lib/types';
import Icon from '@/components/Icon/Icon';
import IconList from '@/components/Icon/IconList';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

type Props = {
  car: Car
};

export default function CarDetails({ car }: Props) {
const addressParts = car.address?.split(',').slice(1).join(',').trim();

const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: ''
  });

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSend = () => {
    const { name, email, date } = formData;
    if (!name || !email || !date) {
        toast.error('Please fill in all required fields.', {
        duration: 4000,
        style: {
          borderRadius: '12px',
          background: '#ff4b4b',
          color: '#fff',
        },
        });
        return;
    }
    toast.success('Successful! We will contact you soon.', {
      duration: 4000,
    style: {
      borderRadius: '12px',
      background: '#333',
      color: '#fff',
    },
  });
  setFormData({ name: '', email: '', date: '' });
};

  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.left}>
          <div className={css.imageWrapper}>
            <img
              src={car.img}
              alt={`${car.make} ${car.model}`}
              className={css.image}
            />
          </div>
          <div className={css.booking}>
  <h2 className={css.bookingTitle}>Book your car now</h2>
  <p className={css.bookingSubtitle}>Stay connected! We are always ready to help you.</p>
  
  <input 
    type="text" 
    placeholder="Name*" 
    className={css.inputField} 
    name="name" 
    onChange={handleInputChange}
    value={formData.name || ''}
     />
  <input 
    type="email" 
    placeholder="Email*" 
    className={css.inputField} 
    name="email" 
    onChange={handleInputChange} 
    value={formData.email || ''}
   />
  
  <input 
    type="text" 
    placeholder="Booking date" 
    onChange={handleInputChange}
    name="date"
    className={css.inputField} 
    value={formData.date || ''}
    onFocus={(e) => (e.target.type = 'date')} 
    onBlur={(e) => (e.target.type = 'text')}
  />
  
  <textarea 
    placeholder="Comment" 
    className={css.textareaField}
  ></textarea>
  
  <button className={css.bookBtn} onClick={handleSend}>Send</button>
</div>
        </div>
        <div className={css.right}>
          <h1 className={css.title}>
            {car.brand} <span>{car.model}</span>, {car.year}
          </h1>

          <div className={css.metaContainer}>
            <div className={css.metaRow}>
              <Icon name="lokal" />
              <span>{addressParts}</span>
            </div>

            <div className={css.metaRow}>
              <span>Mileage: {car.mileage} km</span>
            </div>
          </div>
            <span className={css.price}>${car.rentalPrice}</span>
          <p className={css.description}>{car.description}</p>
          <div className={css.block}>
            <h3 className={css.title}>Rental Conditions</h3>
            <IconList items={car.rentalConditions} />
          </div>

          <div className={css.block}>
            <h3 className={css.title}>Car Specifications</h3>
            <ul className={css.list}>
              <li className={css.listItem}>
                <Icon name="calendar" />
                <span>Year: {car.year}</span>
              </li>
              <li className={css.listItem}>
                <Icon name="car" />
                <span>Type: {car.type}</span>
              </li>
              <li className={css.listItem}>
                <Icon name="gas" />
                <span>Fuel: {car.fuelConsumption}</span>
              </li>
              <li className={css.listItem}>
                <Icon name="untill" />
                <span>Engine: {car.engineSize}</span>
              </li>
            </ul>
          </div>

          <div className={css.block}>
            <h3 className={css.title}>Accessories and functionalities</h3>
            <IconList items={[...car.accessories, ...car.functionalities]} />
          </div>
        </div>
      </div>
    </section>
  );
}

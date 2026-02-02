"use client";

import CarList from '@/components/CarList/CarList';
import LoadMoreButton from '@/components/LoadMoreButton/LoadMoreButton';
import { fetchCars } from '@/lib/clientApi';
import Filter from '@/components/Filter/Filter';
import { brandsApi } from '@/lib/clientApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './page.module.css';

import { useState, useEffect } from 'react'; 

export default function CatalogPage() {
    
const [cars, setCars] = useState([]);
const [page, setPage] = useState(1);
const [loading, setLoading] = useState(false);
const [brands, setBrands] = useState([]);
const [brand, setBrand] = useState<string | null>(null);
const [price, setPrice] = useState<number| null>(null);
const [mileage, setMileage] = useState<{ from: number | null; to: number | null } | null>(null);

const [draftBrand, setDraftBrand] = useState<string | null>(null);
const [draftPrice, setDraftPrice] = useState<number | null>(null);
const [draftMileage, setDraftMileage] = useState<{ from: number | null; to: number | null }>({ from: null, to: null });

const hasMore = cars.length >= page * 12;

useEffect(() => {
  const loadCars = async () => {
    setLoading(true);
    const data = await fetchCars(page, 12, brand, price, mileage?.from || null, mileage?.to || null);
    setCars(prev =>
      page === 1 ? data.cars : [...prev, ...data.cars]
    );
    setLoading(false);
  };

  loadCars();
}, [page, brand, price, mileage]);

function onSearch() {
  setPage(1);
  setBrand(draftBrand);
  setPrice(draftPrice);
  setMileage(draftMileage);
}

useEffect(() => {
  const loadBrands = async () => {
    try {
      const data = await brandsApi();
      setBrands(data);
    } catch (error) {
      console.error(error);
      toast.error('Failed to load brands');
    }
  };
  loadBrands();
}, []);

useEffect(() => {
  if (page > 1 && !loading && cars.length > 0) {
    window.scrollBy({
      top: 400, 
      behavior: 'smooth',
    });
  }
}, [cars.length]); 

function onLoadMore() {
    setPage(prevPage => prevPage + 1);
}
    return (
        <main className={css.mainContainer}>
            <Filter
                brands={brands}
                draftBrand={draftBrand}
                draftPrice={draftPrice}
                draftMileage={draftMileage}
                onDraftBrandChange={setDraftBrand}
                onDraftPriceChange={setDraftPrice}
                onDraftMileageChange={setDraftMileage}
                onSearch={onSearch}
            />
            <div className={css.contentWrapper}>
              
      <CarList cars={cars} />
      <div className={css.loadMoreWrapper}>
          {(hasMore || loading) && (
            <LoadMoreButton 
              onLoadMore={onLoadMore} 
              hasMore={hasMore} 
              isLoading={loading}
            />
          )}
      </div>
    </div>
  </main>
);
}
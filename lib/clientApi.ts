import axiosClient from './api';

export const fetchCars = async (
  page: number,
  limit: number,
  brand: string | null,
  rentalPrice: number | null,
  minMileage: number | null,
  maxMileage: number | null
) => {
  const { data } = await axiosClient.get('/cars', {
    params: {
      page,
      limit,
      brand: brand || undefined,
      rentalPrice: rentalPrice,
      minMileage: minMileage || undefined,
      maxMileage: maxMileage || undefined,
    },
  });

  return data;
};

export const brandsApi = async () => {
  const {data} = await axiosClient.get('/brands')
  return data;
}
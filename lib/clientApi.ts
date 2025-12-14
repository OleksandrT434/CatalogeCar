import { api } from "./api";
import type { Car, CarsListResponse } from "./types";


type GetCarsParams = {
  brand?: string | null;
  price?: number | null;
  mileageFrom?: number | null;
  mileageTo?: number | null;
  page?: number;
  limit?: number;
};

export async function getCars(params: GetCarsParams): Promise<CarsListResponse> {
    const q: Record<string, unknown> = {};
    if (params.brand) q.brand = params.brand;
    if (params.price) q.price = params.price;
    if (params.mileageFrom) q.mileageFrom = params.mileageFrom;
    if (params.mileageTo) q.mileageTo = params.mileageTo;
    q.page = params.page ?? 1;
    q.limit = params.limit ?? 12;

    const response = await api.get ("/cars", {params: q});
    return response.data as CarsListResponse;
}

export async function getCarById(id: string): Promise<Car> {
  const res = await api.get(`/cars/${id}`);

    return res.data as Car;
}

"use client";

import { create } from "zustand";
import { getCars } from "../lib/clientApi"; 
import type { Car, Filters } from "../lib/types";

type Store = {
  cars: Car[];
  loading: boolean;
  page: number;
  total: number;
  filters: Filters;
  favorites: string[];

  setFilters: (filters: Filters) => void;
  fetchCars: (page?: number) => Promise<void>;
  loadMore: () => Promise<void>;
  toggleFavorite: (id: string) => void;
};

export const useStore = create<Store>((set, get) => ({
  cars: [],
  loading: false,
  page: 1,
  total: 0,
  filters: {},
  favorites: [],

  setFilters: (filters) => {
    set({ filters, cars: [], page: 1, total: 0 });
  },

  fetchCars: async (page = 1) => {
    set({ loading: true });

    try {
      const s = get();

      const res = await getCars({
        brand: s.filters.make,
        price: s.filters.price,
        mileageFrom: s.filters.mileageFrom,
        mileageTo: s.filters.mileageTo,
        page,
        limit: 8,
      });

      set((prev) => ({
        cars: page === 1 ? res.cars : [...prev.cars, ...res.cars],
        total: res.total ?? prev.total,
        page: res.page ?? page,
      }));
    } finally {
      set({ loading: false });
    }
  },
  loadMore: async () => {
    const p = get().page;
    await get().fetchCars(p + 1);
  },

  toggleFavorite: (id: string) => {
    set((s) => {
      const exists = s.favorites.includes(id);
      const next = exists
        ? s.favorites.filter((x) => x !== id)
        : [...s.favorites, id];

      localStorage.setItem("favorites", JSON.stringify(next));

      return { favorites: next };
    });
  },
}));

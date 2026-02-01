import { create } from 'zustand';

type FavoritesStore = {
  favorites: number[];
  toggleFavorite: (id: number) => void;
};

export const useFavoritesStore = create<FavoritesStore>((set) => ({
  favorites: [],
  toggleFavorite: (id) => {
    set((state) => {
      if (state.favorites.includes(id)) {
        return {
          favorites: state.favorites.filter(favId => favId !== id),
        };
      }

      return {
        favorites: [...state.favorites, id],
      };
    });
  },
}));

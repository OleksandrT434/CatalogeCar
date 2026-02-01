export type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  img: string;
  price: number;
  rentalPrice: number;
  address: string;
  mileage: number;
  type: string;
  fuelConsumption: string;
  engineSize: string;
  description: string;
  rentalConditions: string[];
  accessories: string[];
  functionalities: string[];
  brand: string;
};

export interface FiltersProps { 
  brands: string[];
  draftBrand: string | null;
  draftPrice: number | null;
  draftMileage: { from: number | null; to: number | null };
  onDraftBrandChange: (brand: string | null) => void;
  onDraftPriceChange: (price: number | null) => void;
  onDraftMileageChange: (mileage: { from: number | null; to: number | null }) => void;
  onSearch: () => void;
}
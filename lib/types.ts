export type Car = {
  id: string;
  make: string;
  model: string;      
  year: number;    
  rentalPrice: string; 
  address: string;   
  type: string;   
  fuelConsumption: string; 
  engineSize: string;  
  description: string; 
  functionalities: string[]; 
  accessories: string[];
  rentalCompany: string;
  mileage: number;  
  photoLink: string;    
};

export type Filters = {
  make?: string;     
  price?: number | null;  
  mileageFrom?: number|null;
  mileageTo?: number|null;
};

export type CarsListResponse = {
  cars: Car[];    
  total?: number;   
  page?: number;    
  limit?: number;   
};

export interface HouseSearchCriteria {
  location?: {
    city?: string;
    state?: string;
    municipality?: string;
    neighborhood?: string;
  };
  features?: string[];
  price?: {
    min?: number;
    max?: number;
  };
  size_m2?: {
    min?: number;
    max?: number;
  };
  rooms?: {
    min?: number;
    max?: number;
  };
  bathrooms?: {
    min?: number;
    max?: number;
  };
  parking_spots?: {
    min?: number;
    max?: number;
  };
  type?: string;
}
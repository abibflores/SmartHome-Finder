import { House } from '@/components/HouseCard/types';
import { HouseSearchCriteria } from '@/types/houseSearch';

/**
 * Filtra casas basado en criterios específicos
 * @param houses - Array de casas para filtrar
 * @param criteria - Criterios de filtrado
 * @returns Array de casas que cumplen con los criterios
 */
export function filterHousesByCriteria(houses: House[], criteria: HouseSearchCriteria): House[] {
  return houses.filter(house => {
    // Filtrar por ubicación
    if (criteria.location) {
      if (criteria.location.city && 
          !house.city.toLowerCase().includes(criteria.location.city.toLowerCase())) {
        return false;
      }
      if (criteria.location.state && 
          !house.state.toLowerCase().includes(criteria.location.state.toLowerCase())) {
        return false;
      }
      if (criteria.location.municipality && 
          !house.municipality.toLowerCase().includes(criteria.location.municipality.toLowerCase())) {
        return false;
      }
      // Para barrio/colonia, buscamos en el título o dirección
      if (criteria.location.neighborhood) {
        const neighborhoodLower = criteria.location.neighborhood.toLowerCase();
        if (!house.title.toLowerCase().includes(neighborhoodLower) && 
            !house.address.toLowerCase().includes(neighborhoodLower)) {
          return false;
        }
      }
    }

    // Filtrar por características
    if (criteria.features && criteria.features.length > 0) {
      const houseFeatures = house.features.map((f: string) => f.toLowerCase());

      const hasAnyFeature = criteria.features.some(feature => 
        houseFeatures.includes(feature.toLowerCase())
      );
      if (!hasAnyFeature) return false;
    }

    // Filtrar por precio
    if (criteria.price) {
      if (criteria.price.min && house.price < criteria.price.min) return false;
      if (criteria.price.max && house.price > criteria.price.max) return false;
    }

    // Filtrar por tamaño
    if (criteria.size_m2) {
      if (criteria.size_m2.min && house.size_m2 < criteria.size_m2.min) return false;
      if (criteria.size_m2.max && house.size_m2 > criteria.size_m2.max) return false;
    }

    // Filtrar por habitaciones
    if (criteria.rooms) {
      if (criteria.rooms.min && house.rooms < criteria.rooms.min) return false;
      if (criteria.rooms.max && house.rooms > criteria.rooms.max) return false;
    }

    // Filtrar por baños
    if (criteria.bathrooms) {
      if (criteria.bathrooms.min && house.bathrooms < criteria.bathrooms.min) return false;
      if (criteria.bathrooms.max && house.bathrooms > criteria.bathrooms.max) return false;
    }

    // Filtrar por estacionamientos
    if (criteria.parking_spots) {
      if (criteria.parking_spots.min && house.parking_spots < criteria.parking_spots.min) return false;
      if (criteria.parking_spots.max && house.parking_spots > criteria.parking_spots.max) return false;
    }

    // Filtrar por tipo de propiedad
    if (criteria.type && !house.type.toLowerCase().includes(criteria.type.toLowerCase())) {
      return false;
    }

    return true;
  });
}
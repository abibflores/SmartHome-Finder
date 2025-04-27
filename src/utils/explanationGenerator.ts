import { HouseSearchCriteria } from '@/types/houseSearch';

/**
 * Genera una explicación en lenguaje natural de los criterios de búsqueda
 * @param criteria - Criterios de búsqueda
 * @returns String con explicación de los criterios
 */
export function generateExplanation(criteria: HouseSearchCriteria): string {
  const explanationParts: string[] = [];
  
  // Explicación de ubicación
  if (criteria.location) {
    const locationParts: string[] = [];
    if (criteria.location.city) locationParts.push(`ciudad de ${criteria.location.city}`);
    if (criteria.location.state) locationParts.push(`estado de ${criteria.location.state}`);
    if (criteria.location.municipality) locationParts.push(`municipio de ${criteria.location.municipality}`);
    if (criteria.location.neighborhood) locationParts.push(`barrio/colonia ${criteria.location.neighborhood}`);
    
    if (locationParts.length > 0) {
      explanationParts.push(`ubicación en la ${locationParts.join(', ')}`);
    }
  }
  
  // Explicación de características
  if (criteria.features && criteria.features.length > 0) {
    explanationParts.push(`características como ${criteria.features.join(', ')}`);
  }
  
  // Explicación de precio
  if (criteria.price) {
    const priceParts: string[] = [];
    if (criteria.price.min) priceParts.push(`desde $${criteria.price.min.toLocaleString()}`);
    if (criteria.price.max) priceParts.push(`hasta $${criteria.price.max.toLocaleString()}`);
    
    if (priceParts.length > 0) {
      explanationParts.push(`precio ${priceParts.join(' ')}`);
    }
  }
  
  // Explicación de tamaño
  if (criteria.size_m2) {
    const sizeParts: string[] = [];
    if (criteria.size_m2.min) sizeParts.push(`desde ${criteria.size_m2.min} m²`);
    if (criteria.size_m2.max) sizeParts.push(`hasta ${criteria.size_m2.max} m²`);
    
    if (sizeParts.length > 0) {
      explanationParts.push(`tamaño ${sizeParts.join(' ')}`);
    }
  }
  
  // Explicación de habitaciones
  if (criteria.rooms) {
    const roomsParts: string[] = [];
    if (criteria.rooms.min) roomsParts.push(`mínimo ${criteria.rooms.min}`);
    if (criteria.rooms.max) roomsParts.push(`máximo ${criteria.rooms.max}`);
    
    if (roomsParts.length > 0) {
      explanationParts.push(`${roomsParts.join(' y ')} habitaciones`);
    }
  }
  
  // Explicación de baños
  if (criteria.bathrooms) {
    const bathroomsParts: string[] = [];
    if (criteria.bathrooms.min) bathroomsParts.push(`mínimo ${criteria.bathrooms.min}`);
    if (criteria.bathrooms.max) bathroomsParts.push(`máximo ${criteria.bathrooms.max}`);
    
    if (bathroomsParts.length > 0) {
      explanationParts.push(`${bathroomsParts.join(' y ')} baños`);
    }
  }
  
  // Explicación de estacionamientos
  if (criteria.parking_spots) {
    const parkingParts: string[] = [];
    if (criteria.parking_spots.min) parkingParts.push(`mínimo ${criteria.parking_spots.min}`);
    if (criteria.parking_spots.max) parkingParts.push(`máximo ${criteria.parking_spots.max}`);
    
    if (parkingParts.length > 0) {
      explanationParts.push(`${parkingParts.join(' y ')} lugares de estacionamiento`);
    }
  }
  
  // Explicación de tipo de propiedad
  if (criteria.type) {
    explanationParts.push(`tipo de propiedad: ${criteria.type}`);
  }
  
  // Construir la explicación completa
  if (explanationParts.length === 0) {
    return "Los resultados mostrados están basados en una búsqueda general debido a que no se detectaron criterios específicos. Estamos trabajando para mejorar nuestro algoritmo de búsqueda y poder dar soporte a más criterios.";
  }
  
  return `Los resultados mostrados están basados en estos criterios de búsqueda: ${explanationParts.join(', ')}. Estos son los parámetros soportados por el momento en la app. Estamos trabajando para mejorar nuestro algoritmo de búsqueda y poder dar soporte a más criterios de búsqueda.`;
}
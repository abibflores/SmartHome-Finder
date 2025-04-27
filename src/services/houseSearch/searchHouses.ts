import { House } from '@/components/HouseCard/types';
import { analyzeHouseQuery } from './openai';
import { filterHousesByCriteria } from '@/utils/houseFilters';
import { HouseSearchCriteria } from '@/types/houseSearch';
import { generateExplanation } from '@/utils/explanationGenerator';

interface SearchResult {
  results: House[];
  searchCriteria: HouseSearchCriteria;
  explanation: string;
}

/**
 * Filtra casas basado en los criterios extraídos de una consulta en lenguaje natural
 * @param query - Consulta en lenguaje natural
 * @param houses - Array de casas para filtrar
 * @returns Objeto con resultados filtrados, criterios de búsqueda y explicación
 */
export async function searchHousesByNaturalLanguage(query: string, houses: House[]): Promise<SearchResult> {
  const criteria = await analyzeHouseQuery(query);
  
  const filteredHouses = filterHousesByCriteria(houses, criteria);
  const explanation = generateExplanation(criteria);
  
  return {
    results: filteredHouses,
    searchCriteria: criteria,
    explanation
  };
}
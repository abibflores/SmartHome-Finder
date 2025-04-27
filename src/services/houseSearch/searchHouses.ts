import { House } from '@/components/HouseCard/types';
import { analyzeHouseQuery } from './openai';
import { filterHousesByCriteria } from '@/utils/houseFilters';

/**
 * Filtra casas basado en los criterios extraídos de una consulta en lenguaje natural
 * @param query - Consulta en lenguaje natural
 * @param houses - Array de casas para filtrar
 * @returns Array de casas filtradas según los criterios
 */
export async function searchHousesByNaturalLanguage(query: string, houses: House[]): Promise<House[]> {
  const criteria = await analyzeHouseQuery(query);
  console.log(criteria, 'criteria');
  return filterHousesByCriteria(houses, criteria);
}
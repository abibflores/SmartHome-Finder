import OpenAI from 'openai';
import { HouseSearchCriteria } from '@/types/houseSearch';

// Inicializar el cliente de OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Analiza una consulta en lenguaje natural y extrae los criterios de búsqueda
 * @param query - Consulta en lenguaje natural (ej: "Casa en toluca con jardín con un precio máximo de 3500000")
 * @returns Objeto json con los criterios de búsqueda
 */
export async function analyzeHouseQuery(query: string): Promise<HouseSearchCriteria> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `Eres un asistente especializado en extraer información estructurada de consultas inmobiliarias.
          Analiza el texto del usuario y extrae información relevante sobre la búsqueda de casas.
          Debes devolver un objeto JSON con la siguiente estructura:
          {
            "location": {
              "city": string | null,
              "state": string | null,
              "municipality": string | null,
              "neighborhood": string | null
            },
            "features": string[],
            "price": {
              "min": number | null,
              "max": number | null
            },
            "size_m2": {
              "min": number | null,
              "max": number | null
            },
            "rooms": {
              "min": number | null,
              "max": number | null
            },
            "bathrooms": {
              "min": number | null,
              "max": number | null
            },
            "parking_spots": {
              "min": number | null,
              "max": number | null
            },
            "type": string | null
          }
          
          Solo incluye campos para los que hayas encontrado información en la consulta.
          Para los campos numéricos, convierte texto a números (ej: "tres millones" a 3000000).
          Para características (features), extrae todas las mencionadas (jardín, alberca, terraza, etc.).`
        },
        {
          role: "user",
          content: query
        }
      ],
      temperature: 0.1,
      response_format: { type: "json_object" }
    });

    // Extraer y parsear la respuesta JSON
    const content = response.choices[0]?.message?.content || '{}';
    return JSON.parse(content) as HouseSearchCriteria;
  } catch (error) {
    console.error('Error al analizar la consulta:', error);
    throw new Error('No se pudo analizar la consulta de búsqueda de casa');
  }
}
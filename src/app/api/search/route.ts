import { NextRequest, NextResponse } from 'next/server';
import { searchHousesByNaturalLanguage } from '@/services/houseSearch';
import housesData from '@/data/houses_mexico.json';

export async function GET(request: NextRequest) {
  try {
    // Obtener el parámetro 'q' 
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');

    if (!query) {
      return NextResponse.json(
        { error: 'Se requiere un parámetro de búsqueda "q"' },
        { status: 400 }
      );
    }

    const results = await searchHousesByNaturalLanguage(query, housesData);

    return NextResponse.json({
      query,
      count: results.length,
      results
    });
  } catch (error) {
    console.error('Error al procesar la búsqueda:', error);
    
    return NextResponse.json(
      { error: 'Error al procesar la búsqueda. Por favor, inténtalo de nuevo.' },
      { status: 500 }
    );
  }
}
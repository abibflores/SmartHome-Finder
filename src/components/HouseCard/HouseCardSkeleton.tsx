export const HouseCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      {/* Área de imagen */}
      <div className="h-48 bg-gray-300"></div>

      <div className="p-4">
        {/* Título */}
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        
        {/* Dirección */}
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        
        {/* Características (tamaño, habitaciones, baños) */}
        <div className="flex justify-between mb-3">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t pt-3">
          {/* Etiquetas de características */}
          <div className="flex flex-wrap gap-1">
            <div className="h-6 bg-gray-200 rounded-full w-16"></div>
            <div className="h-6 bg-gray-200 rounded-full w-20"></div>
            <div className="h-6 bg-gray-200 rounded-full w-14"></div>
          </div>
        </div>

        {/* Pie de tarjeta */}
        <div className="mt-3 flex justify-between items-center">
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );
};
import { House } from "./types";

interface HouseCardProps {
  house: House;
}

export const HouseCard = ({ house }: HouseCardProps) => {
  const formattedPrice = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0
  }).format(house.price);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            className="h-24 w-24 text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1} 
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="text-white font-bold text-xl">{formattedPrice}</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800">{house.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{house.address}</p>
        
        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>{house.size_m2} m²</span>
          </div>
          <div className="flex items-center">
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>{house.rooms} hab</span>
          </div>
          <div className="flex items-center">
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span>{house.bathrooms} baños</span>
          </div>
        </div>

        <div className="border-t pt-3">
          <div className="flex flex-wrap gap-1">
            {house.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
            {house.features.length > 3 && (
              <span className="text-xs text-gray-500 px-2 py-1">
                +{house.features.length - 3} más
              </span>
            )}
          </div>
        </div>

        <div className="mt-3 flex justify-between items-center">
          <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">
            {house.type}
          </span>
          <span className="text-sm text-gray-500">
            {house.city}, {house.state}
          </span>
        </div>
      </div>
    </div>
  );
};
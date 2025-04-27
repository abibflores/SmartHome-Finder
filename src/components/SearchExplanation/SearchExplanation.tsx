"use client";

interface SearchExplanationProps {
  explanation: string;
  isLoading?: boolean;
}

export const SearchExplanation = ({ explanation, isLoading = false }: SearchExplanationProps) => {
  if (isLoading) {
    return (
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
      </div>
    );
  }

  if (!explanation) {
    return null;
  }

  return (
    <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
      <div className="flex items-start">
        <svg 
          className="h-5 w-5 text-blue-500 mr-2 mt-0.5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        <p className="text-sm text-blue-800">{explanation}</p>
      </div>
    </div>
  );
};
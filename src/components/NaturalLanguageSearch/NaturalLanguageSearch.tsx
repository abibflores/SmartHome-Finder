"use client";
import { useState } from "react";

export const NaturalLanguageSearch = () => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsSearching(true);
    
    setTimeout(() => {
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Describe la casa de tus sueños..."
          className="w-full p-4 pr-12 text-lg border rounded-full shadow-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
          disabled={isSearching}
        >
          {isSearching ? (
            <span className="flex items-center justify-center w-6 h-6">
              <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
            </span>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          )}
        </button>
      </form>
      <p className="mt-2 text-sm text-gray-500">
        Usa lenguaje natural para describir lo que buscas. Por ejemplo: &quot;Casa de 3 habitaciones con jardín grande en Toluca&quot; o &quot;Apartamento con terraza cerca del centro de Metepec&quot;
      </p>
    </div>
  );
};
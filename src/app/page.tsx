import { NaturalLanguageSearch } from "@/components/NaturalLanguageSearch/NaturalLanguageSearch";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Bienvenido a SmartHome Finder</h1>
      <p className="text-xl text-center mb-8">Tu buscador inteligente de productos para el hogar</p>
      
      <NaturalLanguageSearch />
    </div>
  );
}

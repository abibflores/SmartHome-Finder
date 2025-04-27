import { NaturalLanguageSearch } from "@/components/NaturalLanguageSearch/NaturalLanguageSearch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartHome Finder | Busca propiedades inmobiliarias con lenguaje natural",
  description: "Encuentra la casa de tus sueños utilizando lenguaje natural. Busca por ubicación, características, precio y más en nuestro buscador inteligente de propiedades.",
  keywords: "propiedades, inmobiliaria, casas, departamentos, búsqueda inteligente, lenguaje natural, Toluca, Metepec",
  openGraph: {
    title: "SmartHome Finder | Busca propiedades inmobiliarias con lenguaje natural",
    description: "Encuentra la casa de tus sueños utilizando lenguaje natural. Busca por ubicación, características, precio y más.",
    url: "https://homefinderpro.netlify.app/",
    siteName: "SmartHome Finder",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SmartHome Finder - Buscador inteligente de propiedades",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Bienvenido a SmartHome Finder</h1>
      <p className="text-xl text-center mb-8">Tu buscador inteligente de propiedades inmobiliarias</p>
      
      <NaturalLanguageSearch />
    </div>
  );
}

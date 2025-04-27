    
# SmartHome Finder

Este es un proyecto [Next.js](https://nextjs.org) creado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Descripción

SmartHome Finder es una aplicación web que permite a los usuarios buscar propiedades inmobiliarias utilizando lenguaje natural. La aplicación analiza las consultas del usuario y filtra las propiedades según criterios específicos como ubicación, características, precio, tamaño, número de habitaciones, baños y estacionamientos.

## Enfoque de desarrollo

Para resolver este reto utilicé tecnologías que domino, como **Next.js** y la plataforma de **OpenAI**. Elegí estas herramientas considerando el tiempo de entrega de **2 días**, buscando un equilibrio entre calidad de código, funcionalidad y productividad.

El **90% del código** fue generado por etapas utilizando **IA**, bajo **supervisión constante**. Esto permitió optimizar tiempos de entrega sin sacrificar la mantenibilidad ni la claridad del proyecto.

**Next.js** ofrece un framework robusto, optimizado por defecto y altamente escalable, mientras que **OpenAI** facilitó la interpretación de lenguaje natural gracias a mi familiaridad previa con la plataforma, reduciendo la curva de aprendizaje.

Decidí construir un **buscador de propiedades** para agregar un nivel mayor de complejidad frente a opciones más simples como buscadores de productos, ya que manejar múltiples variables (precio, ubicación, metros cuadrados, etc.) representa un desafío más realista.

El uso de **IA** no solo aceleró el desarrollo, sino que permitió dedicar más tiempo a aspectos clave como **UI**, **UX**, **performance**, **escalabilidad** y **mantenibilidad**.

_(Limitaciones y consideraciones adicionales se detallan más abajo en este documento.)_


## Tecnologías Utilizadas

- **Frontend**:
  - [Next.js 15.3.1](https://nextjs.org/) - Framework de React para aplicaciones web
  - [React 19](https://react.dev/) - Biblioteca JavaScript para construir interfaces de usuario
  - [Tailwind CSS 4](https://tailwindcss.com/) - Framework CSS para diseño rápido y responsivo

- **Backend**:
  - [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) - Endpoints API serverless
  - [OpenAI API](https://openai.com/) - Procesamiento de lenguaje natural

- **Lenguajes y Herramientas**:
  - [TypeScript 5](https://www.typescriptlang.org/) - Superset tipado de JavaScript
  - [ESLint 9](https://eslint.org/) - Linter para identificar problemas en el código
  - [Turbopack](https://turbo.build/pack) - Bundler para desarrollo rápido

## Prompt Utilizado en la IA

La aplicación utiliza el modelo GPT-4o-mini de OpenAI para analizar consultas en lenguaje natural. El prompt del sistema utilizado es:

```
Eres un asistente especializado en extraer información estructurada de consultas inmobiliarias.
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
Para características (features), extrae todas las mencionadas (jardín, alberca, terraza, etc.).
```

## Arquitectura del Proyecto

La aplicación sigue una arquitectura basada en componentes con las siguientes capas:

### 1. Capa de Presentación (Frontend)
- **Componentes React**: Interfaz de usuario modular y reutilizable
  - `NaturalLanguageSearch`: Componente para búsquedas en lenguaje natural
  - `HouseCard`: Visualización de propiedades inmobiliarias

### 2. Capa de Servicios (Backend)
- **API Routes**: Endpoints serverless para manejar solicitudes
  - `/api/search`: Procesa consultas y devuelve resultados filtrados
- **Servicios de IA**:
  - `openai.ts`: Integración con la API de OpenAI para análisis de consultas
  - `searchHouses.ts`: Lógica para filtrar propiedades según criterios

### 3. Capa de Datos
- **Datos Estáticos**: JSON con información de propiedades (`houses_mexico.json`)
- **Tipos y Modelos**: Definiciones TypeScript para estructuras de datos
  - `houseSearch.ts`: Tipos para criterios de búsqueda
  - `HouseCard/types.ts`: Definición de propiedades inmobiliarias

### 4. Capa de Utilidades
- **Filtros y Helpers**:
  - `houseFilters.ts`: Funciones para filtrar propiedades según criterios


## Mejoras propuestas con más tiempo

Si hubiera contado con más tiempo, enfocaría las mejoras en dos áreas principales:

**Frontend:**
- Separar la lógica de los componentes en custom hooks para mejorar la mantenibilidad y claridad de la UI.
- Ajustar la paleta de colores de la interfaz enfocándola en un público objetivo específico.
- Implementar Server Actions para optimizar la respuesta del buscador y realizar rendering en el servidor.
- Sugerir resultados similares al usuario en caso de no encontrar coincidencias exactas, mostrando propiedades cercanas a sus preferencias (ej. mismas características pero sin jardín o con un estacionamiento menos).
- Implementar testing unitario de componentes usando **React Testing Library**.
- Agregar pruebas E2E automatizadas utilizando **Playwright** para validar el flujo completo de búsqueda y resultados.

**Backend:**
- Migrar la lógica de backend fuera de Next.js hacia un servicio dedicado usando **NestJS** o **Golang**.
- Sustituir el archivo JSON por una base de datos como **PostgreSQL** o **DynamoDB** con índices para mejorar el tiempo de respuesta.
- Ampliar el prompt de OpenAI para considerar más criterios de búsqueda y generar recomendaciones relevantes, incluso cuando no existan coincidencias exactas.


## Cómo Empezar

Primero, ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

Puedes comenzar a editar la página modificando `app/page.tsx`. La página se actualiza automáticamente mientras editas el archivo.

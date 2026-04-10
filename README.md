# Mediterranean Churros - Landing Base Profesional

Base profesional de landing page para una marca premium de churros españoles en Suiza.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- Internacionalizacion con next-intl (es, en, de, fr, it)

## Estructura principal

```bash
app/
	[locale]/
		layout.tsx
		page.tsx
components/
	Navbar.tsx
	LanguageSwitcher.tsx
	HeroSection.tsx
	ProductsSection.tsx
	StorySection.tsx
	EventsSection.tsx
	ContactSection.tsx
	Footer.tsx
	ui/
messages/
	es.json
	en.json
	de.json
	fr.json
	it.json
i18n/
	routing.ts
	navigation.ts
	request.ts
lib/
	i18n.ts
	utils.ts
proxy.ts
```

## Dependencias instaladas

Dependencias runtime:

- next
- react
- react-dom
- framer-motion
- next-intl
- lucide-react
- class-variance-authority
- clsx
- tailwind-merge
- @base-ui/react
- tw-animate-css

Dependencias de desarrollo:

- typescript
- tailwindcss
- @tailwindcss/postcss
- eslint
- eslint-config-next
- @types/node
- @types/react
- @types/react-dom

## Instalacion limpia (sin globales)

Desde la carpeta del proyecto:

```bash
npm install
```

## Arranque

Desarrollo:

```bash
npm run dev
```

Build produccion:

```bash
npm run build
```

Ejecutar build:

```bash
npm run start
```

## Uso rapido

1. Ejecuta `npm run dev`.
2. Abre `http://localhost:3000`.
3. La raiz redirige a `/es`.
4. Cambia idioma con el selector del navbar.
5. Edita textos por idioma en `messages/*.json`.

## Notas

- No requiere instalaciones globales.
- El proyecto esta listo para abrirse y ejecutarse en cualquier equipo con Node.js LTS + npm.

## Eventos dinamicos con Sanity

La seccion de eventos puede leerse desde Sanity para que el cliente actualice ciudades y fechas sin tocar codigo.

### Variables de entorno

Copia `.env.example` a `.env.local` y completa:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-01-01
```

### Esquema usado

- Tipo de documento: `eventLocation`
- Archivo: `sanity/schemaTypes/eventLocationType.ts`
- Configuracion Studio: `sanity.config.ts`
- Ruta Studio: `/studio`

Campos principales:

- `orderRank` (orden en lista)
- `isActive` (activar/desactivar ubicacion)
- `city*` por idioma (`Es`, `En`, `De`, `Fr`, `It`)
- `dateStart` y `dateEnd` (opcional) para formateo automatico segun idioma

### Fallback

Si Sanity no esta configurado o no hay datos, la web usa automaticamente los textos de `messages/*.json`.

### Uso del cliente

1. Arranca el proyecto con `npm run dev`.
2. Abre `http://localhost:3000/studio`.
3. Entra en `Event Location`.
4. Crea/edita ciudades y fechas por idioma.
5. Ajusta `orderRank` para el orden de aparicion y `isActive` para mostrar/ocultar.

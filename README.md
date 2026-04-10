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

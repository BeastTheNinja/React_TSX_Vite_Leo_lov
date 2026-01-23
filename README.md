# Leo-Lov Advokatfirma Hjemmeside

## 📋 Projektbeskrivelse

Dette projekt er en responsiv hjemmeside udviklet til advokatfirmaet Leo-Lov. Hjemmesiden er bygget med React, TypeScript, Vite og React Router, og følger et præcist design udleveret af kunden.

## 🎯 Opgavens Formål

Projektet er udviklet som en skoleopgave med fokus på:
- Implementering af et præcist design i React
- Responsive komponenter der fungerer på mobil, tablet og desktop
- Moderne React-udvikling med TypeScript (.tsx filformat)
- Component-baseret arkitektur
- Client-side routing med React Router

## ✨ Funktionaliteter

### Krav (Implementeret)
- ✅ **Design-trofast implementering** - Siden følger det udleverede Figma design
- ✅ **Funktionel navigation** - Alle links fører til korrekte sektioner på siden
- ✅ **Responsive design** - Fungerer optimalt på mobil, tablet og desktop
- ✅ **Sticky navigation** - Navigationsbar forbliver synlig ved scroll
- ✅ **React Router navigation** - Client-side routing for bedre brugeroplevelse

### Bonus Features
- 🗺️ **Interaktiv Google Maps** - Implementeret i stedet for statisk lokationsbillede
- 🚀 **React Router** - Moderne routing system med 404-håndtering

## 🛠️ Teknologier

- **React 18** - UI framework
- **TypeScript** - Type-safety og bedre developer experience
- **Vite** - Hurtig build tool og development server
- **React Router** - Client-side routing
- **ESLint** - Code linting og quality assurance

## 🚀 Installation og Opsætning

### Forudsætninger
- Node.js (version 16 eller højere)
- npm eller yarn

### Installation
```bash
# Klon repository
git clone https://github.com/BeastTheNinja/React_TSX_Vite_Leo_lov.git

# Naviger til projekt-mappen
cd React_TSX_Vite_Leo_lov

# Installer dependencies
npm install
```

### Kør Development Server
```bash
npm run dev
```
Åbn [http://localhost:5173](http://localhost:5173) i din browser. 

### Build til Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Projektstruktur

```
React_TSX_Vite_Leo_lov/
├── src/
│   ├── components/      # React komponenter
│   ├── pages/           # Sidekomponenter (views)
│   ├── layout/          # Layout komponenter
│   ├── assets/          # Billeder, ikoner, fonts
│   ├── styles/          # CSS/SCSS filer
│   ├── App.tsx          # Hoved App komponent med routing
│   └── main.tsx         # Entry point
├── public/              # Statiske filer
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Design

- **Figma Design**: [Link til Figma](https://www.figma.com/design/6J0w4fSB0SAfk06sHvhC0M/Leo-Lov?node-id=0-1&t=K6wWWxoaTrsCgCej-1)
- **PDF Specifikation**: LeoLov.pdf

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🧩 Hovedkomponenter

- **Header/Navigation** - Sticky navigation med React Router Links
- **Hero Section** - Forside præsentation
- **Om Os** - Information om firmaet
- **Ydelser** - Oversigt over advokatydelser
- **Team** - Præsentation af advokater
- **Kontakt** - Kontaktinformation med Google Maps integration
- **Footer** - Links og juridisk information

## 🛣️ Routing

Applikationen bruger React Router til navigation:

- `/` eller `/hjem` - Forside
- `/advokaterne` - Team sektion
- `/om-leolov` - Om os sektion
- `/kontakt` - Kontakt sektion
- `*` - 404 side for ugyldige routes

Navigation håndteres gennem `<Link>` komponenter fra React Router for optimal performance og brugeroplevelse uden fuld side reload.

## 📝 Kodestandarder

Projektet følger TypeScript best practices og React conventions:
- Funktionelle komponenter med hooks
- Type-safe props interfaces
- Konsistent komponent-struktur
- Semantisk HTML
- Tilgængelighed (a11y) considerations
- React Router best practices

## 🔧 Scripts

```json
{
  "dev": "vite",                    // Start development server
  "build": "tsc -b && vite build",  // Build til production
  "lint": "eslint .",               // Kør linting
  "preview": "vite preview"         // Preview production build
}
```

## 📄 Licens

Dette projekt er licenseret under MIT License - se [LICENSE](LICENSE) filen for detaljer.

## 👨‍💻 Forfatter

**BeastTheNinja**
- GitHub: [@BeastTheNinja](https://github.com/BeastTheNinja)

## 🙏 Anerkendelser

- Leo-Lov advokatfirma for design og opgavespecifikationer
- Skolen for projektvejledning

---

**Aflevering**: Dette projekt er afleveret som en del af React/TypeScript kursus med fokus på responsive design, komponent-arkitektur og moderne routing.

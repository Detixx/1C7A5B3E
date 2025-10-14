# 1C7A5B3E – Frontend mini projekt - Molnár Máté

**Téma:** Laptop-vásárlási segéd (3 oldal: Főoldal, Útmutató, Összehasonlítás)

## Technológiai stack

| Kategória | Technológia |
|-----------|-------------|
| Frontend Framework | Next.js 15.5.5 |
| Programozási nyelv | TypeScript |
| UI Library | React 19.1.0 |
| Package Manager | npm |
| Styling | Tailwind CSS 4 |
| Development Server | Node.js |

## Fejlesztés indítása
```bash
npm install
npm run dev
```
→ http://localhost:3000

## Projekt struktúra
```
app/
├── page.tsx                    # Főoldal
├── guide/
│   ├── page.tsx               # Útmutató
│   └── compare/
│       └── page.tsx           # Összehasonlítás
├── layout.tsx                 # Root layout
└── globals.css                # Globális stílusok
```

## Oldal leírások

### Főoldal (`/`)
- **Hero szekció** nagy címmel és leírással
- **3 kategória kártya** (Belépő, Közép, Haladó)
- **2 navigációs kártya** az útmutatóhoz és összehasonlításhoz
- **Színes ikonok** és hover effektek

### Útmutató (`/guide`)
- **3 fő szekció:** CPU, RAM, Storage
- **Színes fejlécek** minden komponenshez
- **Pro tippek** színes dobozokban
- **Színes pontok** listaelemekhez
- **Ikonok** minden szekcióhoz

### Összehasonlítás (`/guide/compare`)
- **Modern táblázat** minimum vs ajánlott specifikációk
- **Színes badge-ek** (piros minimum, zöld ajánlott)
- **Kiegészítő információk** két oszlopban
- **Responsive táblázat** mobil eszközökhöz

## Célcsoport
Kezdőknek segít gyorsan megérteni a fontos hardver-szempontokat laptop vásárláskor.

## Főbb funkciók
- **Modern dark theme** design
- **Responsive layout** minden eszközön
- **Interaktív elemek** hover effektekkel
- **Színes kategorizálás** könnyebb navigációért
- **Részletes útmutató** minden komponenshez
- **Összehasonlító táblázat** gyors döntéshez

## Fejlesztési információk

### Szerző és fejlesztés
- **Projekt készítő:** Molnár Máté
- **Kód írása:** Teljesen önállóan készítettem és az elöző órai anyagok által lett felépítve az oldal váza és a fő tartalma
- **Design elemek:** AI segítségével optimalizálva és kiegészítve
- **Tartalom alapja:** A feladat által szabadon választott tartalom

### Fejlesztési folyamat
1. **Alapstruktúra** - Next.js projekt létrehozása
2. **Tartalom** - Órai anyagok alapján
3. **Design** - AI segítségével modernizálva
4. **Dokumentáció** - Részletes leírás (az .md ben lévő file-topológiát az AI segítségével csináltam)
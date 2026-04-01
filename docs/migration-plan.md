# Next.js Migration Design

## Understanding Summary

**What is being built:**
- Migration of IDE-themed portfolio from Vite+React to Next.js 15+ App Router with TypeScript
- Preserving fully interactive IDE interface (tabs, file switching, terminal)
- Static portfolio content (projects, about, skills, contact)

**Why it exists:**
- Primary goal: SEO requirements - better search engine discoverability
- Secondary: Balanced performance (SEO + UX)

**Who it is for:**
- Portfolio visitors (recruiters, potential clients)
- Search engines crawling portfolio content

**Key constraints:**
- Must preserve full IDE interactivity
- User is experienced with App Router (RSC, Server Actions)
- Target deployment: Vercel
- Current stack: shadcn/ui, TanStack Query, Tailwind CSS

**Explicit non-goals:**
- No CMS integration (static content)
- No admin panel
- No dynamic content management

---

## Assumptions

| Assumption | Rationale |
|------------|-----------|
| Use Next.js 15+ App Router | User is experienced with RSC patterns |
| Keep shadcn/ui as-is | Components are framework-agnostic |
| Client-side state remains client-side | IDE interactivity requires it |
| Static generation for pages | No dynamic content needed |
| Preserve TanStack Query | Still useful for client-side caching |

---

## Architecture

```
next-app/
├── app/
│   ├── layout.tsx              # Root layout (Server Component)
│   ├── page.tsx                # Home/redirect
│   ├── portfolio/
│   │   ├── layout.tsx          # Portfolio layout (Server)
│   │   └── [file]/             # Dynamic routes for each "file"
│   │       └── page.tsx        # File-specific pages (Server → Client)
│   └── sitemap.ts              # SEO sitemap
├── components/
│   ├── ide/                    # IDE components (Client Components)
│   ├── ui/                     # shadcn/ui (keep as-is)
│   └── IDEShell.tsx            # Main Client Component wrapper
├── lib/
│   └── content/                # Static content files
└── public/
```

### Server/Client Boundary

- **Server Components**: Layout, metadata generation, content routing
- **Client Components**: IDEShell and all IDE components (`'use client'`)

---

## Decision Log

| Decision | Alternatives Considered | Rationale |
|----------|------------------------|-----------|
| **Next.js App Router** | Pages Router, stay on Vite | Experienced with RSC; better SEO with SSG |
| **Hybrid SSG + Client Components** | Full CSR, Full SSR | Balances SEO needs with full IDE interactivity |
| **Client boundary at IDEShell** | Multiple client components | Clean separation; easier state management |
| **React components for content** | MDX, JSON | Already have TypeScript content structure |
| **Remove TanStack Query** | Keep for caching | Static content doesn't need data fetching |
| **Remove React Router** | Keep alongside Next.js | Redundant; Next.js routing is sufficient |
| **Vercel deployment** | Netlify, Static export | Optimal Next.js integration |

---

## Routing Structure

| Route | Renders | SEO |
|-------|---------|-----|
| `/` → `/portfolio/readme` | Redirect | ✅ |
| `/portfolio/readme` | IDE Shell + readme content | ✅ |
| `/portfolio/about` | IDE Shell + about content | ✅ |
| `/portfolio/projects` | IDE Shell + projects content | ✅ |
| `/portfolio/contact` | IDE Shell + contact content | ✅ |

---

## Dependencies Migration

### Add
- `next@^15.x`
- `@next/mdx@^15.x` (optional)

### Remove
- `vite`
- `@vitejs/plugin-react-swc`
- `react-router-dom`

### Keep
- All `@radix-ui/*` packages
- `tailwindcss`, `postcss`, `autoprefixer`
- `framer-motion`, `lucide-react`
- All shadcn/ui components

---

## Implementation Phases

### Phase 1: Setup Next.js
1. Create new Next.js project
2. Install remaining dependencies
3. Copy `components/ui/` (shadcn)
4. Configure Tailwind, PostCSS
5. Setup TypeScript paths

### Phase 2: Content & Data
1. Copy `src/data/projectContent.tsx` → `lib/content/`
2. Create `lib/content/index.ts` with file routing config
3. Copy IDE components → `components/ide/` (add `'use client'`)
4. Create `IDEShell.tsx` client wrapper

### Phase 3: Pages & Routing
1. Create `app/layout.tsx` with metadata
2. Create `app/portfolio/[file]/page.tsx` with SSG
3. Setup `generateStaticParams()`
4. Add sitemap and robots.txt

### Phase 4: Refinement
1. Remove React Router, TanStack Query
2. Update imports
3. Test navigation and IDE interactions
4. SEO audit (Lighthouse, meta tags)

### Phase 5: Deploy
1. Push to GitHub
2. Connect to Vercel
3. Test production build
4. Verify SEO

---

## SEO Strategy

- Metadata generation per route (title, description, OG tags)
- Sitemap with all portfolio routes
- Static generation for fast page loads
- Vercel edge caching

# Pet Jet Website - Turborepo Monorepo

A professional B2B advisory website for Pet Jet, built with Next.js and organized as a Turborepo monorepo.

## 🏗️ Project Structure

```
pet-jet-website/
├── apps/
│   └── web/                    # Next.js frontend application
│       ├── app/               # Next.js App Router pages
│       ├── components/
│       │   ├── ui/           # Generic reusable UI components
│       │   ├── layout/       # Layout components (Navigation, Footer)
│       │   └── *             # Utility components (AnimatedCounter, etc.)
│       ├── public/           # Static assets
│       └── lib/              # Utility functions
├── packages/
│   ├── types/                 # Shared TypeScript types
│   │   └── src/
│   │       └── index.ts      # Form types, GHL API types
│   └── api-client/            # API utilities and clients
│       └── src/
│           ├── ghl.ts        # GoHighLevel API client
│           ├── validation.ts # Form validation utilities
│           └── error-handling.ts # Error handling utilities
├── turbo.json                 # Turborepo configuration
├── package.json               # Root package.json with workspaces
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn 1.22+

### Installation

```bash
# Install dependencies
yarn install
```

### Development

```bash
# Start development server (runs all apps in the monorepo)
yarn dev

# Or run just the web app
cd apps/web
yarn dev
```

The website will be available at http://localhost:3000

### Building

```bash
# Build all packages
yarn build

# Or build just the web app
cd apps/web
yarn build
```

### Linting

```bash
# Lint all packages
yarn lint
```

## 📦 Packages

### @pet-jet/types

Shared TypeScript types used across the monorepo.

**Includes:**
- Form data types (Partnership, Contact, Product Evaluation, Joey Booking)
- GoHighLevel API types
- API response types

### @pet-jet/api-client

Shared API client utilities.

**Includes:**
- GoHighLevel API client (placeholder for Phase 2)
- Form validation utilities
- Error handling utilities

## 🔌 Integrations

### GoHighLevel (Phase 2 - Planned)

All form submissions will be sent to GoHighLevel for lead management.

**Current Status:** API routes are prepared with validation and error handling. GHL client is implemented as a placeholder.

**To Complete:**
1. Add GHL API credentials to `.env`:
   ```
   GHL_API_KEY=your_api_key
   GHL_LOCATION_ID=your_location_id
   ```
2. Implement actual API calls in `/packages/api-client/src/ghl.ts`
3. Test all form submissions

### Strapi CMS (Phase 3 - Planned)

Content management system for dynamic content (blog, case studies, research reports).

**Planned Location:** `/apps/strapi`

## 📝 Form Submissions

### Current Implementation

All forms currently validate data and return success responses but do NOT save to a database.

**Available Forms:**
1. **Partnership Application** - `/api/partnerships`
2. **Contact Form** - `/api/contact`
3. **Product Evaluation** - `/api/product-evaluation`
4. **Joey Booking** - `/api/joey-booking`

### Phase 2 Implementation

Forms will submit directly to GoHighLevel API:

```
User fills form → Next.js validates → GHL API → CRM/Automation
```

## 🎨 Component Structure

### UI Components (`/apps/web/components/ui/`)

Generic, reusable UI components following shadcn/ui patterns:
- Button, Input, Textarea, Label, Select
- Card, Toast, Dialog, Dropdown
- And many more...

### Layout Components (`/apps/web/components/layout/`)

- **Navigation** - Main navigation bar with dropdowns
- **Footer** - Site footer with links and contact info

### Utility Components (`/apps/web/components/`)

- **AnimatedCounter** - Animated number counter
- **FeatureCard** - Card component for features
- **StatCard** - Card component for statistics
- **SectionWrapper** - Consistent section spacing

## 🔧 Development Workflow

### Adding a New Shared Package

1. Create package directory:
   ```bash
   mkdir -p packages/new-package/src
   ```

2. Create `package.json`:
   ```json
   {
     "name": "@pet-jet/new-package",
     "version": "0.0.1",
     "private": true,
     "main": "./src/index.ts"
   }
   ```

3. Add to TypeScript config in `/apps/web/tsconfig.json`:
   ```json
   "@pet-jet/new-package": ["../../packages/new-package/src"]
   ```

### Adding a New Form

1. Define type in `/packages/types/src/index.ts`
2. Create API route in `/apps/web/app/api/`
3. Add validation using `/packages/api-client` utilities
4. Add GHL submission logic (Phase 2)

## 🚢 Deployment

### Current Setup

- **Frontend:** Not yet deployed (pending Vercel setup)
- **Strapi:** Will be deployed to Railway/Render (Phase 3)

### Planned Multi-Environment Strategy

```
Development:
├── Local          → localhost:3000
├── Vercel Preview → Auto PR previews
└── Vercel Staging → staging.petjet.com

Production:
├── Vercel Prod    → petjet.com
└── Strapi         → strapi.petjet.com (Railway/Render)
```

## 🗺️ Roadmap

### ✅ Phase 1: Clean Foundation (COMPLETED)
- [x] Create Turborepo structure
- [x] Move Next.js to `/apps/web`
- [x] Remove Prisma/database
- [x] Create shared packages
- [x] Prepare API routes for GHL
- [x] Restructure components

### 📋 Phase 2: GoHighLevel Integration (Next)
- [ ] Get GHL API credentials
- [ ] Implement GHL API client
- [ ] Connect all forms to GHL
- [ ] Test automation workflows
- [ ] Set up error monitoring

### 📋 Phase 3: Strapi CMS (Planned)
- [ ] Initialize Strapi in `/apps/strapi`
- [ ] Define content types
- [ ] Deploy Strapi to Railway
- [ ] Create Strapi API client
- [ ] Build Insights/Blog pages
- [ ] Implement gated content

### 📋 Phase 4: Advanced Features (Planned)
- [ ] Member portal
- [ ] Video content integration
- [ ] Client logo showcase
- [ ] Testimonials system

### 📋 Phase 5: CI/CD & Polish (Planned)
- [ ] GitHub Actions for Vercel
- [ ] GitHub Actions for Railway
- [ ] SEO optimizations
- [ ] Performance tuning
- [ ] Analytics integration

## 📚 Technologies

- **Turborepo** - Monorepo build system
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **GoHighLevel** - CRM and lead management (Phase 2)
- **Strapi** - Headless CMS (Phase 3)

## 🤝 Contributing

### Code Style

- Use TypeScript for all new code
- Follow existing component patterns
- Keep components small and focused
- Use shared types from `@pet-jet/types`
- Validate forms using `@pet-jet/api-client` utilities

### Commit Messages

- Use clear, descriptive commit messages
- Reference phase numbers when applicable
- Example: "Phase 2: Implement GHL contact submission"

## 📞 Support

For questions or issues, contact the Pet Jet development team.

## 📄 License

Proprietary - Pet Jet © 2025

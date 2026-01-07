# Pet Jet Website

A professional B2B advisory website for Pet Jet, built with Next.js 14 and featuring a modern tech aesthetic with strategic business focus.

## 🏗️ Project Structure

```
pet-jet-website/
└── nextjs_space/              # Next.js application
    ├── app/                   # Next.js App Router pages
    │   ├── api/              # API routes (forms)
    │   ├── about/            # About page
    │   ├── contact/          # Contact page with form
    │   ├── industries/       # Industries page
    │   ├── meet-joey/        # Joey Villani page
    │   ├── partnerships/     # Partnerships page with form
    │   ├── services/         # Services pages
    │   └── ...
    ├── components/
    │   ├── ui/              # Shadcn UI components
    │   ├── layout/          # Navigation, Footer
    │   └── *                # Feature components
    ├── lib/                 # Utility functions
    │   ├── types.ts         # TypeScript types
    │   ├── validation.ts    # Form validation
    │   ├── ghl.ts          # GoHighLevel client (Phase 2)
    │   └── utils.ts        # Utility functions
    ├── public/              # Static assets
    └── prisma/              # Database schema (auto-restored)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn 1.22+

### Installation

```bash
cd nextjs_space
yarn install
```

### Development

```bash
cd nextjs_space
yarn dev
```

The website will be available at http://localhost:3000

### Building

```bash
cd nextjs_space
yarn build
```

### Linting

```bash
cd nextjs_space
yarn lint
```

## 📦 Core Libraries

### /lib/types.ts

TypeScript type definitions for the application.

**Includes:**
- Form data types (Partnership, Contact, Product Evaluation, Joey Booking)
- GoHighLevel API types
- API response types

### /lib/validation.ts

Form validation utilities.

**Includes:**
- Email validation
- Phone validation
- Required field validation
- ValidationException class

### /lib/ghl.ts

GoHighLevel API client (placeholder for Phase 2).

**Includes:**
- GHLClient class with form submission methods
- Helper functions for creating GHL client instance

### /lib/error-handling.ts

Error handling utilities for API routes.

## 🔌 Integrations

### GoHighLevel (Phase 2 - Planned)

All form submissions will be sent to GoHighLevel for lead management.

**Current Status:** API routes are prepared with validation and error handling. GHL client is implemented as a placeholder.

**To Complete:**
1. Add GHL API credentials to `nextjs_space/.env`:
   ```
   GHL_API_KEY=your_api_key
   GHL_LOCATION_ID=your_location_id
   ```
2. Implement actual API calls in `nextjs_space/lib/ghl.ts`
3. Test all form submissions

### Strapi CMS (Separate Repository - Planned)

Content management system for dynamic content (blog, case studies, research reports).

**Architecture:** Strapi will be in a separate repository and deployed independently to Railway. The Next.js app will consume Strapi's REST API.

**Deployment:**
- Next.js: Platform or Vercel
- Strapi: Railway (with PostgreSQL)

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

### UI Components (`nextjs_space/components/ui/`)

Generic, reusable UI components following shadcn/ui patterns:
- Button, Input, Textarea, Label, Select
- Card, Toast, Dialog, Dropdown
- And many more...

### Layout Components (`nextjs_space/components/layout/`)

- **Navigation** - Main navigation bar with dropdowns
- **Footer** - Site footer with links and contact info

### Utility Components (`nextjs_space/components/`)

- **AnimatedCounter** - Animated number counter
- **FeatureCard** - Card component for features
- **StatCard** - Card component for statistics
- **SectionWrapper** - Consistent section spacing

## 🔧 Development Workflow

### Adding a New Page

1. Create page in `nextjs_space/app/[page-name]/page.tsx`
2. Add to navigation in `nextjs_space/components/layout/navigation.tsx`
3. Add metadata and SEO
4. Test responsive design

### Adding a New Form

1. Define type in `nextjs_space/lib/types.ts`
2. Create API route in `nextjs_space/app/api/`
3. Add validation using `nextjs_space/lib/validation.ts` utilities
4. Add GHL submission logic (Phase 2)
5. Create form component
6. Test validation and submission

### Adding New Utilities

1. Add utility functions to `nextjs_space/lib/utils.ts`
2. Add types to `nextjs_space/lib/types.ts`
3. Export and use across the application

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
- [x] Built complete Next.js website with all pages
- [x] Removed Prisma/database (GHL-only approach)
- [x] Created utility libraries in /lib/
- [x] Prepared API routes for GHL
- [x] Reverted from monorepo to standard Next.js structure
- [x] Platform checkpoint and deployment enabled

### 📋 Phase 2: GoHighLevel Integration (Next)
- [ ] Get GHL API credentials
- [ ] Implement GHL API client
- [ ] Connect all forms to GHL
- [ ] Test automation workflows
- [ ] Set up error monitoring

### 📋 Phase 3: Strapi CMS (Planned - Separate Repository)
- [ ] Create new repository for Strapi
- [ ] Initialize Strapi with PostgreSQL
- [ ] Define content types
- [ ] Deploy Strapi to Railway
- [ ] Create Strapi API client in Next.js (`lib/strapi.ts`)
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

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v3** - Styling
- **Shadcn UI** - Component library
- **Framer Motion** - Animations
- **GoHighLevel** - CRM and lead management (Phase 2)
- **Strapi** - Headless CMS (Phase 3, separate repo)

## 🤝 Contributing

### Code Style

- Use TypeScript for all new code
- Follow existing component patterns
- Keep components small and focused
- Use types from `lib/types.ts`
- Validate forms using `lib/validation.ts` utilities

### Commit Messages

- Use clear, descriptive commit messages
- Reference phase numbers when applicable
- Example: "Phase 2: Implement GHL contact submission"

## 📞 Support

For questions or issues, contact the Pet Jet development team.

## 📄 License

Proprietary - Pet Jet © 2025

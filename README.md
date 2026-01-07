# Pet Jet Website

A professional B2B advisory website for Pet Jet - "The Dogfather" advisory firm specializing in pet care business innovation.

## 📦 Project Structure

```
pet-jet-website/
└── nextjs_space/              # Next.js application
    ├── app/                   # Next.js App Router pages
    │   ├── page.tsx          # Homepage
    │   ├── about/            # About Us
    │   ├── services/         # Services (Strategy, Tech, Ops, Product)
    │   ├── industries/       # 8 industry verticals
    │   ├── partnerships/     # Partnership program
    │   ├── meet-joey/        # Meet "The Dogfather"
    │   ├── contact/          # Contact form
    │   └── api/              # API routes (4 forms)
    ├── components/
    │   ├── ui/              # shadcn/ui components
    │   ├── layout/          # Navigation, Footer
    │   └── features/        # Feature-specific components
    ├── lib/
    │   ├── types.ts         # TypeScript types
    │   ├── validation.ts    # Form validation
    │   ├── strapi.ts        # Strapi CMS client
    │   ├── ghl.ts          # GoHighLevel client (Phase 2)
    │   └── error-handling.ts # API error handling
    └── public/              # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Yarn 1.22+

### Installation

```bash
# Install dependencies
cd nextjs_space
yarn install
```

### Development

```bash
# From root
yarn dev

# Or from nextjs_space
cd nextjs_space
yarn dev
```

The website will be available at http://localhost:3000

### Building

```bash
# From root
yarn build

# Or from nextjs_space
cd nextjs_space
yarn build
```

### Production

```bash
# From root
yarn start

# Or from nextjs_space
cd nextjs_space
yarn start
```

## 📝 Features

### Pages
- **Homepage**: Hero section with value proposition
- **About Us**: Company story and mission
- **Services**: 4 service areas (Strategy, Technology, Operations, Product Evaluation)
- **Industries**: 8 vertical markets served
- **Partnerships**: Partnership program and application
- **Meet Joey**: "The Dogfather" profile and booking
- **Contact**: General contact form

### Forms (GHL-Ready)
- Partnership Application (`/api/partnerships`)
- Contact Form (`/api/contact`)
- Product Evaluation Request (`/api/product-evaluation`)
- Joey Booking Request (`/api/joey-booking`)

All forms include:
- ✅ Server-side validation
- ✅ TypeScript type safety
- ✅ Error handling
- ⏳ GoHighLevel integration (Phase 2)

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **TypeScript**: Full type safety
- **Forms**: React Hook Form + Zod
- **Future**: GoHighLevel CRM integration

## 📋 Development Roadmap

### Phase 1: Clean Foundation ✅
- [x] Standard Next.js structure
- [x] All pages implemented
- [x] Form validation and API routes
- [x] Shared utilities (types, validation, error handling)
- [x] Professional B2B design

### Phase 2: GoHighLevel Integration 🔄
- [ ] GHL API credentials
- [ ] Contact creation
- [ ] Opportunity/deal creation
- [ ] Pipeline automation
- [ ] Webhook handlers

### Phase 3: Content Management ✅
- [x] Strapi CMS integration
- [x] Blog/Insights
- [ ] Case studies
- [ ] Dynamic content

## 🌐 Deployment

### Vercel Deployment

1. Connect GitHub repository
2. Set **Root Directory** to `nextjs_space` in project settings
3. Framework Preset: Next.js (auto-detected)
4. Deploy

### Environment Variables

See [VERCEL_ENV_SETUP.md](./VERCEL_ENV_SETUP.md) for detailed instructions on setting up environment variables in Vercel.

**Required Variables:**
- `NEXT_PUBLIC_STRAPI_API_URL` - Strapi CMS API URL
- `NEXT_PUBLIC_STRAPI_API_TOKEN` - Strapi CMS API token

**Optional (Phase 2):**
- `GHL_API_KEY` - GoHighLevel API key
- `GHL_LOCATION_ID` - GoHighLevel location ID

## 📄 License

Proprietary - Pet Jet © 2025

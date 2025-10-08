# Professional Portfolio Website - Navneet Anand Sah

## Overview

This is a professional portfolio website built for Navneet Anand Sah, a Chief Product Officer specializing in SaaS and clean energy products. The application is a single-page portfolio showcasing professional experience, skills, education, patents, and projects. It features a modern, responsive design with dark/light theme support, built as a React SPA with an Express backend.

The portfolio highlights achievements including scaling SaaS products to $1M+ ARR, leading cross-functional teams, and expertise in clean energy technology and AI/ML product development.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query (React Query) for server state management

**UI Component System:**
- shadcn/ui component library with Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Custom theme system supporting light/dark modes via CSS variables
- Component-based architecture with reusable portfolio sections (Hero, About, Experience, Education, Skills, etc.)

**Design System:**
- "New York" style variant from shadcn/ui
- Custom color palette emphasizing clean energy branding (vibrant green accents)
- Inter font family for all typography
- Responsive breakpoints: xs(400px), sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1536px)
- Consistent spacing system using Tailwind utilities

**State Management:**
- React Query for server state and caching
- Local component state with React hooks
- Theme state persisted to localStorage

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- ESM module system
- Development and production build configurations

**API Structure:**
- RESTful endpoint for CV download (`/api/download-cv`)
- Middleware for request logging and error handling
- Static file serving for production builds

**Development Tools:**
- Vite middleware integration for HMR in development
- Custom error overlay plugin for development
- Replit-specific plugins for cartographer and dev banner

### Data Storage

**Database:**
- PostgreSQL configured via Drizzle ORM
- Neon serverless PostgreSQL driver
- Schema defined in `shared/schema.ts` with user table structure
- Migration system using Drizzle Kit

**Current Implementation:**
- In-memory storage fallback (MemStorage class) for user data
- UUID-based user identification
- Portfolio content stored as static data in React components

**Database Schema:**
- Users table with id (UUID), username (unique), and password fields
- Zod validation schemas for type-safe data insertion

### Build & Deployment

**Development:**
- `npm run dev` - Runs development server with HMR
- TSX for TypeScript execution without compilation
- Vite dev server on port configured by environment

**Production:**
- `npm run build` - Compiles both frontend (Vite) and backend (esbuild)
- Frontend builds to `dist/public`
- Backend bundles to `dist/index.js` with ESM format
- `npm start` - Runs production server

**Type Safety:**
- Strict TypeScript configuration
- Path aliases for clean imports (@/, @shared/, @assets/)
- Shared schema between frontend and backend

### Authentication & Authorization

**Current State:**
- User schema defined but authentication not implemented
- Session management setup with connect-pg-simple (PostgreSQL session store)
- Password storage structure in place (needs hashing implementation)

**Future Implementation:**
- Session-based authentication with Express sessions
- Protected routes for admin/edit functionality
- User registration and login flows

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives (accordion, dialog, dropdown, popover, tooltip, etc.)
- **shadcn/ui**: Pre-built component system built on Radix UI
- **Lucide React**: Icon library for UI elements
- **React Icons**: Additional icon sets (specifically Simple Icons for tech stack logos)

### Styling & Design Tools
- **Tailwind CSS**: Utility-first CSS framework with PostCSS
- **class-variance-authority**: Type-safe variant system for components
- **clsx & tailwind-merge**: Utility for conditional class merging

### State Management & Data Fetching
- **TanStack React Query**: Server state management with caching
- **React Hook Form**: Form state management with Zod validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Backend Infrastructure
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL support
- **Neon Serverless**: Serverless PostgreSQL driver
- **Express.js**: Web server framework
- **connect-pg-simple**: PostgreSQL session store for Express

### Development Tools
- **Vite**: Build tool with HMR and optimized production builds
- **esbuild**: Fast JavaScript bundler for backend compilation
- **tsx**: TypeScript execution for development
- **@replit/vite-plugin-***: Replit-specific development plugins

### Utilities
- **date-fns**: Date manipulation and formatting
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel/slider functionality
- **input-otp**: OTP input component
- **vaul**: Drawer component library
- **nanoid**: Unique ID generation
- **zod**: Runtime type validation and schema definition

### Database & Migration
- **drizzle-kit**: Database migration tool
- **drizzle-zod**: Zod schema generation from Drizzle schemas

### Assets & Content
- Portfolio content sourced from attached text files and markdown documents
- Profile image stored in `attached_assets/` directory
- Design guidelines documented in `design_guidelines.md`
- Reference design based on cvictory.framer.website structure
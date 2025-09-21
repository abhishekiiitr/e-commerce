# eCommerce Dashboard

A modern, responsive eCommerce dashboard built with React 19, TypeScript, and Tailwind CSS v4. Features a dynamic dark/light theme system, Redux state management, and pixel-perfect UI components.

## 🚀 Live Demo

**Deployed Application**: https://e-commerce-three-lilac-62.vercel.app/

## ✨ Features

- **React 19** with latest features and optimizations
- **TypeScript 5** for type safety and better developer experience
- **Tailwind CSS v4** with CSS variables and custom design tokens
- **Redux Toolkit** for centralized state management
- **Dynamic Theming** - Light/Dark/System preference modes with persistence
- **Responsive Design** - Mobile-first approach with breakpoint optimization
- **shadcn-style Components** - Reusable UI primitives with variant support
- **Theme-aware Assets** - Icons automatically switch between light/dark variants
- **Modern Routing** - React Router v7 with nested layouts

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript 5
- **Styling**: Tailwind CSS v4, CSS Variables
- **State**: Redux Toolkit, React Redux
- **Routing**: React Router DOM v7
- **Build Tool**: Vite 7
- **Package Manager**: pnpm
- **Deployment**: Vercel

## 📦 Installation

Make sure you have [pnpm](https://pnpm.io/) installed on your system.

```bash
# Clone the repository
git clone https://github.com/abhishekiiitr/e-commerce.git
cd e-commerce/juspay-ui-developer

# Install dependencies
pnpm install
```

## 🚀 Development

```bash
# Start the development server
pnpm dev

# Open http://localhost:5173 in your browser
```

## 🏗️ Build & Deploy

```bash
# Type check
pnpm run build

# Preview production build locally
pnpm preview

# Lint code
pnpm lint
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── layout/          # Layout components (Navbar, Sidebar, Rightbar)
│   └── ui/              # shadcn-style primitives (Button, Card, etc.)
├── constants/           # Shared constants and configurations
│   ├── orders.ts        # Order data for OrderList
│   └── ui.ts           # UI sizing and styling tokens
├── pages/              # Route components
│   ├── Home.tsx        # Dashboard home page
│   └── OrderList.tsx   # Orders management page
├── store/              # Redux store and slices
│   ├── store.ts        # Store configuration
│   └── themeSlice.ts   # Theme state management
├── utils/              # Utility functions
│   ├── assets.ts       # Theme-aware asset helpers
│   └── theme.ts        # Theme hooks and utilities
└── lib/                # External library configurations
    └── utils.ts        # Class merging utilities (cn)
```

## 🎨 Theme System

The application features a sophisticated theming system:

- **Light Mode**: Clean, modern interface with soft grays and blues
- **Dark Mode**: Rich dark theme with proper contrast ratios
- **System Mode**: Automatically follows OS preference
- **Persistence**: Theme choice saved to localStorage
- **Asset Switching**: Icons automatically use light/dark variants

## 🧩 Components

### Layout Components
- **Navbar**: Breadcrumb navigation with search and theme toggle
- **Sidebar**: Collapsible navigation with favorites and pages
- **Rightbar**: Notifications, activities, and contacts panel

### UI Primitives
- **Button**: Multiple variants (default, secondary, outline, ghost, link)
- **Card**: Flexible card layouts with header/content sections
- **Icon**: Consistent sizing with theme-aware asset loading

## 📱 Responsive Design

- **Adaptive Layout**: Sidebar and rightbar collapse on smaller screens
- **Touch Friendly**: Optimized for touch interactions

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration with Tailwind v4 plugin
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration (v4)
- `package.json` - Dependencies and scripts

## 🤝 Contributing

This project follows modern React and TypeScript best practices:

- **Type Safety**: Strict TypeScript configuration
- **Component Structure**: Modular, reusable components
- **State Management**: Centralized Redux patterns
- **Styling**: Utility-first CSS with design tokens
- **Asset Management**: Organized public assets with theme variants


## 🙏 Acknowledgments

- Built with modern React 19 features
- Inspired by contemporary dashboard designs
- Uses Tailwind CSS v4 design tokens
- Optimized for performance and accessibility

# Bhavesh Chainani - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for speed and SEO
- **Interactive**: Smooth scrolling, hover effects, and animations
- **TypeScript**: Full TypeScript support for better development experience

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Static export ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Quick Start

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
# or use the helper script
./start-dev.sh
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
# or use the helper script
./build-production.sh
```

This will create an optimized static export in the `out` directory.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── Header.tsx        # Navigation
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Proficiencies.tsx # Skills section
│   ├── Projects.tsx      # Projects showcase
│   ├── OtherPlatforms.tsx# Social platforms
│   ├── Contact.tsx       # Contact information
│   ├── Footer.tsx        # Footer
│   └── ScrollToTop.tsx   # Scroll to top button
├── public/               # Static assets
│   └── assets/          # Images and icons
└── Configuration files
```

## Deployment

The project is configured for static export and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## License

This project is open source and available under the [MIT License](LICENSE).
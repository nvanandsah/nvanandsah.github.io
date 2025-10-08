# Navneet Anand Sah - Portfolio Website

A professional portfolio website showcasing product leadership experience, patents, publications, and technical projects in clean energy and SaaS.

## 🌟 Features

- **Responsive Design**: Custom breakpoint at 400px with split-screen layout (30/70) on larger screens
- **Dark Mode**: Built-in theme toggle with smooth transitions
- **Interactive Sections**:
  - Hero section with professional summary
  - Experience timeline with multiple roles
  - Education and certifications
  - Patents with external links to Google Patents
  - Skills and tech stack with brand logos
  - Projects with GitHub links
  - IEEE publications
  - Contact information
- **CV Download**: One-click resume download functionality
- **Modern Tech Stack**: React + TypeScript + Tailwind CSS + shadcn/ui

## 🚀 Live Demo

Visit the live portfolio: [Your GitHub Pages URL will be here after deployment]

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: Lucide React, React Icons
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/nvanandsah/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:5000](http://localhost:5000) in your browser

## 🏗️ Build Static Site for GitHub Pages

Generate static files for deployment:

```bash
./build-static.sh
```

Or manually:

```bash
vite build --config vite.config.static.ts
cp public/.nojekyll dist/
```

The static files will be generated in the `dist` directory.

## 🚀 Deploy to GitHub Pages

### Method 1: Automatic Deployment with GitHub Actions (Recommended)

1. **IMPORTANT: Configure GitHub Pages Settings**
   - Go to your repository on GitHub
   - Navigate to **Settings → Pages**
   - Under "Build and deployment":
     - **Source**: Select "GitHub Actions" (NOT "Deploy from a branch")
   - Save the settings

2. **Update the base path** (if needed):
   - If your repository is named `portfolio`, the current config is correct (`base: '/portfolio/'`)
   - If your repository is `username.github.io`, change `base: '/portfolio/'` to `base: '/'` in `vite.config.static.ts`

3. Push your code to GitHub:
```bash
git add .
git commit -m "Add portfolio website"
git push origin main
```

4. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
   - Install dependencies
   - Build the static site using `vite.config.static.ts`
   - Deploy to GitHub Pages

Your site will be available at `https://[username].github.io/[repository-name]/`

**Troubleshooting:**
- If you see the README instead of your portfolio, ensure GitHub Pages Source is set to "GitHub Actions", NOT "Deploy from a branch"
- Check the Actions tab for deployment status
- Wait a few minutes after deployment completes for changes to appear

### Method 2: Manual Deployment

1. Build the static site:
```bash
./build-static.sh
```

2. Deploy the `dist` folder to GitHub Pages:
   - Option A: Use `gh-pages` branch
   - Option B: Push `dist` contents to a separate branch and configure in repository settings

### Preview Build Locally

After building, preview the static site:

```bash
npx vite preview --config vite.config.static.ts
```

## 📁 Project Structure

```
portfolio/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities
│   │   └── App.tsx        # Root component
│   └── index.html         # HTML entry point
├── attached_assets/       # Static assets (images, logos)
├── public/                # Public assets
└── README.md             # This file
```

## 🎨 Design

The portfolio design is inspired by modern, minimalist portfolio websites with:
- Clean typography using Inter font family
- Green accent color (#4ade80)
- Dark theme optimized for readability
- Smooth animations and transitions
- Mobile-first responsive approach

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Navneet Anand Sah**
- LinkedIn: [navneetanandsah](https://www.linkedin.com/in/navneetanandsah/)
- GitHub: [@nvanandsah](https://github.com/nvanandsah)
- Email: navneetanandsah@gmail.com

## 🤝 Contributing

This is a personal portfolio website, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

---

Built with ❤️ using React and Tailwind CSS

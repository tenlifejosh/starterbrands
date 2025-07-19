# Starter Brand Kit Website

A professional React website for the Starter Brand Kit business, offering complete branding solutions for entrepreneurs.

## 🚀 Live Demo

Visit the live website: [Your GitHub Pages URL will be here]

## 📋 Features

- **Modern React Application** - Built with Vite for fast development and optimized builds
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Professional UI** - Clean, modern design with smooth animations
- **Complete Business Sections**:
  - Hero section with pricing cards
  - Services overview (Brand Kit, Website, Google Setup)
  - Social Media Packages
  - À La Carte services with detailed modals
  - Client testimonials
  - About section with founder story
  - Portfolio showcase
  - FAQ section
  - Contact forms and modals

## 🛠 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Custom UI Components** - Reusable button, card, and badge components

## 📁 Project Structure

```
starter-brand-kit/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # Reusable UI components
│   │   └── ui/           # Base UI components (Button, Card, Badge)
│   ├── App.jsx           # Main application component
│   ├── App.css           # Custom styles
│   └── main.jsx          # Application entry point
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions deployment
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/starter-brand-kit.git
   cd starter-brand-kit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Visit `http://localhost:5173`
   - The site will automatically reload when you make changes

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🌐 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Create a new GitHub repository**
   - Go to GitHub and create a new repository
   - Name it something like `starter-brand-kit` or `your-business-website`

2. **Upload your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** tab
   - Scroll down to **Pages** section
   - Under **Source**, select **GitHub Actions**

4. **Automatic Deployment**
   - The GitHub Action will automatically run when you push to the `main` branch
   - Your site will be available at: `https://yourusername.github.io/your-repo-name`
   - Updates happen automatically when you push new changes

### Manual Deployment (Alternative)

If you prefer manual deployment:

1. Build the project: `npm run build`
2. Go to repository **Settings** → **Pages**
3. Select **Deploy from a branch**
4. Choose **gh-pages** branch (you'll need to create this)
5. Upload the contents of the `dist/` folder to the `gh-pages` branch

## 📝 Customization

### Content Updates

- **Business Information**: Update contact details in `src/App.jsx`
- **Services & Pricing**: Modify the services object and pricing cards
- **Images**: Replace images in `src/assets/` with your own
- **Colors & Styling**: Update the Tailwind classes or `src/App.css`

### Key Sections to Customize

1. **Hero Section** - Update headline, pricing, and call-to-action
2. **Services** - Modify the three main service pillars
3. **À La Carte Services** - Update the services object with your offerings
4. **Testimonials** - Replace with your client testimonials
5. **About Section** - Update founder story and social links
6. **Contact Information** - Update email, phone, and business details

## 📧 Contact Form Setup

The contact forms currently use `mailto:` links. For production, consider:

- **Formspree** - Easy form handling service
- **Netlify Forms** - If hosting on Netlify
- **EmailJS** - Client-side email service
- **Custom Backend** - For advanced form handling

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint (if configured)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m "Add feature"`
5. Push: `git push origin feature-name`
6. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you need help with deployment or customization:

1. Check the GitHub Issues for common problems
2. Review the Vite documentation: https://vitejs.dev/
3. Check React documentation: https://react.dev/
4. For business inquiries: hello@starterbrandkit.com

---

**Built with ❤️ for entrepreneurs who want to look professional from day one.**


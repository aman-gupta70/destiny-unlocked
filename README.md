# Astero - Numerology Landing Page

A modern, responsive landing page for a personalized numerology consultation service.

## Features

- 🌟 **Hero Section** - Eye-catching cosmic-themed hero with a call-to-action
- 🔍 **Problems Section** - Highlights common life challenges numerology can help with
- ✨ **Benefits Section** - Showcases what's included in a free numerology report
- 🛠️ **How It Works** - Explains the 4-step process of getting a numerology report
- 👨‍💼 **About Your Guide** - Introduces the numerology consultant with a professional photo
- ⭐ **Testimonials** - Carousel of client testimonials
- ❓ **FAQ** - Accordion-style frequently asked questions
- 📧 **Lead Dialog** - Popup form to request a free report, connected to Formspree
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 💜 **Cosmic Theme** - Beautiful gradient background with sacred geometry vibes

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TanStack Router** - Routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Radix UI** - Accessible UI components (Accordion, Popover, Calendar)
- **Formspree** - Form submission handling
- **Date-fns** - Date formatting

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aman-gupta70/astero-numerology.git
   cd astero-numerology
   ```

2. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   bun run dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and go to `http://localhost:5173`

## Customization

### Form Submission

To connect the form to your own Formspree account:

1. Go to [Formspree](https://formspree.io/) and create a free account
2. Create a new form and get your form ID
3. Update the Formspree URL in `src/components/LeadDialog.tsx`:
   ```typescript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```

### Contact Information

Update the contact details in `src/routes/index.tsx`:
- Email address
- Phone number
- Location
- Social media links (Facebook, Instagram, LinkedIn, Twitter)

### Content

All content is in `src/routes/index.tsx`, including:
- Hero text
- Problems
- Benefits
- How it works
- About section
- Testimonials
- FAQs

## Build and Deploy

### Build for Production

```bash
bun run build
# or
npm run build
```

### Preview Production Build

```bash
bun run preview
# or
npm run preview
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Name**: Aman Kumar Gupta
- **Email**: gupta.aman7079@gmail.com
- **Phone**: +91 7079372324
- **Location**: Mumbai, India
- **LinkedIn**: [linkedin.com/in/aman-kumar-gupta-42b995290](https://www.linkedin.com/in/aman-kumar-gupta-42b995290)

# Fluid Dynamics — Orange Splash 🌊⚡

[![Live Demo](https://img.shields.io/badge/Live%20Demo-mkfuel.vercel.app-ff8c00.svg?style=for-the-badge&logo=vercel)](https://mkfuel.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black.svg?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB.svg?logo=react&logoColor=black)](https://react.dev/)
[![WebGL](https://img.shields.io/badge/WebGL-Fluid%20Simulation-990000.svg?logo=webgl&logoColor=white)](https://www.khronos.org/webgl/)
[![Status: Production](https://img.shields.io/badge/Status-Live%20on%20Vercel-success.svg)]()

> **Real-Time Interactive Navier-Stokes WebGL Fluid Physics Simulation.**  
> High-performance creative coding experience featuring real-time dye advection, velocity splats, dynamic color controls, and seamless iframe embedding.

👉 **[Experience the Live Simulation](https://mkfuel.vercel.app)**

---

## ✨ Features

- **60 FPS Real-time Fluid Physics:** Solves incompressible Navier-Stokes fluid flow equations on the GPU in real-time.
- **Interactive Cursor & Touch Splats:** Interactive velocity propagation, vorticity confinement, and dye dispersion reacting directly to user pointer movements.
- **Glassmorphic UI Control Panel:**
  - **Splat Color Picker:** Real-time hex color customization with debounced state synchronization.
  - **Colorful Mode:** Dynamic multi-hue procedural color cycling.
- **Iframe Embeddable Route (`/fluid`):** Dedicated route allowing zero-chrome embedding of the simulation into external web apps, portfolios, and design projects via query parameters (`?colorful=true&color=ff8c00`).
- **Modern Web Stack:** Built with Next.js 15 App Router, React 19, Tailwind CSS v4, and Motion.

---

## 📁 Project Structure

```text
mkfuel/
├── app/
│   ├── fluid/
│   │   └── page.tsx        # Zero-chrome embeddable fluid canvas route
│   ├── globals.css         # Tailwind v4 styling
│   ├── layout.tsx          # Root Next.js layout
│   └── page.tsx            # Main application layout with controls & branding
├── components/
│   └── FluidCanvas.tsx     # WebGL fluid simulation component
├── hooks/
│   └── use-mobile.ts       # Responsive viewport hook
├── lib/
│   └── utils.ts            # Utility functions
├── .env.example            # Environment template
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies
├── LICENSE                 # MIT License
└── README.md               # Project documentation
```

---

## 🚀 Quickstart

### 1. Installation

```bash
git clone https://github.com/MirhazarKhan/mkfuel.git
cd mkfuel

# Install dependencies
npm install
```

### 2. Development

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build

```bash
npm run build
npm run start
```

---

## 🌐 Embedding in External Projects

You can embed the fluid simulation directly into your own site using an `iframe`:

```html
<!-- Orange Splash (Default) -->
<iframe 
  src="https://mkfuel.vercel.app/fluid?color=ff8c00&colorful=false"
  style="width: 100%; height: 100vh; border: none;"
></iframe>

<!-- Colorful Procedural Mode -->
<iframe 
  src="https://mkfuel.vercel.app/fluid?colorful=true"
  style="width: 100%; height: 100vh; border: none;"
></iframe>
```

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Frontend Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Graphics & Shaders:** WebGL Fluid Dynamics (Navier-Stokes solver)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🤝 Contributing

Contributions, issues, and feature suggestions are welcome!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/FluidImprovement`)
3. Commit your Changes (`git commit -m 'Add new fluid dispersion parameter'`)
4. Push to the Branch (`git push origin feature/FluidImprovement`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

## 👨‍💻 Author

**Mirhazar Khan**  
*Senior 3D & Creative Web Engineer | AI Systems & Procedural Graphics Researcher*  
- **GitHub:** [@MirhazarKhan](https://github.com/MirhazarKhan)  
- **Website:** [mirhazarkhan.com](https://mirhazarkhan.com)

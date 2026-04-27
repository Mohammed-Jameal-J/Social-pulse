# SocialPulse — AI-Powered SEO Platform UI

A production-grade React landing page inspired by SEMrush's layout and design quality.

## Project Structure

```
socialpulse/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              ← React entry point
    ├── App.jsx               ← Root component — assembles all sections
    ├── styles/
    │   └── tokens.css        ← Design tokens, CSS variables, global animations
    ├── data/
    │   └── constants.js      ← All static data (nav, tools, plans, stats, etc.)
    ├── components/
    │   ├── Button.jsx        ← Reusable button (primary/secondary/ghost/white/dark)
    │   ├── Logo.jsx          ← Animated SocialPulse logo/wordmark
    │   ├── Navbar.jsx        ← Fixed nav with dropdown mega-menu
    │   ├── AuthModal.jsx     ← Register/Login modal — Firebase-ready
    │   ├── VideoModal.jsx    ← Fullscreen video lightbox
    │   └── Footer.jsx        ← Full footer with link columns
    └── sections/
        ├── HeroSection.jsx          ← Cinematic video hero with dashboard card
        ├── StatsSection.jsx         ← Ticker + platform stats
        ├── ProductSection.jsx       ← Tabbed video showcase (SEO Audit, Rank, AI, Content)
        ├── ToolsSection.jsx         ← 12-tool animated grid
        ├── AIVisibilitySection.jsx  ← AI Visibility feature split
        ├── TestimonialsSection.jsx  ← Customer reviews + brand logos
        ├── PricingSection.jsx       ← 4-tier pricing with annual toggle
        └── CTASection.jsx           ← Full-bleed video CTA
```

---

## Quick Start

```bash
cd socialpulse
npm install
npm run dev
```

Open http://localhost:5173

---

## 🔥 Connecting Firebase Auth

### 1. Install Firebase
```bash
npm install firebase
```

### 2. Add your Firebase config
Open `src/components/AuthModal.jsx` and replace the commented block at the top:

```js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_AUTH_DOMAIN",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MSG_SENDER_ID",
  appId:             "YOUR_APP_ID",
};

const app            = initializeApp(firebaseConfig);
const auth           = getAuth(app);
const googleProvider = new GoogleAuthProvider();
```

### 3. Replace stub calls in handleSubmit and handleGoogle
The `AuthModal.jsx` file already has the real Firebase calls commented in — just uncomment them and delete the `await new Promise(...)` stubs.

### 4. Enable providers in Firebase Console
- Authentication → Sign-in method → Enable **Email/Password**
- Authentication → Sign-in method → Enable **Google**

---

## 🎬 Adding Your Own Videos

Replace the placeholder video URLs in these files:

| File | Variable | Purpose |
|------|----------|---------|
| `HeroSection.jsx` | `HERO_VIDEO` | Hero background |
| `ProductSection.jsx` | `VIDEOS.audit/rank/ai/content` | Product feature tabs |
| `CTASection.jsx` | `CTA_VIDEO` | CTA section background |
| `VideoModal.jsx` | `DEMO_VIDEO_URL` | Fullscreen demo lightbox |

**Recommended approach:**
1. Upload `.mp4` files to Firebase Storage
2. Set them to public read access
3. Copy the download URL and paste it in

---

## 🎨 Customising Design

All colours, fonts, radii, and shadows live in `src/styles/tokens.css` as CSS variables.

Key brand colours:
- `--sp-blue: #0057FF` — primary blue
- `--sp-violet: #5B21FF` — secondary purple
- `--sp-cyan: #00D4FF` — accent cyan
- `--sp-green: #00C48C` — success green

Fonts (loaded from Google Fonts):
- Display: **Syne** (headings)
- Body: **Instrument Sans** (UI text)

---

## 📦 Build for Production

```bash
npm run build
```

Output goes to `dist/`. Deploy to Firebase Hosting, Vercel, or Netlify.

### Firebase Hosting deploy
```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # set public dir to "dist"
npm run build
firebase deploy
```
